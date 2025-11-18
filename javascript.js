(function () {
    const STORAGE_KEY = 'joggerData';
    const USER_ID_KEY = 'joggerUserId';
    const DEFAULT_CATEGORY = 'Other';
    const ITEM_OPTIONS = [
        'Sofa',
        'Dining table',
        'Chairs',
        'Coffee table',
        'Television',
        'Bed frame',
        'Mattress',
        'Dresser',
        'Nightstand',
        'Lamp',
        'Refrigerator',
        'Microwave',
        'Stove',
        'Dish set',
        'Cookware',
        'Toaster',
        'Washer',
        'Dryer',
        'Shower curtain',
        'Towels',
        'Toiletries kit'
    ];

    document.addEventListener('DOMContentLoaded', () => {
        const roomForm = document.getElementById('room-form');
        const roomCategorySelect = document.getElementById('room-category');
        const roomNameInput = document.getElementById('room-name');
        const roomsGrid = document.getElementById('rooms-grid');
        const clearAllButton = document.getElementById('clear-all');
        const userIdDisplay = document.getElementById('user-id');
        const shareLinkDisplay = document.getElementById('share-link');
        const modalTriggers = document.querySelectorAll('.help-trigger');
        const modals = document.querySelectorAll('.modal-overlay');
        let activeModal = null;
        let lastFocus = null;

        modalTriggers.forEach((trigger) => {
            if (!(trigger instanceof HTMLElement)) return;
            trigger.addEventListener('click', () => {
                const targetId = trigger.dataset.modalTarget;
                if (targetId) {
                    openModal(targetId, trigger);
                }
            });
        });

        modals.forEach((modal) => {
            if (!(modal instanceof HTMLElement)) return;
            modal.addEventListener('click', (event) => {
                if (event.target === modal || (event.target instanceof HTMLElement && event.target.hasAttribute('data-close-modal'))) {
                    closeModal();
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && activeModal) {
                closeModal();
            }
        });

        const state = loadState();
        const userId = loadUserId();
        renderShareDetails(userId);
        renderRooms(state.rooms);

        roomForm?.addEventListener('submit', (event) => {
            event.preventDefault();
            const category = roomCategorySelect?.value.trim();
            const name = roomNameInput?.value.trim();
            if (!category) return;

            state.rooms.push({
                id: generateId(),
                category,
                name,
                items: []
            });
            saveState(state);
            renderRooms(state.rooms);
            if (roomCategorySelect) {
                roomCategorySelect.value = '';
                roomCategorySelect.focus();
            }
            if (roomNameInput) {
                roomNameInput.value = '';
            }
        });

        clearAllButton?.addEventListener('click', () => {
            if (!state.rooms.length) return;
            const confirmed = window.confirm('Clear all rooms and items?');
            if (!confirmed) return;
            state.rooms = [];
            saveState(state);
            renderRooms(state.rooms);
        });

        roomsGrid?.addEventListener('click', (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) return;

            const roomId = target.closest('[data-room-id]')?.getAttribute('data-room-id');
            if (!roomId) return;
            const room = state.rooms.find((r) => r.id === roomId);
            if (!room) return;

            if (target.dataset.action === 'remove-item') {
                const item = target.dataset.item;
                room.items = room.items.filter((entry) => entry !== item);
                saveState(state);
                renderRooms(state.rooms);
                return;
            }

            if (target.dataset.action === 'remove-room') {
                state.rooms = state.rooms.filter((r) => r.id !== roomId);
                saveState(state);
                renderRooms(state.rooms);
                return;
            }
        });

roomsGrid?.addEventListener('submit', (event) => {
            const form = event.target;
            if (!(form instanceof HTMLFormElement) || !form.classList.contains('item-form')) return;
            event.preventDefault();

            const roomId = form.closest('[data-room-id]')?.getAttribute('data-room-id');
            if (!roomId) return;
            const room = state.rooms.find((r) => r.id === roomId);
            if (!room) return;

            const selectedItems = Array.from(
                form.querySelectorAll('input[type="checkbox"][name="item-option"]')
            )
                .filter((input) => input instanceof HTMLInputElement && input.checked && !input.disabled)
                .map((input) => input instanceof HTMLInputElement ? input.value : '')
                .filter((value) => value && !room.items.includes(value));

            if (!selectedItems.length) return;

            room.items.push(...selectedItems);
            saveState(state);
            renderRooms(state.rooms);
        });

        roomsGrid?.addEventListener('change', (event) => {
            const target = event.target;
            if (!(target instanceof HTMLInputElement)) return;

            const form = target.closest('form.item-form');
            if (!form) return;

            if (target.dataset.action === 'select-all-items') {
                const checkboxes = getVisibleSelectableCheckboxes(form);
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = target.checked;
                });
                updateSelectAllState(form);
                return;
            }

            if (target.name === 'item-option') {
                updateSelectAllState(form);
            }
        });

        roomsGrid?.addEventListener('input', (event) => {
            const target = event.target;
            if (!(target instanceof HTMLInputElement)) return;
            const form = target.closest('form.item-form');
            if (!form) return;

            if (target.classList.contains('item-search-input')) {
                filterItemOptions(form, target.value);
            }
        });

        function openModal(modalId, trigger) {
            const modal = document.getElementById(modalId);
            if (!(modal instanceof HTMLElement)) return;
            activeModal = modal;
            lastFocus = trigger;
            modal.hidden = false;
            const card = modal.querySelector('.modal-card');
            if (card instanceof HTMLElement) {
                card.setAttribute('tabindex', '-1');
                card.focus();
            }
        }

        function closeModal() {
            if (!activeModal) return;
            activeModal.hidden = true;
            if (lastFocus instanceof HTMLElement) {
                lastFocus.focus();
            }
            activeModal = null;
        }

        function filterItemOptions(form, term) {
            const normalized = term.trim().toLowerCase();
            const options = Array.from(form.querySelectorAll('.checkbox-option[data-item]'));
            let enabledVisible = 0;
            let checkedVisible = 0;

            options.forEach((option) => {
                if (!(option instanceof HTMLElement)) return;
                const text = option.dataset.item?.toLowerCase() ?? '';
                const match = !normalized || text.includes(normalized);
                option.hidden = !match;
                const checkbox = option.querySelector('input[type="checkbox"]');
                if (match && checkbox instanceof HTMLInputElement && !checkbox.disabled) {
                    enabledVisible += 1;
                    if (checkbox.checked) {
                        checkedVisible += 1;
                    }
                }
            });

            const selectAll = form.querySelector('input[data-action="select-all-items"]');
            const selectAllRow = selectAll?.closest('.select-all-row');
            if (selectAllRow instanceof HTMLElement) {
                selectAllRow.hidden = normalized && enabledVisible === 0;
            }
            if (selectAll instanceof HTMLInputElement) {
                selectAll.disabled = enabledVisible === 0;
                selectAll.checked = enabledVisible > 0 && checkedVisible === enabledVisible;
            }
        }

        function getVisibleSelectableCheckboxes(form) {
            const options = Array.from(form.querySelectorAll('.checkbox-option[data-item]'));
            const checkboxes = [];
            options.forEach((option) => {
                if (!(option instanceof HTMLElement) || option.hidden) return;
                const checkbox = option.querySelector('input[type="checkbox"][name="item-option"]');
                if (checkbox instanceof HTMLInputElement && !checkbox.disabled) {
                    checkboxes.push(checkbox);
                }
            });
            return checkboxes;
        }

        function updateSelectAllState(form) {
            const selectableCheckboxes = getVisibleSelectableCheckboxes(form);
            const selectAll = form.querySelector('input[data-action="select-all-items"]');
            if (!(selectAll instanceof HTMLInputElement)) return;
            selectAll.disabled = selectableCheckboxes.length === 0;
            selectAll.checked =
                selectableCheckboxes.length > 0 &&
                selectableCheckboxes.every((checkbox) => checkbox.checked);
        }

        function renderRooms(rooms) {
            if (!roomsGrid) return;
            roomsGrid.innerHTML = '';

            if (!rooms.length) {
                const emptyState = document.createElement('p');
                emptyState.className = 'helper-text';
                emptyState.textContent = 'No rooms yet. Add a room to get started.';
                roomsGrid.appendChild(emptyState);
                return;
            }

            rooms.forEach((room) => {
                const card = document.createElement('article');
                card.className = 'room-card';
                card.setAttribute('role', 'listitem');
                card.dataset.roomId = room.id;

                const titleRow = document.createElement('div');
                titleRow.className = 'room-title';
                const heading = document.createElement('h4');
                heading.className = 'room-name';
                heading.textContent = formatRoomTitle(room);
                const categoryBadge = document.createElement('span');
                categoryBadge.className = 'room-category';
                categoryBadge.textContent = room.category || DEFAULT_CATEGORY;
                const removeRoom = document.createElement('button');
                removeRoom.className = 'remove-item';
                removeRoom.dataset.action = 'remove-room';
                removeRoom.type = 'button';
                removeRoom.textContent = 'Remove room';
                titleRow.append(heading, categoryBadge, removeRoom);

                const form = document.createElement('form');
                form.className = 'item-form';
                const label = document.createElement('label');
                label.className = 'sr-only';
                label.textContent = 'Select items to add';

                const dropdown = document.createElement('details');
                dropdown.className = 'item-dropdown';
                const summary = document.createElement('summary');
                summary.className = 'dropdown-toggle';
                summary.textContent = 'Choose items';
                dropdown.appendChild(summary);

                const checkboxList = document.createElement('div');
                checkboxList.className = 'checkbox-list';

                const searchRow = document.createElement('div');
                searchRow.className = 'item-search';
                const searchLabel = document.createElement('label');
                searchLabel.className = 'sr-only';
                searchLabel.setAttribute('for', `item-search-${room.id}`);
                searchLabel.textContent = 'Search common items';
                const searchInput = document.createElement('input');
                searchInput.type = 'search';
                searchInput.id = `item-search-${room.id}`;
                searchInput.className = 'item-search-input';
                searchInput.placeholder = 'Search items...';
                searchRow.append(searchLabel, searchInput);
                checkboxList.appendChild(searchRow);

                const selectAllLabel = document.createElement('label');
                selectAllLabel.className = 'checkbox-option select-all-row';
                const selectAllCheckbox = document.createElement('input');
                selectAllCheckbox.type = 'checkbox';
                selectAllCheckbox.dataset.action = 'select-all-items';
                selectAllCheckbox.setAttribute('aria-label', 'Select all items');
                const selectAllText = document.createElement('span');
                selectAllText.textContent = 'Select all';
                selectAllLabel.append(selectAllCheckbox, selectAllText);
                checkboxList.appendChild(selectAllLabel);

                ITEM_OPTIONS.forEach((item) => {
                    const optionLabel = document.createElement('label');
                    optionLabel.className = 'checkbox-option';
                    optionLabel.dataset.item = item;
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = 'item-option';
                    checkbox.value = item;
                    const itemText = document.createElement('span');
                    itemText.textContent = item;
                    if (room.items.includes(item)) {
                        checkbox.disabled = true;
                        optionLabel.classList.add('is-disabled');
                    }
                    optionLabel.append(checkbox, itemText);
                    checkboxList.appendChild(optionLabel);
                });

                const hasAvailableOptions = ITEM_OPTIONS.some((item) => !room.items.includes(item));
                if (!hasAvailableOptions) {
                    selectAllCheckbox.disabled = true;
                    selectAllLabel.classList.add('is-disabled');
                }

                dropdown.appendChild(checkboxList);

                const addButton = document.createElement('button');
                addButton.className = 'primary-button';
                addButton.type = 'submit';
                addButton.textContent = 'Add selected items';
                form.append(label, dropdown, addButton);

                const listHeading = document.createElement('p');
                listHeading.className = 'helper-text';
                listHeading.textContent = room.items.length ? 'Items for this room:' : 'No items added yet.';

                const list = document.createElement('ul');
                list.className = 'items-list';
                room.items.forEach((item) => {
                    const li = document.createElement('li');
                    li.className = 'item-row';
                    const span = document.createElement('span');
                    span.textContent = item;
                    const removeButton = document.createElement('button');
                    removeButton.className = 'remove-item';
                    removeButton.type = 'button';
                    removeButton.dataset.action = 'remove-item';
                    removeButton.dataset.item = item;
                    removeButton.textContent = 'Remove';
                    li.append(span, removeButton);
                    list.appendChild(li);
                });

                card.append(titleRow, form, listHeading);
                if (room.items.length) {
                    card.appendChild(list);
                }
                roomsGrid.appendChild(card);
            });
        }

        function renderShareDetails(id) {
            if (!userIdDisplay || !shareLinkDisplay) return;
            userIdDisplay.textContent = id;
            const baseUrl = `${window.location.origin}${window.location.pathname}`;
            const shareUrl = `${baseUrl}?user=${encodeURIComponent(id)}`;
            shareLinkDisplay.textContent = shareUrl;
        }

        function loadState() {
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (!saved) return { rooms: [] };
                const parsed = JSON.parse(saved);
                if (!Array.isArray(parsed.rooms)) return { rooms: [] };
                return {
                    rooms: parsed.rooms.map((room) => ({
                        id: room.id || generateId(),
                        category: room.category || DEFAULT_CATEGORY,
                        name: room.name || '',
                        items: Array.isArray(room.items) ? room.items : []
                    }))
                };
            } catch (error) {
                console.error('Could not load rooms from storage', error);
                return { rooms: [] };
            }
        }

        function saveState(nextState) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
            } catch (error) {
                console.error('Could not save rooms to storage', error);
            }
        }

        function loadUserId() {
            let id = localStorage.getItem(USER_ID_KEY);
            if (!id) {
                id = generateId();
                localStorage.setItem(USER_ID_KEY, id);
            }
            return id;
        }

        function generateId() {
            return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        }

        function formatRoomTitle(room) {
            if (room.name) {
                return `${room.category || DEFAULT_CATEGORY} — ${room.name}`;
            }
            return room.category || DEFAULT_CATEGORY;
        }
    });
})();
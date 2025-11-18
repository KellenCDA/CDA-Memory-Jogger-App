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
        const helpButton = document.getElementById('help-button');
        const helpMenu = document.getElementById('help-menu');
        const roomForm = document.getElementById('room-form');
        const roomCategorySelect = document.getElementById('room-category');
        const roomNameInput = document.getElementById('room-name');
        const roomsGrid = document.getElementById('rooms-grid');
        const clearAllButton = document.getElementById('clear-all');
        const userIdDisplay = document.getElementById('user-id');
        const shareLinkDisplay = document.getElementById('share-link');

        if (helpButton && helpMenu) {
            helpButton.addEventListener('click', () => {
                const isExpanded = helpButton.getAttribute('aria-expanded') === 'true';
                helpButton.setAttribute('aria-expanded', String(!isExpanded));
                helpMenu.hidden = isExpanded;
            });
        }

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

            const select = form.querySelector('select');
            if (!(select instanceof HTMLSelectElement)) return;
            const item = select.value;
            if (!item || room.items.includes(item)) return;

            room.items.push(item);
            saveState(state);
            renderRooms(state.rooms);
        });

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
                label.textContent = 'Select an item to add';
                const select = document.createElement('select');
                select.className = 'item-select';
                ITEM_OPTIONS.forEach((item) => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    select.appendChild(option);
                });
                const addButton = document.createElement('button');
                addButton.className = 'primary-button';
                addButton.type = 'submit';
                addButton.textContent = 'Add item';
                form.append(label, select, addButton);

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
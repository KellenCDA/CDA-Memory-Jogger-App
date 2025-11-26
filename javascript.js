(function () {
    const STORAGE_KEY = 'joggerData';
    const DEFAULT_CATEGORY = 'Other';
    const ITEM_OPTIONS = {
        Kitchen: ['Tomato, sauce, paste', 'Vegetables', 'Answering Machine', 'Cell Phone', 'Clocks', 'iPod player', 'Telephone', 'Undercabinet TV, stereo', 'Food in Freezer', 'Food in Frig', 'Pantry food', 'Spices', 'Bar stools', 'Butcher block', 'Desk and chair', 'Stepladder', 'Stools', 'Table', 'Table and chairs', 'Table, tray, TV', 'Wine rack', 'Address book', 'Aerolatte', 'Apple corer', 'Area rug', 'Bar serviceware', 'Basting brush', 'Batteries', 'Bottle openers', 'Bowls', 'Bread box', 'Butter dish', 'Can opener', 'Candy dish', 'Canister set', 'Canning jars', 'Canvas grocery bags', 'Cheese grater', 'Cheese slicer and serving board', 'Cheese slicers/knives', 'Coasters', 'Colander', 'Cookbook holders', 'Cookie jar', 'Corn cob butter holder', 'Corn cob holders', 
            'Cutlery trays', 'Envelopes, stamps', 'Gum', 'Matches', 'Measuring tape', 'Memo board', 'Paper clips', 'Pens, pencils, markers', 'Post it notes', 'Rubber bands', 'Ruler', 'Scissors', 'String', 'Tape, scotch, labeling', 'Thumb tacks', 'Tools, basics', 'Shoelaces', 'Toothpicks', 'Baking Cups', 'Cups (Cold Beverage, Hot Beverage)', 'Food Storage Bags', 'Freezer Bags', 'Kitchen Parchment (Non-stick Pan-liner)', 'Lunch Bags', 'Napkins', 'Paper Towels', 'Plates', 'Sandwich Bags', 'Saran wrap, bags, al foil, wax paper etc', 'Shelf-lining Paper', 'Apple peeler/corer', 'Blender', 'Blender, handheld', 'Bread machine', 'Cappuccino/coffee maker', 'Coffee grinder', 'Crockpot', 'Deep fat fryer', 'Dehydrator system', 'Fondue set', 'Food processor', 'Food processor, mini', 
            'Grille', 'Ice cream/yogurt maker', 'Juicer', 'Julian slicer set', 'Microwave', 'Mixer, hand, stand', 'Pasta maker', 'Cutting boards', 'Decorative jars', 'Dish organizers', 'Drawer liners', 'Flashlights', 'Flour sifter', 'Fly swatter', 'Food grinder', 'Food scale', 'Garbage can and recycle', 'Garlic press', 'Gravy boats', 'Grease cover', 'Hand chopper', 'Ice bucket and tongs', 'Ice cream scoops', 'Ice trays', 'Key rings', 'Keys', 'Kitchen shears', 'Knife block set', 'Knife sharpener', 'Lazy Susan', 'Light bulbs', 'Lighters', 'Lint brushes', 'Lunch totes', 'Magnet picture frames', 'Magnets, refrigerator', 'Napkin holder', 'Nut crackers', 'Organizers, drawer, shelf, cabinet', 'Paper towel holder', 'Pastry brushes', 'Pepper mill', 'Picnic basket set', 'Pie pans', 
            'Pitchers', 'Plastic bowls, plates and lids', 'Potato peeler', 'Recipie boxes', 'Recycle cans', 'Salad spinner', 'Salt and pepper set', 'Salt grinder', 'saran wrap', 'bags', 'al foil', 'wax paper', 'Serving trays', 'Popcorn popper', 'Pressure cooker', 'Rice cooker', 'Sandwich maker grille', 'Tea kettle, electric, stovetop', 'Thermal carafe', 'Toaster', 'Toaster oven', 'Waffle grille', 'Allspice', 'Basil', 'Bay Leaves', 'Bouillon Cubes', 'Cayenne Pepper', 'Celery Seed or Salt', 'Chili Powder', 'Chives', 'Cinnamon', 'Cloves (Whole & Powdered)', 'Cream of Tartar', 'Cumin', 'Curry Powder', 'Dill', 'Food Coloring', 'Garlic Powder or Salt', 'Ginger', 'Italian Seasoning', 'Maple Flavoring', 'Marjoram', 'Mustard Powder', 'Nutmeg', 'Onion Salt, Powder, or Flakes', 'Oregano', 
            'Paprika', 'Parsley Flakes', 'Pepper', 'Peppercorns', 'Poultry Seasoning', 'Rosemary', 'Sage', 'Salt', 'Salt Substitute', 'Seasoned Stock Base', 'Seasoning Salt', 'Sugar Substitute', 'Sugar, Brown', 'Sugar, Granulated', 'Tarragon', 'Thyme', 'Vanilla Flavoring', 'Shoe horns', 'Shoe polish', 'Silverware 5 piece service settings', 'Steak knife sets', 'Steamer', 'Sugar and creamer', 'Sun tea jars', 'Tea ball', 'Tea pot', 'Thermos', 'Tomato strainer', 'Tongs', 'Towels, cleaning rags', 'Trash cans', 'Trivets', 'Tupperware', 'Utensil caddy', 'Utensil crock', 'Vacuum storage bags and rolls', 'Wine opener', 'Wisks', 'Wok set', 'Aprons', 'Napkins and napkin rings', 'Placemats', 'Potholders', 'Tablecloths', 'Towels, hand, dish', 'Window coverings', 'Antacid', 'Anti-itch creams', 
            'Aspirin', 'Cold/Allergy Medicine', 'Cough drops', 'Cough medicine', 'Hydrogen peroxide', 'Insect repellant', 'Laxatives', 'Medications, vitimins', 'Prescription Medication', 'Relaxants', 'Rubbing alcohol', 'Sleeping aids', 'Sunscreen', 'Vitimins', 'Witch hazel', 'Candles', 'Candy', 'Meat thermometer', 'Microwave cookware', 'Mixing bowls', 'Mortar and pestle', 'Muffin tins', 'Oven drip pan'

],
        'Living room': ['Sofa', 'Coffee table', 'Television'],
        Bedroom: ['Bed frame', 'Mattress', 'Nightstand'],
        Bathroom: ['Shower curtain', 'Towels', 'Toiletries kit'],
        'Master bathroom': ['Bath mat', 'Shower caddy', 'Hair dryer'],
        'Dining room': ['Dining table', 'Chairs', 'Serving set'],
        'Office / Study': ['Desk', 'Office chair', 'Computer'],
        Loft: ['Sectional sofa', 'Bookshelf', 'Area rug'],
        Basement: ['Storage shelves', 'Tool bench', 'Utility sink'],
        Garage: ['Tool set', 'Storage bins', 'Ladder'],
        Laundry: ['Washer', 'Dryer', 'Laundry baskets'],
        'Outdoor / Patio': ['Patio chairs', 'Grill', 'Garden hose'],
        Other: ['Lamp', 'Wall art', 'Storage bin']
    };

    const ITEM_IMAGE_OVERRIDES = {
        'tomato, sauce, paste': 'https://www.alimentarium.org/sites/default/files/media/image/2016-10/AL001-02%20tomate_0.jpg',
        'vegetables': 'https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg',
        'answering machine': 'https://network-telecom.com/wp-content/uploads/Avaya-phone.png'
    };

    const ITEM_IMAGES = Object.entries(ITEM_OPTIONS).reduce((catalog, [category, items]) => {
        if (!Array.isArray(items)) return catalog;
        items.forEach((item) => {
            const key = normalizeItemKey(item);
            if (!(key in catalog)) {
                catalog[key] = '';
            }
        });
        return catalog;
    }, { ...ITEM_IMAGE_OVERRIDES });

    function getItemOptions(category) {
        if (category && ITEM_OPTIONS[category]) {
            return ITEM_OPTIONS[category];
        }
        return ITEM_OPTIONS[DEFAULT_CATEGORY] || [];
    }

    function getItemImage(itemName) {
        const normalized = normalizeItemKey(itemName);
        return ITEM_IMAGES[normalized] || '';
    }

    function normalizeItemKey(value) {
        return (value || '').toString().trim().toLowerCase().replace(/\s+/g, ' ');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const roomForm = document.getElementById('room-form');
        const roomCategorySelect = document.getElementById('room-category');
        const roomNameInput = document.getElementById('room-name');
        const roomsGrid = document.getElementById('rooms-grid');
        const submissionForm = document.getElementById('submission-form');
        const submissionDataInput = document.getElementById('submission-data');
        const modalTriggers = document.querySelectorAll('.help-trigger');
        const modals = document.querySelectorAll('.modal-overlay');
        const scrollToast = document.getElementById('scroll-toast');
        const scrollToastViewButton = document.getElementById('scroll-toast-view');
        const scrollToastDismissButton = document.getElementById('scroll-toast-dismiss');
        let activeModal = null;
        let lastFocus = null;
        let activeSwipeCard = null;
        let pointerState = null;
        let scrollToastTimer = null;

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
        renderRooms(state.rooms);
        updateSubmissionData(state.rooms);

        roomForm?.addEventListener('submit', (event) => {
            event.preventDefault();
            const category = roomCategorySelect?.value.trim();
            const name = roomNameInput?.value.trim();
            if (!category) return;

            state.rooms.push({
                id: generateId(),
                category,
                name,
                items: [],
                reviewedItems: []
            });
            saveState(state);
            renderRooms(state.rooms);
            updateSubmissionData(state.rooms);
            const newRoom = state.rooms[state.rooms.length - 1];
            if (newRoom && roomsGrid) {
                const newPanel = roomsGrid.querySelector(`[data-room-id="${newRoom.id}"] .swipe-panel`);
                if (newPanel instanceof HTMLElement) {
                    openSwipePanel(newPanel, newRoom);
                }
            }
            showScrollPrompt();
            if (roomCategorySelect) {
                const wasFocused = document.activeElement === roomCategorySelect;
                if (wasFocused) {
                    roomCategorySelect.blur();
                }
                requestAnimationFrame(() => {
                    roomCategorySelect.selectedIndex = 0;
                });
            }
            if (roomNameInput) {
                roomNameInput.value = '';
            }
        });
            
        roomsGrid?.addEventListener('click', (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) return;

            const roomCard = target.closest('[data-room-id]');
            const roomId = roomCard?.getAttribute('data-room-id');
            const room = state.rooms.find((r) => r.id === roomId);
            if (!room) return;

            if (target.dataset.action === 'remove-item') {
                const item = target.dataset.item;
                room.items = room.items.filter((entry) => entry !== item);
                if (Array.isArray(room.reviewedItems)) {
                    room.reviewedItems = room.reviewedItems.filter((entry) => entry !== item);
                }
                saveState(state);
                renderRooms(state.rooms);
                updateSubmissionData(state.rooms);
                return;
            }

            if (target.dataset.action === 'remove-room') {
                state.rooms = state.rooms.filter((entry) => entry.id !== roomId);
                saveState(state);
                renderRooms(state.rooms);
                updateSubmissionData(state.rooms);
                return;
            }
        });

        roomsGrid?.addEventListener('pointerdown', (event) => {
            const targetCard = event.target instanceof HTMLElement ? event.target.closest('.swipe-card') : null;
            if (!(targetCard instanceof HTMLElement)) return;
            const panel = targetCard.closest('.swipe-panel');
            if (!(panel instanceof HTMLElement) || panel.dataset.active !== 'true') return;

            activeSwipeCard = targetCard;
            pointerState = {
                startX: event.clientX,
                pointerId: event.pointerId,
                panel
            };
            targetCard.setPointerCapture(event.pointerId);
            targetCard.classList.add('dragging');
        });

        roomsGrid?.addEventListener('pointermove', (event) => {
            if (!pointerState || !activeSwipeCard || event.pointerId !== pointerState.pointerId) return;
            const deltaX = event.clientX - (pointerState.startX || 0);
            const rotate = deltaX * 0.05;
            const offsetY = Math.min(Math.abs(deltaX) * 0.04, 24);
            activeSwipeCard.style.transform = `translate(calc(-50% + ${deltaX}px), ${offsetY}px) rotate(${rotate}deg)`;
        });

        roomsGrid?.addEventListener('pointerup', (event) => {
            if (!pointerState || !activeSwipeCard || event.pointerId !== pointerState.pointerId) return;
            const deltaX = event.clientX - (pointerState.startX || 0);
            const threshold = 90;
            activeSwipeCard.classList.remove('dragging');

            if (Math.abs(deltaX) >= threshold) {
                const direction = deltaX > 0 ? 'have' : 'skip';
                performSwipeAnimation(pointerState.panel, activeSwipeCard, direction);
            } else {
                activeSwipeCard.style.transform = '';
            }

            activeSwipeCard.releasePointerCapture(event.pointerId);
            activeSwipeCard = null;
            pointerState = null;
        });

        submissionForm?.addEventListener('submit', () => {
            updateSubmissionData(state.rooms);
        });

        scrollToastViewButton?.addEventListener('click', () => {
            if (roomsGrid) {
                roomsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            hideScrollPrompt();
        });

        scrollToastDismissButton?.addEventListener('click', hideScrollPrompt);

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

                const swipePanel = document.createElement('div');
                swipePanel.className = 'swipe-panel';
                swipePanel.dataset.roomId = room.id;

                const swipeHeader = document.createElement('div');
                swipeHeader.className = 'swipe-header';
                const swipeTitle = document.createElement('h5');
                swipeTitle.textContent = 'Swipe the deck';
                const swipeHint = document.createElement('p');
                swipeHint.className = 'helper-text';
                swipeHint.textContent = 'Swipe right to add, left to skip.';
                swipeHeader.append(swipeTitle, swipeHint);

                const swipeStatus = document.createElement('p');
                swipeStatus.className = 'helper-text swipe-status';
                swipeStatus.textContent = 'Loading items...';

                const deck = document.createElement('div');
                deck.className = 'swipe-deck';

                swipePanel.append(swipeHeader, swipeStatus, deck);

                const listHeading = document.createElement('p');
                listHeading.className = 'helper-text items-heading';
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

                card.append(titleRow, swipePanel, listHeading);
                if (room.items.length) {
                    card.appendChild(list);
                }
                roomsGrid.appendChild(card);

                openSwipePanel(swipePanel, room);
            });
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
                        items: Array.isArray(room.items) ? room.items : [],
                        reviewedItems: Array.isArray(room.reviewedItems) ? room.reviewedItems : []
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

        function generateId() {
            return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        }

        function formatRoomTitle(room) {
            if (room.name) {
                return `${room.category || DEFAULT_CATEGORY} — ${room.name}`;
            }
            return room.category || DEFAULT_CATEGORY;
        }

        function openSwipePanel(panel, room) {
            if (!panel || !room) return;
            const roomId = room.id;
            const reviewedItems = Array.isArray(room.reviewedItems) ? room.reviewedItems : [];
            const availableItems = getItemOptions(room.category).filter((item) => !reviewedItems.includes(item));

            panel.dataset.active = 'true';
            panel.dataset.roomId = roomId;
            panel.dataset.collapsed = 'false';
            panel.classList.remove('collapsed');

            const deck = panel.querySelector('.swipe-deck');
            const status = panel.querySelector('.swipe-status');

            if (!(deck instanceof HTMLElement) || !(status instanceof HTMLElement)) return;
            deck.innerHTML = '';

            if (!availableItems.length) {
                status.textContent = 'Everything in this room has already been sorted. Remove an item to review again.';
                return;
            }

            const totalCards = availableItems.length;

            availableItems.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'swipe-card';
                card.dataset.item = item;
                card.style.zIndex = `${totalCards - index}`;

                const imageUrl = getItemImage(item);
                if (imageUrl) {
                    card.classList.add('swipe-card--with-image');
                    card.style.backgroundImage = `linear-gradient(180deg, rgba(9, 16, 26, 0.62) 0%, rgba(9, 16, 26, 0.42) 100%), url('${imageUrl}')`;
                }

                const label = document.createElement('p');
                label.className = 'swipe-card-title';
                label.textContent = item;

                const tip = document.createElement('p');
                tip.className = 'helper-text';
                tip.textContent = 'Swipe right to add, left to skip';

                card.append(label, tip);
                deck.appendChild(card);
            });

            status.textContent = `${availableItems.length} item${availableItems.length === 1 ? '' : 's'} to review`;
        }

        function performSwipeAnimation(panel, card, direction) {
            if (!(panel instanceof HTMLElement) || !(card instanceof HTMLElement)) return;
            const flyOut = direction === 'have' ? 'swipe-right' : 'swipe-left';
            card.classList.add(flyOut);
            setTimeout(() => finalizeSwipe(panel, card, direction), 180);
        }

        function finalizeSwipe(panel, card, direction) {
            const deck = panel.querySelector('.swipe-deck');
            if (!(deck instanceof HTMLElement) || !(card instanceof HTMLElement)) return;
            const roomId = panel.dataset.roomId;
            const room = state.rooms.find((r) => r.id === roomId);
            const status = panel.querySelector('.swipe-status');

            card.remove();

            const item = card.dataset.item;
            if (room && item) {
                if (!Array.isArray(room.reviewedItems)) {
                    room.reviewedItems = [];
                }
                if (!room.reviewedItems.includes(item)) {
                    room.reviewedItems.push(item);
                }

                if (direction === 'have' && !room.items.includes(item)) {
                    room.items.push(item);
                    appendItemToCard(roomId, item);
                    updateSubmissionData(state.rooms);
                }

                saveState(state);
            }

            const remaining = deck.children.length;
            if (status instanceof HTMLElement) {
                status.textContent = remaining ? `${remaining} item${remaining === 1 ? '' : 's'} left` : 'No more items to review. Great job!';
            }
        }

        function appendItemToCard(roomId, item) {
            if (!roomsGrid) return;
            const roomCard = roomsGrid.querySelector(`[data-room-id="${roomId}"]`);
            if (!(roomCard instanceof HTMLElement)) return;
            let list = roomCard.querySelector('.items-list');
            const heading = roomCard.querySelector('.items-heading');

            if (heading instanceof HTMLElement) {
                heading.textContent = 'Items for this room:';
            }

            if (!(list instanceof HTMLUListElement)) {
                list = document.createElement('ul');
                list.className = 'items-list';
                roomCard.appendChild(list);
            }

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
        }

        function updateSubmissionData(rooms) {
            if (!submissionDataInput) return;
            const summary = rooms.map((room) => {
                const name = formatRoomTitle(room);
                if (!room.items.length) {
                    return `${name}: (no items listed)`;
                }
                return `${name}: ${room.items.join(', ')}`;
            });

            submissionDataInput.value = summary.length ? summary.join('\n') : 'No rooms added yet.';
        }

        function showScrollPrompt() {
            if (!(scrollToast instanceof HTMLElement)) return;
            scrollToast.hidden = false;
            scrollToast.classList.add('visible');
            if (scrollToastTimer) {
                clearTimeout(scrollToastTimer);
            }
            scrollToastTimer = window.setTimeout(hideScrollPrompt, 7000);
            if (scrollToastViewButton instanceof HTMLElement) {
                scrollToastViewButton.focus({ preventScroll: true });
            }
        }

        function hideScrollPrompt() {
            if (!(scrollToast instanceof HTMLElement)) return;
            scrollToast.classList.remove('visible');
            if (scrollToastTimer) {
                clearTimeout(scrollToastTimer);
                scrollToastTimer = null;
            }
            setTimeout(() => {
                if (!(scrollToast instanceof HTMLElement)) return;
                if (!scrollToast.classList.contains('visible')) {
                    scrollToast.hidden = true;
                }
            }, 200);
        }
    });

})();

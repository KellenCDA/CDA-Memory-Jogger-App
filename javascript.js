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
        'tomato, sauce, paste': "inventory_item_pictures/Screenshot 2025-12-02 102457.png",
        'vegetables': "inventory_item_pictures/Screenshot 2025-12-02 102852.png",
        'answering machine': "inventory_item_pictures/Screenshot 2025-12-02 103045.png",
        'cell phone': "inventory_item_pictures/Screenshot 2025-12-02 104348.png",
        'clocks': "inventory_item_pictures/Screenshot 2025-12-02 103256.png"
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

    const MAX_RENDERED_CARDS = 10;
    const ACHIEVEMENT_ICONS = ['🌱', '👍', '💪', '😁', '😍', '🙌', '😎', '🏅', '✨', '🥳', '🚀', '🤖', '😸', '👽', '🌟', '🤯', '🔥', '🎉'];
    const ACHIEVEMENT_STEP = 5;
    const ROOM_MILESTONES = [5, 15, 25, 35, 45, 55, 65];
    const ROOM_MILESTONE_MESSAGES = {
        5: 'First five items! This room is taking shape.',
        15: 'Fifteen items logged. Amazing momentum!',
        25: 'Twenty-Five finds—your room list is stacked.',
        35: 'Thirty-Five items! You are on fire. 🔥',
        45: 'Keep up the great work!',
        55: 'You are on a roll (not the bread)',
        65: 'This is starting to become a lot of items!'
    };
    const MAJOR_ROOM_MILESTONES = [20, 40, 60];
    const MAJOR_ROOM_MILESTONE_SETTINGS = {
        20: {
            icon: '🎇',
            headline: '20-item blastoff!',
            message: 'Your first big milestone — the inventory is cooking.',
            accent: 'citrus'
        },
        40: {
            icon: '🌈',
            headline: '40 items and glowing!',
            message: 'You just unlocked a double rainbow of progress.',
            accent: 'aurora'
        },
        60: {
            icon: '🚀',
            headline: '60 items — orbit achieved!',
            message: 'This list is stellar. Keep soaring!',
            accent: 'cosmic'
        }
    };
    const roomQueues = new Map();
    const roomSwipeCounts = new Map();
    const roomMilestones = new Map();
    const majorRoomMilestones = new Map();

    function getItemOptions(category) {
        if (category && ITEM_OPTIONS[category]) {
            return ITEM_OPTIONS[category];
        }
        return ITEM_OPTIONS[DEFAULT_CATEGORY] || [];
    }

    function getRemainingItems(room) {
        const reviewedItems = Array.isArray(room.reviewedItems) ? room.reviewedItems : [];
        return getItemOptions(room.category).filter((item) => !reviewedItems.includes(item));
    }

    function getItemImage(itemName) {
        const normalized = normalizeItemKey(itemName);
        return ITEM_IMAGES[normalized] || '';
    }

    function normalizeItemKey(value) {
        return (value || '').toString().trim().toLowerCase().replace(/\s+/g, ' ');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        const root = document.documentElement;
        const roomForm = document.getElementById('room-form');
        const roomCategorySelect = document.getElementById('room-category');
        const roomNameInput = document.getElementById('room-name');
        const roomsGrid = document.getElementById('rooms-grid');
        const submissionForm = document.getElementById('submission-form');
        const submissionDataInput = document.getElementById('submission-data');
        const modalTriggers = document.querySelectorAll('.help-trigger');
        const modals = document.querySelectorAll('.modal-overlay');
        const roomCounter = document.getElementById('room-counter');
        const swipeModal = document.getElementById('swipe-modal');
        const swipeModalDeck = document.getElementById('swipe-modal-deck');
        const swipeModalStatus = document.getElementById('swipe-modal-status');
        const swipeModalRoom = document.getElementById('swipe-modal-room');
        const swipeModalClose = document.querySelector('[data-close-swipe]');
        let activeModal = null;
        let lastFocus = null;
        let activeSwipeCard = null;
        let pointerState = null;
        let activeSwipeRoomId = null;
        let scrollLockY = 0;

        function lockScroll() {
            if (!body || !root) return;
            scrollLockY = window.scrollY || 0;
            body.style.top = `-${scrollLockY}px`;
            body.classList.add('no-scroll');
            root.classList.add('no-scroll');
        }

        function unlockScroll() {
            if (!body || !root) return;
            body.classList.remove('no-scroll');
            root.classList.remove('no-scroll');
            body.style.top = '';
            window.scrollTo({ top: scrollLockY });
        }

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
            if (!(modal instanceof HTMLElement) || modal.id === 'swipe-modal') return;
            modal.addEventListener('click', (event) => {
                if (event.target === modal || (event.target instanceof HTMLElement && event.target.hasAttribute('data-close-modal'))) {
                    closeModal();
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && activeModal) {
                closeModal();
            } else if (event.key === 'Escape' && swipeModal && !swipeModal.hidden) {
                closeSwipeSession();
            }
        });

        swipeModalClose?.addEventListener('click', () => {
            closeSwipeSession();
        });

        const state = loadState();
        syncRoomMilestones(state.rooms);
        syncMajorRoomMilestones(state.rooms);
        renderRooms(state.rooms);
        updateSubmissionData(state.rooms);
        updateRoomCounter(state.rooms);

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

            if (target.dataset.action === 'start-swiping') {
                openSwipeSession(room);
                return;
            }

            if (target.dataset.action === 'remove-item') {
                const item = target.dataset.item;
                room.items = room.items.filter((entry) => entry !== item);
                if (Array.isArray(room.reviewedItems)) {
                    room.reviewedItems = room.reviewedItems.filter((entry) => entry !== item);
                }
                updateRoomMilestoneState(room);
                updateMajorRoomMilestoneState(room);
                saveState(state);
                renderRooms(state.rooms);
                updateSubmissionData(state.rooms);
                return;
            }

            if (target.dataset.action === 'remove-room') {
                state.rooms = state.rooms.filter((entry) => entry.id !== roomId);
                roomSwipeCounts.delete(roomId);
                roomMilestones.delete(roomId);
                saveState(state);
                renderRooms(state.rooms);
                updateSubmissionData(state.rooms);
                return;
            }
        });

        document.addEventListener('pointerdown', (event) => {
            const targetCard = event.target instanceof HTMLElement ? event.target.closest('.swipe-card') : null;
            if (!(targetCard instanceof HTMLElement)) return;
            const inlinePanel = targetCard.closest('.swipe-panel');
            const modalPanel = swipeModal && swipeModal.contains(targetCard) ? swipeModal : null;
            const panel = inlinePanel || modalPanel;
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

        document.addEventListener('pointermove', (event) => {
            if (!pointerState || !activeSwipeCard || event.pointerId !== pointerState.pointerId) return;
            const deltaX = event.clientX - (pointerState.startX || 0);
            const rotate = deltaX * 0.05;
            const offsetY = Math.min(Math.abs(deltaX) * 0.04, 24);
            activeSwipeCard.style.transform = `translate(calc(-50% + ${deltaX}px), ${offsetY}px) rotate(${rotate}deg)`;
        });

        document.addEventListener('pointerup', (event) => {
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

        function openSwipeSession(room) {
            if (!swipeModal || !swipeModalDeck || !swipeModalStatus) return;
            activeSwipeRoomId = room.id;
            swipeModal.dataset.roomId = room.id;
            swipeModal.dataset.active = 'true';
            swipeModal.hidden = false;
            lockScroll();
            if (swipeModalRoom instanceof HTMLElement) {
                swipeModalRoom.textContent = formatRoomTitle(room);
            }
            renderSwipeDeck(swipeModal, room);
            const card = swipeModal.querySelector('.swipe-modal-card');
            if (card instanceof HTMLElement) {
                card.setAttribute('tabindex', '-1');
                card.focus();
            }
        }

        function closeSwipeSession() {
            if (!swipeModal) return;
            swipeModal.dataset.active = 'false';
            swipeModal.hidden = true;
            unlockScroll();
            activeSwipeCard = null;
            pointerState = null;
            if (activeSwipeRoomId) {
                updateSwipePreview(activeSwipeRoomId);
            }
            activeSwipeRoomId = null;
            if (swipeModalDeck instanceof HTMLElement) {
                swipeModalDeck.innerHTML = '';
            }
        }

        function renderRooms(rooms) {
            if (!roomsGrid) return;
            roomsGrid.innerHTML = '';
            updateRoomCounter(rooms);

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
                swipePanel.className = 'swipe-panel swipe-panel--preview';
                swipePanel.dataset.roomId = room.id;

                const swipeHeader = document.createElement('div');
                swipeHeader.className = 'swipe-header';
                const swipeTitle = document.createElement('h5');
                swipeTitle.textContent = 'Begin:';
                const swipeHint = document.createElement('p');
                swipeHint.className = 'helper-text';
                swipeHint.textContent = 'Tap Start swiping to begin for this room.';
                swipeHeader.append(swipeTitle, swipeHint);

                const startRow = document.createElement('div');
                startRow.className = 'start-swipe-row';
                const swipeStatus = document.createElement('p');
                swipeStatus.className = 'helper-text swipe-status';
                const remainingCount = getRemainingItems(room).length;
                swipeStatus.textContent = remainingCount
                    ? `${remainingCount} item${remainingCount === 1 ? '' : 's'} left ready to swipe`
                    : 'Everything in this room has already been reviewed.';
                const startButton = document.createElement('button');
                startButton.className = 'primary-button';
                startButton.type = 'button';
                startButton.dataset.action = 'start-swiping';
                startButton.textContent = remainingCount ? 'Start swiping' : 'All items reviewed';
                startButton.disabled = remainingCount === 0;
                startRow.append(swipeStatus, startButton);

                swipePanel.append(swipeHeader, startRow);

                const itemsAccordion = document.createElement('details');
                itemsAccordion.className = 'items-accordion';

                const summary = document.createElement('summary');
                summary.textContent = room.items.length ? `Items for this room (${room.items.length})` : 'No items added yet.';
                itemsAccordion.appendChild(summary);

                if (room.items.length) {
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
                    itemsAccordion.appendChild(list);
                }

                card.append(titleRow, swipePanel, itemsAccordion);
                roomsGrid.appendChild(card);
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
            try {
                if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
                    return crypto.randomUUID();
                }
            } catch (error) {
                console.warn('Falling back to timestamp-based IDs', error);
            }
            return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        }

        function formatRoomTitle(room) {
            if (room.name) {
                return `${room.category || DEFAULT_CATEGORY} — ${room.name}`;
            }
            return room.category || DEFAULT_CATEGORY;
        }

        function createSwipeCard(item, zIndexValue) {
            const card = document.createElement('div');
            card.className = 'swipe-card';
            card.dataset.item = item;
            if (zIndexValue) {
                card.style.zIndex = `${zIndexValue}`;
            }

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
            return card;
        }

        function renderSwipeDeck(panel, room) {
            if (!panel || !room) return;
            const roomId = room.id;
            const availableItems = getRemainingItems(room);
            const renderableItems = availableItems.slice(0, MAX_RENDERED_CARDS);
            roomQueues.set(roomId, availableItems.slice(MAX_RENDERED_CARDS));
            if (!roomSwipeCounts.has(roomId)) {
                roomSwipeCounts.set(roomId, 0);
            }

            panel.dataset.active = 'true';
            panel.dataset.roomId = roomId;

            const deck = panel.querySelector('.swipe-deck');
            const status = panel.querySelector('.swipe-status');

            if (!(deck instanceof HTMLElement) || !(status instanceof HTMLElement)) return;
            deck.innerHTML = '';

            if (!availableItems.length) {
                setSwipeStatus(
                    status,
                    'Everything in this room has already been sorted. Remove an item to review again.',
                    { includeAchievement: true, roomId }
                );
                return;
            }

            const totalCards = renderableItems.length;

            renderableItems.forEach((item, index) => {
                const card = createSwipeCard(item, totalCards - index);
                deck.appendChild(card);
            });

            setSwipeStatus(
                status,
                `${availableItems.length} item${availableItems.length === 1 ? '' : 's'} to review`,
                { includeAchievement: true, roomId }
            );
        }

        function updateSwipePreview(roomId) {
            if (!roomsGrid) return;
            const room = state.rooms.find((entry) => entry.id === roomId);
            if (!room) return;
            const panel = roomsGrid.querySelector(`[data-room-id="${roomId}"] .swipe-panel`);
            const status = panel?.querySelector('.swipe-status');
            const startButton = panel?.querySelector('[data-action="start-swiping"]');
            const remainingCount = getRemainingItems(room).length;

            if (status instanceof HTMLElement) {
                status.textContent = remainingCount
                    ? `${remainingCount} item${remainingCount === 1 ? '' : 's'} ready to swipe`
                    : 'Everything in this room has already been reviewed.';
            }

            if (startButton instanceof HTMLButtonElement) {
                startButton.disabled = remainingCount === 0;
                startButton.textContent = remainingCount ? 'Start swiping' : 'All items reviewed';
            }
        }

        function performSwipeAnimation(panel, card, direction) {
            if (!(panel instanceof HTMLElement) || !(card instanceof HTMLElement)) return;
            const flyOut = direction === 'have' ? 'swipe-right' : 'swipe-left';
            card.classList.add(flyOut);
            setTimeout(() => finalizeSwipe(panel, card, direction), 180);
        }

        function getRoomSwipeCount(roomId) {
            if (!roomId) return 0;
            return roomSwipeCounts.get(roomId) || 0;
        }

        function incrementRoomSwipeCount(roomId) {
            if (!roomId) return 0;
            const nextCount = getRoomSwipeCount(roomId) + 1;
            roomSwipeCounts.set(roomId, nextCount);
            return nextCount;
        }

        function finalizeSwipe(panel, card, direction) {
            const deck = panel.querySelector('.swipe-deck');
            if (!(deck instanceof HTMLElement) || !(card instanceof HTMLElement)) return;
            const roomId = panel.dataset.roomId;
            const room = state.rooms.find((r) => r.id === roomId);
            const status = panel.querySelector('.swipe-status');
            const queue = roomQueues.get(roomId) || [];

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
                    maybeCelebrateRoomMilestone(room, panel);
                    maybeCelebrateMajorRoomMilestone(room, panel);
                    updateSubmissionData(state.rooms);
                }


                saveState(state);
            }

            if (queue.length) {
                const nextItem = queue.shift();
                roomQueues.set(roomId, queue);
                const nextCard = createSwipeCard(nextItem, 0);
                deck.appendChild(nextCard);
            }

            const remaining = deck.children.length + queue.length;
            if (status instanceof HTMLElement) {
                incrementRoomSwipeCount(roomId);
                setSwipeStatus(
                    status,
                    remaining ? `${remaining} item${remaining === 1 ? '' : 's'} left` : 'No more items to review. Great job!',
                    { includeAchievement: true, roomId }
                );
            }

            updateSwipePreview(roomId);
        }

        function appendItemToCard(roomId, item) {
            if (!roomsGrid) return;
            const roomCard = roomsGrid.querySelector(`[data-room-id="${roomId}"]`);
            if (!(roomCard instanceof HTMLElement)) return;
            let accordion = roomCard.querySelector('.items-accordion');
            if (!(accordion instanceof HTMLElement)) {
                accordion = document.createElement('details');
                accordion.className = 'items-accordion';
                accordion.setAttribute('open', '');
                const summary = document.createElement('summary');
                summary.textContent = 'Items for this room';
                accordion.appendChild(summary);
                roomCard.appendChild(accordion);
            }

            let summary = accordion.querySelector('summary');
            if (!(summary instanceof HTMLElement)) {
                summary = document.createElement('summary');
                accordion.prepend(summary);
            }

            let list = accordion.querySelector('.items-list');
            if (!(list instanceof HTMLUListElement)) {
                list = document.createElement('ul');
                list.className = 'items-list';
                accordion.appendChild(list);
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

            const count = list.children.length;
            summary.textContent = `Items for this room (${count})`;
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

        function updateRoomCounter(rooms) {
            if (!(roomCounter instanceof HTMLElement)) return;
            const count = rooms.length;
            if (count === 0) {
                roomCounter.textContent = 'No rooms added yet.';
            } else {
                roomCounter.textContent = `${count} room${count === 1 ? '' : 's'} added.`;
            }
        }

        function setSwipeStatus(statusElement, text, options = {}) {
            const { includeAchievement = false, roomId: providedRoomId } = options;
            if (!(statusElement instanceof HTMLElement)) return;

            statusElement.textContent = '';
            const textSpan = document.createElement('span');
            textSpan.textContent = text;
            statusElement.appendChild(textSpan);

            const statusPanel = statusElement.closest('.swipe-panel, #swipe-modal');
            const roomId = providedRoomId || statusPanel?.dataset.roomId || activeSwipeRoomId;
            const panelActive = statusPanel?.dataset.active === 'true';
            if (!includeAchievement || !panelActive || !roomId) return;

            const icon = document.createElement('span');
            icon.className = 'achievement-icon';
            icon.ariaHidden = 'true';
            icon.textContent = getAchievementIcon(roomId);
            statusElement.appendChild(icon);
        }

        function getAchievementIcon(roomId) {
            const swipeCount = getRoomSwipeCount(roomId);
            const index = Math.floor(swipeCount / ACHIEVEMENT_STEP) % ACHIEVEMENT_ICONS.length;
            return ACHIEVEMENT_ICONS[index];
        }

        function syncRoomMilestones(rooms) {
            rooms.forEach((room) => {
                updateRoomMilestoneState(room);
            });
        }

        function getHighestMilestone(count) {
            let achieved = 0;
            ROOM_MILESTONES.forEach((value) => {
                if (count >= value && value > achieved) {
                    achieved = value;
                }
            });
            return achieved;
        }

        function maybeCelebrateRoomMilestone(room, panel) {
            if (!room || !room.id) return;
            const previous = roomMilestones.get(room.id) || 0;
            const next = getHighestMilestone(room.items?.length || 0);
            if (next > previous) {
                roomMilestones.set(room.id, next);
                triggerRoomMilestoneEffect(room, next, panel);
            }
        }

        function getHighestMajorMilestone(count) {
            let achieved = 0;
            MAJOR_ROOM_MILESTONES.forEach((value) => {
                if (count >= value && value > achieved) {
                    achieved = value;
                }
            });
            return achieved;
        }

        function syncMajorRoomMilestones(rooms) {
            rooms.forEach((room) => {
                updateMajorRoomMilestoneState(room);
            });
        }

        function updateRoomMilestoneState(room) {
            if (!room || !room.id) return;
            const achieved = getHighestMilestone(room.items?.length || 0);
            if (achieved) {
                roomMilestones.set(room.id, achieved);
            } else {
                roomMilestones.delete(room.id);
            }
        }

        function updateMajorRoomMilestoneState(room) {
            if (!room || !room.id) return;
            const achieved = getHighestMajorMilestone(room.items?.length || 0);
            if (achieved) {
                majorRoomMilestones.set(room.id, achieved);
            } else {
                majorRoomMilestones.delete(room.id);
            }
        }

        function maybeCelebrateMajorRoomMilestone(room, panel) {
            if (!room || !room.id) return;
            const previous = majorRoomMilestones.get(room.id) || 0;
            const next = getHighestMajorMilestone(room.items?.length || 0);
            if (next > previous) {
                majorRoomMilestones.set(room.id, next);
                triggerMajorRoomMilestoneEffect(room, next, panel);
            }
        }

        function triggerRoomMilestoneEffect(room, milestone, panel) {
            const overlay = document.createElement('div');
            overlay.className = 'milestone-overlay';

            const banner = document.createElement('div');
            banner.className = 'milestone-banner';

            const icon = document.createElement('span');
            icon.className = 'milestone-icon';
            icon.textContent = '✨';

            const textWrap = document.createElement('div');
            textWrap.className = 'milestone-text';
            const title = document.createElement('p');
            title.className = 'milestone-title';
            title.textContent = `Milestone unlocked: ${milestone} items in ${formatRoomTitle(room)}`;
            const subtitle = document.createElement('p');
            subtitle.className = 'milestone-subtitle';
            subtitle.textContent = ROOM_MILESTONE_MESSAGES[milestone] || 'Keep going—your list is looking great!';
            textWrap.append(title, subtitle);

            banner.append(icon, textWrap);
            overlay.appendChild(banner);

            const sparkleLayer = document.createElement('div');
            sparkleLayer.className = 'milestone-sparkles';
            for (let i = 0; i < 14; i += 1) {
                const sparkle = document.createElement('span');
                sparkle.className = 'milestone-sparkle';
                sparkle.style.setProperty('--sparkle-left', `${Math.random() * 100}%`);
                sparkle.style.setProperty('--sparkle-delay', `${Math.random() * 0.8}s`);
                sparkleLayer.appendChild(sparkle);
            }
            overlay.appendChild(sparkleLayer);

            document.body.appendChild(overlay);
            requestAnimationFrame(() => overlay.classList.add('visible'));

            setTimeout(() => {
                overlay.classList.remove('visible');
                setTimeout(() => overlay.remove(), 600);
            }, 2200);

            if (panel instanceof HTMLElement) {
                panel.classList.add('milestone-glow');
                setTimeout(() => panel.classList.remove('milestone-glow'), 1800);
            }
        }

        function triggerMajorRoomMilestoneEffect(room, milestone, panel) {
            const settings = MAJOR_ROOM_MILESTONE_SETTINGS[milestone] || {};
            const overlay = document.createElement('div');
            overlay.className = 'major-milestone-overlay';
            overlay.dataset.accent = settings.accent || 'cosmic';

            const rings = document.createElement('div');
            rings.className = 'major-milestone-rings';
            for (let i = 0; i < 3; i += 1) {
                const ring = document.createElement('span');
                ring.className = 'major-milestone-ring';
                ring.style.setProperty('--ring-delay', `${i * 0.2}s`);
                rings.appendChild(ring);
            }

            const confetti = document.createElement('div');
            confetti.className = 'major-milestone-confetti';
            for (let i = 0; i < 18; i += 1) {
                const speck = document.createElement('span');
                speck.className = 'major-milestone-speck';
                speck.style.setProperty('--speck-left', `${Math.random() * 100}%`);
                speck.style.setProperty('--speck-delay', `${Math.random() * 0.4}s`);
                confetti.appendChild(speck);
            }

            const card = document.createElement('div');
            card.className = 'major-milestone-card';

            const icon = document.createElement('div');
            icon.className = 'major-milestone-icon';
            icon.textContent = settings.icon || '🎆';

            const textWrap = document.createElement('div');
            textWrap.className = 'major-milestone-text';
            const title = document.createElement('p');
            title.className = 'major-milestone-title';
            title.textContent = settings.headline || `Milestone: ${milestone} items!`;
            const subtitle = document.createElement('p');
            subtitle.className = 'major-milestone-subtitle';
            subtitle.textContent = settings.message || `You reached ${milestone} items in ${formatRoomTitle(room)}.`;
            const roomLine = document.createElement('p');
            roomLine.className = 'major-milestone-room';
            roomLine.textContent = `${formatRoomTitle(room)} now has ${milestone} items.`;
            textWrap.append(title, subtitle, roomLine);

            card.append(icon, textWrap);
            overlay.append(rings, confetti, card);
            document.body.appendChild(overlay);

            requestAnimationFrame(() => overlay.classList.add('visible'));

            if (panel instanceof HTMLElement) {
                panel.classList.add('major-milestone-highlight');
                setTimeout(() => panel.classList.remove('major-milestone-highlight'), 2200);
            }

            setTimeout(() => {
                overlay.classList.remove('visible');
                setTimeout(() => overlay.remove(), 500);
            }, 2400);
        }
    });


})();

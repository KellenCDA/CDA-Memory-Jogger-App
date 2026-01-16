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
        'Living room': ['Sectional sofa', 'Sofa', 'Loveseat', 'Reclining sofa', 'Sleeper sofa', 'Recliner chair', 'Armchair', 'Accent chair', 'Club chair', 'Chaise lounge', 'Ottoman', 'Storage ottoman', 'Footstool', 'Coffee table', 'Lift-top coffee table', 'Glass coffee table', 'End table', 'Side table', 'Console table', 'Sofa table', 'TV stand', 'Entertainment center', 'Media console', 'Bookshelf', 'Bookcase', 'Floating shelves', 'Display cabinet', 'Curio cabinet', 'Storage cabinet', 'Storage bench', 'Accent bench', 'Entryway bench', 'Storage trunk', 'Hope chest', 'Storage basket', 'Woven basket', 'Magazine rack', 'Wall-mounted TV bracket', 'Television', 'Streaming device', 'DVD player', 'Blu-ray player', 'Soundbar', 'Subwoofer', 'Home theater receiver', 'Surround sound speakers', 'Speaker stands', 'Remote control', 'Universal remote', 'Gaming console', 'Video game controllers', 'VR headset', 'TV antenna', 'Cable box', 'Satellite receiver', 'Internet modem', 'Wi-Fi router', 'Smart home hub', 'Smart speaker', 'Bluetooth speaker', 'Headphones', 'HDMI cable', 'Optical audio cable', 'Ethernet cable', 'Extension cord', 'Surge protector', 'Power strip', 'Cable ties', 'Cord organizer', 'Cable management box', 'Charging dock', 'Wireless charger', 'Phone charger',
            'Table lamp', 'Floor lamp', 'Reading lamp', 'Desk lamp', 'Lamp shade', 'Light bulbs', 'Smart bulbs', 'Wall sconce', 'Picture light', 'LED strip lights', 'Smart plug', 'Ceiling fan remote', 'Area rug', 'Runner rug', 'Rug pad', 'Throw blanket', 'Fleece blanket', 'Quilt', 'Decorative pillows', 'Pillow covers', 'Cushion inserts', 'Curtains', 'Drapes', 'Sheer curtains', 'Curtain rods', 'Curtain rings', 'Blinds', 'Window shades', 'Valance', 'Wall art', 'Framed picture', 'Canvas print', 'Poster', 'Poster frame', 'Picture frames', 'Family photo album', 'Mirror', 'Wall mirror', 'Decorative clock', 'Wall clock', 'Mantel clock', 'Decorative vase', 'Flower vase', 'Artificial flowers', 'Houseplant', 'Plant pot', 'Planter', 'Plant stand', 'Terrarium', 'Decorative tray', 'Coaster set', 'Serving tray', 'Decorative bowl', 'Candy dish', 'Key bowl', 'Decorative figurines', 'Sculpture', 'Statue', 'Collectible items', 'Trophy', 'Plaques', 'Seasonal decor', 'Holiday decorations', 'String lights', 'Decorative garland', 'Wreath', 'Candles', 'Scented candle', 'Candle holder', 'Lantern', 'Incense holder', 'Reed diffuser', 'Air freshener', 'Room spray',
            'Fireplace tools', 'Fireplace screen', 'Firewood rack', 'Firewood', 'Electric fireplace', 'Space heater', 'Portable fan', 'Humidifier', 'Dehumidifier', 'Air purifier', 'Thermostat', 'Smart thermostat', 'Batteries', 'Rechargeable batteries', 'Battery charger', 'Battery organizer', 'Flashlight', 'First aid kit', 'Fire extinguisher', 'Smoke detector', 'Carbon monoxide detector', 'Tool kit', 'Screwdriver set', 'Hammer', 'Tape measure', 'Scissors', 'Utility knife', 'Super glue', 'Duct tape', 'Masking tape', 'Command hooks', 'Picture hanging kit', 'Nails', 'Screws', 'Wall anchors', 'Furniture pads', 'Furniture sliders', 'Cleaning spray', 'Glass cleaner', 'Furniture polish', 'Microfiber cloths', 'Feather duster', 'Vacuum cleaner', 'Broom', 'Dustpan', 'Mop', 'Bucket', 'Carpet cleaner', 'Upholstery cleaner', 'Trash can', 'Trash bags', 'Recycling bin', 'Storage bins', 'Plastic storage tote', 'Decorative storage box', 'Mail organizer', 'Notepad', 'Pens', 'Clipboard', 'Sticky notes', 'Laptop', 'Tablet', 'E-reader', 'Digital photo frame', 'Camera', 'Camera charger', 'Tripod', 'Binoculars', 'Sunglasses', 'Reading glasses', 'Board games', 'Card games', 'Puzzle box', 'Chess set', 'Checkers set', 'Backgammon set', 'Dice set', 'Playing cards', 'Game storage box',
            'Record player', 'Vinyl records', 'CDs', 'CD storage case', 'Musical instrument', 'Guitar stand', 'Microphone', 'Microphone stand', 'Sheet music', 'Music books', 'Karaoke machine', 'Karaoke microphones', 'Bar cart', 'Wine rack', 'Wine glasses', 'Decanter', 'Bottle opener', 'Cocktail shaker', 'Ice bucket', 'Snack bowls', 'Popcorn bowl', 'Lap desk', 'Remote holder', 'Armrest organizer', 'Blanket ladder', 'Umbrella stand', 'Umbrella', 'Coat rack', 'Coat hanger', 'Hangers', 'Spare keys', 'Keychain', 'Key holder', 'Instruction manuals', 'Warranty documents', 'Small safe', 'Lock box', 'Important documents folder', 'Lint roller', 'Pet bed', 'Pet toys', 'Cat scratching post', 'Dog leash', 'Dog collar', 'Pet food container', 'Pet water bowl', 'Pet feeding mat', 'Hand sanitizer', 'Tissues', 'Tissue box cover'],

        Bedroom: ['King bed frame', 'Queen bed frame', 'Full bed frame', 'Twin bed frame', 'Adjustable bed base', 'Mattress', 'Mattress topper', 'Box spring', 'Bed skirt', 'Headboard', 'Footboard', 'Bed slats', 'Bunk bed', 'Daybed', 'Trundle bed', 'Murphy bed', 'Futon', 'Mattress protector', 'Pillow protectors', 'Memory foam pillow', 'Standard pillows', 'Decorative pillows', 'Pillowcases', 'Sheet set', 'Fitted sheet', 'Flat sheet', 'Duvet', 'Duvet cover', 'Comforter', 'Quilt', 'Bedspread', 'Blanket', 'Throw blanket', 'Electric blanket', 'Weighted blanket', 'Nightstand', 'Bedside table', 'Dresser', 'Chest of drawers', 'Wardrobe', 'Armoire', 'Closet organizer', 'Drawer organizer', 'Under-bed storage bins', 'Storage trunk', 'Storage bench', 'Bookshelf', 'Floating shelves',
            'Wall shelves', 'Full-length mirror', 'Vanity mirror', 'Vanity table', 'Vanity stool', 'Desk', 'Desk chair', 'Accent chair', 'Bench', 'Ottoman', 'Laundry hamper', 'Laundry basket', 'Clothing rack', 'Hangers', 'Shoe rack', 'Shoe organizer', 'Jewelry box', 'Watch box', 'Ring holder', 'Necklace stand', 'Makeup organizer', 'Makeup bag', 'Makeup mirror', 'Hair dryer', 'Hair straightener', 'Curling iron', 'Hair brush', 'Comb', 'Hair clips', 'Hair ties', 'Electric razor', 'Shaving kit', 'Perfume', 'Cologne', 'Deodorant', 'Lotion', 'Skincare products', 'Toiletry bag', 'Tissues', 'Tissue box cover', 'Hand sanitizer', 'Trash can', 'Trash bags', 'Rug', 'Area rug', 'Rug pad',
            'Runner rug', 'Carpet stain remover', 'Vacuum cleaner', 'Broom', 'Dustpan', 'Mop', 'Bucket', 'Cleaning spray', 'Disinfecting wipes', 'Microfiber cloths', 'Laundry detergent', 'Fabric softener', 'Iron', 'Ironing board', 'Clothes steamer', 'Lint roller', 'Sewing kit', 'Pajamas', 'Robe', 'Slippers', 'Underwear', 'Socks', 'Belts', 'Scarves', 'Hats', 'Gloves', 'Jackets', 'Coats', 'Sweaters', 'Shirts', 'Pants', 'Jeans', 'Dresses', 'Skirts', 'Shorts', 'Workout clothes', 'Swimwear', 'Shoes', 'Boots', 'Heels', 'Sandals', 'Sneakers', 'Handbag', 'Backpack', 'Suitcase', 'Wallet', 'Sunglasses', 'Reading glasses', 'Alarm clock',
            'Smart alarm clock', 'Table lamp', 'Bedside lamp', 'Floor lamp', 'Lamp shade', 'Light bulbs', 'Smart bulbs', 'Smart plug', 'Ceiling fan remote', 'Curtains', 'Drapes', 'Sheer curtains', 'Curtain rods', 'Curtain rings', 'Blinds', 'Window shades', 'Blackout curtains', 'Decorative wall art', 'Framed pictures', 'Canvas print', 'Photo frames', 'Photo album', 'Books', 'Journal', 'Notebook', 'Pens', 'Sticky notes', 'Important documents', 'Document organizer', 'Safe', 'Lock box', 'Laptop', 'Tablet', 'Phone charger', 'Charging cable', 'Charging dock', 'Power strip', 'Surge protector', 'Extension cord', 'Bluetooth speaker', 'Headphones', 'Television', 'Remote control', 'Streaming device', 'Wi-Fi router', 'Fan', 'Space heater', 'Humidifier', 'Air purifier', 'Dehumidifier', 'Essential oil diffuser',
            'Essential oils', 'Room spray', 'Candles', 'Candle holder', 'Matches', 'Lighter', 'First aid kit', 'Fire extinguisher', 'Smoke detector', 'Carbon monoxide detector', 'Thermostat', 'Batteries', 'Battery charger', 'Battery organizer', 'Flashlight', 'Water bottle', 'Nightstand tray', 'Coasters', 'Decorative tray', 'Stuffed animals', 'Kids toys', 'Pet bed', 'Pet toys'],

        Bathroom: ['Bath towels', 'Hand towels', 'Washcloths', 'Bath sheet', 'Beach towel', 'Bathrobe', 'Shower curtain', 'Shower curtain liner', 'Shower curtain rings', 'Shower rod', 'Tension rod', 'Bath mat', 'Shower mat', 'Non-slip tub mat', 'Toilet', 'Toilet tank lid', 'Toilet seat', 'Toilet brush', 'Toilet brush holder', 'Toilet plunger', 'Toilet paper holder', 'Toilet paper', 'Spare toilet paper rolls', 'Toilet paper storage stand', 'Toilet paper basket', 'Toilet bowl cleaner', 'Toilet cleaning tablets', 'Toilet spray', 'Bathroom sink', 'Sink stopper', 'Faucet', 'Faucet aerator', 'Drain cover', 'Soap dispenser', 'Hand soap', 'Bar soap', 'Soap dish', 'Toothbrush', 'Electric toothbrush', 'Toothbrush heads', 'Toothbrush holder', 'Toothpaste', 'Dental floss', 'Floss picks', 'Mouthwash', 'Tongue scraper', 'Retainer case', 'Denture cup', 'Cotton swabs', 'Cotton balls', 'Makeup remover wipes', 'Facial tissues', 'Tissue box cover', 'Mirror', 'Medicine cabinet', 'Vanity cabinet',
            'Bathroom vanity', 'Vanity countertop', 'Vanity mirror', 'Magnifying mirror', 'Shower', 'Shower head', 'Handheld shower head', 'Shower hose', 'Shower caddy', 'Shampoo', 'Conditioner', 'Body wash', 'Face wash', 'Exfoliating scrub', 'Loofah', 'Body sponge', 'Bath pouf', 'Bath salts', 'Bubble bath', 'Bath bomb', 'Shaving cream', 'Razor', 'Razor blades', 'Aftershave', 'Lotion', 'Body lotion', 'Facial moisturizer', 'Sunscreen', 'Deodorant', 'Perfume', 'Cologne', 'Hair brush', 'Comb', 'Hair ties', 'Hair clips', 'Hair pins', 'Hair dryer', 'Hair straightener', 'Curling iron', 'Diffuser attachment', 'Hair trimmer', 'Nail clippers', 'Nail file', 'Cuticle trimmer', 'Tweezers', 'Scissors', 'Makeup bag', 'Makeup organizer', 'Makeup brushes', 'Makeup sponges', 'Foundation', 'Concealer', 'Powder', 'Blush', 'Bronzer', 'Highlighter', 'Eyeshadow palette', 'Eyeliner', 'Mascara', 'Lipstick', 'Lip gloss', 'Lip balm',
            'Makeup setting spray', 'Makeup remover', 'Micellar water', 'Facial cleanser', 'Face mask', 'Facial toner', 'Serum bottles', 'Acne treatment', 'First aid kit', 'Bandages', 'Antiseptic cream', 'Hydrogen peroxide', 'Rubbing alcohol', 'Thermometer', 'Heating pad', 'Hot water bottle', 'Pain reliever', 'Allergy medicine', 'Cold medicine', 'Vitamins', 'Prescription medications', 'Contact lens solution', 'Contact lens case', 'Eyeglass cleaner', 'Cotton rounds', 'Disposable razors', 'Sanitary pads', 'Tampons', 'Feminine wipes', 'Feminine wash', 'Condoms', 'Personal lubricant', 'Baby wipes', 'Diaper cream', 'Bath toys', 'Step stool', 'Kids potty seat', 'Trash can', 'Trash bags', 'Recycling bin', 'Air freshener', 'Room spray', 'Reed diffuser', 'Scented candle', 'Candle holder', 'Matches', 'Lighter', 'Night light', 'Light bulbs', 'Vanity light bulbs', 'Exhaust fan', 'Exhaust fan cover', 'Vent cover', 'Humidifier', 'Dehumidifier', 'Space heater', 'Scale', 'Bathroom organizer bins', 'Drawer organizer', 'Shelf liners', 'Storage baskets', 'Wicker basket', 'Under-sink organizer', 'Over-the-toilet shelf', 'Wall shelves', 'Towel rack', 'Towel bar', 'Towel hooks', 'Robe hooks', 'Shower door', 'Shower door track', 'Tub', 'Bath pillow', 'Bath tray', 'Waterproof speaker', 'Bluetooth speaker',
            'Phone charger', 'Extension cord', 'Surge protector', 'Cleaning gloves', 'Disinfecting wipes', 'Bathroom cleaner', 'Glass cleaner', 'Tile cleaner', 'Grout brush', 'Scrub brush', 'Sponge', 'Microfiber cloths', 'Paper towels', 'Bleach', 'Mold remover', 'Drain cleaner', 'Plunger', 'Broom', 'Dustpan', 'Mop', 'Bucket', 'Vacuum cleaner', 'Lint roller', 'Laundry hamper', 'Laundry basket'],


        Loft: ['Sofa', 'Loveseat', 'Sectional sofa', 'Futon', 'Sleeper sofa', 'Recliner', 'Armchair', 'Accent chair', 'Bean bag chair', 'Floor cushions', 'Ottoman', 'Storage ottoman', 'Coffee table', 'End table', 'Side table', 'Console table', 'TV stand', 'Media console', 'Entertainment center', 'Wall-mounted TV bracket', 'Television', 'Streaming device', 'Cable box', 'DVD player', 'Soundbar', 'Subwoofer', 'Surround sound speakers', 'Receiver', 'Remote control', 'Universal remote', 'Gaming console', 'Game controllers', 'VR headset', 'Board games', 'Card games', 'Puzzle box', 'Chess set', 'Playing cards', 'Game storage bin', 'Video game storage case', 'Bookshelf', 'Bookcase', 'Floating shelves', 'Wall shelves', 'Storage cabinet', 'Display cabinet', 'Storage baskets', 'Woven basket', 'Storage bins', 'Plastic storage tote', 'Toy storage bin', 'Magazine rack',
            'Books', 'Comic books', 'Graphic novels', 'Coffee table books', 'Desk', 'Computer desk', 'Writing desk', 'Office chair', 'Desk lamp', 'Laptop', 'Tablet', 'Monitor', 'Keyboard', 'Mouse', 'Printer', 'Printer paper', 'Ink cartridges', 'Shredder', 'File box', 'File folders', 'Binders', 'Document organizer', 'Notepad', 'Pens', 'Sticky notes', 'Clipboard', 'Whiteboard', 'Dry erase markers', 'Corkboard', 'Push pins', 'Headphones', 'Microphone', 'Webcam', 'Charging dock', 'Phone charger', 'Charging cable', 'Power strip', 'Surge protector', 'Extension cord', 'Wi-Fi router', 'Internet modem', 'Smart speaker', 'Bluetooth speaker', 'Smart home hub', 'Floor lamp', 'Table lamp', 'Reading lamp', 'Lamp shade', 'Light bulbs', 'Smart bulbs', 'Smart plug', 'Ceiling fan remote', 'Area rug', 'Runner rug', 'Rug pad', 'Throw blanket', 'Decorative pillows', 'Pillow covers', 'Curtains', 'Drapes', 'Sheer curtains', 'Curtain rods', 'Curtain rings', 'Blinds', 'Window shades', 'Wall art', 'Framed pictures', 'Canvas print', 'Picture frames', 'Photo album', 'Digital photo frame', 'Mirror', 'Wall clock', 'Decorative clock', 'Scented candle', 'Candle holder', 'Lantern', 'Reed diffuser', 'Room spray', 'Coaster set', 'Decorative tray', 'Decorative vase', 'Artificial flowers', 'Houseplant', 'Plant pot', 'Plant stand',
            'Vacuum cleaner', 'Broom', 'Dustpan', 'Mop', 'Bucket', 'Cleaning spray', 'Glass cleaner', 'Disinfecting wipes', 'Microfiber cloths', 'Trash can', 'Trash bags', 'Recycling bin', 'Laundry hamper', 'Laundry basket', 'Luggage', 'Suitcase', 'Backpack', 'Duffel bag', 'Shoes', 'Shoe rack', 'Coat rack', 'Umbrella stand', 'Seasonal decor', 'Holiday decorations', 'String lights', 'Decorative garland', 'Wreath', 'Curtain tiebacks', 'Window insulation kit', 'Space heater', 'Portable fan', 'Humidifier', 'Dehumidifier', 'Air purifier', 'Thermostat', 'Batteries', 'Battery charger', 'Flashlight', 'First aid kit', 'Fire extinguisher', 'Smoke detector', 'Carbon monoxide detector', 'Tool kit', 'Screwdriver set', 'Hammer', 'Tape measure', 'Scissors', 'Utility knife', 'Duct tape', 'Command hooks', 'Picture hanging kit', 'Nails', 'Screws', 'Furniture pads', 'Furniture sliders', 'Pet bed', 'Pet toys', 'Cat scratching post', 'Dog leash', 'Dog collar', 'Exercise mat', 'Yoga mat', 'Foam roller', 'Resistance bands', 'Small dumbbells', 'Treadmill', 'Stationary bike'],

        Basement: ['Sectional sofa', 'Sofa', 'Loveseat', 'Recliner', 'Futon', 'Bean bag chair', 'Folding chairs', 'Folding table', 'Coffee table', 'End table', 'Side table', 'Console table', 'TV stand', 'Media console', 'Entertainment center', 'Television', 'Projector', 'Projector screen', 'Streaming device', 'DVD player', 'Soundbar', 'Speakers', 'Receiver', 'Remote control', 'Gaming console', 'Game controllers', 'Board games', 'Card games', 'Puzzle box', 'Foosball table', 'Ping pong table', 'Pool table', 'Air hockey table', 'Dart board', 'Bar stools', 'Bar cart', 'Mini fridge', 'Beverage cooler', 'Ice maker', 'Microwave', 'Snack bowls', 'Serving tray', 'Wine rack', 'Wine glasses', 'Bottle opener', 'Coaster set', 'Area rug', 'Rug pad', 'Throw blankets', 'Decorative pillows', 'Floor lamp', 'Table lamp', 'Reading lamp', 'Light bulbs', 'Extension cord', 'Power strip', 'Surge protector', 'Wi-Fi router', 'Internet modem', 'Bluetooth speaker', 'Smart speaker', 'Bookshelf', 'Storage shelves', 'Utility shelving unit', 'Storage bins', 'Plastic storage totes', 'Storage trunk', 'Storage cabinet', 'Tool chest', 'Workbench', 'Pegboard', 'Tool kit', 'Hammer', 'Screwdriver set', 'Drill', 'Drill bits', 'Saw', 'Wrench set', 'Socket set', 'Pliers', 'Allen wrench set', 'Measuring tape', 'Level', 'Stud finder', 'Utility knife', 'Duct tape', 'Masking tape', 'Super glue', 'Nails', 'Screws', 'Wall anchors', 'Picture hanging kit', 'Extension ladder', 'Step ladder', 'Shop vacuum', 'Vacuum attachments', 'Broom', 'Dustpan', 'Mop', 'Bucket',
            'Cleaning spray', 'Disinfecting wipes', 'Microfiber cloths', 'Sponges', 'Trash can', 'Trash bags', 'Recycling bin', 'Dehumidifier', 'Humidifier', 'Air purifier', 'Space heater', 'Portable fan', 'Sump pump', 'Sump pump hose', 'Water alarm sensor', 'Moisture absorber', 'Air vent cover', 'HVAC filter', 'Storage freezer', 'Chest freezer', 'Extra refrigerator', 'Laundry hamper', 'Laundry basket', 'Ironing board', 'Iron', 'Sewing kit', 'Craft storage box', 'Art supplies', 'Paint cans', 'Paint brushes', 'Paint roller', 'Drop cloth', 'Spackle', 'Putty knife', 'Touch-up paint', 'Garden tools', 'Snow shovel', 'Rake', 'Leaf blower', 'Hedge trimmer', 'Lawn mower', 'Weed trimmer', 'Gas can', 'Extension cords', 'Power tool battery charger', 'Rechargeable batteries', 'Battery organizer', 'Flashlight', 'Emergency lantern', 'First aid kit', 'Fire extinguisher', 'Smoke detector', 'Carbon monoxide detector', 'Tool organizer', 'Parts organizer bins', 'Storage crates', 'Wooden crate', 'Plastic crate', 'Holiday decorations', 'Seasonal decor', 'Wrapping paper', 'Gift bags', 'Gift wrap storage container', 'Suitcase', 'Duffel bag', 'Backpack', 'Camping tent', 'Sleeping bag', 'Camping chairs', 'Cooler', 'Sports equipment bin', 'Bicycle', 'Bike helmet', 'Skateboard', 'Scooter', 'Weights', 'Dumbbells', 'Weight bench', 'Yoga mat', 'Resistance bands', 'Foam roller', 'Treadmill', 'Stationary bike'],

        Garage: ['Car', 'Motorcycle', 'Bicycle', 'Bike helmet', 'Bike pump', 'Bike lock', 'Bike repair kit', 'Bike rack', 'Skateboard', 'Scooter', 'Roller skates', 'Sports equipment bin', 'Basketballs', 'Soccer ball', 'Football', 'Baseball glove', 'Baseballs', 'Tennis racket', 'Golf clubs', 'Golf bag', 'Camping tent', 'Sleeping bags', 'Camping chairs', 'Cooler', 'Hiking backpack', 'Fishing rod', 'Tackle box', 'Life jackets', 'Kayak paddle', 'Tool chest', 'Workbench', 'Pegboard', 'Tool kit', 'Hammer', 'Screwdriver set', 'Drill', 'Drill bits', 'Saw', 'Circular saw', 'Jigsaw', 'Wrench set', 'Socket set', 'Pliers', 'Wire cutters', 'Utility knife', 'Tape measure', 'Level', 'Stud finder', 'Allen wrench set', 'Clamp set', 'Chisel set', 'Sander', 'Sandpaper', 'Paint brushes', 'Paint roller', 'Drop cloth', 'Paint cans', 'Primer', 'Spackle', 'Putty knife', 'Caulk', 'Caulk gun', 'Duct tape', 'Masking tape', 'Electrical tape', 'Super glue', 'Wood glue', 'Nails', 'Screws', 'Bolts', 'Washers', 'Wall anchors', 'Workbench vise', 'Extension ladder', 'Step ladder', 'Ladder stabilizer', 'Shop vacuum', 'Vacuum attachments', 'Air compressor', 'Air hose', 'Air tool set', 'Pressure washer', 'Garden hose', 'Hose reel', 'Sprinkler', 'Rake', 'Shovel', 'Snow shovel', 'Spade shovel', 'Leaf blower', 'Weed trimmer', 'Hedge trimmer', 'Lawn mower', 'String trimmer line', 'Gas can', 'Fuel stabilizer', 'Motor oil', 'Oil filter', 'Oil drain pan', 'Funnel set', 'Windshield washer fluid', 'Antifreeze', 'Brake fluid', 'Power steering fluid', 'Transmission fluid', 'Car wax', 'Car wash soap', 'Sponges', 'Microfiber cloths', 'Car vacuum', 'Tire pressure gauge', 'Jumper cables', 'Battery charger', 'Portable jump starter', 'Car jack', 'Jack stands', 'Tire iron', 'Lug wrench', 'Torque wrench', 'Spare tire', 'Tire chains', 'Tire inflator', 'Tool organizer bins',
            'Parts organizer', 'Storage shelves', 'Utility shelving unit', 'Storage cabinet', 'Storage bins', 'Plastic storage totes', 'Storage trunk', 'Storage crates', 'Wooden crate', 'Plastic crate', 'Wall hooks', 'Ceiling storage rack', 'Bike ceiling hooks', 'Bungee cords', 'Ratchet straps', 'Rope', 'Extension cords', 'Power strip', 'Surge protector', 'Work light', 'Flashlight', 'Headlamp', 'Lantern', 'Batteries', 'Rechargeable batteries', 'Battery organizer', 'Power tool battery charger', 'Power tool batteries', 'Cordless tool set', 'Circular saw blades', 'Saw horses', 'Safety goggles', 'Work gloves', 'Hearing protection', 'Dust mask', 'Respirator', 'Hard hat', 'First aid kit', 'Fire extinguisher', 'Smoke detector', 'Carbon monoxide detector', 'Bug spray', 'Rodent traps', 'Insect traps', 'Trash can', 'Trash bags', 'Recycling bin', 'Broom', 'Dustpan', 'Push broom', 'Mop', 'Bucket', 'Degreaser', 'Cleaning spray', 'Disinfecting wipes', 'Floor squeegee', 'Ice melt', 'Road salt', 'Door mat', 'Doormat scraper', 'Laundry detergent storage', 'Cooler storage bin', 'Holiday decorations', 'Seasonal decor', 'Wrapping paper storage box', 'Gift bags', 'Suitcases', 'Duffel bags', 'Backpacks', 'Stroller', 'Wagon', 'Folding chairs', 'Folding table', 'Patio cushions', 'Pool noodles', 'Inflatable pool toys', 'Plastic storage drawers', 'Workbench stool', 'Garage door opener', 'Garage door remote', 'Keypad entry device', 'Smart garage hub', 'Extension cord reel', 'Tool belt', 'Magnetic tool holder', 'Sharpening stone', 'Grease gun', 'Car ramps', 'Wheel chocks'],

        Laundry: ['Washing machine', 'Dryer', 'Washer pedestal', 'Dryer pedestal', 'Washer hoses', 'Dryer vent hose', 'Dryer vent clamp', 'Dryer lint trap', 'Lint trap brush', 'Lint roller', 'Laundry sink', 'Sink faucet', 'Sink stopper', 'Drain strainer', 'Laundry sink cabinet', 'Utility sink basin', 'Laundry countertop', 'Folding table', 'Folding station', 'Drying rack', 'Wall-mounted drying rack', 'Hanging drying rack', 'Clothesline', 'Clothesline rope', 'Clothes pins', 'Clothes hangers', 'Hanger hooks', 'Hanging rod', 'Iron', 'Ironing board', 'Ironing board cover', 'Spray bottle', 'Fabric steamer', 'Wrinkle release spray', 'Sewing kit', 'Needle and thread', 'Safety pins', 'Buttons', 'Zippers', 'Lint brush', 'Laundry hamper', 'Laundry basket', 'Rolling laundry cart', 'Laundry sorter', 'Mesh laundry bags', 'Delicates bag', 'Sock clips', 'Clothing clips', 'Laundry detergent', 'Detergent pods', 'Laundry soap', 'Fabric softener', 'Dryer sheets', 'Wool dryer balls', 'Scent booster beads', 'Bleach', 'Oxygen bleach', 'Stain remover spray', 'Stain remover pen', 'Pre-treatment spray', 'Laundry disinfectant', 'Color catcher sheets', 'Water softener', 'Iron remover', 'Borax', 'Baking soda', 'Vinegar jug', 'Laundry sanitizer', 'Spot cleaning solution', 'Upholstery cleaner', 'Carpet stain remover', 'Pet stain remover', 'Odor eliminator', 'Air freshener', 'Room spray', 'Reed diffuser', 'Dehumidifier', 'Humidifier', 'Portable fan', 'Space heater', 'Cleaning gloves', 'Rubber gloves', 'Microfiber cloths', 'Cleaning rags', 'Paper towels', 'All-purpose cleaner', 'Disinfecting wipes', 'Glass cleaner', 'Scrub brush', 'Sponge', 'Bucket', 'Mop', 'Broom', 'Dustpan', 'Vacuum cleaner', 'Shop vacuum', 'Vacuum attachments', 'Floor squeegee', 'Drain cleaner', 'Plunger', 'Trash can', 'Trash bags', 'Recycling bin', 'Storage shelves', 'Utility shelving unit', 'Storage cabinet',
            'Wall shelves', 'Overhead storage rack', 'Storage bins', 'Plastic storage totes', 'Storage baskets', 'Wicker basket', 'Drawer organizer', 'Label maker', 'Labels', 'Permanent marker', 'Laundry detergent dispenser', 'Measuring cup', 'Measuring scoop', 'Detergent storage container', 'Bleach bottle', 'Spray bottle holder', 'Cleaning caddy', 'Laundry caddy', 'Hanging organizer', 'Over-the-door hooks', 'Wall hooks', 'Pegboard organizer', 'Tool kit', 'Screwdriver set', 'Hammer', 'Tape measure', 'Utility knife', 'Duct tape', 'Extension cord', 'Power strip', 'Surge protector', 'Light bulbs', 'Step stool', 'Folding step stool', 'Stool', 'Bench', 'Mat', 'Anti-fatigue mat', 'Rug', 'Runner rug', 'Rug pad', 'Laundry room curtains', 'Window blinds', 'Window shades', 'Curtain rods', 'Curtain rings', 'Laundry signage decor', 'Wall art', 'Clock', 'Wall clock', 'Timer', 'Dryer timer', 'Laundry schedule chart', 'Whiteboard', 'Dry erase markers', 'Board eraser', 'Corkboard', 'Push pins', 'Notepad', 'Pens', 'Sticky notes', 'Lost sock basket', 'Sock drawer organizer', 'Clothing repair patch kit', 'Hem tape', 'Fabric glue', 'Garment bag', 'Suit bag', 'Shoe drying rack', 'Boot dryer', 'Pet hair remover', 'Steam mop', 'Water leak detector', 'Smoke detector', 'Carbon monoxide detector', 'Fire extinguisher', 'First aid kit', 'Batteries', 'Battery organizer', 'Flashlight'],

        'Shed / Storage Unit': ['Storage shelves', 'Utility shelving unit', 'Storage cabinet', 'Workbench', 'Tool chest', 'Pegboard', 'Tool kit', 'Hammer', 'Screwdriver set', 'Drill', 'Drill bits', 'Saw', 'Wrench set', 'Socket set', 'Pliers', 'Wire cutters', 'Utility knife', 'Tape measure', 'Level', 'Allen wrench set', 'Duct tape', 'Masking tape', 'Electrical tape', 'Super glue', 'Wood glue', 'Nails', 'Screws', 'Bolts', 'Washers', 'Parts organizer', 'Tool belt', 'Extension cord', 'Power strip', 'Work light', 'Flashlight', 'Headlamp', 'Lantern', 'Batteries', 'Battery charger', 'Rechargeable batteries', 'Battery organizer', 'Step ladder', 'Extension ladder', 'Saw horses', 'Clamps', 'Sharpening stone', 'Gloves', 'Safety goggles', 'Dust mask', 'Respirator', 'First aid kit', 'Fire extinguisher', 'Broom', 'Dustpan', 'Mop', 'Bucket', 'Trash can', 'Trash bags', 'Recycling bin', 'Garden hose', 'Hose reel', 'Sprinkler', 'Watering can', 'Plant mister', 'Rake', 'Leaf rake', 'Shovel', 'Spade shovel', 'Snow shovel', 'Hoe', 'Garden trowel', 'Hand cultivator', 'Pruning shears', 'Loppers', 'Hedge trimmer', 'Weed trimmer', 'Leaf blower', 'Lawn mower', 'Wheelbarrow', 'Garden cart', 'Potting soil', 'Fertilizer', 'Seed packets', 'Plant pots', 'Planters', 'Potting bench', 'Compost bin', 'Insect repellent', 'Pesticide sprayer', 'Rodent traps', 'Bug traps', 'Tarps', 'Bungee cords', 'Ratchet straps', 'Rope', 'Chain', 'Padlock', 'Key box', 'Camping tent', 'Cooler', 'Folding chairs', 'Folding table', 'Sports equipment bin', 'Bicycle pump', 'Bike repair kit', 'Lawn chair cushions', 'Seasonal decor storage bin'],

        Yard: ['Lawn mower', 'Weed trimmer', 'Leaf blower', 'Hedge trimmer', 'Garden hose', 'Hose reel', 'Sprinkler', 'Watering can', 'Rake', 'Leaf rake', 'Shovel', 'Spade shovel', 'Snow shovel', 'Garden trowel', 'Hand cultivator', 'Hoe', 'Pruning shears', 'Loppers', 'Wheelbarrow', 'Garden cart', 'Fertilizer', 'Potting soil', 'Seed packets', 'Plant pots', 'Planters', 'Outdoor trash can', 'Yard waste bags', 'Compost bin', 'Outdoor broom', 'Patio furniture set']
    };

    const ITEM_IMAGE_OVERRIDES = {
        'tomato, sauce, paste': "inventory_item_pictures/Screenshot 2025-12-02 102457.png",
        'vegetables': "inventory_item_pictures/Screenshot 2025-12-02 102852.png",
        'answering machine': "inventory_item_pictures/Screenshot 2025-12-02 103045.png",
        'cell phone': "inventory_item_pictures/Screenshot 2025-12-02 104348.png",
        'clocks': "inventory_item_pictures/Screenshot 2025-12-02 103256.png",
        'iPod player': "inventory_item_pictures/Screenshot 2026-01-14 114127.png",
        'Telephone' :"inventory_item_pictures/Screenshot 2026-01-14 114150.png",
        'Undercabinet TV, stereo' : "inventory_item_pictures/Screenshot 2026-01-14 114206.png",
        'Food in Freezer'  : "inventory_item_pictures/Screenshot 2026-01-14 114218.png",
        'Food in Frig'   : "inventory_item_pictures/Screenshot 2026-01-14 114233.png",
        'Pantry food'   : "inventory_item_pictures/Screenshot 2026-01-14 114245.png",
        'Spices'   : "inventory_item_pictures/Screenshot 2026-01-14 114257.png",
        'Bar stools': "inventory_item_pictures/Screenshot 2026-01-14 114317.png",
        'Butcher block': "inventory_item_pictures/Screenshot 2026-01-14 114340.png"
        /*
        'Desk and chair': ,
        'Stepladder': ,
        'Stools': ,
        'Table': ,
        'Table and chairs': ,
        'Table, tray, TV': ,
        'Wine rack': ,
        'Address book': ,
        'Aerolatte': ,
        'Apple corer': ,
        'Area rug': ,
        'Bar serviceware': ,
        'Basting brush': ,
        'Batteries': ,
        'Bottle openers': ,
        'Bowls': ,
        'Bread box': ,
        'Butter dish': ,
        'Can opener': ,
        'Candy dish': ,
        'Canister set': ,
        'Canning jars': ,
        'Canvas grocery bags': ,
        'Cheese grater': ,
        'Cheese slicer and serving board': ,
        'Cheese slicers/knives': ,
        'Coasters': ,
        'Colander': ,
        'Cookbook holders': ,
        'Cookie jar': ,
        'Corn cob butter holder': ,
        'Corn cob holders': ,
        'Cutlery trays': ,
        'Envelopes, stamps': ,
        'Gum': ,
        'Matches': ,
        'Measuring tape': ,
        'Memo board': ,
        'Paper clips': ,
        'Pens, pencils, markers': ,
        'Post it notes': ,
        'Rubber bands': ,
        'Ruler': ,
        'Scissors': ,
        'String': ,
        'Tape, scotch, labeling': ,
        'Thumb tacks': ,
        'Tools, basics': ,
        'Shoelaces': ,
        'Toothpicks': ,
        'Baking Cups': ,
        'Cups (Cold Beverage, Hot Beverage)': ,
        'Food Storage Bags': ,
        'Freezer Bags': ,
        'Kitchen Parchment (Non-stick Pan-liner)': ,
        'Lunch Bags': ,
        'Napkins': ,
        'Paper Towels': ,
        'Plates': ,
        'Sandwich Bags': ,
        'Saran wrap, bags, al foil, wax paper etc': ,
        'Shelf-lining Paper': ,
        'Apple peeler/corer': ,
        'Blender': ,
        'Blender, handheld': ,
        'Bread machine': ,
        'Cappuccino/coffee maker': ,
        'Coffee grinder': ,
        'Crockpot': ,
        'Deep fat fryer': ,
        'Dehydrator system': ,
        'Fondue set': ,
        'Food processor': ,
        'Food processor, mini': ,
        'Grille': ,
        'Ice cream/yogurt maker': ,
        'Juicer': ,
        'Julian slicer set': ,
        'Microwave': ,
        'Mixer, hand, stand': ,
        'Pasta maker': ,
        'Cutting boards': ,
        'Decorative jars': ,
        'Dish organizers': ,
        'Drawer liners': ,
        'Flashlights': ,
        'Flour sifter': ,
        'Fly swatter': ,
        'Food grinder': ,
        'Food scale': ,
        'Garbage can and recycle': ,
        'Garlic press': ,
        'Gravy boats': ,
        'Grease cover': ,
        'Hand chopper': ,
        'Ice bucket and tongs': ,
        'Ice cream scoops': ,
        'Ice trays': ,
        'Key rings': ,
        'Keys': ,
        'Kitchen shears': ,
        'Knife block set': ,
        'Knife sharpener': ,
        'Lazy Susan': ,
        'Light bulbs': ,
        'Lighters': ,
        'Lint brushes': ,
        'Lunch totes': ,
        'Magnet picture frames': ,
        'Magnets, refrigerator': ,
        'Napkin holder': ,
        'Nut crackers': ,
        'Organizers, drawer, shelf, cabinet': ,
        'Paper towel holder': ,
        'Pastry brushes': ,
        'Pepper mill': ,
        'Picnic basket set': ,
        'Pie pans': ,
        'Pitchers': ,
        'Plastic bowls, plates and lids': ,
        'Potato peeler': ,
        'Recipie boxes': ,
        'Recycle cans': ,
        'Salad spinner': ,
        'Salt and pepper set': ,
        'Salt grinder': ,
        'saran wrap': ,
        'bags': ,
        'al foil': ,
        'wax paper': ,
        'Serving trays': ,
        'Popcorn popper': ,
        'Pressure cooker': ,
        'Rice cooker': ,
        'Sandwich maker grille': ,
        'Tea kettle, electric, stovetop': ,
        'Thermal carafe': ,
        'Toaster': ,
        'Toaster oven': ,
        'Waffle grille': ,
        'Allspice': ,
        'Basil': ,
        'Bay Leaves': ,
        'Bouillon Cubes': ,
        'Cayenne Pepper': ,
        'Celery Seed or Salt': ,
        'Chili Powder': ,
        'Chives': ,
        'Cinnamon': ,
        'Cloves (Whole & Powdered)': ,
        'Cream of Tartar': ,
        'Cumin': ,
        'Curry Powder': ,
        'Dill': ,
        'Food Coloring': ,
        'Garlic Powder or Salt': ,
        'Ginger': ,
        'Italian Seasoning': ,
        'Maple Flavoring': ,
        'Marjoram': ,
        'Mustard Powder': ,
        'Nutmeg': ,
        'Onion Salt, Powder, or Flakes': ,
        'Oregano': ,
        'Paprika': ,
        'Parsley Flakes': ,
        'Pepper': ,
        'Peppercorns': ,
        'Poultry Seasoning': ,
        'Rosemary': ,
        'Sage': ,
        'Salt': ,
        'Salt Substitute': ,
        'Seasoned Stock Base': ,
        'Seasoning Salt': ,
        'Sugar Substitute': ,
        'Sugar, Brown': ,
        'Sugar, Granulated': ,
        'Tarragon': ,
        'Thyme': ,
        'Vanilla Flavoring': ,
        'Shoe horns': ,
        'Shoe polish': ,
        'Silverware 5 piece service settings': ,
        'Steak knife sets': ,
        'Steamer': ,
        'Sugar and creamer': ,
        'Sun tea jars': ,
        'Tea ball': ,
        'Tea pot': ,
        'Thermos': ,
        'Tomato strainer': ,
        'Tongs': ,
        'Towels, cleaning rags': ,
        'Trash cans': ,
        'Trivets': ,
        'Tupperware': ,
        'Utensil caddy': ,
        'Utensil crock': ,
        'Vacuum storage bags and rolls': ,
        'Wine opener': ,
        'Wisks': ,
        'Wok set': ,
        'Aprons': ,
        'Napkins and napkin rings': ,
        'Placemats': ,
        'Potholders': ,
        'Tablecloths': ,
        'Towels, hand, dish': ,
        'Window coverings': ,
        'Antacid': ,
        'Anti-itch creams': ,
        'Aspirin': ,
        'Cold/Allergy Medicine': ,
        'Cough drops': ,
        'Cough medicine': ,
        'Hydrogen peroxide': ,
        'Insect repellant': ,
        'Laxatives': ,
        'Medications, vitimins': ,
        'Prescription Medication': ,
        'Relaxants': ,
        'Rubbing alcohol': ,
        'Sleeping aids': ,
        'Sunscreen': ,
        'Vitimins': ,
        'Witch hazel': ,
        'Candles': ,
        'Candy': ,
        'Meat thermometer': ,
        'Microwave cookware': ,
        'Mixing bowls': ,
        'Mortar and pestle': ,
        'Muffin tins': ,
        'Oven drip pan': ,
                */
    };

        const NORMALIZED_ITEM_IMAGE_OVERRIDES = Object.entries(ITEM_IMAGE_OVERRIDES).reduce((overrides, [key, value]) => {
        overrides[normalizeItemKey(key)] = value;
        return overrides;
    }, {});

    const ITEM_IMAGES = Object.entries(ITEM_OPTIONS).reduce((catalog, [category, items]) => {
        if (!Array.isArray(items)) return catalog;
        items.forEach((item) => {
            const key = normalizeItemKey(item);
            if (!(key in catalog)) {
                catalog[key] = '';
            }
        });
        return catalog;
    }, { ...NORMALIZED_ITEM_IMAGE_OVERRIDES });

    const MAX_RENDERED_CARDS = 10;
    const ACHIEVEMENT_ICONS = ['🌱', '👍', '💪', '😁', '😍', '🙌', '😎', '🏅', '✨', '🥳', '🚀', '🤖', '😸', '👽', '🌟', '🤯', '🔥', '🎉'];
    const ACHIEVEMENT_STEP = 10;
    const MILESTONE_STEP = 20;
    const CELEBRATION_BASE_CONFETTI = 32;
    const CELEBRATION_CONFETTI_STEP = 10;
    const CELEBRATION_EFFECTS = ['confetti', 'balloons', 'streamers', 'stars', 'sparks'];
    const roomQueues = new Map();
    const roomSwipeCounts = new Map();

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
        const submitterNameInput = document.getElementById('submitter-name');
        const submissionStatus = document.getElementById('submission-status');
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
                saveState(state);
                renderRooms(state.rooms);
                updateSubmissionData(state.rooms);
                return;
            }

            if (target.dataset.action === 'remove-room') {
                state.rooms = state.rooms.filter((entry) => entry.id !== roomId);
                roomSwipeCounts.delete(roomId);
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

        // submissionForm?.addEventListener('submit', () => {
        //     updateSubmissionData(state.rooms);
        // });
        submissionForm?.addEventListener('submit', async (event) => {
            event.preventDefault(); // stop default form submission
        
            updateSubmissionData(state.rooms);
        
            const payload = {
                name: submitterNameInput?.value?.trim() || '',
                rooms: state.rooms
            };
        
            if (submissionStatus instanceof HTMLElement) {
                submissionStatus.textContent = 'Sending to Power Automate...';
            }
        
            try {
                const response = await fetch('https://defaulta8611dc15eaa4824bfd7d17c684c07.4a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/1aa8c47acec34103b1695aac81bc32a3/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9PQ0B9xC4-gdMArZEZ9L_Yq1_5JLG1vVJYLQjrhgRAQ', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
        
                if (submissionStatus instanceof HTMLElement) {
                    submissionStatus.textContent = 'Submitted successfully!';
                }
            } catch (error) {
                console.error('Power Automate submit failed', error);
        
                if (submissionStatus instanceof HTMLElement) {
                    submissionStatus.textContent = 'Submit failed. Please try again.';
                }
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
                card.style.backgroundImage = `url('${imageUrl}')`;
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
                const nextCount = incrementRoomSwipeCount(roomId);
                setSwipeStatus(
                    status,
                    remaining ? `${remaining} item${remaining === 1 ? '' : 's'} left` : 'No more items to review. Great job!',
                    { includeAchievement: true, roomId }
                );
                triggerMilestoneEffect(nextCount);
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

        function triggerMilestoneEffect(swipeCount) {
            if (!swipeCount || swipeCount % MILESTONE_STEP !== 0) return;
            const celebrationLevel = Math.floor(swipeCount / MILESTONE_STEP);
            const confettiCount = CELEBRATION_BASE_CONFETTI + (celebrationLevel - 1) * CELEBRATION_CONFETTI_STEP;
            const celebration = document.createElement('div');
            celebration.className = 'milestone-celebration';
            celebration.style.setProperty('--celebration-strength', `${Math.min(celebrationLevel, 6)}`);

            const effectIndex = (celebrationLevel - 1) % CELEBRATION_EFFECTS.length;
            const effect = CELEBRATION_EFFECTS[effectIndex];
            celebration.dataset.effect = effect;

            const colors = ['#ff6b6b', '#ffd93d', '#6bc5ff', '#7cffc4', '#b28dff', '#ff9f1c'];

            if (effect === 'confetti') {
                for (let i = 0; i < confettiCount; i += 1) {
                    const piece = document.createElement('span');
                    piece.className = 'confetti-piece';
                    piece.style.left = `${Math.random() * 100}%`;
                    piece.style.background = colors[i % colors.length];
                    piece.style.animationDelay = `${Math.random() * 0.4}s`;
                    piece.style.animationDuration = `${1.6 + Math.random() * 1.2}s`;
                    piece.style.transform = `translateY(-20vh) rotate(${Math.random() * 360}deg)`;
                    celebration.appendChild(piece);
                }
            }

            if (effect === 'balloons') {
                const balloonCount = 12 + celebrationLevel * 2;
                for (let i = 0; i < balloonCount; i += 1) {
                    const balloon = document.createElement('span');
                    balloon.className = 'balloon';
                    balloon.style.left = `${Math.random() * 100}%`;
                    balloon.style.background = colors[i % colors.length];
                    balloon.style.animationDelay = `${Math.random() * 0.6}s`;
                    balloon.style.animationDuration = `${3.2 + Math.random() * 1.6}s`;
                    const size = 24 + Math.random() * 18;
                    balloon.style.width = `${size}px`;
                    balloon.style.height = `${size * 1.2}px`;
                    celebration.appendChild(balloon);
                }
            }

            if (effect === 'streamers') {
                const streamerCount = 18 + celebrationLevel * 2;
                for (let i = 0; i < streamerCount; i += 1) {
                    const streamer = document.createElement('span');
                    streamer.className = 'streamer';
                    streamer.style.left = `${Math.random() * 100}%`;
                    streamer.style.background = colors[i % colors.length];
                    streamer.style.animationDelay = `${Math.random() * 0.5}s`;
                    streamer.style.animationDuration = `${2.2 + Math.random() * 1.2}s`;
                    streamer.style.height = `${50 + Math.random() * 60}px`;
                    celebration.appendChild(streamer);
                }
            }

            if (effect === 'stars') {
                const starCount = 24 + celebrationLevel * 2;
                for (let i = 0; i < starCount; i += 1) {
                    const star = document.createElement('span');
                    star.className = 'celebration-star';
                    star.textContent = '★';
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.color = colors[i % colors.length];
                    star.style.animationDelay = `${Math.random() * 0.6}s`;
                    star.style.animationDuration = `${1.6 + Math.random() * 1.4}s`;
                    star.style.fontSize = `${14 + Math.random() * 16}px`;
                    celebration.appendChild(star);
                }
            }

            if (effect === 'sparks') {
                const sparkCount = 28 + celebrationLevel * 2;
                for (let i = 0; i < sparkCount; i += 1) {
                    const spark = document.createElement('span');
                    spark.className = 'spark';
                    spark.style.left = `${Math.random() * 100}%`;
                    spark.style.top = `${20 + Math.random() * 60}%`;
                    spark.style.background = colors[i % colors.length];
                    spark.style.animationDelay = `${Math.random() * 0.3}s`;
                    spark.style.animationDuration = `${1.2 + Math.random() * 1.1}s`;
                    const size = 6 + Math.random() * 10;
                    spark.style.width = `${size}px`;
                    spark.style.height = `${size}px`;
                    celebration.appendChild(spark);
                }
            }

            document.body.appendChild(celebration);
            window.setTimeout(() => {
                celebration.remove();
            }, 2600);
        }
    });


})();


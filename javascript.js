(function () {
    const STORAGE_KEY = 'joggerData';
    const DEFAULT_CATEGORY = 'Other';
    const ITEM_OPTIONS = {
        Kitchen: ['refrigerator', 'refrigerator shelves', 'refrigerator drawers', 'refrigerator door bins', 'freezer', 'freezer shelves', 'freezer drawers', 'ice maker', 'ice bin', 'water dispenser', 'range', 'cooktop', 'oven', 'oven racks', 'oven drawer', 'range hood', 'range hood filter', 'microwave', 'microwave turntable', 'dishwasher', 'dishwasher racks', 'dishwasher utensil basket', 'garbage disposal', 'kitchen sink', 'sink faucet', 'sprayer nozzle', 'soap dispenser', 'instant hot water tap', 'water filter system', 'kitchen island', 'island countertop', 'bar stools', 'upper cabinets', 'lower cabinets', 'pantry cabinet', 'lazy susan', 'drawer organizers', 'cutlery tray', 'spice rack', 'wine rack', 'trash can', 'recycling bin', 'compost bin', 'paper towel holder', 'dish rack', 'drying mat', 'fire extinguisher', 'step ladder', 'ceiling light fixture',
'toaster', 'toaster oven', 'air fryer', 'slow cooker', 'pressure cooker', 'rice cooker', 'electric kettle', 'coffee maker', 'espresso machine', 'coffee grinder', 'French press', 'single serve coffee maker', 'blender', 'immersion blender', 'stand mixer', 'hand mixer', 'food processor', 'hand chopper', 'juicer', 'electric griddle', 'waffle maker', 'panini press', 'indoor grill', 'electric skillet', 'bread maker', 'sous vide cooker', 'countertop ice maker', 'wine cooler', 'beverage fridge', 'kitchen scale', 'digital thermometer', 'knife block', 'chef knife', 'paring knife', 'bread knife', 'carving knife', 'utility knife', 'steak knives', 'kitchen shears', 'knife sharpener', 'cutting board wood', 'cutting board plastic', 'cutting board bamboo', 'mixing bowl set', 'measuring cups', 'measuring spoons', 'liquid measuring cup', 'colander', 'mesh strainer', 'salad spinner',
'baking sheet', 'cookie sheet', 'muffin pan', 'cake pan', 'springform pan', 'loaf pan', 'pie dish', 'roasting pan', 'broiler pan', 'cooling rack', 'pizza stone', 'casserole dish', 'Dutch oven', 'stock pot', 'saucepan', 'frying pan', 'nonstick skillet', 'cast iron skillet', 'wok', 'grill pan', 'saute pan', 'pot lids', 'splatter screen', 'trivet', 'spatula', 'rubber spatula', 'whisk', 'ladle', 'slotted spoon', 'serving spoon', 'tongs', 'pasta server', 'turner', 'wooden spoon', 'can opener', 'bottle opener', 'wine opener', 'garlic press', 'vegetable peeler', 'box grater', 'zester', 'citrus juicer', 'meat tenderizer', 'potato masher', 'ice cream scoop', 'melon baller', 'apple corer', 'mandoline slicer', 'basting brush', 'flour sifter',
'aluminum foil', 'plastic wrap', 'parchment paper', 'wax paper', 'food storage bags', 'vacuum sealer', 'vacuum sealer bags', 'food storage containers', 'glass containers', 'plastic containers', 'spice jars', 'salt shaker', 'pepper shaker', 'salt grinder', 'pepper grinder', 'oil bottle', 'vinegar bottle', 'sugar canister', 'flour canister', 'coffee canister', 'tea canister', 'bread box', 'napkin holder', 'dish towels', 'hand towels', 'oven mitts', 'pot holders', 'apron', 'tablecloth', 'placemats', 'cloth napkins', 'kitchen rug', 'anti fatigue mat', 'window blinds', 'curtains', 'curtain rod', 'wall clock', 'wall art', 'bulletin board', 'cookbook stand', 'cookbooks', 'recipe box', 'tablet stand', 'charging station', 'smart speaker', 'television', 'bar cart', 'china cabinet', 'buffet table', 'sideboard',
'dining table', 'dining chairs', 'serving tray', 'serving platter', 'serving bowl', 'gravy boat', 'plate set', 'salad plates', 'dinner plates', 'bowls', 'cereal bowls', 'soup bowls', 'mugs', 'coffee cups', 'tea cups', 'saucers', 'drinking glasses', 'wine glasses', 'champagne flutes', 'cocktail glasses', 'shot glasses', 'water pitcher', 'ice bucket', 'cake stand', 'tiered tray', 'butter dish', 'sugar bowl', 'cream pitcher', 'utensil crock', 'paper towel rolls', 'dish soap', 'hand soap', 'cleaning spray', 'disinfecting wipes', 'sponges', 'scrub brushes', 'dish brush', 'broom', 'dustpan', 'mop', 'mop bucket', 'vacuum', 'steam mop', 'trash bags', 'recycling bags', 'light bulbs', 'extension cord', 'power strip', 'smoke detector', 'carbon monoxide detector',
'pantry shelves', 'canned goods', 'dry pasta', 'rice bags', 'flour bags', 'sugar bags', 'baking powder', 'baking soda', 'cornstarch', 'cooking oil', 'olive oil', 'vegetable oil', 'vinegar', 'soy sauce', 'hot sauce', 'ketchup', 'mustard', 'mayonnaise', 'salad dressing', 'peanut butter', 'jam', 'honey', 'cereal boxes', 'granola', 'oatmeal', 'snack chips', 'crackers', 'cookies', 'nuts', 'dried fruit', 'spice containers', 'tea boxes', 'coffee bags', 'paper plates', 'plastic cups', 'plastic utensils', 'food wrap dispenser', 'can rack', 'step stool', 'rolling cart', 'storage bins', 'label maker', 'labels', 'drawer liners', 'cabinet liners', 'sink caddy', 'dish rack tray', 'water bottles', 'travel mugs', 'thermos',
'measuring scale', 'timer', 'oven thermometer', 'meat thermometer', 'grill thermometer', 'cooler', 'ice packs', 'picnic basket', 'serving tongs', 'salad tongs', 'cake server', 'pie server', 'ladle set', 'utensil set', 'mixing spoon set', 'skillet lid', 'stock pot lid', 'pressure cooker lid', 'slow cooker insert', 'slow cooker lid', 'air fryer basket', 'air fryer tray', 'microwave cover', 'microwave rack', 'dishwasher detergent', 'rinse aid', 'garbage bags', 'food clips', 'chip clips', 'bread ties', 'rolling pin', 'pastry mat', 'cookie cutters', 'decorating tips', 'icing spatula', 'cooling mat', 'spice grinder', 'mortar and pestle', 'herb scissors', 'oil sprayer', 'butcher block', 'knife magnet strip', 'dish warmer', 'warming drawer', 'kitchen timer', 'cabinet locks', 'child safety latches', 'drawer slides', 'cabinet handles', 'cabinet knobs',
'water filter pitcher', 'replacement filters', 'ice trays', 'freezer bins', 'freezer bags', 'produce bins', 'egg holder', 'butter keeper', 'condiment rack', 'lazy susan turntable', 'under sink organizer', 'pull out trash bin', 'recycling container', 'compost pail', 'baking rack', 'sheet pan rack', 'cooling shelf', 'pan organizer', 'lid organizer', 'pot rack', 'hanging pot rack', 'wine glasses rack', 'mug tree', 'plate rack', 'drawer dividers', 'silverware set', 'flatware set', 'steak knife set', 'serving fork', 'serving ladle', 'slotted turner', 'solid turner', 'skimmer', 'straining spoon', 'pancake spatula', 'fish spatula', 'pizza cutter', 'canister set', 'utensil holder', 'knife case', 'appliance covers', 'refrigerator magnets', 'calendar', 'message board', 'key holder', 'storage jars', 'cookie jar', 'bread knife', 'utility scissors', 'kitchen flashlight',
'backup refrigerator', 'mini fridge', 'deep freezer', 'gas range', 'electric range', 'induction cooktop', 'double wall oven', 'warming drawer', 'trash compactor', 'wine fridge', 'beverage cooler', 'kegerator', 'coffee urn', 'water boiler', 'countertop mixer', 'immersion circulator', 'food dehydrator', 'meat slicer', 'pasta maker', 'grain mill', 'electric can opener', 'jar opener', 'knife set', 'cleaver', 'fillet knife', 'boning knife', 'carving fork', 'kitchen mallet', 'griddle pan', 'crepe pan', 'omelet pan', 'sauce whisk', 'balloon whisk', 'dough scraper', 'bench scraper', 'pastry brush', 'pastry blender', 'baking molds', 'souffle dish', 'ramekins', 'custard cups', 'measuring jug', 'food thermometer', 'probe thermometer', 'timer clock', 'under cabinet radio', 'security camera', 'smart display', 'floor mat', 'area rug',
'pantry door rack', 'over door organizer', 'storage baskets', 'wire baskets', 'plastic bins', 'glass jars', 'spice tins', 'tea kettle', 'whistling kettle', 'coffee mugs set', 'travel cup', 'insulated tumbler', 'water carafe', 'pitcher with lid', 'salad bowl', 'mixing pitcher', 'batter bowl', 'sifter', 'strainer set', 'colander set', 'food mill', 'ricer', 'egg slicer', 'cheese slicer', 'canisters with lids', 'airtight containers', 'bread basket', 'fruit bowl', 'banana hanger', 'paper towel stand', 'napkin rings', 'table runner', 'chair cushions', 'seat covers', 'high chair', 'booster seat', 'pet food bin', 'pet bowls', 'step trash can', 'touchless trash can', 'under cabinet trash bag holder', 'cabinet shelf riser', 'drawer spice organizer', 'plate charger set', 'serving utensils set', 'butcher knives', 'cut resistant gloves', 'oven rack guards', 'sink drying rack', 'dish drainer tray', 'kitchen storage cabinet',
'shelf liner', 'cabinet shelf liner', 'drawer liner', 'under sink mat', 'sink organizer rack', 'pull out cabinet organizer', 'corner cabinet organizer', 'cabinet basket insert', 'stackable pantry bins', 'clear storage bins', 'food storage turntable', 'pantry label set', 'chalkboard labels', 'measuring spoon set stainless steel', 'measuring cup set stainless steel', 'nested mixing bowls', 'collapsible colander', 'silicone baking mat', 'silicone spatula set', 'wooden utensil set', 'stainless steel utensil set', 'nylon cooking utensil set', 'ladle holder', 'spoon rest', 'utensil drawer organizer', 'knife drawer insert', 'in drawer knife block', 'knife roll bag', 'magnetic knife strip', 'pot lid holder', 'cookware organizer rack', 'under cabinet mug hooks', 'hanging fruit basket', 'wall mounted spice rack', 'countertop spice carousel', 'oil and vinegar cruet set', 'salt cellar', 'pepper mill', 'butter crock', 'bread slicing guide', 'cake carrier', 'pie carrier', 'cupcake carrier', 'thermal casserole carrier', 'insulated food carrier', 'serving caddy', 'condiment caddy', 'picnic cooler', 'rolling cooler', 'ice chest',
'food storage jar set', 'glass canister set', 'ceramic canister set', 'stainless steel canister set', 'airtight cereal containers', 'flour storage bin', 'sugar storage bin', 'rice dispenser', 'pet food storage container', 'beverage dispenser', 'drink dispenser stand', 'coffee pod holder', 'coffee pod drawer', 'espresso tamper', 'milk frothing pitcher', 'coffee knock box', 'tea infuser', 'tea kettle electric', 'tea kettle stovetop', 'water filtration pitcher', 'replacement water filters', 'refrigerator deodorizer', 'freezer thermometer', 'pantry thermometer', 'humidity absorber', 'food scale digital', 'kitchen timer digital', 'wall mounted timer', 'clip on book light', 'cookbook shelf', 'recipe binder', 'tablet wall mount', 'charging dock', 'surge protector', 'extension cord heavy duty', 'step stool folding', 'rolling kitchen cart', 'utility cart', 'bar serving cart', 'wine bottle opener set', 'wine aerator', 'wine stopper set', 'champagne stopper', 'ice scoop', 'bar spoon', 'cocktail shaker', 'cocktail strainer', 'jigger', 'mudler', 'drink mixing glass',
'flatware set stainless steel', 'gold flatware set', 'serving fork stainless steel', 'serving spoon stainless steel', 'butter knives', 'seafood forks', 'soup spoons', 'dessert spoons', 'salad forks', 'dinner forks', 'dinner knives', 'teaspoons', 'tablespoons', 'steak knife block', 'china dinner set', 'stoneware dinner set', 'porcelain dinner set', 'melamine plate set', 'charger plates', 'glass salad bowl', 'wood salad bowl', 'ceramic serving bowl', 'pasta serving bowl', 'mixing pitcher glass', 'water goblets', 'beer mugs', 'pint glasses', 'highball glasses', 'lowball glasses', 'martini glasses', 'whiskey glasses', 'decanter', 'wine decanter', 'carafe', 'coffee carafe', 'tea pot', 'gravy ladle', 'cake knife', 'cake lifter', 'pastry server', 'bread basket liner', 'table centerpiece', 'decorative tray', 'countertop tray', 'fruit storage basket', 'banana tree stand', 'mug set ceramic', 'travel mug stainless steel', 'insulated water bottle', 'thermos stainless steel',
'dish soap dispenser', 'hand soap dispenser', 'cleaning caddy', 'all purpose cleaner', 'glass cleaner', 'stainless steel cleaner', 'granite cleaner', 'wood cleaner', 'oven cleaner', 'dishwasher cleaner', 'garbage disposal cleaner', 'drain cleaner', 'scrub sponges', 'heavy duty scrub pads', 'microfiber cloths', 'cleaning rags', 'paper towel pack', 'trash bag box', 'recycling bin liner', 'compostable bags', 'broom and dustpan set', 'push broom', 'floor mop', 'spray mop', 'steam cleaner', 'handheld vacuum', 'cordless vacuum', 'floor sweeper', 'rubber gloves', 'cleaning brush set', 'bottle brush', 'straw cleaning brush', 'sink plunger', 'drain snake', 'tool kit small', 'screwdriver set', 'hammer', 'measuring tape', 'level', 'stud finder', 'wall anchors', 'picture hanging kit', 'light bulb pack', 'cabinet light bulbs', 'under cabinet light strip', 'motion sensor light', 'smoke alarm', 'carbon monoxide alarm', 'fire blanket', 'first aid kit',
'bulk food storage bucket', 'emergency food supply kit', 'cooling ice packs', 'water storage containers', 'folding chairs', 'extra dining chairs', 'bar stool cushions', 'chair floor protectors', 'table leaf insert', 'buffet warming trays', 'chafing dish set', 'fondue pot', 'raclette grill', 'portable butane stove', 'butane fuel canisters', 'propane torch', 'kitchen torch', 'smoker box', 'meat carving station', 'electric knife', 'knife sharpening stone', 'knife honing rod', 'cast iron cleaner', 'cookware cleaner', 'dish drying cabinet', 'over sink drying rack', 'cabinet door organizer', 'pantry step ladder', 'folding utility table', 'rolling island cart', 'appliance sliding tray', 'appliance lift', 'cabinet pull out shelf', 'spice drawer insert', 'foil dispenser', 'wrap organizer', 'bag storage organizer', 'measuring conversion chart', 'grocery bag holder', 'reusable grocery bags', 'insulated grocery bags', 'cooler tote', 'picnic tableware set', 'plastic serving trays', 'paper napkin pack', 'cloth napkin rings', 'placemat set', 'table protector pad', 'kitchen wall mirror', 'decorative wall shelf', 'command hooks'
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
    const roomSwipeHistory = new Map();

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
        const activeRoomHeader = document.getElementById('active-room-header');
        const swipeModal = document.getElementById('swipe-modal');
        const swipeModalDeck = document.getElementById('swipe-modal-deck');
        const swipeModalStatus = document.getElementById('swipe-modal-status');
        const swipeModalRoom = document.getElementById('swipe-modal-room');
        const swipeModalClose = document.querySelector('[data-close-swipe]');
        const swipeUndoButton = document.querySelector('[data-action="undo-swipe"]');
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
                roomSwipeHistory.delete(roomId);
                saveState(state);
                renderRooms(state.rooms);
                updateSubmissionData(state.rooms);
                return;
            }
        });

        roomsGrid?.addEventListener(
            'toggle',
            (event) => {
                if (!(event.target instanceof HTMLDetailsElement)) return;
                if (!event.target.classList.contains('items-accordion')) return;
                updateActiveRoomHeader();
            },
            true
        );

        swipeUndoButton?.addEventListener('click', () => {
            if (!swipeModal || swipeModal.hidden) return;
            undoLastSwipe(swipeModal);
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
            roomSwipeHistory.set(room.id, []);
            if (swipeModalRoom instanceof HTMLElement) {
                swipeModalRoom.textContent = formatRoomTitle(room);
            }
            renderSwipeDeck(swipeModal, room);
            updateUndoButton(room.id);
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
            updateUndoButton(null);
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
                const removeRoom = document.createElement('button');
                removeRoom.className = 'remove-item';
                removeRoom.dataset.action = 'remove-room';
                removeRoom.type = 'button';
                removeRoom.textContent = 'Remove room';
                titleRow.append(heading, removeRoom);

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

            updateActiveRoomHeader();
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
                return room.name;
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

        function getNextDeckZIndex(deck) {
            if (!deck) return 1;
            const zIndexes = Array.from(deck.children).map((card) => {
                if (!(card instanceof HTMLElement)) return 0;
                const zIndex = parseInt(card.style.zIndex || '0', 10);
                return Number.isNaN(zIndex) ? 0 : zIndex;
            });
            const maxZ = zIndexes.length ? Math.max(...zIndexes) : 0;
            return maxZ + 1;
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
            let queuedItem = null;
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
                queuedItem = nextItem;
                roomQueues.set(roomId, queue);
                const nextCard = createSwipeCard(nextItem, 0);
                deck.prepend(nextCard);
            }

            if (roomId && item) {
                const history = roomSwipeHistory.get(roomId) || [];
                history.push({ item, direction, queuedItem });
                roomSwipeHistory.set(roomId, history);
                updateUndoButton(roomId);
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

        function removeItemFromCard(roomId, item) {
            if (!roomsGrid) return;
            const roomCard = roomsGrid.querySelector(`[data-room-id="${roomId}"]`);
            if (!(roomCard instanceof HTMLElement)) return;
            const accordion = roomCard.querySelector('.items-accordion');
            const list = accordion?.querySelector('.items-list');
            if (!(list instanceof HTMLUListElement)) return;
            const items = Array.from(list.querySelectorAll('li'));
            const target = items.find((entry) => entry.querySelector('span')?.textContent === item);
            if (!target) return;
            target.remove();

            const summary = accordion?.querySelector('summary');
            const count = list.children.length;
            if (summary instanceof HTMLElement) {
                summary.textContent = count ? `Items for this room (${count})` : 'No items added yet.';
            }
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

        function updateActiveRoomHeader() {
            if (!roomsGrid || !(activeRoomHeader instanceof HTMLElement)) return;
            const openAccordions = Array.from(roomsGrid.querySelectorAll('.items-accordion[open]'));
            if (!openAccordions.length) {
                activeRoomHeader.hidden = true;
                activeRoomHeader.textContent = '';
                return;
            }
            const latestAccordion = openAccordions[openAccordions.length - 1];
            const roomCard = latestAccordion.closest('[data-room-id]');
            const roomId = roomCard?.getAttribute('data-room-id');
            const room = state.rooms.find((entry) => entry.id === roomId);
            if (!room) {
                activeRoomHeader.hidden = true;
                activeRoomHeader.textContent = '';
                return;
            }
            activeRoomHeader.textContent = `Room: ${formatRoomTitle(room)}`;
            activeRoomHeader.hidden = false;
        }

        function updateUndoButton(roomId) {
            if (!(swipeUndoButton instanceof HTMLButtonElement)) return;
            if (!roomId) {
                swipeUndoButton.disabled = true;
                return;
            }
            const history = roomSwipeHistory.get(roomId) || [];
            swipeUndoButton.disabled = history.length === 0;
        }

        function decrementRoomSwipeCount(roomId) {
            if (!roomId) return 0;
            const nextCount = Math.max(0, getRoomSwipeCount(roomId) - 1);
            roomSwipeCounts.set(roomId, nextCount);
            return nextCount;
        }

        function undoLastSwipe(panel) {
            if (!(panel instanceof HTMLElement)) return;
            const roomId = panel.dataset.roomId;
            if (!roomId) return;
            const history = roomSwipeHistory.get(roomId) || [];
            if (!history.length) return;
            const lastSwipe = history.pop();
            const room = state.rooms.find((entry) => entry.id === roomId);
            const deck = panel.querySelector('.swipe-deck');
            const status = panel.querySelector('.swipe-status');
            const queue = roomQueues.get(roomId) || [];

            if (!(deck instanceof HTMLElement)) return;

            if (lastSwipe?.queuedItem) {
                const queuedCard = deck.querySelector(`[data-item="${CSS.escape(lastSwipe.queuedItem)}"]`);
                if (queuedCard) {
                    queuedCard.remove();
                }
                queue.unshift(lastSwipe.queuedItem);
                roomQueues.set(roomId, queue);
            }

            if (lastSwipe?.item) {
                const restoredCard = createSwipeCard(lastSwipe.item, getNextDeckZIndex(deck));
                deck.prepend(restoredCard);
            }

            if (room && lastSwipe?.item) {
                if (Array.isArray(room.reviewedItems)) {
                    room.reviewedItems = room.reviewedItems.filter((entry) => entry !== lastSwipe.item);
                }
                if (lastSwipe.direction === 'have') {
                    room.items = room.items.filter((entry) => entry !== lastSwipe.item);
                    removeItemFromCard(roomId, lastSwipe.item);
                    updateSubmissionData(state.rooms);
                }
                saveState(state);
            }

            const remaining = deck.children.length + queue.length;
            if (status instanceof HTMLElement) {
                decrementRoomSwipeCount(roomId);
                setSwipeStatus(
                    status,
                    remaining ? `${remaining} item${remaining === 1 ? '' : 's'} left` : 'No more items to review. Great job!',
                    { includeAchievement: true, roomId }
                );
            }

            updateSwipePreview(roomId);
            updateUndoButton(roomId);
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


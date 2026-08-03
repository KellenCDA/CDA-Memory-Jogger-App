(function () {
    const STORAGE_KEY = 'joggerData';
    const DEFAULT_CATEGORY = 'Other';
    const ITEM_OPTIONS = {
        Kitchen: [// Major Appliances (29 items)
'refrigerator', 'refrigerator shelves', 'refrigerator drawers', 'refrigerator door bins', 'freezer', 'freezer shelves', 'freezer drawers', 'ice maker', 'ice bin', 'water dispenser',
'microwave', 'wine cooler', 'beverage fridge', 'dishwasher detergent', 'refrigerator magnets', 'backup refrigerator', 'mini fridge', 'deep freezer', 'gas range', 'electric range',
'induction cooktop', 'double wall oven', 'trash compactor', 'wine fridge', 'beverage cooler', 'kegerator', 'refrigerator deodorizer', 'refrigerator lock', 'water filter pitcher',
 
// Small Kitchen Appliances (53 items)
'microwave turntable', 'toaster', 'toaster oven', 'air fryer', 'slow cooker', 'pressure cooker', 'rice cooker', 'electric kettle', 'coffee maker', 'espresso machine',
'coffee grinder', 'french press', 'single serve coffee maker', 'blender', 'immersion blender', 'stand mixer', 'hand mixer', 'food processor', 'hand chopper', 'juicer',
'electric griddle', 'waffle maker', 'panini press', 'indoor grill', 'electric skillet', 'bread maker', 'sous vide cooker', 'pressure cooker lid', 'slow cooker insert', 'slow cooker lid',
'air fryer basket', 'air fryer tray', 'microwave cover', 'microwave rack', 'dish warmer', 'coffee urn', 'water boiler', 'countertop mixer', 'immersion circulator', 'food dehydrator',
'meat slicer', 'pasta maker', 'grain mill', 'electric can opener', 'fondue pot', 'raclette grill', 'portable butane stove', 'butane fuel canisters', 'electric knife', 'microwave splatter cover',
 
'warming tray electric', 'electric carving knife', 'appliance covers',
 
// Coffee & Tea (20 items)
'coffee canister', 'tea canister', 'coffee cups', 'tea cups', 'saucers', 'tea boxes', 'coffee bags', 'tea kettle', 'whistling kettle', 'coffee mugs set',
'coffee pod holder', 'coffee pod drawer', 'espresso tamper', 'milk frothing pitcher', 'coffee knock box', 'tea infuser', 'tea kettle electric', 'tea kettle stovetop', 'coffee carafe', 'tea pot',
 
// Knives & Cutting (42 items)
'knife block', 'chef knife', 'paring knife', 'bread knife', 'carving knife', 'utility knife', 'kitchen shears', 'knife sharpener', 'cutting board wood', 'cutting board plastic',
'cutting board bamboo', 'mandoline slicer', 'herb scissors', 'butcher block', 'knife magnet strip', 'steak knife set', 'pizza cutter', 'knife case', 'utility scissors', 'cleaver',
'fillet knife', 'boning knife', 'carving fork', 'kitchen mallet', 'egg slicer', 'cheese slicer', 'cut resistant gloves', 'steak knife block', 'kitchen torch', 'knife sharpening stone',
'knife honing rod', 'cutting board oil', 'knife guard set', 'kitchen scissors heavy duty', 'cheese knife set', 'knife sharpening guide', 'cutting board stand', 'drawer knife organizer bamboo', 'avocado slicer', 'garlic slicer',
'herb chopper', 'cutting mat flexible',
 
// Cookware (30 items)
'dutch oven', 'stock pot', 'saucepan', 'frying pan', 'nonstick skillet', 'cast iron skillet', 'wok', 'grill pan', 'saute pan', 'pot lids',
'skillet lid', 'stock pot lid', 'pan organizer', 'lid organizer', 'pot rack', 'hanging pot rack', 'cookware organizer rack', 'smoker box', 'meat carving station', 'cast iron cleaner',
'cookware cleaner', 'pot rack hooks', 'pan handle covers', 'storage lid organizer', 'pan protector pads', 'grill press', 'panini weight', 'cast iron press', 'bacon press', 'egg poacher pan',
 
// Bakeware & Baking (48 items)
'baking sheet', 'cookie sheet', 'muffin pan', 'cake pan', 'springform pan', 'loaf pan', 'pie dish', 'roasting pan', 'broiler pan', 'cooling rack',
'pizza stone', 'casserole dish', 'flour sifter', 'baking powder', 'baking soda', 'oven thermometer', 'rolling pin', 'pastry mat', 'cookie cutters', 'decorating tips',
'icing spatula', 'baking rack', 'sheet pan rack', 'cooling shelf', 'dough scraper', 'pastry brush', 'pastry blender', 'baking molds', 'souffle dish', 'ramekins',
'custard cups', 'silicone baking mat', 'bread slicing guide', 'bread proofing basket', 'dough rolling mat', 'pastry ring set', 'baking thermometer', 'stackable cooling racks', 'cake decorating kit', 'baking decorating kit',
'silicone cupcake liners', 'reusable baking cups', 'oven thermometer analog', 'cookie cooling tower', 'rolling pin marble', 'rolling pin wood', 'baking sheet rack', 'cooling mat',
 
// Kitchen Utensils & Tools (69 items)
'splatter screen', 'trivet', 'spatula', 'whisk', 'ladle', 'slotted spoon', 'serving spoon', 'tongs', 'pasta server', 'turner',
'wooden spoon', 'can opener', 'bottle opener', 'wine opener', 'garlic press', 'vegetable peeler', 'box grater', 'zester', 'citrus juicer', 'meat tenderizer',
'potato masher', 'ice cream scoop', 'melon baller', 'apple corer', 'basting brush', 'utensil crock', 'serving tongs', 'salad tongs', 'cake server', 'pie server',
'ladle set', 'utensil set', 'mixing spoon set', 'spice grinder', 'mortar and pestle', 'oil sprayer', 'serving fork', 'serving ladle', 'slotted turner', 'solid turner',
'skimmer', 'straining spoon', 'pancake spatula', 'fish spatula', 'utensil holder', 'jar opener', 'sauce whisk', 'balloon whisk', 'silicone spatula set', 'wooden utensil set',
 
'utensil hooks rail', 'pot clip strainer', 'collapsible funnel', 'kitchen funnel set', 'oven rack pull tool', 'produce wash bowl', 'fruit corer tool', 'egg separator', 'pancake ring set', 'waffle batter dispenser',
'gravy separator', 'fat separator cup', 'salad dressing mixer', 'herb stripping tool', 'meat shredder claws', 'taco holder stand', 'spice measuring spoons', 'citrus reamer', 'kitchen twine',
 
// Measuring & Thermometers (27 items)
'kitchen scale', 'digital thermometer', 'measuring cups', 'measuring spoons', 'measuring scale', 'timer', 'meat thermometer', 'grill thermometer', 'measuring jug', 'probe thermometer',
'timer clock', 'freezer thermometer', 'pantry thermometer', 'food scale digital', 'kitchen timer digital', 'wall mounted timer', 'measuring tape', 'level', 'measuring conversion chart', 'appliance thermometer',
'measuring spoon leveler', 'kitchen scale analog', 'thermometer probe cover', 'timer magnetic', 'freezer thermometer analog', 'measuring cup glass', 'measuring cup plastic',
 
// Mixing Bowls & Prep (12 items)
'mixing bowl set', 'colander', 'mesh strainer', 'salad spinner', 'batter bowl', 'sifter', 'strainer set', 'colander set', 'food mill', 'ricer',
'collapsible colander', 'vegetable scrub brush',
 
// Food Storage & Wrap (49 items)
'aluminum foil', 'plastic wrap', 'parchment paper', 'wax paper', 'food storage bags', 'vacuum sealer', 'food storage containers', 'glass containers', 'plastic containers', 'cooler',
'ice packs', 'food clips', 'chip clips', 'bread ties', 'ice trays', 'freezer bins', 'freezer bags', 'produce bins', 'egg holder', 'butter keeper',
'canisters with lids', 'airtight containers', 'food storage turntable', 'picnic cooler', 'rolling cooler', 'ice chest', 'food storage jar set', 'glass canister set', 'ceramic canister set', 'airtight cereal containers',
'flour storage bin', 'sugar storage bin', 'rice dispenser', 'pet food storage container', 'bulk food storage bucket', 'cooling ice packs', 'water storage containers', 'cooler tote', 'produce storage bags', 'butcher paper roll',
'freezer paper roll', 'vacuum sealer rolls', 'mixing bowl lids', 'collapsible storage bowls', 'glass storage bottles', 'water bottles', 'thermos', 'food cover dome', 'mesh food tent',
 
// Pantry & Spices (74 items)
'spice rack', 'spice jars', 'salt shaker', 'pepper shaker', 'pepper grinder', 'oil bottle', 'vinegar bottle', 'sugar canister', 'flour canister', 'canned goods',
'dry pasta', 'rice bags', 'flour bags', 'sugar bags', 'cornstarch', 'cooking oil', 'olive oil', 'vegetable oil', 'soy sauce', 'hot sauce',
'ketchup', 'mustard', 'mayonnaise', 'salad dressing', 'peanut butter', 'jam', 'honey', 'cereal boxes', 'granola', 'oatmeal',
'snack chips', 'crackers', 'cookies', 'nuts', 'dried fruit', 'spice containers', 'can rack', 'condiment rack', 'canister set', 'storage jars',
'cookie jar', 'pantry door rack', 'over door organizer', 'spice tins', 'cabinet basket insert', 'stackable pantry bins', 'clear storage bins', 'pantry label set', 'chalkboard labels', 'wall mounted spice rack',
 
'countertop spice carousel', 'oil and vinegar cruet set', 'salt cellar', 'pepper mill', 'condiment caddy', 'herb keeper', 'onion storage bin', 'potato storage bin', 'garlic keeper', 'condiment squeeze bottles',
'syrup dispenser', 'honey dispenser', 'sugar dispenser', 'salt box', 'pepper box', 'flour shaker', 'powdered sugar shaker', 'oil sprayer bottle', 'vinegar cruet', 'cabinet organizer bins',
'bread box', 'butter crock', 'humidity absorber', 'salad dressing shaker',
 
// Flatware & Cutlery Sets (15 items)
'cutlery tray', 'silverware set', 'flatware set', 'gold flatware set', 'butter knives', 'seafood forks', 'soup spoons', 'dessert spoons', 'salad forks', 'dinner forks',
'dinner knives', 'teaspoons', 'tablespoons', 'flatware tray expandable', 'steak knives',
 
// Dishware & Serveware (63 items)
'serving tray', 'serving platter', 'serving bowl', 'gravy boat', 'plate set', 'salad plates', 'dinner plates', 'bowls', 'cereal bowls', 'soup bowls',
'mugs', 'drinking glasses', 'wine glasses', 'champagne flutes', 'cocktail glasses', 'shot glasses', 'water pitcher', 'cake stand', 'tiered tray', 'butter dish',
'sugar bowl', 'cream pitcher', 'travel mugs', 'wine glass rack', 'mug tree', 'plate rack', 'water carafe', 'pitcher with lid', 'salad bowl', 'mixing pitcher',
'pet bowls', 'plate e set', 'nested mixing bowls', 'cake carrier', 'pie carrier', 'cupcake carrier', 'thermal casserole carrier', 'insulated food carrier', 'serving caddy', 'china dinner set',
'stoneware dinner set', 'porcelain dinner set', 'melamine plate set', 'glass salad bowl', 'wood salad bowl', 'ceramic serving bowl', 'pasta serving bowl', 'mixing pitcher glass', 'water goblets', 'beer mugs',
 
'pint glasses', 'highball glasses', 'lowball glasses', 'martini glasses', 'whiskey glasses', 'decanter', 'wine decanter', 'carafe', 'gravy ladle', 'picnic tableware set',
'plastic serving trays', 'party serving bowl set', 'buffet serving utensils',
 
// Bar & Entertaining (21 items)
'wine rack', 'ice bucket', 'beverage dispenser', 'drink dispenser stand', 'bar serving cart', 'wine bottle opener set', 'wine aerator', 'wine stopper set', 'champagne stopper', 'ice scoop',
'bar spoon', 'cocktail shaker', 'cocktail strainer', 'jigger', 'mudler', 'drink mixing glass', 'buffet warming trays', 'chafing dish set', 'cheese board', 'charcuterie board',
'serving slate board',
 
// Dining Furniture (18 items)
'bar stools', 'bar cart', 'china cabinet', 'buffet table', 'sideboard', 'dining table', 'dining chairs', 'chair cushions', 'seat covers', 'high chair',
'booster seat', 'kitchen storage cabinet', 'folding chairs', 'extra dining chairs', 'bar stool cushions', 'chair floor protectors', 'table leaf insert', 'table protector pad',
 
// Table Linens & Decor (34 items)
'napkin holder', 'dish towels', 'hand towels', 'oven mitts', 'pot holders', 'apron', 'tablecloth', 'placemats', 'cloth napkins', 'kitchen rug',
'anti fatigue mat', 'wall clock', 'wall art', 'bulletin board', 'message board', 'key holder', 'floor mat', 'area rug', 'bread basket', 'fruit bowl',
'banana hanger', 'napkin rings', 'table runner', 'table centerpiece', 'decorative tray', 'countertop tray', 'fruit storage basket', 'banana tree stand', 'paper napkin pack', 'cloth napkin rings',
'placemat set', 'kitchen wall mirror', 'kitchen whiteboard', 'magnetic grocery list pad',
 
// Sink & Dish Care (36 items)
'dish rack', 'drying mat', 'dish soap', 'hand soap', 'sponges', 'scrub brushes', 'dish brush', 'sink caddy', 'rinse aid', 'under sink organizer',
'sink drying rack', 'dish drainer tray', 'under sink mat', 'sink organizer rack', 'dish soap dispenser', 'hand soap dispenser', 'dishwasher cleaner', 'scrub sponges', 'heavy duty scrub pads', 'microfiber cloths',
'cleaning rags', 'rubber gloves', 'bottle brush', 'straw cleaning brush', 'dish drying cabinet', 'over sink drying rack', 'dish drying towel rack', 'sink strainer basket', 'under sink storage shelf', 'sink drain stopper',
'dish drying clips', 'soap pump tray', 'sink brush holder', 'cleaning glove clips', 'dish drying cabinet rack', 'dish sponge holder',
 
// Cleaning Supplies (15 items)
'cleaning spray', 'disinfecting wipes', 'cleaning caddy', 'all purpose cleaner', 'glass cleaner', 'granite cleaner', 'wood cleaner', 'oven cleaner', 'cleaning brush set', 'oven liner',
'appliance cleaning wipes', 'granite sealer', 'glass cooktop cleaner', 'cooktop scraper', 'cleaning supply rack',
 
// Floor Care & Vacuums (15 items)
'broom', 'dustpan', 'mop', 'mop bucket', 'vacuum', 'steam mop', 'broom and dustpan set', 'push broom', 'spray mop', 'steam cleaner',
'handheld vacuum', 'cordless vacuum', 'floor sweeper', 'floor protector pads', 'floor mop',
 
// Trash, Recycling & Odor (22 items)
'trash can', 'recycling bin', 'compost bin', 'trash bags', 'recycling bags', 'garbage bags box', 'pull out trash bin', 'recycling container', 'compost pail', 'step trash can',
'touchless trash can', 'trash bag box', 'recycling bin liner', 'compostable bags', 'trash can deodorizer', 'recycling sorter bins', 'drawer freshener', 'cabinet freshener', 'air purifier small', 'step trash liner refill',
'odor absorber box', 'kitchen air freshener',
 
// Paper & Disposables (8 items)
'paper towel holder', 'paper towel rolls', 'paper plates', 'plastic cups', 'plastic utensils', 'paper towel pack', 'under cabinet paper towel holder', 'counter paper towel holder',
 
// Storage & Organization (53 items)
'lazy susan', 'drawer organizers', 'cookbook stand', 'cookbooks', 'recipe box', 'rolling cart', 'storage bins', 'label maker', 'labels', 'drawer liners',
'cabinet liners', 'cabinet locks', 'child safety latches', 'drawer slides', 'lazy susan turntable', 'drawer dividers', 'calendar', 'storage baskets', 'wire baskets', 'plastic bins',
'glass jars', 'pet food bin', 'cabinet shelf riser', 'oven rack guards', 'pull out cabinet organizer', 'corner cabinet organizer', 'under cabinet mug hooks', 'hanging fruit basket', 'clip on book light', 'cookbook shelf',
'recipe binder', 'rolling kitchen cart', 'utility cart', 'grocery bag holder', 'reusable grocery bags', 'insulated grocery bags', 'cabinet bumpers', 'rolling pantry cart', 'oven mitt rack', 'under cabinet basket',
'cabinet shelf dividers', 'kitchen drawer bin set', 'shelf risers', 'cookbook holder stand', 'tablet recipe stand', 'document organizer box', 'recipe storage box', 'plastic drawer bins', 'kitchen storage crates', 'oven lock',
 
'cabinet child lock', 'drawer child lock', 'cabinet door organizer',
 
// Safety & Emergency (11 items)
'fire extinguisher', 'smoke detector', 'carbon monoxide detector', 'security camera', 'smoke alarm', 'carbon monoxide alarm', 'fire blanket', 'first aid kit', 'emergency food supply kit', 'backup batteries',
'fire resistant safe',
 
// Tools & Hardware (16 items)
'step ladder', 'light bulbs', 'step stool folding', 'tool kit small', 'screwdriver set', 'hammer', 'picture hanging kit', 'light bulb pack', 'adjustable wrench', 'allen wrench set',
'socket set', 'cord organizer', 'appliance cord wrap', 'step stool small', 'folding step ladder large', 'kitchen flashlight',
 
// Power & Electronics (14 items)
'tablet stand', 'charging station', 'smart speaker', 'television', 'extension cord', 'power strip', 'under cabinet radio', 'smart display', 'charging dock', 'surge protector',
'extension cord heavy duty', 'battery pack', 'surge protector strip', 'extension cord reel',
 
// Picnic & Outdoor (2 items)
'picnic basket', 'propane torch',
 
// TOTAL: 796 items
],
        'Living room': [// Sofas & Seating (50 items)
'sofa', 'sectional sofa', 'loveseat', 'accent chair', 'recliner chair', 'power recliner', 'ottoman', 'storage ottoman', 'sofa table', 'seat cushions',
'floor cushions', 'bean bag chair', 'folding chair', 'stool', 'entry bench', 'floor cushion', 'window seat cushion', 'storage ottoman tray', 'sectional sofa cushions', 'sofa legs',
'sofa accent pillows', 'sofa throw blanket', 'loveseat cushions', 'recliner remote', 'recliner power cord', 'ottoman tray', 'gaming chair', 'bean bag refill', 'folding chair pads', 'stool cushion',
'entry bench cushion', 'window seat throw pillow', 'storage ottoman lid', 'sofa arm tray', 'chair arm covers', 'ottoman storage bin', 'hallway bench', 'sofa side caddy', 'sofa cup holder', 'recliner cup holder insert',
'ottoman storage divider', 'bean bag chair cover', 'folding chair storage rack', 'stool leg caps', 'shoe rack bench', 'storage ottoman hinges', 'sofa leg risers', 'chair floor protectors', 'seat cushion covers', 'seat cushion foam insert',
 
 
// Tables & Storage Furniture (46 items)
'coffee table', 'end table', 'side table', 'console table', 'bookcase', 'bookshelf', 'display cabinet', 'curio cabinet', 'china cabinet', 'corner shelf',
'cabinet with doors', 'storage cabinet', 'drawer chest', 'accent cabinet', 'bar cabinet', 'coffee table books', 'blanket chest', 'toy chest', 'shoe rack', 'hall tree',
'coffee table drawer organizer', 'end table lamp', 'side table decor', 'console table decor', 'bookcase decor', 'display cabinet lighting', 'curio cabinet shelves', 'storage cabinet baskets', 'drawer chest liners', 'accent cabinet hardware',
'bar cabinet glassware', 'coffee table tray', 'shoe storage cabinet', 'coffee table book set', 'coffee table organizer', 'hallway storage cabinet', 'coffee table leg protectors', 'end table drawer liner', 'bookcase bookends', 'display cabinet locks',
'curio cabinet light bulbs', 'storage cabinet shelf riser', 'drawer chest organizers', 'coffee table storage box', 'game storage cabinet', 'corner display shelf',
 
// Media & Entertainment Furniture (18 items)
'media console', 'television stand', 'entertainment center', 'rolling bar cart', 'media cabinet shelves', 'entertainment center drawers', 'bar cart wheels', 'dvd storage rack', 'game storage shelf', 'game console stand',
'media shelf riser', 'floating media shelf', 'cd display rack', 'dvd display shelf', 'media console cable ties', 'media remote holder', 'cd storage tower', 'media shelf bracket',
 
// TV & Home Theater (19 items)
'television', 'streaming device', 'blu ray player', 'dvd player', 'sound bar', 'subwoofer', 'surround sound speakers', 'speaker stands', 'home theater receiver', 'cable box',
'satellite receiver', 'streaming remote', 'blu ray discs', 'sound bar remote', 'speaker cables', 'receiver remote', 'bluetooth speaker stand', 'smart speaker stand', 'smart speaker cable',
 
// Gaming (13 items)
'gaming console', 'game controller', 'virtual reality headset', 'game disc case', 'gaming headset', 'vr controllers', 'board game storage rack', 'game console cooling fan', 'game night storage box', 'game controller skins',
'card game storage tin', 'game controller case', 'game console cables',
 
// Remotes & Smart Home (17 items)
'media remote', 'universal remote', 'remote control organizer', 'smart speaker', 'fan remote', 'remote batteries', 'cable management box', 'smart plug', 'smart home hub', 'space heater remote',
'tower fan remote', 'remote finder device', 'smart bulb hub', 'bluetooth remote', 'ceiling fan remote holder', 'remote control batteries', 'smart bulb remote',
 
// Networking & Tech (13 items)
'router', 'modem', 'wifi extender', 'router stand', 'modem cables', 'wifi booster', 'router cable organizer', 'wifi signal booster', 'bluetooth transmitter', 'router backup battery',
'modem power adapter', 'wifi extender cable', 'bluetooth audio adapter',
 
// Laptops, Tablets & Headphones (38 items)
'tablet charger', 'laptop charger', 'laptop', 'tablet', 'wireless headphones', 'headphones', 'bluetooth speaker', 'cd collection', 'dvd collection', 'laptop stand',
'tablet case', 'wireless headphone case', 'cd storage case', 'dvd binder', 'laptop storage sleeve', 'tablet charging cable', 'headphone stand', 'laptop cooling pad', 'tablet keyboard', 'wireless mouse',
'headphone extension cable', 'cd cleaner kit', 'dvd cleaning kit', 'laptop docking station', 'tablet stylus', 'wireless headphone charger', 'dvd storage case', 'bluetooth speaker charger', 'laptop backpack', 'tablet sleeve',
'bluetooth speaker case', 'cd binder case', 'bluetooth speaker dock', 'wireless headphone stand', 'headphone amplifier', 'headphone storage case', 'laptop carrying case', 'laptop desk tray',
 
// Power & Charging (19 items)
'extension cord', 'power strip', 'surge protector', 'charging station', 'phone charger', 'controller charging dock', 'battery storage box', 'extension cord reel', 'charging cable organizer', 'charging dock station',
'battery organizer case', 'cord management clips', 'charging hub', 'battery tester', 'extension cord splitter', 'charging cable box', 'alarm sensor battery', 'charging cable station', 'motion sensor battery pack',
 
// Lamps & Lighting (22 items)
'floor lamp', 'table lamp', 'lamp shade', 'light bulbs', 'accent table lamp', 'floor lamp bulbs', 'table lamp bulbs', 'lamp finial', 'ceiling fan blades', 'fan light kit',
'accent lamp shade', 'lamp timer switch', 'light bulb storage case', 'floor lamp dimmer', 'table lamp timer', 'floor lamp base weight', 'table lamp harp', 'lamp shade finial', 'fan blade cleaner', 'floor plant grow light',
'light bulb organizer box', 'ceiling fan balancing kit',
 
// Rugs & Floor (21 items)
'area rug', 'throw rug', 'rug pad', 'carpet runner', 'carpet cleaner machine', 'area rug cleaner', 'rug corner grips', 'carpet stain remover', 'carpet cleaning solution', 'rug storage roll',
'entryway rug', 'area rug corner tape', 'rug cleaning brush', 'carpet deodorizer', 'floor protector mat', 'area rug cleaning spray', 'rug storage bag', 'rug gripper pads', 'carpet padding', 'rug cleaning machine solution',
'carpet cleaner hose',
 
// Window Treatments (10 items)
'curtain tie backs', 'curtain rings', 'curtain clips', 'window shade pull', 'curtain tieback hooks', 'window blind cleaner', 'curtain cleaning brush', 'curtain blackout liner', 'decorative curtain rod ends', 'window curtain rings',
 
// Wall Decor & Mirrors (31 items)
'wall art', 'framed artwork', 'canvas art', 'wall mirror', 'decorative mirror', 'wall clock', 'picture frames', 'photo albums', 'decorative shelves', 'mantle clock',
'picture hanging kit', 'clock batteries', 'picture frame stand', 'photo storage box', 'wall sconce bulbs', 'picture wire', 'accent mirror', 'floor standing mirror', 'art cleaning cloth', 'picture frame cleaner',
'mirror cleaning spray', 'mirror hanging wire', 'picture mat boards', 'photo frame glass', 'wall sconce shades', 'picture frame wire', 'mirror polish cloth', 'canvas stretcher kit', 'photo album sleeves', 'floor mirror frame',
'wall art cleaning brush',
 
// Pillows, Throws & Blankets (15 items)
'throw pillows', 'decorative pillows', 'throw blankets', 'quilt', 'afghan blanket', 'throw pillow inserts', 'pillow covers', 'blanket storage basket', 'quilt storage bag', 'throw blanket storage bag',
'decorative pillow basket', 'throw pillow storage bag', 'decorative pillow inserts', 'throw blanket ladder', 'quilt hanger rack',
 
// Fireplace & Candles (20 items)
'fireplace screen', 'fireplace tools', 'fireplace log holder', 'mantle decor', 'candle holders', 'candles', 'lantern', 'mantle garland', 'candle snuffer', 'lantern candles',
'decorative lantern set', 'candle storage box', 'fireplace ash vacuum', 'log storage rack', 'fireplace bellows', 'mantle decor garland lights', 'candle lighter', 'lantern hanger', 'decorative lantern candles', 'candle storage tray',
 
// Plants & Planters (36 items)
'indoor plant', 'plant stand', 'planter pot', 'artificial plant', 'floor vase', 'decorative vase', 'plant watering can', 'plant fertilizer', 'plant mister', 'artificial plant decor',
'vase filler stones', 'floor plant stand', 'plant drip tray', 'indoor tree planter', 'artificial tree decor', 'large decorative vase', 'plant care kit', 'plant soil bag', 'plant pruning shears', 'plant support stakes',
'artificial plant cleaner spray', 'floor vase filler sticks', 'plant watering globe', 'indoor planter liner', 'artificial tree stand', 'large floor vase filler', 'plant fertilizer spikes', 'plant soil scoop', 'plant leaf shine spray', 'plant care spray bottle',
'plant pot liner', 'artificial plant base', 'artificial tree planter', 'floor plant basket', 'large vase decorative', 'floor vase cleaning brush',
 
// Decor & Accents (19 items)
'decorative bowl', 'decorative tray', 'serving tray', 'decorative bowl filler', 'decorative storage trunk', 'ceramic decor bowl', 'decorative stone set', 'decorative tray liner', 'decorative box set', 'ceramic bowl decor set',
'decorative stone bowl', 'accent decor sculpture', 'accent decor bowl', 'decorative bowl set', 'decorative stone tray', 'decorative tray storage box', 'decorative box organizer', 'ceramic bowl centerpiece', 'accent table decor',
 
// Bar & Entertaining (26 items)
'drink coasters', 'coaster holder', 'barware set', 'wine glasses', 'cocktail glasses', 'drink pitcher', 'ice bucket', 'bar tool set', 'wine opener', 'wine rack',
'bottle stopper', 'liquor cabinet contents', 'drink coaster set', 'coaster storage box', 'bar tool rack', 'wine glass rack', 'liquor decanter', 'barware storage box', 'wine glass polishing cloth', 'drink pitcher lid',
'ice bucket tongs', 'bar tool organizer', 'wine cork holder', 'liquor bottle pourers', 'bottle opener', 'cocktail shaker strainer',
 
// Books, Games & Hobbies (22 items)
'magazine rack', 'magazines', 'board games', 'card games', 'puzzle box', 'playing cards', 'magazine holder', 'board game organizer', 'puzzle mat', 'magazine subscription box',
'puzzle storage box', 'magazine subscription rack', 'magazine file holder', 'board game pieces organizer', 'puzzle sorter trays', 'magazine display rack', 'board game shelf', 'card game binder', 'puzzle storage bag', 'magazine file bin',
'card shuffler', 'card deck holder',
 
// Entryway & Coat Storage (18 items)
'coat rack', 'umbrella stand', 'console mirror', 'coat hanger rack', 'umbrella holder tray', 'hall tree hooks', 'shoe polish kit', 'umbrella drip tray', 'entry bench storage bin', 'hall tree basket',
'console mirror mounting kit', 'shoe rack organizer', 'shoe rack stackable', 'shoe storage organizer box', 'coat rack freestanding', 'umbrella holder stand', 'umbrella rack tray', 'hall tree storage shelf',
 
// Climate & Air Quality (24 items)
'air purifier', 'humidifier', 'dehumidifier', 'space heater', 'tower fan', 'standing fan', 'portable air conditioner', 'fabric freshener spray', 'air freshener', 'scent diffuser',
'essential oil diffuser', 'air purifier filter', 'humidifier filter', 'dehumidifier bucket', 'portable air conditioner hose', 'air freshener refill', 'essential oil set', 'scent diffuser reeds', 'space heater filter', 'portable air conditioner window kit',
'fabric freshener beads', 'air freshener plug in', 'essential oil storage case', 'air purifier cover',
 
// Safety & Security (15 items)
'security camera', 'motion sensor', 'smoke detector', 'carbon monoxide detector', 'fire extinguisher', 'first aid kit', 'smoke detector batteries', 'carbon monoxide detector batteries', 'first aid refill kit', 'security camera memory card',
'first aid supply box', 'first aid refill supplies', 'fire extinguisher refill', 'security camera extension cable', 'motion sensor lens',
 
// Tools & Hardware (11 items)
'tool kit small', 'screwdriver set', 'hammer', 'measuring tape', 'tool storage box', 'measuring tape case', 'handheld steamer', 'measuring tape clip', 'tool box large', 'tool box small',
'tool organizer tray',
 
// Furniture Care & Protection (18 items)
'furniture covers', 'slipcovers', 'fabric protector spray', 'lint roller', 'furniture polish', 'wood cleaner', 'furniture leg pads', 'slipcover clips', 'fabric stain remover', 'lint brush',
'wood polish cloth', 'fabric protector wipes', 'furniture scratch repair kit', 'slipcover straps', 'fabric cleaner spray', 'lint remover brush', 'wood furniture polish', 'fabric stain remover wipes',
 
// Cleaning Supplies & Vacuums (28 items)
'hand vacuum', 'vacuum cleaner', 'broom', 'dustpan', 'floor mop', 'cleaning caddy', 'glass cleaner', 'all purpose cleaner', 'microfiber cloths', 'upright vacuum',
'vacuum bags', 'mop bucket', 'cleaning gloves', 'glass spray bottle', 'multi surface wipes', 'dusting wand', 'trash can liner refill', 'handheld vacuum filter', 'cleaning spray bottles', 'all purpose cleaning wipes',
'dusting cloth set', 'handheld vacuum charger', 'upright vacuum filter', 'vacuum cleaner attachments', 'mop bucket wringer', 'cleaning supply caddy large', 'dusting mitt', 'paper towels',
 
// Trash & Recycling (6 items)
'trash can', 'recycling bin', 'trash bags', 'trash can deodorizer', 'recycling bin labels', 'recycling bin divider',
 
// Storage & Organization (13 items)
'storage baskets', 'storage bins', 'toy storage bin', 'drawer organizer', 'cabinet shelf liner', 'woven storage basket', 'toy organizer bins', 'console drawer liner', 'storage basket liner', 'toy storage shelf',
'drawer organizer bins', 'cabinet shelf baskets', 'drawer organizer expandable',
 
// TOTAL: 588 items
],

        Bedroom: [
// Major Furniture (55 items)
'bed frame', 'platform bed', 'canopy bed', 'sleigh bed', 'headboard', 'upholstered headboard', 'footboard', 'bed rails', 'bed slats', 'box spring',
'mattress', 'mattress topper', 'adjustable bed base', 'bunk bed', 'trundle bed', 'daybed', 'murphy bed', 'nightstand', 'nightstand pair', 'bedside table',
'dresser', 'tall dresser', 'double dresser', 'chest of drawers', 'lingerie chest', 'wardrobe armoire', 'vanity table', 'vanity stool', 'vanity chair', 'bedroom bench',
'storage bench', 'end of bed bench', 'accent chair', 'reading chair', 'wingback chair', 'chaise lounge', 'ottoman', 'storage ottoman', 'bookshelf', 'bookcase',
'bedroom desk', 'writing desk', 'desk chair', 'full length mirror', 'standing mirror', 'dressing mirror', 'cheval mirror', 'media console', 'blanket chest', 'cedar chest',

'trunk storage', 'folding luggage rack', 'jewelry armoire', 'corner shelf unit', 'floating nightstand',

// Bedding & Linens (53 items)
'fitted sheet', 'flat sheet', 'sheet set', 'spare sheet set', 'flannel sheets', 'satin sheets', 'linen sheets', 'pillowcases', 'silk pillowcases', 'pillow shams',
'euro pillow shams', 'quilted sham', 'duvet', 'duvet cover', 'spare duvet cover', 'comforter', 'comforter set', 'seasonal duvet insert', 'quilt', 'reversible quilt',
'coverlet', 'bedspread', 'blanket', 'throw blanket', 'knit throw', 'weighted blanket', 'electric blanket', 'heated blanket', 'wool blanket', 'fleece blanket',
'cashmere throw', 'cotton blanket', 'spare blanket', 'mattress protector', 'waterproof mattress protector', 'mattress pad', 'cooling mattress pad', 'bed pillows', 'memory foam pillow', 'cooling pillow',
'down pillow', 'feather pillow', 'body pillow', 'pregnancy pillow', 'lumbar pillow', 'decorative pillows', 'euro pillows', 'bolster pillow', 'pillow protector', 'bed skirt',

'dust ruffle', 'throw pillow covers', 'spare pillowcases',

// Closet & Storage (57 items)
'closet organizer system', 'hanging clothes organizer', 'closet shelf divider', 'double hang closet rod', 'shoe rack', 'shoe organizer', 'rotating shoe rack', 'over door shoe holder', 'hanging shoe bag', 'clear shoe boxes',
'storage bins', 'clear storage boxes', 'under bed storage box', 'under bed rolling drawer', 'under bed shoe organizer', 'vacuum storage bags', 'garment bags', 'sweater storage box', 'clothing storage bins', 'fabric storage cubes',
'closet drawer unit', 'hat box', 'belt organizer', 'tie rack', 'scarf organizer', 'purse organizer', 'handbag shelf dividers', 'jewelry box', 'jewelry tray', 'jewelry stand',
'jewelry drawer insert', 'valet tray', 'drawer organizer', 'drawer dividers', 'closet hooks', 'wall hooks', 'adhesive hooks', 'hanging organizer shelves', 'rolling garment rack', 'freestanding clothing rack',
'laundry hamper', 'laundry basket', 'collapsible hamper', 'sorting hamper', 'double laundry hamper', 'lint roller', 'wooden hangers', 'velvet hangers', 'plastic hangers', 'clip hangers',

'padded hangers', 'suit hangers', 'pants hangers', 'cascading hangers', 'closet light battery', 'closet dehumidifier', 'storage trunk',

// Clothing (100 items)
'shirts', 't shirts', 'polo shirts', 'dress shirts', 'flannel shirts', 'blouses', 'tank tops', 'sweaters', 'turtlenecks', 'cardigans',
'hoodies', 'sweatshirts', 'jackets', 'denim jacket', 'leather jacket', 'blazers', 'sport coats', 'coats', 'winter coat', 'wool coat',
'raincoat', 'windbreaker', 'vest', 'pants', 'chinos', 'jeans', 'dress pants', 'khakis', 'shorts', 'cargo shorts',
'skirts', 'dresses', 'sundresses', 'formal gowns', 'suits', 'tuxedo', 'activewear', 'leggings', 'yoga pants', 'sweatpants',
'pajamas', 'nightgown', 'robe', 'bathrobe', 'loungewear', 'underwear', 'boxers', 'socks', 'dress socks', 'athletic socks',

'bras', 'sports bras', 'undershirts', 'thermal underwear', 'belts', 'leather belts', 'ties', 'bow ties', 'scarves', 'winter scarf',
'gloves', 'winter gloves', 'hats', 'baseball caps', 'beanies', 'shoes', 'dress shoes', 'loafers', 'sneakers', 'running shoes',
'boots', 'winter boots', 'hiking boots', 'sandals', 'flip flops', 'slippers', 'heels', 'flats', 'handbags', 'clutch purses',
'purses', 'backpacks', 'duffel bags', 'wallets', 'sunglasses', 'jewelry collection', 'necklaces', 'bracelets', 'earrings', 'rings',
'watches', 'watch collection', 'cufflinks', 'swimwear', 'swim trunks', 'workout clothes', 'uniforms', 'costumes', 'seasonal clothing', 'formal accessories',


// Lighting (28 items)
'table lamp', 'pair of table lamps', 'bedside lamp', 'floor lamp', 'reading lamp', 'desk lamp', 'arc lamp', 'tripod floor lamp', 'accent lamp', 'clip on book light',
'string lights decorative', 'LED light strip', 'fairy lights', 'night light', 'salt lamp', 'smart bulb', 'color changing bulb', 'lamp shade', 'spare lamp shade', 'dimmer plug',
'touch lamp', 'battery candle set', 'flameless candles', 'lantern decorative', 'sunrise alarm lamp', 'projector night light', 'sconce battery', 'under bed motion light',

// Electronics & Charging (45 items)
'television bedroom', 'tv wall bracket freestanding', 'tv stand', 'streaming device', 'soundbar', 'bluetooth speaker', 'portable speaker', 'alarm clock', 'smart speaker', 'clock radio',
'charging station', 'wireless charging pad', 'multi device charging dock', 'phone dock', 'power strip', 'surge protector', 'extension cord', 'usb wall charger', 'tablet', 'e reader',
'laptop', 'laptop stand', 'headphones', 'wireless earbuds', 'white noise machine', 'sound machine', 'air purifier', 'space heater', 'box fan', 'tower fan',
'oscillating fan', 'ceiling fan remote', 'humidifier', 'dehumidifier portable', 'smart home hub', 'security camera', 'baby monitor', 'remote controls', 'universal remote', 'phone stand',
'gaming console', 'vr headset', 'smart display', 'cable organizer box', 'battery backup',

// Window Treatments (20 items)
'curtains', 'curtain panels', 'sheer curtains', 'blackout curtains', 'thermal curtains', 'curtain tie backs', 'curtain rod portable', 'valance', 'swag valance', 'roman shades',
'roller shade', 'cellular shade', 'bamboo shade', 'pleated shade', 'window film decorative', 'draft stopper', 'window cushion', 'curtain holdbacks', 'window scarf', 'privacy film',

// Rugs & Floor (16 items)
'area rug', 'large area rug', 'runner rug', 'accent rug', 'shag rug', 'wool rug', 'rug pad', 'bedside rug', 'round rug', 'sheepskin rug',
'door mat bedroom', 'floor cushion', 'floor pouf', 'seagrass rug', 'jute rug', 'washable rug',

// Decor & Wall Art (45 items)
'wall art', 'framed prints', 'canvas print', 'large canvas art', 'gallery wall set', 'metal wall art', 'tapestry', 'wall mirror', 'decorative mirror', 'sunburst mirror',
'wall clock', 'wall shelf decorative', 'floating shelf decor', 'picture frames', 'photo collage frame', 'tabletop photo frames', 'decorative vase', 'vase set', 'faux plant', 'artificial plant',
'plant pot decorative', 'hanging planter', 'candle holders', 'scented candles', 'pillar candles', 'decorative tray', 'trinket dish', 'figurines', 'sculptures decorative', 'bookends',
'decorative bowl', 'dream catcher', 'wall decals', 'garland decorative', 'seasonal decor', 'accent pillows decor', 'decorative basket', 'memory board', 'cork board', 'string light frame',
'incense holder', 'decorative clock', 'globe decorative', 'wall letters', 'neon sign decorative',

// Personal & Vanity (30 items)
'vanity mirror lighted', 'makeup mirror magnifying', 'makeup organizer', 'makeup brush holder', 'cosmetics collection', 'skincare collection', 'perfume bottles', 'perfume tray', 'cologne collection', 'hair dryer',
'hair straightener', 'curling iron', 'hot rollers', 'hair tools', 'hair tool organizer', 'grooming kit', 'electric shaver', 'manicure set', 'nail polish collection', 'tissue box holder',
'jewelry cleaning kit', 'watch box', 'watch winder', 'eyeglasses', 'reading glasses', 'sleep mask', 'ear plugs', 'essential oil diffuser', 'aromatherapy set', 'vanity drawer organizer',

// Comfort & Miscellaneous (40 items)
'bed tray', 'breakfast tray', 'lap desk', 'book stand', 'step stool', 'door draft guard', 'clothing steamer', 'handheld steamer', 'iron', 'ironing board',
'tabletop ironing board', 'sewing kit', 'mending kit', 'safe small', 'fireproof document box', 'first aid kit bedroom', 'flashlight', 'emergency flashlight', 'wastebasket', 'trash bin',
'tissue boxes', 'humidifier filter', 'moth repellent', 'cedar blocks', 'drawer sachets', 'air freshener', 'room spray', 'reed diffuser', 'blanket ladder', 'magazine rack',
'book stack', 'luggage', 'suitcase set', 'carry on bag', 'weekend bag', 'travel organizer', 'packing cubes', 'shoe shine kit', 'spare bedding storage', 'closet safe',

// TOTAL: 489 items
],

        Bathroom: [
'all purpose cleaner' , 'cleaning caddy' , 'decorative tray' , 'first aid kit' , 'glass cleaner' , 'light bulbs' , 'power strip' , 'surge protector' , 'trash bags' , 'trash can' , 'wall clock',

// Major Fixtures & Furniture (82 items)
'single vanity', 'double vanity', 'floating vanity', 'pedestal sink', 'undermount sink', 'vessel sink', 'bathroom faucet', 'sink drain stopper',
'bathtub', 'freestanding bathtub', 'clawfoot tub', 'soaking tub', 'whirlpool tub', 'shower stall', 
'toilet', 'bidet', 'bidet seat attachment', 'toilet seat', 'linen cabinet', 'bathroom storage cabinet', 'medicine cabinet', 'bathroom vanity mirror', 'bathroom mirror', 'full length mirror',
'mirror cabinet', 'over toilet cabinet', 'bathroom shelving unit', 'ladder shelf', 'corner shelf unit', 'bathroom bench', 'teak bath bench', 'shower seat', 'shower stool', 'vanity tray',
'vanity organizer', 'vanity mirror', 'lighted vanity mirror', 'vanity drawer liner', 'vanity drawer divider', 'shower curtain hooks', 'shower curtain rings', 'shower curtain clips', 'shower curtain liner', 'shower curtain weights',

'bathtub caddy', 'freestanding toilet paper holder', 'toilet paper stand', 'toilet paper storage', 'toilet paper roll organizer', 'toilet brush', 'toilet brush holder', 'toilet brush set', 'toilet plunger', 'toilet plunger holder',
'toilet bowl cleaner', 'toilet cleaning tablets', 'toilet tank cleaner', 'toilet seat cover', 'toilet lid cover', 'toilet mat', 'toilet base mat', 'toilet seat night light', 'toilet paper rolls', 'toilet night light',
'toilet paper storage cabinet', 'novelty toilet paper holder', 'bamboo toilet brush', 'disposable toilet brush', 'toilet deodorizer clip', 'shower door organizer', 'medicine cabinet organizer', 'eau de toilette', 'toilet bowl cleaner bottle', 'toilet scrub brush',
'vanity bulbs', 'waterproof shower curtain set',

// Vanity & Sink Accessories (39 items)
'soap dispenser', 'hand soap', 'liquid hand soap', 'bar soap dish', 'soap tray', 'toothbrush holder', 'toothbrush cup', 'electric toothbrush holder', 'toothpaste dispenser', 'cup holder',
'bathroom cup dispenser', 'cotton ball holder', 'cotton swab holder', 'q tip holder', 'cotton ball jar', 'apothecary jar set', 'magnifying mirror', 'makeup mirror', 'mirror tray', 'cosmetic organizer',
'lipstick organizer', 'makeup brush holder', 'makeup brush set', 'makeup sponge holder', 'beauty blender holder', 'nail polish organizer', 'perfume tray', 'perfume organizer', 'jewelry tray', 'hair tie organizer',
'bobby pin organizer', 'hair clip organizer', 'small drawer organizer', 'brush cleaning mat', 'makeup remover pads reusable', 'facial cleansing brush', 'sonic face brush', 'skincare fridge', 'nail polish remover pads',

// Shower & Bath Accessories (46 items)
'shower caddy', 'hanging shower caddy', 'corner shower caddy', 'tension pole shower caddy', 'shower shelf', 'shower hook', 'shower head', 'handheld shower head', 'shower head filter', 'bath tray',
'bath pillow', 'bath mat', 'non slip bath mat', 'suction cup bath mat', 'tub mat', 'shower mat', 'anti slip shower mat', 'bath rug', 'contour bath rug', 'bath rug set',
'memory foam bath mat', 'bath mat drying rack', 'loofah', 'bath sponge', 'bath brush', 'long handle bath brush', 'back scrubber', 'bath pouf', 'exfoliating gloves', 'pumice stone',
'foot scrubber', 'razor holder', 'razor stand', 'shower razor hook', 'shaving brush', 'shaving bowl', 'shower soap dish', 'shower body wash holder', 'waterproof shower radio', 'shower clock',
'shower mirror', 'fogless shower mirror', 'bath thermometer', 'rubber duck', 'bath toy organizer', 'pebble bath mat',

// Towels & Linens (30 items)
'bath towels', 'hand towels', 'washcloths', 'face towels', 'fingertip towels', 'bath sheet', 'beach towel', 'hooded towel', 'gym towel', 'microfiber towel',
'quick dry towel', 'towel set', 'guest towel set', 'decorative hand towels', 'towel rack', 'freestanding towel rack', 'heated towel rack', 'towel ladder rack', 'towel bar extender', 'over door organizer',
'bathrobe', 'spa robe', 'kids bathrobe', 'bath wrap towel', 'hair towel wrap', 'turban towel wrap', 'pool towel', 'spa wrap towel', 'bamboo washcloths', 'exfoliating washcloth',

// Toilet Accessories (2 items)
'flushable wipes', 'extra roll holder',

// Storage & Organization (46 items)
'under sink organizer', 'under sink cabinet organizer', 'under sink shelf', 'under sink pull out drawer', 'under sink storage bins', 'bathroom drawer organizer', 'bathroom drawer divider', 'bathroom cabinet organizer', 'cabinet door organizer', 'stackable storage drawers',
'plastic storage drawers', 'clear storage drawers', 'storage basket', 'woven storage basket', 'wire storage basket', 'fabric storage basket', 'storage bin', 'storage box', 'decorative storage box', 'bathroom storage tray',
'countertop organizer', 'countertop caddy', 'hair tool organizer', 'blow dryer holder', 'curling iron holder', 'flat iron holder', 'hair dryer hook', 'hair tool caddy', 'heat resistant mat', 'heat resistant pouch',
'shower niche shelf', 'door pocket organizer', 'first aid organizer', 'pill organizer', 'drawer freshener', 'cabinet freshener', 'sachets', 'odor absorber', 'lazy susan organizer', 'rotating organizer',
'suction cup organizer', 'door mounted organizer', 'towel bar with shelf', 'over sink shelf', 'bamboo organizer', 'acrylic organizer set',

// Personal Care & Grooming (84 items)
'electric toothbrush', 'manual toothbrush', 'toothpaste', 'teeth whitening strips', 'teeth whitening kit', 'dental floss', 'floss picks', 'water flosser', 'tongue scraper', 'mouthwash',
'mouthwash dispenser', 'electric shaver', 'manual razor', 'razor blades', 'shaving cream', 'shaving gel', 'aftershave', 'shaving soap', 'hair dryer', 'travel hair dryer',
'hair dryer diffuser', 'hair dryer concentrator', 'curling iron', 'curling wand', 'flat iron', 'hair straightener', 'hot air brush', 'hair crimper', 'heated rollers', 'hair roller set',
'electric hair trimmer', 'beard trimmer', 'nose hair trimmer', 'ear hair trimmer', 'eyebrow trimmer', 'facial hair remover', 'epilator', 'electric razor', 'nail clippers', 'nail scissors',
'nail file', 'nail buffer', 'cuticle pusher', 'cuticle trimmer', 'nail brush', 'toenail clippers', 'pedicure kit', 'manicure set', 'tweezers', 'eyebrow razor',

'facial roller', 'gua sha tool', 'face massager', 'hair brush', 'wide tooth comb', 'detangling brush', 'round brush', 'paddle brush', 'boar bristle brush', 'hair pick',
'fine tooth comb', 'tail comb', 'styling comb', 'hair elastic set', 'hair ties', 'bobby pins', 'hair clips', 'hair pins', 'barrettes', 'headbands',
'shower cap', 'hair net', 'scalp massager', 'facial cleansing device', 'blackhead remover tool', 'pore vacuum', 'lash curler', 'eyebrow stencil kit', 'makeup setting spray', 'blush brush',
'powder brush', 'foundation brush', 'tweezers medical', 'electric toothbrush charging base',

// Skincare & Beauty (62 items)
'face wash', 'facial cleanser', 'micellar water', 'toner', 'face serum', 'moisturizer', 'face lotion', 'eye cream', 'night cream', 'face oil',
'sunscreen', 'SPF moisturizer', 'face mask', 'sheet mask', 'clay mask', 'exfoliating scrub', 'chemical exfoliant', 'retinol cream', 'vitamin C serum', 'hyaluronic acid serum',
'acne spot treatment', 'lip balm', 'lip scrub', 'makeup remover', 'micellar cleansing water', 'eye makeup remover', 'cleansing balm', 'cleansing oil', 'facial wipes', 'cotton rounds',
'cotton balls', 'cotton swabs', 'facial steamer', 'face roller', 'body lotion', 'body cream', 'body butter', 'dry body oil', 'shimmer lotion', 'body scrub',
'sugar scrub', 'salt scrub', 'self tanner', 'after sun lotion', 'hand cream', 'foot cream', 'heel balm', 'cuticle oil', 'stretch mark cream', 'deodorant',

'antiperspirant', 'natural deodorant', 'deodorant spray', 'perfume', 'cologne', 'body spray', 'fragrance roller', 'facial mist spray', 'tanning mitt', 'body shimmer',
'SPF lip balm', 'toner kit',

// Hair Care Products (39 items)
'shampoo', 'conditioner', 'co wash', 'dry shampoo', 'clarifying shampoo', 'hair mask', 'deep conditioner', 'leave in conditioner', 'hair serum', 'hair oil',
'argan oil', 'coconut hair oil', 'heat protectant spray', 'hair spray', 'mousse', 'hair gel', 'pomade', 'hair wax', 'styling cream', 'curl cream',
'curl defining gel', 'sea salt spray', 'volumizing spray', 'detangling spray', 'hair tonic', 'scalp treatment', 'scalp serum', 'scalp oil', 'hair growth serum', 'hair vitamin supplements',
'color treated shampoo', 'purple shampoo', 'toning conditioner', 'hair dye kit', 'bleach kit', 'gloss treatment', 'hair detox treatment', 'bond repair treatment', 'hair glossing treatment',

// Bath & Body Products (25 items)
'body wash', 'shower gel', 'bar soap', 'antibacterial soap', 'castile soap', 'bath salts', 'bath bombs', 'bubble bath', 'bath oil', 'bath soak',
'shower steamers', 'bath tablets', 'epsom salt', 'bath milk powder', 'shower scrub', 'body polish', 'bath foam', 'bath confetti', 'bath accessories set', 'gift set',
'shower gel set', 'spa gift basket', 'bath accessory kit', 'aromatherapy shower kit', 'charcoal soap bar',

// First Aid & Medicine (29 items)
'bandages', 'adhesive bandages', 'gauze pads', 'medical tape', 'antiseptic wipes', 'hydrogen peroxide', 'rubbing alcohol', 'antibiotic ointment', 'pain reliever', 'ibuprofen',
'acetaminophen', 'antacid', 'allergy medicine', 'cold medicine', 'cough syrup', 'nasal spray', 'eye drops', 'ear drops', 'thermometer', 'blood pressure monitor',
'pulse oximeter', 'prescription organizer', 'pill box', 'medicine cup', 'medicine dropper', 'heating pad', 'ice pack', 'elastic bandage', 'room thermometer',

// Cleaning Supplies (39 items)
'bathroom cleaner spray', 'tile cleaner', 'grout cleaner', 'mold and mildew remover', 'shower cleaner spray', 'mirror cleaner', 'tub and tile scrub', 'bathroom disinfectant', 'bleach spray', 'drain cleaner',
'drain hair catcher', 'drain strainer', 'scrub brush', 'grout brush', 'cleaning sponge', 'scrub sponge', 'microfiber cleaning cloth', 'cleaning rags', 'rubber gloves', 'cleaning supply organizer',
'small trash can', 'wastebasket', 'wastebasket liner', 'trash can with lid', 'odor eliminating spray', 'air freshener', 'scent diffuser', 'reed diffuser', 'plug in air freshener', 'essential oil diffuser',
'candle', 'matches', 'candle lighter', 'squeegee', 'shower squeegee', 'drain cleaner tablets', 'descaler solution', 'soap scum remover', 'hard water stain remover',

// Lighting & Electrical (16 items)
'LED light bulbs', 'night light', 'motion sensor night light', 'plug in night light', 'bathroom scale', 'digital bathroom scale', 'body weight scale', 'shaver charging stand', 'extension cord bathroom safe', 'USB charging hub',
'wall charger', 'lighted mirror remote', 'bluetooth mirror', 'smart mirror', 'waterproof phone holder shower', 'shower phone mount',

// Decor & Ambiance (28 items)
'bathroom rug set', 'decorative basket', 'soap stone dish', 'bathroom wall art', 'framed bathroom art', 'canvas bathroom print', 'picture frame', 'decorative mirror', 'plant pot', 'indoor plant',
'artificial plant', 'succulent pot', 'air plant holder', 'bamboo plant', 'eucalyptus bundle', 'bath salt display jar', 'apothecary bottle set', 'glass jar set', 
// Ventilation & Comfort (14 items)
'portable fan', 'space heater bathroom safe', 'towel warmer', 'electric towel warmer', 'freestanding towel warmer', 'heated bathroom floor mat', 'shower speaker', 'waterproof bluetooth speaker', 'bathroom radio', 'humidity monitor',
'dehumidifier small', 'air purifier small', 'aromatherapy diffuser', 'anti fog mirror spray',

// TOTAL: 581 items

],

        'Dining room': [ 
// Dining Table & Components (32 items)
'dining table', 'table base', 'table legs', 'table leaf insert', 'table leaf storage bag', 'table pad protector', 'table leg hardware kit', 'table corner protectors', 'table extension slides', 'table leveling pads',
'table leaf alignment pins', 'table pad storage tube', 'table refinishing kit', 'table polish cloth', 'table scratch repair marker', 'table leg bolts', 'table stabilizer brackets', 'console table corner braces', 'table leaf support bracket', 'table support beam',
'table brace kit', 'table hardware screws', 'table leveling shims', 'table leaf lock clips', 'dining table extension mechanism', 'table edge protectors', 'table top glass cover', 'tabletop sealer', 'tabletop protector film', 'console table leg braces',
'tabletop sculpture', 'ironing board tabletop',
 
// Chairs & Bench Seating (37 items)
'dining chairs', 'arm chairs', 'side chairs', 'bench seating', 'chair cushions', 'seat covers', 'chair floor protectors', 'chair leg caps', 'chair glide pads', 'chair seat screws',
'chair back support brace', 'chair upholstery cleaner', 'chair seat cushion inserts', 'chair back pads', 'chair cushion storage bag', 'chair leg braces', 'chair upholstery kit', 'bench frame bolts', 'bench cushion foam', 'chair cushion ties',
'bench storage drawer', 'chair leg felt pads', 'bench leg levelers', 'banquette', 'banquette cushion set', 'banquette slipcover', 'captain chair', 'swivel dining chair', 'chair booster seat', 'high chair',
'chair upholstery fabric', 'chair slipcover set', 'chair cushion foam', 'chair armrest pads', 'chair backrest screws', 'chair spindle', 'chair seat webbing',
 
// Storage & Display Furniture (111 items)
'china cabinet', 'hutch cabinet', 'buffet table', 'sideboard', 'bar cabinet', 'wine cabinet', 'curio cabinet', 'display cabinet', 'console table', 'serving cart',
'bar cart', 'storage cabinet', 'drawer organizers', 'cabinet shelf liner', 'buffet warming trays', 'storage baskets', 'decorative boxes', 'china cabinet shelf clips', 'china cabinet glass panels', 'hutch drawer pulls',
'buffet cabinet hinges', 'sideboard drawer dividers', 'bar cabinet lock', 'wine cabinet shelf inserts', 'curio cabinet lighting kit', 'display cabinet glass cleaner kit', 'console table drawer liner', 'cabinet shelf riser', 'buffet fuel cans', 'glass cabinet lock',
'storage basket liner', 'decorative box lid', 'buffet warming tray cover', 'china cabinet light bulbs', 'china cabinet glass shelf inserts', 'buffet drawer slides', 'wine cabinet thermometer', 'curio cabinet glass cleaner', 'display cabinet shelf lighting', 'serving cart handle grips',
'glass cabinet shelf protector', 'storage basket stacker', 'decorative box storage crate', 'china cabinet door lock', 'buffet cabinet key spare', 'bar cabinet lighting strip', 'curio cabinet shelf clips', 'console table anti slip pads', 'china cabinet door handles', 'china cabinet shelf lighting kit',
 
'hutch shelf brackets', 'buffet door bumpers', 'sideboard shelf supports', 'bar cabinet wine glass holders', 'curio cabinet lock', 'bar cart glass holder insert', 'cabinet hinge repair kit', 'china cabinet plate stand', 'buffet warming tray lid', 'china cabinet polish cloth',
'glass cabinet door bumpers', 'storage basket lid', 'decorative box large', 'china cabinet shelf liner', 'buffet anti slip mat', 'sideboard drawer liner', 'bar cabinet bottle mat', 'curio cabinet display stand', 'display cabinet door magnet', 'console table drawer divider',
'hutch decorative trim', 'buffet cabinet shelf riser', 'bar cabinet LED lighting', 'wine cabinet humidity monitor', 'curio cabinet shelf protector', 'display cabinet glass polish', 'bar cart shelf liner', 'china cabinet door magnet', 'china cabinet door catch', 'china cabinet door bumpers',
'china cabinet key', 'china cabinet lock cylinder', 'china cabinet glass shelf supports', 'china cabinet shelf pins', 'china cabinet shelf brackets', 'china cabinet leveling feet', 'hutch shelf pins', 'hutch shelf supports', 'hutch door catch', 'hutch door bumpers',
'hutch door hinges soft close', 'hutch cabinet feet levelers', 'hutch glass shelf supports', 'hutch lighting remote', 'sideboard shelf pins', 'sideboard door catch', 'sideboard door bumpers', 'sideboard key', 'sideboard lock cylinder', 'sideboard adjustable feet',
 
'sideboard cable grommet', 'sideboard cord management clips', 'bar cabinet wine bottle dividers', 'bar cabinet shelf liner roll', 'bar cabinet magnetic catch', 'bar cabinet LED under shelf lights', 'bar cabinet glass shelf pins', 'bar cabinet leveling feet', 'bar cabinet moisture absorber', 'anti tarnish drawer liners',
'hutch LED puck lights',
 
// Table Linens & Place Settings (36 items)
'table runner', 'placemats', 'cloth napkins', 'napkin rings', 'napkin holder', 'tablecloth', 'tablecloth clips', 'holiday table runner', 'holiday placemats', 'holiday napkins',
'placemat storage rack', 'napkin ring storage box', 'tablecloth storage bag', 'tablecloth ironing spray', 'placemat holder tray', 'holiday napkin holder', 'placemat storage box', 'napkin press iron', 'tablecloth hanger rack', 'seasonal table runner storage box',
'place card holder', 'place cards', 'menu cards', 'napkin fold board', 'napkin press', 'table number stand', 'runner clips', 'table skirt', 'bar napkins', 'cocktail napkins',
'cloth napkin laundry bag', 'linen storage box', 'linen drawer sachets', 'table linen storage dividers', 'placemat wipes', 'napkin storage bin',
 
// Dinnerware & Serving Dishes (51 items)
'dinner plates', 'salad plates', 'bread plates', 'charger plates', 'bowls', 'soup bowls', 'cereal bowls', 'serving bowls', 'platter', 'serving platter',
'gravy boat', 'butter dish', 'bread basket', 'bread basket liner', 'cake stand', 'tiered tray', 'dessert plates', 'serving trays', 'dinner plate storage rack', 'salad plate storage rack',
'charger plate storage case', 'bowl storage shelf', 'bread cutting board', 'cake dome cover', 'bowl stacking pads', 'serving bowl lid', 'platter storage sleeve', 'gravy boat saucer', 'bowl display stand', 'serving bowl rack',
'platter display easel', 'gravy boat tray', 'salt cellar lid', 'platter cover', 'food tent mesh cover', 'cheese board', 'cheese markers', 'charcuterie board', 'charcuterie bowls', 'olive dish',
'dip bowl set', 'chip and dip platter', 'nut bowl set', 'salad bowl set', 'salad servers', 'oil bottle dispenser', 'vinegar bottle dispenser', 'salt cellar spoon', 'honey jar', 'butter dish cover spare',
 
'serving dish warming base',
 
// Condiments & Table Staples (21 items)
'salt shaker', 'pepper shaker', 'salt grinder', 'pepper grinder', 'sugar bowl', 'cream pitcher', 'water pitcher', 'carafe', 'coffee carafe', 'sugar dispenser',
'cream pitcher storage tray', 'water carafe lid', 'salt grinder refill', 'pepper grinder refill', 'sugar bowl lid', 'cream pitcher lid', 'pepper mill spare parts', 'sugar bowl spoon', 'cream pitcher tray', 'water pitcher filter insert',
'salad dressing cruet',
 
// Glassware (33 items)
'wine glasses', 'champagne flutes', 'cocktail glasses', 'highball glasses', 'lowball glasses', 'beer mugs', 'pint glasses', 'shot glasses', 'coffee cups', 'tea cups',
'saucers', 'mugs', 'glassware storage box', 'highball glass storage rack', 'coffee cup organizer', 'tea cup display shelf', 'mug tree', 'glassware padding inserts', 'coffee cup saucer set', 'glassware display stand',
'glassware padding wrap', 'wine glass charms', 'glassware drying cloth', 'decanter', 'liquor decanter', 'drink mixing glass', 'cocktail glass cleaning cloth', 'champagne flute storage case', 'beer mug storage crate', 'wine glass cleaning brush',
'champagne flute cleaning brush', 'beer mug cleaning brush', 'mug cabinet riser',
 
// Flatware & Serving Utensils (26 items)
'flatware set', 'dinner forks', 'salad forks', 'dinner knives', 'steak knives', 'soup spoons', 'teaspoons', 'ladle', 'tongs', 'cake server',
'pie server', 'ice tongs', 'bar spoon', 'flatware drawer tray', 'steak knife storage block', 'ladle holder', 'tongs stainless steel', 'cake knife', 'pie server stainless steel', 'bread knife',
'fondue forks', 'flatware polishing kit', 'steak knife sharpening kit', 'ice tongs holder', 'tea infuser spoon', 'cheese knives',
 
// Bar & Wine (71 items)
'wine rack', 'wine opener', 'wine stopper', 'wine aerator', 'ice bucket', 'bar tool set', 'cocktail shaker', 'jigger', 'coasters', 'coaster holder',
'drink dispenser', 'beverage tub', 'wine bottle stopper set', 'ice scoop', 'ice mold tray', 'bar mat', 'cocktail strainer', 'mudler', 'drink stirrers', 'drink garnish tray',
'liquor pour spouts', 'coaster set stone', 'coaster set cork', 'wine rack floor stand', 'wine bottle storage crate', 'wine fridge', 'wine fridge shelves', 'wine fridge drip tray', 'wine fridge charcoal filter', 'wine fridge thermometer probe',
'wine fridge humidity gauge', 'wine bottle label tags', 'wine bottle marker pen', 'wine bottle drip rings', 'wine bottle foil cutter', 'wine bottle opener electric', 'wine corkscrew lever', 'wine cork extractor', 'bar caddy', 'drink stirrer set',
'cocktail picks', 'cocktail pick holder', 'bitters bottles', 'bitters dropper caps', 'simple syrup bottles', 'mixer bottles', 'ice sphere mold', 'whiskey stones', 'whiskey stone pouch', 'bar strainer fine mesh',
 
'cocktail shaker weighted tins', 'cocktail shaker insulation sleeve', 'cocktail rimmer', 'liquor bottle shelf', 'liquor bottle risers', 'liquor bottle pour spout caps', 'pour spout dust covers', 'speed pourer set', 'bar rail mat', 'bar rail liner',
'bar towel set', 'bar towel holder', 'drink dispenser infuser tube', 'drink dispenser ice core', 'drink dispenser drip tray', 'beverage tub drain plug', 'beverage tub liner', 'ice bucket stand base', 'ice bucket drip mat', 'ice scoop holder',
'beverage dispenser spigot',
 
// Coffee & Tea (20 items)
'tea pot', 'coffee warmer plate', 'tea infuser', 'tea strainer', 'tea pot infuser insert', 'pitcher infuser insert', 'tea kettle electric', 'tea kettle base', 'tea canister set', 'tea canister labels',
'tea infuser basket', 'tea warmer candle base', 'tea warmer plate', 'tea storage organizer', 'coffee bean canister', 'coffee scoop', 'coffee filter basket', 'coffee pod holder', 'coffee pod drawer', 'tea strainer stand',
 
// Decor & Centerpieces (47 items)
'table centerpiece', 'decorative tray', 'candle holders', 'candles', 'wall art', 'picture frames', 'wall mirror', 'wall clock', 'seasonal centerpiece decor', 'holiday candle holders',
'centerpiece storage crate', 'decorative tray liner', 'candle snuffer', 'candle wick trimmer', 'wall clock battery pack', 'seasonal table decor bin', 'centerpiece vase set', 'candle storage box', 'candle lighter', 'wall art dust cover',
'seasonal decor table sign', 'holiday centerpiece box', 'centerpiece decorative stones', 'decorative tray handles', 'candle storage sleeve', 'candle wax remover', 'wall art frame set', 'wall clock repair kit', 'table decor riser', 'centerpiece foam blocks',
'floral wire', 'floral tape', 'flower frog', 'vase filler beads', 'vase filler stones', 'table decor LED string lights', 'fairy light battery pack', 'remote timer plug', 'decorative bowl', 'decorative vase',
'decorative pitcher', 'decorative lantern', 'mantel clock', 'framed print', 'gallery wall frame set', 'mirror frame', 'battery pack organizer',
 
// Lamps & Lighting (9 items)
'light bulbs', 'floor lamp', 'table lamp', 'lamp shade', 'lamp bulbs', 'table lamp finial', 'lamp harp', 'floor lamp base weight', 'lamp cord cover',
 
// Silverware & China Storage (15 items)
'silverware storage chest', 'tableware organizer tray', 'tableware storage labels', 'holiday china storage case', 'china display stand', 'china storage divider', 'silver polish', 'silverware polishing gloves', 'silver storage anti tarnish strips', 'silverware anti tarnish cloth',
'chafing dish cover', 'anti tarnish silver bags', 'anti tarnish strips', 'silver storage rolls', 'silver storage pouches',
 
// Rugs & Floor (16 items)
'rug storage bag', 'area rug', 'rug pad', 'floor runner', 'area rug corner tape', 'rug cleaning spray', 'floor runner anti slip pad', 'area rug beater tool', 'rug storage roll', 'area rug cleaning kit',
'rug brush', 'rug fringe comb', 'rug tape double sided', 'runner rug tape', 'rug grippers', 'rug corner weights',
 
// Furniture Care & Maintenance (11 items)
'felt pads bulk pack', 'furniture sliders', 'furniture leveling shims', 'wood filler', 'wood stain pen', 'wood polish cloth', 'wood cleaner concentrate', 'wood conditioner oil', 'china polishing cloth', 'furniture polish',
'furniture polish spray',
 
// Cleaning Supplies (9 items)
'glass cleaner', 'all purpose cleaner', 'disinfecting wipes', 'microfiber cloths', 'paper towels', 'mirror cleaning spray', 'all purpose cleaner gallon', 'disinfectant wipe refill', 'beverage dispenser cleaning brush',
 
// Trash & Recycling (3 items)
'trash can', 'trash bags', 'recycling bin',
 
// Tools & Utility (5 items)
'step stool', 'step stool rubber feet', 'fondue pot burner cap', 'iron travel', 'steamer travel',
 
// TOTAL: 553 items
],
        "Office / Study": [// Desks & Desk Furniture (40 items)
'desk', 'standing desk', 'desk legs', 'desk hutch', 'desk return', 'side table', 'console table', 'desk leg levelers', 'desk corner protectors', 'side table drawer liner',
'console table anti tip strap', 'desk modesty panel', 'desk leveling shims', 'side table leg pads', 'console table drawer pulls', 'desk surface protector pad', 'desk corner guards', 'desk support brackets', 'desk hardware screw kit', 'side table reinforcement brackets',
'console table leg braces', 'desk privacy panel', 'desk name plate', 'corner desk', 'executive desk', 'roll top desk', 'writing desk', 'secretary desk', 'drafting table', 'desk blotter',
'desk writing pad', 'desk glass top protector', 'desk corner clamp light', 'desk lock key spare', 'desk hinge repair kit', 'desk panel fasteners', 'desk frame bolts', 'desk cross support bar', 'desk reinforcement plate', 'desk corner shelf riser',

// Standing Desk Components (3 items)
'standing desk motor', 'standing desk control panel', 'standing desk anti collision sensor',

// Desk Accessories & Organizers (64 items)
'desk organizer', 'desk calendar', 'desk cable grommet', 'desk drawer slides', 'desk drawer lock', 'desk drawer felt liner', 'desk planner', 'desk cable tray under mount', 'desk drawer handles', 'desk drawer dividers bamboo',
'desk organizer tray', 'desk calendar stand', 'desktop cable organizer tray', 'desk drawer lock kit', 'mail sorter desktop', 'desk planner refill pages', 'legal pad desk tray', 'cable management under desk rack', 'desk drawer divider set', 'desk drawer pencil tray',
'desk drawer cable port', 'desk cable spine', 'under desk keyboard drawer', 'under desk CPU mount', 'under desk storage shelf', 'under desk headphone hook', 'under desk foot hammock', 'desk cable clamp', 'desk pen tray', 'desk cable pass through',
'desk power grommet outlet', 'desk drawer tray insert', 'desk side hanging file rack', 'desk privacy screen panel', 'desktop bookshelf', 'desktop file sorter', 'desktop mail tray', 'desktop supply caddy', 'acoustic desk divider', 'desktop microphone boom arm',
'microphone desk clamp', 'desktop NAS storage', 'desk filing tray metal', 'calendar desk pad', 'desk drawer lock cylinder', 'desk underside wire basket', 'desk shelf add on', 'desk side pocket organizer', 'desk drawer soft close adapter', 'monitor desk clamp arm dual',

'monitor desk clamp arm triple', 'desk drawer power outlet', 'under desk surge strip', 'under desk cable hammock', 'desk clamp cup holder', 'desk side hook set', 'desk side cable pouch', 'desk side waste bin', 'desk side magazine rack', 'desk side drawer add on',
'desk mounted privacy wing', 'acoustic desk pad', 'anti glare desk mat', 'anti static desk mat',

// Chairs & Seating (26 items)
'foot rest adjustable', 'foot rest adjustable metal', 'office chair', 'office chair mat', 'step stool', 'office chair armrest pads', 'chair floor protectors', 'step stool rubber feet', 'office chair lumbar support', 'office chair gas lift cylinder',
'office chair tilt mechanism', 'chair wheel floor protectors', 'drafting stool', 'kneeling chair', 'task chair', 'guest chair', 'ergonomic chair headrest', 'chair armrest screw set', 'chair tilt control handle', 'chair lumbar pillow',
'chair seat cover', 'chair upholstery repair kit', 'chair gas lift removal tool', 'office chair glide feet', 'foot rest', 'seat cushion',

// Bookcases & Shelving (5 items)
'bookcase', 'bookshelf', 'bookcase shelf brackets', 'bookshelf anchors', 'bookcase shelf pins',

// Filing Cabinets & Storage Cabinets (19 items)
'storage cabinet adjustable shelves', 'filing cabinet', 'lateral file cabinet', 'storage cabinet', 'file cabinet dividers', 'filing cabinet key spare', 'file cabinet lock', 'file cabinet anti tip kit', 'storage cabinet shelf liner', 'file cabinet hanging rails',
'storage cabinet door bumpers', 'notebook storage cabinet', 'binder storage cabinet', 'cardstock storage cabinet', 'file cabinet label frame', 'file cabinet rail clips', 'storage cabinet locking bar', 'storage cabinet door magnet', 'storage cabinet leveling feet',

// Credenza (8 items)
'credenza adjustable shelf', 'credenza', 'credenza drawer divider', 'credenza lock cylinder', 'credenza cable management hole cover', 'credenza caster wheels', 'credenza drawer slides heavy duty', 'credenza shelf pins',

// Storage Bins, Baskets & Boxes (56 items)
'tablet storage sleeve', 'drawer organizers', 'file storage box', 'document storage box', 'storage baskets', 'storage bins', 'notebook storage crate', 'legal pad storage box', 'binder storage rack', 'manila envelope storage box',
'printer paper storage bin', 'cardstock storage folder', 'photo paper storage sleeve', 'document sorter rack', 'throw blanket storage bag', 'storage basket liner', 'storage bin lids', 'drawer divider plastic', 'pen storage box', 'pencil storage box',
'file storage crate', 'laminator pouch storage box', 'rubber band storage jar', 'notebook shelf rack', 'binder rack vertical', 'envelope storage rack', 'bubble mailer storage bin', 'external keyboard storage case', 'throw blanket folded storage bin', 'decorative pillow storage bag',
'storage basket stacker', 'storage bin labels', 'usb drive storage organizer', 'extension cord storage reel', 'drawer organizer bamboo', 'file storage tote', 'staple storage box', 'binder clip storage box', 'scissor storage rack', 'glue stick storage bin',
'highlighter storage tray', 'marker storage case', 'network cable rack', 'hdmi cable storage box', 'power adapter storage case', 'throw blanket storage chest', 'storage basket fabric liner', 'storage bin rolling cart', 'clipboard storage rack', 'drawer slide lubricant',

'drawer slide mounting jig', 'drawer stop clip', 'drawer rail brackets', 'drawer track alignment tool', 'SD card storage box', 'micro SD storage wallet',

// Server & Network Rack (14 items)
'network switch rack mount', 'network rack shelf', 'network rack screws', 'rack mount power strip', 'rack mount drawer', 'rack mount fan', 'rack mount cable manager', 'server rack rails', 'server rack caster kit', 'server rack blank panel',
'server rack mount rails', 'server cooling fan', 'server cable arm', 'server power supply',

// Computers & Monitors (23 items)
'desktop computer', 'desktop computer cables', 'desktop power supply', 'monitor riser shelf', 'computer tower', 'monitor', 'second monitor', 'computer speakers', 'monitor screen cleaner kit', 'monitor privacy screen',
'monitor power cable', 'monitor mounting screws', 'computer cooling pad', 'monitor calibration tool', 'monitor mounting plate', 'monitor cable cover', 'computer surge protector strip', 'monitor cleaning wipes', 'studio monitor speakers', 'studio monitor isolation pads',
'monitor light bar', 'computer privacy hood', 'monitor calibration sensor',

// Laptops & Tablets (33 items)
'tablet', 'tablet charger', 'laptop stand adjustable', 'tablet stand holder', 'tablet charging cable spare', 'tablet screen protector', 'tablet charging dock', 'tablet stand adjustable metal', 'tablet stylus pen', 'tablet keyboard case',
'tablet folio cover', 'tablet screen cleaning kit', 'tablet stand adjustable arm', 'tablet security lock', 'tablet pen holder clip', 'tablet docking station', 'charging cable retractable', 'portable power bank', 'portable document scanner', 'laptop',
'laptop charger', 'laptop sleeve case', 'laptop docking cable', 'laptop riser stand', 'laptop docking cradle', 'laptop external GPU enclosure', 'laptop memory upgrade kit', 'laptop SSD upgrade kit', 'laptop hinge repair kit', 'laptop charger extension cable',
'laptop cooling mat', 'laptop anti theft cable', 'laptop security lock',

// Keyboards & Mice (32 items)
'keyboard tray brackets', 'keyboard', 'wireless keyboard', 'mouse', 'wireless mouse', 'mouse pad', 'extended mouse pad', 'external keyboard wrist rest', 'keyboard wrist rest', 'keyboard cover',
'wireless mouse receiver', 'mouse pad wrist support', 'external keyboard cover', 'keyboard cleaning gel', 'mouse cleaning wipes', 'ergonomic keyboard', 'mechanical keyboard', 'mechanical keyboard keycap set', 'keyboard switch tester', 'keyboard switch puller',
'keyboard cleaning brush', 'keyboard vacuum mini', 'keyboard wrist support gel', 'keyboard travel case', 'gaming mouse', 'vertical mouse ergonomic', 'mouse grip tape', 'mouse cable bungee', 'mouse travel pouch', 'mouse battery pack',
'mouse USB receiver extender', 'mouse docking charger',

// Docking Stations (2 items)
'docking station cable kit', 'docking station',

// External Drives & Storage Media (16 items)
'NAS hard drive', 'NAS drive tray', 'usb flash drives', 'usb flash drive organizer', 'usb flash drive case', 'USB floppy drive', 'USB card reader', 'micro SD adapter', 'external hard drive', 'external hard drive case',
'external hard drive docking bay', 'external SSD drive', 'SSD enclosure', 'hard drive cloning dock', 'hard drive anti static bag', 'data recovery software license',

// Printers, Scanners & Shredders (22 items)
'printer stand with drawers', 'printer paper cabinet', 'printer stand shelf', 'printer', 'scanner', 'printer stand', 'printer paper tray', 'printer ink cartridges', 'printer paper ream', 'document scanner tray',
'printer cleaning sheets', 'printer maintenance kit', 'printer paper catch tray', 'scanner glass cleaner', 'laser printer drum unit', 'printer fuser unit', 'barcode scanner stand', 'receipt printer', 'receipt printer ink ribbon', 'paper shredder',
'shredder oil', 'postal scale digital',

// Networking Equipment (21 items)
'router', 'modem', 'wifi extender', 'network switch', 'network cable tester', 'router ethernet switch', 'wifi extender mounting kit', 'network cable tester advanced', 'WiFi antenna booster', 'WiFi signal analyzer',
'network firewall appliance', 'smart plug WiFi', 'ethernet cables', 'ethernet cable wall clips', 'ethernet cable boots', 'cable punch down tool', 'ethernet cable tester advanced', 'ethernet cable crimper tool', 'patch cable organizer', 'patch cable color tags',
'ethernet crimp connectors',

// Audio & Microphones (12 items)
'microphone stand desk mount', 'microphone desk stand', 'microphone cable XLR', 'USB audio interface', 'microphone', 'microphone pop filter', 'speaker isolation pads', 'microphone shock mount', 'audio interface', 'audio mixer small',
'speaker stands', 'speaker isolation stands',

// Webcams, Lighting & Backdrops (13 items)
'ring light desk mount', 'webcam ring light', 'ring light tripod stand', 'ring light diffuser', 'backdrop clamp', 'screen light bar remote', 'webcam', 'webcam privacy cover', 'webcam mount clip', 'webcam tripod',
'green screen backdrop', 'green screen stand', 'backdrop crossbar',

// Headphones & Headsets (11 items)
'headphone cable extension', 'headphone stand clamp mount', 'headphones', 'headset', 'headphone stand', 'headset charging dock', 'headphone stand wooden', 'headphone amplifier', 'headphone splitter', 'headphone case hard shell',
'headphone hook adhesive',

// Cables & Adapters (30 items)
'cable organizer box', 'cable sleeves', 'hdmi cables', 'displayport cable', 'vga cable', 'charging cable organizer', 'cable management tray', 'usb extension cable', 'displayport adapter', 'vga adapter',
'USB C hub adapter', 'USB C to HDMI adapter', 'USB C docking hub', 'USB C extension cable', 'cable management ring', 'cable management raceway', 'cable mounting base', 'Velcro cable ties', 'cable extension reel heavy duty', 'magnetic charging cable',
'charging cable multi head', 'cord label tags', 'cord clips', 'cord concealment channel', 'cord management clips', 'HDMI switch', 'display splitter', 'zip tie pack', 'XLR to USB adapter', 'KVM switch',

// Power & Charging (36 items)
'power strip', 'phone charger', 'usb hub', 'power adapters', 'battery backup', 'docking station power supply', 'power strip cord wrap', 'calculator battery', 'universal power adapter', 'wall clock battery pack',
'smoke detector battery', 'power conditioner', 'plug splitter adapter', 'USB wall charger multi port', 'USB charging block', 'power cord organizer wrap', 'USB charging tower', 'power outlet timer', 'button cell battery pack', 'battery tester device',
'battery disposal container', 'cordless phone charger base', 'cordless phone battery pack', 'power bank charging dock', 'surge protector', 'extension cords', 'charging station', 'extension cord reel', 'extension cord floor cover', 'charging hub multi port',
'surge protector outlet cover', 'surge suppression outlet', 'voltage regulator', 'UPS battery pack', 'AA battery bulk pack', 'AAA battery bulk pack',

// Laminators & Binding (15 items)
'laminator cleaning sheets', 'laminator', 'laminating sheets', 'laminator heat resistant gloves', 'laminator corner rounder', 'laminator thermal pouch carrier', 'laminator jam release tool', 'laminator foil sheets', 'laminator cold pouch kit', 'laminator trim cutter',
'document binding machine', 'binding comb set', 'binding coil set', 'binding cover sheets', 'binding spine cutter',

// Phones & Communication (1 items)
'phone dock stand',

// Pens, Pencils & Writing (13 items)
'pen holder', 'pencil holder', 'pen refill pack', 'pencil sharpener', 'correction fluid pen', 'pen refill organizer', 'pencil case organizer', 'mechanical pencil set', 'highlighters', 'highlighter pack',
'highlighter organizer', 'correction tape', 'ink refill kit',

// Paper & Stationery (28 items)
'paper tray', 'paper clips', 'notebooks', 'cardstock paper', 'photo paper', 'legal size paper', 'paper towels', 'paper tray stacker', 'paper clip organizer', 'paper tray letter size',
'paper clip tray', 'sticky note dispenser', 'photo paper binder', 'paper towel dispenser', 'photo paper archival box', 'paper trimmer guillotine', 'paper scoring board', 'stapler', 'staples', 'legal pads',
'sticky notes', 'index cards', 'staple remover', 'staple refill box', 'sticky note holder', 'index card organizer', 'stapler heavy duty', 'staples bulk pack',

// Folders, Binders & Filing (21 items)
'mail organizer drawer', 'envelope filing drawer', 'binder clips', 'binders', 'binder dividers', 'envelopes', 'manila envelopes', 'shipping envelopes', 'file folder labels', 'binder clip organizer',
'binder spine labels', 'envelope organizer tray', 'binder clip container', 'binder dividers labeled', 'binder spine label kit', 'project planner binder', 'business card binder', 'document trays', 'hanging file folder tabs', 'file expanding folder',
'presentation folder',

// Labels & Tape (20 items)
'label maker', 'labels', 'tape dispenser', 'shipping label roll', 'label maker case', 'tape dispenser weighted', 'liquid glue dispenser', 'rubber bands', 'adhesive tape', 'packing tape',
'glue sticks', 'liquid glue', 'rubber band ball', 'tape refill rolls', 'glue stick bulk pack', 'liquid glue bottle spare', 'adhesive tape bulk roll', 'packing tape gun', 'glue stick organizer', 'liquid glue refill bottle',

// Scissors, Punches & Cutting (9 items)
'letter opener', 'scissor sharpener', 'letter opener stand', 'letter opener stainless steel', 'scissors', 'hole punch', 'three hole punch', 'scissors heavy duty', 'three hole punch heavy duty',

// Planners, Calendars & Notebooks (15 items)
'time tracking notebook', 'wall calendar', 'wall calendar dry erase', 'calendar hanging clips', 'project management notebook', 'planner stickers', 'planner tabs', 'planner refill inserts', 'goal planner journal', 'address book',
'business card holder', 'business card display stand', 'name badge holder', 'ID badge lanyard', 'ID badge reel',

// Whiteboards & Bulletin Boards (14 items)
'bulletin board', 'whiteboard', 'whiteboard markers', 'whiteboard cleaner spray', 'whiteboard magnetic eraser', 'bulletin board frame', 'whiteboard marker holder', 'whiteboard eraser holder', 'whiteboard magnetic tray', 'whiteboard border tape',
'dry erase eraser', 'permanent markers', 'permanent marker pack', 'dry erase board small',

// Cork Boards & Magnetic Boards (8 items)
'push pins', 'push pin container', 'push pin box', 'cork board push pin set', 'magnetic cork board', 'magnetic clips', 'magnetic name plate', 'magnetic ruler',

// Mail & Postage (4 items)
'envelope moistener bottle', 'mail opening tray', 'bubble mailers', 'bubble mailer pack',

// Calculators & Office Machines (1 items)
'calculator',

// Presentation Equipment (5 items)
'portable projector', 'presentation clicker', 'laser pointer', 'presentation remote batteries', 'projector screen',

// Lamps & Lighting (12 items)
'desk lamp', 'table lamp', 'desk lamp dimmer switch', 'table lamp finial', 'desk lamp smart bulb', 'table lamp cord cover', 'floor lamp', 'light bulbs', 'floor lamp dimmer cord', 'floor lamp base weight',
'floor lamp dimmer switch', 'blue light blocking glasses',

// Area Rugs & Floor Mats (2 items)
'rug stain remover pen', 'area rug',

// Window Blinds & Curtains (5 items)
'window blind cleaner tool', 'window blinds', 'window curtains', 'curtain rod', 'curtain tieback hooks',

// Decor & Frames (4 items)
'throw blanket', 'wall art', 'wall clock', 'umbrella stand',

// Coats, Blankets & Comfort (2 items)
'coat rack', 'coat rack floor standing',

// Cleaning Supplies (15 items)
'cleaning supply shelf', 'cleaning supply organizer cabinet', 'cleaning caddy', 'all purpose cleaner', 'glass cleaner', 'cleaning supply basket', 'all purpose cleaner refill', 'glass cleaner refill', 'all purpose cleaner gallon', 'glass cleaner spray bottle',
'microfiber cleaning mitt', 'all purpose cleaner spray bottle', 'glass cleaner gallon', 'microfiber cloths', 'disinfecting wipes',

// Trash & Recycling (8 items)
'trash can', 'trash bags', 'recycling bin', 'trash liner roll', 'recycling bin liner roll', 'trash can step lid', 'recycling sorter bins', 'ink cartridge recycling box',

// Safety & Security (6 items)
'fire extinguisher bracket', 'fire extinguisher cabinet small', 'fire extinguisher', 'smoke detector', 'carbon monoxide detector', 'first aid kit',

// Safes & Lockboxes (3 items)
'document safe fire resistant', 'document lock box', 'safe fireproof document box',

// Tools & Hardware (10 items)
'measuring tape retractable', 'hammer storage clip', 'measuring tape storage hook', 'tool kit small', 'hammer', 'screwdriver set', 'measuring tape', 'picture hanging kit', 'tool organizer tray', 'screw assortment kit',

// Soundproofing & Acoustics (3 items)
'portable room divider panel', 'soundproof desk booth', 'sound dampening foam panels'],

// TOTAL: 710 items],

        Loft: [ // Sofas & Seating (101 items)
'accent bench', 'accent bench cushion', 'accent bench leg pads', 'accent bench storage bin', 'accent chair arm covers', 'accent chair armrest pads', 'accent chair cushion', 'accent chair leg felt pads', 'accent chair leg protectors', 'accent chair seat protector',
'accent chair slipcover', 'barrel chair', 'bean bag inner liner', 'bean bag refill beads', 'bean bag refill pack', 'chaise lounge', 'chaise lounge cushion', 'chaise lounge slipcover', 'club chair', 'club chair ottoman',
'floor cushion cover', 'floor cushion insert', 'floor cushion storage bag', 'floor pouf', 'floor rocker chair', 'floor seating mat', 'floor seating pillows', 'fold out sofa bed', 'folding chairs', 'folding floor chair',
'glider chair', 'loveseat armrest covers', 'loveseat armrest tray', 'loveseat cover', 'loveseat cushion cover set', 'loveseat leg pads', 'massage chair', 'massage chair cover', 'massage chair remote', 'meditation cushion',
'meditation cushion cover', 'ottoman caster wheels', 'ottoman foam insert', 'papasan chair', 'recliner', 'recliner USB charger module', 'recliner battery pack',
 
'recliner hand control', 'recliner headrest cover', 'recliner power supply', 'recliner side pocket organizer', 'rocking chair', 'sectional connector brackets', 'sectional cushion covers', 'sectional cushions', 'sofa anti slip grippers', 'sofa armrest cover',
'sofa armrest tray', 'sofa bed mattress cover', 'sofa bed mattress pad', 'sofa bed mechanism kit', 'sofa bed sheet set', 'sofa caster cups', 'sofa chaise attachment', 'sofa cushion cover set', 'sofa cushion inserts', 'sofa frame brackets',
'sofa frame repair braces', 'sofa furniture risers', 'sofa headrest pillow', 'sofa leg levelers', 'sofa side table', 'sofa slipcover', 'sofa spring repair kit', 'stool seat cover', 'stools', 'storage ottoman tray top',
'swivel chair', 'window seat cushion cover', 'window seat drawer organizer', 'window seat storage bin', 'wingback chair',
 
// Seating & Furniture Accessories (17 items)
'bed sheet fasteners', 'blanket clips', 'blanket hamper', 'blanket hooks', 'blanket ladder', 'console cable grommet', 'down pillow insert', 'folding chair leg caps', 'lumbar pillow insert', 'office chair armrest pads',
'pillow protector set', 'pillow protectors', 'pillowcase set extra', 'sheet suspenders', 'throw blanket clips', 'throw pillow covers', 'throw pillow insert spare',
 
// Tables & Shelving Furniture (63 items)
'C shaped side table', 'TV stand cable pass through', 'TV stand caster wheels', 'TV stand door bumpers', 'TV stand ventilation fan', 'TV tray table set', 'bar cart', 'bar cart accessory hooks', 'bar cart anti slip mat', 'bar cart corner guards',
'bar cart cover', 'bar cart stemware hanger', 'bar cart tool caddy', 'bedside table', 'bedside table coaster', 'book display shelf', 
'broom storage cabinet', 'coffee table coasters set', 'coffee table glass top', 'coffee table leg levelers', 'coffee table leg pads', 'coffee table runner', 'coffee table scratch repair kit', 'coffee table storage baskets', 'console table cable management basket',
'console table shelf riser', 'craft storage cabinet', 'cube storage shelf', 'display shelf', 'display shelf acrylic stands', 'display shelf risers', 'drink table', 'end table corner protectors',
'floating shelf LED strip', 'folding snack table', 'folding table', 'folding table carry bag', 'folding table leg caps', 
 
'martini table', 'media console door hinges', 'media console shelves', 'nesting table set', 'nesting tables', 'shelf edge guard', 'side table cable grommet cover', 'side table decor tray', 'side table drawer organizer', 'side table shelf liner',
'storage cube shelf', 'tray table', 'floating shelves',
 
// Furniture Hardware & Storage Accessories (11 items)
'decorative shelf anchors', 'decorative shelf brackets', 'decorative shelf riser', 'media cabinet anti tip strap', 'media cabinet door catch', 'media cabinet door magnet', 'media cabinet hinge set', 'media cabinet leveling feet', 'media cabinet shelf pins', 'media cabinet shelf supports',
'television riser shelf',
 
// TV & Home Theater (60 items)
'AV receiver', 'AV receiver remote', 'Bluetooth receiver', 'CD player', 'HDMI audio extractor', 'HDMI cable extender', 'HDMI splitter', 'HDMI switch', 'RCA cable set', 'TV antenna',
'USB C to HDMI adapter', 'audio amplifier', 'blu ray cleaning disc', 'blu ray disc storage case', 'blu ray remote cover', 'blu ray storage case', 'cassette player', 'cassette tapes', 'coax splitter', 'disc resurfacing kit',
'disc sleeves', 'media storage binder', 'optical audio cable', 'phono preamp', 'projector', 'projector HDMI cable', 'projector carry case', 'projector keystone remote', 'projector lens cap', 'projector remote',
'projector screen', 'projector stand', 'remote control charging station', 'remote control holder', 'remote control label stickers', 'remote control silicone cover', 'remote controls', 'remote organizer tray', 'smart television', 'sound bar HDMI ARC cable',
'sound bar cable kit', 'sound bar power cord', 'speaker wire', 'speaker wire banana plugs', 'speaker wire management clips', 'speaker wire spool', 'streaming device Ethernet adapter', 'streaming device power adapter', 'streaming stick', 'streaming stick extender',
 
'subwoofer isolation pad', 'subwoofer power cord', 'surround speakers', 'tv mounting screws', 'tv screen cleaner kit', 'tv surge protector', 'cd storage sleeves', 'dvd media cabinet', 'dvd organizer cabinet', 'dvd storage shelf',
 
// Gaming & Games (55 items)
'DJ controller', 'LED strip light controller', 'VR headset cable management kit', 'VR headset carry case', 'VR headset charging dock', 'VR headset face cushion', 'VR headset lens cover', 'backgammon set', 'board game card sleeves', 'board game organizer box',
'board game shelf unit', 'board game storage drawers', 'card deck case', 'card deck organizer case', 'checkers set', 'chess set', 'console controller battery pack', 'console dust cover', 'controller battery pack', 'controller charging cable',
'controller silicone case', 'controller thumb grips', 'controller trigger grips', 'dice set', 'dice tray', 'domino set', 'game console travel case', 'game console vertical stand', 'game controller charging dock', 'game controller wall mount',
'game controllers', 'game disc storage binder', 'game shelf labels', 'game timer', 'gaming chair floor mat', 'gaming chair footrest', 'gaming chair headrest pillow', 'gaming headset case', 'gaming headset charging dock', 'gaming headset stand',
'gaming keyboard', 'gaming keyboard wrist rest', 'gaming mouse', 'gaming router', 'poker chip set', 'puzzle frame', 'puzzle glue', 'puzzle organizer trays', 'puzzle saver sheets', 'puzzle sorting trays',
 
'puzzle storage mat', 'trading card binder', 'trading card sleeves', 'vr controller stand', 'vr headset storage stand',
 
// Networking & Smart Home (18 items)
'UPS battery backup', 'WiFi range extender', 'ethernet cable spool', 'ethernet coupler', 'modem coax cable', 'modem surge protector', 'network cable organizer', 'network switch', 'router ethernet cable', 'smart LED light strip',
'smart dimmer plug', 'smart display', 'smart light bulb', 'smart light switch', 'smart thermostat', 'smart thermostat sensor', 'wifi booster stand', 'wifi extender wall plate',
 
// Power, Charging & Lighting Accessories (39 items)
'LED strip light corner connectors', 'LED strip light diffuser channel', 'LED strip lights', 'USB C extension cable', 'USB C hub', 'USB wall charger multi port', 'bedside lamp smart bulb', 'charging cable sleeves', 'charging hub multi device', 'extension cord floor cover',
'extension cord storage bag', 'extension cord wall clips', 'fairy light battery pack', 'fairy lights', 'lamp cord floor cover', 'lamp cord grommet', 'lamp cord protector sleeve', 'lamp shade clip adapter', 'lamp shade diffuser', 'lamp shade spider adapter',
'lamp smart bulb', 'light bulb changer pole', 'light bulb storage organizer', 'phone charging cable spare', 'phone charging dock', 'phone stand dock', 'portable power bank', 'power bank charging dock', 'power strip cord wrap', 'power strip extension',
'power strip mounting brackets', 'power strip with USB', 'string lights indoor', 'surge protector backup battery', 'surge protector outlet cover', 'surge protector power conditioner', 'tablet charging cable spare', 'wireless charging pad', 'wireless charging stand',
 
// Lamps, Fans & Climate Appliances (16 items)
'ceiling fan blade screws', 'ceiling fan light kit', 'desk lamp', 'desk lamp bulb spare', 'desk lamp dimmer cord', 'fan heater', 'fan heater remote', 'fan heater safety grill', 'fan heater thermostat knob', 'fan pull chain',
'portable AC filter',
 
// Rugs & Floor (6 items)
'area rug corner protectors', 'area rug storage roll', 'floor runner', 'rug anti slip tape', 'rug corner grippers', 'rug vacuum attachment',
 
// Wall Decor & Accents (48 items)
'aromatherapy spray', 'art print', 'canvas art storage bin', 'decorative garland', 'decorative lantern', 'decorative sculpture', 'decorative tray acrylic', 'decorative tray marble', 'decorative tray rattan', 'diffuser refill oils',
'flameless candles', 'floor lantern', 'frame bumpers', 'frame corner protectors', 'frame hanging wire kit', 'frame mat board', 'full length mirror', 'full length mirror stand',
'incense holder', 'incense sticks', 'macrame wall hanging', 'picture frame backing', 'picture frame cleaning kit', 'picture frame corner protectors', 'picture light', 'picture light remote', 'remote candles',
'room spray bottle', 'tabletop sculpture', 'tapestry hanger', 'vase set', 'wall art adhesive strips', 'wall art level tool', 'wall clock battery', 'wall clock mounting hook', 'wall clock spare hands', 'wall decals',
'wall decals remover', 'wall hook decorative', 'wall repair patch kit', 'wall shelves decorative set', 'wall tapestry', 'wick trimmer', 'window shade repair kit', 'loft railing decor lights',
 
// Bedding, Pillows & Sleep (57 items)
'air mattress', 'air mattress electric pump', 'air mattress patch kit', 'alarm clock', 'alarm clock backup battery', 'alarm clock battery pack', 'alarm clock decorative',
'bed wedge pillow cover', 'bedside lamp', 'bedspread', 'blanket basket', 'blanket set', 'blanket storage trunk', 'blanket storage vacuum bag', 'comforter', 'daybed',
'daybed bedding set', 'daybed frame bolts', 'daybed frame support', 'daybed mattress', 'daybed mattress protector', 'daybed pillow shams', 'daybed storage drawers', 'daybed throw pillows', 'duvet cover', 'duvet insert',
'ear plugs', 'extra blanket set', 'extra pillow set spare', 'extra sheet set', 'mattress bag', 'mattress encasement', 'mattress lifting strap', 'mattress protector', 'mattress strap handles', 'mattress topper',
'mattress vacuum bag', 'mattress wedge pillow', 'pillow set', 'quilt set', 'sheet set', 'sleep mask', 'throw blanket spare', 'trundle bed', 'trundle bed linens', 'trundle bed wheels',
 
'trundle mattress', 'trundle mattress protector', 'weighted blanket', 'white noise machine', 'air pump', 'air pump adapter set', 'air pump hose',
 
// Home Office (100 items)
'ID badge lanyard', 'accordion file organizer', 'air purifier air quality monitor', 'barcode scanner', 'bulletin board', 'bulletin board cork refill', 'bulletin board eraser', 'bulletin board pins', 'business card binder', 'business card holder',
'desk', 'desk cable grommet', 'desk cable organizer tray', 'desk chair', 'desk clamp cup holder', 'desk clamp headphone hook', 'desk cord grommet insert', 'desk drawer dividers', 'desk drawer felt liner', 'desk drawer lock',
'desk drawer lock cylinder', 'desk foot hammock', 'desk hutch organizer', 'desk mat leather', 'desk organizer', 'desk speakers', 'desktop organizer tray', 'easel tabletop', 'file label maker', 'filing cabinet',
'filing cabinet anti tip kit', 'filing cabinet divider rails', 'filing cabinet key spare', 'heart rate monitor strap', 'humidifier cleaning tablets', 'keyboard bench', 'keyboard cleaning brush', 'keyboard music rest', 'keyboard piano', 'keyboard power adapter',
'keyboard stand', 'keyboard stand adjustable', 'keyboard sustain pedal', 'label printer', 'laptop anti theft cable', 'laptop privacy filter', 'laptop privacy screen', 'laptop sleeve case', 'monitor VESA mount kit', 'monitor desk clamp arm dual',
 
'monitor light bar', 'monitor screen hood', 'name badge holder', 'office chair floor protectors', 'office chair mat', 'paper shredder', 'paper shredder oil', 'paper shredder oil bottle', 'portable document scanner', 'printer',
'printer cable', 'printer dust cover', 'printer ink cartridges', 'printer ink refill kit', 'printer paper', 'printer paper catch tray', 
'printer toner cartridge', 'receipt organizer', 'scanner', 'scanner cable', 'scanner cable spare', 'scanner cleaning kit', 'scanner stand', 'shipping scale', 'studio headphones',
'tablet charging dock', 'tablet keyboard case', 'tablet screen protector', 'tablet stand', 'tablet stand adjustable', 'tax document organizer', 'thermal label roll', 'under desk CPU mount', 'under desk cable tray basket', 'whiteboard',
'whiteboard cleaner spray', 'whiteboard eraser set', 'whiteboard markers', 'wireless keyboard', 'wireless keyboard cover', 'wireless keyboard wrist rest', 'wireless mouse pad', 'writing pad blotter', 'mouse pad large', 'mouse wrist pad',
 
 
// Home Office & Storage Accessories (68 items)
'USB flash drive case', 'Velcro cable ties', 'art supply drawer organizer', 'book collection', 'book display stand', 'book storage bin', 'book storage box', 'book storage crate', 'book storage shelf', 'bookend set',
'cable concealment channel', 'cable label tags', 'cable management sleeves', 'cable organizer box', 'cable raceway kit', 'cable wrap', 'closet drawer unit', 'closet hanging organizer', 'closet organizer', 'closet rod brackets',
'closet rod cap', 'closet rod extender', 'closet rod tension', 'closet shelf riser', 'closet storage cubes', 'coat hanger set', 
'drawer label set', 'drawer liner roll', 'external SSD drive',
'file folder expanding', 'file folder organizer box', 'file folders', 'filing storage crate', 'hard drive anti static bags', 'hard drive docking station', 'instrument cable organizer', 'instrument cable wrap', 'magazine storage box', 'plastic storage drawers',
 
'rolling cart', 'rolling cart hooks', 'rolling cart organizer tray', 'rolling cart pegboard', 'rolling file cart', 'shelf storage baskets', 'storage bin divider inserts', 'storage bin dolly', 'storage bin handle grips', 'storage bin label set',
'storage bin lids', 'storage cube inserts', 'umbrella rack liner', 'umbrella stand decorative', 'zip tie pack', 'file storage crate', 'filing crate lid', 'filing crate organizer',
 
// Clothing, Laundry & Garment Care (51 items)
'belt hanger', 'closet shelf basket', 'clothing rack', 'clothing rack caster locks', 'clothing rack cover', 'clothing rack end caps', 'clothing rack extension bar', 'clothing rack wheels', 'clothing steamer', 'fabric shaver',
'folding drying rack', 'garment bag', 'garment bag zipper repair kit', 'garment rack', 'garment rack cover', 'garment rack hanger set', 'garment rack hanging hooks', 'garment rack shelf insert', 'hamper deodorizer', 'hanger set',
'iron', 'iron cleaner', 'iron cleaning stick', 'iron rest pad', 'iron storage rack', 'ironing board', 'ironing board cover', 'ironing board hanger', 'ironing board padding', 'laundry bag',
'laundry basket', 'laundry basket lid', 'laundry basket stacker', 'laundry basket wheels', 'laundry drying rack', 'laundry hamper', 'laundry hamper cover', 'laundry hamper divider insert', 'laundry hamper liner', 'laundry sorter',
'pants hanger', 'sewing kit', 'sewing machine', 'sewing machine foot set', 'sewing machine small', 'sewing thread kit', 'sewing thread organizer', 'shoe organizer hanging', 'steamer water cup', 'suit hanger',
 
'velvet hangers',
 
// Music & Audio (70 items)
'audio interface', 'drum practice pad', 'drum sticks', 'guitar', 'guitar cable', 'guitar capo', 'guitar case hard', 'guitar case hard shell', 'guitar case soft', 'guitar picks',
'guitar stand', 'guitar strap', 'guitar strap locks', 'guitar strings pack', 'guitar tuner', 'guitar wall hanger', 'harmonica', 'headset mic windscreen', 'instrument cable repair kit', 'instrument cables',
'instrument case', 'instrument cleaning cloth', 'instrument tuner', 'metronome', 'mic stand boom attachment', 'microphone', 'microphone boom arm', 'microphone cable', 
'microphone shock mount', 'microphone stand', 'microphone stand boom arm', 'microphone storage case', 'mixer board', 'music sheet binder', 'music sheet storage binder', 'music stand',
'music stand light', 'piano bench cushion', 'record cleaning kit', 'record display frame', 'record divider tabs', 'record storage crate', 'record storage shelf', 'speaker cable', 'speaker cable banana plugs', 'speaker grille cloth',
 
'speaker isolation pads', 'speaker isolation stands', 'speaker stands floor', 'speaker system', 'turntable dust cover', 'turntable needle', 'turntable slipmat', 'ukulele', 'ukulele stand', 'vinyl cleaning brush',
'vinyl player', 'vinyl record cleaner', 'vinyl record sleeves', 'vinyl storage bin', 'vinyl storage shelf', 'violin', 'violin case', 'headphone cable extension', 'headphone splitter', 'speaker stand floor',
 
// Art, Crafts & Hobbies (71 items)
'acrylic paint set', 'art supplies box', 'art supply caddy', 'art supply organizer case', 'bobbin case', 'brush cleaning soap', 'canvas carrying case', 'canvas panels', 'canvas roll', 'canvas storage bin',
'charcoal pencils', 'colored pencils', 'craft cutting mat', 'craft organizer bins', 'craft organizer drawer', 'craft organizer drawer unit', 'craft storage box', 'craft table', 'crochet hooks set', 'drawing board',
'easel', 'easel clamp', 'easel light', 'easel storage hook', 'easel storage rack', 'eraser kneaded', 'fabric storage bin', 'glue gun', 'glue gun sticks', 'hot glue gun stand',
'knitting needles set', 'markers art', 'oil paint set', 'paint brush holder', 'paint brush set', 'paint palette', 'paint palette tray', 'paint pens', 'paint storage rack', 'paint supplies',
'paper cutter', 'paper trimmer blade', 'pastel set', 'pattern envelopes', 'pencil case', 'portfolio case', 'rotary cutter', 'scissors craft', 'scrapbook album', 'scrapbook paper',
 
'scrapbook stickers', 'sharpener handheld', 'sketch pad drawer', 'sketch pad organizer', 'sketch pad portfolio', 'sketch pads', 'sketching pencils set', 'stitch markers', 'stretched canvas', 'tape runner',
'thread rack', 'touch up paint pen', 'washi tape set', 'watercolor paint set', 'watercolor paper pad', 'yarn basket', 'yarn spool organizer', 'yarn storage cube', 'yarn storage tote', 'yarn winder',
'palette knives',
 
// Fitness & Exercise (61 items)
'adjustable dumbbell set', 'ankle weights', 'balance board', 'bike floor stabilizer mat', 'dumbbell collars', 'dumbbell floor mat', 'dumbbell rack', 'dumbbell rack stand', 'dumbbell rack vertical', 'dumbbells',
'exercise ball', 'exercise ball pump', 'exercise equipment storage rack', 'exercise mat', 'exercise mat rack', 'exercise mat storage strap', 'fitness tracker', 'foam roller', 'foam roller rack', 'foam roller storage bin',
'foam roller storage rack', 'foam roller textured', 'jump rope', 'jump rope mat', 'kettlebell', 'kettlebell floor pad', 'kettlebell handle grips', 'kettlebell rack', 'kettlebell storage tray', 'massage gun',
'massage gun heads', 'pilates ring', 'pull up bar doorway', 'resistance band door anchor', 'resistance band handles', 'resistance band hanger', 'resistance band organizer', 'resistance band set', 'resistance bands', 'stationary bike',
'stationary bike cover', 'stationary bike mat', 'stationary bike mat protector', 'stationary bike pedal straps', 'stationary bike seat cover', 'stretch strap', 'treadmill', 'treadmill cover', 'treadmill lubricant', 'treadmill mat',
 
'treadmill safety key', 'treadmill safety key spare', 'weight bench', 'weight bench pad', 'wrist weights', 'yoga block', 'yoga mat bag', 'yoga mat cleaner', 'yoga mat strap', 'yoga strap',
'yoga wheel',
 
// Climate & Air Quality (14 items)
'air purifier carbon filter', 'air purifier pre filter', 'air purifier spare filter', 'dehumidifier drain hose extension', 'dehumidifier drain pump', 'dehumidifier hose', 'dehumidifier water bucket', 'humidifier cleaning brush', 'humidifier spare filter', 'humidifier water filter',
'portable heater safety tip switch', 'safe dehumidifier rod', 'thermostat', 'thermostat battery',
 
// Safety & Security (24 items)
'battery powered lantern', 'camera memory card', 'camera power extension cable', 'carbon monoxide backup unit', 'fire blanket', 'fire escape ladder', 'fire extinguisher inspection tag',
'fire extinguisher wall cabinet', 'first aid cabinet', 'first aid organizer tray', 'first aid refill pack', 'first aid supplies organizer', 'floor safe', 'motion sensor batteries', 'safe lock box', 'security camera base station', 'security camera cable',
'security camera privacy cover', 'smoke detector backup unit', 'smoke detector battery', 'flashlight batteries',
 
// Tools & Hardware (35 items)
'adhesive hook heavy duty', 'adhesive putty', 'adhesive strip pack', 'adhesive strip refills', 'adjustable wrench', 'cordless drill', 'drill bit set', 'folding step ladder', 'hammer rubber grip', 'hammer storage hook',
'hex key set', 'level tool', 'measuring tape holder', 'measuring tape retractable', 'nail assortment kit', 'picture hanging hooks', 'picture hanging hooks assorted', 'picture hanging wire roll', 'pliers set', 'precision screwdriver set',
'putty knife', 'sandpaper variety pack', 'screw assortment kit', 'screwdriver bit set', 'screwdriver magnetic holder', 'spackle kit', 'step ladder', 'tape measure spare', 'toggle bolts', 'tool box organizer tray',
'tool kit storage box', 'toolbox', 'toolbox organizer', 'utility knife', 'wall hook heavy duty',
 
// Cleaning & Vacuums (52 items)
'all purpose cleaner gallon', 'all purpose cleaner refill', 
'floor cleaning solution',
'glass cleaner microfiber cloth', 'glass cleaner refill', 'glass cleaner spray bottle', 'lint free cloths', 'microfiber cloth bulk pack', 'microfiber cloth pack', 'microfiber dust mitt', 'microfiber mop', 'mop', 'mop bucket liner',
'mop handle clip', 'mop storage hook', 'odor eliminator spray', 'robot vacuum', 'robot vacuum brush set', 'robot vacuum dock', 'robot vacuum filters', 'spray bottle set', 'spray mop', 'spray mop pads',
'squeegee', 'stain remover spray', 'vacuum attachments', 'vacuum crevice tool', 'vacuum dusting brush', 'vacuum extension wand', 'vacuum storage bags', 'vacuum storage hook', 'vacuum upholstery tool', 'wood floor cleaner',
 
'disposable wipes refill', 'funnel set',
 
// Trash, Recycling & Paper Products (11 items)
'paper towel refill pack', 'paper towel storage bin', 'recycling bin divider insert', 'recycling bin liner', 'recycling sorter bins', 'recycling sorting labels', 'trash bag bulk roll', 'trash can deodorizer discs', 'trash can step lid', 'trash compactor bags',
'trash odor absorber',
 
// Seasonal & Long-Term Storage (35 items)
'photo album'
// TOTAL: 1067 items        
],

        Basement: [

'all purpose cleaner', 'area rug', 'battery organizer case',
'broom', 'carbon monoxide detector', 'cleaning caddy',
'coat rack', 'coffee table', 'dehumidifier',
'dustpan', 'extension cord reel', 'fire extinguisher',
'first aid kit', 'gaming console', 'hammer',
'humidifier', 'humidifier filter', 'lantern',
'light bulbs', 'loveseat', 'measuring tape',
'mop bucket', 'photo storage box', 'picture hanging kit',
'puzzle storage box', 'screwdriver set', 'smoke detector',
'sofa', 'space heater', 'television',

// Water Heater & Hot Water System (12 items)
'water heater T&P relief valve', 'water heater anode rod', 'water heater burner assembly', 'water heater control valve', 'water heater expansion tank', 'water heater heating element', 'water heater insulation blanket', 'water heater pressure relief valve', 'water heater recirculation pump', 'water heater shutoff valve',
'water heater stand', 'water heater thermostat',

// Sump Pump System (9 items)
'sump pump alarm', 'sump pump alarm sensor', 'sump pump alarm siren', 'sump pump backflow preventer', 'sump pump backup pump unit', 'sump pump battery backup', 'sump pump battery box', 'sump pump battery charger unit', 'sump pump check valve',

// Water Softener & Filtration (5 items)
'UV water purifier', 'filter housing bypass valve', 'water filtration sediment prefilter', 'water softener salt bags', 'whole house filter housing',

// Plumbing (25 items)
'P trap kit', 'backwater valve', 'basin wrench', 'cleanout wrench', 'drain snake', 'ejector pump alarm', 'floor drain snake', 'floor drain strainer basket', 'floor drain trap primer', 'garden hose',
'hand auger', 'hose reel', 'pipe cutter', 'pipe freeze kit', 'pipe wrench', 'plumbing torch', 'sewage ejector pump', 'sink faucet handle set', 'sink faucet spray head', 'spray nozzle',
'toilet auger', 'utility hose', 'utility sink cabinet', 'utility sink splash guard', 'utility sink storage shelf',

// Electrical (27 items)
'AFCI breaker', 'GFCI breaker', 'breaker finder tool', 'circuit breaker lockout kit', 'electrical cord reel', 'electrical panel breaker labels', 'electrical panel cover', 'electrical panel directory labels', 'electrical panel surge protector', 'electrical tape',
'electrical tape roll', 'generator inlet box', 'generator interlock kit', 'generator transfer switch', 'junction box', 'linesman pliers', 'multimeter', 'needle nose pliers', 'non contact voltage detector', 'service disconnect switch',
'subpanel', 'surge protection device whole house', 'tandem breaker', 'transfer switch cover', 'voltage tester', 'wire cutters', 'wire strippers',

// Generator (11 items)
'generator', 'generator air filter', 'generator battery', 'generator battery tender', 'generator cover', 'generator extension cord', 'generator fuel can', 'generator fuel stabilizer', 'generator oil', 'generator oil filter',
'generator spark plug',

// Radon System (2 items)
'radon system gauge', 'radon test kit',

// Lighting & Electrical Accessories (29 items)
'CO alarm plug in', 'LED shop lights', 'backup battery charger', 'backup battery pack', 'backup power inverter', 'batteries', 'battery backup UPS', 'battery bulk pack', 'battery lantern', 'battery storage case',
'carbon monoxide alarm backup battery', 'extension cord floor protector', 'extension cord heavy duty', 'extension cords', 'flashlight charger', 'flashlight rechargeable', 'flashlights', 'headlamp', 'lantern battery pack', 'lantern rechargeable',
'portable work light', 'power strip surge guard', 'power strip surge outlet', 'power strips', 'shop light motion sensor', 'shop light pull chain switch', 'smoke detector backup battery', 'solar charger', 'work light tripod',

// Safety & Environmental Monitoring (17 items)
'air quality monitor', 'carbon monoxide alarm battery pack', 'carbon monoxide detector spare unit', 'digital hygrometer', 'emergency exit sign', 'emergency siren', 'emergency strobe light', 'fire blanket', 'fire extinguisher cabinet', 'fire extinguisher inspection tag',
'freeze alarm sensor', 'humidity gauge', 'smoke alarm interconnect module', 'smoke detector spare unit', 'temperature alarm sensor', 'water leak alarm sensor', 'water leak detector',

// Shelving & Storage Cabinets (7 items)
'basement shelving expansion kit', 'cabinet key set', 'locking storage cabinet', 'metal storage shelves', 'plastic storage shelves', 'storage cabinets', 'wire shelving',

// Workbench & Workshop Setup (9 items)
'anti fatigue mat', 'bench grinder', 'creeper mechanic', 'hydraulic jack', 'jack stands', 'shop press', 'workbench', 'workbench stool', 'workbench vise',

// Pegboard & Tool Organization (15 items)
'hardware organizer cabinet', 'magnetic parts tray', 'magnetic pickup tool', 'magnetic tool strip', 'nail storage compartment box', 'parts organizer drawers', 'rolling tool cart', 'rolling tool cart drawer liner', 'screw storage drawer unit', 'small parts bins',
'tool chest', 'tool chest drawer organizer', 'tool chest drawer slides', 'tool organizer cabinet', 'tool storage cabinet',

// Hand Tools & Power Tools (34 items)
'C clamps', 'bar clamps', 'box cutter', 'circular saw', 'cordless drill battery', 'drill', 'drill case', 'heat gun', 'impact driver', 'impact sockets',
'jigsaw', 'ladder', 'ladder leveler', 'level', 'miter saw', 'nail gun', 'nails assortment', 'pliers', 'ratchet set', 'router tool',
'sander orbital', 'sandpaper pack', 'sawzall reciprocating saw', 'screws assortment', 'shop clamps', 'socket set', 'spring clamps', 'staple gun', 'step ladder', 'stud finder',
'table saw', 'tool kit', 'torque wrench', 'wrench set',

// Paint, Drywall & Finishing (16 items)
'basement waterproofing paint', 'caulk gun', 'concrete patch', 'concrete sealer', 'crack repair epoxy', 'drop cloths', 'drywall compound', 'drywall patch kit', 'hydraulic cement', 'paint brushes',
'paint can storage rack', 'paint cans', 'paint rollers', 'primer gallon', 'spackle', 'wood filler',

// Storage Bins & Boxes (28 items)
'art supply bin', 'bankers boxes', 'board game storage box', 'bubble wrap roll', 'bungee cords', 'clear storage bins', 'craft storage box', 'document file crate', 'document safe pouch', 'document storage tote',
'file storage boxes', 'food grade buckets', 'food storage bin airtight', 'food storage rotation rack', 'labeled storage bins', 'moving boxes', 'packing tape dispenser', 'plastic storage bins', 'ratchet straps', 'storage trunk',
'storage trunk lock', 'tie down straps', 'toy storage bins', 'vacuum sealer machine', 'vacuum storage bags', 'water storage containers', 'waterproof storage container', 'weatherproof storage tote',

// Photo, Document & Archive Storage (11 items)
'file folder organizer tray', 'file organizer expanding', 'filing cabinet', 'filing folders', 'memory card storage case', 'memory keepsake bin', 'memory keepsake chest', 'memory keepsake organizer', 'ornament storage box', 'photo storage album',
'photo storage archival box',

// Spare Furniture & Overflow (15 items)
'book collection', 'bookshelves', 'card table', 'computer desk', 'desk', 'desk lamp', 'folding chairs', 'folding tables', 'magazine storage', 'office chair',
'old textbooks', 'recliner', 'side tables', 'spare couch', 'spare dining chairs',

// Seasonal & Holiday Storage (14 items)
'artificial tree storage bag', 'gift bags', 'gift boxes', 'gift wrap storage container', 'holiday inflatables', 'holiday lights storage reel', 'holiday storage bins', 'seasonal decor bin', 'seasonal decor storage chest', 'tree stand',
'wrapping paper cutter spare', 'wrapping paper rolls', 'wreath storage bag', 'yard decor storage bin',

// Camping & Outdoor Gear (19 items)
'air mattress', 'air pump', 'ball pump', 'bike rack', 'camp cot', 'camping chairs', 'camping lantern LED', 'camping stove', 'camping stove carry case', 'coolers',
'grill cover', 'picnic basket', 'picnic blanket', 'portable grill', 'propane tank', 'sleeping bags', 'sleeping pad', 'sports equipment bin', 'tent',

// Sports & Recreation Equipment (6 items)
'helmet rack', 'kayak rack', 'ski rack', 'snowboard rack', 'sports bag', 'sports gear drying rack',

// Fitness Equipment (29 items)
'ab roller', 'balance board', 'barbell rack', 'barbell set', 'boxing gloves', 'dumbbells', 'elliptical machine', 'exercise ball', 'exercise bike', 'fitness mat rack',
'foam roller', 'jump rope', 'kettlebell rack', 'lifting straps', 'medicine ball', 'power rack', 'pull up bar', 'punching bag', 'punching bag stand', 'resistance bands',
'rowing machine', 'slam ball', 'speed bag', 'treadmill', 'weight belt', 'weight bench', 'weight lifting gloves', 'weight plates', 'yoga mats',

// Game Room & Entertainment (12 items)
'arcade machine', 'dart board', 'movie collection', 'movie storage cabinet', 'ping pong table', 'pool balls set', 'pool cue case', 'pool cues', 'pool table', 'projector',
'projector screen', 'sound system',

// Cleaning & Janitorial (7 items)
'bleach', 'disinfecting wipes', 'dust mop', 'mop', 'scrub brush', 'shop vacuum', 'shop vacuum filter',

// Trash & Recycling (3 items)
'compost bin', 'compost bin liners', 'trash can heavy duty',

// Laundry & Garment Care (5 items)
'fabric softener', 'iron', 'ironing board', 'laundry detergent', 'sewing machine',

// Ventilation & Climate Control (6 items)
'air mover fan', 'box fan', 'fan filter', 'floor fan', 'portable heater', 'ventilation fan',

// Moving & Transport (6 items)
'furniture dolly', 'hand truck', 'hand truck stair climbers', 'moving blankets', 'moving dolly', 'rolling cart',

// Emergency Preparedness (18 items)
'crank radio', 'emergency blankets', 'emergency flashlight', 'emergency kit', 'emergency preparedness kit', 'emergency radio', 'fire safe box', 'first aid refill kit large', 'first aid refill pack', 'first aid trauma kit',
'food storage bucket', 'jump starter pack', 'portable inverter', 'portable water filter', 'safe', 'safety glasses', 'water jug storage rack', 'water storage jug rack',

// Personal Protective Equipment (4 items)
'hearing protection earmuffs', 'knee pads', 'respirator mask', 'work gloves',

// TOTAL: 401 items
        ],

        Garage: [

'shop vacuum bags', 'shop vacuum hose', 'shop vacuum wand', 'puzzle storage box', 'mop bucket', 'humidifier filter',
'extension cord reel', 'photo storage box', 'all purpose cleaner', 'cleaning caddy', 'dustpan', 'broom', 'picture hanging kit', 'measuring tape', 'hammer',
'screwdriver set', 'first aid kit', 'fire extinguisher', 'carbon monoxide detector', 'smoke detector', 'space heater', 'dehumidifier', 'humidifier', 'coat rack', 'lantern', 'area rug', 'light bulbs',
'gaming console', 'television', 'coffee table', 'loveseat', 'sofa', 'light bulb storage case', 'trash can deodorizer', 'battery organizer case',

// HVAC & Ductwork (10 items)
'duct clamp set', 'duct tape', 'duct tape bulk roll', 'duct tape roll', 'duct tape storage bin', 'furnace filter', 'heavy duty duct tape', 'hvac duct sealant', 'hvac return vent', 'hvac vent covers',

// Water Heater & Hot Water System (17 items)
'anti scald valve', 'hot water expansion valve', 'mixing valve thermostatic', 'water heater T&P relief valve', 'water heater anode rod', 'water heater burner assembly', 'water heater control valve', 'water heater drain pan', 'water heater expansion tank', 'water heater heating element',
'water heater insulation blanket', 'water heater pressure relief valve', 'water heater recirculation pump', 'water heater shutoff valve', 'water heater stand', 'water heater thermostat', 'water heater vent pipe',

// Sump Pump System (13 items)
'sump pump alarm', 'sump pump alarm sensor', 'sump pump alarm siren', 'sump pump backflow preventer', 'sump pump backup pump unit', 'sump pump basin cover', 'sump pump battery backup', 'sump pump battery box', 'sump pump battery charger unit', 'sump pump check valve',
'sump pump discharge clamp', 'sump pump discharge hose', 'sump pump float switch',

// Water Softener & Filtration (11 items)
'UV water purifier', 'filter housing bypass valve', 'water filter housing wrench spare', 'water filtration housing wrench', 'water filtration sediment prefilter', 'water softener brine tank lid', 'water softener bypass valve', 'water softener iron remover', 'water softener resin cleaner', 'water softener salt bags',
'whole house filter housing',

// Plumbing (25 items)
'backwater valve', 'basin wrench', 'dehumidifier drain hose', 'drain snake', 'ejector pump alarm', 'ejector pump check valve', 'floor drain backflow valve', 'floor drain cover', 'floor drain snake', 'garden hose',
'hand auger', 'hose reel', 'pipe cutter', 'pipe freeze kit', 'pipe wrench', 'plumbing torch', 'sewage ejector pump', 'sink drain trap', 'sink faucet aerator', 'sink faucet handle set',
'sink faucet spray head', 'sink supply lines', 'spray nozzle', 'toilet auger', 'utility hose',

// Electrical (28 items)
'AFCI breaker', 'GFCI breaker', 'breaker finder tool', 'ceiling junction box cover', 'circuit breaker lockout kit', 'electrical cord reel', 'electrical panel breaker labels', 'electrical panel cover', 'electrical panel directory labels', 'electrical panel surge protector',
'electrical tape', 'electrical tape roll', 'generator inlet box', 'generator interlock kit', 'generator transfer switch', 'junction box', 'linesman pliers', 'multimeter', 'needle nose pliers', 'non contact voltage detector',
'service disconnect switch', 'subpanel', 'surge protection device whole house', 'tandem breaker', 'transfer switch cover', 'voltage tester', 'wire cutters', 'wire strippers',

// Generator (12 items)
'generator', 'generator air filter', 'generator battery', 'generator battery tender', 'generator cover', 'generator extension cord', 'generator fuel can', 'generator fuel stabilizer', 'generator oil', 'generator oil filter',
'generator spark plug', 'generator wheel kit',

// Radon System (3 items)
'radon system fan cover', 'radon system gauge', 'radon test kit',

// Lighting & Electrical Accessories (25 items)
'CO alarm plug in', 'LED shop lights', 'backup battery charger', 'backup battery pack', 'backup power inverter', 'battery backup UPS', 'carbon monoxide alarm backup battery', 'ceiling light bulb guard', 'ceiling light pull chain', 'extension cord floor protector',
'extension cord heavy duty', 'extension cords', 'headlamp', 'light fixture mounting bracket', 'portable work light', 'power strip surge guard', 'power strip surge outlet', 'power strip with USB', 'power strips', 'shop light motion sensor',
'shop light pull chain switch', 'smoke detector backup battery', 'solar charger', 'work light tripod', 'workbench power strip',

// Safety & Environmental Monitoring (17 items)
'air quality monitor', 'carbon monoxide alarm battery pack', 'carbon monoxide detector spare unit', 'digital hygrometer', 'emergency exit sign', 'emergency siren', 'emergency strobe light', 'fire blanket', 'fire extinguisher cabinet', 'fire extinguisher inspection tag',
'freeze alarm sensor', 'humidity gauge', 'smoke alarm interconnect module', 'smoke detector spare unit', 'temperature alarm sensor', 'water leak alarm sensor', 'water leak detector',

// Shelving & Storage Cabinets (14 items)
'basement shelving expansion kit', 'cabinet key set', 'locking cabinet key spare', 'locking storage cabinet', 'metal shelf liners', 'metal storage shelves', 'plastic shelf storage bins', 'plastic storage shelves', 'storage cabinet casters', 'storage cabinet lock set',
'storage cabinet magnetic latch', 'storage cabinet shelf risers', 'storage cabinets', 'wire shelving',

// Workbench & Workshop Setup (18 items)
'anti fatigue mat', 'bench grinder', 'creeper mechanic', 'hydraulic jack', 'jack stands', 'shop press', 'vise mounting bolts', 'vise swivel base', 'workbench', 'workbench butcher block top',
'workbench drawer liner', 'workbench drawer organizer', 'workbench drawer slides', 'workbench light bar', 'workbench overhead light', 'workbench power outlet strip', 'workbench stool', 'workbench vise',

// Pegboard & Tool Organization (30 items)
'hardware organizer cabinet', 'magnetic parts tray', 'magnetic pickup tool', 'magnetic tool strip', 'nail storage compartment box', 'parts organizer drawers', 'pegboard bin holders', 'pegboard drill holder', 'pegboard hooks', 'pegboard magnetic strip',
'pegboard pliers holder', 'pegboard screwdriver holder', 'pegboard shelf attachments', 'pegboard shelf brackets', 'pegboard storage bins', 'pegboard tool holders', 'pegboard wrench holders', 'pegboard wrench rack', 'rolling tool cart', 'rolling tool cart drawer liner',
'rolling tool cart shelf mat', 'screw storage drawer unit', 'screwdriver bit organizer', 'small parts bins', 'tool chest', 'tool chest drawer liners', 'tool chest drawer organizer', 'tool chest drawer slides', 'tool organizer cabinet', 'tool storage cabinet',

// Hand Tools & Power Tools (34 items)
'C clamps', 'bar clamps', 'box cutter', 'circular saw', 'cordless drill battery', 'drill', 'drill case', 'drill charger', 'heat gun', 'impact driver',
'impact sockets', 'jigsaw', 'ladder', 'ladder leveler', 'level', 'miter saw', 'nail gun', 'nails assortment', 'pliers', 'ratchet set',
'router tool', 'sander orbital', 'sandpaper pack', 'sawzall reciprocating saw', 'screws assortment', 'shop clamps', 'socket set', 'spring clamps', 'staple gun', 'step ladder',
'table saw', 'tool kit', 'torque wrench', 'wrench set',

// Paint, Drywall & Finishing (19 items)
'basement waterproofing paint', 'concrete patch', 'concrete sealer', 'corner bead', 'crack repair epoxy', 'drop cloths', 'drywall compound', 'drywall patch kit', 'hydraulic cement', 'joint knife set',
'mud pan', 'paint brushes', 'paint can storage rack', 'paint cans', 'paint rollers', 'spackle knife', 'spackle repair kit', 'spackle sanding block', 'spackle sanding sponge',

// Storage Bins & Boxes (29 items)
'bankers boxes', 'bubble wrap roll', 'bungee cords', 'clear storage bins', 'document file crate', 'document safe pouch', 'document storage tote', 'file storage boxes', 'file storage waterproof tote', 'food grade buckets',
'food storage bin airtight', 'hanging file box', 'labeled storage bins', 'moving boxes', 'packing tape dispenser', 'plastic storage bins', 'ratchet straps', 'storage trunk', 'storage trunk lock', 'tie down straps',
'vacuum storage bags', 'water storage containers', 'water storage jug rack', 'waterproof storage container', 'weatherproof storage tote', 'art supply bin', 'board game storage box', 'craft storage box', 'toy storage bins',

// Photo, Document & Archive Storage (11 items)
'file folder organizer tray', 'file organizer expanding', 'filing cabinet', 'filing folders', 'memory card storage case', 'memory keepsake bin', 'memory keepsake chest', 'memory keepsake organizer', 'ornament storage box', 'photo storage album',
'photo storage archival box',

// Spare Furniture & Overflow (16 items)
'book collection', 'bookshelves', 'card table', 'computer desk', 'desk', 'desk lamp', 'magazine storage', 'magazine storage bin', 'office chair', 'old textbooks',
'recliner', 'side tables', 'spare couch', 'spare dining chairs', 'folding chairs', 'folding tables',

// Seasonal & Holiday Storage (12 items)
'artificial tree storage bag', 'gift bags', 'gift boxes', 'gift wrap storage container', 'holiday inflatables', 'holiday lights storage reel', 'holiday storage bins', 'seasonal decor bin', 'tree stand', 'wrapping paper rolls',
'wreath storage bag', 'yard decor storage bin',

// Camping & Outdoor Gear (19 items)a
'air mattress', 'air pump', 'ball pump', 'camp cot', 'camp stove carry case', 'camping chairs', 'camping lantern LED', 'camping stove', 'cooler cover', 'cooler wheel kit',
'coolers', 'grill cover', 'picnic basket', 'picnic blanket', 'portable grill', 'propane tank', 'sleeping bags', 'sleeping pad', 'tent',

// Sports & Recreation Equipment (8 items)
'bike rack', 'helmet rack', 'kayak rack', 'ski rack', 'snowboard rack', 'sports bag', 'sports equipment bin', 'sports gear drying rack',

// Fitness Equipment (30 items)
'ab roller', 'balance board', 'barbell rack', 'barbell set', 'boxing gloves', 'dumbbell rack', 'dumbbells', 'elliptical machine', 'exercise ball', 'exercise bike',
'fitness mat rack', 'foam roller', 'jump rope', 'kettlebell rack', 'lifting straps', 'medicine ball', 'power rack', 'pull up bar', 'punching bag', 'punching bag stand',
'resistance bands', 'rowing machine', 'slam ball', 'speed bag', 'treadmill', 'weight belt', 'weight bench', 'weight lifting gloves', 'weight plates', 'yoga mats',

// Game Room & Entertainment (13 items)
'arcade machine', 'dart board', 'movie collection', 'movie storage cabinet', 'ping pong table', 'pool balls set', 'pool cue case', 'pool cues', 'pool table', 'projector',
'projector bulb spare', 'projector screen', 'sound system',

// Cleaning & Janitorial (17 items)
'bleach', 'disinfecting wipes', 'dust mop', 'fan filter', 'mop', 'scrub brush', 'shop vacuum', 'shop vacuum bags', 'shop vacuum brush tool', 'shop vacuum crevice tool',
'shop vacuum filter', 'shop vacuum floor nozzle', 'shop vacuum hose', 'shop vacuum wand', 'vacuum sealer machine', 'ventilation fan', 'wet dry vacuum squeegee',

// Trash & Recycling (4 items)
'compost bin', 'compost bin liners', 'recycling bin wheels', 'trash can heavy duty',

// Laundry & Garment Care (5 items)
'fabric softener', 'iron', 'ironing board', 'laundry detergent', 'sewing machine',

// Ventilation & Climate Control (4 items)
'air mover fan', 'box fan', 'floor fan', 'portable heater',

// Moving & Transport (7 items)
'furniture dolly', 'hand truck', 'hand truck stair climbers', 'moving blankets', 'moving dolly', 'plastic tote dolly', 'rolling cart',

// Emergency Preparedness (27 items)
'batteries', 'battery bulk pack', 'battery lantern', 'battery storage case', 'crank radio', 'emergency blankets', 'emergency flashlight', 'emergency kit', 'emergency preparedness kit', 'emergency radio',
'fire safe box', 'first aid refill kit large', 'first aid refill pack', 'first aid trauma kit', 'flashlight charger', 'flashlight rechargeable', 'flashlights', 'food storage bucket', 'food storage rotation rack', 'jump starter pack',
'lantern battery pack', 'lantern rechargeable', 'portable inverter', 'portable water filter', 'safe', 'safety glasses', 'water jug storage rack',

// Personal Protective Equipment (7 items)
'hearing protection earmuffs', 'knee pads', 'respirator mask', 'utility sink cabinet', 'utility sink splash guard', 'utility sink storage shelf', 'work gloves',

// TOTAL: 485 items
        ],

        Laundry: [
'all purpose cleaner', 'broom', 'dehumidifier',
'dustpan', 'extension cord', 'fire extinguisher',
'glass cleaner', 'handheld steamer', 'light bulbs',
'lint roller', 'mop bucket', 'power strip',
'wall clock', 'cleaning gloves', 'paper towels',

// Washing Machine (5 items)
'washer drip pan', 'washer pedestal storage bin', 

// Dryer & Venting (18 items)
'dryer', 'wool dryer balls', 'dryer ball refill set', 'dryer booster fan', 
'dryer rack insert', 'dryer sheets box', 'dryer stacking kit', 'dryer vent cleaning brush', 'dryer vent cleaning kit', 'dryer vent cleaning rods', 'dryer vent hose', 

// Laundry Sink & Plumbing (12 items)
'dehumidifier drain hose', 'drain snake handheld', 'laundry sink', 'laundry sink cabinet', 'laundry sink faucet', 'laundry sink soap dispenser', 'laundry sink splash guard', 'laundry sink sprayer', 'plunger flange style', 'utility sink floor mat',
'utility sink strainer', 'utility sink wall bracket',

// Cabinets, Shelving & Countertops (13 items)
'folding table', 'laundry cabinet glass doors', 'laundry cabinet handles', 'laundry cabinet sliding doors', 'laundry cabinets', 'laundry countertop', 'laundry shelf LED strip', 'laundry shelving unit', 'laundry under cabinet lighting strip', 'wire shelving rack',

// Hampers, Baskets & Laundry Bags (19 items)
'collapsible laundry basket', 'delicates bag', 'double laundry hamper', 'laundry basket plastic', 'laundry basket woven', 'laundry color separation bags', 'laundry hamper', 'laundry hamper deodorizer', 'laundry mesh divider baskets', 'laundry sorter rolling',
'laundry sorter three bin', 'laundry storage baskets', 'laundry storage crate stackable', 'laundry supply basket wicker', 'laundry wall mounted basket system', 'mesh laundry bags', 'rolling laundry bin with lid', 'rolling laundry cart', 'shoe wash bag',

// Hangers & Garment Storage (26 items)
'clip hangers', 'clothes hangers plastic', 'clothes hangers velvet', 'clothes hangers wood', 'clothing drying tree rack', 'clothing rolling rack', 'clothing storage cedar hangers', 'clothing storage garment rack', 'coat hangers', 'garment bag breathable cotton',
'garment bag large', 'garment bag small', 'garment bag zippered', 'garment hanger clips set', 'garment storage box', 'garment storage vacuum bags', 'hanger organizer rack', 'laundry rolling garment rack', 'over door hanger rack', 'padded hangers',
'pants hangers', 'shoe drying rack', 'shoe laundry wash bag', 'skirt hangers', 'sock mesh wash pouch', 'sock organizer drawer insert',

// Ironing & Steaming (10 items)
'fabric repair patches iron on', 'garment steamer', 'iron', 'iron cord wrap', 'iron storage caddy', 'ironing board', 'ironing board cover', 'ironing water spray bottle', 'spray bottle', 'steamer water cup',

// Sewing & Fabric Care (20 items)
'button repair kit', 'clothing moth deterrent cedar blocks', 'clothing repair kit deluxe', 'elastic band roll', 'fabric glue', 'fabric lint brush reusable', 'fabric repair tape', 'fabric shaver', 'hemming tape', 'lint brush handheld',
'lint roller refills', 'measuring tape sewing', 'needle set', 'patch repair kit', 'safety pins box', 'sewing kit', 'sewing machine', 'tailor chalk', 'thread organizer rack', 'thread spool set',

// Laundry Supplies & Detergents (36 items)
'bleach bottle', 'color safe bleach', 'color safe stain spray', 'detergent dispenser pump', 'detergent storage container', 'fabric softener bottle', 'fabric softener pump', 'garment deodorizer spray', 'laundry bar soap', 'laundry brightener liquid',
'laundry detergent bulk dispenser', 'laundry detergent eco sheets', 'laundry detergent liquid', 'laundry detergent powder', 'laundry detergent pump bottle', 'laundry measuring cup', 'laundry pet hair remover roller', 'laundry pet hair remover sheets', 'laundry pods container', 'laundry static guard spray',
'laundry supply caddy', 'laundry supply shelf', 'laundry supply turntable', 'laundry whitening booster powder', 'laundry wrinkle spray large', 'odor eliminator spray', 'odor neutralizer spray', 'oxygen booster tub', 'oxygen cleaner', 'pre treat spray',
'stain remover spray', 'stain stick remover', 'starch refill bottle', 'starch spray', 'wrinkle release spray', 'wrinkle spray refill',

// Drying & Folding (12 items)
'clothesline retractable reel', 'clothespin bag', 'clothespins', 'clothing folding template board', 'folding drying rack', 'indoor clothesline', 'laundry drying rack', 'laundry folding board', 'laundry folding chair', 'laundry folding counter light',
'laundry room sink drying rack', 'over door drying rack',

// Cleaning Supplies (16 items)
'all purpose cleaner refill', 'cleaning brush set small', 'cleaning microfiber towel stack', 'cleaning supply tote', 'cleaning wipes', 'disinfectant refill bottle', 'disinfectant spray', 'glass cleaner refill', 'laundry recycling bin divider', 'laundry trash bag dispenser',
'laundry trash liner roll', 'mop', 'paper towel bulk pack', 'scrub brush', 'scrub sponge refill pack', 'sponges',

// Trash & Recycling (4 items)
'laundry room trash can', 'laundry trash can pedal', 'recycling bin small', 'trash bags small',

// Safety & Monitoring (8 items)
'appliance surge protector', 'carbon monoxide detector battery pack', 'fire extinguisher cabinet small', 'fire extinguisher inspection tag', 'laundry room humidity monitor', 'laundry room leak alarm smart', 'smoke detector battery pack', 'water leak detector',

// Power & Lighting (6 items)
'ceiling light LED panel', 'extension cord organizer wrap', 'laundry room extension cord heavy duty', 'laundry room surge protector strip', 'laundry smart plug', 'power strip surge protector',

// Decor & Room Accessories (12 items)
'change jar', 'laundry room bulletin board', 'laundry room essential oil diffuser', 'laundry room rug', 'laundry room seating stool', 'laundry room storage bench', 'laundry room wall art', 'laundry room whiteboard', 'laundry rug non slip pad', 'laundry storage ottoman',
'lost sock bin', 'utility hook heavy duty',

// Comfort & Utility (4 items)
'anti fatigue mat', 'fan portable', 'step stool', 'step stool folding',

// Appliance Accessories (3 items)
'appliance dolly', 'appliance moving straps', 'appliance polish stainless',

// TOTAL: 224 items
        ],

        'Shed / Storage Unit': [
// Shed Storage & Organization (49 items)
'overhead storage shelf', 'corner shelving unit', 'heavy duty storage rack', 'wire storage rack', 'plastic storage rack', 'metal storage cabinet', 'locking storage cabinet', 'tall storage cabinet', 'base storage cabinet', 'stackable storage bins',
'clear storage bins', 'heavy duty storage totes', 'labeled storage bins', 'storage crate plastic', 'storage crate wood', 'file storage box', 'document storage tote', 'waterproof storage case', 'ammo storage can', 'tool pegboard',
'slat wall panel', 'wall hook heavy duty', 'ceiling storage rack', 'plastic drawer unit', 'hardware storage cabinet', 'metal shelving expansion kit', 'corner storage rack metal', 'wall cabinet metal', 'attic storage bin', 'weatherproof storage chest',
'metal storage trunk', 'plastic storage drum', 'lockable job box', 'rolling storage chest', 'drawer tool cabinet', 'steel parts cabinet', 'outdoor storage bench', 'deck box large', 'rolling bin cart', 'storage rack wheels kit',
'shelf bracket corner', 'wire basket storage', 'stackable drawer bins', 'utility cabinet tall', 'metal storage locker', 'greenhouse shelving kit', 'storage barrel rainproof', 'storage cage metal', 'mesh security panel',

// Workbench & Workshop Setup (29 items)
'workbench', 'workbench vise', 'workbench stool', 'workbench power strip', 'bench grinder', 'drill press', 'drill press vise', 'anvil small', 'scaffold planks', 'portable scaffold',
'sawhorse pair', 'folding sawhorse', 'work platform folding', 'shop stool adjustable', 'lathe benchtop', 'band saw', 'scroll saw', 'shop press plates', 'work table folding', 'bench vise swivel base',
'router table', 'tool chest', 'rolling tool cart', 'tool cabinet', 'tool drawer organizer', 'magnetic tool strip', 'power tool case stackable', 'stacking tool box', 'rolling stack toolbox',

// Hand Tools (60 items)
'hammer', 'sledgehammer', 'mallet', 'screwdriver set', 'precision screwdriver set', 'wrench set', 'adjustable wrench', 'socket set', 'ratchet set', 'torque wrench',
'pliers', 'needle nose pliers', 'locking pliers', 'wire cutters', 'wire strippers', 'utility knife', 'tape measure', 'laser level', 'bubble level', 'brick trowel',
'masonry hammer', 'concrete float', 'concrete edger', 'concrete groover', 'tamper tool', 'post hole digger', 'fence post level', 'metal cutting snips', 'metal file', 'tap and die set',
'metal punch set', 'center punch', 'tool belt', 'tool pouch', 'magnetic parts tray', 'work apron canvas', 'tool backpack', 'adjustable wrench large', 'lug wrench', 'oil filter wrench',
'rotary hammer drill', 'breaker bar', 'ball peen hammer', 'dead blow hammer', 'pry bar set', 'crowbar', 'chisels cold', 'wood chisels set', 'files set metal', 'rasp wood',

'deburring tool', 'pipe threader', 'tent stake hammer', 'impact sockets', 'clamp set assorted', 'bar clamp large', 'corner clamp woodworking', 'pipe clamp set', 'spring clamp pack', 'toggle clamp',

// Power Tools (24 items)
'drill', 'drill charger', 'impact driver', 'circular saw', 'jigsaw', 'reciprocating saw', 'angle grinder', 'sander', 'belt sander', 'heat gun',
'rotary tool', 'paint sprayer electric', 'router tool', 'planer handheld', 'oscillating tool', 'tile saw', 'concrete saw', 'pneumatic ratchet', 'air impact wrench', 'soldering iron',
'airbrush kit', 'airbrush compressor', 'pneumatic brad nailer', 'pneumatic framing nailer',

// Air Tools & Compressor (9 items)
'air compressor', 'air hose', 'air hose reel', 'air chuck', 'nail gun', 'staple gun', 'compressor fittings kit', 'portable air tank', 'pneumatic grease gun',

// Welding & Metalworking (10 items)
'metal sheets', 'sheet metal screws', 'welding helmet', 'welding gloves', 'forge propane burner', 'grease gun', 'bearing puller', 'gear puller', 'hydraulic press', 'welding jacket',

// Electrical & Lighting (26 items)
'extension cord', 'power strip', 'extension cord heavy duty', 'junction box', 'LED shop light', 'motion sensor light', 'emergency light battery backup', 'portable flood light', 'tripod work light', 'multimeter digital',
'voltage tester pen', 'wire crimpers', 'soldering stand', 'desoldering pump', 'electrical fish tape', 'outdoor extension cord reel', 'work light clamp', 'magnetic flashlight holder', 'cord management box', 'battery storage case fireproof',
'electrical gloves rated', 'temporary power pole', 'jobsite power box', 'outdoor timer outlet', 'tool charging dock', 'bench light strip LED',

// Generator & Power Supply (9 items)
'generator portable', 'fuel storage can', 'battery charger', 'jump starter pack', 'solar panel portable', 'power inverter', 'portable battery bank large', 'jump cable heavy duty', 'generator cover waterproof',

// Security & Safety (45 items)
'first aid kit', 'fire extinguisher', 'safety glasses', 'work gloves', 'hearing protection', 'dust masks', 'respirator mask', 'hard hat', 'mechanic gloves', 'knee pads',
'security camera outdoor', 'motion detector alarm', 'padlock heavy duty', 'combination lock', 'key safe lock box', 'door reinforcement plate', 'window security bars', 'tool lock cable', 'storage cabinet lock kit', 'safe small fireproof',
'spill containment tray', 'safety cone set', 'fire blanket', 'roof safety harness', 'fall protection rope', 'anchor point roof', 'safety barrier netting', 'hard shell knee pads', 'face shield clear', 'fire resistant gloves',
'ear plug pack', 'document safe waterproof', 'combination key lock', 'padlock weatherproof', 'keyed alike lock set', 'combination lock long shackle', 'hasp lock heavy duty', 'door reinforcement bar', 'security light solar', 'flashlight',
'lantern rechargeable', 'batteries', 'flashlight rechargeable', 'headlamp LED', 'waterproof flashlight case',

// Cleaning & Maintenance (21 items)
'shop vacuum', 'shop vacuum hose', 'shop vacuum filter', 'push broom', 'broom', 'dustpan', 'mop', 'mop bucket', 'cleaning caddy', 'all purpose cleaner',
'degreaser', 'trash can', 'trash bags', 'recycling bin', 'mouse bait station', 'pressure washer', 'pressure washer hose', 'pressure washer wand', 'pressure washer surface cleaner', 'spray wand extension',
'foam sprayer bottle',

// Lawn & Garden Equipment (26 items)
'lawn mower', 'lawn mower blades', 'weed trimmer', 'leaf blower', 'leaf rake', 'garden rake', 'shovel', 'spade shovel', 'snow shovel', 'ice scraper',
'snow blower', 'hedge trimmer', 'pruning shears', 'loppers', 'axe', 'hatchet', 'chainsaw', 'log splitter', 'wheelbarrow', 'tiller gas',
'cultivator tool', 'landscaping shovel', 'edger manual', 'edger gas', 'tree pruning saw', 'ash shovel',

// Garden & Irrigation (22 items)
'watering can', 'garden gloves', 'drip irrigation kit', 'sprinkler', 'garden hose', 'hose nozzle', 'spray bottle garden', 'pest control sprayer', 'garden hose reel', 'sprinkler timer',
'backflow preventer', 'garden cart rolling', 'fertilizer spreader', 'broadcast spreader', 'seed spreader hand', 'utility sink freestanding', 'sink faucet outdoor', 'hose splitter brass', 'hose quick connect kit', 'rain barrel',
'rain barrel diverter kit', 'chemical sprayer backpack',

// Sports & Recreation Storage (27 items)
'bike repair stand', 'bike pump', 'bike helmets', 'sports equipment bin', 'golf clubs', 'golf bag', 'baseball bats', 'baseballs', 'basketballs', 'football',
'soccer ball', 'tennis rackets', 'tennis balls', 'skateboard', 'roller skates', 'skis', 'ski poles', 'kayak paddles', 'pool equipment storage bin', 'chlorine storage bucket',
'pool net skimmer', 'pool brush', 'pool vacuum hose', 'life jacket storage rack', 'paddle board rack', 'tackle box large', 'bait cooler small',

// Camping & Outdoor Gear (22 items)
'camping cooler', 'camping stove', 'propane tank', 'propane torch', 'folding camping chairs', 'sleeping bags', 'camp lantern', 'cooler wheeled', 'water jug camping', 'portable toilet camping',
'folding cot', 'bug zapper lantern', 'propane heater portable', 'battery lantern emergency', 'emergency radio crank', 'camp tool kit compact', 'survival kit storage box', 'outdoor folding table', 'camp prep table', 'water cooler dispenser',
'ice chest large', 'camp cookware kit',

// Ladders, Scaffolding & Fall Protection (9 items)
'ladder', 'extension ladder', 'step ladder', 'folding ladder', 'ladder stabilizer', 'ladder leveler', 'roof ladder hook', 'extension ladder tie downs', 'ladder tool tray',

// Moving & Transport (16 items)
'moving blankets', 'storage trunk', 'moving dolly', 'hand truck', 'wheel chocks', 'ratchet straps heavy duty', 'cargo net large', 'tow strap recovery', 'winch electric', 'winch remote',
'chain hoist manual', 'moving straps shoulder', 'appliance dolly straps', 'steel cable roll', 'chain link roll', 'pulley block heavy duty',

// Automotive & Trailer (27 items)
'auto jack floor', 'jack stands pair', 'tire inflator', 'tire pressure gauge', 'oil drain pan', 'mechanic creeper', 'mechanic stool rolling', 'automotive tool set', 'trailer hitch lock', 'trailer ball mount',
'truck tool box bed mount', 'bed liner spray kit', 'cargo rack roof', 'roof tie down straps', 'tow hitch receiver', 'hitch pin lock', 'trailer jack wheel', 'trailer spare tire mount', 'tire patch kit', 'hydraulic bottle jack',
'transmission jack', 'engine stand', 'engine hoist', 'load leveler bar', 'tow dolly', 'trailer ramps', 'rolling mechanic seat',

// Concrete, Masonry & Lumber (20 items)
'concrete mix bags', 'cement mixer portable', 'mixing tub large', 'gravel bags', 'sand bags', 'landscape fabric roll', 'paver stones', 'paver base', 

// Painting, Sealing & Coatings (20 items)
'paint cans assorted', 'roller frames', 'drop cloth canvas', 'painter tape roll', 'joint compound bucket', 'drywall patch kit', 'paint brush set', 'wood stain cans', 'deck sealer', 'concrete sealer',
'masonry waterproofing', 'roof patch sealant', 'asphalt repair patch', 'driveway crack filler', 'expanding foam insulation', 'foam gun applicator', 'concrete patch compound', 'epoxy repair kit', 'crack injection kit', 'moisture barrier paint',

// Plumbing & Water Management (10 items)
'plumbing pipe PVC', 'PVC fittings assorted', 'pipe wrench large', 'pipe cutter', 'water pump portable', 'sump pump', 'sump pump hose', 'ice melt bucket', 'snow roof rake', 'roof snow guard',

// Firewood & Heating (11 items)
'log rack firewood', 'firewood carrier', 'kindling splitter', 'maul splitting', 'ash bucket metal', 'chimney brush kit', 'chimney rods extension', 'wood moisture meter', 'stump grinder rental unit', 'log carrier canvas',
'chimney cap stainless',

// Tarps, Covers & Tie-Downs (3 items)
'storage tarp heavy duty', 'canopy tent frame', 'boat cover',

// Climate & Floor (12 items)
'shed floor mat', 'temperature gauge analog', 'humidity gauge analog', 'weather station unit', 'air circulator fan', 'box fan', 'space heater portable', 'dehumidifier small', 'floor mat anti slip', 'anti fatigue mat heavy duty',
'rubber floor tiles interlocking', 'floor drain cover grate',

// Boat & Marine (6 items)
'boat anchor small', 'boat motor stand', 'boat fuel tank portable', 'boat trailer guide poles', 'marine rope coil', 'dock line cleat',

// Hobby & Specialty Storage (8 items)
'chemical storage cabinet', 'flammable storage cabinet', 'metal detector', 'rc hobby storage case', 'drone storage case', 'spray booth portable', 'craft tool organizer', 'fuel storage locker',

// Site Management & Signage (4 items)
'solar yard light pack', 'landscape lighting transformer', 'storage hooks assorted', 'magnetic cabinet catch',

// TOTAL: 525 items
        ],

        Yard: [
// Garden & Planters (25 items)
'raised garden bed', 'garden arbor', 'garden arch trellis', 'yard trellis metal', 'watering can plastic', 'watering can metal', 'plant pots ceramic', 'plant pots plastic', 'planter box wood', 'hanging planter basket',
'window planter box', 'plant stand outdoor', 'potting bench', 'garden fountain', 'bird bath pedestal', 'garden statue', 'tree stump remover chemical', 'tree wrap protective', 'plant frost cover', 'plant cage tomato',
'trellis netting', 'garden cloche cover', 'raised bed liner', 'garden gnome statue', 'yard fountain tiered',

// Irrigation & Watering (29 items)
'sprinkler timer', 'garden hose heavy duty', 'soaker hose', 'hose reel freestanding', 'spray nozzle adjustable', 'sprinkler oscillating', 'sprinkler impact', 'watering wand', 'rain gauge yard', 'rain barrel system',
'smart sprinkler controller', 'sprinkler riser extension', 'sprinkler valve box cover', 'irrigation drip emitters', 'irrigation tubing roll', 'irrigation pressure regulator', 'irrigation filter inline', 'hose timer digital', 'hose splitter brass', 'hose quick connect fittings',
'rain barrel diverter kit', 'downspout extension flexible', 'gutter splash block', 'gutter guard mesh', 'outdoor faucet cover winter', 'garden hose repair kit', 'spray bottle pump garden', 'watering spike automatic', 'sprinkler rain sensor',

// Patio & Outdoor Furniture (28 items)
'porch swing', 'shade sail canopy', 'awning retractable', 'outdoor canopy tent', 'sun shade umbrella', 'umbrella base heavy', 'outdoor rug patio', 'doormat exterior', 'welcome mat decorative', 'outdoor bench',
'outdoor dining table', 'outdoor dining chairs', 'outdoor sectional sofa', 'patio coffee table', 'patio side table', 'chaise lounge chair', 'hammock stand', 'deck storage bench', 'deck privacy screen', 'outdoor curtain panels',
'gazebo mosquito netting', 'pergola shade cover', 'shade sail hardware kit', 'patio heater propane', 'patio heater cover', 'porch rocking chair', 'porch side table', 'car port canopy',

// Grilling & Outdoor Cooking (30 items)
'fire pit metal', 'fire pit cover', 'propane fire table', 'charcoal grill', 'gas grill', 'grill cover', 'smoker grill', 'outdoor pizza oven', 'grill tool set', 'propane tank outdoor',
'cooler outdoor', 'outdoor bar cart', 'outdoor serving tray', 'propane tank cover', 'fire pit spark screen', 'fire pit grate insert', 'fire pit poker tool', 'fire pit lava rocks', 'chiminea outdoor', 'grill burner tubes',
'grill ignition kit', 'grill thermometer lid', 'smoker wood chips box', 'bar stool outdoor', 'cooler rolling outdoor', 'ice chest heavy duty', 'picnic basket wicker', 'serving cart patio', 'outdoor buffet table', 'propane tank storage cage',

// Lawn & Garden Equipment (49 items)
'lawn mower push', 'lawn mower riding', 'mower bag attachment', 'mower cover', 'weed trimmer electric', 'weed trimmer gas', 'leaf blower electric', 'leaf blower gas', 'hedge trimmer electric', 'hedge trimmer gas',
'chainsaw electric', 'chainsaw gas', 'pole saw', 'garden rake leaf', 'landscape rake wide', 'shovel round point', 'shovel square point', 'spade garden', 'post hole digger manual', 'garden hoe',
'wheelbarrow single wheel', 'garden cart dump', 'fertilizer spreader broadcast', 'fertilizer spreader drop', 'seed spreader handheld', 'garden trowel hand', 'hand cultivator', 'pruning shears bypass', 'loppers long handle', 'tree pruner pole',
'driveway pressure washer', 'snow shovel heavy duty', 'snow blower electric', 'ice melt spreader', 'roof snow rake', 'lawn aerator manual', 'lawn aerator core', 'lawn dethatcher rake', 'lawn roller', 'grass seed spreader',
'weed puller tool', 'garden edging shovel', 'cultivator gas', 'rototiller electric', 'leaf vacuum mulcher', 'hedge shear manual', 'branch lopper ratchet', 'wood chipper electric', 'log splitter electric',

// Pool, Spa & Pond (27 items)
'pool ladder', 'pool cover', 'pool pump', 'pool filter system', 'pool skimmer net', 

// Recreation & Play (37 items)
'playground swing set', 'slide freestanding', 'trampoline yard', 'trampoline safety net', 'basketball hoop portable', 'basketball hoop in ground', 'soccer goal yard', 'baseball practice net', 'golf practice net', 'batting tee',
'sand box children', 'climbing dome', 'zip line kit yard', 'tire swing tree', 'picnic table wood', 'picnic table umbrella', 'outdoor chalkboard', 'yard game cornhole', 'yard game ladder toss', 'swing set anchor kit',
'trampoline ladder', 'trampoline cover', 'playhouse outdoor', 'sandbox cover', 'tree swing rope kit', 'yard obstacle course kit', 'croquet set lawn', 'bocce ball set', 'horseshoe game set', 'giant checkers set',
'giant connect four', 'disc golf basket', 'kick dart board yard', 'badminton net set', 'volleyball net yard', 'outdoor projector screen', 'projector outdoor rated',

// Outdoor Lighting & Power (20 items)
'landscape lighting solar', 'path lights solar', 'spotlight ground', 'string lights outdoor', 'post cap lights', 'deck lights', 'flood light motion', 'timer outdoor outlet', 'extension cord outdoor rated', 'flag pole solar light',
'landscape spotlight LED', 'uplight tree', 'pathway light low voltage', 'deck post light solar', 'string lights cafe style', 'outdoor light pole', 'flood light LED', 'motion floodlight solar', 'smart outdoor plug', 'outdoor extension reel large',

// Security & Surveillance (12 items)
'mailbox locking', 'security camera outdoor wired', 'security camera outdoor wireless', 'alarm siren outdoor', 'doorbell camera exterior', 'motion detector outdoor', 'parcel drop box', 'security camera floodlight combo', 'video doorbell outdoor', 'gate keypad entry',
'driveway alarm sensor', 'yard siren strobe',

// Yard Decor & Wildlife (16 items)
'yard address sign', 'flag pole yard', 'weather station yard', 'wind chime decorative', 'yard art metal', 'yard sign holder', 'address numbers metal', 'decorative yard flag', 'bird feeder hanging', 'bird feeder pole',
'bird seed storage bin', 'squirrel guard baffle', 'bat house mount', 'bee hotel garden', 'weather vane decorative', 'metal wind spinner',

// Outdoor Storage & Waste (17 items)
'compost bin yard', 'trash can outdoor', 'recycling bin outdoor', 'compost tumbler', 'outdoor storage deck box', 'storage shed small', 'tool shed large', 'wood pile rack', 'firewood cover tarp', 'outdoor trash enclosure',
'trash can shed', 'recycling container large', 'compost aerator tool', 'compost bin tumbler dual', 'firewood rack outdoor', 'generator outdoor cover', 'weatherproof storage chest large',

// Landscaping Materials & Maintenance (17 items)
'topsoil bags', 'mulch bags', 'pine straw bales', 'decorative river rock', 'landscape timbers', 'deck stain', 'deck sealer waterproof', 'deck cleaner solution', 'driveway sealant bucket', 'asphalt patch repair',
'concrete crack filler tube', 'driveway marker reflectors', 'mailbox post anchor', 'fence post caps', 'fence pickets spare', 'fence repair kit', 'compost thermometer',

// Drainage, Storm & Misc (6 items)
'drainage pump portable', 'backyard flood barrier', 'yard tarp heavy duty', 'ground anchor kit', 'tent canopy weights', 'portable stage platform',

// TOTAL: 313 items
],

        Other: ['holiday decorations assorted', 'christmas tree artificial', 'christmas tree stand', 'ornament storage box', 'ornament hooks pack', 'string lights box', 'extension light cords', 'light timers plug in', 'wreath storage bag', 'holiday inflatables',
'halloween decorations bin', 'thanksgiving decor box', 'easter decoration tote', 'valentine decor bin', 'fourth of july decorations', 'holiday yard stakes', 'wrapping paper roll', 'gift wrap storage tube', 'gift bags assorted', 'gift ribbon spools',

'photo albums box', 'picture frames assorted', 'framed artwork storage', 'canvas art wrapped', 'mirror wall spare', 'clock wall spare', 'home decor storage bin', 'throw pillows spare', 'blanket storage bag', 'quilt storage case',
'area rug rolled', 'curtain panels spare', 'curtain rods spare', 'window blinds spare', 'lamp base spare', 'lamp shade spare', 'table lamp spare', 'floor lamp spare', 'extension lamp cord', 'light bulb storage box',

'office supplies storage tote', 'printer paper case', 'notebook stack', 'binders storage box', 'file folders box', 'archival document box', 'shredder spare', 'desk organizer spare', 'calculator spare', 'cordless phone base spare',
'router modem spare', 'wifi extender spare', 'network cable spool', 'usb cable bundle', 'hdmi cable spare', 'power adapter box', 'surge protector spare', 'battery storage organizer', 'external hard drive case', 'flash drive bundle',

'books storage box', 'magazine storage bin', 'comic book storage case', 'vinyl record crate', 'record player spare', 'cd storage binder', 'dvd storage binder', 'board games stack', 'puzzle boxes', 'card games storage tin',
'toy storage bin', 'action figures box', 'doll storage case', 'lego storage bin', 'model kit boxes', 'craft kit storage tote', 'yarn storage bin', 'fabric storage tote', 'scrapbook supplies box', 'photo storage box',

'suitcase large', 'suitcase medium', 'carry on luggage', 'travel backpack', 'duffel bag', 'garment travel bag', 'travel organizer pouch', 'travel toiletry bag', 'passport holder spare', 'neck pillow travel',
'camping backpack', 'hydration pack', 'sleeping bag storage sack', 'tent bag spare', 'hiking poles pair', 'cooler bag soft', 'picnic basket spare', 'beach umbrella', 'beach chairs folding', 'beach wagon foldable',

'sports trophy box', 'medal storage case', 'gym equipment storage bin', 'yoga mat spare', 'dumbbell set small', 'resistance bands pack', 'exercise ball', 'fitness step platform', 'treadmill mat spare', 'bike trainer stand',
'ski boot bag', 'snowboard bag', 'helmet storage bag', 'rollerblade bag', 'skate helmet spare', 'fishing rod tube', 'tackle storage tray', 'hunting gear tote', 'archery bow case', 'arrow storage tube',

'medical supply bin', 'first aid refill kit', 'emergency preparedness kit', 'water storage jug', 'food storage bucket sealed', 'battery lantern spare', 'hand crank flashlight', 'weather radio spare', 'thermal blankets pack', 'fireproof document bag',
'important document safe', 'spare house keys box', 'key organizer wall mount', 'tool manual binder', 'appliance manual folder', 'warranty document file', 'insurance paperwork file', 'tax record storage box', 'checkbook storage tin', 'coin jar large',

'pet crate spare', 'pet carrier travel', 'pet bed spare', 'pet toy storage bin', 'pet leash spare', 'pet collar spare', 'pet food storage container', 'pet grooming kit', 'aquarium supplies bin', 'bird cage spare',
'fish tank heater spare', 'pet gate foldable', 'litter box spare', 'litter storage container', 'pet blanket spare', 'pet bowl spare', 'pet water dispenser spare', 'dog training equipment', 'cat scratching post spare', 'pet medication organizer',

'kitchen small appliance box', 'extra cookware storage', 'china storage case', 'glassware storage crate', 'silverware chest', 'serving platter box', 'coffee maker spare', 'toaster spare', 'microwave spare', 'mini fridge spare',
'barware storage box', 'wine storage rack small', 'beverage cooler spare', 'water filter spare', 'paper goods bulk box', 'plastic utensil bulk pack', 'bulk napkin pack', 'bulk plate pack', 'catering tray spare', 'cooler large hard shell',

'home improvement spare parts bin', 'hinge assortment pack', 'knob assortment pack', 'faucet spare kit', 'plumbing parts box', 'electrical parts box', 'paint touch up kit', 'tile spare box', 'flooring spare planks', 'roof shingle bundle',
'insulation roll spare', 'drywall sheets spare', 'brick stack spare', 'paver stack spare', 'fence panel spare', 'gate hardware kit', 'door slab spare', 'screen door spare', 'storm window spare', 'storm door spare',

'miscellaneous hardware bin', 'random fasteners jar', 'unknown key ring', 'remote control spare', 'phone charger spare', 'old cell phone box', 'camera equipment case', 'tripod spare', 'lighting umbrella kit', 'microphone stand spare',
'speaker stand spare', 'amplifier spare', 'audio cable bundle', 'instrument case spare', 'guitar stand spare', 'keyboard stand spare', 'music sheet storage box', 'vinyl protector sleeves', 'collectible storage case', 'coin collection binder',

'seasonal wreath storage box', 'holiday light storage reel', 'tree skirt storage bag', 'nativity set storage box', 'holiday extension cord bundle', 'outdoor decor storage crate', 'holiday projector light', 'light stake lawn pack', 'ornament divider tray', 'gift wrap cutter tool',

'decorative vase storage box', 'ceramic figurine storage', 'collectible display case spare', 'shadow box frame spare', 'wall decal roll spare', 'decor storage tote labeled', 'throw blanket spare', 'decorative ladder shelf spare', 'accent table spare', 'folding side table spare',

'backup alarm clock', 'desktop fan spare', 'space heater spare', 'humidifier spare', 'dehumidifier spare', 'air purifier spare', 'air filter replacement case', 'vent cover spare', 'ceiling fan spare', 'light fixture spare',

'printer spare', 'scanner spare', 'laminator spare', 'paper shredder spare', 'label printer spare', 'ink cartridge storage box', 'toner cartridge spare', 'external monitor spare', 'keyboard spare', 'computer mouse spare',
'laptop docking station spare', 'webcam spare', 'headset spare', 'router backup unit', 'ethernet switch spare', 'power bank spare', 'charging cable organizer box', 'tech accessory drawer unit', 'hard drive enclosure spare', 'memory card organizer case',

'textbook storage box', 'yearbook storage bin', 'certificate frame spare', 'diploma tube case', 'journal stack', 'planner archive box', 'greeting card keepsake box', 'stamp collection album', 'coin bank decorative', 'piggy bank spare',

'toy chest spare', 'remote control car spare', 'puzzle mat roll', 'stuffed animal storage net', 'play tent folded', 'kids art portfolio case', 'crayon storage case', 'marker organizer box', 'chalkboard spare small', 'whiteboard spare small',

'rolling duffel bag', 'hard shell luggage spare', 'luggage tag organizer', 'packing cube set spare', 'travel document wallet spare', 'luggage scale', 'portable safe travel', 'travel blanket spare', 'travel pillow memory foam', 'travel umbrella spare',

'camp chair spare', 'camp table spare', 'portable grill small', 'grill cover spare', 'charcoal storage bin', 'cooler ice packs bulk', 'thermos spare', 'canteen metal spare', 'mess kit spare', 'portable water filter',

'medal display rack spare', 'sports jersey frame spare', 'gym bag spare', 'foam roller spare', 'kettlebell small', 'ankle weights pair', 'pull up bar doorway', 'jump rope spare', 'gymnastics mat foldable', 'sports duffel organizer',

'ski goggles spare', 'snow gloves spare', 'winter hat storage bin', 'beach towel storage bag', 'snorkel gear bag', 'life vest spare', 'kayak storage cover', 'tent stakes bulk', 'tent pole replacement set', 'hammock spare',

'emergency food rations box', 'water purification tablets', 'emergency whistle pack', 'flare kit marine', 'emergency poncho pack', 'hand warmers bulk', 'cooling towels pack', 'emergency candle pack', 'battery storage case large', 'fireproof safe box small',

'pet carrier soft sided', 'pet travel bowl foldable', 'pet harness spare', 'pet grooming table foldable', 'aquarium filter spare', 'aquarium air pump spare', 'bird seed storage bin', 'reptile heat lamp spare', 'pet first aid kit', 'dog crate mat spare',

'china cabinet spare shelf', 'serving tray stack', 'table leaf spare', 'folding banquet table', 'folding chair stack', 'tablecloth storage bin', 'cloth napkin bulk pack', 'napkin ring set spare', 'glass cloche spare', 'cake stand spare',

'door hardware spare box', 'cabinet knob spare set', 'drawer pull spare set', 'light switch spare pack', 'outlet cover spare pack', 'thermostat spare unit', 'doorbell spare unit', 'security camera spare indoor', 'motion sensor spare indoor', 'window blind spare box',

'tool accessory bin misc', 'random cable box', 'adapter plug assortment', 'old remote collection box', 'camera lens case spare', 'camera bag spare', 'tripod bag spare', 'stage lighting spare', 'extension mic cable spare', 'instrument string pack bulk',

'collectible card binder', 'comic sleeve pack', 'display stand small', 'figurine riser shelf', 'coin display case', 'watch storage case', 'jewelry organizer spare', 'jewelry travel case spare', 'watch winder spare', 'safe deposit document folder',

'storage ottoman spare', 'bean bag chair spare', 'floor cushion spare', 'rug pad roll spare', 'curtain tieback spare', 'wall art crate', 'mirror packing box', 'glass protector sheets', 'furniture leg protectors pack', 'caster wheel replacement pack',

'mattress bag spare', 'bed frame spare parts box', 'headboard spare', 'bed slats spare', 'folding mattress spare', 'air mattress spare', 'air pump spare', 'mattress topper spare', 'bed risers spare', 'bed skirt spare',

'baby gear storage tote', 'stroller spare', 'car seat spare', 'baby gate spare', 'high chair spare', 'crib mattress spare', 'crib bedding spare', 'baby monitor spare', 'diaper storage bin', 'baby toy storage chest',

'file safe waterproof', 'portable document scanner spare', 'backup alarm siren', 'security sign yard spare', 'mailbox spare', 'house number sign spare', 'address plaque spare', 'keypad lock spare', 'deadbolt spare', 'chain lock spare',

'storage bin heavy duty lid', 'rolling storage drawer unit', 'clear organizer tower', 'hanging closet organizer spare', 'shoe rack spare', 'coat rack spare', 'umbrella stand spare', 'coat hanger bulk pack', 'garment rack foldable', 'closet rod spare',

'plastic tub large', 'storage drum waterproof', 'weatherproof document case', 'steel lock box', 'portable filing cabinet', 'rolling filing cart', 'accordion file organizer', 'clip file box', 'archival photo box', 'blueprint storage tube'

]
    };

    const ITEM_IMAGE_OVERRIDES = {
        //kitchen
        'refrigerator': 'https://cdamemoryjogger.blob.core.windows.net/images/Fridge_Thumbnail__0016_DFF180E2SSDB.jpg',
        'refrigerator shelves': 'https://cdamemoryjogger.blob.core.windows.net/images/freezer%20shelves.jpg',
        'refrigerator drawers': 'https://cdamemoryjogger.blob.core.windows.net/images/freezer%20drawers.jpg', 
        'refrigerator door bins': 'https://cdamemoryjogger.blob.core.windows.net/images/fridge%20door%20bins.avif',
        'freezer': 'https://cdamemoryjogger.blob.core.windows.net/images/freezer.avif', 
        'freezer shelves': 'https://cdamemoryjogger.blob.core.windows.net/images/fridge%20shelves.webp',
        'freezer drawers': 'https://cdamemoryjogger.blob.core.windows.net/images/fridge%20drawers.jpg', 
        'ice maker': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20maker.jpg',
        'ice bin': 'https://cdamemoryjogger.blob.core.windows.net/images/fridge%20shelves.webp',
        'water dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20dispenser.avif',
        'cooktop': 'https://cdamemoryjogger.blob.core.windows.net/images/cooktop.jpg',
        'oven': 'https://cdamemoryjogger.blob.core.windows.net/images/oven.jpg',
        'oven racks': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20racks.jpg',
        'oven drawer': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20drawer.jpg',
        'range hood': 'https://cdamemoryjogger.blob.core.windows.net/images/range%20hood.jpg',
        'range hood filter': 'https://cdamemoryjogger.blob.core.windows.net/images/range%20hood%20filter.jpg',
        'microwave': 'https://cdamemoryjogger.blob.core.windows.net/images/microwave.jpg',
        'microwave turntable': 'https://cdamemoryjogger.blob.core.windows.net/images/microwave%20turntable.webp',
        'dishwasher': 'https://cdamemoryjogger.blob.core.windows.net/images/dishwasher.webp',
        'dishwasher racks': 'https://cdamemoryjogger.blob.core.windows.net/images/dishwasher%20racks.jpg',
        'dishwasher utensil basket': 'https://cdamemoryjogger.blob.core.windows.net/images/dishwasher%20utensil%20basket.webp',
        'garbage disposal': 'https://cdamemoryjogger.blob.core.windows.net/images/garbage%20disposal.jpg',
        'kitchen sink': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20sink.jpg',
        'sink faucet': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20faucet.webp',
        'sprayer nozzle': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20sprayer%20nozzle.jpg',
        'soap dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/soap%20dispenser.webp',
        'water filter system': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20filter%20system.jpg',
        'kitchen island': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20island.webp',
        'bar stools': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20stool.jpg',
        'lazy susan': 'https://cdamemoryjogger.blob.core.windows.net/images/lazy%20susan.webp',
        'drawer organizers': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20organizer.webp',
        'cutlery tray': 'https://cdamemoryjogger.blob.core.windows.net/images/cutlery%20tray.webp',
        'spice rack': 'https://cdamemoryjogger.blob.core.windows.net/images/spice%20rack.jpg',
        'wine rack': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20rack.webp',
        'trash can': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20can.webp',
        'recycling bin': 'https://cdamemoryjogger.blob.core.windows.net/images/recycling%20bin.webp',
        'compost bin': 'https://cdamemoryjogger.blob.core.windows.net/images/compost%20bin.jpg',
        'paper towel holder': 'https://cdamemoryjogger.blob.core.windows.net/images/paper%20towel%20holder.webp',
        'dish rack': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20rack.webp',
        'drying mat': 'https://cdamemoryjogger.blob.core.windows.net/images/drying%20mat.webp',
        'fire extinguisher': 'https://cdamemoryjogger.blob.core.windows.net/images/fire%20extinguisher.jpg',
        'step ladder': 'https://cdamemoryjogger.blob.core.windows.net/images/step%20ladder.webp',
        'ceiling light fixture': 'https://cdamemoryjogger.blob.core.windows.net/images/ceiling%20light%20fixture.jpg',
        'window blinds': 'https://cdamemoryjogger.blob.core.windows.net/images/window%20blinds.jpg',
        'curtains': 'https://cdamemoryjogger.blob.core.windows.net/images/curtains.webp',
        'curtain rod': 'https://cdamemoryjogger.blob.core.windows.net/images/curtain%20rod.webp',
        'toaster': 'https://cdamemoryjogger.blob.core.windows.net/images/toaster.jpg',
        'toaster oven': 'https://cdamemoryjogger.blob.core.windows.net/images/toaster%20oven.jpg',
        'air fryer': 'https://cdamemoryjogger.blob.core.windows.net/images/air%20fryer.jpg',
        'slow cooker': 'https://cdamemoryjogger.blob.core.windows.net/images/slow%20cooker.jpg',
        'pressure cooker': 'https://cdamemoryjogger.blob.core.windows.net/images/pressure%20cooker.jpg',
        'rice cooker': 'https://cdamemoryjogger.blob.core.windows.net/images/rice%20cooker.jpg',
        'electric kettle': 'https://cdamemoryjogger.blob.core.windows.net/images/electric%20kettle.jpg',
        'coffee maker': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20maker.jpg',
        'espresso machine': 'https://cdamemoryjogger.blob.core.windows.net/images/espresso%20machine.jpg',
        'coffee grinder': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20grinder.jpg',
        'french press': 'https://cdamemoryjogger.blob.core.windows.net/images/french%20press.jpg',
        'single serve coffee maker': 'https://cdamemoryjogger.blob.core.windows.net/images/single%20serve%20coffee%20maker.jpg',
        'blender': 'https://cdamemoryjogger.blob.core.windows.net/images/blender.jpg',
        'immersion blender': 'https://cdamemoryjogger.blob.core.windows.net/images/immersion%20blender.jpg',
        'stand mixer': 'https://cdamemoryjogger.blob.core.windows.net/images/stand%20mixer.jpg',
        'hand mixer': 'https://cdamemoryjogger.blob.core.windows.net/images/hand%20mixer.jpg',
        'food processor': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20processor.jpg',
        'hand chopper': 'https://cdamemoryjogger.blob.core.windows.net/images/hand%20chopper.jpg',
        'juicer': 'https://cdamemoryjogger.blob.core.windows.net/images/juicer.jpg',
        'electric griddle': 'https://cdamemoryjogger.blob.core.windows.net/images/electric%20griddle.jpg',
        'waffle maker': 'https://cdamemoryjogger.blob.core.windows.net/images/waffle%20maker.jpg',
        'panini press': 'https://cdamemoryjogger.blob.core.windows.net/images/panini%20press.webp',
        'indoor grill': 'https://cdamemoryjogger.blob.core.windows.net/images/indoor%20grill.jpg',
        'electric skillet': 'https://cdamemoryjogger.blob.core.windows.net/images/electric%20skillet.jpg',
        'bread maker': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20maker.jpg',
        'sous vide cooker': 'https://cdamemoryjogger.blob.core.windows.net/images/sous%20vide%20cooker.jpg',
        'wine cooler': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20cooler.jpg',
        'beverage fridge': 'https://cdamemoryjogger.blob.core.windows.net/images/beverage%20fridge.jpg',
        'kitchen scale': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20scale.jpg',
        'digital thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/digital%20thermometer.jpg',
        'knife block': 'https://cdamemoryjogger.blob.core.windows.net/images/knife%20block.jpg',
        'chef knife': 'https://cdamemoryjogger.blob.core.windows.net/images/chef%20knife.jpg',
        'paring knife': 'https://cdamemoryjogger.blob.core.windows.net/images/paring%20knife.jpg',
        'bread knife': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20knife.jpg',
        'carving knife': 'https://cdamemoryjogger.blob.core.windows.net/images/carving%20knife.jpg',
        'utility knife': 'https://cdamemoryjogger.blob.core.windows.net/images/utility%20knife.jpg',
        'steak knives': 'https://cdamemoryjogger.blob.core.windows.net/images/steak%20knifes.jpg',
        'kitchen shears': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20shears.jpg',
        'knife sharpener': 'https://cdamemoryjogger.blob.core.windows.net/images/knife%20sharpener.jpg',
        'cutting board wood': 'https://cdamemoryjogger.blob.core.windows.net/images/cutting%20board%20wood.jpg',
        'cutting board plastic': 'https://cdamemoryjogger.blob.core.windows.net/images/cutting%20board%20plastic.webp',
        'cutting board bamboo': 'https://cdamemoryjogger.blob.core.windows.net/images/cutting%20board%20bamboo.jpg',
        'mixing bowl set': 'https://cdamemoryjogger.blob.core.windows.net/images/mixing%20bowl%20set.jpg',
        'measuring cups': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20cups.jpg',
        'measuring spoons': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20spoons.jpg',
        'colander': 'https://cdamemoryjogger.blob.core.windows.net/images/colander.jpg',
        'mesh strainer': 'https://cdamemoryjogger.blob.core.windows.net/images/mesh%20strainer.jpg',
        'salad spinner': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20spinner.jpg',
        'baking sheet': 'https://cdamemoryjogger.blob.core.windows.net/images/baking%20sheet.jpg',
        'cookie sheet': 'https://cdamemoryjogger.blob.core.windows.net/images/cookie%20sheet.jpg',
        'muffin pan': 'https://cdamemoryjogger.blob.core.windows.net/images/muffin%20pan.jpg',
        'cake pan': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20pan.jpg',
        'springform pan': 'https://cdamemoryjogger.blob.core.windows.net/images/springform%20pan.jpg',
        'loaf pan': 'https://cdamemoryjogger.blob.core.windows.net/images/loaf%20pan.jpg',
        'pie dish': 'https://cdamemoryjogger.blob.core.windows.net/images/pie%20dish.jpg',
        'roasting pan': 'https://cdamemoryjogger.blob.core.windows.net/images/roasting%20pan.jpg',
        'broiler pan': 'https://cdamemoryjogger.blob.core.windows.net/images/broiler%20pan.jpg',
        'cooling rack': 'https://cdamemoryjogger.blob.core.windows.net/images/cooling%20rack.jpg',
        'pizza stone': 'https://cdamemoryjogger.blob.core.windows.net/images/pizza%20stone.jpg',
        'casserole dish': 'https://cdamemoryjogger.blob.core.windows.net/images/casserole%20dish.jpg',
        'dutch oven': 'https://cdamemoryjogger.blob.core.windows.net/images/dutch%20oven.jpg',
        'stock pot': 'https://cdamemoryjogger.blob.core.windows.net/images/stock%20pot.jpg',
        'saucepan': 'https://cdamemoryjogger.blob.core.windows.net/images/saucepan.jpg',
        'frying pan': 'https://cdamemoryjogger.blob.core.windows.net/images/frying%20pan.jpg',
        'nonstick skillet': 'https://cdamemoryjogger.blob.core.windows.net/images/nonstick%20skillet.jpg',
        'cast iron skillet': 'https://cdamemoryjogger.blob.core.windows.net/images/cast%20iron%20skillet.jpg',
        'wok': 'https://cdamemoryjogger.blob.core.windows.net/images/wok.jpg',
        'grill pan': 'https://cdamemoryjogger.blob.core.windows.net/images/grill%20pan.jpg',
        'saute pan': 'https://cdamemoryjogger.blob.core.windows.net/images/saute%20pan.jpg',
        'pot lids': 'https://cdamemoryjogger.blob.core.windows.net/images/pot%20lids.jpg',
        'splatter screen': 'https://cdamemoryjogger.blob.core.windows.net/images/splatter%20screen.jpg',
        'trivet': 'https://cdamemoryjogger.blob.core.windows.net/images/trivet.jpg',
        'spatula': 'https://cdamemoryjogger.blob.core.windows.net/images/spatula.jpg',
        'whisk': 'https://cdamemoryjogger.blob.core.windows.net/images/whisk.jpg',
        'ladle': 'https://cdamemoryjogger.blob.core.windows.net/images/ladle.jpg',
        'slotted spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/slotted%20spoon.jpg',
        'serving spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20spoon.jpg',
        'tongs': 'https://cdamemoryjogger.blob.core.windows.net/images/tongs.jpg',
        'pasta server': 'https://cdamemoryjogger.blob.core.windows.net/images/pasta%20server.jpg',
        'turner': 'https://cdamemoryjogger.blob.core.windows.net/images/turner.jpg',
        'wooden spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/wooden%20spoon.jpg',
        'can opener': 'https://cdamemoryjogger.blob.core.windows.net/images/can%20opener.jpg',
        'bottle opener': 'https://cdamemoryjogger.blob.core.windows.net/images/bottle%20opener.jpg',
        'wine opener': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20opener.png',
        'garlic press': 'https://cdamemoryjogger.blob.core.windows.net/images/garlic%20press.jpg',
        'vegetable peeler': 'https://cdamemoryjogger.blob.core.windows.net/images/vegetable%20peeler.jpg',
        'box grater': 'https://cdamemoryjogger.blob.core.windows.net/images/box%20grater.jpg',
        'zester': 'https://cdamemoryjogger.blob.core.windows.net/images/zester.jpg',
        'citrus juicer': 'https://cdamemoryjogger.blob.core.windows.net/images/citrus%20juicer.jpg',
        'meat tenderizer': 'https://cdamemoryjogger.blob.core.windows.net/images/meat%20tenderizer.jpg',
        'potato masher': 'https://cdamemoryjogger.blob.core.windows.net/images/potato%20masher.jpg',
        'ice cream scoop': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20cream%20scoop.jpg',
        'melon baller': 'https://cdamemoryjogger.blob.core.windows.net/images/melon%20baller.jpg',
        'apple corer': 'https://cdamemoryjogger.blob.core.windows.net/images/apple%20corer.jpg',
        'mandoline slicer': 'https://cdamemoryjogger.blob.core.windows.net/images/mandoline%20slicer.jpg',
        'basting brush': 'https://cdamemoryjogger.blob.core.windows.net/images/basting%20brush.jpg',
        'flour sifter': 'https://cdamemoryjogger.blob.core.windows.net/images/flour%20sifter.jpg',
        'aluminum foil': 'https://cdamemoryjogger.blob.core.windows.net/images/aluminum%20foil.jpg',
        'plastic wrap': 'https://cdamemoryjogger.blob.core.windows.net/images/plastic%20wrap.jpg',
        'parchment paper': 'https://cdamemoryjogger.blob.core.windows.net/images/parchment%20paper.jpg',
        'wax paper': 'https://cdamemoryjogger.blob.core.windows.net/images/wax%20paper.jpg',
        'food storage bags': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20storage%20bags.jpg',
        'vacuum sealer': 'https://cdamemoryjogger.blob.core.windows.net/images/vaccum%20sealer.jpg',
        'food storage containers': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20storage%20containers.jpg',
        'glass containers': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20containers.jpg',
        'plastic containers': 'https://cdamemoryjogger.blob.core.windows.net/images/plastic%20containers.jpg',
        'spice jars': 'https://cdamemoryjogger.blob.core.windows.net/images/spice%20jars.jpg',
        'salt shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20shaker.jpg',
        'pepper shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20shaker.jpg',
        'salt grinder': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20grinder.jpg',
        'pepper grinder': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20grinder.webp',
        'oil bottle': 'https://cdamemoryjogger.blob.core.windows.net/images/oil%20bottle.jpg',
        'vinegar bottle': 'https://cdamemoryjogger.blob.core.windows.net/images/vinegar%20bottle.jpg',
        'sugar canister': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20canister.jpg',
        'flour canister': 'https://cdamemoryjogger.blob.core.windows.net/images/flour%20canister.jpg',
        'coffee canister': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20canister.jpg',
        'tea canister': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20canister.jpg',

        'bread box': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20box.jpg',
        'napkin holder': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20holder.jpg',
        'dish towels': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20towels.jpg',
        'hand towels': 'https://cdamemoryjogger.blob.core.windows.net/images/hand%20towels.jpg',
        'oven mitts': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20mitts.jpg',
        'pot holders': 'https://cdamemoryjogger.blob.core.windows.net/images/pot%20holders.jpg',
        'apron': 'https://cdamemoryjogger.blob.core.windows.net/images/apron.webp',
        'tablecloth': 'https://cdamemoryjogger.blob.core.windows.net/images/tablecloth.jpg',
        'placemats': 'https://cdamemoryjogger.blob.core.windows.net/images/placemats.jpg',
        'cloth napkins': 'https://cdamemoryjogger.blob.core.windows.net/images/cloth%20napkins.jpg',
        'kitchen rug': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20rug.jpg',
        'anti fatigue mat': 'https://cdamemoryjogger.blob.core.windows.net/images/anti%20fatigue%20mat.jpg',
        'wall clock': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20clock.jpg',
        'wall art': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20art.jpg',
        'bulletin board': 'https://cdamemoryjogger.blob.core.windows.net/images/bulletin%20board.jpg',
        'cookbook stand': 'https://cdamemoryjogger.blob.core.windows.net/images/cookbook%20stand.jpg',
        'cookbooks': 'https://cdamemoryjogger.blob.core.windows.net/images/cookbooks.jpg',
        'recipe box': 'https://cdamemoryjogger.blob.core.windows.net/images/recipe%20box.jpg',
        'tablet stand': 'https://cdamemoryjogger.blob.core.windows.net/images/tablet%20stand.jpg',
        'charging station': 'https://cdamemoryjogger.blob.core.windows.net/images/charging%20station.webp',
        'smart speaker': 'https://cdamemoryjogger.blob.core.windows.net/images/smart%20speaker.jpg',
        'television': 'https://cdamemoryjogger.blob.core.windows.net/images/television.jpg',
        'bar cart': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cart.jpg',
        'china cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet.jpg',
        'buffet table': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20table.jpg',
        'sideboard': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard.jpg',
        'dining table': 'https://cdamemoryjogger.blob.core.windows.net/images/dining%20table.jpg',
        'dining chairs': 'https://cdamemoryjogger.blob.core.windows.net/images/dining%20chairs.jpg',
        'serving tray': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20tray.jpg',
        'serving platter': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20platter.jpg',
        'serving bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20bowl.jpg',
        'gravy boat': 'https://cdamemoryjogger.blob.core.windows.net/images/gravy%20boat.jpg',
        'plate set': 'https://cdamemoryjogger.blob.core.windows.net/images/plate%20set.jpg',
        'salad plates': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20plates.jpg',
        'dinner plates': 'https://cdamemoryjogger.blob.core.windows.net/images/dinner%20plates.jpg',
        'bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/bowls.jpg',
        'cereal bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/cereal%20bowls.jpg',
        'soup bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/soup%20bowls.jpg',
        'mugs': 'https://cdamemoryjogger.blob.core.windows.net/images/mugs.jpg',
        'coffee cups': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20cups.jpg',

        'tea cups': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20cups.jpg',
        'saucers': 'https://cdamemoryjogger.blob.core.windows.net/images/saucers.jpg',
        'drinking glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/drinking%20glasses.jpg',
        'wine glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20glasses.jpg',
        'champagne flutes': 'https://cdamemoryjogger.blob.core.windows.net/images/champagne%20flutes.jpg',
        'cocktail glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20glasses.jpg',
        'shot glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/shot%20glasses.jpg',
        'water pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20pitcher.jpg',
        'ice bucket': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20bucket.jpg',
        'cake stand': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20stand.jpg',
        'tiered tray': 'https://cdamemoryjogger.blob.core.windows.net/images/tiered%20tray.jpg',
        'butter dish': 'https://cdamemoryjogger.blob.core.windows.net/images/butter%20dish.jpg',
        'sugar bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20bowl.jpg',
        'cream pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/cream%20pitcher.jpg',
        'utensil crock': 'https://cdamemoryjogger.blob.core.windows.net/images/utensil%20crock.jpg',
        'paper towel rolls': 'https://cdamemoryjogger.blob.core.windows.net/images/paper%20towel%20rolls.jpg',
        'dish soap': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20soap.jpg',
        'hand soap': 'https://cdamemoryjogger.blob.core.windows.net/images/hand%20soap.jpg',
        'cleaning spray': 'https://cdamemoryjogger.blob.core.windows.net/images/cleaning%20spray.jpg',
        'disinfecting wipes': 'https://cdamemoryjogger.blob.core.windows.net/images/disinfecting%20wipes.jpg',
        'sponges': 'https://cdamemoryjogger.blob.core.windows.net/images/sponges.jpg',
        'scrub brushes': 'https://cdamemoryjogger.blob.core.windows.net/images/scrub%20brushes.jpg',
        'dish brush': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20brush.jpg',
        'broom': 'https://cdamemoryjogger.blob.core.windows.net/images/broom.jpg',
        'dustpan': 'https://cdamemoryjogger.blob.core.windows.net/images/dustpan.jpg',
        'mop': 'https://cdamemoryjogger.blob.core.windows.net/images/mop.jpg',
        'mop bucket': 'https://cdamemoryjogger.blob.core.windows.net/images/mop%20bucket.jpg',
        'vacuum': 'https://cdamemoryjogger.blob.core.windows.net/images/vacuum.jpg',
        'steam mop': 'https://cdamemoryjogger.blob.core.windows.net/images/steam%20mop.jpg',
        'trash bags': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20bags.jpg',
        'recycling bags': 'https://cdamemoryjogger.blob.core.windows.net/images/recycling%20bags.jpg',
        'light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/images/light%20bulbs.jpg',
        'extension cord': 'https://cdamemoryjogger.blob.core.windows.net/images/extension%20cord.jpg',
        'power strip': 'https://cdamemoryjogger.blob.core.windows.net/images/power%20strip.jpg',
        'smoke detector': 'https://cdamemoryjogger.blob.core.windows.net/images/smoke%20detector.jpg',
        'carbon monoxide detector': 'https://cdamemoryjogger.blob.core.windows.net/images/carbon%20monoxide%20detector.jpg',
        'canned goods': 'https://cdamemoryjogger.blob.core.windows.net/images/canned%20goods.jpg',
        'dry pasta': 'https://cdamemoryjogger.blob.core.windows.net/images/dry%20pasta.jpg',
        'rice bags': 'https://cdamemoryjogger.blob.core.windows.net/images/rice%20bags.jpg',

        'flour bags': 'https://cdamemoryjogger.blob.core.windows.net/images/flour%20bags.jpg',
        'sugar bags': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20bags.jpg',
        'baking powder': 'https://cdamemoryjogger.blob.core.windows.net/images/baking%20powder.jpg',
        'baking soda': 'https://cdamemoryjogger.blob.core.windows.net/images/baking%20soda.jpg',
        'cornstarch': 'https://cdamemoryjogger.blob.core.windows.net/images/cornstarch.jpg',
        'cooking oil': 'https://cdamemoryjogger.blob.core.windows.net/images/cooking%20oil.jpg',
        'olive oil': 'https://cdamemoryjogger.blob.core.windows.net/images/olive%20oil.jpg',
        'vegetable oil': 'https://cdamemoryjogger.blob.core.windows.net/images/vegetable%20oil.jpg',
        'soy sauce': 'https://cdamemoryjogger.blob.core.windows.net/images/soy%20sauce.jpg',
        'hot sauce': 'https://cdamemoryjogger.blob.core.windows.net/images/hot%20sauce.jpg',
        'ketchup': 'https://cdamemoryjogger.blob.core.windows.net/images/ketchup.jpg',
        'mustard': 'https://cdamemoryjogger.blob.core.windows.net/images/mustard.jpg',
        'mayonnaise': 'https://cdamemoryjogger.blob.core.windows.net/images/mayonnaise.jpg',
        'salad dressing': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20dressing.jpg',
        'peanut butter': 'https://cdamemoryjogger.blob.core.windows.net/images/peanut%20butter.jpg',
        'jam': 'https://cdamemoryjogger.blob.core.windows.net/images/jam.jpg',
        'honey': 'https://cdamemoryjogger.blob.core.windows.net/images/honey.jpg',
        'cereal boxes': 'https://cdamemoryjogger.blob.core.windows.net/images/cereal%20boxes.jpg',
        'granola': 'https://cdamemoryjogger.blob.core.windows.net/images/granola.jpg',
        'oatmeal': 'https://cdamemoryjogger.blob.core.windows.net/images/oatmeal.jpg',
        'snack chips': 'https://cdamemoryjogger.blob.core.windows.net/images/snack%20chips.jpg',
        'crackers': 'https://cdamemoryjogger.blob.core.windows.net/images/crackers.jpg',
        'cookies': 'https://cdamemoryjogger.blob.core.windows.net/images/cookies.jpg',
        'nuts': 'https://cdamemoryjogger.blob.core.windows.net/images/nuts.jpg',
        'dried fruit': 'https://cdamemoryjogger.blob.core.windows.net/images/dried%20fruit.jpg',
        'spice containers': 'https://cdamemoryjogger.blob.core.windows.net/images/spice%20containers.jpg',
        'tea boxes': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20boxes.jpg',
        'coffee bags': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20bags.jpg',
        'paper plates': 'https://cdamemoryjogger.blob.core.windows.net/images/paper%20plates.jpg',
        'plastic cups': 'https://cdamemoryjogger.blob.core.windows.net/images/plastic%20cups.jpg',
        'plastic utensils': 'https://cdamemoryjogger.blob.core.windows.net/images/plastic%20utensils.jpg',
        'can rack': 'https://cdamemoryjogger.blob.core.windows.net/images/can%20rack.jpg',
        'rolling cart': 'https://cdamemoryjogger.blob.core.windows.net/images/rolling%20cart.jpg',
        'storage bins': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20bins.jpg',
        'label maker': 'https://cdamemoryjogger.blob.core.windows.net/images/label%20maker.jpg',
        'labels': 'https://cdamemoryjogger.blob.core.windows.net/images/labels.webp',
        'drawer liners': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20liners.jpg',
        'cabinet liners': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20liners.jpg',
        'sink caddy': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20caddy.jpg',
        'water bottles': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20bottles.jpg',
        'travel mugs': 'https://cdamemoryjogger.blob.core.windows.net/images/travel%20mugs.jpg',
        'thermos': 'https://cdamemoryjogger.blob.core.windows.net/images/thermos.jpg',
        'measuring scale': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20scale.jpg',
        'timer': 'https://cdamemoryjogger.blob.core.windows.net/images/timer.jpg',
        'oven thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20thermometer.jpg',
        'meat thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/meat%20thermometer.jpg',
        'grill thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/grill%20thermometer.jpg',
        'cooler': 'https://cdamemoryjogger.blob.core.windows.net/images/cooler.jpg',
        'ice packs': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20packs.jpg',
        'picnic basket': 'https://cdamemoryjogger.blob.core.windows.net/images/picnic%20basket.jpg',

        'serving tongs': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20tongs.jpg',
        'salad tongs': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20tongs.jpg',
        'cake server': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20server.jpg',
        'pie server': 'https://cdamemoryjogger.blob.core.windows.net/images/pie%20server.jpg',
        'ladle set': 'https://cdamemoryjogger.blob.core.windows.net/images/ladle%20set.jpg',
        'utensil set': 'https://cdamemoryjogger.blob.core.windows.net/images/utensil%20set.jpg',
        'mixing spoon set': 'https://cdamemoryjogger.blob.core.windows.net/images/mixing%20spoon%20set.jpg',
        'skillet lid': 'https://cdamemoryjogger.blob.core.windows.net/images/skillet%20lid.jpg',
        'stock pot lid': 'https://cdamemoryjogger.blob.core.windows.net/images/stock%20pot%20lid.jpg',
        'pressure cooker lid': 'https://cdamemoryjogger.blob.core.windows.net/images/pressure%20cooker%20lid.jpg',
        'slow cooker insert': 'https://cdamemoryjogger.blob.core.windows.net/images/slow%20cooker%20insert.jpg',
        'slow cooker lid': 'https://cdamemoryjogger.blob.core.windows.net/images/slow%20cooker%20lid.jpg',
        'air fryer basket': 'https://cdamemoryjogger.blob.core.windows.net/images/air%20fryer%20basket.jpg',
        'air fryer tray': 'https://cdamemoryjogger.blob.core.windows.net/images/air%20fryer%20tray.jpg',
        'microwave cover': 'https://cdamemoryjogger.blob.core.windows.net/images/microwave%20cover.jpg',
        'microwave rack': 'https://cdamemoryjogger.blob.core.windows.net/images/microwave%20rack.jpg',
        'dishwasher detergent': 'https://cdamemoryjogger.blob.core.windows.net/images/dishwasher%20detergent.jpg',
        'rinse aid': 'https://cdamemoryjogger.blob.core.windows.net/images/rinse%20aid.jpg',
        'garbage bags box': 'https://cdamemoryjogger.blob.core.windows.net/images/garbage%20bags%20box.jpg',
        'food clips': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20clips.jpg',
        'chip clips': 'https://cdamemoryjogger.blob.core.windows.net/images/chip%20clips.jpg',
        'bread ties': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20ties.jpg',
        'rolling pin': 'https://cdamemoryjogger.blob.core.windows.net/images/rolling%20pin.jpg',
        'pastry mat': 'https://cdamemoryjogger.blob.core.windows.net/images/pastry%20mat.jpg',
        'cookie cutters': 'https://cdamemoryjogger.blob.core.windows.net/images/cookie%20cutters.jpg',
        'decorating tips': 'https://cdamemoryjogger.blob.core.windows.net/images/decorating%20tips.jpg',
        'icing spatula': 'https://cdamemoryjogger.blob.core.windows.net/images/icing%20spatula.jpg',
        'cooling mat': 'https://cdamemoryjogger.blob.core.windows.net/images/cooling%20mat.jpg',
        'spice grinder': 'https://cdamemoryjogger.blob.core.windows.net/images/spice%20grinder.jpg',
        'mortar and pestle': 'https://cdamemoryjogger.blob.core.windows.net/images/mortar%20and%20pestle.jpg',
        'herb scissors': 'https://cdamemoryjogger.blob.core.windows.net/images/herb%20scissors.jpg',
        'oil sprayer': 'https://cdamemoryjogger.blob.core.windows.net/images/oil%20sprayer.jpg',
        'butcher block': 'https://cdamemoryjogger.blob.core.windows.net/images/butcher%20block.jpg',
        'knife magnet strip': 'https://cdamemoryjogger.blob.core.windows.net/images/knife%20magnet%20strip.jpg',
        'dish warmer': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20warmer.jpg',
        'warming drawer': 'https://cdamemoryjogger.blob.core.windows.net/images/warming%20drawer.jpg',
        'cabinet locks': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20locks.jpg',
        'child safety latches': 'https://cdamemoryjogger.blob.core.windows.net/images/child%20safety%20latches.jpg',
        'drawer slides': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20slides.jpg',
        'water filter pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20filter%20pitcher.jpg',
        'replacement filters': 'https://cdamemoryjogger.blob.core.windows.net/images/replacement%20filters.jpg',
        'ice trays': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20trays.jpg',
        'freezer bins': 'https://cdamemoryjogger.blob.core.windows.net/images/freezer%20bins.jpg',
        'freezer bags': 'https://cdamemoryjogger.blob.core.windows.net/images/freezer%20bags.jpg',
        'produce bins': 'https://cdamemoryjogger.blob.core.windows.net/images/produce%20bins.jpg',
        'egg holder': 'https://cdamemoryjogger.blob.core.windows.net/images/egg%20holder.jpg',
        'butter keeper': 'https://cdamemoryjogger.blob.core.windows.net/images/butter%20keeper.jpg',
        'condiment rack': 'https://cdamemoryjogger.blob.core.windows.net/images/condiment%20rack.jpg',

        'lazy susan turntable': 'https://cdamemoryjogger.blob.core.windows.net/images/lazy%20susan%20turntable.jpg',
        'under sink organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/under%20sink%20organizer.jpg',
        'pull out trash bin': 'https://cdamemoryjogger.blob.core.windows.net/images/pull%20out%20trash%20bin.jpg',
        'recycling container': 'https://cdamemoryjogger.blob.core.windows.net/images/recycling%20container.jpg',
        'compost pail': 'https://cdamemoryjogger.blob.core.windows.net/images/compost%20pail.jpg',
        'baking rack': 'https://cdamemoryjogger.blob.core.windows.net/images/baking%20rack.jpg',
        'sheet pan rack': 'https://cdamemoryjogger.blob.core.windows.net/images/sheet%20pan%20rack.jpg',
        'cooling shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/cooling%20shelf.jpg',
        'pan organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/pan%20organizer.jpg',
        'lid organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/lid%20organizer.jpg',
        'pot rack': 'https://cdamemoryjogger.blob.core.windows.net/images/pot%20rack.jpg',
        'hanging pot rack': 'https://cdamemoryjogger.blob.core.windows.net/images/hanging%20pot%20rack.jpg',
        'wine glass rack': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20glass%20rack.jpg',
        'mug tree': 'https://cdamemoryjogger.blob.core.windows.net/images/mug%20tree.jpg',
        'plate rack': 'https://cdamemoryjogger.blob.core.windows.net/images/plate%20rack.jpg',
        'drawer dividers': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20dividers.jpg',
        'silverware set': 'https://cdamemoryjogger.blob.core.windows.net/images/silverware%20set.jpg',
        'flatware set': 'https://cdamemoryjogger.blob.core.windows.net/images/flatware%20set.jpg',
        'steak knife set': 'https://cdamemoryjogger.blob.core.windows.net/images/steak%20knife%20set.jpg',
        'serving fork': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20fork.jpg',
        'serving ladle': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20ladle.jpg',
        'slotted turner': 'https://cdamemoryjogger.blob.core.windows.net/images/slotted%20turner.jpg',
        'solid turner': 'https://cdamemoryjogger.blob.core.windows.net/images/solid%20turner.jpg',
        'skimmer': 'https://cdamemoryjogger.blob.core.windows.net/images/skimmer.jpg',
        'straining spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/straining%20spoon.jpg',
        'pancake spatula': 'https://cdamemoryjogger.blob.core.windows.net/images/pancake%20spatula.jpg',
        'fish spatula': 'https://cdamemoryjogger.blob.core.windows.net/images/fish%20spatula.jpg',
        'pizza cutter': 'https://cdamemoryjogger.blob.core.windows.net/images/pizza%20cutter.jpg',
        'canister set': 'https://cdamemoryjogger.blob.core.windows.net/images/canister%20set.jpg',
        'utensil holder': 'https://cdamemoryjogger.blob.core.windows.net/images/utensil%20holder.jpg',
        'knife case': 'https://cdamemoryjogger.blob.core.windows.net/images/knife%20case.jpg',
        'appliance covers': 'https://cdamemoryjogger.blob.core.windows.net/images/appliance%20covers.jpg',
        'refrigerator magnets': 'https://cdamemoryjogger.blob.core.windows.net/images/refrigerator%20magnets.jpg',
        'calendar': 'https://cdamemoryjogger.blob.core.windows.net/images/calendar.jpg',
        'message board': 'https://cdamemoryjogger.blob.core.windows.net/images/message%20board.jpg',
        'key holder': 'https://cdamemoryjogger.blob.core.windows.net/images/key%20holder.jpg',
        'storage jars': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20jars.jpg',
        'cookie jar': 'https://cdamemoryjogger.blob.core.windows.net/images/cookie%20jar.jpg',
        'utility scissors': 'https://cdamemoryjogger.blob.core.windows.net/images/utility%20scissors.jpg',
        'kitchen flashlight': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20flashlight.jpg',
        'backup refrigerator': 'https://cdamemoryjogger.blob.core.windows.net/images/backup%20refrigerator.jpg',
        'mini fridge': 'https://cdamemoryjogger.blob.core.windows.net/images/mini%20fridge.jpg',
        'deep freezer': 'https://cdamemoryjogger.blob.core.windows.net/images/deep%20freezer.jpg',
        'gas range': 'https://cdamemoryjogger.blob.core.windows.net/images/gas%20range.jpg',
        'electric range': 'https://cdamemoryjogger.blob.core.windows.net/images/electric%20range.jpg',
        'induction cooktop': 'https://cdamemoryjogger.blob.core.windows.net/images/induction%20cooktop.jpg',
        'double wall oven': 'https://cdamemoryjogger.blob.core.windows.net/images/double%20wall%20oven.jpg',
        'trash compactor': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20compactor.jpg',
        'wine fridge': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20fridge.jpg',
        'beverage cooler': 'https://cdamemoryjogger.blob.core.windows.net/images/beverage%20cooler.jpg',

        'kegerator': 'https://cdamemoryjogger.blob.core.windows.net/images/kegerator.jpg',
        'coffee urn': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20urn.jpg',
        'water boiler': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20boiler.jpg',
        'countertop mixer': 'https://cdamemoryjogger.blob.core.windows.net/images/countertop%20mixer.jpg',
        'immersion circulator': 'https://cdamemoryjogger.blob.core.windows.net/images/immersion%20circulator.jpg',
        'food dehydrator': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20dehydrator.jpg',
        'meat slicer': 'https://cdamemoryjogger.blob.core.windows.net/images/meat%20slicer.jpg',
        'pasta maker': 'https://cdamemoryjogger.blob.core.windows.net/images/pasta%20maker.jpg',
        'grain mill': 'https://cdamemoryjogger.blob.core.windows.net/images/grain%20mill.jpg',
        'electric can opener': 'https://cdamemoryjogger.blob.core.windows.net/images/electric%20can%20opener.jpg',
        'jar opener': 'https://cdamemoryjogger.blob.core.windows.net/images/jar%20opener.jpg',
        'cleaver': 'https://cdamemoryjogger.blob.core.windows.net/images/cleaver.jpg',
        'fillet knife': 'https://cdamemoryjogger.blob.core.windows.net/images/fillet%20knife.jpg',
        'boning knife': 'https://cdamemoryjogger.blob.core.windows.net/images/boning%20knife.jpg',
        'carving fork': 'https://cdamemoryjogger.blob.core.windows.net/images/carving%20fork.jpg',
        'kitchen mallet': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20mallet.jpg',
        'sauce whisk': 'https://cdamemoryjogger.blob.core.windows.net/images/sauce%20whisk.jpg',
        'balloon whisk': 'https://cdamemoryjogger.blob.core.windows.net/images/balloon%20whisk.jpg',
        'dough scraper': 'https://cdamemoryjogger.blob.core.windows.net/images/dough%20scraper.jpg',
        'bench scraper': 'https://cdamemoryjogger.blob.core.windows.net/images/bench%20scraper.jpg',
        'pastry brush': 'https://cdamemoryjogger.blob.core.windows.net/images/pastry%20brush.jpg',
        'pastry blender': 'https://cdamemoryjogger.blob.core.windows.net/images/pastry%20blender.jpg',
        'baking molds': 'https://cdamemoryjogger.blob.core.windows.net/images/baking%20molds.jpg',
        'souffle dish': 'https://cdamemoryjogger.blob.core.windows.net/images/souffle%20dish.jpg',
        'ramekins': 'https://cdamemoryjogger.blob.core.windows.net/images/ramekins.jpg',
        'custard cups': 'https://cdamemoryjogger.blob.core.windows.net/images/custard%20cups.jpg',
        'measuring jug': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20jug.jpg',
        'probe thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/probe%20thermometer.jpg',
        'timer clock': 'https://cdamemoryjogger.blob.core.windows.net/images/timer%20clock.jpg',
        'under cabinet radio': 'https://cdamemoryjogger.blob.core.windows.net/images/under%20cabinet%20radio.jpg',
        'security camera': 'https://cdamemoryjogger.blob.core.windows.net/images/security%20camera.jpg',
        'smart display': 'https://cdamemoryjogger.blob.core.windows.net/images/smart%20display.jpg',
        'floor mat': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20mat.jpg',
        'area rug': 'https://cdamemoryjogger.blob.core.windows.net/images/area%20rug.jpg',
        'pantry door rack': 'https://cdamemoryjogger.blob.core.windows.net/images/pantry%20door%20rack.jpg',
        'over door organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/over%20door%20organizer.jpg',
        'storage baskets': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20baskets.jpg',
        'wire baskets': 'https://cdamemoryjogger.blob.core.windows.net/images/wire%20baskets.jpg',
        'plastic bins': 'https://cdamemoryjogger.blob.core.windows.net/images/plastic%20bins.jpg',
        'glass jars': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20jars.jpg',
        'spice tins': 'https://cdamemoryjogger.blob.core.windows.net/images/spice%20tins.jpg',
        'tea kettle': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20kettle.jpg',
        'whistling kettle': 'https://cdamemoryjogger.blob.core.windows.net/images/whistling%20kettle.jpg',
        'coffee mugs set': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20mugs%20set.jpg',

        'water carafe': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20carafe.jpg',
        'pitcher with lid': 'https://cdamemoryjogger.blob.core.windows.net/images/pitcher%20with%20lid.jpg',
        'salad bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20bowl.jpg',
        'mixing pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/mixing%20pitcher.jpg',
        'batter bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/batter%20bowl.jpg',
        'sifter': 'https://cdamemoryjogger.blob.core.windows.net/images/sifter.jpg',
        'strainer set': 'https://cdamemoryjogger.blob.core.windows.net/images/strainer%20set.jpg',
        'colander set': 'https://cdamemoryjogger.blob.core.windows.net/images/colander%20set.jpg',
        'food mill': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20mill.jpg',
        'ricer': 'https://cdamemoryjogger.blob.core.windows.net/images/ricer.jpg',
        'egg slicer': 'https://cdamemoryjogger.blob.core.windows.net/images/egg%20slicer.jpg',
        'cheese slicer': 'https://cdamemoryjogger.blob.core.windows.net/images/cheese%20slicer.jpg',
        'canisters with lids': 'https://cdamemoryjogger.blob.core.windows.net/images/canisters%20with%20lids.jpg',
        'airtight containers': 'https://cdamemoryjogger.blob.core.windows.net/images/airtight%20containers.jpg',
        'bread basket': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20basket.jpg',
        'fruit bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/fruit%20bowl.jpg',
        'banana hanger': 'https://cdamemoryjogger.blob.core.windows.net/images/banana%20hanger.jpg',
        'napkin rings': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20rings.jpg',
        'table runner': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20runner.jpg',
        'chair cushions': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20cushions.jpg',
        'seat covers': 'https://cdamemoryjogger.blob.core.windows.net/images/seat%20covers.jpg',
        'high chair': 'https://cdamemoryjogger.blob.core.windows.net/images/high%20chair.jpg',
        'booster seat': 'https://cdamemoryjogger.blob.core.windows.net/images/booster%20seat.jpg',
        'pet food bin': 'https://cdamemoryjogger.blob.core.windows.net/images/pet%20food%20bin.jpg',
        'pet bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/pet%20bowls.jpg',
        'step trash can': 'https://cdamemoryjogger.blob.core.windows.net/images/step%20trash%20can.jpg',
        'touchless trash can': 'https://cdamemoryjogger.blob.core.windows.net/images/touchless%20trash%20can.jpg',
        'cabinet shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20shelf%20riser.jpg',
        'plate charger set': 'https://cdamemoryjogger.blob.core.windows.net/images/plate%20charger%20set.jpg',
        'cut resistant gloves': 'https://cdamemoryjogger.blob.core.windows.net/images/cut%20resistant%20gloves.jpg',
        'oven rack guards': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20rack%20guards.jpg',
        'sink drying rack': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20drying%20rack.jpg',
        'dish drainer tray': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20drainer%20tray.jpg',
        'kitchen storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20storage%20cabinet.jpg',
        'under sink mat': 'https://cdamemoryjogger.blob.core.windows.net/images/under%20sink%20mat.jpg',
        'sink organizer rack': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20organizer%20rack.jpg',
        'pull out cabinet organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/pull%20out%20cabinet%20organizer.jpg',
        'corner cabinet organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/corner%20cabinet%20organizer.jpg',
        'cabinet basket insert': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20basket%20insert.jpg',
        'stackable pantry bins': 'https://cdamemoryjogger.blob.core.windows.net/images/stackable%20pantry%20bins.jpg',
        'clear storage bins': 'https://cdamemoryjogger.blob.core.windows.net/images/clear%20storage%20bins.jpg',
        'food storage turntable': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20storage%20turntable.jpg',
        'pantry label set': 'https://cdamemoryjogger.blob.core.windows.net/images/pantry%20label%20set.jpg',

        'chalkboard labels': 'https://cdamemoryjogger.blob.core.windows.net/images/chalkboard%20labels.jpg',
        'nested mixing bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/nested%20mixing%20bowls.jpg',
        'collapsible colander': 'https://cdamemoryjogger.blob.core.windows.net/images/collapsible%20colander.jpg',
        'silicone baking mat': 'https://cdamemoryjogger.blob.core.windows.net/images/silicone%20baking%20mat.jpg',
        'silicone spatula set': 'https://cdamemoryjogger.blob.core.windows.net/images/silicone%20spatula%20set.jpg',
        'wooden utensil set': 'https://cdamemoryjogger.blob.core.windows.net/images/wooden%20utensil%20set.jpg',
        'spoon rest': 'https://cdamemoryjogger.blob.core.windows.net/images/spoon%20rest.jpg',
        'cookware organizer rack': 'https://cdamemoryjogger.blob.core.windows.net/images/cookware%20organizer%20rack.webp',
        'under cabinet mug hooks': 'https://cdamemoryjogger.blob.core.windows.net/images/under%20cabinet%20mug%20hooks.jpg',
        'hanging fruit basket': 'https://cdamemoryjogger.blob.core.windows.net/images/hanging%20fruit%20basket.jpg',
        'wall mounted spice rack': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20mounted%20spice%20rack.jpg',
        'countertop spice carousel': 'https://cdamemoryjogger.blob.core.windows.net/images/countertop%20spice%20carousel.jpg',
        'oil and vinegar cruet set': 'https://cdamemoryjogger.blob.core.windows.net/images/oil%20and%20vinegar%20cruet%20set.jpg',
        'salt cellar': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20cellar.jpg',
        'pepper mill': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20mill.jpg',
        'butter crock': 'https://cdamemoryjogger.blob.core.windows.net/images/butter%20crock.jpg',
        'bread slicing guide': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20slicing%20guide.jpg',
        'cake carrier': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20carrier.jpg',
        'pie carrier': 'https://cdamemoryjogger.blob.core.windows.net/images/pie%20carrier.jpg',
        'cupcake carrier': 'https://cdamemoryjogger.blob.core.windows.net/images/cupcake%20carrier.jpg',
        'thermal casserole carrier': 'https://cdamemoryjogger.blob.core.windows.net/images/thermal%20casserole%20carrier.jpg',
        'insulated food carrier': 'https://cdamemoryjogger.blob.core.windows.net/images/insulated%20food%20carrier.jpg',
        'serving caddy': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20caddy.jpg',
        'condiment caddy': 'https://cdamemoryjogger.blob.core.windows.net/images/condiment%20caddy.jpg',
        'picnic cooler': 'https://cdamemoryjogger.blob.core.windows.net/images/picnic%20cooler.jpg',
        'rolling cooler': 'https://cdamemoryjogger.blob.core.windows.net/images/rolling%20cooler.jpg',
        'ice chest': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20chest.jpg',
        'food storage jar set': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20storage%20jar%20set.jpg',
        'glass canister set': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20canister%20set.jpg',
        'ceramic canister set': 'https://cdamemoryjogger.blob.core.windows.net/images/ceramic%20canister%20set.jpg',
        'airtight cereal containers': 'https://cdamemoryjogger.blob.core.windows.net/images/airtight%20cereal%20containers.jpg',
        'flour storage bin': 'https://cdamemoryjogger.blob.core.windows.net/images/flour%20storage%20bin.jpg',
        'sugar storage bin': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20storage%20bin.jpg',
        'rice dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/rice%20dispenser.jpg',
        'pet food storage container': 'https://cdamemoryjogger.blob.core.windows.net/images/pet%20food%20storage%20container.jpg',
        'beverage dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/beverage%20dispenser.jpg',
        'drink dispenser stand': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20dispenser%20stand.jpg',
        'coffee pod holder': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20pod%20holder.jpg',
        'coffee pod drawer': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20pod%20drawer.jpg',

        'espresso tamper': 'https://cdamemoryjogger.blob.core.windows.net/images/espresso%20tamper.jpg',
        'milk frothing pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/milk%20frothing%20pitcher.jpg',
        'coffee knock box': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20knock%20box.jpg',
        'tea infuser': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20infuser.jpg',
        'tea kettle electric': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20kettle%20electric.jpg',
        'tea kettle stovetop': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20kettle%20stovetop.jpg',
        'refrigerator deodorizer': 'https://cdamemoryjogger.blob.core.windows.net/images/refrigerator%20deodorizer.jpg',
        'freezer thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/freezer%20thermometer.jpg',
        'pantry thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/pantry%20thermometer.jpg',
        'humidity absorber': 'https://cdamemoryjogger.blob.core.windows.net/images/humidity%20absorber.jpg',
        'food scale digital': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20scale%20digital.jpg',
        'kitchen timer digital': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20timer%20digital.jpg',
        'wall mounted timer': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20mounted%20timer.jpg',
        'clip on book light': 'https://cdamemoryjogger.blob.core.windows.net/images/clip%20on%20book%20light.jpg',
        'cookbook shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/cookbook%20shelf.jpg',
        'recipe binder': 'https://cdamemoryjogger.blob.core.windows.net/images/recipe%20binder.jpg',
        'tablet wall mount': 'https://cdamemoryjogger.blob.core.windows.net/images/tablet%20wall%20mount.jpg',
        'charging dock': 'https://cdamemoryjogger.blob.core.windows.net/images/charging%20dock.jpg',
        'surge protector': 'https://cdamemoryjogger.blob.core.windows.net/images/surge%20protector.jpg',
        'extension cord heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/images/extension%20cord%20heavy%20duty.jpg',
        'step stool folding': 'https://cdamemoryjogger.blob.core.windows.net/images/step%20stool%20folding.jpg',
        'rolling kitchen cart': 'https://cdamemoryjogger.blob.core.windows.net/images/rolling%20kitchen%20cart.jpg',
        'utility cart': 'https://cdamemoryjogger.blob.core.windows.net/images/utility%20cart.jpg',
        'bar serving cart': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20serving%20cart.jpg',
        'wine bottle opener set': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20bottle%20opener%20set.jpg',
        'wine aerator': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20aerator.jpg',
        'wine stopper set': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20stopper%20set.jpg',
        'champagne stopper': 'https://cdamemoryjogger.blob.core.windows.net/images/champagne%20stopper.jpg',
        'ice scoop': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20scoop.jpg',
        'bar spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20spoon.jpg',
        'cocktail shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20shaker.jpg',
        'cocktail strainer': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20strainer.jpg',
        'jigger': 'https://cdamemoryjogger.blob.core.windows.net/images/jigger.jpg',
        'mudler': 'https://cdamemoryjogger.blob.core.windows.net/images/mudler.jpg',
        'drink mixing glass': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20mixing%20glass.jpg',
        'gold flatware set': 'https://cdamemoryjogger.blob.core.windows.net/images/gold%20flatware%20set.jpg',
        'butter knives': 'https://cdamemoryjogger.blob.core.windows.net/images/butter%20knives.jpg',
        'seafood forks': 'https://cdamemoryjogger.blob.core.windows.net/images/seafood%20forks.jpg',
        'soup spoons': 'https://cdamemoryjogger.blob.core.windows.net/images/soup%20spoons.jpg',
        'dessert spoons': 'https://cdamemoryjogger.blob.core.windows.net/images/dessert%20spoons.jpg',
        'salad forks': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20forks.jpg',
        'dinner forks': 'https://cdamemoryjogger.blob.core.windows.net/images/dinner%20forks.jpg',
        'dinner knives': 'https://cdamemoryjogger.blob.core.windows.net/images/dinner%20knives.jpg',
        'teaspoons': 'https://cdamemoryjogger.blob.core.windows.net/images/teaspoons.jpg',
        'tablespoons': 'https://cdamemoryjogger.blob.core.windows.net/images/tablespoons.jpg',

        'steak knife block': 'https://cdamemoryjogger.blob.core.windows.net/images/steak%20knife%20block.jpg',
        'china dinner set': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20dinner%20set.jpg',
        'stoneware dinner set': 'https://cdamemoryjogger.blob.core.windows.net/images/stoneware%20dinner%20set.jpg',
        'porcelain dinner set': 'https://cdamemoryjogger.blob.core.windows.net/images/porcelain%20dinner%20set.jpg',
        'melamine plate set': 'https://cdamemoryjogger.blob.core.windows.net/images/melamine%20plate%20set.jpg',
        'glass salad bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20salad%20bowl.jpg',
        'wood salad bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/wood%20salad%20bowl.jpg',
        'ceramic serving bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/ceramic%20serving%20bowl.jpg',
        'pasta serving bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/pasta%20serving%20bowl.jpg',
        'mixing pitcher glass': 'https://cdamemoryjogger.blob.core.windows.net/images/mixing%20pitcher%20glass.jpg',
        'water goblets': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20goblets.jpg',
        'beer mugs': 'https://cdamemoryjogger.blob.core.windows.net/images/beer%20mugs.jpg',
        'pint glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/pint%20glasses.jpg',
        'highball glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/highball%20glasses.jpg',
        'lowball glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/lowball%20glasses.jpg',
        'martini glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/martini%20glasses.jpg',
        'whiskey glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/whiskey%20glasses.jpg',
        'decanter': 'https://cdamemoryjogger.blob.core.windows.net/images/decanter.jpg',
        'wine decanter': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20decanter.jpg',
        'carafe': 'https://cdamemoryjogger.blob.core.windows.net/images/carafe.jpg',
        'coffee carafe': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20carafe.jpg',
        'tea pot': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20pot.jpg',
        'gravy ladle': 'https://cdamemoryjogger.blob.core.windows.net/images/gravy%20ladle.jpg',
        'table centerpiece': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20centerpiece.jpg',
        'decorative tray': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20tray.jpg',
        'countertop tray': 'https://cdamemoryjogger.blob.core.windows.net/images/countertop%20tray.jpg',
        'fruit storage basket': 'https://cdamemoryjogger.blob.core.windows.net/images/fruit%20storage%20basket.jpg',
        'banana tree stand': 'https://cdamemoryjogger.blob.core.windows.net/images/banana%20tree%20stand.jpg',
        'dish soap dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20soap%20dispenser.jpg',
        'hand soap dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/hand%20soap%20dispenser.jpg',
        'cleaning caddy': 'https://cdamemoryjogger.blob.core.windows.net/images/cleaning%20caddy.jpg',
        'all purpose cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/all%20purpose%20cleaner.jpg',
        'glass cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20cleaner.jpg',
        'granite cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/granite%20cleaner.jpg',
        'wood cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/wood%20cleaner.jpg',
        'oven cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20cleaner.jpg',
        'dishwasher cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/dishwasher%20cleaner.jpg',
        'garbage disposal cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/garbage%20disposal%20cleaner.jpg',
        'drain cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/drain%20cleaner.jpg',
        'scrub sponges': 'https://cdamemoryjogger.blob.core.windows.net/images/scrub%20sponges.jpg',

        'heavy duty scrub pads': 'https://cdamemoryjogger.blob.core.windows.net/images/heavy%20duty%20scrub%20pads.jpg',
        'microfiber cloths': 'https://cdamemoryjogger.blob.core.windows.net/images/microfiber%20cloths.jpg',
        'cleaning rags': 'https://cdamemoryjogger.blob.core.windows.net/images/cleaning%20rags.jpg',
        'paper towel pack': 'https://cdamemoryjogger.blob.core.windows.net/images/paper%20towel%20pack.jpg',
        'trash bag box': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20bag%20box.jpg',
        'recycling bin liner': 'https://cdamemoryjogger.blob.core.windows.net/images/recycling%20bin%20liner.jpg',
        'compostable bags': 'https://cdamemoryjogger.blob.core.windows.net/images/compostable%20bags.jpg',
        'broom and dustpan set': 'https://cdamemoryjogger.blob.core.windows.net/images/broom%20and%20dustpan%20set.jpg',
        'push broom': 'https://cdamemoryjogger.blob.core.windows.net/images/push%20broom.jpg',
        'floor mop': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20mop.jpg',
        'spray mop': 'https://cdamemoryjogger.blob.core.windows.net/images/spray%20mop.jpg',
        'steam cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/steam%20cleaner.jpg',
        'handheld vacuum': 'https://cdamemoryjogger.blob.core.windows.net/images/handheld%20vacuum.jpg',
        'cordless vacuum': 'https://cdamemoryjogger.blob.core.windows.net/images/cordless%20vacuum.jpg',
        'floor sweeper': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20sweeper.jpg',
        'rubber gloves': 'https://cdamemoryjogger.blob.core.windows.net/images/rubber%20gloves.jpg',
        'cleaning brush set': 'https://cdamemoryjogger.blob.core.windows.net/images/cleaning%20brush%20set.jpg',
        'bottle brush': 'https://cdamemoryjogger.blob.core.windows.net/images/bottle%20brush.jpg',
        'straw cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/images/straw%20cleaning%20brush.jpg',
        'sink plunger': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20plunger.jpg',
        'drain snake': 'https://cdamemoryjogger.blob.core.windows.net/images/drain%20snake.jpg',
        'tool kit small': 'https://cdamemoryjogger.blob.core.windows.net/images/tool%20kit%20small.jpg',
        'screwdriver set': 'https://cdamemoryjogger.blob.core.windows.net/images/screwdriver%20set.jpg',
        'hammer': 'https://cdamemoryjogger.blob.core.windows.net/images/hammer.jpg',
        'measuring tape': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20tape.jpg',
        'level': 'https://cdamemoryjogger.blob.core.windows.net/images/level.jpg',
        'stud finder': 'https://cdamemoryjogger.blob.core.windows.net/images/stud%20finder.jpg',
        'wall anchors': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20anchors.jpg',
        'picture hanging kit': 'https://cdamemoryjogger.blob.core.windows.net/images/picture%20hanging%20kit.jpg',
        'light bulb pack': 'https://cdamemoryjogger.blob.core.windows.net/images/light%20bulb%20pack.jpg',
        'cabinet light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20light%20bulbs.jpg',
        'under cabinet light strip': 'https://cdamemoryjogger.blob.core.windows.net/images/under%20cabinet%20light%20strip.jpg',
        'motion sensor light': 'https://cdamemoryjogger.blob.core.windows.net/images/motion%20sensor%20light.jpg',
        'smoke alarm': 'https://cdamemoryjogger.blob.core.windows.net/images/smoke%20alarm.jpg',
        'carbon monoxide alarm': 'https://cdamemoryjogger.blob.core.windows.net/images/carbon%20monoxide%20alarm.jpg',
        'fire blanket': 'https://cdamemoryjogger.blob.core.windows.net/images/fire%20blanket.jpg',
        'first aid kit': 'https://cdamemoryjogger.blob.core.windows.net/images/first%20aid%20kit.jpg',
        'bulk food storage bucket': 'https://cdamemoryjogger.blob.core.windows.net/images/bulk%20food%20storage%20bucket.jpg',
        'emergency food supply kit': 'https://cdamemoryjogger.blob.core.windows.net/images/emergency%20food%20supply%20kit.jpg',
        'cooling ice packs': 'https://cdamemoryjogger.blob.core.windows.net/images/cooling%20ice%20packs.jpg',
        'water storage containers': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20storage%20containers.jpg',
        'folding chairs': 'https://cdamemoryjogger.blob.core.windows.net/images/folding%20chairs.jpg',
        'extra dining chairs': 'https://cdamemoryjogger.blob.core.windows.net/images/extra%20dining%20chairs.jpg',
        'bar stool cushions': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20stool%20cushions.jpg',
        'chair floor protectors': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20floor%20protectors.jpg',
        'table leaf insert': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leaf%20insert.jpg',
        'buffet warming trays': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20warming%20trays.jpg',
        'chafing dish set': 'https://cdamemoryjogger.blob.core.windows.net/images/chafing%20dish%20set.jpg',
        'fondue pot': 'https://cdamemoryjogger.blob.core.windows.net/images/fondue%20pot.jpg',
        'raclette grill': 'https://cdamemoryjogger.blob.core.windows.net/images/raclette%20grill.jpg',

        'portable butane stove': 'https://cdamemoryjogger.blob.core.windows.net/images/portable%20butane%20stove.jpg',
        'butane fuel canisters': 'https://cdamemoryjogger.blob.core.windows.net/images/butane%20fuel%20canisters.jpg',
        'propane torch': 'https://cdamemoryjogger.blob.core.windows.net/images/propane%20torch.jpg',
        'kitchen torch': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20torch.jpg',
        'smoker box': 'https://cdamemoryjogger.blob.core.windows.net/images/smoker%20box.jpg',
        'meat carving station': 'https://cdamemoryjogger.blob.core.windows.net/images/meat%20carving%20station.jpg',
        'electric knife': 'https://cdamemoryjogger.blob.core.windows.net/images/electric%20knife.jpg',
        'knife sharpening stone': 'https://cdamemoryjogger.blob.core.windows.net/images/knife%20sharpening%20stone.jpg',
        'knife honing rod': 'https://cdamemoryjogger.blob.core.windows.net/images/knife%20honing%20rod.jpg',
        'cast iron cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/cast%20iron%20cleaner.jpg',
        'cookware cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/cookware%20cleaner.jpg',
        'dish drying cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20drying%20cabinet.jpg',
        'over sink drying rack': 'https://cdamemoryjogger.blob.core.windows.net/images/over%20sink%20drying%20rack.jpg',
        'cabinet door organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20door%20organizer.jpg',
        'measuring conversion chart': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20conversion%20chart.jpg',
        'grocery bag holder': 'https://cdamemoryjogger.blob.core.windows.net/images/grocery%20bag%20holder.jpg',
        'reusable grocery bags': 'https://cdamemoryjogger.blob.core.windows.net/images/reusable%20grocery%20bags.jpg',
        'insulated grocery bags': 'https://cdamemoryjogger.blob.core.windows.net/images/insulated%20grocery%20bags.jpg',
        'cooler tote': 'https://cdamemoryjogger.blob.core.windows.net/images/cooler%20tote.jpg',
        'picnic tableware set': 'https://cdamemoryjogger.blob.core.windows.net/images/picnic%20tableware%20set.jpg',
        'plastic serving trays': 'https://cdamemoryjogger.blob.core.windows.net/images/plastic%20serving%20trays.jpg',
        'paper napkin pack': 'https://cdamemoryjogger.blob.core.windows.net/images/paper%20napkin%20pack.jpg',
        'cloth napkin rings': 'https://cdamemoryjogger.blob.core.windows.net/images/cloth%20napkin%20rings.jpg',
        'placemat set': 'https://cdamemoryjogger.blob.core.windows.net/images/placemat%20set.jpg',
        'table protector pad': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20protector%20pad.jpg',
        'kitchen wall mirror': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20wall%20mirror.jpg',
        'decorative wall shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20wall%20shelf.jpg',
        'command hooks': 'https://cdamemoryjogger.blob.core.windows.net/images/command%20hooks.jpg',
        'adhesive wall hooks': 'https://cdamemoryjogger.blob.core.windows.net/images/adhesive%20wall%20hooks.jpg',
        'drawer handle replacements': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20handle%20replacements.jpg',
        'cabinet hinge replacements': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20hinge%20replacements.jpg',
        'cabinet bumpers': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20bumpers.jpg',
        'door draft stopper': 'https://cdamemoryjogger.blob.core.windows.net/images/door%20draft%20stopper.jpg',
        'floor protector pads': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20protector%20pads.jpg',
        'appliance thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/appliance%20thermometer.jpg',
        'oven liner': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20liner.jpg',
        'stove burner covers': 'https://cdamemoryjogger.blob.core.windows.net/images/stove%20burner%20covers.jpg',
        'drip pans': 'https://cdamemoryjogger.blob.core.windows.net/images/drip%20pans.jpg',
        'range control knobs': 'https://cdamemoryjogger.blob.core.windows.net/images/range%20control%20knobs.jpg',
        'replacement oven rack': 'https://cdamemoryjogger.blob.core.windows.net/images/replacement%20oven%20rack.jpg',

        'refrigerator water line': 'https://cdamemoryjogger.blob.core.windows.net/images/refrigerator%20water%20line.jpg',
        'ice maker water line': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20maker%20water%20line.jpg',
        'appliance cleaning wipes': 'https://cdamemoryjogger.blob.core.windows.net/images/appliance%20cleaning%20wipes.jpg',
        'granite sealer': 'https://cdamemoryjogger.blob.core.windows.net/images/granite%20sealer.jpg',
        'cutting board oil': 'https://cdamemoryjogger.blob.core.windows.net/images/cutting%20board%20oil.jpg',
        'dish drying towel rack': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20drying%20towel%20rack.jpg',
        'sink splash guard': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20splash%20guard.jpg',
        'faucet aerator': 'https://cdamemoryjogger.blob.core.windows.net/images/faucet%20aerator.jpg',
        'replacement faucet cartridge': 'https://cdamemoryjogger.blob.core.windows.net/images/replacement%20faucet%20cartridge.jpg',
        'plumbing repair kit': 'https://cdamemoryjogger.blob.core.windows.net/images/plumbing%20repair%20kit.jpg',
        'pipe wrench': 'https://cdamemoryjogger.blob.core.windows.net/images/pipe%20wrench.jpg',
        'adjustable wrench': 'https://cdamemoryjogger.blob.core.windows.net/images/adjustable%20wrench.jpg',
        'allen wrench set': 'https://cdamemoryjogger.blob.core.windows.net/images/allen%20wrench%20set.jpg',
        'socket set': 'https://cdamemoryjogger.blob.core.windows.net/images/socket%20set.jpg',
        'cord organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/cord%20organizer.jpg',
        'appliance cord wrap': 'https://cdamemoryjogger.blob.core.windows.net/images/appliance%20cord%20wrap.jpg',
        'cabinet light remote': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20light%20remote.jpg',
        'battery pack': 'https://cdamemoryjogger.blob.core.windows.net/images/battery%20pack.jpg',
        'step stool small': 'https://cdamemoryjogger.blob.core.windows.net/images/step%20stool%20small.jpg',
        'rolling pantry cart': 'https://cdamemoryjogger.blob.core.windows.net/images/rolling%20pantry%20cart.jpg',
        'produce storage bags': 'https://cdamemoryjogger.blob.core.windows.net/images/produce%20storage%20bags.jpg',
        'herb keeper': 'https://cdamemoryjogger.blob.core.windows.net/images/herb%20keeper.jpg',
        'onion storage bin': 'https://cdamemoryjogger.blob.core.windows.net/images/onion%20storage%20bin.jpg',
        'potato storage bin': 'https://cdamemoryjogger.blob.core.windows.net/images/potato%20storage%20bin.jpg',
        'garlic keeper': 'https://cdamemoryjogger.blob.core.windows.net/images/garlic%20keeper.jpg',
        'bread proofing basket': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20proofing%20basket.jpg',
        'dough rolling mat': 'https://cdamemoryjogger.blob.core.windows.net/images/dough%20rolling%20mat.jpg',
        'pastry ring set': 'https://cdamemoryjogger.blob.core.windows.net/images/pastry%20ring%20set.jpg',
        'baking thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/baking%20thermometer.jpg',
        'oven mitt rack': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20mitt%20rack.jpg',
        'pot rack hooks': 'https://cdamemoryjogger.blob.core.windows.net/images/pot%20rack%20hooks.jpg',
        'under cabinet basket': 'https://cdamemoryjogger.blob.core.windows.net/images/under%20cabinet%20basket.jpg',
        'cabinet shelf dividers': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20shelf%20dividers.jpg',
        'kitchen drawer bin set': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20drawer%20bin%20set.jpg',
        'flatware tray expandable': 'https://cdamemoryjogger.blob.core.windows.net/images/flatware%20tray%20expandable.jpg',
        'knife guard set': 'https://cdamemoryjogger.blob.core.windows.net/images/knife%20guard%20set.jpg',
        'pan handle covers': 'https://cdamemoryjogger.blob.core.windows.net/images/pan%20handle%20covers.jpg',
        'microwave splatter cover': 'https://cdamemoryjogger.blob.core.windows.net/images/microwave%20splatter%20cover.jpg',
        'food cover dome': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20cover%20dome.jpg',
        'mesh food tent': 'https://cdamemoryjogger.blob.core.windows.net/images/mesh%20food%20tent.jpg',

        'condiment squeeze bottles': 'https://cdamemoryjogger.blob.core.windows.net/images/condiment%20squeeze%20bottles.jpg',
        'syrup dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/syrup%20dispenser.jpg',
        'honey dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/honey%20dispenser.jpg',
        'sugar dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20dispenser.jpg',
        'salt box': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20box.jpg',
        'pepper box': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20box.jpg',
        'kitchen scissors heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20scissors%20heavy%20duty.jpg',
        'kitchen twine': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20twine.jpg',
        'butcher paper roll': 'https://cdamemoryjogger.blob.core.windows.net/images/butcher%20paper%20roll.jpg',
        'freezer paper roll': 'https://cdamemoryjogger.blob.core.windows.net/images/freezer%20paper%20roll.jpg',
        'vacuum sealer rolls': 'https://cdamemoryjogger.blob.core.windows.net/images/vacuum%20sealer%20rolls.jpg',
        'storage lid organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20lid%20organizer.jpg',
        'pan protector pads': 'https://cdamemoryjogger.blob.core.windows.net/images/pan%20protector%20pads.jpg',
        'glass cooktop cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20cooktop%20cleaner.jpg',
        'cooktop scraper': 'https://cdamemoryjogger.blob.core.windows.net/images/cooktop%20scraper.jpg',
        'sink strainer basket': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20strainer%20basket.jpg',
        'garbage disposal splash guard': 'https://cdamemoryjogger.blob.core.windows.net/images/garbage%20disposal%20splash%20guard.jpg',
        'under sink storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/under%20sink%20storage%20shelf.jpg',
        'sink drain stopper': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20drain%20stopper.jpg',
        'dish drying clips': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20drying%20clips.jpg',
        'shelf risers': 'https://cdamemoryjogger.blob.core.windows.net/images/shelf%20risers.jpg',
        'stackable cooling racks': 'https://cdamemoryjogger.blob.core.windows.net/images/stackable%20cooling%20racks.jpg',
        'mixing bowl lids': 'https://cdamemoryjogger.blob.core.windows.net/images/mixing%20bowl%20lids.jpg',
        'collapsible storage bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/collapsible%20storage%20bowls.jpg',
        'measuring spoon leveler': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20spoon%20leveler.jpg',
        'kitchen scale analog': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20scale%20analog.jpg',
        'thermometer probe cover': 'https://cdamemoryjogger.blob.core.windows.net/images/thermometer%20probe%20cover.jpg',
        'timer magnetic': 'https://cdamemoryjogger.blob.core.windows.net/images/timer%20magnetic.jpg',
        'kitchen whiteboard': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20whiteboard.jpg',
        'magnetic grocery list pad': 'https://cdamemoryjogger.blob.core.windows.net/images/magnetic%20grocery%20list%20pad.jpg',
        'cookbook holder stand': 'https://cdamemoryjogger.blob.core.windows.net/images/cookbook%20holder%20stand.jpg',
        'tablet recipe stand': 'https://cdamemoryjogger.blob.core.windows.net/images/tablet%20recipe%20stand.jpg',
        'utensil hooks rail': 'https://cdamemoryjogger.blob.core.windows.net/images/utensil%20hooks%20rail.jpg',
        'under cabinet paper towel holder': 'https://cdamemoryjogger.blob.core.windows.net/images/under%20cabinet%20paper%20towel%20holder.jpg',
        'counter paper towel holder': 'https://cdamemoryjogger.blob.core.windows.net/images/counter%20paper%20towel%20holder.jpg',
        'dish sponge holder': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20sponge%20holder.jpg',
        'soap pump tray': 'https://cdamemoryjogger.blob.core.windows.net/images/soap%20pump%20tray.jpg',
        'sink brush holder': 'https://cdamemoryjogger.blob.core.windows.net/images/sink%20brush%20holder.jpg',
        'cleaning glove clips': 'https://cdamemoryjogger.blob.core.windows.net/images/cleaning%20glove%20clips.jpg',
        'broom holder wall mount': 'https://cdamemoryjogger.blob.core.windows.net/images/broom%20holder%20wall%20mount.jpg',

        'cleaning supply rack': 'https://cdamemoryjogger.blob.core.windows.net/images/cleaning%20supply%20rack.jpg',
        'trash can deodorizer': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20can%20deodorizer.jpg',
        'recycling sorter bins': 'https://cdamemoryjogger.blob.core.windows.net/images/recycling%20sorter%20bins.jpg',
        'compost filter replacements': 'https://cdamemoryjogger.blob.core.windows.net/images/compost%20filter%20replacements.jpg',
        'drawer freshener': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20freshener.jpg',
        'cabinet freshener': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20freshener.jpg',
        'air purifier small': 'https://cdamemoryjogger.blob.core.windows.net/images/air%20purifier%20small.jpg',
        'backup batteries': 'https://cdamemoryjogger.blob.core.windows.net/images/backup%20batteries.jpg',
        'surge protector strip': 'https://cdamemoryjogger.blob.core.windows.net/images/surge%20protector%20strip.jpg',
        'extension cord reel': 'https://cdamemoryjogger.blob.core.windows.net/images/extension%20cord%20reel.jpg',
        'folding step ladder large': 'https://cdamemoryjogger.blob.core.windows.net/images/folding%20step%20ladder%20large.jpg',
        'fire resistant safe': 'https://cdamemoryjogger.blob.core.windows.net/images/fire%20resistant%20safe.jpg',
        'document organizer box': 'https://cdamemoryjogger.blob.core.windows.net/images/document%20organizer%20box.jpg',
        'recipe storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/recipe%20storage%20box.jpg',
        'party serving bowl set': 'https://cdamemoryjogger.blob.core.windows.net/images/party%20serving%20bowl%20set.jpg',
        'buffet serving utensils': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20serving%20utensils.jpg',
        'warming tray electric': 'https://cdamemoryjogger.blob.core.windows.net/images/warming%20tray%20electric.jpg',
        'electric carving knife': 'https://cdamemoryjogger.blob.core.windows.net/images/electric%20carving%20knife.jpg',
        'cheese board': 'https://cdamemoryjogger.blob.core.windows.net/images/cheese%20board.jpg',
        'cheese knife set': 'https://cdamemoryjogger.blob.core.windows.net/images/cheese%20knife%20set.jpg',
        'charcuterie board': 'https://cdamemoryjogger.blob.core.windows.net/images/charcuterie%20board.jpg',
        'serving slate board': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20slate%20board.jpg',
        'cake decorating kit': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20decorating%20kit.jpg',
        'baking decorating kit': 'https://cdamemoryjogger.blob.core.windows.net/images/baking%20decorating%20kit.jpg',
        'silicone cupcake liners': 'https://cdamemoryjogger.blob.core.windows.net/images/silicone%20cupcake%20liners.jpg',
        'reusable baking cups': 'https://cdamemoryjogger.blob.core.windows.net/images/reusable%20baking%20cups.jpg',
        'oven thermometer analog': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20thermometer%20analog.jpg',
        'freezer thermometer analog': 'https://cdamemoryjogger.blob.core.windows.net/images/freezer%20thermometer%20analog.jpg',
        'cookie cooling tower': 'https://cdamemoryjogger.blob.core.windows.net/images/cookie%20cooling%20tower.jpg',
        'knife sharpening guide': 'https://cdamemoryjogger.blob.core.windows.net/images/knife%20sharpening%20guide.jpg',

        'cutting board stand': 'https://cdamemoryjogger.blob.core.windows.net/images/cutting%20board%20stand.jpg',
        'drawer knife organizer bamboo': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20knife%20organizer%20bamboo.jpg',
        'rolling pin marble': 'https://cdamemoryjogger.blob.core.windows.net/images/rolling%20pin%20marble.jpg',
        'rolling pin wood': 'https://cdamemoryjogger.blob.core.windows.net/images/rolling%20pin%20wood.jpg',
        'flour shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/flour%20shaker.jpg',
        'powdered sugar shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/powdered%20sugar%20shaker.jpg',
        'oil sprayer bottle': 'https://cdamemoryjogger.blob.core.windows.net/images/oil%20sprayer%20bottle.jpg',
        'vinegar cruet': 'https://cdamemoryjogger.blob.core.windows.net/images/vinegar%20cruet.jpg',
        'salad dressing shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20dressing%20shaker.jpg',
        'grill press': 'https://cdamemoryjogger.blob.core.windows.net/images/grill%20press.jpg',
        'panini weight': 'https://cdamemoryjogger.blob.core.windows.net/images/panini%20weight.jpg',
        'cast iron press': 'https://cdamemoryjogger.blob.core.windows.net/images/cast%20iron%20press.jpg',
        'bacon press': 'https://cdamemoryjogger.blob.core.windows.net/images/bacon%20press.jpg',
        'pot clip strainer': 'https://cdamemoryjogger.blob.core.windows.net/images/pot%20clip%20strainer.jpg',
        'collapsible funnel': 'https://cdamemoryjogger.blob.core.windows.net/images/collapsible%20funnel.jpg',
        'kitchen funnel set': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20funnel%20set.jpg',
        'measuring cup glass': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20cup%20glass.jpg',
        'measuring cup plastic': 'https://cdamemoryjogger.blob.core.windows.net/images/measuring%20cup%20plastic.jpg',
        'oven rack pull tool': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20rack%20pull%20tool.jpg',
        'produce wash bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/produce%20wash%20bowl.jpg',
        'vegetable scrub brush': 'https://cdamemoryjogger.blob.core.windows.net/images/vegetable%20scrub%20brush.jpg',
        'fruit corer tool': 'https://cdamemoryjogger.blob.core.windows.net/images/fruit%20corer%20tool.jpg',
        'avocado slicer': 'https://cdamemoryjogger.blob.core.windows.net/images/avocado%20slicer.jpg',
        'egg separator': 'https://cdamemoryjogger.blob.core.windows.net/images/egg%20separator.jpg',
        'egg poacher pan': 'https://cdamemoryjogger.blob.core.windows.net/images/egg%20poacher%20pan.jpg',
        'pancake ring set': 'https://cdamemoryjogger.blob.core.windows.net/images/pancake%20ring%20set.jpg',
        'waffle batter dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/waffle%20batter%20dispenser.jpg',
        'gravy separator': 'https://cdamemoryjogger.blob.core.windows.net/images/gravy%20separator.jpg',
        'fat separator cup': 'https://cdamemoryjogger.blob.core.windows.net/images/fat%20separator%20cup.jpg',
        'salad dressing mixer': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20dressing%20mixer.jpg',
        'herb stripping tool': 'https://cdamemoryjogger.blob.core.windows.net/images/herb%20stripping%20tool.jpg',
        'meat shredder claws': 'https://cdamemoryjogger.blob.core.windows.net/images/meat%20shredder%20claws.jpg',
        'taco holder stand': 'https://cdamemoryjogger.blob.core.windows.net/images/taco%20holder%20stand.jpg',
        'baking sheet rack': 'https://cdamemoryjogger.blob.core.windows.net/images/baking%20sheet%20rack.jpg',
        'spice measuring spoons': 'https://cdamemoryjogger.blob.core.windows.net/images/spice%20measuring%20spoons.jpg',
        'citrus reamer': 'https://cdamemoryjogger.blob.core.windows.net/images/citrus%20reamer.jpg',
        'garlic slicer': 'https://cdamemoryjogger.blob.core.windows.net/images/garlic%20slicer.jpg',
        'herb chopper': 'https://cdamemoryjogger.blob.core.windows.net/images/herb%20chopper.jpg',

        'plastic drawer bins': 'https://cdamemoryjogger.blob.core.windows.net/images/plastic%20drawer%20bins.jpg',
        'glass storage bottles': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20storage%20bottles.jpg',
        'kitchen storage crates': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20storage%20crates.jpg',
        'cabinet organizer bins': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20organizer%20bins.jpg',
        'refrigerator lock': 'https://cdamemoryjogger.blob.core.windows.net/images/refrigerator%20lock.jpg',
        'oven lock': 'https://cdamemoryjogger.blob.core.windows.net/images/oven%20lock.jpg',
        'cabinet child lock': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20child%20lock.jpg',
        'drawer child lock': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20child%20lock.jpg',
        'step trash liner refill': 'https://cdamemoryjogger.blob.core.windows.net/images/step%20trash%20liner%20refill.jpg',
        'odor absorber box': 'https://cdamemoryjogger.blob.core.windows.net/images/odor%20absorber%20box.jpg',
        'kitchen air freshener': 'https://cdamemoryjogger.blob.core.windows.net/images/kitchen%20air%20freshener.jpg',
        'dish drying cabinet rack': 'https://cdamemoryjogger.blob.core.windows.net/images/dish%20drying%20cabinet%20rack.jpg',
        'cutting mat flexible': 'https://cdamemoryjogger.blob.core.windows.net/images/cutting%20mat%20flexible.jpg',
      
        //living room
        'sofa': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa.jpg',
        'sectional sofa': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sectional%20sofa.jpg',
        'loveseat': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/loveseat.jpg',
        'accent chair': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/accent%20chair.jpg',
        'recliner chair': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/recliner%20chair.jpg',
        'power recliner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/power%20recliner.jpg',
        'ottoman': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ottoman.jpg',
        'storage ottoman': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20ottoman.jpg',
        'coffee table': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coffee%20table.jpg',
        'end table': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/end%20table.jpg',
        'side table': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/side%20table.jpg',
        'console table': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/console%20table.jpg',
        'sofa table': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa%20table.jpg',
        'media console': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/media%20console.jpg',
        'television stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/television%20stand.jpg',
        'entertainment center': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/entertainment%20center.jpg',
        'bookcase': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bookcase.jpg',
        'bookshelf': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bookshelf.jpg',
        'display cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/display%20cabinet.jpg',
        'curio cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curio%20cabinet.jpg',
        'china cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/china%20cabinet.jpg',
        'wall mounted shelves': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20mounted%20shelves.jpg',
        'floating shelves': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floating%20shelves.jpg',
        'corner shelf': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/corner%20shelf.jpg',
        'cabinet with doors': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cabinet%20with%20doors.jpg',
        'storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20cabinet.jpg',
        'drawer chest': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drawer%20chest.jpg',
        'accent cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/accent%20cabinet.jpg',
        'bar cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bar%20cabinet.jpg',
        'rolling bar cart': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/rolling%20bar%20cart.jpg',
        'television': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/television.jpg',
        'flat screen television': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/flat%20screen%20television.jpg',
        'smart television': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smart%20television.jpg',
        'streaming device': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/streaming%20device.jpg',
        'blu ray player': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/blu%20ray%20player.jpg',
        'dvd player': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dvd%20player.jpg',
        'sound bar': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sound%20bar.jpg',
        'subwoofer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/subwoofer.jpg',
        'surround sound speakers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/surround%20sound%20speakers.jpg',
        'speaker stands': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/speaker%20stands.jpg',
        'home theater receiver': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/home%20theater%20receiver.jpg',
        'gaming console': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/gaming%20console.jpg',
        'game controller': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20controller.jpg',
        'virtual reality headset': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/virtual%20reality%20headset.jpg',
        'cable box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cable%20box.jpg',
        'satellite receiver': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/satellite%20receiver.jpg',
        'media remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/media%20remote.jpg',
        'universal remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/universal%20remote.jpg',
        'remote control organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/remote%20control%20organizer.jpg',
        'router': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/router.jpg',

        'modem': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/modem.jpg',
        'wifi extender': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wifi%20extender.jpg',
        'smart speaker': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smart%20speaker.jpg',
        'floor lamp': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20lamp.jpg',
        'table lamp': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/table%20lamp.jpg',
        'lamp shade': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lamp%20shade.jpg',
        'light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/light%20bulbs.jpg',
        'ceiling light fixture': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ceiling%20light%20fixture.jpg',
        'ceiling fan': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ceiling%20fan.jpg',
        'fan remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fan%20remote.jpg',
        'area rug': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/area%20rug.jpg',
        'throw rug': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/throw%20rug.jpg',
        'rug pad': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/rug%20pad.jpg',
        'carpet runner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/carpet%20runner.jpg',
        'window curtains': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20curtains.jpg',
        'curtain rod': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curtain%20rod.jpg',
        'window blinds': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20blinds.jpg',
        'window shades': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20shades.jpg',
        'valance': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/valance.jpg',
        'curtain tie backs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curtain%20tie%20backs.jpg',
        'wall art': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20art.jpg',
        'framed artwork': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/framed%20artwork.jpg',
        'canvas art': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/canvas%20art.jpg',
        'wall mirror': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20mirror.jpg',
        'decorative mirror': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20mirror.jpg',
        'wall clock': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20clock.jpg',
        'picture frames': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/picture%20frames.jpg',
        'photo albums': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/photo%20albums.jpg',
        'decorative shelves': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20shelves.jpg',
        'wall sconces': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20sconces.jpg',
        'throw pillows': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/throw%20pillows.jpg',
        'decorative pillows': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20pillows.jpg',
        'seat cushions': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/seat%20cushions.jpg',
        'throw blankets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/throw%20blankets.jpg',
        'quilt': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/quilt.jpg',
        'afghan blanket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/afghan%20blanket.jpg',
        'floor cushions': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20cushions.jpg',
        'bean bag chair': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bean%20bag%20chair.jpg',
        'folding chair': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/folding%20chair.jpg',
        'stool': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/stool.jpg',
        'fireplace': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fireplace.jpg',
        'fireplace screen': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fireplace%20screen.jpg',
        'fireplace tools': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fireplace%20tools.jpg',
        'fireplace log holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fireplace%20log%20holder.jpg',
        'mantle decor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mantle%20decor.jpg',
        'mantle clock': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mantle%20clock.jpg',
        'candle holders': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/candle%20holders.jpg',
        'candles': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/candles.jpg',
        'lantern': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lantern.jpg',

        'indoor plant': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/indoor%20plant.jpg',
        'plant stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20stand.jpg',
        'planter pot': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/planter%20pot.jpg',
        'artificial plant': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/artificial%20plant.jpg',
        'floor vase': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20vase.jpg',
        'decorative vase': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20vase.jpg',
        'decorative bowl': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20bowl.jpg',
        'coffee table books': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coffee%20table%20books.jpg',
        'magazine rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/magazine%20rack.jpg',
        'magazines': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/magazines.jpg',
        'board games': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/board%20games.jpg',
        'card games': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/card%20games.jpg',
        'puzzle box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/puzzle%20box.jpg',
        'playing cards': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/playing%20cards.jpg',
        'remote batteries': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/remote%20batteries.jpg',
        'extension cord': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/extension%20cord.jpg',
        'power strip': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/power%20strip.jpg',
        'surge protector': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/surge%20protector.jpg',
        'charging station': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/charging%20station.jpg',
        'phone charger': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/phone%20charger.jpg',
        'tablet charger': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tablet%20charger.jpg',
        'laptop charger': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/laptop%20charger.jpg',
        'laptop': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/laptop.jpg',
        'tablet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tablet.jpg',
        'wireless headphones': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wireless%20headphones.jpg',
        'headphones': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/headphones.jpg',
        'bluetooth speaker': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bluetooth%20speaker.jpg',
        'cd collection': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cd%20collection.jpg',
        'dvd collection': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dvd%20collection.jpg',
        'game disc case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20disc%20case.jpg',
        'storage baskets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20baskets.jpg',
        'storage bins': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20bins.jpg',
        'blanket chest': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/blanket%20chest.jpg',
        'toy storage bin': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/toy%20storage%20bin.jpg',
        'toy chest': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/toy%20chest.jpg',
        'coat rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coat%20rack.jpg',
        'umbrella stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/umbrella%20stand.jpg',
        'entry bench': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/entry%20bench.jpg',
        'shoe rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shoe%20rack.jpg',
        'hall tree': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hall%20tree.jpg',
        'console mirror': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/console%20mirror.jpg',
        'accent table lamp': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/accent%20table%20lamp.jpg',
        'floor cushion': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20cushion.jpg',
        'window seat cushion': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20seat%20cushion.jpg',
        'curtain rings': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curtain%20rings.jpg',
        'curtain clips': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curtain%20clips.jpg',

        'air purifier': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20purifier.jpg',
        'humidifier': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/humidifier.jpg',
        'dehumidifier': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dehumidifier.jpg',
        'space heater': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/space%20heater.jpg',
        'tower fan': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tower%20fan.jpg',
        'standing fan': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/standing%20fan.jpg',
        'portable air conditioner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/portable%20air%20conditioner.jpg',
        'thermostat': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/thermostat.jpg',
        'security camera': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/security%20camera.jpg',
        'alarm panel': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/alarm%20panel.jpg',
        'door sensor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/door%20sensor.jpg',
        'motion sensor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/motion%20sensor.jpg',
        'smoke detector': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smoke%20detector.jpg',
        'carbon monoxide detector': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/carbon%20monoxide%20detector.jpg',
        'fire extinguisher': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fire%20extinguisher.jpg',
        'first aid kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/first%20aid%20kit.jpg',
        'tool kit small': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tool%20kit%20small.jpg',
        'screwdriver set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/screwdriver%20set.jpg',
        'hammer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hammer.jpg',
        'measuring tape': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/measuring%20tape.jpg',
        'wall hooks': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20hooks.jpg',
        'coat hooks': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coat%20hooks.jpg',
        'adhesive hooks': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/adhesive%20hooks.jpg',
        'command strips': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/command%20strips.jpg',
        'picture hanging kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/picture%20hanging%20kit.jpg',
        'wall anchors': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20anchors.jpg',
        'decorative tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20tray.jpg',
        'serving tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/serving%20tray.jpg',
        'drink coasters': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drink%20coasters.jpg',
        'coaster holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coaster%20holder.jpg',
        'barware set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/barware%20set.jpg',
        'wine glasses': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wine%20glasses.jpg',
        'cocktail glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20glasses.jpg',
        'drink pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20pitcher.jpg',
        'ice bucket': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20bucket.jpg',
        'bar tool set': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20tool%20set.jpg',
        'wine opener': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20opener.jpg',
        'wine rack': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20rack.jpg',
        'bottle stopper': 'https://cdamemoryjogger.blob.core.windows.net/images/bottle%20stopper.jpg',
        'liquor cabinet contents': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/liquor%20cabinet%20contents.jpg',
        'storage ottoman tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20ottoman%20tray.jpg',
        'furniture covers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/furniture%20covers.jpg',
        'slipcovers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/slipcovers.jpg',
        'fabric protector spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fabric%20protector%20spray.jpg',
        'lint roller': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lint%20roller.jpg',
        'hand vacuum': 'https://cdamemoryjogger.blob.core.windows.net/images/hand%20vacuum.jpg',
        'vacuum cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/vacuum%20cleaner.jpg',

        'carpet cleaner machine': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/carpet%20cleaner%20machine.jpg',
        'broom': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/broom.jpg',
        'dustpan': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dustpan.jpg',
        'floor mop': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20mop.jpg',
        'cleaning caddy': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cleaning%20caddy.jpg',
        'glass cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/glass%20cleaner.jpg',
        'all purpose cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/all%20purpose%20cleaner.jpg',
        'microfiber cloths': 'https://cdamemoryjogger.blob.core.windows.net/images/microfiber%20cloths.jpg',
        'paper towels': 'https://cdamemoryjogger.blob.core.windows.net/images/paper%20towels.jpg',
        'trash can': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20can.jpg',
        'recycling bin': 'https://cdamemoryjogger.blob.core.windows.net/images/recycling%20bin.jpg',
        'trash bags': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20bags.jpg',
        'drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20organizer.jpg',
        'cabinet shelf liner': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20shelf%20liner.jpg',
        'furniture polish': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/furniture%20polish.jpg',
        'wood cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wood%20cleaner.jpg',
        'fabric freshener spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fabric%20freshener%20spray.jpg',
        'air freshener': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20freshener.jpg',
        'scent diffuser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/scent%20diffuser.jpg',
        'essential oil diffuser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/essential%20oil%20diffuser.jpg',
        'sectional sofa cushions': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sectional%20sofa%20cushions.jpg',
        'sofa legs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa%20legs.jpg',
        'sofa accent pillows': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa%20accent%20pillows.jpg',
        'sofa throw blanket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa%20throw%20blanket.jpg',
        'loveseat cushions': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/loveseat%20cushions.jpg',
        'recliner remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/recliner%20remote.jpg',
        'recliner power cord': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/recliner%20power%20cord.jpg',
        'ottoman tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ottoman%20tray.jpg',
        'coffee table drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coffee%20table%20drawer%20organizer.jpg',
        'end table lamp': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/end%20table%20lamp.jpg',
        'side table decor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/side%20table%20decor.jpg',
        'console table decor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/console%20table%20decor.jpg',
        'media cabinet shelves': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/media%20cabinet%20shelves.jpg',
        'entertainment center drawers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/entertainment%20center%20drawers.jpg',
        'bookcase decor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bookcase%20decor.jpg',
        'display cabinet lighting': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/display%20cabinet%20lighting.jpg',
        'curio cabinet shelves': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curio%20cabinet%20shelves.jpg',
        'storage cabinet baskets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20cabinet%20baskets.jpg',
        'drawer chest liners': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drawer%20chest%20liners.jpg',
        'accent cabinet hardware': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/accent%20cabinet%20hardware.jpg',
        'bar cabinet glassware': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bar%20cabinet%20glassware.jpg',
        'bar cart wheels': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bar%20cart%20wheels.jpg',
        'television wall mount': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/television%20wall%20mount.jpg',
        'tv wall bracket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tv%20wall%20bracket.jpg',
        'streaming remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/streaming%20remote.jpg',
        'blu ray discs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/blu%20ray%20discs.jpg',
        'dvd storage rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dvd%20storage%20rack.jpg',
        'sound bar remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sound%20bar%20remote.jpg',
        'speaker cables': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/speaker%20cables.jpg',
        'receiver remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/receiver%20remote.jpg',

        'gaming headset': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/gaming%20headset.jpg',
        'gaming chair': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/gaming%20chair.jpg',
        'controller charging dock': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/controller%20charging%20dock.jpg',
        'vr controllers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/vr%20controllers.jpg',
        'cable management box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cable%20management%20box.jpg',
        'router stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/router%20stand.jpg',
        'modem cables': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/modem%20cables.jpg',
        'wifi booster': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wifi%20booster.jpg',
        'smart plug': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smart%20plug.jpg',
        'smart home hub': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smart%20home%20hub.jpg',
        'floor lamp bulbs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20lamp%20bulbs.jpg',
        'table lamp bulbs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/table%20lamp%20bulbs.jpg',
        'lamp finial': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lamp%20finial.jpg',
        'ceiling fan blades': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ceiling%20fan%20blades.jpg',
        'fan light kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fan%20light%20kit.jpg',
        'area rug cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/area%20rug%20cleaner.jpg',
        'rug corner grips': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/rug%20corner%20grips.jpg',
        'carpet stain remover': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/carpet%20stain%20remover.jpg',
        'window curtain rods': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20curtain%20rods.jpg',
        'curtain rod brackets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curtain%20rod%20brackets.jpg',
        'window shade pull': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20shade%20pull.jpg',
        'valance rod': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/valance%20rod.jpg',
        'wall art hooks': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20art%20hooks.jpg',
        'canvas hanging kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/canvas%20hanging%20kit.jpg',
        'mirror mounting kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mirror%20mounting%20kit.jpg',
        'clock batteries': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/clock%20batteries.jpg',
        'picture frame stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/picture%20frame%20stand.jpg',
        'photo storage box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/photo%20storage%20box.jpg',
        'decorative shelf brackets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20shelf%20brackets.jpg',
        'wall sconce bulbs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20sconce%20bulbs.jpg',
        'throw pillow inserts': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/throw%20pillow%20inserts.jpg',
        'pillow covers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/pillow%20covers.jpg',
        'seat cushion covers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/seat%20cushion%20covers.jpg',
        'blanket storage basket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/blanket%20storage%20basket.jpg',
        'quilt storage bag': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/quilt%20storage%20bag.jpg',
        'bean bag refill': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bean%20bag%20refill.jpg',
        'folding chair pads': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/folding%20chair%20pads.jpg',
        'stool cushion': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/stool%20cushion.jpg',
        'mantle garland': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mantle%20garland.jpg',
        'candle snuffer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/candle%20snuffer.jpg',
        'lantern candles': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lantern%20candles.jpg',
        'plant watering can': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20watering%20can.jpg',
        'plant fertilizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20fertilizer.jpg',
        'plant mister': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20mister.jpg',

        'artificial plant decor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/artificial%20plant%20decor.jpg',
        'vase filler stones': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/vase%20filler%20stones.jpg',
        'decorative bowl filler': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20bowl%20filler.jpg',
        'coffee table tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coffee%20table%20tray.jpg',
        'magazine holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/magazine%20holder.jpg',
        'board game organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/board%20game%20organizer.jpg',
        'card shuffler': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/card%20shuffler.jpg',
        'puzzle mat': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/puzzle%20mat.jpg',
        'battery storage box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/battery%20storage%20box.jpg',
        'extension cord reel': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/extension%20cord%20reel.jpg',
        'charging cable organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/charging%20cable%20organizer.jpg',
        'laptop stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/laptop%20stand.jpg',
        'tablet case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tablet%20case.jpg',
        'wireless headphone case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wireless%20headphone%20case.jpg',
        'cd storage case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cd%20storage%20case.jpg',
        'dvd binder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dvd%20binder.jpg',
        'game storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20storage%20shelf.jpg',
        'woven storage basket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/woven%20storage%20basket.jpg',
        'decorative storage trunk': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20storage%20trunk.jpg',
        'toy organizer bins': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/toy%20organizer%20bins.jpg',
        'coat hanger rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coat%20hanger%20rack.jpg',
        'umbrella holder tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/umbrella%20holder%20tray.jpg',
        'entry bench cushion': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/entry%20bench%20cushion.jpg',
        'shoe storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shoe%20storage%20cabinet.jpg',
        'hall tree hooks': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hall%20tree%20hooks.jpg',
        'console drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/console%20drawer%20liner.jpg',
        'accent lamp shade': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/accent%20lamp%20shade.jpg',
        'window seat throw pillow': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20seat%20throw%20pillow.jpg',
        'curtain tieback hooks': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curtain%20tieback%20hooks.jpg',
        'light switch cover': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/light%20switch%20cover.jpg',
        'air purifier filter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20purifier%20filter.jpg',
        'humidifier filter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/humidifier%20filter.jpg',
        'dehumidifier bucket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dehumidifier%20bucket.jpg',
        'space heater remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/space%20heater%20remote.jpg',
        'tower fan remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tower%20fan%20remote.jpg',
        'portable air conditioner hose': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/portable%20air%20conditioner%20hose.jpg',
        'thermostat cover': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/thermostat%20cover.jpg',
        'security camera mount': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/security%20camera%20mount.jpg',
        'alarm keypad': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/alarm%20keypad.jpg',
        'motion detector mount': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/motion%20detector%20mount.jpg',
        'smoke detector batteries': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smoke%20detector%20batteries.jpg',
        'carbon monoxide detector batteries': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/carbon%20monoxide%20detector%20batteries.jpg',
        'fire extinguisher bracket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fire%20extinguisher%20bracket.jpg',
        'first aid refill kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/first%20aid%20refill%20kit.jpg',
        'tool storage box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tool%20storage%20box.jpg',
        'measuring tape case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/measuring%20tape%20case.jpg',
        'wall hook rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20hook%20rack.jpg',
        'adhesive strip refills': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/adhesive%20strip%20refills.jpg',
        'picture wire': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/picture%20wire.jpg',

        'drink coaster set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drink%20coaster%20set.jpg',
        'coaster storage box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coaster%20storage%20box.jpg',
        'bar tool rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bar%20tool%20rack.jpg',
        'wine glass rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wine%20glass%20rack.jpg',
        'bottle opener': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bottle%20opener.jpg',
        'liquor decanter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/liquor%20decanter.jpg',
        'storage ottoman lid': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20ottoman%20lid.jpg',
        'furniture leg pads': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/furniture%20leg%20pads.jpg',
        'sofa arm tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa%20arm%20tray.jpg',
        'chair arm covers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/chair%20arm%20covers.jpg',
        'slipcover clips': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/slipcover%20clips.jpg',
        'fabric stain remover': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fabric%20stain%20remover.jpg',
        'lint brush': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lint%20brush.jpg',
        'handheld steamer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/handheld%20steamer.jpg',
        'upright vacuum': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/upright%20vacuum.jpg',
        'vacuum bags': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/vacuum%20bags.jpg',
        'carpet cleaning solution': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/carpet%20cleaning%20solution.jpg',
        'broom holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/broom%20holder.jpg',
        'mop bucket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mop%20bucket.jpg',
        'cleaning gloves': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cleaning%20gloves.jpg',
        'glass spray bottle': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/glass%20spray%20bottle.jpg',
        'multi surface wipes': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/multi%20surface%20wipes.jpg',
        'dusting wand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dusting%20wand.jpg',
        'paper towel holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/paper%20towel%20holder.jpg',
        'trash can liner refill': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/trash%20can%20liner%20refill.jpg',
        'wood polish cloth': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wood%20polish%20cloth.jpg',
        'fabric protector wipes': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fabric%20protector%20wipes.jpg',
        'air freshener refill': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20freshener%20refill.jpg',
        'essential oil set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/essential%20oil%20set.jpg',
        'scent diffuser reeds': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/scent%20diffuser%20reeds.jpg',
        'throw blanket storage bag': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/throw%20blanket%20storage%20bag.jpg',
        'decorative pillow basket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20pillow%20basket.jpg',
        'game console stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20console%20stand.jpg',
        'media shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/media%20shelf%20riser.jpg',
        'remote finder device': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/remote%20finder%20device.jpg',
        'smart bulb hub': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smart%20bulb%20hub.jpg',
        'bluetooth remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bluetooth%20remote.jpg',
        'decorative lantern set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20lantern%20set.jpg',
        'floor plant stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20plant%20stand.jpg',
        'plant drip tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20drip%20tray.jpg',

        'indoor tree planter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/indoor%20tree%20planter.jpg',
        'artificial tree decor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/artificial%20tree%20decor.jpg',
        'large decorative vase': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/large%20decorative%20vase.jpg',
        'ceramic decor bowl': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ceramic%20decor%20bowl.jpg',
        'magazine subscription box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/magazine%20subscription%20box.jpg',
        'board game storage rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/board%20game%20storage%20rack.jpg',
        'card deck holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/card%20deck%20holder.jpg',
        'puzzle storage box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/puzzle%20storage%20box.jpg',
        'charging dock station': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/charging%20dock%20station.jpg',
        'laptop storage sleeve': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/laptop%20storage%20sleeve.jpg',
        'tablet charging cable': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tablet%20charging%20cable.jpg',
        'headphone stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/headphone%20stand.jpg',
        'bluetooth speaker stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bluetooth%20speaker%20stand.jpg',
        'cd display rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cd%20display%20rack.jpg',
        'dvd display shelf': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dvd%20display%20shelf.jpg',
        'game console cooling fan': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20console%20cooling%20fan.jpg',
        'router cable organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/router%20cable%20organizer.jpg',
        'wifi signal booster': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wifi%20signal%20booster.jpg',
        'lamp timer switch': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lamp%20timer%20switch.jpg',
        'light bulb storage case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/light%20bulb%20storage%20case.jpg',
        'ceiling fan remote holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ceiling%20fan%20remote%20holder.jpg',
        'rug storage roll': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/rug%20storage%20roll.jpg',
        'window blind cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20blind%20cleaner.jpg',
        'curtain cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curtain%20cleaning%20brush.jpg',
        'art cleaning cloth': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/art%20cleaning%20cloth.jpg',
        'picture frame cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/picture%20frame%20cleaner.jpg',
        'mirror cleaning spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mirror%20cleaning%20spray.jpg',
        'wall decor stencil': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20decor%20stencil.jpg',
        'candle storage box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/candle%20storage%20box.jpg',
        'plant care kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20care%20kit.jpg',
        'decorative stone set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20stone%20set.jpg',
        'coffee table organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coffee%20table%20organizer.jpg',
        'magazine subscription rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/magazine%20subscription%20rack.jpg',
        'game night storage box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20night%20storage%20box.jpg',
        'battery organizer case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/battery%20organizer%20case.jpg',
        'cord management clips': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cord%20management%20clips.jpg',
        'charging hub': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/charging%20hub.jpg',
        'laptop cooling pad': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/laptop%20cooling%20pad.jpg',
        'tablet keyboard': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tablet%20keyboard.jpg',
        'wireless mouse': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wireless%20mouse.jpg',
        'headphone extension cable': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/headphone%20extension%20cable.jpg',
        'bluetooth transmitter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bluetooth%20transmitter.jpg',
        'cd cleaner kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cd%20cleaner%20kit.jpg',
        'dvd cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dvd%20cleaning%20kit.jpg',
        'game controller skins': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20controller%20skins.jpg',

        'entryway rug': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/entryway%20rug.jpg',
        'shoe polish kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shoe%20polish%20kit.jpg',
        'hallway bench': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hallway%20bench.jpg',
        'hallway storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hallway%20storage%20cabinet.jpg',
        'accent table decor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/accent%20table%20decor.jpg',
        'floor lamp dimmer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20lamp%20dimmer.jpg',
        'table lamp timer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/table%20lamp%20timer.jpg',
        'window draft stopper': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20draft%20stopper.jpg',
        'curtain blackout liner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curtain%20blackout%20liner.jpg',
        'decorative curtain rod ends': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20curtain%20rod%20ends.jpg',
        'air purifier replacement filter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20purifier%20replacement%20filter.jpg',
        'humidifier cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/humidifier%20cleaning%20kit.jpg',
        'security camera cable': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/security%20camera%20cable.jpg',
        'alarm system battery': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/alarm%20system%20battery.jpg',
        'motion sensor battery': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/motion%20sensor%20battery.jpg',
        'sofa side caddy': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa%20side%20caddy.jpg',
        'sofa cup holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa%20cup%20holder.jpg',
        'recliner cup holder insert': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/recliner%20cup%20holder%20insert.jpg',
        'ottoman storage divider': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ottoman%20storage%20divider.jpg',
        'coffee table leg protectors': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coffee%20table%20leg%20protectors.jpg',
        'end table drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/end%20table%20drawer%20liner.jpg',
        'console cable grommet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/console%20cable%20grommet.jpg',
        'media console cable ties': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/media%20console%20cable%20ties.jpg',
        'bookcase bookends': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bookcase%20bookends.jpg',
        'display cabinet locks': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/display%20cabinet%20locks.jpg',
        'curio cabinet light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/curio%20cabinet%20light%20bulbs.jpg',
        'storage cabinet shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20cabinet%20shelf%20riser.jpg',
        'drawer chest organizers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drawer%20chest%20organizers.jpg',

        'media remote holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/media%20remote%20holder.jpg',
        'router backup battery': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/router%20backup%20battery.jpg',
        'modem power adapter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/modem%20power%20adapter.jpg',
        'wifi extender cable': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wifi%20extender%20cable.jpg',
        'smart speaker stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smart%20speaker%20stand.jpg',
        'floor lamp base weight': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20lamp%20base%20weight.jpg',
        'table lamp harp': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/table%20lamp%20harp.jpg',
        'lamp shade finial': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lamp%20shade%20finial.jpg',
        'fan blade cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fan%20blade%20cleaner.jpg',
        'area rug corner tape': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/area%20rug%20corner%20tape.jpg',
        'rug cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/rug%20cleaning%20brush.jpg',
        'carpet deodorizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/carpet%20deodorizer.jpg',
        'window curtain rings': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/window%20curtain%20rings.jpg',
        'mirror hanging wire': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mirror%20hanging%20wire.jpg',
        'clock wall hook': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/clock%20wall%20hook.jpg',
        'picture mat boards': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/picture%20mat%20boards.jpg',
        'photo frame glass': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/photo%20frame%20glass.jpg',
        'decorative shelf anchors': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20shelf%20anchors.jpg',
        'wall sconce shades': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20sconce%20shades.jpg',
        'throw pillow storage bag': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/throw%20pillow%20storage%20bag.jpg',
        'decorative pillow inserts': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20pillow%20inserts.jpg',
        'seat cushion foam insert': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/seat%20cushion%20foam%20insert.jpg',
        'throw blanket ladder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/throw%20blanket%20ladder.jpg',
        'quilt hanger rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/quilt%20hanger%20rack.jpg',
        'bean bag chair cover': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bean%20bag%20chair%20cover.jpg',
        'folding chair storage rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/folding%20chair%20storage%20rack.jpg',
        'stool leg caps': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/stool%20leg%20caps.jpg',
        'fireplace mantel shelf': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fireplace%20mantel%20shelf.jpg',
        'fireplace ash vacuum': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fireplace%20ash%20vacuum.jpg',
        'log storage rack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/log%20storage%20rack.jpg',
        'fireplace bellows': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fireplace%20bellows.jpg',
        'mantle decor garland lights': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mantle%20decor%20garland%20lights.jpg',
        'candle lighter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/candle%20lighter.jpg',
        'lantern hanger': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lantern%20hanger.jpg',
        'plant soil bag': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20soil%20bag.jpg',
        'plant pruning shears': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20pruning%20shears.jpg',
        'plant support stakes': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20support%20stakes.jpg',
        'artificial plant cleaner spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/artificial%20plant%20cleaner%20spray.jpg',
        'floor vase filler sticks': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20vase%20filler%20sticks.jpg',
        'decorative tray liner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20tray%20liner.jpg',

        'magazine file holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/magazine%20file%20holder.jpg',
        'board game pieces organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/board%20game%20pieces%20organizer.jpg',
        'card game storage tin': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/card%20game%20storage%20tin.jpg',
        'puzzle sorter trays': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/puzzle%20sorter%20trays.jpg',
        'battery tester': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/battery%20tester.jpg',
        'extension cord splitter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/extension%20cord%20splitter.jpg',
        'charging cable box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/charging%20cable%20box.jpg',
        'laptop docking station': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/laptop%20docking%20station.jpg',
        'tablet stylus': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tablet%20stylus.jpg',
        'wireless headphone charger': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wireless%20headphone%20charger.jpg',
        'cd storage tower': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cd%20storage%20tower.jpg',
        'dvd storage case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dvd%20storage%20case.jpg',
        'game controller case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20controller%20case.jpg',
        'storage basket liner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20basket%20liner.jpg',
        'decorative box set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20box%20set.jpg',
        'toy storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/toy%20storage%20shelf.jpg',
        'coat rack wall mount': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/coat%20rack%20wall%20mount.jpg',
        'umbrella drip tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/umbrella%20drip%20tray.jpg',
        'entry bench storage bin': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/entry%20bench%20storage%20bin.jpg',
        'shoe rack bench': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shoe%20rack%20bench.jpg',
        'hall tree basket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hall%20tree%20basket.jpg',
        'console mirror mounting kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/console%20mirror%20mounting%20kit.jpg',
        'space heater filter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/space%20heater%20filter.jpg',
        'tower fan replacement base': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tower%20fan%20replacement%20base.jpg',
        'portable air conditioner window kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/portable%20air%20conditioner%20window%20kit.jpg',
        'thermostat wall plate': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/thermostat%20wall%20plate.jpg',
        'security camera memory card': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/security%20camera%20memory%20card.jpg',
        'alarm sensor battery': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/alarm%20sensor%20battery.jpg',
        'door sensor adhesive': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/door%20sensor%20adhesive.jpg',
        'motion sensor bracket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/motion%20sensor%20bracket.jpg',
        'fire extinguisher cabinet': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fire%20extinguisher%20cabinet.jpg',
        'first aid supply box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/first%20aid%20supply%20box.jpg',
        'tool organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tool%20organizer%20tray.jpg',
        'screwdriver magnetic holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/screwdriver%20magnetic%20holder.jpg',
        'hammer storage hook': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hammer%20storage%20hook.jpg',
        'measuring tape clip': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/measuring%20tape%20clip.jpg',
        'wall hook adhesive pads': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20hook%20adhesive%20pads.jpg',
        'command hook refills': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/command%20hook%20refills.jpg',
        'picture frame wire': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/picture%20frame%20wire.jpg',

        'barware storage box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/barware%20storage%20box.jpg',
        'wine glass polishing cloth': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wine%20glass%20polishing%20cloth.jpg',
        'cocktail shaker strainer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cocktail%20shaker%20strainer.jpg',
        'drink pitcher lid': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drink%20pitcher%20lid.jpg',
        'ice bucket tongs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ice%20bucket%20tongs.jpg',
        'bar tool organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bar%20tool%20organizer.jpg',
        'wine cork holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wine%20cork%20holder.jpg',
        'liquor bottle pourers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/liquor%20bottle%20pourers.jpg',
        'storage ottoman hinges': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/storage%20ottoman%20hinges.jpg',
        'furniture scratch repair kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/furniture%20scratch%20repair%20kit.jpg',
        'sofa leg risers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/sofa%20leg%20risers.jpg',
        'chair floor protectors': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/chair%20floor%20protectors.jpg',
        'slipcover straps': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/slipcover%20straps.jpg',
        'fabric cleaner spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fabric%20cleaner%20spray.jpg',
        'lint remover brush': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lint%20remover%20brush.jpg',
        'handheld vacuum filter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/handheld%20vacuum%20filter.jpg',
        'mop replacement head': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mop%20replacement%20head.jpg',
        'cleaning spray bottles': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cleaning%20spray%20bottles.jpg',
        'all purpose cleaning wipes': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/all%20purpose%20cleaning%20wipes.jpg',
        'dusting cloth set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dusting%20cloth%20set.jpg',
        'paper towel dispenser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/paper%20towel%20dispenser.jpg',
        'trash can deodorizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/trash%20can%20deodorizer.jpg',
        'recycling bin labels': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/recycling%20bin%20labels.jpg',
        'drawer organizer bins': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drawer%20organizer%20bins.jpg',
        'cabinet shelf baskets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cabinet%20shelf%20baskets.jpg',
        'wood furniture polish': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wood%20furniture%20polish.jpg',
        'fabric freshener beads': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/fabric%20freshener%20beads.jpg',
        'air freshener plug in': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20freshener%20plug%20in.jpg',
        'game console cables': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/game%20console%20cables.jpg',
        'media shelf bracket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/media%20shelf%20bracket.jpg',
        'remote control batteries': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/remote%20control%20batteries.jpg',
        'smart bulb remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smart%20bulb%20remote.jpg',
        'bluetooth speaker charger': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bluetooth%20speaker%20charger.jpg',
        'wall mounted display case': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20mounted%20display%20case.jpg',
        'floating shelf brackets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floating%20shelf%20brackets.jpg',
        'decorative lantern candles': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20lantern%20candles.jpg',
        'floor plant grow light': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/floor%20plant%20grow%20light.jpg',
        'plant watering globe': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20watering%20globe.jpg',

        'indoor planter liner': 'https://cdamemoryjogger.blob.core.windows.net/images/indoor%20planter%20liner.jpg',
        'artificial tree stand': 'https://cdamemoryjogger.blob.core.windows.net/images/artificial%20tree%20stand.jpg',
        'large floor vase filler': 'https://cdamemoryjogger.blob.core.windows.net/images/large%20floor%20vase%20filler.jpg',
        'ceramic bowl decor set': 'https://cdamemoryjogger.blob.core.windows.net/images/ceramic%20bowl%20decor%20set.jpg',
        'magazine display rack': 'https://cdamemoryjogger.blob.core.windows.net/images/magazine%20display%20rack.jpg',
        'board game shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/board%20game%20shelf.jpg',
        'card game binder': 'https://cdamemoryjogger.blob.core.windows.net/images/card%20game%20binder.jpg',
        'puzzle storage bag': 'https://cdamemoryjogger.blob.core.windows.net/images/puzzle%20storage%20bag.jpg',
        'charging cable station': 'https://cdamemoryjogger.blob.core.windows.net/images/charging%20cable%20station.jpg',
        'laptop backpack': 'https://cdamemoryjogger.blob.core.windows.net/images/laptop%20backpack.jpg',
        'tablet sleeve': 'https://cdamemoryjogger.blob.core.windows.net/images/tablet%20sleeve.jpg',
        'headphone wall hook': 'https://cdamemoryjogger.blob.core.windows.net/images/headphone%20wall%20hook.jpg',
        'bluetooth speaker case': 'https://cdamemoryjogger.blob.core.windows.net/images/bluetooth%20speaker%20case.jpg',
        'cd binder case': 'https://cdamemoryjogger.blob.core.windows.net/images/cd%20binder%20case.jpg',
        'light bulb organizer box': 'https://cdamemoryjogger.blob.core.windows.net/images/light%20bulb%20organizer%20box.jpg',
        'ceiling fan balancing kit': 'https://cdamemoryjogger.blob.core.windows.net/images/ceiling%20fan%20balancing%20kit.jpg',
        'mirror polish cloth': 'https://cdamemoryjogger.blob.core.windows.net/images/mirror%20polish%20cloth.jpg',
        'wall decor hooks': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20decor%20hooks.jpg',
        'candle storage tray': 'https://cdamemoryjogger.blob.core.windows.net/images/candle%20storage%20tray.jpg',
        'plant fertilizer spikes': 'https://cdamemoryjogger.blob.core.windows.net/images/plant%20fertilizer%20spikes.jpg',
        'decorative stone bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20stone%20bowl.jpg',
        'coffee table storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20table%20storage%20box.jpg',
        'magazine file bin': 'https://cdamemoryjogger.blob.core.windows.net/images/magazine%20file%20bin.jpg',
        'game storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/game%20storage%20cabinet.jpg',

        'shoe rack organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/shoe%20rack%20organizer.jpg',
        'shoe rack stackable': 'https://cdamemoryjogger.blob.core.windows.net/images/shoe%20rack%20stackable.jpg',
        'shoe storage organizer box': 'https://cdamemoryjogger.blob.core.windows.net/images/shoe%20storage%20organizer%20box.jpg',
        'coat rack freestanding': 'https://cdamemoryjogger.blob.core.windows.net/images/coat%20rack%20freestanding.jpg',
        'umbrella holder stand': 'https://cdamemoryjogger.blob.core.windows.net/images/umbrella%20holder%20stand.jpg',
        'umbrella rack tray': 'https://cdamemoryjogger.blob.core.windows.net/images/umbrella%20rack%20tray.jpg',
        'hall tree storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/hall%20tree%20storage%20shelf.jpg',
        'accent decor sculpture': 'https://cdamemoryjogger.blob.core.windows.net/images/accent%20decor%20sculpture.jpg',
        'accent decor bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/accent%20decor%20bowl.jpg',
        'decorative bowl set': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20bowl%20set.jpg',
        'decorative stone tray': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20stone%20tray.jpg',
        'decorative tray storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20tray%20storage%20box.jpg',
        'floor protector mat': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20protector%20mat.jpg',
        'area rug cleaning spray': 'https://cdamemoryjogger.blob.core.windows.net/images/area%20rug%20cleaning%20spray.jpg',
        'rug storage bag': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20storage%20bag.jpg',
        'rug gripper pads': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20gripper%20pads.jpg',
        'carpet padding': 'https://cdamemoryjogger.blob.core.windows.net/images/carpet%20padding.jpg',
        'rug cleaning machine solution': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20cleaning%20machine%20solution.jpg',
        'wifi extender wall plate': 'https://cdamemoryjogger.blob.core.windows.net/images/wifi%20extender%20wall%20plate.jpg',
        'smart speaker cable': 'https://cdamemoryjogger.blob.core.windows.net/images/smart%20speaker%20cable.jpg',
        'bluetooth speaker dock': 'https://cdamemoryjogger.blob.core.windows.net/images/bluetooth%20speaker%20dock.jpg',
        'bluetooth audio adapter': 'https://cdamemoryjogger.blob.core.windows.net/images/bluetooth%20audio%20adapter.jpg',
        'wireless headphone stand': 'https://cdamemoryjogger.blob.core.windows.net/images/wireless%20headphone%20stand.jpg',
        'headphone amplifier': 'https://cdamemoryjogger.blob.core.windows.net/images/headphone%20amplifier.jpg',
        'headphone storage case': 'https://cdamemoryjogger.blob.core.windows.net/images/headphone%20storage%20case.jpg',
        'laptop carrying case': 'https://cdamemoryjogger.blob.core.windows.net/images/laptop%20carrying%20case.jpg',
        'laptop desk tray': 'https://cdamemoryjogger.blob.core.windows.net/images/laptop%20desk%20tray.jpg',

        'essential oil storage case': 'https://cdamemoryjogger.blob.core.windows.net/images/essential%20oil%20storage%20case.jpg',
        'fabric stain remover wipes': 'https://cdamemoryjogger.blob.core.windows.net/images/fabric%20stain%20remover%20wipes.jpg',
        'handheld vacuum charger': 'https://cdamemoryjogger.blob.core.windows.net/images/handheld%20vacuum%20charger.jpg',
        'upright vacuum filter': 'https://cdamemoryjogger.blob.core.windows.net/images/upright%20vacuum%20filter.jpg',
        'vacuum cleaner attachments': 'https://cdamemoryjogger.blob.core.windows.net/images/vacuum%20cleaner%20attachments.jpg',
        'carpet cleaner hose': 'https://cdamemoryjogger.blob.core.windows.net/images/carpet%20cleaner%20hose.jpg',
        'broom replacement handle': 'https://cdamemoryjogger.blob.core.windows.net/images/broom%20replacement%20handle.png',
        'mop bucket wringer': 'https://cdamemoryjogger.blob.core.windows.net/images/mop%20bucket%20wringer.jpg',
        'cleaning supply caddy large': 'https://cdamemoryjogger.blob.core.windows.net/images/cleaning%20supply%20caddy%20large.jpg',
        'dusting mitt': 'https://cdamemoryjogger.blob.core.windows.net/images/dusting%20mitt.jpg',
        'recycling bin divider': 'https://cdamemoryjogger.blob.core.windows.net/images/recycling%20bin%20divider.jpg',
        'drawer organizer expandable': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20organizer%20expandable.jpg',
        'decorative box organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20box%20organizer.jpg',
        'tool box large': 'https://cdamemoryjogger.blob.core.windows.net/images/tool%20box%20large.jpg',
        'tool box small': 'https://cdamemoryjogger.blob.core.windows.net/images/tool%20box%20small.jpg',
        'canvas stretcher kit': 'https://cdamemoryjogger.blob.core.windows.net/images/canvas%20stretcher%20kit.jpg',
        'photo album sleeves': 'https://cdamemoryjogger.blob.core.windows.net/images/photo%20album%20sleeves.jpg',
        'mirror adhesive strips': 'https://cdamemoryjogger.blob.core.windows.net/images/mirror%20adhesive%20strips.jpg',
        'mirror hanging kit': 'https://cdamemoryjogger.blob.core.windows.net/images/mirror%20hanging%20kit.jpg',
        'floor mirror frame': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20mirror%20frame.jpg',
        'clock replacement mechanism': 'https://cdamemoryjogger.blob.core.windows.net/images/clock%20replacement%20mechanism.jpg',
        'wall art cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20art%20cleaning%20brush.jpg',
        'plant soil scoop': 'https://cdamemoryjogger.blob.core.windows.net/images/plant%20soil%20scoop.jpg',
        'plant leaf shine spray': 'https://cdamemoryjogger.blob.core.windows.net/images/plant%20leaf%20shine%20spray.jpg',
        'plant care spray bottle': 'https://cdamemoryjogger.blob.core.windows.net/images/plant%20care%20spray%20bottle.jpg',
        'plant pot liner': 'https://cdamemoryjogger.blob.core.windows.net/images/plant%20pot%20liner.jpg',
        'artificial plant base': 'https://cdamemoryjogger.blob.core.windows.net/images/artificial%20plant%20base.jpg',
        'artificial tree planter': 'https://cdamemoryjogger.blob.core.windows.net/images/artificial%20tree%20planter.jpg',
        'floor plant basket': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20plant%20basket.jpg',
        'large vase decorative': 'https://cdamemoryjogger.blob.core.windows.net/images/large%20vase%20decorative.jpg',
        'floor vase cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20vase%20cleaning%20brush.jpg',
        'ceramic bowl centerpiece': 'https://cdamemoryjogger.blob.core.windows.net/images/ceramic%20bowl%20centerpiece.jpg',

        'security camera mount kit': 'https://cdamemoryjogger.blob.core.windows.net/images/security%20camera%20mount%20kit.jpg',
        'security camera mounting screws': 'https://cdamemoryjogger.blob.core.windows.net/images/security%20camera%20mounting%20screws.jpg',
        'security camera extension cable': 'https://cdamemoryjogger.blob.core.windows.net/images/security%20camera%20extension%20cable.jpg',
        'alarm system keypad cover': 'https://cdamemoryjogger.blob.core.windows.net/images/alarm%20system%20keypad%20cover.jpg',
        'alarm system motion sensor': 'https://cdamemoryjogger.blob.core.windows.net/images/alarm%20system%20motion%20sensor.jpg',
        'alarm system control panel': 'https://cdamemoryjogger.blob.core.windows.net/images/alarm%20system%20control%20panel.jpg',
        'motion sensor lens': 'https://cdamemoryjogger.blob.core.windows.net/images/motion%20sensor%20lens.jpg',
        'motion sensor adhesive pads': 'https://cdamemoryjogger.blob.core.windows.net/images/motion%20sensor%20adhesive%20pads.jpg',
        'motion sensor battery pack': 'https://cdamemoryjogger.blob.core.windows.net/images/motion%20sensor%20battery%20pack.jpg',
        'door sensor replacement': 'https://cdamemoryjogger.blob.core.windows.net/images/door%20sensor%20replacement.jpg',
        'air purifier cover': 'https://cdamemoryjogger.blob.core.windows.net/images/air%20purifier%20cover.jpg',



//bedroom

    'bed frame': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bed%20frame.jpg',
    'platform bed': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/platform%20bed.jpg',
    'canopy bed': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/canopy%20bed.jpg',
    'sleigh bed': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sleigh%20bed.jpg',
    'headboard': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/headboard.jpg',
    'upholstered headboard': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/upholstered%20headboard.jpg',
    'footboard': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/footboard.jpg',
    'bed rails': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bed%20rails.jpg',
    'bed slats': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bed%20slats.jpg',
    'box spring': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/box%20spring.jpg',
    'mattress': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/mattress.jpg',
    'mattress topper': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/mattress%20topper.jpg',
    'adjustable bed base': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/adjustable%20bed%20base.jpg',
    'bunk bed': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bunk%20bed.jpg',
    'trundle bed': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/trundle%20bed.jpg',
    'daybed': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/daybed.jpg',
    'murphy bed': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/murphy%20bed.jpg',
    'nightstand': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/nightstand.jpg',
    'nightstand pair': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/nightstand%20pair.jpg',
    'bedside table': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bedside%20table.jpg',
    'dresser': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dresser.jpg',
    'tall dresser': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tall%20dresser.jpg',
    'double dresser': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/double%20dresser.jpg',
    'chest of drawers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/chest%20of%20drawers.jpg',
    'lingerie chest': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/lingerie%20chest.jpg',
    'wardrobe armoire': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wardrobe%20armoire.jpg',
    'vanity table': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vanity%20table.jpg',
    'vanity stool': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vanity%20stool.jpg',
    'vanity chair': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vanity%20chair.jpg',
    'bedroom bench': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bedroom%20bench.jpg',
    'storage bench': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/storage%20bench.jpg',
    'end of bed bench': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/end%20of%20bed%20bench.jpg',
    'accent chair': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/accent%20chair.jpg',
    'reading chair': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/reading%20chair.jpg',
    'wingback chair': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wingback%20chair.jpg',
    'chaise lounge': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/chaise%20lounge.jpg',
    'ottoman': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/ottoman.jpg',
    'storage ottoman': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/storage%20ottoman.jpg',
    'bookshelf': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bookshelf.jpg',
    'bookcase': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bookcase.jpg',
    'bedroom desk': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bedroom%20desk.jpg',
    'writing desk': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/writing%20desk.jpg',
    'desk chair': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/desk%20chair.jpg',
    'full length mirror': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/full%20length%20mirror.jpg',
    'standing mirror': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/standing%20mirror.jpg',
    'dressing mirror': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dressing%20mirror.jpg',
    'cheval mirror': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cheval%20mirror.jpg',
    'media console': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/media%20console.jpg',
    'blanket chest': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/blanket%20chest.jpg',
    'cedar chest': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cedar%20chest.jpg',

    'trunk storage': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/trunk%20storage.jpg',
    'folding luggage rack': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/folding%20luggage%20rack.jpg',
    'jewelry armoire': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jewelry%20armoire.jpg',
    'corner shelf unit': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/corner%20shelf%20unit.jpg',
    'floating nightstand': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/floating%20nightstand.jpg',

    'fitted sheet': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/fitted%20sheet.jpg',
    'flat sheet': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/flat%20sheet.jpg',
    'sheet set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sheet%20set.jpg',
    'spare sheet set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/spare%20sheet%20set.jpg',
    'flannel sheets': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/flannel%20sheets.jpg',
    'satin sheets': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/satin%20sheets.jpg',
    'linen sheets': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/linen%20sheets.jpg',
    'pillowcases': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pillowcases.jpg',
    'silk pillowcases': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/silk%20pillowcases.jpg',
    'pillow shams': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pillow%20shams.jpg',
    'euro pillow shams': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/euro%20pillow%20shams.jpg',
    'quilted sham': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/quilted%20sham.jpg',
    'duvet': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/duvet.jpg',
    'duvet cover': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/duvet%20cover.jpg',
    'spare duvet cover': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/spare%20duvet%20cover.jpg',
    'comforter': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/comforter.jpg',
    'comforter set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/comforter%20set.jpg',
    'seasonal duvet insert': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/seasonal%20duvet%20insert.jpg',
    'quilt': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/quilt.jpg',
    'reversible quilt': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/reversible%20quilt.jpg',
    'coverlet': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/coverlet.jpg',
    'bedspread': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bedspread.jpg',
    'blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/blanket.jpg',
    'throw blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/throw%20blanket.jpg',
    'knit throw': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/knit%20throw.jpg',
    'weighted blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/weighted%20blanket.jpg',
    'electric blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/electric%20blanket.jpg',
    'heated blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/heated%20blanket.jpg',
    'wool blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wool%20blanket.jpg',
    'fleece blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/fleece%20blanket.jpg',
    'cashmere throw': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cashmere%20throw.jpg',
    'cotton blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cotton%20blanket.jpg',
    'spare blanket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/spare%20blanket.jpg',
    'mattress protector': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/mattress%20protector.jpg',
    'waterproof mattress protector': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/waterproof%20mattress%20protector.jpg',
    'mattress pad': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/mattress%20pad.jpg',
    'cooling mattress pad': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cooling%20mattress%20pad.jpg',
    'bed pillows': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bed%20pillows.jpg',
    'memory foam pillow': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/memory%20foam%20pillow.jpg',
    'cooling pillow': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cooling%20pillow.jpg',
    'down pillow': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/down%20pillow.jpg',
    'feather pillow': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/feather%20pillow.jpg',
    'body pillow': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/body%20pillow.jpg',
    'pregnancy pillow': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pregnancy%20pillow.jpg',
    'lumbar pillow': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/lumbar%20pillow.jpg',
    'decorative pillows': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/decorative%20pillows.jpg',
    'euro pillows': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/euro%20pillows.jpg',
    'bolster pillow': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bolster%20pillow.jpg',
    'pillow protector': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pillow%20protector.jpg',
    'bed skirt': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bed%20skirt.jpg',


    'dust ruffle': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dust%20ruffle.jpg',
    'throw pillow covers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/throw%20pillow%20covers.jpg',
    'spare pillowcases': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/spare%20pillowcases.jpg',

    'closet organizer system': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/closet%20organizer%20system.jpg',
    'hanging clothes organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hanging%20clothes%20organizer.jpg',
    'closet shelf divider': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/closet%20shelf%20divider.jpg',
    'double hang closet rod': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/double%20hang%20closet%20rod.jpg',
    'shoe rack': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/shoe%20rack.jpg',
    'shoe organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/shoe%20organizer.jpg',
    'rotating shoe rack': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/rotating%20shoe%20rack.jpg',
    'over door shoe holder': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/over%20door%20shoe%20holder.jpg',
    'hanging shoe bag': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hanging%20shoe%20bag.jpg',
    'clear shoe boxes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/clear%20shoe%20boxes.jpg',
    'storage bins': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/storage%20bins.jpg',
    'clear storage boxes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/clear%20storage%20boxes.jpg',
    'under bed storage box': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/under%20bed%20storage%20box.jpg',
    'under bed rolling drawer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/under%20bed%20rolling%20drawer.jpg',
    'under bed shoe organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/under%20bed%20shoe%20organizer.jpg',
    'vacuum storage bags': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vacuum%20storage%20bags.jpg',
    'garment bags': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/garment%20bags.jpg',
    'sweater storage box': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sweater%20storage%20box.jpg',
    'clothing storage bins': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/clothing%20storage%20bins.jpg',
    'fabric storage cubes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/fabric%20storage%20cubes.jpg',
    'closet drawer unit': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/closet%20drawer%20unit.jpg',
    'hat box': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hat%20box.jpg',
    'belt organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/belt%20organizer.jpg',
    'tie rack': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tie%20rack.jpg',
    'scarf organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/scarf%20organizer.jpg',
    'purse organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/purse%20organizer.jpg',
    'handbag shelf dividers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/handbag%20shelf%20dividers.jpg',
    'jewelry box': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jewelry%20box.jpg',
    'jewelry tray': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jewelry%20tray.jpg',
    'jewelry stand': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jewelry%20stand.jpg',
    'jewelry drawer insert': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jewelry%20drawer%20insert.jpg',
    'valet tray': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/valet%20tray.jpg',
    'drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/drawer%20organizer.jpg',
    'drawer dividers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/drawer%20dividers.jpg',
    'closet hooks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/closet%20hooks.jpg',
    'wall hooks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wall%20hooks.jpg',
    'adhesive hooks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/adhesive%20hooks.jpg',
    'hanging organizer shelves': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hanging%20organizer%20shelves.jpg',
    'rolling garment rack': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/rolling%20garment%20rack.jpg',
    'freestanding clothing rack': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/freestanding%20clothing%20rack.jpg',
    'laundry hamper': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/laundry%20hamper.jpg',
    'laundry basket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/laundry%20basket.jpg',
    'collapsible hamper': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/collapsible%20hamper.jpg',
    'sorting hamper': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sorting%20hamper.jpg',
    'double laundry hamper': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/double%20laundry%20hamper.jpg',
    'lint roller': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/lint%20roller.jpg',
    'wooden hangers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wooden%20hangers.jpg',
    'velvet hangers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/velvet%20hangers.jpg',
    'plastic hangers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/plastic%20hangers.jpg',
    'clip hangers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/clip%20hangers.jpg',
    'padded hangers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/padded%20hangers.jpg',
    'suit hangers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/suit%20hangers.jpg',
    'pants hangers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pants%20hangers.jpg',
    'cascading hangers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cascading%20hangers.jpg',
    'closet light battery': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/closet%20light%20battery.jpg',
    'closet dehumidifier': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/closet%20dehumidifier.jpg',
    'storage trunk': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/storage%20trunk.jpg',

    'shirts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/shirts.jpg',
    't shirts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/t%20shirts.jpg',
    'polo shirts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/polo%20shirts.jpg',
    'dress shirts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dress%20shirts.jpg',
    'flannel shirts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/flannel%20shirts.jpg',
    'blouses': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/blouses.jpg',
    'tank tops': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tank%20tops.jpg',
    'sweaters': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sweaters.jpg',
    'turtlenecks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/turtlenecks.jpg',
    'cardigans': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cardigans.jpg',
    'hoodies': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hoodies.jpg',
    'sweatshirts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sweatshirts.jpg',
    'jackets': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jackets.jpg',
    'denim jacket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/denim%20jacket.jpg',
    'leather jacket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/leather%20jacket.jpg',
    'blazers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/blazers.jpg',
    'sport coats': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sport%20coats.jpg',
    'coats': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/coats.jpg',
    'winter coat': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/winter%20coat.jpg',
    'wool coat': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wool%20coat.jpg',
    'raincoat': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/raincoat.jpg',
    'windbreaker': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/windbreaker.jpg',
    'vest': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vest.jpg',
    'pants': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pants.jpg',
    'chinos': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/chinos.jpg',
    'jeans': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jeans.jpg',
    'dress pants': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dress%20pants.jpg',
    'khakis': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/khakis.jpg',
    'shorts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/shorts.jpg',
    'cargo shorts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cargo%20shorts.jpg',
    'skirts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/skirts.jpg',
    'dresses': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dresses.jpg',
    'sundresses': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sundresses.jpg',
    'formal gowns': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/formal%20gowns.jpg',
    'suits': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/suits.jpg',
    'tuxedo': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tuxedo.jpg',
    'activewear': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/activewear.jpg',
    'leggings': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/leggings.jpg',
    'yoga pants': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/yoga%20pants.jpg',
    'sweatpants': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sweatpants.jpg',
    'pajamas': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pajamas.jpg',
    'nightgown': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/nightgown.jpg',
    'robe': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/robe.jpg',
    'bathrobe': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bathrobe.jpg',
    'loungewear': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/loungewear.jpg',
    'underwear': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/underwear.jpg',
    'boxers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/boxers.jpg',
    'socks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/socks.jpg',
    'dress socks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dress%20socks.jpg',
    'athletic socks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/athletic%20socks.jpg',

    'bras': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bras.jpg',
    'sports bras': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sports%20bras.jpg',
    'undershirts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/undershirts.jpg',
    'thermal underwear': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/thermal%20underwear.jpg',
    'belts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/belts.jpg',
    'leather belts': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/leather%20belts.jpg',
    'ties': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/ties.jpg',
    'bow ties': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bow%20ties.jpg',
    'scarves': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/scarves.jpg',
    'winter scarf': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/winter%20scarf.jpg',
    'gloves': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/gloves.jpg',
    'winter gloves': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/winter%20gloves.jpg',
    'hats': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hats.jpg',
    'baseball caps': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/baseball%20caps.jpg',
    'beanies': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/beanies.jpg',
    'shoes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/shoes.jpg',
    'dress shoes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dress%20shoes.jpg',
    'loafers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/loafers.jpg',
    'sneakers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sneakers.jpg',
    'running shoes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/running%20shoes.jpg',
    'boots': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/boots.jpg',
    'winter boots': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/winter%20boots.jpg',
    'hiking boots': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hiking%20boots.jpg',
    'sandals': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sandals.jpg',
    'flip flops': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/flip%20flops.jpg',
    'slippers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/slippers.jpg',
    'heels': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/heels.jpg',
    'flats': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/flats.jpg',
    'handbags': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/handbags.jpg',
    'clutch purses': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/clutch%20purses.jpg',
    'purses': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/purses.jpg',
    'backpacks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/backpacks.jpg',
    'duffel bags': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/duffel%20bags.jpg',
    'wallets': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wallets.jpg',
    'sunglasses': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sunglasses.jpg',
    'jewelry collection': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jewelry%20collection.jpg',
    'necklaces': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/necklaces.jpg',
    'bracelets': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bracelets.jpg',
    'earrings': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/earrings.jpg',
    'rings': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/rings.jpg',
    'watches': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/watches.jpg',
    'watch collection': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/watch%20collection.jpg',
    'cufflinks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cufflinks.jpg',
    'swimwear': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/swimwear.jpg',
    'swim trunks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/swim%20trunks.jpg',
    'workout clothes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/workout%20clothes.jpg',
    'uniforms': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/uniforms.jpg',
    'costumes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/costumes.jpg',
    'seasonal clothing': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/seasonal%20clothing.jpg',
    'formal accessories': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/formal%20accessories.jpg',

    'table lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/table%20lamp.jpg',
    'pair of table lamps': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pair%20of%20table%20lamps.jpg',
    'bedside lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bedside%20lamp.jpg',
    'floor lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/floor%20lamp.jpg',
    'reading lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/reading%20lamp.jpg',
    'desk lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/desk%20lamp.jpg',
    'arc lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/arc%20lamp.jpg',
    'tripod floor lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tripod%20floor%20lamp.jpg',
    'accent lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/accent%20lamp.jpg',
    'clip on book light': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/clip%20on%20book%20light.jpg',
    'string lights decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/string%20lights%20decorative.jpg',
    'LED light strip': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/LED%20light%20strip.jpg',
    'fairy lights': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/fairy%20lights.jpg',
    'night light': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/night%20light.jpg',
    'salt lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/salt%20lamp.jpg',
    'smart bulb': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/smart%20bulb.jpg',
    'color changing bulb': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/color%20changing%20bulb.jpg',
    'lamp shade': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/lamp%20shade.jpg',
    'spare lamp shade': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/spare%20lamp%20shade.jpg',
    'dimmer plug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dimmer%20plug.jpg',
    'touch lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/touch%20lamp.jpg',
    'battery candle set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/battery%20candle%20set.jpg',
    'flameless candles': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/flameless%20candles.jpg',
    'lantern decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/lantern%20decorative.jpg',
    'sunrise alarm lamp': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sunrise%20alarm%20lamp.jpg',
    'projector night light': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/projector%20night%20light.jpg',
    'sconce battery': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sconce%20battery.jpg',
    'under bed motion light': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/under%20bed%20motion%20light.jpg',

    'television bedroom': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/television%20bedroom.jpg',
    'tv wall bracket freestanding': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tv%20wall%20bracket%20freestanding.jpg',
    'tv stand': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tv%20stand.jpg',
    'streaming device': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/streaming%20device.jpg',
    'soundbar': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/soundbar.jpg',
    'bluetooth speaker': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bluetooth%20speaker.jpg',
    'portable speaker': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/portable%20speaker.jpg',
    'alarm clock': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/alarm%20clock.jpg',
    'smart speaker': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/smart%20speaker.jpg',
    'clock radio': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/clock%20radio.jpg',
    'charging station': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/charging%20station.jpg',
    'wireless charging pad': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wireless%20charging%20pad.jpg',
    'multi device charging dock': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/multi%20device%20charging%20dock.jpg',
    'phone dock': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/phone%20dock.jpg',
    'power strip': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/power%20strip.jpg',
    'surge protector': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/surge%20protector.jpg',
    'extension cord': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/extension%20cord.jpg',
    'usb wall charger': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/usb%20wall%20charger.jpg',
    'tablet': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tablet.jpg',
    'e reader': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/e%20reader.jpg',
    'laptop': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/laptop.jpg',
    'laptop stand': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/laptop%20stand.jpg',
    'headphones': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/headphones.jpg',
    'wireless earbuds': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wireless%20earbuds.jpg',
    'white noise machine': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/white%20noise%20machine.jpg',
    'sound machine': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sound%20machine.jpg',
    'air purifier': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/air%20purifier.jpg',
    'space heater': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/space%20heater.jpg',
    'box fan': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/box%20fan.jpg',
    'tower fan': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tower%20fan.jpg',
    'oscillating fan': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/oscillating%20fan.jpg',
    'ceiling fan remote': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/ceiling%20fan%20remote.jpg',
    'humidifier': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/humidifier.jpg',
    'dehumidifier portable': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dehumidifier%20portable.jpg',
    'smart home hub': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/smart%20home%20hub.jpg',
    'security camera': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/security%20camera.jpg',
    'baby monitor': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/baby%20monitor.jpg',
    'remote controls': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/remote%20controls.jpg',
    'universal remote': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/universal%20remote.jpg',
    'phone stand': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/phone%20stand.jpg',
    'gaming console': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/gaming%20console.jpg',
    'vr headset': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vr%20headset.jpg',
    'smart display': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/smart%20display.jpg',
    'cable organizer box': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cable%20organizer%20box.jpg',
    'battery backup': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/battery%20backup.jpg',

    'curtains': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/curtains.jpg',
    'curtain panels': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/curtain%20panels.jpg',
    'sheer curtains': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sheer%20curtains.jpg',
    'blackout curtains': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/blackout%20curtains.jpg',
    'thermal curtains': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/thermal%20curtains.jpg',
    'curtain tie backs': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/curtain%20tie%20backs.jpg',
    'curtain rod portable': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/curtain%20rod%20portable.jpg',
    'valance': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/valance.jpg',
    'swag valance': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/swag%20valance.jpg',
    'roman shades': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/roman%20shades.jpg',
    'roller shade': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/roller%20shade.jpg',
    'cellular shade': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cellular%20shade.jpg',
    'bamboo shade': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bamboo%20shade.jpg',
    'pleated shade': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pleated%20shade.jpg',
    'window film decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/window%20film%20decorative.jpg',
    'draft stopper': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/draft%20stopper.jpg',
    'window cushion': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/window%20cushion.jpg',
    'curtain holdbacks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/curtain%20holdbacks.jpg',
    'window scarf': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/window%20scarf.jpg',
    'privacy film': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/privacy%20film.jpg',

    'area rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/area%20rug.jpg',
    'large area rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/large%20area%20rug.jpg',
    'runner rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/runner%20rug.jpg',
    'accent rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/accent%20rug.jpg',
    'shag rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/shag%20rug.jpg',
    'wool rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wool%20rug.jpg',
    'rug pad': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/rug%20pad.jpg',
    'bedside rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bedside%20rug.jpg',
    'round rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/round%20rug.jpg',
    'sheepskin rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sheepskin%20rug.jpg',
    'door mat bedroom': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/door%20mat%20bedroom.jpg',
    'floor cushion': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/floor%20cushion.jpg',
    'floor pouf': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/floor%20pouf.jpg',
    'seagrass rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/seagrass%20rug.jpg',
    'jute rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jute%20rug.jpg',
    'washable rug': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/washable%20rug.jpg',

    'wall art': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wall%20art.jpg',
    'framed prints': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/framed%20prints.jpg',
    'canvas print': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/canvas%20print.jpg',
    'large canvas art': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/large%20canvas%20art.jpg',
    'gallery wall set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/gallery%20wall%20set.jpg',
    'metal wall art': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/metal%20wall%20art.jpg',
    'tapestry': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tapestry.jpg',
    'wall mirror': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wall%20mirror.jpg',
    'decorative mirror': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/decorative%20mirror.jpg',
    'sunburst mirror': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sunburst%20mirror.jpg',
    'wall clock': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wall%20clock.jpg',
    'wall shelf decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wall%20shelf%20decorative.jpg',
    'floating shelf decor': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/floating%20shelf%20decor.jpg',
    'picture frames': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/picture%20frames.jpg',
    'photo collage frame': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/photo%20collage%20frame.jpg',
    'tabletop photo frames': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tabletop%20photo%20frames.jpg',
    'decorative vase': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/decorative%20vase.jpg',
    'vase set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vase%20set.jpg',
    'faux plant': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/faux%20plant.jpg',
    'artificial plant': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/artificial%20plant.jpg',
    'plant pot decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/plant%20pot%20decorative.jpg',
    'hanging planter': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hanging%20planter.jpg',
    'candle holders': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/candle%20holders.jpg',
    'scented candles': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/scented%20candles.jpg',
    'pillar candles': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/pillar%20candles.jpg',
    'decorative tray': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/decorative%20tray.jpg',
    'trinket dish': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/trinket%20dish.jpg',
    'figurines': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/figurines.jpg',
    'sculptures decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sculptures%20decorative.jpg',
    'bookends': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bookends.jpg',
    'decorative bowl': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/decorative%20bowl.jpg',
    'dream catcher': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/dream%20catcher.jpg',
    'wall decals': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wall%20decals.jpg',
    'garland decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/garland%20decorative.jpg',
    'seasonal decor': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/seasonal%20decor.jpg',
    'accent pillows decor': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/accent%20pillows%20decor.jpg',
    'decorative basket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/decorative%20basket.jpg',
    'memory board': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/memory%20board.jpg',
    'cork board': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cork%20board.jpg',
    'string light frame': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/string%20light%20frame.jpg',
    'incense holder': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/incense%20holder.jpg',
    'decorative clock': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/decorative%20clock.jpg',
    'globe decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/globe%20decorative.jpg',
    'wall letters': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wall%20letters.jpg',
    'neon sign decorative': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/neon%20sign%20decorative.jpg',
   
    'vanity mirror lighted': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vanity%20mirror%20lighted.jpg',
    'makeup mirror magnifying': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/makeup%20mirror%20magnifying.jpg',
    'makeup organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/makeup%20organizer.jpg',
    'makeup brush holder': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/makeup%20brush%20holder.jpg',
    'cosmetics collection': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cosmetics%20collection.jpg',
    'skincare collection': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/skincare%20collection.jpg',
    'perfume bottles': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/perfume%20bottles.jpg',
    'perfume tray': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/perfume%20tray.jpg',
    'cologne collection': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cologne%20collection.jpg',
    'hair dryer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hair%20dryer.jpg',
    'hair straightener': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hair%20straightener.jpg',
    'curling iron': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/curling%20iron.jpg',
    'hot rollers': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hot%20rollers.jpg',
    'hair tools': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hair%20tools.jpg',
    'hair tool organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/hair%20tool%20organizer.jpg',
    'grooming kit': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/grooming%20kit.jpg',
    'electric shaver': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/electric%20shaver.jpg',
    'manicure set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/manicure%20set.jpg',
    'nail polish collection': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/nail%20polish%20collection.jpg',
    'tissue box holder': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tissue%20box%20holder.jpg',
    'jewelry cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/jewelry%20cleaning%20kit.jpg',
    'watch box': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/watch%20box.jpg',
    'watch winder': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/watch%20winder.jpg',
    'eyeglasses': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/eyeglasses.jpg',
    'reading glasses': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/reading%20glasses.jpg',
    'sleep mask': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sleep%20mask.jpg',
    'ear plugs': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/ear%20plugs.jpg',
    'essential oil diffuser': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/essential%20oil%20diffuser.jpg',
    'aromatherapy set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/aromatherapy%20set.jpg',
    'vanity drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/vanity%20drawer%20organizer.jpg',

    'bed tray': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/bed%20tray.jpg',
    'breakfast tray': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/breakfast%20tray.jpg',
    'lap desk': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/lap%20desk.jpg',
    'book stand': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/book%20stand.jpg',
    'step stool': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/step%20stool.jpg',
    'door draft guard': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/door%20draft%20guard.jpg',
    'clothing steamer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/clothing%20steamer.jpg',
    'handheld steamer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/handheld%20steamer.jpg',
    'iron': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/iron.jpg',
    'ironing board': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/ironing%20board.jpg',
    'tabletop ironing board': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tabletop%20ironing%20board.jpg',
    'sewing kit': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/sewing%20kit.jpg',
    'mending kit': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/mending%20kit.jpg',
    'safe small': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/safe%20small.jpg',
    'fireproof document box': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/fireproof%20document%20box.jpg',
    'first aid kit bedroom': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/first%20aid%20kit%20bedroom.jpg',
    'flashlight': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/flashlight.jpg',
    'emergency flashlight': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/emergency%20flashlight.jpg',
    'wastebasket': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/wastebasket.jpg',
    'trash bin': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/trash%20bin.jpg',
    'tissue boxes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/tissue%20boxes.jpg',
    'humidifier filter': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/humidifier%20filter.jpg',
    'moth repellent': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/moth%20repellent.jpg',
    'cedar blocks': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/cedar%20blocks.jpg',
    'drawer sachets': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/drawer%20sachets.jpg',
    'air freshener': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/air%20freshener.jpg',
    'room spray': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/room%20spray.jpg',
    'reed diffuser': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/reed%20diffuser.jpg',
    'blanket ladder': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/blanket%20ladder.jpg',
    'magazine rack': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/magazine%20rack.jpg',
    'book stack': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/book%20stack.jpg',
    'luggage': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/luggage.jpg',
    'suitcase set': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/suitcase%20set.jpg',
    'carry on bag': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/carry%20on%20bag.jpg',
    'weekend bag': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/weekend%20bag.jpg',
    'travel organizer': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/travel%20organizer.jpg',
    'packing cubes': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/packing%20cubes.jpg',
    'shoe shine kit': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/shoe%20shine%20kit.jpg',
    'spare bedding storage': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/spare%20bedding%20storage.jpg',
    'closet safe': 'https://cdamemoryjogger.blob.core.windows.net/bedroom/closet%20safe.jpg',
  
    //bathroom

        'all purpose cleaner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/all%20purpose%20cleaner.jpg',
        'cleaning caddy': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cleaning%20caddy.jpg',
        'decorative tray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/decorative%20tray.jpg',
        'first aid kit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/first%20aid%20kit.jpg',
        'glass cleaner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/glass%20cleaner.jpg',
        'light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/light%20bulbs.jpg',
        'power strip': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/power%20strip.jpg',
        'surge protector': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/surge%20protector.jpg',
        'trash bags': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/trash%20bags.jpg',
        'trash can': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/trash%20can.jpg',
        'wall clock': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/wall%20clock.jpg',

        'single vanity': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/single%20vanity.jpg',
        'double vanity': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/double%20vanity.jpg',
        'floating vanity': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/floating%20vanity.jpg',
        'pedestal sink': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/pedestal%20sink.jpg',
        'bathroom sink': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20sink.jpg',
        'undermount sink': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/undermount%20sink.jpg',
        'vessel sink': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/vessel%20sink.jpg',
        'bathroom faucet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20faucet.jpg',
        'sink drain stopper': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/sink%20drain%20stopper.jpg',

        'bathtub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathtub.jpg',
        'freestanding bathtub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/freestanding%20bathtub.jpg',
        'clawfoot tub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/clawfoot%20tub.jpg',
        'soaking tub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/soaking%20tub.jpg',
        'whirlpool tub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/whirlpool%20tub.jpg',
        'shower stall': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20stall.jpg',
       
        
        'toilet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet.jpg',
        'bidet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bidet.jpg',
        'bidet seat attachment': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bidet%20seat%20attachment.jpg',
        'toilet seat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20seat.jpg',
        'linen cabinet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/linen%20cabinet.jpg',
        'bathroom storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20storage%20cabinet.jpg',
        'medicine cabinet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/medicine%20cabinet.jpg',
        'bathroom vanity mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20vanity%20mirror.jpg',
        'bathroom mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20mirror.jpg',
        'full length mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/full%20length%20mirror.jpg',

        'mirror cabinet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/mirror%20cabinet.jpg',
        'over toilet cabinet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/over%20toilet%20cabinet.jpg',
        'bathroom shelving unit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20shelving%20unit.jpg',
        'ladder shelf': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/ladder%20shelf.jpg',
        'corner shelf unit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/corner%20shelf%20unit.jpg',
        'bathroom bench': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20bench.jpg',
        'teak bath bench': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/teak%20bath%20bench.jpg',
        'shower seat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20seat.jpg',
        'shower stool': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20stool.jpg',
        'vanity tray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/vanity%20tray.jpg',

        'vanity organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/vanity%20organizer.jpg',
        'vanity mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/vanity%20mirror.jpg',
        'lighted vanity mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/lighted%20vanity%20mirror.jpg',
        'vanity drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/vanity%20drawer%20liner.jpg',
        'vanity drawer divider': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/vanity%20drawer%20divider.jpg',
        'shower curtain hooks': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20curtain%20hooks.jpg',
        'shower curtain rings': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20curtain%20rings.jpg',
        'shower curtain clips': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20curtain%20clips.jpg',
        'shower curtain liner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20curtain%20liner.jpg',
        'shower curtain weights': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20curtain%20weights.jpg',

        'bathtub caddy': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathtub%20caddy.jpg',
        'freestanding toilet paper holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/freestanding%20toilet%20paper%20holder.jpg',
        'toilet paper stand': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20paper%20stand.jpg',
        'toilet paper storage': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20paper%20storage.jpg',
        'toilet paper roll organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20paper%20roll%20organizer.jpg',
        'toilet brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20brush.jpg',
        'toilet brush holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20brush%20holder.jpg',
        'toilet brush set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20brush%20set.jpg',
        'toilet plunger': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20plunger.jpg',
        'toilet plunger holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20plunger%20holder.jpg',

        'toilet bowl cleaner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20bowl%20cleaner.jpg',
        'toilet cleaning tablets': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20cleaning%20tablets.jpg',
        'toilet tank cleaner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20tank%20cleaner.jpg',
        'toilet seat cover': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20seat%20cover.jpg',
        'toilet lid cover': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20lid%20cover.jpg',
        'toilet mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20mat.jpg',
        'toilet base mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20base%20mat.jpg',
        'toilet seat night light': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20seat%20night%20light.jpg',
        'toilet paper rolls': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20paper%20rolls.jpg',
        'toilet night light': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20night%20light.jpg',

        'toilet paper storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20paper%20storage%20cabinet.jpg',
        'novelty toilet paper holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/novelty%20toilet%20paper%20holder.jpg',
        'bamboo toilet brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bamboo%20toilet%20brush.jpg',
        'disposable toilet brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/disposable%20toilet%20brush.jpg',
        'toilet deodorizer clip': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20deodorizer%20clip.jpg',
        'shower door organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20door%20organizer.jpg',
        'medicine cabinet organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/medicine%20cabinet%20organizer.jpg',
        'eau de toilette': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/eau%20de%20toilette.jpg',
        'toilet bowl cleaner bottle': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20bowl%20cleaner%20bottle.jpg',
        'toilet scrub brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toilet%20scrub%20brush.jpg',

        'vanity bulbs': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/vanity%20bulbs.jpg',
        'waterproof shower curtain set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/waterproof%20shower%20curtain%20set.jpg',

        'soap dispenser': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/soap%20dispenser.jpg',
        'hand soap': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hand%20soap.jpg',
        'liquid hand soap': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/liquid%20hand%20soap.jpg',
        'bar soap dish': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bar%20soap%20dish.jpg',
        'soap tray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/soap%20tray.jpg',
        'toothbrush holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toothbrush%20holder.jpg',
        'toothbrush cup': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toothbrush%20cup.jpg',
        'electric toothbrush holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/electric%20toothbrush%20holder.jpg',
        'toothpaste dispenser': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toothpaste%20dispenser.jpg',
        'cup holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cup%20holder.jpg',
        'bathroom cup dispenser': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20cup%20dispenser.jpg',
        'cotton ball holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cotton%20ball%20holder.jpg',
        'cotton swab holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cotton%20swab%20holder.jpg',
        'q tip holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/q%20tip%20holder.jpg',
        'cotton ball jar': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cotton%20ball%20jar.jpg',
        'apothecary jar set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/apothecary%20jar%20set.jpg',
        'magnifying mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/magnifying%20mirror.jpg',
        'makeup mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/makeup%20mirror.jpg',
        'mirror tray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/mirror%20tray.jpg',
        'cosmetic organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cosmetic%20organizer.jpg',
        'lipstick organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/lipstick%20organizer.jpg',
        'makeup brush holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/makeup%20brush%20holder.jpg',
        'makeup brush set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/makeup%20brush%20set.jpg',
        'makeup sponge holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/makeup%20sponge%20holder.jpg',
        'beauty blender holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/beauty%20blender%20holder.jpg',
        'nail polish organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/nail%20polish%20organizer.jpg',
        'perfume tray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/perfume%20tray.jpg',
        'perfume organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/perfume%20organizer.jpg',
        'jewelry tray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/jewelry%20tray.jpg',
        'hair tie organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20tie%20organizer.jpg',
        'bobby pin organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bobby%20pin%20organizer.jpg',
        'hair clip organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20clip%20organizer.jpg',
        'small drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/small%20drawer%20organizer.jpg',
        'brush cleaning mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/brush%20cleaning%20mat.jpg',
        'makeup remover pads reusable': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/makeup%20remover%20pads%20reusable.jpg',
        'facial cleansing brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/facial%20cleansing%20brush.jpg',
        'sonic face brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/sonic%20face%20brush.jpg',
        'skincare fridge': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/skincare%20fridge.jpg',
        'nail polish remover pads': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/nail%20polish%20remover%20pads.jpg',

        'shower caddy': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20caddy.jpg',
        'hanging shower caddy': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hanging%20shower%20caddy.jpg',
        'corner shower caddy': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/corner%20shower%20caddy.jpg',
        'tension pole shower caddy': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/tension%20pole%20shower%20caddy.jpg',
        'shower shelf': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20shelf.jpg',
        'shower hook': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20hook.jpg',
        'shower head': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20head.jpg',
        'handheld shower head': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/handheld%20shower%20head.jpg',
        'shower head filter': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20head%20filter.jpg',
        'bath tray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20tray.jpg',
        'bath pillow': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20pillow.jpg',
        'bath mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20mat.jpg',
        'non slip bath mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/non%20slip%20bath%20mat.jpg',
        'suction cup bath mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/suction%20cup%20bath%20mat.jpg',
        'tub mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/tub%20mat.jpg',
        'shower mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20mat.jpg',
        'anti slip shower mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/anti%20slip%20shower%20mat.jpg',
        'bath rug': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20rug.jpg',
        'contour bath rug': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/contour%20bath%20rug.jpg',
        'bath rug set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20rug%20set.jpg',
        'memory foam bath mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/memory%20foam%20bath%20mat.jpg',
        'bath mat drying rack': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20mat%20drying%20rack.jpg',
        'loofah': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/loofah.jpg',
        'bath sponge': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20sponge.jpg',
        'bath brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20brush.jpg',
        'long handle bath brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/long%20handle%20bath%20brush.jpg',
        'back scrubber': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/back%20scrubber.jpg',
        'bath pouf': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20pouf.jpg',
        'exfoliating gloves': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/exfoliating%20gloves.jpg',
        'pumice stone': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/pumice%20stone.jpg',
        'foot scrubber': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/foot%20scrubber.jpg',
        'razor holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/razor%20holder.jpg',
        'razor stand': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/razor%20stand.jpg',
        'shower razor hook': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20razor%20hook.jpg',
        'shaving brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shaving%20brush.jpg',
        'shaving bowl': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shaving%20bowl.jpg',
        'shower soap dish': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20soap%20dish.jpg',
        'shower body wash holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20body%20wash%20holder.jpg',
        'waterproof shower radio': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/waterproof%20shower%20radio.jpg',
        'shower clock': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20clock.jpg',
        'shower mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20mirror.jpg',
        'fogless shower mirror': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/fogless%20shower%20mirror.jpg',
        'bath thermometer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20thermometer.jpg',
        'rubber duck': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/rubber%20duck.jpg',
        'bath toy organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20toy%20organizer.jpg',
        'pebble bath mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/pebble%20bath%20mat.jpg',

        'bath towels': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20towels.jpg',
        'hand towels': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hand%20towels.jpg',
        'washcloths': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/washcloths.jpg',
        'face towels': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/face%20towels.jpg',
        'fingertip towels': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/fingertip%20towels.jpg',
        'bath sheet': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20sheet.jpg',
        'beach towel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/beach%20towel.jpg',
        'hooded towel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hooded%20towel.jpg',
        'gym towel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/gym%20towel.jpg',
        'microfiber towel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/microfiber%20towel.jpg',
        'quick dry towel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/quick%20dry%20towel.jpg',
        'towel set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/towel%20set.jpg',
        'guest towel set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/guest%20towel%20set.jpg',
        'decorative hand towels': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/decorative%20hand%20towels.jpg',
        'towel rack': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/towel%20rack.jpg',
        'freestanding towel rack': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/freestanding%20towel%20rack.jpg',
        'heated towel rack': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/heated%20towel%20rack.jpg',
        'towel ladder rack': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/towel%20ladder%20rack.jpg',
        'towel bar extender': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/towel%20bar%20extender.jpg',
        'over door organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/over%20door%20organizer.jpg',
        'bathrobe': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathrobe.jpg',
        'spa robe': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/spa%20robe.jpg',
        'kids bathrobe': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/kids%20bathrobe.jpg',
        'bath wrap towel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bath%20wrap%20towel.jpg',
        'hair towel wrap': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20towel%20wrap.jpg',
        'turban towel wrap': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/turban%20towel%20wrap.jpg',
        'pool towel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/pool%20towel.jpg',
        'spa wrap towel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/spa%20wrap%20towel.jpg',
        'bamboo washcloths': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bamboo%20washcloths.jpg',
        'exfoliating washcloth': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/exfoliating%20washcloth.jpg',

        'flushable wipes': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/flushable%20wipes.jpg',
        'extra roll holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/extra%20roll%20holder.jpg',

        'under sink organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/under%20sink%20organizer.jpg',
        'under sink cabinet organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/under%20sink%20cabinet%20organizer.jpg',
        'under sink shelf': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/under%20sink%20shelf.jpg',
        'under sink pull out drawer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/under%20sink%20pull%20out%20drawer.jpg',
        'under sink storage bins': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/under%20sink%20storage%20bins.jpg',
        'bathroom drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20drawer%20organizer.jpg',
        'bathroom drawer divider': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20drawer%20divider.jpg',
        'bathroom cabinet organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20cabinet%20organizer.jpg',
        'cabinet door organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cabinet%20door%20organizer.jpg',
        'stackable storage drawers': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/stackable%20storage%20drawers.jpg',
        'plastic storage drawers': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/plastic%20storage%20drawers.jpg',
        'clear storage drawers': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/clear%20storage%20drawers.jpg',
        'storage basket': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/storage%20basket.jpg',
        'woven storage basket': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/woven%20storage%20basket.jpg',
        'wire storage basket': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/wire%20storage%20basket.jpg',
        'fabric storage basket': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/fabric%20storage%20basket.jpg',
        'storage bin': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/storage%20bin.jpg',
        'storage box': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/storage%20box.jpg',
        'decorative storage box': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/decorative%20storage%20box.jpg',
        'bathroom storage tray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bathroom%20storage%20tray.jpg',
        'countertop organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/countertop%20organizer.jpg',
        'countertop caddy': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/countertop%20caddy.jpg',
        'hair tool organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20tool%20organizer.jpg',
        'blow dryer holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/blow%20dryer%20holder.jpg',
        'curling iron holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/curling%20iron%20holder.jpg',
        'flat iron holder': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/flat%20iron%20holder.jpg',
        'hair dryer hook': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20dryer%20hook.jpg',
        'hair tool caddy': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20tool%20caddy.jpg',
        'heat resistant mat': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/heat%20resistant%20mat.jpg',
        'heat resistant pouch': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/heat%20resistant%20pouch.jpg',
        'shower niche shelf': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20niche%20shelf.jpg',
        'door pocket organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/door%20pocket%20organizer.jpg',
        'first aid organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/first%20aid%20organizer.jpg',
        'pill organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/pill%20organizer.jpg',
        'drawer freshener': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/drawer%20freshener.jpg',
        'cabinet freshener': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cabinet%20freshener.jpg',
        'sachets': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/sachets.jpg',
        'odor absorber': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/odor%20absorber.jpg',
        'lazy susan organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/lazy%20susan%20organizer.jpg',
        'rotating organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/rotating%20organizer.jpg',
        'suction cup organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/suction%20cup%20organizer.jpg',
        'door mounted organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/door%20mounted%20organizer.jpg',
        'towel bar with shelf': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/towel%20bar%20with%20shelf.jpg',
        'over sink shelf': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/over%20sink%20shelf.jpg',
        'bamboo organizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bamboo%20organizer.jpg',
        'acrylic organizer set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/acrylic%20organizer%20set.jpg',

        'electric toothbrush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/electric%20toothbrush.jpg',
        'manual toothbrush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/manual%20toothbrush.jpg',
        'toothpaste': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toothpaste.jpg',
        'teeth whitening strips': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/teeth%20whitening%20strips.jpg',
        'teeth whitening kit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/teeth%20whitening%20kit.jpg',
        'dental floss': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/dental%20floss.jpg',
        'floss picks': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/floss%20picks.jpg',
        'water flosser': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/water%20flosser.jpg',
        'tongue scraper': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/tongue%20scraper.jpg',
        'mouthwash': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/mouthwash.jpg',
        'mouthwash dispenser': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/mouthwash%20dispenser.jpg',
        'electric shaver': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/electric%20shaver.jpg',
        'manual razor': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/manual%20razor.jpg',
        'razor blades': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/razor%20blades.jpg',
        'shaving cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shaving%20cream.jpg',
        'shaving gel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shaving%20gel.jpg',
        'aftershave': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/aftershave.jpg',
        'shaving soap': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shaving%20soap.jpg',
        'hair dryer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20dryer.jpg',
        'travel hair dryer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/travel%20hair%20dryer.jpg',
        'hair dryer diffuser': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20dryer%20diffuser.jpg',
        'hair dryer concentrator': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20dryer%20concentrator.jpg',
        'curling iron': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/curling%20iron.jpg',
        'curling wand': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/curling%20wand.jpg',
        'flat iron': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/flat%20iron.jpg',
        'hair straightener': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20straightener.jpg',
        'hot air brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hot%20air%20brush.jpg',
        'hair crimper': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20crimper.jpg',
        'heated rollers': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/heated%20rollers.jpg',
        'hair roller set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20roller%20set.jpg',
        'electric hair trimmer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/electric%20hair%20trimmer.jpg',
        'beard trimmer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/beard%20trimmer.jpg',
        'nose hair trimmer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/nose%20hair%20trimmer.jpg',
        'ear hair trimmer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/ear%20hair%20trimmer.jpg',
        'eyebrow trimmer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/eyebrow%20trimmer.jpg',
        'facial hair remover': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/facial%20hair%20remover.jpg',
        'epilator': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/epilator.jpg',
        'electric razor': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/electric%20razor.jpg',
        'nail clippers': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/nail%20clippers.jpg',
        'nail scissors': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/nail%20scissors.jpg',
        'nail file': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/nail%20file.jpg',
        'nail buffer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/nail%20buffer.jpg',
        'cuticle pusher': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cuticle%20pusher.jpg',
        'cuticle trimmer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cuticle%20trimmer.jpg',
        'nail brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/nail%20brush.jpg',
        'toenail clippers': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toenail%20clippers.jpg',
        'pedicure kit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/pedicure%20kit.jpg',
        'manicure set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/manicure%20set.jpg',
        'tweezers': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/tweezers.jpg',
        'eyebrow razor': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/eyebrow%20razor.jpg',

        'facial roller': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/facial%20roller.jpg',
        'gua sha tool': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/gua%20sha%20tool.jpg',
        'face massager': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/face%20massager.jpg',
        'hair brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20brush.jpg',
        'wide tooth comb': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/wide%20tooth%20comb.jpg',
        'detangling brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/detangling%20brush.jpg',
        'round brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/round%20brush.jpg',
        'paddle brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/paddle%20brush.jpg',
        'boar bristle brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/boar%20bristle%20brush.jpg',
        'hair pick': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20pick.jpg',
        'fine tooth comb': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/fine%20tooth%20comb.jpg',
        'tail comb': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/tail%20comb.jpg',
        'styling comb': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/styling%20comb.jpg',
        'hair elastic set': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20elastic%20set.jpg',
        'hair ties': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20ties.jpg',
        'bobby pins': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bobby%20pins.jpg',
        'hair clips': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20clips.jpg',
        'hair pins': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20pins.jpg',
        'barrettes': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/barrettes.jpg',
        'headbands': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/headbands.jpg',
        'shower cap': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shower%20cap.jpg',
        'hair net': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20net.jpg',
        'scalp massager': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/scalp%20massager.jpg',
        'facial cleansing device': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/facial%20cleansing%20device.jpg',
        'blackhead remover tool': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/blackhead%20remover%20tool.jpg',
        'pore vacuum': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/pore%20vacuum.jpg',
        'lash curler': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/lash%20curler.jpg',
        'eyebrow stencil kit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/eyebrow%20stencil%20kit.jpg',
        'makeup setting spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/makeup%20setting%20spray.jpg',
        'blush brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/blush%20brush.jpg',
        'powder brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/powder%20brush.jpg',
        'foundation brush': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/foundation%20brush.jpg',
        'tweezers medical': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/tweezers%20medical.jpg',
        'electric toothbrush charging base': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/electric%20toothbrush%20charging%20base.jpg',

        'face wash': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/face%20wash.jpg',
        'facial cleanser': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/facial%20cleanser.jpg',
        'micellar water': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/micellar%20water.jpg',
        'toner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toner.jpg',
        'face serum': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/face%20serum.jpg',
        'moisturizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/moisturizer.jpg',
        'face lotion': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/face%20lotion.jpg',
        'eye cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/eye%20cream.jpg',
        'night cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/night%20cream.jpg',
        'face oil': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/face%20oil.jpg',
        'sunscreen': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/sunscreen.jpg',
        'SPF moisturizer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/SPF%20moisturizer.jpg',
        'face mask': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/face%20mask.jpg',
        'sheet mask': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/sheet%20mask.jpg',
        'clay mask': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/clay%20mask.jpg',
        'exfoliating scrub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/exfoliating%20scrub.jpg',
        'chemical exfoliant': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/chemical%20exfoliant.jpg',
        'retinol cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/retinol%20cream.jpg',
        'vitamin C serum': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/vitamin%20C%20serum.jpg',
        'hyaluronic acid serum': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hyaluronic%20acid%20serum.jpg',
        'acne spot treatment': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/acne%20spot%20treatment.jpg',
        'lip balm': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/lip%20balm.jpg',
        'lip scrub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/lip%20scrub.jpg',
        'makeup remover': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/makeup%20remover.jpg',
        'micellar cleansing water': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/micellar%20cleansing%20water.jpg',
        'eye makeup remover': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/eye%20makeup%20remover.jpg',
        'cleansing balm': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cleansing%20balm.jpg',
        'cleansing oil': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cleansing%20oil.jpg',
        'facial wipes': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/facial%20wipes.jpg',
        'cotton rounds': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cotton%20rounds.jpg',
        'cotton balls': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cotton%20balls.jpg',
        'cotton swabs': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cotton%20swabs.jpg',
        'facial steamer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/facial%20steamer.jpg',
        'face roller': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/face%20roller.jpg',
        'body lotion': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/body%20lotion.jpg',
        'body cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/body%20cream.jpg',
        'body butter': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/body%20butter.jpg',
        'dry body oil': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/dry%20body%20oil.jpg',
        'shimmer lotion': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shimmer%20lotion.jpg',
        'body scrub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/body%20scrub.jpg',
        'sugar scrub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/sugar%20scrub.jpg',
        'salt scrub': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/salt%20scrub.jpg',
        'self tanner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/self%20tanner.jpg',
        'after sun lotion': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/after%20sun%20lotion.jpg',
        'hand cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hand%20cream.jpg',
        'foot cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/foot%20cream.jpg',
        'heel balm': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/heel%20balm.jpg',
        'cuticle oil': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cuticle%20oil.jpg',
        'stretch mark cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/stretch%20mark%20cream.jpg',
        'deodorant': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/deodorant.jpg',
        'antiperspirant': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/antiperspirant.jpg',
        'natural deodorant': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/natural%20deodorant.jpg',
        'deodorant spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/deodorant%20spray.jpg',
        'perfume': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/perfume.jpg',
        'cologne': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/cologne.jpg',
        'body spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/body%20spray.jpg',
        'fragrance roller': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/fragrance%20roller.jpg',
        'facial mist spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/facial%20mist%20spray.jpg',
        'tanning mitt': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/tanning%20mitt.jpg',
        'body shimmer': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/body%20shimmer.jpg',
        'SPF lip balm': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/SPF%20lip%20balm.jpg',
        'toner kit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toner%20kit.jpg',

        'shampoo': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/shampoo.jpg',
        'conditioner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/conditioner.jpg',
        'co wash': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/co%20wash.jpg',
        'dry shampoo': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/dry%20shampoo.jpg',
        'clarifying shampoo': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/clarifying%20shampoo.jpg',
        'hair mask': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20mask.jpg',
        'deep conditioner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/deep%20conditioner.jpg',
        'leave in conditioner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/leave%20in%20conditioner.jpg',
        'hair serum': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20serum.jpg',
        'hair oil': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20oil.jpg',
        'argan oil': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/argan%20oil.jpg',
        'coconut hair oil': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/coconut%20hair%20oil.jpg',
        'heat protectant spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/heat%20protectant%20spray.jpg',
        'hair spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20spray.jpg',
        'mousse': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/mousse.jpg',
        'hair gel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20gel.jpg',
        'pomade': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/pomade.jpg',
        'hair wax': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20wax.jpg',
        'styling cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/styling%20cream.jpg',
        'curl cream': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/curl%20cream.jpg',
        'curl defining gel': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/curl%20defining%20gel.jpg',
        'sea salt spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/sea%20salt%20spray.jpg',
        'volumizing spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/volumizing%20spray.jpg',
        'detangling spray': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/detangling%20spray.jpg',
        'hair tonic': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20tonic.jpg',
        'scalp treatment': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/scalp%20treatment.jpg',
        'scalp serum': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/scalp%20serum.jpg',
        'scalp oil': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/scalp%20oil.jpg',
        'hair growth serum': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20growth%20serum.jpg',
        'hair vitamin supplements': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20vitamin%20supplements.jpg',
        'color treated shampoo': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/color%20treated%20shampoo.jpg',
        'purple shampoo': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/purple%20shampoo.jpg',
        'toning conditioner': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/toning%20conditioner.jpg',
        'hair dye kit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20dye%20kit.jpg',
        'bleach kit': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bleach%20kit.jpg',
        'gloss treatment': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/gloss%20treatment.jpg',
        'hair detox treatment': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20detox%20treatment.jpg',
        'bond repair treatment': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/bond%20repair%20treatment.jpg',
        'hair glossing treatment': 'https://cdamemoryjogger.blob.core.windows.net/bathroom/hair%20glossing%20treatment.jpg',

        'body wash': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/body%20wash.jpg',
        'shower gel': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shower%20gel.jpg',
        'bar soap': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bar%20soap.jpg',
        'antibacterial soap': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/antibacterial%20soap.jpg',
        'castile soap': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/castile%20soap.jpg',
        'bath salts': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20salts.jpg',
        'bath bombs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20bombs.jpg',
        'bubble bath': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bubble%20bath.jpg',
        'bath oil': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20oil.jpg',
        'bath soak': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20soak.jpg',
        'shower steamers': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shower%20steamers.jpg',
        'bath tablets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20tablets.jpg',
        'epsom salt': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/epsom%20salt.jpg',
        'bath milk powder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20milk%20powder.jpg',
        'shower scrub': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shower%20scrub.jpg',
        'body polish': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/body%20polish.jpg',
        'bath foam': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20foam.jpg',
        'bath confetti': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20confetti.jpg',
        'bath accessories set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20accessories%20set.jpg',
        'gift set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/gift%20set.jpg',
        'shower gel set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shower%20gel%20set.jpg',
        'spa gift basket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/spa%20gift%20basket.jpg',
        'bath accessory kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20accessory%20kit.jpg',
        'aromatherapy shower kit': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/aromatherapy%20shower%20kit.jpg',
        'charcoal soap bar': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/charcoal%20soap%20bar.jpg',

        'bandages': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bandages.jpg',
        'adhesive bandages': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/adhesive%20bandages.jpg',
        'gauze pads': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/gauze%20pads.jpg',
        'medical tape': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/medical%20tape.jpg',
        'antiseptic wipes': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/antiseptic%20wipes.jpg',
        'hydrogen peroxide': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hydrogen%20peroxide.jpg',
        'rubbing alcohol': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/rubbing%20alcohol.jpg',
        'antibiotic ointment': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/antibiotic%20ointment.jpg',
        'pain reliever': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/pain%20reliever.jpg',
        'ibuprofen': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ibuprofen.jpg',
        'acetaminophen': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/acetaminophen.jpg',
        'antacid': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/antacid.jpg',
        'allergy medicine': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/allergy%20medicine.jpg',
        'cold medicine': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cold%20medicine.jpg',
        'cough syrup': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cough%20syrup.jpg',
        'nasal spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/nasal%20spray.jpg',
        'eye drops': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/eye%20drops.jpg',
        'ear drops': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ear%20drops.jpg',
        'thermometer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/thermometer.jpg',
        'blood pressure monitor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/blood%20pressure%20monitor.jpg',
        'pulse oximeter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/pulse%20oximeter.jpg',
        'prescription organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/prescription%20organizer.jpg',
        'pill box': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/pill%20box.jpg',
        'medicine cup': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/medicine%20cup.jpg',
        'medicine dropper': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/medicine%20dropper.jpg',
        'heating pad': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/heating%20pad.jpg',
        'ice pack': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/ice%20pack.jpg',
        'elastic bandage': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/elastic%20bandage.jpg',
        'room thermometer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/room%20thermometer.jpg',

        'bathroom cleaner spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bathroom%20cleaner%20spray.jpg',
        'tile cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tile%20cleaner.jpg',
        'grout cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/grout%20cleaner.jpg',
        'mold and mildew remover': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mold%20and%20mildew%20remover.jpg',
        'shower cleaner spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shower%20cleaner%20spray.jpg',
        'mirror cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/mirror%20cleaner.jpg',
        'tub and tile scrub': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/tub%20and%20tile%20scrub.jpg',
        'bathroom disinfectant': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bathroom%20disinfectant.jpg',
        'bleach spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bleach%20spray.jpg',
        'drain cleaner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drain%20cleaner.jpg',
        'drain hair catcher': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drain%20hair%20catcher.jpg',
        'drain strainer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drain%20strainer.jpg',
        'scrub brush': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/scrub%20brush.jpg',
        'grout brush': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/grout%20brush.jpg',
        'cleaning sponge': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cleaning%20sponge.jpg',
        'scrub sponge': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/scrub%20sponge.jpg',
        'microfiber cleaning cloth': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/microfiber%20cleaning%20cloth.jpg',
        'cleaning rags': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cleaning%20rags.jpg',
        'rubber gloves': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/rubber%20gloves.jpg',
        'cleaning supply organizer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/cleaning%20supply%20organizer.jpg',
        'small trash can': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/small%20trash%20can.jpg',
        'wastebasket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wastebasket.jpg',
        'wastebasket liner': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wastebasket%20liner.jpg',
        'trash can with lid': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/trash%20can%20with%20lid.jpg',
        'odor eliminating spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/odor%20eliminating%20spray.jpg',
        'air freshener': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20freshener.jpg',
        'scent diffuser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/scent%20diffuser.jpg',
        'reed diffuser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/reed%20diffuser.jpg',
        'plug in air freshener': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plug%20in%20air%20freshener.jpg',
        'essential oil diffuser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/essential%20oil%20diffuser.jpg',
        'candle': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/candle.jpg',
        'matches': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/matches.jpg',
        'candle lighter': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/candle%20lighter.jpg',
        'squeegee': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/squeegee.jpg',
        'shower squeegee': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shower%20squeegee.jpg',
        'drain cleaner tablets': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/drain%20cleaner%20tablets.jpg',
        'descaler solution': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/descaler%20solution.jpg',
        'soap scum remover': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/soap%20scum%20remover.jpg',
        'hard water stain remover': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/hard%20water%20stain%20remover.jpg',

        'LED light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/LED%20light%20bulbs.jpg',
        'night light': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/night%20light.jpg',
        'motion sensor night light': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/motion%20sensor%20night%20light.jpg',
        'plug in night light': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plug%20in%20night%20light.jpg',
        'bathroom scale': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bathroom%20scale.jpg',
        'digital bathroom scale': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/digital%20bathroom%20scale.jpg',
        'body weight scale': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/body%20weight%20scale.jpg',
        'shaver charging stand': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shaver%20charging%20stand.jpg',
        'extension cord bathroom safe': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/extension%20cord%20bathroom%20safe.jpg',
        'USB charging hub': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/USB%20charging%20hub.jpg',
        'wall charger': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/wall%20charger.jpg',
        'lighted mirror remote': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/lighted%20mirror%20remote.jpg',
        'bluetooth mirror': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bluetooth%20mirror.jpg',
        'smart mirror': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/smart%20mirror.jpg',
        'waterproof phone holder shower': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/waterproof%20phone%20holder%20shower.jpg',
        'shower phone mount': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shower%20phone%20mount.jpg',

        'bathroom rug set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bathroom%20rug%20set.jpg',
        'decorative basket': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20basket.jpg',
        'soap stone dish': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/soap%20stone%20dish.jpg',
        'bathroom wall art': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bathroom%20wall%20art.jpg',
        'framed bathroom art': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/framed%20bathroom%20art.jpg',
        'canvas bathroom print': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/canvas%20bathroom%20print.jpg',
        'picture frame': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/picture%20frame.jpg',
        'decorative mirror': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/decorative%20mirror.jpg',
        'plant pot': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/plant%20pot.jpg',
        'indoor plant': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/indoor%20plant.jpg',
        'artificial plant': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/artificial%20plant.jpg',
        'succulent pot': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/succulent%20pot.jpg',
        'air plant holder': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20plant%20holder.jpg',
        'bamboo plant': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bamboo%20plant.jpg',
        'eucalyptus bundle': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/eucalyptus%20bundle.jpg',
        'bath salt display jar': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bath%20salt%20display%20jar.jpg',
        'apothecary bottle set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/apothecary%20bottle%20set.jpg',
        'glass jar set': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/glass%20jar%20set.jpg',
      
        'portable fan': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/portable%20fan.jpg',
        'space heater bathroom safe': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/space%20heater%20bathroom%20safe.jpg',
        'towel warmer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/towel%20warmer.jpg',
        'electric towel warmer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/electric%20towel%20warmer.jpg',
        'freestanding towel warmer': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/freestanding%20towel%20warmer.jpg',
        'heated bathroom floor mat': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/heated%20bathroom%20floor%20mat.jpg',
        'shower speaker': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/shower%20speaker.jpg',
        'waterproof bluetooth speaker': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/waterproof%20bluetooth%20speaker.jpg',
        'bathroom radio': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/bathroom%20radio.jpg',
        'humidity monitor': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/humidity%20monitor.jpg',
        'dehumidifier small': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/dehumidifier%20small.jpg',
        'air purifier small': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/air%20purifier%20small.jpg',
        'aromatherapy diffuser': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/aromatherapy%20diffuser.jpg',
        'anti fog mirror spray': 'https://cdamemoryjogger.blob.core.windows.net/livingroom/anti%20fog%20mirror%20spray.jpg',

        //dining room
        'dining table': 'https://cdamemoryjogger.blob.core.windows.net/images/dining%20table.jpg',
        'table base': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20base.jpg',
        'table legs': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20legs.jpg',
        'table leaf insert': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leaf%20insert.jpg',
        'table leaf storage bag': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leaf%20storage%20bag.jpg',
        'table pad protector': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20pad%20protector.jpg',
        'table leg hardware kit': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leg%20hardware%20kit.jpg',
        'table corner protectors': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20corner%20protectors.jpg',
        'table extension slides': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20extension%20slides.jpg',
        'table leveling pads': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leveling%20pads.jpg',
        'table leaf alignment pins': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leaf%20alignment%20pins.jpg',
        'table pad storage tube': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20pad%20storage%20tube.jpg',
        'table refinishing kit': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20refinishing%20kit.jpg',
        'table polish cloth': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20polish%20cloth.jpg',
        'table scratch repair marker': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20scratch%20repair%20marker.jpg',
        'table leg bolts': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leg%20bolts.jpg',
        'table stabilizer brackets': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20stabilizer%20brackets.jpg',
        'console table corner braces': 'https://cdamemoryjogger.blob.core.windows.net/images/console%20table%20corner%20braces.jpg',
        'table leaf support bracket': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leaf%20support%20bracket.jpg',
        'table support beam': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20support%20beam.jpg',
        'table brace kit': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20brace%20kit.jpg',
        'table hardware screws': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20hardware%20screws.jpg',
        'table leveling shims': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leveling%20shims.jpg',
        'table leaf lock clips': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20leaf%20lock%20clips.jpg',
        'dining table extension mechanism': 'https://cdamemoryjogger.blob.core.windows.net/images/dining%20table%20extension%20mechanism.jpg',
        'table edge protectors': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20edge%20protectors.jpg',
        'table top glass cover': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20top%20glass%20cover.jpg',
        'tabletop sealer': 'https://cdamemoryjogger.blob.core.windows.net/images/tabletop%20sealer.jpg',
        'tabletop protector film': 'https://cdamemoryjogger.blob.core.windows.net/images/tabletop%20protector%20film.jpg',
        'dining chairs': 'https://cdamemoryjogger.blob.core.windows.net/images/dining%20chairs.jpg',
        'arm chairs': 'https://cdamemoryjogger.blob.core.windows.net/images/arm%20chairs.jpg',
        'side chairs': 'https://cdamemoryjogger.blob.core.windows.net/images/side%20chairs.jpg',
        'bench seating': 'https://cdamemoryjogger.blob.core.windows.net/images/bench%20seating.jpg',
        'chair cushions': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20cushions.jpg',
        'seat covers': 'https://cdamemoryjogger.blob.core.windows.net/images/seat%20covers.jpg',
        'chair floor protectors': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20floor%20protectors.jpg',
        'chair leg caps': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20leg%20caps.jpg',
        'chair glide pads': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20glide%20pads.jpg',
        'chair seat screws': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20seat%20screws.jpg',
        'chair back support brace': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20back%20support%20brace.jpg',
        'chair upholstery cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20upholstery%20cleaner.jpg',
        'chair seat cushion inserts': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20seat%20cushion%20inserts.jpg',
        'chair back pads': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20back%20pads.jpg',
    
        'chair cushion storage bag': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20cushion%20storage%20bag.jpg',
        'chair leg braces': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20leg%20braces.jpg',
        'chair upholstery kit': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20upholstery%20kit.jpg',
        'bench frame bolts': 'https://cdamemoryjogger.blob.core.windows.net/images/bench%20frame%20bolts.jpg',
        'bench cushion foam': 'https://cdamemoryjogger.blob.core.windows.net/images/bench%20cushion%20foam.jpg',
        'chair cushion ties': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20cushion%20ties.jpg',
        'bench storage drawer': 'https://cdamemoryjogger.blob.core.windows.net/images/bench%20storage%20drawer.jpg',
        'chair leg felt pads': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20leg%20felt%20pads.jpg',
        'bench leg levelers': 'https://cdamemoryjogger.blob.core.windows.net/images/bench%20leg%20levelers.jpg',
        'banquette': 'https://cdamemoryjogger.blob.core.windows.net/images/banquette.jpg',
        'banquette cushion set': 'https://cdamemoryjogger.blob.core.windows.net/images/banquette%20cushion%20set.jpg',
        'banquette slipcover': 'https://cdamemoryjogger.blob.core.windows.net/images/banquette%20slipcover.jpg',
        'captain chair': 'https://cdamemoryjogger.blob.core.windows.net/images/captain%20chair.jpg',
        'folding dining chairs': 'https://cdamemoryjogger.blob.core.windows.net/images/folding%20dining%20chairs.jpg',
        'chair booster seat': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20booster%20seat.jpg',
        'high chair': 'https://cdamemoryjogger.blob.core.windows.net/images/high%20chair.jpg',
        'chair upholstery fabric': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20upholstery%20fabric.jpg',
        'chair slipcover set': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20slipcover%20set.jpg',
        'chair cushion foam': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20cushion%20foam.jpg',
        'chair armrest pads': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20armrest%20pads.jpg',
        'chair backrest screws': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20backrest%20screws.jpg',
        'chair spindle': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20spindle.jpg',
        'chair seat webbing': 'https://cdamemoryjogger.blob.core.windows.net/images/chair%20seat%20webbing.jpg',
        'china cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet.jpg',
        'hutch cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20cabinet.jpg',
        'buffet table': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20table.jpg',
        'sideboard': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard.jpg',
        'bar cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet.jpg',
        'wine cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20cabinet.jpg',
        'curio cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/curio%20cabinet.jpg',
        'display cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/display%20cabinet.jpg',
        'console table': 'https://cdamemoryjogger.blob.core.windows.net/images/console%20table.jpg',
        'serving cart': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20cart.jpg',
        'bar cart': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cart.jpg',
        'storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20cabinet.jpg',
        'drawer organizers': 'https://cdamemoryjogger.blob.core.windows.net/images/drawer%20organizers.jpg',
        'cabinet shelf liner': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20shelf%20liner.jpg',
        'buffet warming trays': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20warming%20trays.jpg',
        'storage baskets': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20baskets.jpg',
        'decorative boxes': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20boxes.jpg',
        'china cabinet shelf clips': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20shelf%20clips.jpg',
        'china cabinet glass panels': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20glass%20panels.jpg',
        'hutch drawer pulls': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20drawer%20pulls.jpg',
        'buffet cabinet hinges': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20cabinet%20hinges.jpg',
        'sideboard drawer dividers': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20drawer%20dividers.jpg',
     
        'bar cabinet lock': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20lock.jpg',
        'wine cabinet shelf inserts': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20cabinet%20shelf%20inserts.jpg',
        'curio cabinet lighting kit': 'https://cdamemoryjogger.blob.core.windows.net/images/curio%20cabinet%20lighting%20kit.jpg',
        'display cabinet glass cleaner kit': 'https://cdamemoryjogger.blob.core.windows.net/images/display%20cabinet%20glass%20cleaner%20kit.jpg',
        'console table drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/images/console%20table%20drawer%20liner.jpg',
        'cabinet shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20shelf%20riser.jpg',
        'buffet fuel cans': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20fuel%20cans.jpg',
        'glass cabinet lock': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20cabinet%20lock.jpg',
        'storage basket liner': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20basket%20liner.jpg',
        'decorative box lid': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20box%20lid.jpg',
        'buffet warming tray cover': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20warming%20tray%20cover.jpg',
        'china cabinet light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20light%20bulbs.jpg',
        'china cabinet glass shelf inserts': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20glass%20shelf%20inserts.jpg',
        'buffet drawer slides': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20drawer%20slides.jpg',
        'wine cabinet thermometer': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20cabinet%20thermometer.jpg',
        'curio cabinet glass cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/curio%20cabinet%20glass%20cleaner.jpg',
        'display cabinet shelf lighting': 'https://cdamemoryjogger.blob.core.windows.net/images/display%20cabinet%20shelf%20lighting.jpg',
        'serving cart handle grips': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20cart%20handle%20grips.jpg',
        'glass cabinet shelf protector': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20cabinet%20shelf%20protector.jpg',
        'storage basket stacker': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20basket%20stacker.jpg',
        'decorative box storage crate': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20box%20storage%20crate.jpg',
        'china cabinet door lock': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20door%20lock.jpg',
        'buffet cabinet key spare': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20cabinet%20key%20spare.jpg',
        'bar cabinet lighting strip': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20lighting%20strip.jpg',
        'curio cabinet shelf clips': 'https://cdamemoryjogger.blob.core.windows.net/images/curio%20cabinet%20shelf%20clips.jpg',
        'console table anti slip pads': 'https://cdamemoryjogger.blob.core.windows.net/images/console%20table%20anti%20slip%20pads.jpg',
        'china cabinet door handles': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20door%20handles.jpg',
        'china cabinet shelf lighting kit': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20shelf%20lighting%20kit.jpg',
        'hutch shelf brackets': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20shelf%20brackets.jpg',
        'buffet door bumpers': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20door%20bumpers.jpg',
        'sideboard shelf supports': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20shelf%20supports.jpg',
        'bar cabinet wine glass holders': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20wine%20glass%20holders.jpg',
        'curio cabinet lock': 'https://cdamemoryjogger.blob.core.windows.net/images/curio%20cabinet%20lock.jpg',

        'bar cart glass holder insert': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cart%20glass%20holder%20insert.jpg',
        'cabinet hinge repair kit': 'https://cdamemoryjogger.blob.core.windows.net/images/cabinet%20hinge%20repair%20kit.jpg',
        'china cabinet plate stand': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20plate%20stand.jpg',
        'buffet warming tray lid': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20warming%20tray%20lid.jpg',
        'china cabinet polish cloth': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20polish%20cloth.jpg',
        'glass cabinet door bumpers': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20cabinet%20door%20bumpers.jpg',
        'storage basket lid': 'https://cdamemoryjogger.blob.core.windows.net/images/storage%20basket%20lid.jpg',
        'decorative box large': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20box%20large.jpg',
        'china cabinet shelf liner': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20shelf%20liner.jpg',
        'buffet anti slip mat': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20anti%20slip%20mat.jpg',
        'sideboard drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20drawer%20liner.jpg',
        'bar cabinet bottle mat': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20bottle%20mat.jpg',
        'curio cabinet display stand': 'https://cdamemoryjogger.blob.core.windows.net/images/curio%20cabinet%20display%20stand.jpg',
        'display cabinet door magnet': 'https://cdamemoryjogger.blob.core.windows.net/images/display%20cabinet%20door%20magnet.jpg',
        'console table drawer divider': 'https://cdamemoryjogger.blob.core.windows.net/images/console%20table%20drawer%20divider.jpg',
        'hutch decorative trim': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20decorative%20trim.jpg',
        'buffet cabinet shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/images/buffet%20cabinet%20shelf%20riser.jpg',
        'bar cabinet LED lighting': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20LED%20lighting.jpg',
        'wine cabinet humidity monitor': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20cabinet%20humidity%20monitor.jpg',
        'curio cabinet shelf protector': 'https://cdamemoryjogger.blob.core.windows.net/images/curio%20cabinet%20shelf%20protector.jpg',
        'display cabinet glass polish': 'https://cdamemoryjogger.blob.core.windows.net/images/display%20cabinet%20glass%20polish.jpg',
        'console table leg braces': 'https://cdamemoryjogger.blob.core.windows.net/images/console%20table%20leg%20braces.jpg',
        'bar cart shelf liner': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cart%20shelf%20liner.jpg',
        'china cabinet door magnet': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20door%20magnet.jpg',
        'china cabinet door catch': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20door%20catch.jpg',
        'china cabinet door bumpers': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20door%20bumpers.jpg',
        'china cabinet key': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20key.jpg',
        'china cabinet lock cylinder': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20lock%20cylinder.jpg',
        'china cabinet glass shelf supports': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20glass%20shelf%20supports.jpg',
        'china cabinet shelf pins': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20shelf%20pins.jpg',
        'china cabinet shelf brackets': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20shelf%20brackets.jpg',
        'china cabinet leveling feet': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20cabinet%20leveling%20feet.jpg',
        'hutch shelf pins': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20shelf%20pins.jpg',
        'hutch shelf supports': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20shelf%20supports.jpg',
        'hutch door catch': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20door%20catch.jpg',
        'hutch door bumpers': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20door%20bumpers.jpg',
        'hutch door hinges soft close': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20door%20hinges%20soft%20close.jpg',
        'hutch cabinet feet levelers': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20cabinet%20feet%20levelers.jpg',
        'hutch glass shelf supports': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20glass%20shelf%20supports.jpg',
        'hutch lighting remote': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20lighting%20remote.jpg',
        'hutch LED puck lights': 'https://cdamemoryjogger.blob.core.windows.net/images/hutch%20LED%20puck%20lights.jpg',
        'sideboard shelf pins': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20shelf%20pins.jpg',
        'sideboard door catch': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20door%20catch.jpg',
        'sideboard door bumpers': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20door%20bumpers.jpg',
        'sideboard key': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20key.jpg',
        'sideboard lock cylinder': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20lock%20cylinder.jpg',
        'sideboard adjustable feet': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20adjustable%20feet.jpg',
        'sideboard cable grommet': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20cable%20grommet.jpg',
        'sideboard cord management clips': 'https://cdamemoryjogger.blob.core.windows.net/images/sideboard%20cord%20management%20clips.jpg',
        'bar cabinet wine bottle dividers': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20wine%20bottle%20dividers.jpg',

        'bar cabinet shelf liner roll': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20shelf%20liner%20roll.jpg',
        'bar cabinet magnetic catch': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20magnetic%20catch.jpg',
        'bar cabinet LED under shelf lights': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20LED%20under%20shelf%20lights.jpg',
        'bar cabinet glass shelf pins': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20glass%20shelf%20pins.jpg',
        'bar cabinet leveling feet': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20leveling%20feet.jpg',
        'bar cabinet moisture absorber': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20cabinet%20moisture%20absorber.jpg',
        'anti tarnish drawer liners': 'https://cdamemoryjogger.blob.core.windows.net/images/anti%20tarnish%20drawer%20liners.jpg',
        'table runner': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20runner.jpg',
        'placemats': 'https://cdamemoryjogger.blob.core.windows.net/images/placemats.jpg',
        'cloth napkins': 'https://cdamemoryjogger.blob.core.windows.net/images/cloth%20napkins.jpg',
        'napkin rings': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20rings.jpg',
        'napkin holder': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20holder.jpg',
        'tablecloth': 'https://cdamemoryjogger.blob.core.windows.net/images/tablecloth.jpg',
        'tablecloth clips': 'https://cdamemoryjogger.blob.core.windows.net/images/tablecloth%20clips.jpg',
        'holiday table runner': 'https://cdamemoryjogger.blob.core.windows.net/images/holiday%20table%20runner.jpg',
        'holiday placemats': 'https://cdamemoryjogger.blob.core.windows.net/images/holiday%20placemats.jpg',
        'holiday napkins': 'https://cdamemoryjogger.blob.core.windows.net/images/holiday%20napkins.jpg',
        'placemat storage rack': 'https://cdamemoryjogger.blob.core.windows.net/images/placemat%20storage%20rack.jpg',
        'napkin storage bin': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20storage%20bin.jpg',
        'napkin ring storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20ring%20storage%20box.jpg',
        'tablecloth storage bag': 'https://cdamemoryjogger.blob.core.windows.net/images/tablecloth%20storage%20bag.jpg',
        'tablecloth ironing spray': 'https://cdamemoryjogger.blob.core.windows.net/images/tablecloth%20ironing%20spray.jpg',
        'placemat holder tray': 'https://cdamemoryjogger.blob.core.windows.net/images/placemat%20holder%20tray.jpg',
        'holiday napkin holder': 'https://cdamemoryjogger.blob.core.windows.net/images/holiday%20napkin%20holder.jpg',
        'placemat storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/placemat%20storage%20box.jpg',
        'napkin press iron': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20press%20iron.jpg',
        'tablecloth hanger rack': 'https://cdamemoryjogger.blob.core.windows.net/images/tablecloth%20hanger%20rack.jpg',
        'seasonal table runner storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/seasonal%20table%20runner%20storage%20box.jpg',
        'place card holder': 'https://cdamemoryjogger.blob.core.windows.net/images/place%20card%20holder.jpg',
        'place cards': 'https://cdamemoryjogger.blob.core.windows.net/images/place%20cards.jpg',
        'menu cards': 'https://cdamemoryjogger.blob.core.windows.net/images/menu%20cards.jpg',
        'napkin fold board': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20fold%20board.jpg',
        'napkin press': 'https://cdamemoryjogger.blob.core.windows.net/images/napkin%20press.jpg',
        'table number stand': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20number%20stand.jpg',
        'runner clips': 'https://cdamemoryjogger.blob.core.windows.net/images/runner%20clips.jpg',
        'table skirt': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20skirt.jpg',
        'bar napkins': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20napkins.jpg',
        'cocktail napkins': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20napkins.jpg',
        'cloth napkin laundry bag': 'https://cdamemoryjogger.blob.core.windows.net/images/cloth%20napkin%20laundry%20bag.jpg',
        'linen storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/linen%20storage%20box.jpg',
        'linen drawer sachets': 'https://cdamemoryjogger.blob.core.windows.net/images/linen%20drawer%20sachets.jpg',
        'table linen storage dividers': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20linen%20storage%20dividers.jpg',
        'dinner plates': 'https://cdamemoryjogger.blob.core.windows.net/images/dinner%20plates.jpg',

        'salad plates': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20plates.jpg',
        'bread plates': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20plates.jpg',
        'charger plates': 'https://cdamemoryjogger.blob.core.windows.net/images/charger%20plates.jpg',
        'bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/bowls.jpg',
        'soup bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/soup%20bowls.jpg',
        'cereal bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/cereal%20bowls.jpg',
        'serving bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20bowls.jpg',
        'platter': 'https://cdamemoryjogger.blob.core.windows.net/images/platter.jpg',
        'serving platter': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20platter.jpg',
        'gravy boat': 'https://cdamemoryjogger.blob.core.windows.net/images/gravy%20boat.jpg',
        'butter dish': 'https://cdamemoryjogger.blob.core.windows.net/images/butter%20dish.jpg',
        'salt shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20shaker.jpg',
        'pepper shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20shaker.jpg',
        'salt grinder': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20grinder.jpg',
        'pepper grinder': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20grinder.jpg',
        'sugar bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20bowl.jpg',
        'cream pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/cream%20pitcher.jpg',
        'water pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20pitcher.jpg',
        'carafe': 'https://cdamemoryjogger.blob.core.windows.net/images/carafe.jpg',
        'bread basket': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20basket.jpg',
        'bread basket liner': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20basket%20liner.jpg',
        'cake stand': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20stand.jpg',
        'tiered tray': 'https://cdamemoryjogger.blob.core.windows.net/images/tiered%20tray.jpg',
        'dessert plates': 'https://cdamemoryjogger.blob.core.windows.net/images/dessert%20plates.jpg',
        'serving trays': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20trays.jpg',
        'coffee carafe': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20carafe.jpg',
        'dinner plate storage rack': 'https://cdamemoryjogger.blob.core.windows.net/images/dinner%20plate%20storage%20rack.jpg',
        'salad plate storage rack': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20plate%20storage%20rack.jpg',
        'charger plate storage case': 'https://cdamemoryjogger.blob.core.windows.net/images/charger%20plate%20storage%20case.jpg',
        'bowl storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/bowl%20storage%20shelf.jpg',
        'sugar dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20dispenser.jpg',
        'cream pitcher storage tray': 'https://cdamemoryjogger.blob.core.windows.net/images/cream%20pitcher%20storage%20tray.jpg',
        'water carafe lid': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20carafe%20lid.jpg',
        'bread cutting board': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20cutting%20board.jpg',
        'cake dome cover': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20dome%20cover.jpg',
        'bowl stacking pads': 'https://cdamemoryjogger.blob.core.windows.net/images/bowl%20stacking%20pads.jpg',
        'serving bowl lid': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20bowl%20lid.jpg',
        'platter storage sleeve': 'https://cdamemoryjogger.blob.core.windows.net/images/platter%20storage%20sleeve.jpg',

        'gravy boat saucer': 'https://cdamemoryjogger.blob.core.windows.net/images/gravy%20boat%20saucer.jpg',
        'salt grinder refill': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20grinder%20refill.jpg',
        'pepper grinder refill': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20grinder%20refill.jpg',
        'sugar bowl lid': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20bowl%20lid.jpg',
        'cream pitcher lid': 'https://cdamemoryjogger.blob.core.windows.net/images/cream%20pitcher%20lid.jpg',
        'bowl display stand': 'https://cdamemoryjogger.blob.core.windows.net/images/bowl%20display%20stand.jpg',
        'serving bowl rack': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20bowl%20rack.jpg',
        'platter display easel': 'https://cdamemoryjogger.blob.core.windows.net/images/platter%20display%20easel.jpg',
        'gravy boat tray': 'https://cdamemoryjogger.blob.core.windows.net/images/gravy%20boat%20tray.jpg',
        'butter dish cover spare': 'https://cdamemoryjogger.blob.core.windows.net/images/butter%20dish%20cover%20spare.jpg',
        'salt cellar lid': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20cellar%20lid.jpg',
        'pepper mill spare parts': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20mill%20spare%20parts.jpg',
        'sugar bowl spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20bowl%20spoon.jpg',
        'cream pitcher tray': 'https://cdamemoryjogger.blob.core.windows.net/images/cream%20pitcher%20tray.jpg',
        'water pitcher filter insert': 'https://cdamemoryjogger.blob.core.windows.net/images/water%20pitcher%20filter%20insert.jpg',
        'serving dish warming base': 'https://cdamemoryjogger.blob.core.windows.net/images/serving%20dish%20warming%20base.jpg',
        'platter cover': 'https://cdamemoryjogger.blob.core.windows.net/images/platter%20cover.jpg',
        'food tent mesh cover': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20tent%20mesh%20cover.jpg',
        'cheese board': 'https://cdamemoryjogger.blob.core.windows.net/images/cheese%20board.jpg',
        'cheese knives': 'https://cdamemoryjogger.blob.core.windows.net/images/cheese%20knives.jpg',
        'cheese markers': 'https://cdamemoryjogger.blob.core.windows.net/images/cheese%20markers.jpg',
        'charcuterie board': 'https://cdamemoryjogger.blob.core.windows.net/images/charcuterie%20board.jpg',
        'charcuterie bowls': 'https://cdamemoryjogger.blob.core.windows.net/images/charcuterie%20bowls.jpg',
        'olive dish': 'https://cdamemoryjogger.blob.core.windows.net/images/olive%20dish.jpg',
        'dip bowl set': 'https://cdamemoryjogger.blob.core.windows.net/images/dip%20bowl%20set.jpg',
        'chip and dip platter': 'https://cdamemoryjogger.blob.core.windows.net/images/chip%20and%20dip%20platter.jpg',
        'nut bowl set': 'https://cdamemoryjogger.blob.core.windows.net/images/nut%20bowl%20set.jpg',
        'salad bowl set': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20bowl%20set.jpg',
        'salad servers': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20servers.jpg',
        'salad dressing cruet': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20dressing%20cruet.jpg',
        'oil bottle dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/oil%20bottle%20dispenser.jpg',

        'vinegar bottle dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/vinegar%20bottle%20dispenser.jpg',
        'salt cellar spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20cellar%20spoon.jpg',
        'honey jar': 'https://cdamemoryjogger.blob.core.windows.net/images/honey%20jar.jpg',
        'wine glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20glasses.jpg',
        'champagne flutes': 'https://cdamemoryjogger.blob.core.windows.net/images/champagne%20flutes.jpg',
        'cocktail glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20glasses.jpg',
        'highball glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/highball%20glasses.jpg',
        'lowball glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/lowball%20glasses.jpg',
        'beer mugs': 'https://cdamemoryjogger.blob.core.windows.net/images/beer%20mugs.jpg',
        'pint glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/pint%20glasses.jpg',
        'shot glasses': 'https://cdamemoryjogger.blob.core.windows.net/images/shot%20glasses.jpg',
        'coffee cups': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20cups.jpg',
        'tea cups': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20cups.jpg',
        'saucers': 'https://cdamemoryjogger.blob.core.windows.net/images/saucers.jpg',
        'mugs': 'https://cdamemoryjogger.blob.core.windows.net/images/mugs.jpg',
        'glassware storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/glassware%20storage%20box.jpg',
        'highball glass storage rack': 'https://cdamemoryjogger.blob.core.windows.net/images/highball%20glass%20storage%20rack.jpg',
        'coffee cup organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20cup%20organizer.jpg',
        'tea cup display shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20cup%20display%20shelf.jpg',
        'mug tree': 'https://cdamemoryjogger.blob.core.windows.net/images/mug%20tree.jpg',
        'glassware padding inserts': 'https://cdamemoryjogger.blob.core.windows.net/images/glassware%20padding%20inserts.jpg',
        'coffee cup saucer set': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20cup%20saucer%20set.jpg',
        'glassware display stand': 'https://cdamemoryjogger.blob.core.windows.net/images/glassware%20display%20stand.jpg',
        'coffee cup wall rack': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20cup%20wall%20rack.jpg',
        'tea cup hanging rack': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20cup%20hanging%20rack.jpg',
        'glassware padding wrap': 'https://cdamemoryjogger.blob.core.windows.net/images/glassware%20padding%20wrap.jpg',
        'wine glass charms': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20glass%20charms.jpg',
        'glassware drying cloth': 'https://cdamemoryjogger.blob.core.windows.net/images/glassware%20drying%20cloth.jpg',
        'flatware set': 'https://cdamemoryjogger.blob.core.windows.net/images/flatware%20set.jpg',
        'dinner forks': 'https://cdamemoryjogger.blob.core.windows.net/images/dinner%20forks.jpg',
        'salad forks': 'https://cdamemoryjogger.blob.core.windows.net/images/salad%20forks.jpg',
        'dinner knives': 'https://cdamemoryjogger.blob.core.windows.net/images/dinner%20knives.jpg',
        'steak knives': 'https://cdamemoryjogger.blob.core.windows.net/images/steak%20knives.jpg',
        'soup spoons': 'https://cdamemoryjogger.blob.core.windows.net/images/soup%20spoons.jpg',
        'teaspoons': 'https://cdamemoryjogger.blob.core.windows.net/images/teaspoons.jpg',
        'ladle': 'https://cdamemoryjogger.blob.core.windows.net/images/ladle.jpg',
        'tongs': 'https://cdamemoryjogger.blob.core.windows.net/images/tongs.jpg',
        'cake server': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20server.jpg',
        'pie server': 'https://cdamemoryjogger.blob.core.windows.net/images/pie%20server.jpg',
        'ice tongs': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20tongs.jpg',
        'bar spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20spoon.jpg',
        'flatware drawer tray': 'https://cdamemoryjogger.blob.core.windows.net/images/flatware%20drawer%20tray.jpg',
        'steak knife storage block': 'https://cdamemoryjogger.blob.core.windows.net/images/steak%20knife%20storage%20block.jpg',
        'ladle holder': 'https://cdamemoryjogger.blob.core.windows.net/images/ladle%20holder.jpg',
        'tongs stainless steel': 'https://cdamemoryjogger.blob.core.windows.net/images/tongs%20stainless%20steel.jpg',

        'cake knife': 'https://cdamemoryjogger.blob.core.windows.net/images/cake%20knife.jpg',
        'pie server stainless steel': 'https://cdamemoryjogger.blob.core.windows.net/images/pie%20server%20stainless%20steel.jpg',
        'bread knife': 'https://cdamemoryjogger.blob.core.windows.net/images/bread%20knife.jpg',
        'fondue forks': 'https://cdamemoryjogger.blob.core.windows.net/images/fondue%20forks.jpg',
        'flatware polishing kit': 'https://cdamemoryjogger.blob.core.windows.net/images/flatware%20polishing%20kit.jpg',
        'steak knife sharpening kit': 'https://cdamemoryjogger.blob.core.windows.net/images/steak%20knife%20sharpening%20kit.jpg',
        'ice tongs holder': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20tongs%20holder.jpg',
        'tea infuser spoon': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20infuser%20spoon.jpg',
        'wine rack': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20rack.jpg',
        'wine opener': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20opener.jpg',
        'wine stopper': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20stopper.jpg',
        'wine aerator': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20aerator.jpg',
        'ice bucket': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20bucket.jpg',
        'bar tool set': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20tool%20set.jpg',
        'cocktail shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20shaker.jpg',
        'jigger': 'https://cdamemoryjogger.blob.core.windows.net/images/jigger.jpg',
        'decanter': 'https://cdamemoryjogger.blob.core.windows.net/images/decanter.jpg',
        'liquor decanter': 'https://cdamemoryjogger.blob.core.windows.net/images/liquor%20decanter.jpg',
        'drink mixing glass': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20mixing%20glass.jpg',
        'coasters': 'https://cdamemoryjogger.blob.core.windows.net/images/coasters.jpg',
        'coaster holder': 'https://cdamemoryjogger.blob.core.windows.net/images/coaster%20holder.jpg',
        'drink dispenser': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20dispenser.jpg',
        'beverage tub': 'https://cdamemoryjogger.blob.core.windows.net/images/beverage%20tub.jpg',
        'wine bottle stopper set': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20bottle%20stopper%20set.jpg',
        'ice scoop': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20scoop.jpg',
        'ice mold tray': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20mold%20tray.jpg',
        'bar mat': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20mat.jpg',
        'cocktail strainer': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20strainer.jpg',

        'mudler': 'https://cdamemoryjogger.blob.core.windows.net/images/mudler.jpg',
        'drink stirrers': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20stirrers.jpg',
        'drink garnish tray': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20garnish%20tray.jpg',
        'liquor pour spouts': 'https://cdamemoryjogger.blob.core.windows.net/images/liquor%20pour%20spouts.jpg',
        'coaster set stone': 'https://cdamemoryjogger.blob.core.windows.net/images/coaster%20set%20stone.jpg',
        'coaster set cork': 'https://cdamemoryjogger.blob.core.windows.net/images/coaster%20set%20cork.jpg',
        'wine rack wall mount': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20rack%20wall%20mount.jpg',
        'cocktail glass cleaning cloth': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20glass%20cleaning%20cloth.jpg',
        'wine rack floor stand': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20rack%20floor%20stand.jpg',
        'wine bottle storage crate': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20bottle%20storage%20crate.jpg',
        'wine fridge': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20fridge.jpg',
        'wine fridge shelves': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20fridge%20shelves.jpg',
        'wine fridge drip tray': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20fridge%20drip%20tray.jpg',
        'wine fridge charcoal filter': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20fridge%20charcoal%20filter.jpg',
        'wine fridge thermometer probe': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20fridge%20thermometer%20probe.jpg',
        'wine fridge humidity gauge': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20fridge%20humidity%20gauge.jpg',
        'wine bottle label tags': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20bottle%20label%20tags.jpg',
        'wine bottle marker pen': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20bottle%20marker%20pen.jpg',
        'wine bottle drip rings': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20bottle%20drip%20rings.jpg',
        'wine bottle foil cutter': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20bottle%20foil%20cutter.jpg',
        'wine bottle opener electric': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20bottle%20opener%20electric.jpg',
        'wine corkscrew lever': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20corkscrew%20lever.jpg',
        'wine cork extractor': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20cork%20extractor.jpg',

        'bar caddy': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20caddy.jpg',
        'drink stirrer set': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20stirrer%20set.jpg',
        'cocktail picks': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20picks.jpg',
        'cocktail pick holder': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20pick%20holder.jpg',
        'bitters bottles': 'https://cdamemoryjogger.blob.core.windows.net/images/bitters%20bottles.jpg',
        'bitters dropper caps': 'https://cdamemoryjogger.blob.core.windows.net/images/bitters%20dropper%20caps.jpg',
        'simple syrup bottles': 'https://cdamemoryjogger.blob.core.windows.net/images/simple%20syrup%20bottles.jpg',
        'mixer bottles': 'https://cdamemoryjogger.blob.core.windows.net/images/mixer%20bottles.jpg',
        'ice sphere mold': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20sphere%20mold.jpg',
        'whiskey stones': 'https://cdamemoryjogger.blob.core.windows.net/images/whiskey%20stones.jpg',
        'whiskey stone pouch': 'https://cdamemoryjogger.blob.core.windows.net/images/whiskey%20stone%20pouch.jpg',
        'bar strainer fine mesh': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20strainer%20fine%20mesh.jpg',
        'cocktail shaker weighted tins': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20shaker%20weighted%20tins.jpg',
        'cocktail shaker insulation sleeve': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20shaker%20insulation%20sleeve.jpg',
        'cocktail rimmer': 'https://cdamemoryjogger.blob.core.windows.net/images/cocktail%20rimmer.jpg',
        'liquor bottle shelf': 'https://cdamemoryjogger.blob.core.windows.net/images/liquor%20bottle%20shelf.jpg',
        'liquor bottle risers': 'https://cdamemoryjogger.blob.core.windows.net/images/liquor%20bottle%20risers.jpg',
        'liquor bottle pour spout caps': 'https://cdamemoryjogger.blob.core.windows.net/images/liquor%20bottle%20pour%20spout%20caps.jpg',
        'pour spout dust covers': 'https://cdamemoryjogger.blob.core.windows.net/images/pour%20spout%20dust%20covers.jpg',
        'speed pourer set': 'https://cdamemoryjogger.blob.core.windows.net/images/speed%20pourer%20set.jpg',
        'bar rail mat': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20rail%20mat.jpg',
        'bar rail liner': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20rail%20liner.jpg',
        'bar towel set': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20towel%20set.jpg',
        'bar towel holder': 'https://cdamemoryjogger.blob.core.windows.net/images/bar%20towel%20holder.jpg',
        'drink dispenser infuser tube': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20dispenser%20infuser%20tube.jpg',
        'drink dispenser ice core': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20dispenser%20ice%20core.jpg',
        'drink dispenser drip tray': 'https://cdamemoryjogger.blob.core.windows.net/images/drink%20dispenser%20drip%20tray.jpg',
        'beverage tub drain plug': 'https://cdamemoryjogger.blob.core.windows.net/images/beverage%20tub%20drain%20plug.jpg',
        'beverage tub liner': 'https://cdamemoryjogger.blob.core.windows.net/images/beverage%20tub%20liner.jpg',
        'ice bucket stand base': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20bucket%20stand%20base.jpg',
        'ice bucket drip mat': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20bucket%20drip%20mat.jpg',
        'ice scoop holder': 'https://cdamemoryjogger.blob.core.windows.net/images/ice%20scoop%20holder.jpg',
        'tea pot': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20pot.jpg',
        'coffee warmer plate': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20warmer%20plate.jpg',
        'tea infuser': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20infuser.jpg',
        'tea strainer': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20strainer.jpg',
        'tea pot infuser insert': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20pot%20infuser%20insert.jpg',
        'pitcher infuser insert': 'https://cdamemoryjogger.blob.core.windows.net/images/pitcher%20infuser%20insert.jpg',
        'tea kettle electric': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20kettle%20electric.jpg',
        'tea kettle base': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20kettle%20base.jpg',
        'tea canister set': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20canister%20set.jpg',
        'tea canister labels': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20canister%20labels.jpg',
        'tea infuser basket': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20infuser%20basket.jpg',
        'tea warmer candle base': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20warmer%20candle%20base.jpg',
        'tea warmer plate': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20warmer%20plate.jpg',
        'tea storage organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20storage%20organizer.jpg',
        'coffee bean canister': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20bean%20canister.jpg',
        'coffee scoop': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20scoop.jpg',

        'coffee filter basket': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20filter%20basket.jpg',
        'coffee pod holder': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20pod%20holder.jpg',
        'coffee pod drawer': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20pod%20drawer.jpg',
        'tea strainer stand': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20strainer%20stand.jpg',
        'table centerpiece': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20centerpiece.jpg',
        'decorative tray': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20tray.jpg',
        'candle holders': 'https://cdamemoryjogger.blob.core.windows.net/images/candle%20holders.jpg',
        'candles': 'https://cdamemoryjogger.blob.core.windows.net/images/candles.jpg',
        'wall art': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20art.jpg',
        'picture frames': 'https://cdamemoryjogger.blob.core.windows.net/images/picture%20frames.jpg',
        'wall mirror': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20mirror.jpg',
        'wall clock': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20clock.jpg',
        'seasonal centerpiece decor': 'https://cdamemoryjogger.blob.core.windows.net/images/seasonal%20centerpiece%20decor.jpg',
        'holiday candle holders': 'https://cdamemoryjogger.blob.core.windows.net/images/holiday%20candle%20holders.jpg',
        'centerpiece storage crate': 'https://cdamemoryjogger.blob.core.windows.net/images/centerpiece%20storage%20crate.jpg',
        'decorative tray liner': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20tray%20liner.jpg',
        'candle snuffer': 'https://cdamemoryjogger.blob.core.windows.net/images/candle%20snuffer.jpg',
        'candle wick trimmer': 'https://cdamemoryjogger.blob.core.windows.net/images/candle%20wick%20trimmer.jpg',
        'wall clock battery pack': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20clock%20battery%20pack.jpg',
        'seasonal table decor bin': 'https://cdamemoryjogger.blob.core.windows.net/images/seasonal%20table%20decor%20bin.jpg',
        'centerpiece vase set': 'https://cdamemoryjogger.blob.core.windows.net/images/centerpiece%20vase%20set.jpg',
        'candle storage box': 'https://cdamemoryjogger.blob.core.windows.net/images/candle%20storage%20box.jpg',
        'candle lighter': 'https://cdamemoryjogger.blob.core.windows.net/images/candle%20lighter.jpg',
        'wall art dust cover': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20art%20dust%20cover.jpg',
        'seasonal decor table sign': 'https://cdamemoryjogger.blob.core.windows.net/images/seasonal%20decor%20table%20sign.jpg',
        'holiday centerpiece box': 'https://cdamemoryjogger.blob.core.windows.net/images/holiday%20centerpiece%20box.jpg',
        'centerpiece decorative stones': 'https://cdamemoryjogger.blob.core.windows.net/images/centerpiece%20decorative%20stones.jpg',
        'decorative tray handles': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20tray%20handles.jpg',
        'candle storage sleeve': 'https://cdamemoryjogger.blob.core.windows.net/images/candle%20storage%20sleeve.jpg',
        'candle wax remover': 'https://cdamemoryjogger.blob.core.windows.net/images/candle%20wax%20remover.jpg',
        'wall art frame set': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20art%20frame%20set.jpg',
        'wall clock repair kit': 'https://cdamemoryjogger.blob.core.windows.net/images/wall%20clock%20repair%20kit.jpg',
        'table decor riser': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20decor%20riser.jpg',
        'centerpiece foam blocks': 'https://cdamemoryjogger.blob.core.windows.net/images/centerpiece%20foam%20blocks.jpg',
        'floral wire': 'https://cdamemoryjogger.blob.core.windows.net/images/floral%20wire.jpg',
        'floral tape': 'https://cdamemoryjogger.blob.core.windows.net/images/floral%20tape.jpg',
        'flower frog': 'https://cdamemoryjogger.blob.core.windows.net/images/flower%20frog.jpg',
        'vase filler beads': 'https://cdamemoryjogger.blob.core.windows.net/images/vase%20filler%20beads.jpg',
        'vase filler stones': 'https://cdamemoryjogger.blob.core.windows.net/images/vase%20filler%20stones.jpg',
        'table decor LED string lights': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20decor%20LED%20string%20lights.jpg',
        'fairy light battery pack': 'https://cdamemoryjogger.blob.core.windows.net/images/fairy%20light%20battery%20pack.jpg',
        'battery pack organizer': 'https://cdamemoryjogger.blob.core.windows.net/images/battery%20pack%20organizer.jpg',
        'remote timer plug': 'https://cdamemoryjogger.blob.core.windows.net/images/remote%20timer%20plug.jpg',
        'decorative bowl': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20bowl.jpg',
        'decorative vase': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20vase.jpg',
        'decorative pitcher': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20pitcher.jpg',
        'decorative lantern': 'https://cdamemoryjogger.blob.core.windows.net/images/decorative%20lantern.jpg',
        'tabletop sculpture': 'https://cdamemoryjogger.blob.core.windows.net/images/tabletop%20sculpture.jpg',
        'mantel clock': 'https://cdamemoryjogger.blob.core.windows.net/images/mantel%20clock.jpg',
        'framed print': 'https://cdamemoryjogger.blob.core.windows.net/images/framed%20print.jpg',

        'gallery wall frame set': 'https://cdamemoryjogger.blob.core.windows.net/images/gallery%20wall%20frame%20set.jpg',
        'mirror frame': 'https://cdamemoryjogger.blob.core.windows.net/images/mirror%20frame.jpg',
        'light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/images/light%20bulbs.jpg',
        'window curtains': 'https://cdamemoryjogger.blob.core.windows.net/images/window%20curtains.jpg',
        'door stop': 'https://cdamemoryjogger.blob.core.windows.net/images/door%20stop.jpg',
        'floor lamp': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20lamp.jpg',
        'table lamp': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20lamp.jpg',
        'lamp shade': 'https://cdamemoryjogger.blob.core.windows.net/images/lamp%20shade.jpg',
        'lamp bulbs': 'https://cdamemoryjogger.blob.core.windows.net/images/lamp%20bulbs.jpg',
        'door draft stopper': 'https://cdamemoryjogger.blob.core.windows.net/images/door%20draft%20stopper.jpg',
        'table lamp finial': 'https://cdamemoryjogger.blob.core.windows.net/images/table%20lamp%20finial.jpg',
        'lamp harp': 'https://cdamemoryjogger.blob.core.windows.net/images/lamp%20harp.jpg',
        'floor lamp base weight': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20lamp%20base%20weight.jpg',
        'lamp cord cover': 'https://cdamemoryjogger.blob.core.windows.net/images/lamp%20cord%20cover.jpg',
        'silverware storage chest': 'https://cdamemoryjogger.blob.core.windows.net/images/silverware%20storage%20chest.jpg',
        'tableware organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/images/tableware%20organizer%20tray.jpg',
        'champagne flute storage case': 'https://cdamemoryjogger.blob.core.windows.net/images/champagne%20flute%20storage%20case.jpg',
        'beer mug storage crate': 'https://cdamemoryjogger.blob.core.windows.net/images/beer%20mug%20storage%20crate.jpg',
        'tableware storage labels': 'https://cdamemoryjogger.blob.core.windows.net/images/tableware%20storage%20labels.jpg',
        'holiday china storage case': 'https://cdamemoryjogger.blob.core.windows.net/images/holiday%20china%20storage%20case.jpg',
        'china display stand': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20display%20stand.jpg',
        'china storage divider': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20storage%20divider.jpg',
        'rug storage bag': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20storage%20bag.jpg',
        'area rug': 'https://cdamemoryjogger.blob.core.windows.net/images/area%20rug.jpg',
        'rug pad': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20pad.jpg',
        'floor runner': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20runner.jpg',
        'area rug corner tape': 'https://cdamemoryjogger.blob.core.windows.net/images/area%20rug%20corner%20tape.jpg',
        'rug cleaning spray': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20cleaning%20spray.jpg',
        'floor runner anti slip pad': 'https://cdamemoryjogger.blob.core.windows.net/images/floor%20runner%20anti%20slip%20pad.jpg',
        'area rug beater tool': 'https://cdamemoryjogger.blob.core.windows.net/images/area%20rug%20beater%20tool.jpg',
        'rug storage roll': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20storage%20roll.jpg',
        'area rug cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/images/area%20rug%20cleaning%20kit.jpg',
        'rug brush': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20brush.jpg',
        'rug fringe comb': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20fringe%20comb.jpg',
        'rug tape double sided': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20tape%20double%20sided.jpg',

        'runner rug tape': 'https://cdamemoryjogger.blob.core.windows.net/images/runner%20rug%20tape.jpg',
        'rug grippers': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20grippers.jpg',
        'rug corner weights': 'https://cdamemoryjogger.blob.core.windows.net/images/rug%20corner%20weights.jpg',
        'felt pads bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/images/felt%20pads%20bulk%20pack.jpg',
        'furniture sliders': 'https://cdamemoryjogger.blob.core.windows.net/images/furniture%20sliders.jpg',
        'furniture leveling shims': 'https://cdamemoryjogger.blob.core.windows.net/images/furniture%20leveling%20shims.jpg',
        'wood filler': 'https://cdamemoryjogger.blob.core.windows.net/images/wood%20filler.jpg',
        'wood stain pen': 'https://cdamemoryjogger.blob.core.windows.net/images/wood%20stain%20pen.jpg',
        'wood polish cloth': 'https://cdamemoryjogger.blob.core.windows.net/images/wood%20polish%20cloth.jpg',
        'wood cleaner concentrate': 'https://cdamemoryjogger.blob.core.windows.net/images/wood%20cleaner%20concentrate.jpg',
        'wood conditioner oil': 'https://cdamemoryjogger.blob.core.windows.net/images/wood%20conditioner%20oil.jpg',
        'china polishing cloth': 'https://cdamemoryjogger.blob.core.windows.net/images/china%20polishing%20cloth.jpg',
        'silver polish': 'https://cdamemoryjogger.blob.core.windows.net/images/silver%20polish.jpg',
        'furniture polish': 'https://cdamemoryjogger.blob.core.windows.net/images/furniture%20polish.jpg',
        'glass cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20cleaner.jpg',
        'all purpose cleaner': 'https://cdamemoryjogger.blob.core.windows.net/images/all%20purpose%20cleaner.jpg',
        'disinfecting wipes': 'https://cdamemoryjogger.blob.core.windows.net/images/disinfecting%20wipes.jpg',
        'microfiber cloths': 'https://cdamemoryjogger.blob.core.windows.net/images/microfiber%20cloths.jpg',
        'paper towels': 'https://cdamemoryjogger.blob.core.windows.net/images/paper%20towels.jpg',
        'trash can': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20can.jpg',
        'trash bags': 'https://cdamemoryjogger.blob.core.windows.net/images/trash%20bags.jpg',
        'recycling bin': 'https://cdamemoryjogger.blob.core.windows.net/images/recycling%20bin.jpg',
        'step stool': 'https://cdamemoryjogger.blob.core.windows.net/images/step%20stool.jpg',
        'mirror cleaning spray': 'https://cdamemoryjogger.blob.core.windows.net/images/mirror%20cleaning%20spray.jpg',
        'wine glass cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20glass%20cleaning%20brush.jpg',
        'champagne flute cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/images/champagne%20flute%20cleaning%20brush.jpg',
        'beer mug cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/images/beer%20mug%20cleaning%20brush.jpg',
        'furniture polish spray': 'https://cdamemoryjogger.blob.core.windows.net/images/furniture%20polish%20spray.jpg',
        'all purpose cleaner gallon': 'https://cdamemoryjogger.blob.core.windows.net/images/all%20purpose%20cleaner%20gallon.jpg',
        'disinfectant wipe refill': 'https://cdamemoryjogger.blob.core.windows.net/images/disinfectant%20wipe%20refill.jpg',
        'step stool rubber feet': 'https://cdamemoryjogger.blob.core.windows.net/images/step%20stool%20rubber%20feet.jpg',
        'silverware polishing gloves': 'https://cdamemoryjogger.blob.core.windows.net/images/silverware%20polishing%20gloves.jpg',
        'beverage dispenser cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/images/beverage%20dispenser%20cleaning%20brush.jpg',
        
        'paper towel holder wall mount': 'https://cdamemoryjogger.blob.core.windows.net/images/paper%20towel%20holder%20wall%20mount.jpg',
        'beverage dispenser spigot': 'https://cdamemoryjogger.blob.core.windows.net/images/beverage%20dispenser%20spigot.jpg',
        'silver storage anti tarnish strips': 'https://cdamemoryjogger.blob.core.windows.net/images/silver%20storage%20anti%20tarnish%20strips.jpg',
        'mug cabinet riser': 'https://cdamemoryjogger.blob.core.windows.net/images/mug%20cabinet%20riser.jpg',
        'silverware anti tarnish cloth': 'https://cdamemoryjogger.blob.core.windows.net/images/silverware%20anti%20tarnish%20cloth.jpg',
        'chafing dish cover': 'https://cdamemoryjogger.blob.core.windows.net/images/chafing%20dish%20cover.jpg',
        'fondue pot burner cap': 'https://cdamemoryjogger.blob.core.windows.net/images/fondue%20pot%20burner%20cap.jpg',
        'ironing board tabletop': 'https://cdamemoryjogger.blob.core.windows.net/images/ironing%20board%20tabletop.jpg',
        'iron travel': 'https://cdamemoryjogger.blob.core.windows.net/images/iron%20travel.jpg',
        'steamer travel': 'https://cdamemoryjogger.blob.core.windows.net/images/steamer%20travel.jpg',
        'anti tarnish silver bags': 'https://cdamemoryjogger.blob.core.windows.net/images/anti%20tarnish%20silver%20bags.jpg',
        'anti tarnish strips': 'https://cdamemoryjogger.blob.core.windows.net/images/anti%20tarnish%20strips.jpg',
        'silver storage rolls': 'https://cdamemoryjogger.blob.core.windows.net/images/silver%20storage%20rolls.jpg',
        'silver storage pouches': 'https://cdamemoryjogger.blob.core.windows.net/images/silver%20storage%20pouches.jpg',

//office / study
        'desk': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk.jpg',
        'standing desk': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/standing%20desk.jpg',
        'desk legs': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20legs.jpg',
        'desk hutch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20hutch.jpg',
        'desk return': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20return.jpg',
        'side table': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/side%20table.jpg',
        'console table': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/console%20table.jpg',
        'desk lamp': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20lamp.jpg',
        'table lamp': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/table%20lamp.jpg',
        'desktop computer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20computer.jpg',
        'tablet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet.jpg',
        'tablet charger': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20charger.jpg',
        'desk organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20organizer.jpg',
        'desk calendar': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20calendar.jpg',
        'desk leg levelers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20leg%20levelers.jpg',
        'desk corner protectors': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20corner%20protectors.jpg',
        'desk cable grommet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20cable%20grommet.jpg',
        'desk drawer slides': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20slides.jpg',
        'desk drawer lock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20lock.jpg',
        'side table drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/side%20table%20drawer%20liner.jpg',
       
        'console table anti tip strap': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/console%20table%20anti%20tip%20strap.jpg',
        'desk lamp replacement bulb': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20lamp%20replacement%20bulb.jpg',
        'table lamp replacement shade': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/table%20lamp%20replacement%20shade.jpg',
        'desktop computer cables': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20computer%20cables.jpg',
        'laptop stand adjustable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20stand%20adjustable.jpg',
        'tablet stand holder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20stand%20holder.jpg',
        'tablet charging cable spare': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20charging%20cable%20spare.jpg',
        'desk drawer felt liner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20felt%20liner.jpg',
        'desk planner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20planner.jpg',
        'foot rest adjustable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/foot%20rest%20adjustable.jpg',
        'measuring tape retractable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/measuring%20tape%20retractable.jpg',
        'desk modesty panel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20modesty%20panel.jpg',
        'desk cable tray under mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20cable%20tray%20under%20mount.jpg',
        'desk leveling shims': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20leveling%20shims.jpg',
        'desk drawer handles': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20handles.jpg',
        'desk drawer dividers bamboo': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20dividers%20bamboo.jpg',
        'side table leg pads': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/side%20table%20leg%20pads.jpg',
        'console table drawer pulls': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/console%20table%20drawer%20pulls.jpg',
        'desk lamp dimmer switch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20lamp%20dimmer%20switch.jpg',
        'table lamp finial': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/table%20lamp%20finial.jpg',
        'desktop power supply': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20power%20supply.jpg',
        'tablet screen protector': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20screen%20protector.jpg',
        'microphone stand desk mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microphone%20stand%20desk%20mount.jpg',
        'tablet charging dock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20charging%20dock.jpg',
        'desk organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20organizer%20tray.jpg',
        'desk calendar stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20calendar%20stand.jpg',
        'desk surface protector pad': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20surface%20protector%20pad.jpg',
        'desk corner guards': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20corner%20guards.jpg',
        'desk support brackets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20support%20brackets.jpg',
   
        'storage cabinet adjustable shelves': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20cabinet%20adjustable%20shelves.jpg',
        'side table reinforcement brackets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/side%20table%20reinforcement%20brackets.jpg',
        'console table leg braces': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/console%20table%20leg%20braces.jpg',
        'desk lamp smart bulb': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20lamp%20smart%20bulb.jpg',
        'table lamp cord cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/table%20lamp%20cord%20cover.jpg',
        'desktop cable organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20cable%20organizer%20tray.jpg',
        'tablet stand adjustable metal': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20stand%20adjustable%20metal.jpg',
        'desk drawer lock kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20lock%20kit.jpg',
        'mail sorter desktop': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mail%20sorter%20desktop.jpg',
        'desk planner refill pages': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20planner%20refill%20pages.jpg',
        'legal pad desk tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/legal%20pad%20desk%20tray.jpg',
        'foot rest adjustable metal': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/foot%20rest%20adjustable%20metal.jpg',
        'cable management under desk rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20management%20under%20desk%20rack.jpg',
        'desk privacy panel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20privacy%20panel.jpg',
        'desk name plate': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20name%20plate.jpg',
        'corner desk': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/corner%20desk.jpg',
        'executive desk': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/executive%20desk.jpg',
        'roll top desk': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/roll%20top%20desk.jpg',
        'writing desk': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/writing%20desk.jpg',
        'secretary desk': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/secretary%20desk.jpg',
        'drafting table': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drafting%20table.jpg',
        'desk drawer divider set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20divider%20set.jpg',
        'desk drawer pencil tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20pencil%20tray.jpg',
        'desk drawer cable port': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20cable%20port.jpg',
        'desk cable spine': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20cable%20spine.jpg',
        'under desk keyboard drawer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/under%20desk%20keyboard%20drawer.jpg',
        'under desk CPU mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/under%20desk%20CPU%20mount.jpg',
        'under desk storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/under%20desk%20storage%20shelf.jpg',
        'under desk headphone hook': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/under%20desk%20headphone%20hook.jpg',
        'under desk foot hammock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/under%20desk%20foot%20hammock.jpg',
        'desk cable clamp': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20cable%20clamp.jpg',
        'desk blotter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20blotter.jpg',
        'desk writing pad': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20writing%20pad.jpg',
        'desk glass top protector': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20glass%20top%20protector.jpg',
        'desk corner clamp light': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20corner%20clamp%20light.jpg',
        'desk pen tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20pen%20tray.jpg',
        'desk cable pass through': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20cable%20pass%20through.jpg',
        'desk power grommet outlet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20power%20grommet%20outlet.jpg',
        'desk drawer tray insert': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20tray%20insert.jpg',
        'desk side hanging file rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20side%20hanging%20file%20rack.jpg',
        'desk privacy screen panel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20privacy%20screen%20panel.jpg',
        'desktop bookshelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20bookshelf.jpg',
        'desktop file sorter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20file%20sorter.jpg',
        'desktop mail tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20mail%20tray.jpg',
        'desktop supply caddy': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20supply%20caddy.jpg',
        'credenza adjustable shelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/credenza%20adjustable%20shelf.jpg',
        'acoustic desk divider': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/acoustic%20desk%20divider.jpg',
        'desktop microphone boom arm': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20microphone%20boom%20arm.jpg',
        'microphone desk stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microphone%20desk%20stand.jpg',
        'microphone desk clamp': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microphone%20desk%20clamp.jpg',

        'ring light desk mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ring%20light%20desk%20mount.jpg',
        'desktop NAS storage': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desktop%20NAS%20storage.jpg',
        'desk filing tray metal': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20filing%20tray%20metal.jpg',
        'calendar desk pad': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/calendar%20desk%20pad.jpg',
        'portable projector': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/portable%20projector.jpg',
        'desk drawer lock cylinder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20lock%20cylinder.jpg',
        'desk lock key spare': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20lock%20key%20spare.jpg',
        'desk hinge repair kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20hinge%20repair%20kit.jpg',
        'desk panel fasteners': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20panel%20fasteners.jpg',
        'desk frame bolts': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20frame%20bolts.jpg',
        'desk cross support bar': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20cross%20support%20bar.jpg',
        'desk reinforcement plate': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20reinforcement%20plate.jpg',
        'desk underside wire basket': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20underside%20wire%20basket.jpg',
        'desk shelf add on': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20shelf%20add%20on.jpg',
        'desk side pocket organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20side%20pocket%20organizer.jpg',
        'standing desk motor': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/standing%20desk%20motor.jpg',
        'standing desk control panel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/standing%20desk%20control%20panel.jpg',
        'standing desk anti collision sensor': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/standing%20desk%20anti%20collision%20sensor.jpg',
        'desk drawer soft close adapter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20soft%20close%20adapter.jpg',
        'monitor desk clamp arm dual': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20desk%20clamp%20arm%20dual.jpg',
        'monitor desk clamp arm triple': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20desk%20clamp%20arm%20triple.jpg',
        'tablet stylus pen': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20stylus%20pen.jpg',
        'tablet stylus replacement tips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20stylus%20replacement%20tips.jpg',
        'tablet keyboard case': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20keyboard%20case.jpg',
        'tablet folio cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20folio%20cover.jpg',
        'tablet screen cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20screen%20cleaning%20kit.jpg',
        'tablet stand adjustable arm': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20stand%20adjustable%20arm.jpg',
        'tablet security lock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20security%20lock.jpg',
        'tablet pen holder clip': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20pen%20holder%20clip.jpg',
        'tablet docking station': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20docking%20station.jpg',
        'tablet storage sleeve': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tablet%20storage%20sleeve.jpg',
        'charging cable retractable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/charging%20cable%20retractable.jpg',
        'portable power bank': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/portable%20power%20bank.jpg',
        'portable document scanner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/portable%20document%20scanner.jpg',
        'desk drawer power outlet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20drawer%20power%20outlet.jpg',
        'under desk surge strip': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/under%20desk%20surge%20strip.jpg',
        'under desk cable hammock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/under%20desk%20cable%20hammock.jpg',
        'desk clamp cup holder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20clamp%20cup%20holder.jpg',
        'desk side hook set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20side%20hook%20set.jpg',
        'desk side cable pouch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20side%20cable%20pouch.jpg',
        'desk side waste bin': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20side%20waste%20bin.jpg',
        'desk side magazine rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20side%20magazine%20rack.jpg',
        'desk side drawer add on': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20side%20drawer%20add%20on.jpg',
 
        'desk corner shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20corner%20shelf%20riser.jpg',
        'portable room divider panel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/portable%20room%20divider%20panel.jpg',
        'soundproof desk booth': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/soundproof%20desk%20booth.jpg',
        'desk mounted privacy wing': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/desk%20mounted%20privacy%20wing.jpg',
        'acoustic desk pad': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/acoustic%20desk%20pad.jpg',
        'anti glare desk mat': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/anti%20glare%20desk%20mat.jpg',
        'anti static desk mat': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/anti%20static%20desk%20mat.jpg',
        'office chair': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair.jpg',
        'office chair mat': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20mat.jpg',
        'step stool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/step%20stool.jpg',
        'office chair armrest pads': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20armrest%20pads.jpg',
        'office chair replacement wheels': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20replacement%20wheels.jpg',
        'chair floor protectors': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20floor%20protectors.jpg',
        'step stool rubber feet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/step%20stool%20rubber%20feet.jpg',
        'office chair lumbar support': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20lumbar%20support.jpg',
        'office chair gas lift cylinder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20gas%20lift%20cylinder.jpg',
        'office chair tilt mechanism': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20tilt%20mechanism.jpg',
        'office chair base replacement': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20base%20replacement.jpg',
        'chair wheel floor protectors': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20wheel%20floor%20protectors.jpg',
        'drafting stool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drafting%20stool.jpg',
        'kneeling chair': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/kneeling%20chair.jpg',
        'task chair': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/task%20chair.jpg',
        'guest chair': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/guest%20chair.jpg',
        'ergonomic chair headrest': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ergonomic%20chair%20headrest.jpg',
        'chair armrest replacement': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20armrest%20replacement.jpg',
        'chair armrest screw set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20armrest%20screw%20set.jpg',
        'chair tilt control handle': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20tilt%20control%20handle.jpg',
        'chair lumbar pillow': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20lumbar%20pillow.jpg',
        'chair seat cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20seat%20cover.jpg',
        'chair upholstery repair kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20upholstery%20repair%20kit.jpg',
        'chair gas lift removal tool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/chair%20gas%20lift%20removal%20tool.jpg',
        'office chair back mesh replacement': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20back%20mesh%20replacement.jpg',
        'office chair glide feet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/office%20chair%20glide%20feet.jpg',
        'bookcase': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bookcase.jpg',
        'bookshelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bookshelf.jpg',

        'filing cabinet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/filing%20cabinet.jpg',
        'lateral file cabinet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/lateral%20file%20cabinet.jpg',
        'storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20cabinet.jpg',
        'credenza': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/credenza.jpg',
        'drawer organizers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drawer%20organizers.jpg',
        'file storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20storage%20box.jpg',
        'document storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/document%20storage%20box.jpg',
        'file cabinet dividers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20cabinet%20dividers.jpg',
        'coat rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/coat%20rack.jpg',
        'storage baskets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20baskets.jpg',
        'storage bins': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20bins.jpg',
        'bookcase shelf brackets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bookcase%20shelf%20brackets.jpg',
        'bookshelf anchors': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bookshelf%20anchors.jpg',
        'filing cabinet key spare': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/filing%20cabinet%20key%20spare.jpg',
        'file cabinet lock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20cabinet%20lock.jpg',
        'file cabinet anti tip kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20cabinet%20anti%20tip%20kit.jpg',
        'storage cabinet shelf liner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20cabinet%20shelf%20liner.jpg',
        'credenza drawer divider': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/credenza%20drawer%20divider.jpg',
        'notebook storage crate': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/notebook%20storage%20crate.jpg',
        'legal pad storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/legal%20pad%20storage%20box.jpg',
        'binder storage rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20storage%20rack.jpg',
        'manila envelope storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/manila%20envelope%20storage%20box.jpg',
        'printer paper storage bin': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20paper%20storage%20bin.jpg',
        'cardstock storage folder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cardstock%20storage%20folder.jpg',
        'photo paper storage sleeve': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/photo%20paper%20storage%20sleeve.jpg',
        'file cabinet hanging rails': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20cabinet%20hanging%20rails.jpg',
        'document sorter rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/document%20sorter%20rack.jpg',
        'throw blanket storage bag': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/throw%20blanket%20storage%20bag.jpg',
        'mirror mounting brackets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mirror%20mounting%20brackets.jpg',
        'storage basket liner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20basket%20liner.jpg',
        'storage bin lids': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20bin%20lids.jpg',
        'fire extinguisher bracket': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/fire%20extinguisher%20bracket.jpg',
        'keyboard tray brackets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20tray%20brackets.jpg',
        'monitor riser shelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20riser%20shelf.jpg',
        'bookcase shelf pins': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bookcase%20shelf%20pins.jpg',
        'storage cabinet door bumpers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20cabinet%20door%20bumpers.jpg',
        'printer stand with drawers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20stand%20with%20drawers.jpg',
        'drawer divider plastic': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drawer%20divider%20plastic.jpg',
        'pen storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/pen%20storage%20box.jpg',
        'pencil storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/pencil%20storage%20box.jpg',
        'mail organizer drawer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mail%20organizer%20drawer.jpg',
        'file storage crate': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20storage%20crate.jpg',

        'laminator pouch storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20pouch%20storage%20box.jpg',
        'rubber band storage jar': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/rubber%20band%20storage%20jar.jpg',
        'notebook shelf rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/notebook%20shelf%20rack.jpg',
        'binder rack vertical': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20rack%20vertical.jpg',
        'envelope storage rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/envelope%20storage%20rack.jpg',
        'bubble mailer storage bin': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bubble%20mailer%20storage%20bin.jpg',
        'printer paper cabinet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20paper%20cabinet.jpg',
        'network switch rack mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/network%20switch%20rack%20mount.jpg',
        'external keyboard storage case': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/external%20keyboard%20storage%20case.jpg',
        'throw blanket folded storage bin': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/throw%20blanket%20folded%20storage%20bin.jpg',
        'decorative pillow storage bag': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/decorative%20pillow%20storage%20bag.jpg',
        'coat rack wall mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/coat%20rack%20wall%20mount.jpg',
        'storage basket stacker': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20basket%20stacker.jpg',
        'storage bin labels': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20bin%20labels.jpg',
        'cleaning supply shelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cleaning%20supply%20shelf.jpg',
        'first aid cabinet wall mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/first%20aid%20cabinet%20wall%20mount.jpg',
        'keyboard tray replacement track': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20tray%20replacement%20track.jpg',
        'window blind mounting brackets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/window%20blind%20mounting%20brackets.jpg',
        'usb drive storage organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/usb%20drive%20storage%20organizer.jpg',
        'modem mounting shelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/modem%20mounting%20shelf.jpg',
        'power strip wall bracket': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/power%20strip%20wall%20bracket.jpg',
        'extension cord storage reel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/extension%20cord%20storage%20reel.jpg',
        'drawer organizer bamboo': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drawer%20organizer%20bamboo.jpg',
        'file storage tote': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20storage%20tote.jpg',
        'staple storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/staple%20storage%20box.jpg',
        'binder clip storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20clip%20storage%20box.jpg',
        'scissor storage rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/scissor%20storage%20rack.jpg',
        'glue stick storage bin': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/glue%20stick%20storage%20bin.jpg',
        'highlighter storage tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/highlighter%20storage%20tray.jpg',
        'marker storage case': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/marker%20storage%20case.jpg',
        'notebook storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/notebook%20storage%20cabinet.jpg',
        'binder storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20storage%20cabinet.jpg',
        'envelope filing drawer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/envelope%20filing%20drawer.jpg',

        'fire extinguisher cabinet small': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/fire%20extinguisher%20cabinet%20small.jpg',
        'hammer storage clip': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/hammer%20storage%20clip.jpg',
        'screwdriver rack wall mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/screwdriver%20rack%20wall%20mount.jpg',
        'measuring tape storage hook': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/measuring%20tape%20storage%20hook.jpg',
        'magazine rack wall mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/magazine%20rack%20wall%20mount.jpg',
        'file cabinet label frame': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20cabinet%20label%20frame.jpg',
        'file cabinet rail clips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20cabinet%20rail%20clips.jpg',
        'storage cabinet locking bar': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20cabinet%20locking%20bar.jpg',
        'storage cabinet door magnet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20cabinet%20door%20magnet.jpg',
        'storage cabinet leveling feet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/storage%20cabinet%20leveling%20feet.jpg',
        'credenza lock cylinder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/credenza%20lock%20cylinder.jpg',
        'credenza cable management hole cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/credenza%20cable%20management%20hole%20cover.jpg',
        'credenza caster wheels': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/credenza%20caster%20wheels.jpg',
        'credenza drawer slides heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/credenza%20drawer%20slides%20heavy%20duty.jpg',
        'credenza shelf pins': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/credenza%20shelf%20pins.jpg',
        'network rack shelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/network%20rack%20shelf.jpg',
        'network rack screws': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/network%20rack%20screws.jpg',
        'rack mount power strip': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/rack%20mount%20power%20strip.jpg',
        'rack mount drawer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/rack%20mount%20drawer.jpg',
        'rack mount fan': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/rack%20mount%20fan.jpg',
        'rack mount cable manager': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/rack%20mount%20cable%20manager.jpg',
        'server rack rails': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/server%20rack%20rails.jpg',
        'server rack caster kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/server%20rack%20caster%20kit.jpg',
        'server rack blank panel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/server%20rack%20blank%20panel.jpg',
        'printer stand shelf': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20stand%20shelf.jpg',
        'clipboard storage rack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/clipboard%20storage%20rack.jpg',
        'time tracking notebook': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/time%20tracking%20notebook.jpg',
        'drawer slide lubricant': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drawer%20slide%20lubricant.jpg',
        'drawer slide mounting jig': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drawer%20slide%20mounting%20jig.jpg',

        'drawer stop clip': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drawer%20stop%20clip.jpg',
        'drawer rail brackets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drawer%20rail%20brackets.jpg',
        'drawer track alignment tool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/drawer%20track%20alignment%20tool.jpg',
        'SD card storage box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/SD%20card%20storage%20box.jpg',
        'micro SD storage wallet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/micro%20SD%20storage%20wallet.jpg',
        'server rack mount rails': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/server%20rack%20mount%20rails.jpg',
        'computer tower': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/computer%20tower.jpg',
        'monitor': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor.jpg',
        'second monitor': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/second%20monitor.jpg',
        'laptop': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop.jpg',
        'keyboard': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard.jpg',
        'wireless keyboard': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wireless%20keyboard.jpg',
        'mouse': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse.jpg',
        'wireless mouse': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wireless%20mouse.jpg',
        'mouse pad': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20pad.jpg',
        'extended mouse pad': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/extended%20mouse%20pad.jpg',
        'computer speakers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/computer%20speakers.jpg',
        'printer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer.jpg',
        'scanner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/scanner.jpg',
        'printer stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20stand.jpg',
        'printer paper tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20paper%20tray.jpg',
        'printer ink cartridges': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20ink%20cartridges.jpg',
        'router': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/router.jpg',
        'modem': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/modem.jpg',
        'wifi extender': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wifi%20extender.jpg',
        'laptop charger': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20charger.jpg',
        'printer paper ream': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20paper%20ream.jpg',
        'document scanner tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/document%20scanner%20tray.jpg',
        'printer cleaning sheets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20cleaning%20sheets.jpg',
        'network switch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/network%20switch.jpg',
        
        'external keyboard wrist rest': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/external%20keyboard%20wrist%20rest.jpg',
        'keyboard wrist rest': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20wrist%20rest.jpg',
        'monitor screen cleaner kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20screen%20cleaner%20kit.jpg',
        'monitor privacy screen': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20privacy%20screen.jpg',
        'monitor power cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20power%20cable.jpg',
        'monitor mounting screws': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20mounting%20screws.jpg',
        'computer cooling pad': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/computer%20cooling%20pad.jpg',
        'monitor calibration tool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20calibration%20tool.jpg',
        'keyboard cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20cover.jpg',
        'wireless mouse receiver': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wireless%20mouse%20receiver.jpg',
        'mouse pad wrist support': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20pad%20wrist%20support.jpg',
        'laptop sleeve case': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20sleeve%20case.jpg',
        'printer maintenance kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20maintenance%20kit.jpg',
        'network cable tester': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/network%20cable%20tester.jpg',
        'external keyboard cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/external%20keyboard%20cover.jpg',
        'network wall jack kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/network%20wall%20jack%20kit.jpg',
        'monitor mounting plate': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20mounting%20plate.jpg',
        'monitor cable cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20cable%20cover.jpg',
        'computer surge protector strip': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/computer%20surge%20protector%20strip.jpg',
        'monitor cleaning wipes': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20cleaning%20wipes.jpg',
        'laptop docking cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20docking%20cable.jpg',
        'keyboard cleaning gel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20cleaning%20gel.jpg',
        'mouse cleaning wipes': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20cleaning%20wipes.jpg',
        'printer paper catch tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20paper%20catch%20tray.jpg',
        'scanner glass cleaner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/scanner%20glass%20cleaner.jpg',
        'router ethernet switch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/router%20ethernet%20switch.jpg',
        'wifi extender mounting kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wifi%20extender%20mounting%20kit.jpg',
        'laptop riser stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20riser%20stand.jpg',

        'network cable tester advanced': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/network%20cable%20tester%20advanced.jpg',
        'studio monitor speakers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/studio%20monitor%20speakers.jpg',
        'studio monitor isolation pads': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/studio%20monitor%20isolation%20pads.jpg',
        'monitor light bar': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20light%20bar.jpg',
        'computer privacy hood': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/computer%20privacy%20hood.jpg',
        'laser printer drum unit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laser%20printer%20drum%20unit.jpg',
        'printer fuser unit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/printer%20fuser%20unit.jpg',
        'ergonomic keyboard': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ergonomic%20keyboard.jpg',
        'mechanical keyboard': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mechanical%20keyboard.jpg',
        'mechanical keyboard keycap set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mechanical%20keyboard%20keycap%20set.jpg',
        'keyboard switch tester': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20switch%20tester.jpg',
        'keyboard switch puller': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20switch%20puller.jpg',
        'keyboard cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20cleaning%20brush.jpg',
        'keyboard vacuum mini': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20vacuum%20mini.jpg',
        'keyboard wrist support gel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20wrist%20support%20gel.jpg',
        'keyboard travel case': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/keyboard%20travel%20case.jpg',
        'gaming mouse': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/gaming%20mouse.jpg',
        'vertical mouse ergonomic': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/vertical%20mouse%20ergonomic.jpg',
        'mouse grip tape': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20grip%20tape.jpg',
        'mouse cable bungee': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20cable%20bungee.jpg',
        'mouse skates replacement': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20skates%20replacement.jpg',
        'mouse travel pouch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20travel%20pouch.jpg',
        'mouse battery pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20battery%20pack.jpg',
        'mouse USB receiver extender': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20USB%20receiver%20extender.jpg',
        'mouse docking charger': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mouse%20docking%20charger.jpg',
        'laptop docking cradle': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20docking%20cradle.jpg',
        'laptop external GPU enclosure': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20external%20GPU%20enclosure.jpg',
        'laptop memory upgrade kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20memory%20upgrade%20kit.jpg',
        'laptop SSD upgrade kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20SSD%20upgrade%20kit.jpg',

        'laptop hinge repair kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20hinge%20repair%20kit.jpg',
        'laptop battery replacement': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20battery%20replacement.jpg',
        'laptop charger extension cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20charger%20extension%20cable.jpg',
        'laptop cooling mat': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20cooling%20mat.jpg',
        'laptop anti theft cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20anti%20theft%20cable.jpg',
        'laptop security lock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laptop%20security%20lock.jpg',
        'monitor calibration sensor': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/monitor%20calibration%20sensor.jpg',
        'NAS hard drive': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/NAS%20hard%20drive.jpg',
        'NAS drive tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/NAS%20drive%20tray.jpg',
        'server cooling fan': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/server%20cooling%20fan.jpg',
        'server cable arm': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/server%20cable%20arm.jpg',
        'server power supply': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/server%20power%20supply.jpg',
        'WiFi antenna booster': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/WiFi%20antenna%20booster.jpg',
        'WiFi signal analyzer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/WiFi%20signal%20analyzer.jpg',
        'network firewall appliance': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/network%20firewall%20appliance.jpg',
        'smart plug WiFi': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/smart%20plug%20WiFi.jpg',

        'barcode scanner stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/barcode%20scanner%20stand.jpg',
        'receipt printer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/receipt%20printer.jpg',
        'receipt printer ink ribbon': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/receipt%20printer%20ink%20ribbon.jpg',
        'usb flash drives': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/usb%20flash%20drives.jpg',
        'power strip': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/power%20strip.jpg',
        'phone charger': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/phone%20charger.jpg',
        'cable organizer box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20organizer%20box.jpg',
        'cable sleeves': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20sleeves.jpg',
        'usb hub': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/usb%20hub.jpg',
        'ethernet cables': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ethernet%20cables.jpg',
        'hdmi cables': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/hdmi%20cables.jpg',
        'displayport cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/displayport%20cable.jpg',
        'vga cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/vga%20cable.jpg',
        'power adapters': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/power%20adapters.jpg',
        'battery backup': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/battery%20backup.jpg',
        'docking station power supply': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/docking%20station%20power%20supply.jpg',
        'usb flash drive organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/usb%20flash%20drive%20organizer.jpg',
        'power strip cord wrap': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/power%20strip%20cord%20wrap.jpg',
        'charging cable organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/charging%20cable%20organizer.jpg',
        'cable management tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20management%20tray.jpg',
        'calculator battery': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/calculator%20battery.jpg',
        'usb extension cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/usb%20extension%20cable.jpg',
        'displayport adapter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/displayport%20adapter.jpg',
        'vga adapter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/vga%20adapter.jpg',
        'universal power adapter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/universal%20power%20adapter.jpg',
        'battery backup replacement battery': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/battery%20backup%20replacement%20battery.jpg',
        'wall clock battery pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wall%20clock%20battery%20pack.jpg',
        'smoke detector battery': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/smoke%20detector%20battery.jpg',
        'docking station cable kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/docking%20station%20cable%20kit.jpg',
        'headphone cable extension': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20cable%20extension.jpg',
        'usb flash drive case': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/usb%20flash%20drive%20case.jpg',

        'ethernet cable wall clips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ethernet%20cable%20wall%20clips.jpg',
        'microphone cable XLR': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microphone%20cable%20XLR.jpg',
        'XLR to USB adapter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/XLR%20to%20USB%20adapter.jpg',
        'USB audio interface': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20audio%20interface.jpg',
        'headphone cable replacement': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20cable%20replacement.jpg',
       
        'USB C to HDMI adapter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20C%20to%20HDMI%20adapter.jpg',
        'USB C docking hub': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20C%20docking%20hub.jpg',
        'USB C extension cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20C%20extension%20cable.jpg',
        'ethernet cable boots': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ethernet%20cable%20boots.jpg',
        'cable punch down tool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20punch%20down%20tool.jpg',
        'cable management ring': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20management%20ring.jpg',
        'cable management raceway': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20management%20raceway.jpg',
        'cable mounting base': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20mounting%20base.jpg',
        'Velcro cable ties': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/Velcro%20cable%20ties.jpg',
        'power conditioner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/power%20conditioner.jpg',
        'UPS battery pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/UPS%20battery%20pack.jpg',
        'plug splitter adapter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/plug%20splitter%20adapter.jpg',
        'USB wall charger multi port': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20wall%20charger%20multi%20port.jpg',
        'USB charging block': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20charging%20block.jpg',
        'cable extension reel heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cable%20extension%20reel%20heavy%20duty.jpg',
        'power cord organizer wrap': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/power%20cord%20organizer%20wrap.jpg',
        'USB floppy drive': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20floppy%20drive.jpg',
        'USB card reader': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20card%20reader.jpg',
        'micro SD adapter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/micro%20SD%20adapter.jpg',
        'ethernet cable tester advanced': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ethernet%20cable%20tester%20advanced.jpg',
        'ethernet cable crimper tool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ethernet%20cable%20crimper%20tool.jpg',
        'patch cable organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/patch%20cable%20organizer.jpg',
        'patch cable color tags': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/patch%20cable%20color%20tags.jpg',
        'USB charging tower': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/USB%20charging%20tower.jpg',
        'magnetic charging cable': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/magnetic%20charging%20cable.jpg',
        'charging cable multi head': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/charging%20cable%20multi%20head.jpg',
        'power outlet timer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/power%20outlet%20timer.jpg',
        'AA battery bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/AA%20battery%20bulk%20pack.jpg',
        'AAA battery bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/AAA%20battery%20bulk%20pack.jpg',
        'button cell battery pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/button%20cell%20battery%20pack.jpg',
        'battery tester device': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/battery%20tester%20device.jpg',
        'battery disposal container': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/battery%20disposal%20container.jpg',
        'cordless phone charger base': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cordless%20phone%20charger%20base.jpg',
        'cordless phone battery pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cordless%20phone%20battery%20pack.jpg',
        'power bank charging dock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/power%20bank%20charging%20dock.jpg',
        'laminator power cord replacement': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20power%20cord%20replacement.jpg',
        
        'pen holder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/pen%20holder.jpg',
        'pencil holder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/pencil%20holder.jpg',
        'paper tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20tray.jpg',
        'paper shredder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20shredder.jpg',
        'label maker': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/label%20maker.jpg',
        'labels': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/labels.jpg',
        'wall calendar': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wall%20calendar.jpg',
        'bulletin board': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bulletin%20board.jpg',
        'whiteboard': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/whiteboard.png',
        'whiteboard markers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/whiteboard%20markers.jpg',
        'paper clips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20clips.jpg',
        'binder clips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20clips.jpg',
        'letter opener': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/letter%20opener.jpg',
        'tape dispenser': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tape%20dispenser.jpg',
        'notebooks': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/notebooks.jpg',
        'binders': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binders.jpg',
        'binder dividers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20dividers.jpg',
        'envelopes': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/envelopes.jpg',
        'manila envelopes': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/manila%20envelopes.jpg',
        'shipping envelopes': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/shipping%20envelopes.jpg',
        'cardstock paper': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cardstock%20paper.jpg',
        'photo paper': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/photo%20paper.jpg',
        'legal size paper': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/legal%20size%20paper.png',
        'paper towels': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20towels.jpg',
        'pen refill pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/pen%20refill%20pack.png',
        'pencil sharpener': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/pencil%20sharpener.jpg',
        'paper tray stacker': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20tray%20stacker.jpg',
        'file folder labels': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20folder%20labels.png',
        'whiteboard cleaner spray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/whiteboard%20cleaner%20spray.jpg',
        'whiteboard magnetic eraser': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/whiteboard%20magnetic%20eraser.jpg',
        'paper clip organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20clip%20organizer.jpg',
        'binder clip organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20clip%20organizer.jpg',
        'scissor sharpener': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/scissor%20sharpener.jpg',
        'letter opener stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/letter%20opener%20stand.jpg',
        'correction fluid pen': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/correction%20fluid%20pen.jpg',
        'binder spine labels': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20spine%20labels.jpg',
        'envelope organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/envelope%20organizer%20tray.jpg',
        'shipping label roll': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/shipping%20label%20roll.jpg',
        'paper tray letter size': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20tray%20letter%20size.jpg',
        'label maker case': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/label%20maker%20case.jpg',
        'wall calendar dry erase': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wall%20calendar%20dry%20erase.jpg',
        'bulletin board frame': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bulletin%20board%20frame.jpg',
        'whiteboard marker holder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/whiteboard%20marker%20holder.jpg',
        'paper clip tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20clip%20tray.jpg',
        'binder clip container': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20clip%20container.jpg',
        'letter opener stainless steel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/letter%20opener%20stainless%20steel.jpg',
        'tape dispenser weighted': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tape%20dispenser%20weighted.jpg',
        'sticky note dispenser': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/sticky%20note%20dispenser.jpg',
        'binder dividers labeled': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20dividers%20labeled.jpg',
        'photo paper binder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/photo%20paper%20binder.jpg',
    
        'paper towel dispenser': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20towel%20dispenser.jpg',
        'pen refill organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/pen%20refill%20organizer.jpg',
        'pencil case organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/pencil%20case%20organizer.jpg',
        'liquid glue dispenser': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/liquid%20glue%20dispenser.jpg',
        'binder spine label kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binder%20spine%20label%20kit.jpg',
        'photo paper archival box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/photo%20paper%20archival%20box.jpg',
        'sound dampening foam panels': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/sound%20dampening%20foam%20panels.jpg',
        'rug stain remover pen': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/rug%20stain%20remover%20pen.jpg',
        'cord label tags': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cord%20label%20tags.jpg',
        'project planner binder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/project%20planner%20binder.jpg',
        'calendar hanging clips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/calendar%20hanging%20clips.jpg',
        'project management notebook': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/project%20management%20notebook.jpg',
        'business card binder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/business%20card%20binder.jpg',
        'whiteboard eraser holder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/whiteboard%20eraser%20holder.jpg',
        'whiteboard magnetic tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/whiteboard%20magnetic%20tray.jpg',
        'whiteboard border tape': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/whiteboard%20border%20tape.jpg',
        'mechanical pencil set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mechanical%20pencil%20set.jpg',
        'paper trimmer guillotine': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20trimmer%20guillotine.jpg',
        'paper scoring board': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/paper%20scoring%20board.jpg',
        'envelope moistener bottle': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/envelope%20moistener%20bottle.jpg',
        'mail opening tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/mail%20opening%20tray.jpg',
        'floor lamp': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/floor%20lamp.jpg',
        'light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/light%20bulbs.jpg',
        'highlighters': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/highlighters.jpg',
        'floor lamp dimmer cord': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/floor%20lamp%20dimmer%20cord.jpg',
        'highlighter pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/highlighter%20pack.jpg',
        'floor lamp base weight': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/floor%20lamp%20base%20weight.jpg',
        'highlighter organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/highlighter%20organizer.jpg',
        'floor lamp dimmer switch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/floor%20lamp%20dimmer%20switch.jpg',
        'headphone stand clamp mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20stand%20clamp%20mount.jpg',
        'webcam ring light': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/webcam%20ring%20light.jpg',
        'ring light tripod stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ring%20light%20tripod%20stand.jpg',
        'ring light diffuser': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ring%20light%20diffuser.jpg',
        'backdrop clamp': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/backdrop%20clamp.jpg',
        'screen light bar remote': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/screen%20light%20bar%20remote.jpg',
        'blue light blocking glasses': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/blue%20light%20blocking%20glasses.jpg',
        'area rug': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/area%20rug.jpg',
        'cleaning caddy': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cleaning%20caddy.jpg',
        'all purpose cleaner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/all%20purpose%20cleaner.jpg',
        'glass cleaner': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/glass%20cleaner.jpg',
        'trash can': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/trash%20can.jpg',
        
        'trash bags': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/trash%20bags.jpg',
        'recycling bin': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/recycling%20bin.jpg',
        'window blind cleaner tool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/window%20blind%20cleaner%20tool.jpg',
        'laminator cleaning sheets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20cleaning%20sheets.jpg',
        'cleaning supply basket': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cleaning%20supply%20basket.jpg',
        'all purpose cleaner refill': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/all%20purpose%20cleaner%20refill.jpg',
        'glass cleaner refill': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/glass%20cleaner%20refill.jpg',
        'trash liner roll': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/trash%20liner%20roll.jpg',
        'recycling bin liner roll': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/recycling%20bin%20liner%20roll.jpg',
        'all purpose cleaner gallon': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/all%20purpose%20cleaner%20gallon.jpg',
        'glass cleaner spray bottle': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/glass%20cleaner%20spray%20bottle.jpg',
        'trash can step lid': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/trash%20can%20step%20lid.jpg',
        'recycling sorter bins': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/recycling%20sorter%20bins.jpg',
        'ink cartridge recycling box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ink%20cartridge%20recycling%20box.jpg',
        'microfiber cleaning mitt': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microfiber%20cleaning%20mitt.jpg',
        'all purpose cleaner spray bottle': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/all%20purpose%20cleaner%20spray%20bottle.jpg',
        'glass cleaner gallon': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/glass%20cleaner%20gallon.jpg',
        'window blinds': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/window%20blinds.jpg',
        'window curtains': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/window%20curtains.jpg',
        'curtain rod': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/curtain%20rod.jpg',
        'docking station': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/docking%20station.jpg',
        'webcam': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/webcam.jpg',
        'microphone': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microphone.jpg',
        'headphones': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphones.jpg',
        'headset': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headset.jpg',
        'external hard drive': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/external%20hard%20drive.jpg',
        'surge protector': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/surge%20protector.jpg',
        'extension cords': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/extension%20cords.jpg',
        'charging station': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/charging%20station.jpg',
        'cord clips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cord%20clips.jpg',
        'laminator': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator.jpg',
        'laminating sheets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminating%20sheets.jpg',
        'calculator': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/calculator.jpg',
        'dry erase eraser': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/dry%20erase%20eraser.jpg',
        'push pins': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/push%20pins.jpg',
        'stapler': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/stapler.jpg',
        'staples': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/staples.jpg',
        'rubber bands': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/rubber%20bands.jpg',
        'scissors': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/scissors.jpg',
        'hole punch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/hole%20punch.jpg',
        'three hole punch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/three%20hole%20punch.jpg',
        'adhesive tape': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/adhesive%20tape.jpg',
    
        'packing tape': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/packing%20tape.jpg',
        'glue sticks': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/glue%20sticks.jpg',
        'liquid glue': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/liquid%20glue.jpg',
        'correction tape': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/correction%20tape.jpg',
        'permanent markers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/permanent%20markers.jpg',
        'legal pads': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/legal%20pads.jpg',
        'sticky notes': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/sticky%20notes.jpg',
        'index cards': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/index%20cards.jpg',
        'bubble mailers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bubble%20mailers.jpg',
        'document trays': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/document%20trays.jpg',
        'ink refill kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ink%20refill%20kit.jpg',
        'foot rest': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/foot%20rest.jpg',
        'seat cushion': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/seat%20cushion.jpg',
        'throw blanket': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/throw%20blanket.jpg',
        'wall art': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wall%20art.jpg',
        'wall clock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/wall%20clock.jpg',
        'umbrella stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/umbrella%20stand.jpg',
        'microfiber cloths': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microfiber%20cloths.jpg',
        'disinfecting wipes': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/disinfecting%20wipes.jpg',
        'fire extinguisher': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/fire%20extinguisher.jpg',
        'smoke detector': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/smoke%20detector.jpg',
        'carbon monoxide detector': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/carbon%20monoxide%20detector.jpg',
        'first aid kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/first%20aid%20kit.jpg',
        'tool kit small': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tool%20kit%20small.jpg',
        'hammer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/hammer.jpg',
        'screwdriver set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/screwdriver%20set.jpg',
        'measuring tape': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/measuring%20tape.jpg',
        'picture hanging kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/picture%20hanging%20kit.jpg',
        'webcam privacy cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/webcam%20privacy%20cover.jpg',
        'microphone pop filter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microphone%20pop%20filter.jpg',
        'headphone stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20stand.jpg',
        'headset charging dock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headset%20charging%20dock.jpg',
        'speaker isolation pads': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/speaker%20isolation%20pads.jpg',
        'external hard drive case': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/external%20hard%20drive%20case.jpg',
        'extension cord reel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/extension%20cord%20reel.jpg',
        'phone dock stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/phone%20dock%20stand.jpg',
        'cord concealment channel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cord%20concealment%20channel.jpg',
        'hanging file folder tabs': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/hanging%20file%20folder%20tabs.jpg',
        'document safe fire resistant': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/document%20safe%20fire%20resistant.jpg',
        'shredder oil': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/shredder%20oil.jpg',
        'push pin container': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/push%20pin%20container.jpg',
        'staple remover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/staple%20remover.jpg',
        'staple refill box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/staple%20refill%20box.jpg',
        'rubber band ball': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/rubber%20band%20ball.jpg',
        'tape refill rolls': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tape%20refill%20rolls.jpg',
        'glue stick bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/glue%20stick%20bulk%20pack.jpg',
                
        'bubble mailer pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/bubble%20mailer%20pack.jpg',
        'tool organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/tool%20organizer%20tray.jpg',
        'screw assortment kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/screw%20assortment%20kit.jpg',
        'curtain tieback hooks': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/curtain%20tieback%20hooks.jpg',
        'webcam mount clip': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/webcam%20mount%20clip.jpg',
        'external hard drive docking bay': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/external%20hard%20drive%20docking%20bay.jpg',
        'extension cord floor cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/extension%20cord%20floor%20cover.jpg',
        'charging hub multi port': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/charging%20hub%20multi%20port.jpg',
        'cord management clips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cord%20management%20clips.jpg',
        'document lock box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/document%20lock%20box.jpg',
        'safe fireproof document box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/safe%20fireproof%20document%20box.jpg',
        'push pin box': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/push%20pin%20box.jpg',
        'stapler heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/stapler%20heavy%20duty.jpg',
        'staples bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/staples%20bulk%20pack.jpg',
        'scissors heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/scissors%20heavy%20duty.jpg',
        'three hole punch heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/three%20hole%20punch%20heavy%20duty.jpg',
        'adhesive tape bulk roll': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/adhesive%20tape%20bulk%20roll.jpg',
        'packing tape gun': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/packing%20tape%20gun.jpg',
        'glue stick organizer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/glue%20stick%20organizer.jpg',
        'liquid glue refill bottle': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/liquid%20glue%20refill%20bottle.jpg',
        'microphone shock mount': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/microphone%20shock%20mount.jpg',
        'headphone stand wooden': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20stand%20wooden.jpg',
        'surge protector outlet cover': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/surge%20protector%20outlet%20cover.jpg',        
        'audio interface': 'https://cdamemoryjger.blob.core.windows.net/officestudy/audio%20interface.jpg',
        'audio mixer small': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/audio%20mixer%20small.jpg',
        'speaker stands': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/speaker%20stands.jpg',
        'speaker isolation stands': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/speaker%20isolation%20stands.jpg',
        'headphone amplifier': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20amplifier.jpg',
        'headphone splitter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20splitter.jpg',
        'headphone case hard shell': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20case%20hard%20shell.jpg',
        'headphone hook adhesive': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/headphone%20hook%20adhesive.jpg',
        'webcam tripod': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/webcam%20tripod.jpg',
        'green screen backdrop': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/green%20screen%20backdrop.jpg',
        'green screen stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/green%20screen%20stand.jpg',
        'backdrop crossbar': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/backdrop%20crossbar.png',
        'external SSD drive': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/external%20SSD%20drive.jpg',
        'SSD enclosure': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/SSD%20enclosure.jpg',
        'hard drive cloning dock': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/hard%20drive%20cloning%20dock.jpg',
        
        'hard drive anti static bag': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/hard%20drive%20anti%20static%20bag.jpg',
        'data recovery software license': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/data%20recovery%20software%20license.jpg',
        'HDMI switch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/HDMI%20switch.jpg',
        'KVM switch': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/KVM%20switch.jpg',
        'display splitter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/display%20splitter.jpg',
        'ethernet crimp connectors': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ethernet%20crimp%20connectors.jpg',
        'zip tie pack': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/zip%20tie%20pack.jpg',
        'surge suppression outlet': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/surge%20suppression%20outlet.jpg',
        'voltage regulator': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/voltage%20regulator.jpg',
        'file expanding folder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/file%20expanding%20folder.jpg',
        'planner stickers': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/planner%20stickers.jpg',
        'planner tabs': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/planner%20tabs.jpg',
        'planner refill inserts': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/planner%20refill%20inserts.jpg',
        'goal planner journal': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/goal%20planner%20journal.jpg',
        'address book': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/address%20book.jpg',
        'business card holder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/business%20card%20holder.jpg',
        'business card display stand': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/business%20card%20display%20stand.jpg',
        'name badge holder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/name%20badge%20holder.jpg',
        'ID badge lanyard': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ID%20badge%20lanyard.jpg',
        'ID badge reel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/ID%20badge%20reel.jpg',
        'presentation clicker': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/presentation%20clicker.jpg',
        'laser pointer': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laser%20pointer.jpg',
        'presentation remote batteries': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/presentation%20remote%20batteries.jpg',
        'projector screen': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/projector%20screen.jpg',
        'dry erase board small': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/dry%20erase%20board%20small.jpg',
        'cork board push pin set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/cork%20board%20push%20pin%20set.jpg',
        'magnetic cork board': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/magnetic%20cork%20board.jpg',
        'magnetic clips': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/magnetic%20clips.jpg',
        'magnetic name plate': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/magnetic%20name%20plate.jpg',
        'magnetic ruler': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/magnetic%20ruler.jpg',
        'laminator heat resistant gloves': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20heat%20resistant%20gloves.jpg',
        'laminator corner rounder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20corner%20rounder.jpg',
        'laminator thermal pouch carrier': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20thermal%20pouch%20carrier.jpg',
        'laminator jam release tool': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20jam%20release%20tool.jpg',
        'laminator foil sheets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20foil%20heets.jpg',
        'laminator cold pouch kit': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20cold%20pouch%20kit.jpg',
        'laminator trim cutter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/laminator%20trim%20cutter.jpg',
        'postal scale digital': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/postal%20scale%20digital.jpg',
        'presentation folder': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/presentation%20folder.jpg',
        'document binding machine': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/document%20binding%20machine.jpg',
        'binding comb set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binding%20comb%20set.jpg',
        'binding coil set': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binding%20coil%20set.jpg',
        'binding cover sheets': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binding%20cover%20sheets.jpg',
        'binding spine cutter': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/binding%20spine%20cutter.jpg',

//loft

        'accent bench': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20bench.jpg',
        'accent bench cushion': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20bench%20cushion.jpg',
        'accent bench leg pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20bench%20leg%20pads.jpg',
        'accent bench storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20bench%20storage%20bin.jpg',
        'accent chair arm covers': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20chair%20arm%20covers.jpg',
        'accent chair armrest pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20chair%20armrest%20pads.jpg',
        'accent chair cushion': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20chair%20cushion.jpg',
        'accent chair leg felt pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20chair%20leg%20felt%20pads.jpg',
        'accent chair leg protectors': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20chair%20leg%20protectors.jpg',
        'accent chair seat protector': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20chair%20seat%20protector.jpg',
        'accent chair slipcover': 'https://cdamemoryjogger.blob.core.windows.net/loft/accent%20chair%20slipcover.jpg',
        'barrel chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/barrel%20chair.jpg',
        'bean bag inner liner': 'https://cdamemoryjogger.blob.core.windows.net/loft/bean%20bag%20inner%20liner.jpg',
        'bean bag refill beads': 'https://cdamemoryjogger.blob.core.windows.net/loft/bean%20bag%20refill%20beads.jpg',
        'bean bag refill pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/bean%20bag%20refill%20pack.jpg',
        'chaise lounge': 'https://cdamemoryjogger.blob.core.windows.net/loft/chaise%20lounge.jpg',
        'chaise lounge cushion': 'https://cdamemoryjogger.blob.core.windows.net/loft/chaise%20lounge%20cushion.jpg',
        'chaise lounge slipcover': 'https://cdamemoryjogger.blob.core.windows.net/loft/chaise%20lounge%20slipcover.jpg',
        'club chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/club%20chair.jpg',
        'club chair ottoman': 'https://cdamemoryjogger.blob.core.windows.net/loft/club%20chair%20ottoman.jpg',
        'floor cushion cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20cushion%20cover.jpg',
        'floor cushion insert': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20cushion%20insert.jpg',
        'floor cushion storage bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20cushion%20storage%20bag.jpg',
        'floor pouf': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20pouf.jpg',
        'floor rocker chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20rocker%20chair.jpg',
        'floor seating mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20seating%20mat.jpg',
        'floor seating pillows': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20seating%20pillows.jpg',
        'fold out sofa bed': 'https://cdamemoryjogger.blob.core.windows.net/loft/fold%20out%20sofa%20bed.jpg',
        'folding chairs': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20chairs.jpg',
        'folding floor chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20floor%20chair.jpg',
        'glider chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/glider%20chair.jpg',
        'loveseat armrest covers': 'https://cdamemoryjogger.blob.core.windows.net/loft/loveseat%20armrest%20covers.jpg',
        'loveseat armrest tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/loveseat%20armrest%20tray.jpg',
        'loveseat cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/loveseat%20cover.jpg',
        'loveseat cushion cover set': 'https://cdamemoryjogger.blob.core.windows.net/loft/loveseat%20cushion%20cover%20set.jpg',
        'loveseat leg pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/loveseat%20leg%20pads.jpg',
        'massage chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/massage%20chair.jpg',
        'massage chair cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/massage%20chair%20cover.jpg',
        'massage chair remote': 'https://cdamemoryjogger.blob.core.windows.net/loft/massage%20chair%20remote.jpg',
        'meditation cushion': 'https://cdamemoryjogger.blob.core.windows.net/loft/meditation%20cushion.jpg',
        'meditation cushion cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/meditation%20cushion%20cover.jpg',
        'ottoman caster wheels': 'https://cdamemoryjogger.blob.core.windows.net/loft/ottoman%20caster%20wheels.jpg',
        'ottoman foam insert': 'https://cdamemoryjogger.blob.core.windows.net/loft/ottoman%20foam%20insert.jpg',
        'papasan chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/papasan%20chair.jpg',
        'recliner': 'https://cdamemoryjogger.blob.core.windows.net/loft/recliner.jpg',
        'recliner USB charger module': 'https://cdamemoryjogger.blob.core.windows.net/loft/recliner%20USB%20charger%20module.jpg',
        'recliner battery pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/recliner%20battery%20pack.jpg',           
    
        'recliner hand control': 'https://cdamemoryjogger.blob.core.windows.net/loft/recliner%20hand%20control.jpg',
        'recliner headrest cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/recliner%20headrest%20cover.jpg',
        'recliner power supply': 'https://cdamemoryjogger.blob.core.windows.net/loft/recliner%20power%20supply.jpg',
        'recliner side pocket organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/recliner%20side%20pocket%20organizer.jpg',
        'rocking chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/rocking%20chair.jpg',
        'sectional connector brackets': 'https://cdamemoryjogger.blob.core.windows.net/loft/sectional%20connector%20brackets.jpg',
        'sectional cushion covers': 'https://cdamemoryjogger.blob.core.windows.net/loft/sectional%20cushion%20covers.jpg',
        'sectional cushions': 'https://cdamemoryjogger.blob.core.windows.net/loft/sectional%20cushions.jpg',
        'sofa anti slip grippers': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20anti%20slip%20grippers.jpg',
        'sofa armrest cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20armrest%20cover.jpg',
        'sofa armrest tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20armrest%20tray.jpg',
        'sofa bed mattress cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20bed%20mattress%20cover.jpg',
        'sofa bed mattress pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20bed%20mattress%20pad.jpg',
        'sofa bed mechanism kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20bed%20mechanism%20kit.jpg',
        'sofa bed sheet set': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20bed%20sheet%20set.jpg',
        'sofa caster cups': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20caster%20cups.jpg',
        'sofa chaise attachment': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20chaise%20attachment.jpg',
        'sofa cushion cover set': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20cushion%20cover%20set.jpg',
        'sofa cushion inserts': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20cushion%20inserts.jpg',
        'sofa frame brackets': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20frame%20brackets.jpg',
        'sofa frame repair braces': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20frame%20repair%20braces.jpg',
        'sofa furniture risers': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20furniture%20risers.jpg',
        'sofa headrest pillow': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20headrest%20pillow.jpg',
        'sofa leg levelers': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20leg%20levelers.jpg',
        'sofa side table': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20side%20table.jpg',
        'sofa slipcover': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20slipcover.jpg',
        'sofa spring repair kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/sofa%20spring%20repair%20kit.jpg',
        'stool seat cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/stool%20seat%20cover.jpg',
        'stools': 'https://cdamemoryjogger.blob.core.windows.net/loft/stools.jpg',
        'storage ottoman tray top': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20ottoman%20tray%20top.jpg',
        'swivel chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/swivel%20chair.jpg',
        'window seat cushion cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/window%20seat%20cushion%20cover.jpg',
        'window seat drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/window%20seat%20drawer%20organizer.jpg',
        'window seat storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/window%20seat%20storage%20bin.jpg',
        'wingback chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/wingback%20chair.jpg',
        
        'bed sheet fasteners': 'https://cdamemoryjogger.blob.core.windows.net/loft/bed%20sheet%20fasteners.jpg',
        'blanket clips': 'https://cdamemoryjogger.blob.core.windows.net/loft/blanket%20clips.jpg',
        'blanket hamper': 'https://cdamemoryjogger.blob.core.windows.net/loft/blanket%20hamper.jpg',
        'blanket hooks': 'https://cdamemoryjogger.blob.core.windows.net/loft/blanket%20hooks.jpg',
        'blanket ladder': 'https://cdamemoryjogger.blob.core.windows.net/loft/blanket%20ladder.jpg',
        'console cable grommet': 'https://cdamemoryjogger.blob.core.windows.net/loft/console%20cable%20grommet.jpg',
        'down pillow insert': 'https://cdamemoryjogger.blob.core.windows.net/loft/down%20pillow%20insert.jpg',
        'folding chair leg caps': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20chair%20leg%20caps.jpg',
        'lumbar pillow insert': 'https://cdamemoryjogger.blob.core.windows.net/loft/lumbar%20pillow%20insert.jpg',
        'office chair armrest pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/office%20chair%20armrest%20pads.jpg',
        'pillow protector set': 'https://cdamemoryjogger.blob.core.windows.net/loft/pillow%20protector%20set.jpg',
        'pillow protectors': 'https://cdamemoryjogger.blob.core.windows.net/loft/pillow%20protectors.jpg',
        'pillowcase set extra': 'https://cdamemoryjogger.blob.core.windows.net/loft/pillowcase%20set%20extra.jpg',
        'sheet suspenders': 'https://cdamemoryjogger.blob.core.windows.net/loft/sheet%20suspenders.jpg',
        'throw blanket clips': 'https://cdamemoryjogger.blob.core.windows.net/loft/throw%20blanket%20clips.jpg',
        'throw pillow covers': 'https://cdamemoryjogger.blob.core.windows.net/loft/throw%20pillow%20covers.jpg',
        'throw pillow insert spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/throw%20pillow%20insert%20spare.jpg',
        'C shaped side table': 'https://cdamemoryjogger.blob.core.windows.net/loft/C%20shaped%20side%20table.jpg',
        'TV stand cable pass through': 'https://cdamemoryjogger.blob.core.windows.net/loft/TV%20stand%20cable%20pass%20through.jpg',
        'TV stand caster wheels': 'https://cdamemoryjogger.blob.core.windows.net/loft/TV%20stand%20caster%20wheels.jpg',
        'TV stand door bumpers': 'https://cdamemoryjogger.blob.core.windows.net/loft/TV%20stand%20door%20bumpers.jpg',
        'TV stand ventilation fan': 'https://cdamemoryjogger.blob.core.windows.net/loft/TV%20stand%20ventilation%20fan.jpg',
        'TV tray table set': 'https://cdamemoryjogger.blob.core.windows.net/loft/TV%20tray%20table%20set.jpg',
        'bar cart': 'https://cdamemoryjogger.blob.core.windows.net/loft/bar%20cart.jpg',
        'bar cart accessory hooks': 'https://cdamemoryjogger.blob.core.windows.net/loft/bar%20cart%20accessory%20hooks.jpg',
        'bar cart anti slip mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/bar%20cart%20anti%20slip%20mat.jpg',
        'bar cart corner guards': 'https://cdamemoryjogger.blob.core.windows.net/loft/bar%20cart%20corner%20guards.jpg',
        'bar cart cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/bar%20cart%20cover.jpg',
        'bar cart stemware hanger': 'https://cdamemoryjogger.blob.core.windows.net/loft/bar%20cart%20stemware%20hanger.jpg',
        'bar cart tool caddy': 'https://cdamemoryjogger.blob.core.windows.net/loft/bar%20cart%20tool%20caddy.jpg',
        'bedside table': 'https://cdamemoryjogger.blob.core.windows.net/loft/bedside%20table.jpg',
        'bedside table coaster': 'https://cdamemoryjogger.blob.core.windows.net/loft/bedside%20table%20coaster.jpg',
        'book display shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20display%20shelf.jpg',
        'broom storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/loft/broom%20storage%20cabinet.jpg',
        'coffee table coasters set': 'https://cdamemoryjogger.blob.core.windows.net/loft/coffee%20table%20coasters%20set.jpg',
        'coffee table glass top': 'https://cdamemoryjogger.blob.core.windows.net/loft/coffee%20table%20glass%20top.jpg',
        'coffee table leg levelers': 'https://cdamemoryjogger.blob.core.windows.net/loft/coffee%20table%20leg%20levelers.jpg',
        'coffee table leg pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/coffee%20table%20leg%20pads.jpg',
        'coffee table runner': 'https://cdamemoryjogger.blob.core.windows.net/loft/coffee%20table%20runner.jpg',
        'coffee table scratch repair kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/coffee%20table%20scratch%20repair%20kit.jpg',
        'coffee table storage baskets': 'https://cdamemoryjogger.blob.core.windows.net/loft/coffee%20table%20storage%20baskets.jpg',
        'console table cable management basket': 'https://cdamemoryjogger.blob.core.windows.net/loft/console%20table%20cable%20management%20basket.jpg',
        'console table shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/loft/console%20table%20shelf%20riser.jpg',
        'craft storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/loft/craft%20storage%20cabinet.jpg',
        'cube storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/cube%20storage%20shelf.jpg',
        'display shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/display%20shelf.jpg',
        'display shelf acrylic stands': 'https://cdamemoryjogger.blob.core.windows.net/loft/display%20shelf%20acrylic%20stands.jpg',
        'display shelf risers': 'https://cdamemoryjogger.blob.core.windows.net/loft/display%20shelf%20risers.png',
        'drink table': 'https://cdamemoryjogger.blob.core.windows.net/loft/drink%20table.jpg',
        'end table corner protectors': 'https://cdamemoryjogger.blob.core.windows.net/loft/end%20table%20corner%20protectors.jpg',
        'floating shelf LED strip': 'https://cdamemoryjogger.blob.core.windows.net/loft/floating%20shelf%20LED%20strip.jpg',
        'folding snack table': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20snack%20table.jpg',
        'folding table': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20table.jpg',
        'folding table carry bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20table%20carry%20bag.jpg',
        'folding table leg caps': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20table%20leg%20caps.jpg',
            
        'martini table': 'https://cdamemoryjogger.blob.core.windows.net/loft/martini%20table.jpg',
        'media console door hinges': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20console%20door%20hinges.jpg',
        'media console shelves': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20console%20shelves.jpg',
        'nesting table set': 'https://cdamemoryjogger.blob.core.windows.net/loft/nesting%20table%20set.jpg',
        'nesting tables': 'https://cdamemoryjogger.blob.core.windows.net/loft/nesting%20tables.jpg',
        'shelf edge guard': 'https://cdamemoryjogger.blob.core.windows.net/loft/shelf%20edge%20guard.jpg',
        'side table cable grommet cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/side%20table%20cable%20grommet%20cover.jpg',
        'side table decor tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/side%20table%20decor%20tray.jpg',
        'side table drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/side%20table%20drawer%20organizer.jpg',
        'side table shelf liner': 'https://cdamemoryjogger.blob.core.windows.net/loft/side%20table%20shelf%20liner.jpg',
        'storage cube shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20cube%20shelf.jpg',
        'tray table': 'https://cdamemoryjogger.blob.core.windows.net/loft/tray%20table.jpg',
        'floating shelves': 'https://cdamemoryjogger.blob.core.windows.net/loft/floating%20shelves.jpg',
        'decorative shelf anchors': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20shelf%20anchors.jpg',
        'decorative shelf brackets': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20shelf%20brackets.jpg',
        'decorative shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20shelf%20riser.jpg',
        'media cabinet anti tip strap': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20cabinet%20anti%20tip%20strap.jpg',
        'media cabinet door catch': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20cabinet%20door%20catch.jpg',
        'media cabinet door magnet': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20cabinet%20door%20magnet.jpg',
        'media cabinet hinge set': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20cabinet%20hinge%20set.jpg',
        'media cabinet leveling feet': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20cabinet%20leveling%20feet.jpg',
        'media cabinet shelf pins': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20cabinet%20shelf%20pins.jpg',
        'media cabinet shelf supports': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20cabinet%20shelf%20supports.jpg',
        'television riser shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/television%20riser%20shelf.jpg',
   
        'AV receiver': 'https://cdamemoryjogger.blob.core.windows.net/loft/AV%20receiver.jpg',
        'AV receiver remote': 'https://cdamemoryjogger.blob.core.windows.net/loft/AV%20receiver%20remote.jpg',
        'Bluetooth receiver': 'https://cdamemoryjogger.blob.core.windows.net/loft/Bluetooth%20receiver.jpg',
        'CD player': 'https://cdamemoryjogger.blob.core.windows.net/loft/CD%20player.jpg',
        'HDMI audio extractor': 'https://cdamemoryjogger.blob.core.windows.net/loft/HDMI%20audio%20extractor.jpg',
        'HDMI cable extender': 'https://cdamemoryjogger.blob.core.windows.net/loft/HDMI%20cable%20extender.jpg',
        'HDMI splitter': 'https://cdamemoryjogger.blob.core.windows.net/loft/HDMI%20splitter.jpg',
        'HDMI switch': 'https://cdamemoryjogger.blob.core.windows.net/loft/HDMI%20switch.jpg',
        'RCA cable set': 'https://cdamemoryjogger.blob.core.windows.net/loft/RCA%20cable%20set.jpg',
        'TV antenna': 'https://cdamemoryjogger.blob.core.windows.net/loft/TV%20antenna.jpg',
        'USB C to HDMI adapter': 'https://cdamemoryjogger.blob.core.windows.net/loft/USB%20C%20to%20HDMI%20adapter.jpg',
        'audio amplifier': 'https://cdamemoryjogger.blob.core.windows.net/loft/audio%20amplifier.jpg',
        'blu ray cleaning disc': 'https://cdamemoryjogger.blob.core.windows.net/loft/blu%20ray%20cleaning%20disc.jpg',
        'blu ray disc storage case': 'https://cdamemoryjogger.blob.core.windows.net/loft/blu%20ray%20disc%20storage%20case.jpg',
        'blu ray remote cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/blu%20ray%20remote%20cover.jpg',
        'blu ray storage case': 'https://cdamemoryjogger.blob.core.windows.net/loft/blu%20ray%20storage%20case.jpg',
        'cassette player': 'https://cdamemoryjogger.blob.core.windows.net/loft/cassette%20player.jpg',
        'cassette tapes': 'https://cdamemoryjogger.blob.core.windows.net/loft/cassette%20tapes.jpg',
        'coax splitter': 'https://cdamemoryjogger.blob.core.windows.net/loft/coax%20splitter.jpg',
        'disc resurfacing kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/disc%20resurfacing%20kit.jpg',
        'disc sleeves': 'https://cdamemoryjogger.blob.core.windows.net/loft/disc%20sleeves.jpg',
        'media storage binder': 'https://cdamemoryjogger.blob.core.windows.net/loft/media%20storage%20binder.jpg',
        'optical audio cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/optical%20audio%20cable.jpg',
        'phono preamp': 'https://cdamemoryjogger.blob.core.windows.net/loft/phono%20preamp.jpg',
        'projector': 'https://cdamemoryjogger.blob.core.windows.net/loft/projector.jpg',
        'projector HDMI cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/projector%20HDMI%20cable.jpg',
        'projector carry case': 'https://cdamemoryjogger.blob.core.windows.net/loft/projector%20carry%20case.jpg',
        'projector keystone remote': 'https://cdamemoryjogger.blob.core.windows.net/loft/projector%20keystone%20remote.jpg',
        'projector lens cap': 'https://cdamemoryjogger.blob.core.windows.net/loft/projector%20lens%20cap.jpg',
        'projector remote': 'https://cdamemoryjogger.blob.core.windows.net/loft/projector%20remote.jpg',
        'projector screen': 'https://cdamemoryjogger.blob.core.windows.net/loft/projector%20screen.jpg',
        'projector stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/projector%20stand.png',
        'remote control charging station': 'https://cdamemoryjogger.blob.core.windows.net/loft/remote%20control%20charging%20station.jpg',
        'remote control holder': 'https://cdamemoryjogger.blob.core.windows.net/loft/remote%20control%20holder.jpg',
        'remote control label stickers': 'https://cdamemoryjogger.blob.core.windows.net/loft/remote%20control%20label%20stickers.jpg',
        'remote control silicone cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/remote%20control%20silicone%20cover.jpg',
        'remote controls': 'https://cdamemoryjogger.blob.core.windows.net/loft/remote%20controls.jpg',
        'remote organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/remote%20organizer%20tray.jpg',
        'smart television': 'https://cdamemoryjogger.blob.core.windows.net/loft/smart%20television.jpg',
        'sound bar HDMI ARC cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/sound%20bar%20HDMI%20ARC%20cable.jpg',
        'sound bar cable kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/sound%20bar%20cable%20kit.jpg',
        'sound bar power cord': 'https://cdamemoryjogger.blob.core.windows.net/loft/sound%20bar%20power%20cord.jpg',
        'speaker wire': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20wire.jpg',
        'speaker wire banana plugs': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20wire%20banana%20plugs.jpg',
        'speaker wire management clips': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20wire%20management%20clips.jpg',
        'speaker wire spool': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20wire%20spool.jpg',
        'streaming device Ethernet adapter': 'https://cdamemoryjogger.blob.core.windows.net/loft/streaming%20device%20Ethernet%20adapter.jpg',
        'streaming device power adapter': 'https://cdamemoryjogger.blob.core.windows.net/loft/streaming%20device%20power%20adapter.jpg',
        'streaming stick': 'https://cdamemoryjogger.blob.core.windows.net/loft/streaming%20stick.jpg',
        'streaming stick extender': 'https://cdamemoryjogger.blob.core.windows.net/loft/streaming%20stick%20extender.jpg',
        'subwoofer isolation pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/subwoofer%20isolation%20pad.jpg',
        'subwoofer power cord': 'https://cdamemoryjogger.blob.core.windows.net/loft/subwoofer%20power%20cord.jpg',
        'surround speakers': 'https://cdamemoryjogger.blob.core.windows.net/loft/surround%20speakers.jpg',
        'tv mounting screws': 'https://cdamemoryjogger.blob.core.windows.net/loft/tv%20mounting%20screws.jpg',
        'tv screen cleaner kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/tv%20screen%20cleaner%20kit.jpg',
        'tv surge protector': 'https://cdamemoryjogger.blob.core.windows.net/loft/tv%20surge%20protector.jpg',
        'cd storage sleeves': 'https://cdamemoryjogger.blob.core.windows.net/loft/cd%20storage%20sleeves.jpg',
        'dvd media cabinet': 'https://cdamemoryjogger.blob.core.windows.net/loft/dvd%20media%20cabinet.jpg',
        'dvd organizer cabinet': 'https://cdamemoryjogger.blob.core.windows.net/loft/dvd%20organizer%20cabinet.jpg',
        'dvd storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/dvd%20storage%20shelf.jpg',
     
        'DJ controller': 'https://cdamemoryjogger.blob.core.windows.net/loft/DJ%20controller.jpg',
        'LED strip light controller': 'https://cdamemoryjogger.blob.core.windows.net/loft/LED%20strip%20light%20controller.jpg',
        'VR headset cable management kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/VR%20headset%20cable%20management%20kit.jpg',
        'VR headset carry case': 'https://cdamemoryjogger.blob.core.windows.net/loft/VR%20headset%20carry%20case.jpg',
        'VR headset charging dock': 'https://cdamemoryjogger.blob.core.windows.net/loft/VR%20headset%20charging%20dock.jpg',
        'VR headset face cushion': 'https://cdamemoryjogger.blob.core.windows.net/loft/VR%20headset%20face%20cushion.jpg',
        'VR headset lens cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/VR%20headset%20lens%20cover.jpg',
        'backgammon set': 'https://cdamemoryjogger.blob.core.windows.net/loft/backgammon%20set.jpg',
        'board game card sleeves': 'https://cdamemoryjogger.blob.core.windows.net/loft/board%20game%20card%20sleeves.jpg',
        'board game organizer box': 'https://cdamemoryjogger.blob.core.windows.net/loft/board%20game%20organizer%20box.jpg',
        'board game shelf unit': 'https://cdamemoryjogger.blob.core.windows.net/loft/board%20game%20shelf%20unit.jpg',
        'board game storage drawers': 'https://cdamemoryjogger.blob.core.windows.net/loft/board%20game%20storage%20drawers.jpg',
        'card deck case': 'https://cdamemoryjogger.blob.core.windows.net/loft/card%20deck%20case.jpg',
        'card deck organizer case': 'https://cdamemoryjogger.blob.core.windows.net/loft/card%20deck%20organizer%20case.jpg',
        'checkers set': 'https://cdamemoryjogger.blob.core.windows.net/loft/checkers%20set.jpg',
        'chess set': 'https://cdamemoryjogger.blob.core.windows.net/loft/chess%20set.jpg',
        'console controller battery pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/console%20controller%20battery%20pack.jpg',
        'console dust cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/console%20dust%20cover.jpg',
        'controller battery pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/controller%20battery%20pack.jpg',
        'controller charging cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/controller%20charging%20cable.jpg',
        'controller silicone case': 'https://cdamemoryjogger.blob.core.windows.net/loft/controller%20silicone%20case.jpg',
        'controller thumb grips': 'https://cdamemoryjogger.blob.core.windows.net/loft/controller%20thumb%20grips.jpg',
        'controller trigger grips': 'https://cdamemoryjogger.blob.core.windows.net/loft/controller%20trigger%20grips.jpg',
        'dice set': 'https://cdamemoryjogger.blob.core.windows.net/loft/dice%20set.jpg',
        'dice tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/dice%20tray.jpg',
        'domino set': 'https://cdamemoryjogger.blob.core.windows.net/loft/domino%20set.jpg',
        'game console travel case': 'https://cdamemoryjogger.blob.core.windows.net/loft/game%20console%20travel%20case.jpg',
        'game console vertical stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/game%20console%20vertical%20stand.jpg',
        'game controller charging dock': 'https://cdamemoryjogger.blob.core.windows.net/loft/game%20controller%20charging%20dock.jpg',
        'game controller wall mount': 'https://cdamemoryjogger.blob.core.windows.net/loft/game%20controller%20wall%20mount.jpg',
        'game controllers': 'https://cdamemoryjogger.blob.core.windows.net/loft/game%20controllers.jpg',
        'game disc storage binder': 'https://cdamemoryjogger.blob.core.windows.net/loft/game%20disc%20storage%20binder.jpg',
        'game shelf labels': 'https://cdamemoryjogger.blob.core.windows.net/loft/game%20shelf%20labels.jpg',
        'game timer': 'https://cdamemoryjogger.blob.core.windows.net/loft/game%20timer.jpg',
        'gaming chair floor mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20chair%20floor%20mat.jpg',
        'gaming chair footrest': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20chair%20footrest.jpg',
        'gaming chair headrest pillow': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20chair%20headrest%20pillow.jpg',
        'gaming headset case': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20headset%20case.jpg',
        'gaming headset charging dock': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20headset%20charging%20dock.jpg',
        'gaming headset stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20headset%20stand.jpg',
        'gaming keyboard': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20keyboard.jpg',
        'gaming keyboard wrist rest': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20keyboard%20wrist%20rest.jpg',
        'gaming mouse': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20mouse.jpg',
        'gaming router': 'https://cdamemoryjogger.blob.core.windows.net/loft/gaming%20router.jpg',
        'poker chip set': 'https://cdamemoryjogger.blob.core.windows.net/loft/poker%20chip%20set.jpg',
        'puzzle frame': 'https://cdamemoryjogger.blob.core.windows.net/loft/puzzle%20frame.jpg',
        'puzzle glue': 'https://cdamemoryjogger.blob.core.windows.net/loft/puzzle%20glue.jpg',
        'puzzle organizer trays': 'https://cdamemoryjogger.blob.core.windows.net/loft/puzzle%20organizer%20trays.jpg',
        'puzzle saver sheets': 'https://cdamemoryjogger.blob.core.windows.net/loft/puzzle%20saver%20sheets.jpg',
        'puzzle sorting trays': 'https://cdamemoryjogger.blob.core.windows.net/loft/puzzle%20sorting%20trays.jpg',
        'puzzle storage mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/puzzle%20storage%20mat.jpg',
        'trading card binder': 'https://cdamemoryjogger.blob.core.windows.net/loft/trading%20card%20binder.jpg',
        'trading card sleeves': 'https://cdamemoryjogger.blob.core.windows.net/loft/trading%20card%20sleeves.jpg',
        'vr controller stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/vr%20controller%20stand.jpg',
        'vr headset storage stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/vr%20headset%20storage%20stand.jpg',
        
        'UPS battery backup': 'https://cdamemoryjogger.blob.core.windows.net/loft/UPS%20battery%20backup.jpg',
        'WiFi range extender': 'https://cdamemoryjogger.blob.core.windows.net/loft/WiFi%20range%20extender.jpg',
        'ethernet cable spool': 'https://cdamemoryjogger.blob.core.windows.net/loft/ethernet%20cable%20spool.jpg',
        'ethernet coupler': 'https://cdamemoryjogger.blob.core.windows.net/loft/ethernet%20coupler.jpg',
        'modem coax cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/modem%20coax%20cable.jpg',
        'modem surge protector': 'https://cdamemoryjogger.blob.core.windows.net/loft/modem%20surge%20protector.jpg',
        'network cable organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/network%20cable%20organizer.jpg',
        'network switch': 'https://cdamemoryjogger.blob.core.windows.net/loft/network%20switch.jpg',
        'router ethernet cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/router%20ethernet%20cable.jpg',
        'smart LED light strip': 'https://cdamemoryjogger.blob.core.windows.net/loft/smart%20LED%20light%20strip.jpg',
        'smart dimmer plug': 'https://cdamemoryjogger.blob.core.windows.net/loft/smart%20dimmer%20plug.jpg',
        'smart display': 'https://cdamemoryjogger.blob.core.windows.net/loft/smart%20display.jpg',
        'smart light bulb': 'https://cdamemoryjogger.blob.core.windows.net/loft/smart%20light%20bulb.jpg',
        'smart light switch': 'https://cdamemoryjogger.blob.core.windows.net/loft/smart%20light%20switch.jpg',
        'smart thermostat': 'https://cdamemoryjogger.blob.core.windows.net/loft/smart%20thermostat.jpg',
        'smart thermostat sensor': 'https://cdamemoryjogger.blob.core.windows.net/loft/smart%20thermostat%20sensor.jpg',
        'wifi booster stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/wifi%20booster%20stand.jpg',
        'wifi extender wall plate': 'https://cdamemoryjogger.blob.core.windows.net/loft/wifi%20extender%20wall%20plate.jpg',
        'LED strip light corner connectors': 'https://cdamemoryjogger.blob.core.windows.net/loft/LED%20strip%20light%20corner%20connectors.jpg',
        'LED strip light diffuser channel': 'https://cdamemoryjogger.blob.core.windows.net/loft/LED%20strip%20light%20diffuser%20channel.jpg',
        'LED strip lights': 'https://cdamemoryjogger.blob.core.windows.net/loft/LED%20strip%20lights.jpg',
        'USB C extension cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/USB%20C%20extension%20cable.jpg',
        'USB C hub': 'https://cdamemoryjogger.blob.core.windows.net/loft/USB%20C%20hub.jpg',
        'USB wall charger multi port': 'https://cdamemoryjogger.blob.core.windows.net/loft/USB%20wall%20charger%20multi%20port.jpg',
        'bedside lamp smart bulb': 'https://cdamemoryjogger.blob.core.windows.net/loft/bedside%20lamp%20smart%20bulb.jpg',
        'charging cable sleeves': 'https://cdamemoryjogger.blob.core.windows.net/loft/charging%20cable%20sleeves.jpg',
        'charging hub multi device': 'https://cdamemoryjogger.blob.core.windows.net/loft/charging%20hub%20multi%20device.jpg',
        'extension cord floor cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/extension%20cord%20floor%20cover.jpg',
        'extension cord storage bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/extension%20cord%20storage%20bag.jpg',
        'extension cord wall clips': 'https://cdamemoryjogger.blob.core.windows.net/loft/extension%20cord%20wall%20clips.jpg',
        'fairy light battery pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/fairy%20light%20battery%20pack.jpg',
        'fairy lights': 'https://cdamemoryjogger.blob.core.windows.net/loft/fairy%20lights.jpg',
        'lamp cord floor cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/lamp%20cord%20floor%20cover.jpg',
        'lamp cord grommet': 'https://cdamemoryjogger.blob.core.windows.net/loft/lamp%20cord%20grommet.jpg',
        'lamp cord protector sleeve': 'https://cdamemoryjogger.blob.core.windows.net/loft/lamp%20cord%20protector%20sleeve.jpg',
        'lamp shade clip adapter': 'https://cdamemoryjogger.blob.core.windows.net/loft/lamp%20shade%20clip%20adapter.jpg',
        'lamp shade diffuser': 'https://cdamemoryjogger.blob.core.windows.net/loft/lamp%20shade%20diffuser.jpg',
        'lamp shade spider adapter': 'https://cdamemoryjogger.blob.core.windows.net/loft/lamp%20shade%20spider%20adapter.jpg',
        'lamp smart bulb': 'https://cdamemoryjogger.blob.core.windows.net/loft/lamp%20smart%20bulb.jpg',
        'light bulb changer pole': 'https://cdamemoryjogger.blob.core.windows.net/loft/light%20bulb%20changer%20pole.jpg',
        'light bulb storage organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/light%20bulb%20storage%20organizer.jpg',
        'phone charging cable spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/phone%20charging%20cable%20spare.jpg',
        'phone charging dock': 'https://cdamemoryjogger.blob.core.windows.net/loft/phone%20charging%20dock.jpg',
        'phone stand dock': 'https://cdamemoryjogger.blob.core.windows.net/loft/phone%20stand%20dock.jpg',
        'portable power bank': 'https://cdamemoryjogger.blob.core.windows.net/loft/portable%20power%20bank.jpg',
        'power bank charging dock': 'https://cdamemoryjogger.blob.core.windows.net/loft/power%20bank%20charging%20dock.jpg',
        'power strip cord wrap': 'https://cdamemoryjogger.blob.core.windows.net/loft/power%20strip%20cord%20wrap.png',
        'power strip extension': 'https://cdamemoryjogger.blob.core.windows.net/loft/power%20strip%20extension.jpg',
        'power strip mounting brackets': 'https://cdamemoryjogger.blob.core.windows.net/loft/power%20strip%20mounting%20brackets.jpg',
        'power strip with USB': 'https://cdamemoryjogger.blob.core.windows.net/loft/power%20strip%20with%20USB.jpg',
        'string lights indoor': 'https://cdamemoryjogger.blob.core.windows.net/loft/string%20lights%20indoor.jpg',
        'surge protector backup battery': 'https://cdamemoryjogger.blob.core.windows.net/loft/surge%20protector%20backup%20battery.jpg',
        'surge protector outlet cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/surge%20protector%20outlet%20cover.jpg',
        'surge protector power conditioner': 'https://cdamemoryjogger.blob.core.windows.net/loft/surge%20protector%20power%20conditioner.jpg',
        'tablet charging cable spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/tablet%20charging%20cable%20spare.jpg',
        'wireless charging pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/wireless%20charging%20pad.jpg',
        'wireless charging stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/wireless%20charging%20stand.jpg',
        
        'ceiling fan blade screws': 'https://cdamemoryjogger.blob.core.windows.net/loft/ceiling%20fan%20blade%20screws.jpg',
        'ceiling fan light kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/ceiling%20fan%20light%20kit.jpg',
        'desk lamp': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20lamp.jpg',
        'desk lamp bulb spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20lamp%20bulb%20spare.jpg',
        'desk lamp dimmer cord': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20lamp%20dimmer%20cord.jpg',
        'fan heater': 'https://cdamemoryjogger.blob.core.windows.net/loft/fan%20heater.jpg',
        'fan heater remote': 'https://cdamemoryjogger.blob.core.windows.net/loft/fan%20heater%20remote.jpg',
        'fan heater safety grill': 'https://cdamemoryjogger.blob.core.windows.net/loft/fan%20heater%20safety%20grill.jpg',
        'fan heater thermostat knob': 'https://cdamemoryjogger.blob.core.windows.net/loft/fan%20heater%20thermostat%20knob.jpg',
        'fan pull chain': 'https://cdamemoryjogger.blob.core.windows.net/loft/fan%20pull%20chain.jpg',
        'portable AC filter': 'https://cdamemoryjogger.blob.core.windows.net/loft/portable%20AC%20filter.jpg',
        'area rug corner protectors': 'https://cdamemoryjogger.blob.core.windows.net/loft/area%20rug%20corner%20protectors.jpg',
        'area rug storage roll': 'https://cdamemoryjogger.blob.core.windows.net/loft/area%20rug%20storage%20roll.jpg',
        'floor runner': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20runner.jpg',
        'rug anti slip tape': 'https://cdamemoryjogger.blob.core.windows.net/loft/rug%20anti%20slip%20tape.jpg',
        'rug corner grippers': 'https://cdamemoryjogger.blob.core.windows.net/loft/rug%20corner%20grippers.jpg',
        'rug vacuum attachment': 'https://cdamemoryjogger.blob.core.windows.net/loft/rug%20vacuum%20attachment.jpg',
        'aromatherapy spray': 'https://cdamemoryjogger.blob.core.windows.net/loft/aromatherapy%20spray.jpg',
        'art print': 'https://cdamemoryjogger.blob.core.windows.net/loft/art%20print.jpg',
        'canvas art storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/canvas%20art%20storage%20bin.jpg',
        'decorative garland': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20garland.jpg',
        'decorative lantern': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20lantern.jpg',
        'decorative sculpture': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20sculpture.jpg',
        'decorative tray acrylic': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20tray%20acrylic.jpg',
        'decorative tray marble': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20tray%20marble.jpg',
        'decorative tray rattan': 'https://cdamemoryjogger.blob.core.windows.net/loft/decorative%20tray%20rattan.jpg',
        'diffuser refill oils': 'https://cdamemoryjogger.blob.core.windows.net/loft/diffuser%20refill%20oils.jpg',
        'flameless candles': 'https://cdamemoryjogger.blob.core.windows.net/loft/flameless%20candles.jpg',
        'floor lantern': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20lantern.jpg',
        'frame bumpers': 'https://cdamemoryjogger.blob.core.windows.net/loft/frame%20bumpers.jpg',
        'frame corner protectors': 'https://cdamemoryjogger.blob.core.windows.net/loft/frame%20corner%20protectors.jpg',
        'frame hanging wire kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/frame%20hanging%20wire%20kit.jpg',
        'frame mat board': 'https://cdamemoryjogger.blob.core.windows.net/loft/frame%20mat%20board.jpg',
        'full length mirror': 'https://cdamemoryjogger.blob.core.windows.net/loft/full%20length%20mirror.jpg',
        'full length mirror stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/full%20length%20mirror%20stand.jpg',
        'incense holder': 'https://cdamemoryjogger.blob.core.windows.net/loft/incense%20holder.jpg',
        'incense sticks': 'https://cdamemoryjogger.blob.core.windows.net/loft/incense%20sticks.jpg',
        'macrame wall hanging': 'https://cdamemoryjogger.blob.core.windows.net/loft/macrame%20wall%20hanging.jpg',
        'picture frame backing': 'https://cdamemoryjogger.blob.core.windows.net/loft/picture%20frame%20backing.jpg',
        'picture frame cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/picture%20frame%20cleaning%20kit.jpg',
        'picture frame corner protectors': 'https://cdamemoryjogger.blob.core.windows.net/loft/picture%20frame%20corner%20protectors.jpg',
        'picture light': 'https://cdamemoryjogger.blob.core.windows.net/loft/picture%20light.jpg',
        'picture light remote': 'https://cdamemoryjogger.blob.core.windows.net/loft/picture%20light%20remote.jpg',
        'remote candles': 'https://cdamemoryjogger.blob.core.windows.net/loft/remote%20candles.jpg',
        'room spray bottle': 'https://cdamemoryjogger.blob.core.windows.net/loft/room%20spray%20bottle.jpg',
        'tabletop sculpture': 'https://cdamemoryjogger.blob.core.windows.net/loft/tabletop%20sculpture.jpg',
        'tapestry hanger': 'https://cdamemoryjogger.blob.core.windows.net/loft/tapestry%20hanger.jpg',
        'vase set': 'https://cdamemoryjogger.blob.core.windows.net/loft/vase%20set.jpg',
        'wall art adhesive strips': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20art%20adhesive%20strips.jpg',
        'wall art level tool': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20art%20level%20tool.jpg',
        'wall clock battery': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20clock%20battery.jpg',
        'wall clock mounting hook': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20clock%20mounting%20hook.jpg',
        'wall clock spare hands': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20clock%20spare%20hands.png',
        'wall decals': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20decals.jpg',
        'wall decals remover': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20decals%20remover.jpg',
        'wall hook decorative': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20hook%20decorative.jpg',
        'wall repair patch kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20repair%20patch%20kit.jpg',
        'wall shelves decorative set': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20shelves%20decorative%20set.jpg',
        'wall tapestry': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20tapestry.jpg',
        'wick trimmer': 'https://cdamemoryjogger.blob.core.windows.net/loft/wick%20trimmer.jpg',
        'window shade repair kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/window%20shade%20repair%20kit.jpg',
        'loft railing decor lights': 'https://cdamemoryjogger.blob.core.windows.net/loft/loft%20railing%20decor%20lights.jpg',
        
        'air mattress': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20mattress.jpg',
        'air mattress electric pump': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20mattress%20electric%20pump.jpg',
        'air mattress patch kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20mattress%20patch%20kit.jpg',
        'alarm clock': 'https://cdamemoryjogger.blob.core.windows.net/loft/alarm%20clock.jpg',
        'alarm clock backup battery': 'https://cdamemoryjogger.blob.core.windows.net/loft/alarm%20clock%20backup%20battery.jpg',
        'alarm clock battery pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/alarm%20clock%20battery%20pack.jpg',
        'alarm clock decorative': 'https://cdamemoryjogger.blob.core.windows.net/loft/alarm%20clock%20decorative.jpg',
        'bed wedge pillow cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/bed%20wedge%20pillow%20cover.jpg',
        'bedside lamp': 'https://cdamemoryjogger.blob.core.windows.net/loft/bedside%20lamp.jpg',
        'bedspread': 'https://cdamemoryjogger.blob.core.windows.net/loft/bedspread.jpg',
        'blanket basket': 'https://cdamemoryjogger.blob.core.windows.net/loft/blanket%20basket.jpg',
        'blanket set': 'https://cdamemoryjogger.blob.core.windows.net/loft/blanket%20set.jpg',
        'blanket storage trunk': 'https://cdamemoryjogger.blob.core.windows.net/loft/blanket%20storage%20trunk.jpg',
        'blanket storage vacuum bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/blanket%20storage%20vacuum%20bag.jpg',
        'comforter': 'https://cdamemoryjogger.blob.core.windows.net/loft/comforter.jpg',
        'daybed': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed.jpg',
        'daybed bedding set': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed%20bedding%20set.jpg',
        'daybed frame bolts': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed%20frame%20bolts.jpg',
        'daybed frame support': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed%20frame%20support.jpg',
        'daybed mattress': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed%20mattress.jpg',
        'daybed mattress protector': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed%20mattress%20protector.jpg',
        'daybed pillow shams': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed%20pillow%20shams.jpg',
        'daybed storage drawers': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed%20storage%20drawers.jpg',
        'daybed throw pillows': 'https://cdamemoryjogger.blob.core.windows.net/loft/daybed%20throw%20pillows.jpg',
        'duvet cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/duvet%20cover.jpg',
        'duvet insert': 'https://cdamemoryjogger.blob.core.windows.net/loft/duvet%20insert.jpg',
        'ear plugs': 'https://cdamemoryjogger.blob.core.windows.net/loft/ear%20plugs.jpg',
        'extra blanket set': 'https://cdamemoryjogger.blob.core.windows.net/loft/extra%20blanket%20set.jpg',
        'extra pillow set spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/extra%20pillow%20set%20spare.jpg',
        'extra sheet set': 'https://cdamemoryjogger.blob.core.windows.net/loft/extra%20sheet%20set.jpg',
        'mattress bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/mattress%20bag.jpg',
        'mattress encasement': 'https://cdamemoryjogger.blob.core.windows.net/loft/mattress%20encasement.jpg',
        'mattress lifting strap': 'https://cdamemoryjogger.blob.core.windows.net/loft/mattress%20lifting%20strap.jpg',
        'mattress protector': 'https://cdamemoryjogger.blob.core.windows.net/loft/mattress%20protector.jpg',
        'mattress strap handles': 'https://cdamemoryjogger.blob.core.windows.net/loft/mattress%20strap%20handles.jpg',
        'mattress topper': 'https://cdamemoryjogger.blob.core.windows.net/loft/mattress%20topper.jpg',
        'mattress vacuum bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/mattress%20vacuum%20bag.jpg',
        'mattress wedge pillow': 'https://cdamemoryjogger.blob.core.windows.net/loft/mattress%20wedge%20pillow.jpg',
        'pillow set': 'https://cdamemoryjogger.blob.core.windows.net/loft/pillow%20set.jpg',
        'quilt set': 'https://cdamemoryjogger.blob.core.windows.net/loft/quilt%20set.jpg',
        'sheet set': 'https://cdamemoryjogger.blob.core.windows.net/loft/sheet%20set.jpg',
        'sleep mask': 'https://cdamemoryjogger.blob.core.windows.net/loft/sleep%20mask.jpg',
        'throw blanket spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/throw%20blanket%20spare.jpg',
        'trundle bed': 'https://cdamemoryjogger.blob.core.windows.net/loft/trundle%20bed.jpg',
        'trundle bed linens': 'https://cdamemoryjogger.blob.core.windows.net/loft/trundle%20bed%20linens.jpg',
        'trundle bed wheels': 'https://cdamemoryjogger.blob.core.windows.net/loft/trundle%20bed%20wheels.jpg',
        'trundle mattress': 'https://cdamemoryjogger.blob.core.windows.net/loft/trundle%20mattress.jpg',
        'trundle mattress protector': 'https://cdamemoryjogger.blob.core.windows.net/loft/trundle%20mattress%20protector.jpg',
        'weighted blanket': 'https://cdamemoryjogger.blob.core.windows.net/loft/weighted%20blanket.jpg',
        'white noise machine': 'https://cdamemoryjogger.blob.core.windows.net/loft/white%20noise%20machine.jpg',
        'air pump': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20pump.jpg',
        'air pump adapter set': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20pump%20adapter%20set.jpg',
        'air pump hose': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20pump%20hose.jpg',  
    
        'ID badge lanyard': 'https://cdamemoryjogger.blob.core.windows.net/loft/ID%20badge%20lanyard.jpg',
        'accordion file organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/accordion%20file%20organizer.jpg',
        'air purifier air quality monitor': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20purifier%20air%20quality%20monitor.jpg',
        'barcode scanner': 'https://cdamemoryjogger.blob.core.windows.net/loft/barcode%20scanner.jpg',
        'bulletin board': 'https://cdamemoryjogger.blob.core.windows.net/loft/bulletin%20board.jpg',
        'bulletin board cork refill': 'https://cdamemoryjogger.blob.core.windows.net/loft/bulletin%20board%20cork%20refill.jpg',
        'bulletin board eraser': 'https://cdamemoryjogger.blob.core.windows.net/loft/bulletin%20board%20eraser.jpg',
        'bulletin board pins': 'https://cdamemoryjogger.blob.core.windows.net/loft/bulletin%20board%20pins.jpg',
        'business card binder': 'https://cdamemoryjogger.blob.core.windows.net/loft/business%20card%20binder.jpg',
        'business card holder': 'https://cdamemoryjogger.blob.core.windows.net/loft/business%20card%20holder.jpg',
        'desk': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk.jpg',
        'desk cable grommet': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20cable%20grommet.jpg',
        'desk cable organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20cable%20organizer%20tray.jpg',
        'desk chair': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20chair.jpg',
        'desk clamp cup holder': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20clamp%20cup%20holder.jpg',
        'desk clamp headphone hook': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20clamp%20headphone%20hook.jpg',
        'desk cord grommet insert': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20cord%20grommet%20insert.jpg',
        'desk drawer dividers': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20drawer%20dividers.jpg',
        'desk drawer felt liner': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20drawer%20felt%20liner.jpg',
        'desk drawer lock': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20drawer%20lock.jpg',
        'desk drawer lock cylinder': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20drawer%20lock%20cylinder.jpg',
        'desk foot hammock': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20foot%20hammock.jpg',
        'desk hutch organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20hutch%20organizer.jpg',
        'desk mat leather': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20mat%20leather.jpg',
        'desk organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20organizer.jpg',
        'desk speakers': 'https://cdamemoryjogger.blob.core.windows.net/loft/desk%20speakers.jpg',
        'desktop organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/desktop%20organizer%20tray.jpg',
        'easel tabletop': 'https://cdamemoryjogger.blob.core.windows.net/loft/easel%20tabletop.jpg',
        'file label maker': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20label%20maker.jpg',
        'filing cabinet': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20cabinet.jpg',
        'filing cabinet anti tip kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20cabinet%20anti%20tip%20kit.jpg',
        'filing cabinet divider rails': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20cabinet%20divider%20rails.jpg',
        'filing cabinet key spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20cabinet%20key%20spare.jpg',
        'heart rate monitor strap': 'https://cdamemoryjogger.blob.core.windows.net/loft/heart%20rate%20monitor%20strap.jpg',
        'humidifier cleaning tablets': 'https://cdamemoryjogger.blob.core.windows.net/loft/humidifier%20cleaning%20tablets.jpg',
        'keyboard bench': 'https://cdamemoryjogger.blob.core.windows.net/loft/keyboard%20bench.jpg',
        'keyboard cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/loft/keyboard%20cleaning%20brush.jpg',
        'keyboard music rest': 'https://cdamemoryjogger.blob.core.windows.net/loft/keyboard%20music%20rest.jpg',
        'keyboard piano': 'https://cdamemoryjogger.blob.core.windows.net/loft/keyboard%20piano.jpg',
        'keyboard power adapter': 'https://cdamemoryjogger.blob.core.windows.net/loft/keyboard%20power%20adapter.jpg',
        'keyboard stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/keyboard%20stand.jpg',
        'keyboard stand adjustable': 'https://cdamemoryjogger.blob.core.windows.net/loft/keyboard%20stand%20adjustable.jpg',
        'keyboard sustain pedal': 'https://cdamemoryjogger.blob.core.windows.net/loft/keyboard%20sustain%20pedal.jpg',
        'label printer': 'https://cdamemoryjogger.blob.core.windows.net/loft/label%20printer.jpg',
        'laptop anti theft cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/laptop%20anti%20theft%20cable.jpg',
        'laptop privacy filter': 'https://cdamemoryjogger.blob.core.windows.net/loft/laptop%20privacy%20filter.jpg',
        'laptop privacy screen': 'https://cdamemoryjogger.blob.core.windows.net/loft/laptop%20privacy%20screen.jpg',
        'laptop sleeve case': 'https://cdamemoryjogger.blob.core.windows.net/loft/laptop%20sleeve%20case.jpg',
        'monitor VESA mount kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/monitor%20VESA%20mount%20kit.jpg',
        'monitor desk clamp arm dual': 'https://cdamemoryjogger.blob.core.windows.net/loft/monitor%20desk%20clamp%20arm%20dual.jpg',
        'monitor light bar': 'https://cdamemoryjogger.blob.core.windows.net/loft/monitor%20light%20bar.jpg',
        'monitor screen hood': 'https://cdamemoryjogger.blob.core.windows.net/loft/monitor%20screen%20hood.jpg',
        'name badge holder': 'https://cdamemoryjogger.blob.core.windows.net/loft/name%20badge%20holder.jpg',
       
        'office chair floor protectors': 'https://cdamemoryjogger.blob.core.windows.net/loft/office%20chair%20floor%20protectors.jpg',
        'office chair mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/office%20chair%20mat.jpg',
        'paper shredder': 'https://cdamemoryjogger.blob.core.windows.net/loft/paper%20shredder.jpg',
        'paper shredder oil': 'https://cdamemoryjogger.blob.core.windows.net/loft/paper%20shredder%20oil.jpg',
        'paper shredder oil bottle': 'https://cdamemoryjogger.blob.core.windows.net/loft/paper%20shredder%20oil%20bottle.jpg',
        'portable document scanner': 'https://cdamemoryjogger.blob.core.windows.net/loft/portable%20document%20scanner.jpg',
        'printer': 'https://cdamemoryjogger.blob.core.windows.net/loft/printer.jpg',
        'printer cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/printer%20cable.jpg',
        'printer dust cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/printer%20dust%20cover.jpg',
        'printer ink cartridges': 'https://cdamemoryjogger.blob.core.windows.net/loft/printer%20ink%20cartridges.jpg',
        'printer ink refill kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/printer%20ink%20refill%20kit.jpg',
        'printer paper': 'https://cdamemoryjogger.blob.core.windows.net/loft/printer%20paper.jpg',
        'printer paper catch tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/printer%20paper%20catch%20tray.jpg',
        'printer toner cartridge': 'https://cdamemoryjogger.blob.core.windows.net/loft/printer%20toner%20cartridge.jpg',
        'receipt organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/receipt%20organizer.jpg',
        'scanner': 'https://cdamemoryjogger.blob.core.windows.net/loft/scanner.jpg',
        'scanner cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/scanner%20cable.jpg',
        'scanner cable spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/scanner%20cable%20spare.jpg',
        'scanner cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/scanner%20cleaning%20kit.jpg',
        'scanner stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/scanner%20stand.jpg',
        'shipping scale': 'https://cdamemoryjogger.blob.core.windows.net/loft/shipping%20scale.jpg',
        'studio headphones': 'https://cdamemoryjogger.blob.core.windows.net/loft/studio%20headphones.jpg',
        'tablet charging dock': 'https://cdamemoryjogger.blob.core.windows.net/loft/tablet%20charging%20dock.jpg',
        'tablet keyboard case': 'https://cdamemoryjogger.blob.core.windows.net/loft/tablet%20keyboard%20case.jpg',
        'tablet screen protector': 'https://cdamemoryjogger.blob.core.windows.net/loft/tablet%20screen%20protector.jpg',
        'tablet stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/tablet%20stand.jpg',
        'tablet stand adjustable': 'https://cdamemoryjogger.blob.core.windows.net/loft/tablet%20stand%20adjustable.jpg',
        'tax document organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/tax%20document%20organizer.jpg',
        'thermal label roll': 'https://cdamemoryjogger.blob.core.windows.net/loft/thermal%20label%20roll.jpg',
        'under desk CPU mount': 'https://cdamemoryjogger.blob.core.windows.net/loft/under%20desk%20CPU%20mount.jpg',
        'under desk cable tray basket': 'https://cdamemoryjogger.blob.core.windows.net/loft/under%20desk%20cable%20tray%20basket.jpg',
        'whiteboard': 'https://cdamemoryjogger.blob.core.windows.net/loft/whiteboard.jpg',
        'whiteboard cleaner spray': 'https://cdamemoryjogger.blob.core.windows.net/loft/whiteboard%20cleaner%20spray.jpg',
        'whiteboard eraser set': 'https://cdamemoryjogger.blob.core.windows.net/loft/whiteboard%20eraser%20set.jpg',
        'whiteboard markers': 'https://cdamemoryjogger.blob.core.windows.net/loft/whiteboard%20markers.jpg',
        'wireless keyboard': 'https://cdamemoryjogger.blob.core.windows.net/loft/wireless%20keyboard.jpg',
        'wireless keyboard cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/wireless%20keyboard%20cover.jpg',
        'wireless keyboard wrist rest': 'https://cdamemoryjogger.blob.core.windows.net/loft/wireless%20keyboard%20wrist%20rest.jpg',
        'wireless mouse pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/wireless%20mouse%20pad.jpg',
        'writing pad blotter': 'https://cdamemoryjogger.blob.core.windows.net/loft/writing%20pad%20blotter.jpg',
        'mouse pad large': 'https://cdamemoryjogger.blob.core.windows.net/loft/mouse%20pad%20large.jpg',
        'mouse wrist pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/mouse%20wrist%20pad.jpg',
        
        'USB flash drive case': 'https://cdamemoryjogger.blob.core.windows.net/loft/USB%20flash%20drive%20case.jpg',
        'Velcro cable ties': 'https://cdamemoryjogger.blob.core.windows.net/loft/Velcro%20cable%20ties.jpg',
        'art supply drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/art%20supply%20drawer%20organizer.jpg',
        'book collection': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20collection.jpg',
        'book display stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20display%20stand.jpg',
        'book storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20storage%20bin.jpg',
        'book storage box': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20storage%20box.jpg',
        'book storage crate': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20storage%20crate.jpg',
        'book storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20storage%20shelf.jpg',
        'bookend set': 'https://cdamemoryjogger.blob.core.windows.net/loft/bookend%20set.jpg',
        'cable concealment channel': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20concealment%20channel.jpg',
        'cable label tags': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20label%20tags.jpg',
        'cable management sleeves': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20management%20sleeves.jpg',
        'cable organizer box': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20organizer%20box.jpg',
        'cable raceway kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20raceway%20kit.jpg',
        'cable wrap': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20wrap.jpg',
        'closet drawer unit': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20drawer%20unit.jpg',
        'closet hanging organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20hanging%20organizer.jpg',
        'closet organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20organizer.jpg',
        'closet rod brackets': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20rod%20brackets.jpg',
        'closet rod cap': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20rod%20cap.jpg',
        'coat hanger set': 'https://cdamemoryjogger.blob.core.windows.net/loft/coat%20hanger%20set.jpg',
        'drawer label set': 'https://cdamemoryjogger.blob.core.windows.net/loft/drawer%20label%20set.jpg',
        'drawer liner roll': 'https://cdamemoryjogger.blob.core.windows.net/loft/drawer%20liner%20roll.jpg',
        'external SSD drive': 'https://cdamemoryjogger.blob.core.windows.net/loft/external%20SSD%20drive.jpg',
        'file folder expanding': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20folder%20expanding.jpg',
        'file folder organizer box': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20folder%20organizer%20box.jpg',
        'file folders': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20folders.jpg',
        'filing storage crate': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20storage%20crate.jpg',
        'hard drive anti static bags': 'https://cdamemoryjogger.blob.core.windows.net/loft/hard%20drive%20anti%20static%20bags.jpg',
        'hard drive docking station': 'https://cdamemoryjogger.blob.core.windows.net/loft/hard%20drive%20docking%20station.jpg',
        'instrument cable organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20cable%20organizer.jpg',
        'instrument cable wrap': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20cable%20wrap.jpg',
        'magazine storage box': 'https://cdamemoryjogger.blob.core.windows.net/loft/magazine%20storage%20box.jpg',
        'plastic storage drawers': 'https://cdamemoryjogger.blob.core.windows.net/loft/plastic%20storage%20drawers.jpg',
        'rolling cart': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20cart.jpg',
        'rolling cart hooks': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20cart%20hooks.jpg',
        'rolling cart organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20cart%20organizer%20tray.jpg',
        'rolling cart pegboard': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20cart%20pegboard.jpg',
        'rolling file cart': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20file%20cart.jpg',
        'shelf storage baskets': 'https://cdamemoryjogger.blob.core.windows.net/loft/shelf%20storage%20baskets.jpg',
        'storage bin divider inserts': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20divider%20inserts.jpg',
        'storage bin dolly': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20dolly.jpg',
        'storage bin handle grips': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20handle%20grips.jpg',
        'storage bin label set': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20label%20set.jpg',
        'storage bin lids': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20lids.jpg',
        'storage cube inserts': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20cube%20inserts.jpg',
        'umbrella rack liner': 'https://cdamemoryjogger.blob.core.windows.net/loft/umbrella%20rack%20liner.jpg',
        'umbrella stand decorative': 'https://cdamemoryjogger.blob.core.windows.net/loft/umbrella%20stand%20decorative.jpg',
        'zip tie pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/zip%20tie%20pack.jpg',
        'file storage crate': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20storage%20crate.jpg',
        'filing crate lid': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20crate%20lid.jpg',
        'filing crate organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20crate%20organizer.jpg',
      
        'USB flash drive case': 'https://cdamemoryjogger.blob.core.windows.net/loft/USB%20flash%20drive%20case.jpg',
        'Velcro cable ties': 'https://cdamemoryjogger.blob.core.windows.net/loft/Velcro%20cable%20ties.jpg',
        'art supply drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/art%20supply%20drawer%20organizer.jpg',
        'book collection': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20collection.jpg',
        'book display stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20display%20stand.jpg',
        'book storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20storage%20bin.jpg',
        'book storage box': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20storage%20box.jpg',
        'book storage crate': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20storage%20crate.jpg',
        'book storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/book%20storage%20shelf.jpg',
        'bookend set': 'https://cdamemoryjogger.blob.core.windows.net/loft/bookend%20set.jpg',
        'cable concealment channel': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20concealment%20channel.jpg',
        'cable label tags': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20label%20tags.jpg',
        'cable management sleeves': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20management%20sleeves.jpg',
        'cable organizer box': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20organizer%20box.jpg',
        'cable raceway kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20raceway%20kit.jpg',
        'cable wrap': 'https://cdamemoryjogger.blob.core.windows.net/loft/cable%20wrap.jpg',
        'closet drawer unit': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20drawer%20unit.jpg',
        'closet hanging organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20hanging%20organizer.jpg',
        'closet organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20organizer.jpg',
        'closet rod brackets': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20rod%20brackets.jpg',
        'closet rod cap': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20rod%20cap.jpg',
        'closet rod extender': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20rod%20extender.jpg',
        'closet rod tension': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20rod%20tension.jpg',
        'closet shelf riser': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20shelf%20riser.jpg',
        'closet storage cubes': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20storage%20cubes.jpg',
        'coat hanger set': 'https://cdamemoryjogger.blob.core.windows.net/loft/coat%20hanger%20set.jpg',
        'computer cable ties': 'https://cdamemoryjogger.blob.core.windows.net/loft/computer%20cable%20ties.jpg',
        'cord clips': 'https://cdamemoryjogger.blob.core.windows.net/loft/cord%20clips.jpg',
        'cord clips adhesive': 'https://cdamemoryjogger.blob.core.windows.net/loft/cord%20clips%20adhesive.jpg',
        'cord concealment kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/cord%20concealment%20kit.jpg',
        'cord organizer basket': 'https://cdamemoryjogger.blob.core.windows.net/loft/cord%20organizer%20basket.jpg',
        'craft rolling cart': 'https://cdamemoryjogger.blob.core.windows.net/loft/craft%20rolling%20cart.jpg',
        'document file organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/document%20file%20organizer.jpg',
        'document fire safe box': 'https://cdamemoryjogger.blob.core.windows.net/loft/document%20fire%20safe%20box.jpg',
        'document safe box': 'https://cdamemoryjogger.blob.core.windows.net/loft/document%20safe%20box.jpg',
        'document storage box': 'https://cdamemoryjogger.blob.core.windows.net/loft/document%20storage%20box.jpg',
        'drawer divider bamboo': 'https://cdamemoryjogger.blob.core.windows.net/loft/drawer%20divider%20bamboo.jpg',
        'drawer label set': 'https://cdamemoryjogger.blob.core.windows.net/loft/drawer%20label%20set.jpg',
        'drawer liner roll': 'https://cdamemoryjogger.blob.core.windows.net/loft/drawer%20liner%20roll.jpg',
        'external SSD drive': 'https://cdamemoryjogger.blob.core.windows.net/loft/external%20SSD%20drive.jpg',
        'file folder expanding': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20folder%20expanding.jpg',
        'file folder organizer box': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20folder%20organizer%20box.jpg',
        'file folders': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20folders.jpg',
        'filing storage crate': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20storage%20crate.jpg',
        'hard drive anti static bags': 'https://cdamemoryjogger.blob.core.windows.net/loft/hard%20drive%20anti%20static%20bags.jpg',
        'hard drive docking station': 'https://cdamemoryjogger.blob.core.windows.net/loft/hard%20drive%20docking%20station.jpg',
        'instrument cable organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20cable%20organizer.jpg',
        'instrument cable wrap': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20cable%20wrap.jpg',
        'magazine storage box': 'https://cdamemoryjogger.blob.core.windows.net/loft/magazine%20storage%20box.jpg',
        'plastic storage drawers': 'https://cdamemoryjogger.blob.core.windows.net/loft/plastic%20storage%20drawers.jpg',
        'rolling cart': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20cart.jpg',
        'rolling cart hooks': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20cart%20hooks.jpg',
        'rolling cart organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20cart%20organizer%20tray.jpg',
        'rolling cart pegboard': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20cart%20pegboard.jpg',
        'rolling file cart': 'https://cdamemoryjogger.blob.core.windows.net/loft/rolling%20file%20cart.jpg',
        'shelf storage baskets': 'https://cdamemoryjogger.blob.core.windows.net/loft/shelf%20storage%20baskets.jpg',
        'storage bin divider inserts': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20divider%20inserts.jpg',
        'storage bin dolly': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20dolly.jpg',
        'storage bin handle grips': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20handle%20grips.jpg',
        'storage bin label set': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20label%20set.jpg',
        'storage bin lids': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20bin%20lids.jpg',
        'storage cube inserts': 'https://cdamemoryjogger.blob.core.windows.net/loft/storage%20cube%20inserts.jpg',
        'umbrella rack liner': 'https://cdamemoryjogger.blob.core.windows.net/loft/umbrella%20rack%20liner.jpg',
        'umbrella stand decorative': 'https://cdamemoryjogger.blob.core.windows.net/loft/umbrella%20stand%20decorative.jpg',
        'zip tie pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/zip%20tie%20pack.jpg',
        'file storage crate': 'https://cdamemoryjogger.blob.core.windows.net/loft/file%20storage%20crate.jpg',
        'filing crate lid': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20crate%20lid.jpg',
        'filing crate organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/filing%20crate%20organizer.jpg',
 
        'belt hanger': 'https://cdamemoryjogger.blob.core.windows.net/loft/belt%20hanger.jpg',
        'closet shelf basket': 'https://cdamemoryjogger.blob.core.windows.net/loft/closet%20shelf%20basket.jpg',
        'clothing rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/clothing%20rack.jpg',
        'clothing rack caster locks': 'https://cdamemoryjogger.blob.core.windows.net/loft/clothing%20rack%20caster%20locks.jpg',
        'clothing rack cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/clothing%20rack%20cover.jpg',
        'clothing rack end caps': 'https://cdamemoryjogger.blob.core.windows.net/loft/clothing%20rack%20end%20caps.jpg',
        'clothing rack extension bar': 'https://cdamemoryjogger.blob.core.windows.net/loft/clothing%20rack%20extension%20bar.jpg',
        'clothing rack wheels': 'https://cdamemoryjogger.blob.core.windows.net/loft/clothing%20rack%20wheels.png',
        'clothing steamer': 'https://cdamemoryjogger.blob.core.windows.net/loft/clothing%20steamer.jpg',
        'fabric shaver': 'https://cdamemoryjogger.blob.core.windows.net/loft/fabric%20shaver.jpg',
        'folding drying rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20drying%20rack.jpg',
        'garment bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/garment%20bag.jpg',
        'garment bag zipper repair kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/garment%20bag%20zipper%20repair%20kit.jpg',
        'garment rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/garment%20rack.jpg',
        'garment rack cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/garment%20rack%20cover.jpg',
        'garment rack hanger set': 'https://cdamemoryjogger.blob.core.windows.net/loft/garment%20rack%20hanger%20set.jpg',
        'garment rack hanging hooks': 'https://cdamemoryjogger.blob.core.windows.net/loft/garment%20rack%20hanging%20hooks.jpg',
        'garment rack shelf insert': 'https://cdamemoryjogger.blob.core.windows.net/loft/garment%20rack%20shelf%20insert.jpg',
        'hamper deodorizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/hamper%20deodorizer.jpg',
        'hanger set': 'https://cdamemoryjogger.blob.core.windows.net/loft/hanger%20set.jpg',
        'iron': 'https://cdamemoryjogger.blob.core.windows.net/loft/iron.jpg',
        'iron cleaner': 'https://cdamemoryjogger.blob.core.windows.net/loft/iron%20cleaner.jpg',
        'iron cleaning stick': 'https://cdamemoryjogger.blob.core.windows.net/loft/iron%20cleaning%20stick.jpg',
        'iron rest pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/iron%20rest%20pad.jpg',
        'iron storage rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/iron%20storage%20rack.jpg',
        'ironing board': 'https://cdamemoryjogger.blob.core.windows.net/loft/ironing%20board.jpg',
        'ironing board cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/ironing%20board%20cover.jpg',
        'ironing board hanger': 'https://cdamemoryjogger.blob.core.windows.net/loft/ironing%20board%20hanger.jpg',
        'ironing board padding': 'https://cdamemoryjogger.blob.core.windows.net/loft/ironing%20board%20padding.jpg',
        'laundry bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20bag.jpg',
        'laundry basket': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20basket.jpg',
        'laundry basket lid': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20basket%20lid.jpg',
        'laundry basket stacker': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20basket%20stacker.jpg',
        'laundry basket wheels': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20basket%20wheels.jpg',
        'laundry drying rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20drying%20rack.jpg',
        'laundry hamper': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20hamper.jpg',
        'laundry hamper cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20hamper%20cover.jpg',
        'laundry hamper divider insert': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20hamper%20divider%20insert.jpg',
        'laundry hamper liner': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20hamper%20liner.jpg',
        'laundry sorter': 'https://cdamemoryjogger.blob.core.windows.net/loft/laundry%20sorter.jpg',
        'pants hanger': 'https://cdamemoryjogger.blob.core.windows.net/loft/pants%20hanger.jpg',
        'sewing kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/sewing%20kit.jpg',
        'sewing machine': 'https://cdamemoryjogger.blob.core.windows.net/loft/sewing%20machine.jpg',
        'sewing machine foot set': 'https://cdamemoryjogger.blob.core.windows.net/loft/sewing%20machine%20foot%20set.jpg',
        'sewing machine small': 'https://cdamemoryjogger.blob.core.windows.net/loft/sewing%20machine%20small.jpg',
        'sewing thread kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/sewing%20thread%20kit.jpg',
        'sewing thread organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/sewing%20thread%20organizer.jpg',
        'shoe organizer hanging': 'https://cdamemoryjogger.blob.core.windows.net/loft/shoe%20organizer%20hanging.jpg',
        'steamer water cup': 'https://cdamemoryjogger.blob.core.windows.net/loft/steamer%20water%20cup.jpg',
        'suit hanger': 'https://cdamemoryjogger.blob.core.windows.net/loft/suit%20hanger.jpg',
        'velvet hangers': 'https://cdamemoryjogger.blob.core.windows.net/loft/velvet%20hangers.jpg',
        
        'audio interface': 'https://cdamemoryjogger.blob.core.windows.net/loft/audio%20interface.jpg',
        'drum practice pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/drum%20practice%20pad.jpg',
        'drum sticks': 'https://cdamemoryjogger.blob.core.windows.net/loft/drum%20sticks.png',
        'guitar': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar.jpg',
        'guitar cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20cable.jpg',
        'guitar capo': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20capo.jpg',
        'guitar case hard': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20case%20hard.jpg',
        'guitar case hard shell': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20case%20hard%20shell.jpg',
        'guitar case soft': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20case%20soft.jpg',
        'guitar picks': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20picks.jpg',
        'guitar stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20stand.jpg',
        'guitar strap': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20strap.jpg',
        'guitar strap locks': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20strap%20locks.jpg',
        'guitar strings pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20strings%20pack.jpg',
        'guitar tuner': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20tuner.jpg',
        'guitar wall hanger': 'https://cdamemoryjogger.blob.core.windows.net/loft/guitar%20wall%20hanger.jpg',
        'harmonica': 'https://cdamemoryjogger.blob.core.windows.net/loft/harmonica.jpg',
        'headset mic windscreen': 'https://cdamemoryjogger.blob.core.windows.net/loft/headset%20mic%20windscreen.jpg',
        'instrument cable repair kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20cable%20repair%20kit.jpg',
        'instrument cables': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20cables.jpg',
        'instrument case': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20case.jpg',
        'instrument cleaning cloth': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20cleaning%20cloth.jpg',
        'instrument tuner': 'https://cdamemoryjogger.blob.core.windows.net/loft/instrument%20tuner.jpg',
        'metronome': 'https://cdamemoryjogger.blob.core.windows.net/loft/metronome.jpg',
        'mic stand boom attachment': 'https://cdamemoryjogger.blob.core.windows.net/loft/mic%20stand%20boom%20attachment.png',
        'microphone': 'https://cdamemoryjogger.blob.core.windows.net/loft/microphone.jpg',
        'microphone boom arm': 'https://cdamemoryjogger.blob.core.windows.net/loft/microphone%20boom%20arm.jpg',
        'microphone cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/microphone%20cable.jpg',
        'microphone shock mount': 'https://cdamemoryjogger.blob.core.windows.net/loft/microphone%20shock%20mount.jpg',
        'microphone stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/microphone%20stand.jpg',
        'microphone stand boom arm': 'https://cdamemoryjogger.blob.core.windows.net/loft/microphone%20stand%20boom%20arm.png',
        'microphone storage case': 'https://cdamemoryjogger.blob.core.windows.net/loft/microphone%20storage%20case.jpg',
        'mixer board': 'https://cdamemoryjogger.blob.core.windows.net/loft/mixer%20board.jpg',
        'music sheet binder': 'https://cdamemoryjogger.blob.core.windows.net/loft/music%20sheet%20binder.jpg',
        'music sheet storage binder': 'https://cdamemoryjogger.blob.core.windows.net/loft/music%20sheet%20storage%20binder.jpg',
        'music stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/music%20stand.png',
        'music stand light': 'https://cdamemoryjogger.blob.core.windows.net/loft/music%20stand%20light.jpg',
        'piano bench cushion': 'https://cdamemoryjogger.blob.core.windows.net/loft/piano%20bench%20cushion.jpg',
        'record cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/record%20cleaning%20kit.jpg',
        'record display frame': 'https://cdamemoryjogger.blob.core.windows.net/loft/record%20display%20frame.jpg',
        'record divider tabs': 'https://cdamemoryjogger.blob.core.windows.net/loft/record%20divider%20tabs.jpg',
        'record storage crate': 'https://cdamemoryjogger.blob.core.windows.net/loft/record%20storage%20crate.jpg',
        'record storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/record%20storage%20shelf.jpg',
        'speaker cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20cable.jpg',
        'speaker cable banana plugs': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20cable%20banana%20plugs.jpg',
        'speaker grille cloth': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20grille%20cloth.jpg',
        'speaker isolation pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20isolation%20pads.jpg',
        'speaker isolation stands': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20isolation%20stands.jpg',
        'speaker stands floor': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20stands%20floor.jpg',
        'speaker system': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20system.jpg',
        'turntable dust cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/turntable%20dust%20cover.jpg',
        'turntable needle': 'https://cdamemoryjogger.blob.core.windows.net/loft/turntable%20needle.jpg',
        'turntable slipmat': 'https://cdamemoryjogger.blob.core.windows.net/loft/turntable%20slipmat.jpg',
        'ukulele': 'https://cdamemoryjogger.blob.core.windows.net/loft/ukulele.jpg',
        'ukulele stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/ukulele%20stand.jpg',
        'vinyl cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/loft/vinyl%20cleaning%20brush.jpg',
        'vinyl player': 'https://cdamemoryjogger.blob.core.windows.net/loft/vinyl%20player.jpg',
        'vinyl record cleaner': 'https://cdamemoryjogger.blob.core.windows.net/loft/vinyl%20record%20cleaner.jpg',
        'vinyl record sleeves': 'https://cdamemoryjogger.blob.core.windows.net/loft/vinyl%20record%20sleeves.jpg',
        'vinyl storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/vinyl%20storage%20bin.jpg',
        'vinyl storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/loft/vinyl%20storage%20shelf.jpg',
        'violin': 'https://cdamemoryjogger.blob.core.windows.net/loft/violin.jpg',
        'violin case': 'https://cdamemoryjogger.blob.core.windows.net/loft/violin%20case.jpg',
        'headphone cable extension': 'https://cdamemoryjogger.blob.core.windows.net/loft/headphone%20cable%20extension.jpg',
        'headphone splitter': 'https://cdamemoryjogger.blob.core.windows.net/loft/headphone%20splitter.jpg',
        'speaker stand floor': 'https://cdamemoryjogger.blob.core.windows.net/loft/speaker%20stand%20floor.jpg',
        
        'acrylic paint set': 'https://cdamemoryjogger.blob.core.windows.net/loft/acrylic%20paint%20set.jpg',
        'art supplies box': 'https://cdamemoryjogger.blob.core.windows.net/loft/art%20supplies%20box.jpg',
        'art supply caddy': 'https://cdamemoryjogger.blob.core.windows.net/loft/art%20supply%20caddy.jpg',
        'art supply organizer case': 'https://cdamemoryjogger.blob.core.windows.net/loft/art%20supply%20organizer%20case.jpg',
        'bobbin case': 'https://cdamemoryjogger.blob.core.windows.net/loft/bobbin%20case.jpg',
        'brush cleaning soap': 'https://cdamemoryjogger.blob.core.windows.net/loft/brush%20cleaning%20soap.jpg',
        'canvas carrying case': 'https://cdamemoryjogger.blob.core.windows.net/loft/canvas%20carrying%20case.jpg',
        'canvas panels': 'https://cdamemoryjogger.blob.core.windows.net/loft/canvas%20panels.jpg',
        'canvas roll': 'https://cdamemoryjogger.blob.core.windows.net/loft/canvas%20roll.jpg',
        'canvas storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/canvas%20storage%20bin.jpg',
        'charcoal pencils': 'https://cdamemoryjogger.blob.core.windows.net/loft/charcoal%20pencils.jpg',
        'colored pencils': 'https://cdamemoryjogger.blob.core.windows.net/loft/colored%20pencils.jpg',
        'craft cutting mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/craft%20cutting%20mat.jpg',
        'craft organizer bins': 'https://cdamemoryjogger.blob.core.windows.net/loft/craft%20organizer%20bins.jpg',
        'craft organizer drawer': 'https://cdamemoryjogger.blob.core.windows.net/loft/craft%20organizer%20drawer.jpg',
        'craft organizer drawer unit': 'https://cdamemoryjogger.blob.core.windows.net/loft/craft%20organizer%20drawer%20unit.jpg',
        'craft storage box': 'https://cdamemoryjogger.blob.core.windows.net/loft/craft%20storage%20box.jpg',
        'craft table': 'https://cdamemoryjogger.blob.core.windows.net/loft/craft%20table.jpg',
        'crochet hooks set': 'https://cdamemoryjogger.blob.core.windows.net/loft/crochet%20hooks%20set.jpg',
        'drawing board': 'https://cdamemoryjogger.blob.core.windows.net/loft/drawing%20board.jpg',
        'easel': 'https://cdamemoryjogger.blob.core.windows.net/loft/easel.jpg',
        'easel clamp': 'https://cdamemoryjogger.blob.core.windows.net/loft/easel%20clamp.jpg',
        'easel light': 'https://cdamemoryjogger.blob.core.windows.net/loft/easel%20light.jpg',
        'easel storage hook': 'https://cdamemoryjogger.blob.core.windows.net/loft/easel%20storage%20hook.jpg',
        'easel storage rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/easel%20storage%20rack.jpg',
        'eraser kneaded': 'https://cdamemoryjogger.blob.core.windows.net/loft/eraser%20kneaded.jpg',
        'fabric storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/fabric%20storage%20bin.jpg',
        'glue gun': 'https://cdamemoryjogger.blob.core.windows.net/loft/glue%20gun.jpg',
        'glue gun sticks': 'https://cdamemoryjogger.blob.core.windows.net/loft/glue%20gun%20sticks.jpg',
        'hot glue gun stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/hot%20glue%20gun%20stand.jpg',
        'knitting needles set': 'https://cdamemoryjogger.blob.core.windows.net/loft/knitting%20needles%20set.jpg',
        'markers art': 'https://cdamemoryjogger.blob.core.windows.net/loft/markers%20art.jpg',
        'oil paint set': 'https://cdamemoryjogger.blob.core.windows.net/loft/oil%20paint%20set.jpg',
        'paint brush holder': 'https://cdamemoryjogger.blob.core.windows.net/loft/paint%20brush%20holder.jpg',
        'paint brush set': 'https://cdamemoryjogger.blob.core.windows.net/loft/paint%20brush%20set.jpg',
        'paint palette': 'https://cdamemoryjogger.blob.core.windows.net/loft/paint%20palette.jpg',
        'paint palette tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/paint%20palette%20tray.jpg',
        'paint pens': 'https://cdamemoryjogger.blob.core.windows.net/loft/paint%20pens.jpg',
        'paint storage rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/paint%20storage%20rack.jpg',
        'paint supplies': 'https://cdamemoryjogger.blob.core.windows.net/loft/paint%20supplies.jpg',
        'paper cutter': 'https://cdamemoryjogger.blob.core.windows.net/loft/paper%20cutter.jpg',
        'paper trimmer blade': 'https://cdamemoryjogger.blob.core.windows.net/loft/paper%20trimmer%20blade.jpg',
        'pastel set': 'https://cdamemoryjogger.blob.core.windows.net/loft/pastel%20set.jpg',
        'pattern envelopes': 'https://cdamemoryjogger.blob.core.windows.net/loft/pattern%20envelopes.jpg',
        'pencil case': 'https://cdamemoryjogger.blob.core.windows.net/loft/pencil%20case.jpg',
        'portfolio case': 'https://cdamemoryjogger.blob.core.windows.net/loft/portfolio%20case.jpg',
        'rotary cutter': 'https://cdamemoryjogger.blob.core.windows.net/loft/rotary%20cutter.jpg',
        'scissors craft': 'https://cdamemoryjogger.blob.core.windows.net/loft/scissors%20craft.jpg',
        'scrapbook album': 'https://cdamemoryjogger.blob.core.windows.net/loft/scrapbook%20album.jpg',
        'scrapbook paper': 'https://cdamemoryjogger.blob.core.windows.net/loft/scrapbook%20paper.jpg',
        'scrapbook stickers': 'https://cdamemoryjogger.blob.core.windows.net/loft/scrapbook%20stickers.jpg',
        'sharpener handheld': 'https://cdamemoryjogger.blob.core.windows.net/loft/sharpener%20handheld.jpg',
        'sketch pad drawer': 'https://cdamemoryjogger.blob.core.windows.net/loft/sketch%20pad%20drawer.jpg',
        'sketch pad organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/sketch%20pad%20organizer.jpg',
        'sketch pad portfolio': 'https://cdamemoryjogger.blob.core.windows.net/loft/sketch%20pad%20portfolio.jpg',
        'sketch pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/sketch%20pads.jpg',
        'sketching pencils set': 'https://cdamemoryjogger.blob.core.windows.net/loft/sketching%20pencils%20set.jpg',
        'stitch markers': 'https://cdamemoryjogger.blob.core.windows.net/loft/stitch%20markers.jpg',
        'stretched canvas': 'https://cdamemoryjogger.blob.core.windows.net/loft/stretched%20canvas.jpg',
        'tape runner': 'https://cdamemoryjogger.blob.core.windows.net/loft/tape%20runner.jpg',
        'thread rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/thread%20rack.jpg',
        'touch up paint pen': 'https://cdamemoryjogger.blob.core.windows.net/loft/touch%20up%20paint%20pen.jpg',
        'washi tape set': 'https://cdamemoryjogger.blob.core.windows.net/loft/washi%20tape%20set.jpg',
        'watercolor paint set': 'https://cdamemoryjogger.blob.core.windows.net/loft/watercolor%20paint%20set.jpg',
        'watercolor paper pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/watercolor%20paper%20pad.jpg',
        'yarn basket': 'https://cdamemoryjogger.blob.core.windows.net/loft/yarn%20basket.jpg',
        'yarn spool organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/yarn%20spool%20organizer.jpg',
        'yarn storage cube': 'https://cdamemoryjogger.blob.core.windows.net/loft/yarn%20storage%20cube.jpg',
        'yarn storage tote': 'https://cdamemoryjogger.blob.core.windows.net/loft/yarn%20storage%20tote.jpg',
        'yarn winder': 'https://cdamemoryjogger.blob.core.windows.net/loft/yarn%20winder.jpg',
        'palette knives': 'https://cdamemoryjogger.blob.core.windows.net/loft/palette%20knives.jpg',
  
        'adjustable dumbbell set': 'https://cdamemoryjogger.blob.core.windows.net/loft/adjustable%20dumbbell%20set.jpg',
        'ankle weights': 'https://cdamemoryjogger.blob.core.windows.net/loft/ankle%20weights.jpg',
        'balance board': 'https://cdamemoryjogger.blob.core.windows.net/loft/balance%20board.jpg',
        'bike floor stabilizer mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/bike%20floor%20stabilizer%20mat.jpg',
        'dumbbell collars': 'https://cdamemoryjogger.blob.core.windows.net/loft/dumbbell%20collars.jpg',
        'dumbbell floor mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/dumbbell%20floor%20mat.jpg',
        'dumbbell rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/dumbbell%20rack.jpg',
        'dumbbell rack stand': 'https://cdamemoryjogger.blob.core.windows.net/loft/dumbbell%20rack%20stand.jpg',
        'dumbbell rack vertical': 'https://cdamemoryjogger.blob.core.windows.net/loft/dumbbell%20rack%20vertical.jpg',
        'dumbbells': 'https://cdamemoryjogger.blob.core.windows.net/loft/dumbbells.jpg',
        'exercise ball': 'https://cdamemoryjogger.blob.core.windows.net/loft/exercise%20ball.jpg',
        'exercise ball pump': 'https://cdamemoryjogger.blob.core.windows.net/loft/exercise%20ball%20pump.jpg',
        'exercise equipment storage rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/exercise%20equipment%20storage%20rack.jpg',
        'exercise mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/exercise%20mat.jpg',
        'exercise mat rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/exercise%20mat%20rack.jpg',
        'exercise mat storage strap': 'https://cdamemoryjogger.blob.core.windows.net/loft/exercise%20mat%20storage%20strap.jpg',
        'fitness tracker': 'https://cdamemoryjogger.blob.core.windows.net/loft/fitness%20tracker.jpg',
        'foam roller': 'https://cdamemoryjogger.blob.core.windows.net/loft/foam%20roller.jpg',
        'foam roller rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/foam%20roller%20rack.jpg',
        'foam roller storage bin': 'https://cdamemoryjogger.blob.core.windows.net/loft/foam%20roller%20storage%20bin.jpg',
        'foam roller storage rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/foam%20roller%20storage%20rack.jpg',
        'foam roller textured': 'https://cdamemoryjogger.blob.core.windows.net/loft/foam%20roller%20textured.jpg',
        'jump rope': 'https://cdamemoryjogger.blob.core.windows.net/loft/jump%20rope.jpg',
        'jump rope mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/jump%20rope%20mat.jpg',
        'kettlebell': 'https://cdamemoryjogger.blob.core.windows.net/loft/kettlebell.jpg',
        'kettlebell floor pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/kettlebell%20floor%20pad.jpg',
        'kettlebell handle grips': 'https://cdamemoryjogger.blob.core.windows.net/loft/kettlebell%20handle%20grips.jpg',
        'kettlebell rack': 'https://cdamemoryjogger.blob.core.windows.net/loft/kettlebell%20rack.jpg',
        'kettlebell storage tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/kettlebell%20storage%20tray.jpg',
        'massage gun': 'https://cdamemoryjogger.blob.core.windows.net/loft/massage%20gun.jpg',
        'massage gun heads': 'https://cdamemoryjogger.blob.core.windows.net/loft/massage%20gun%20heads.jpg',
        'pilates ring': 'https://cdamemoryjogger.blob.core.windows.net/loft/pilates%20ring.jpg',
        'pull up bar doorway': 'https://cdamemoryjogger.blob.core.windows.net/loft/pull%20up%20bar%20doorway.jpg',
        'resistance band door anchor': 'https://cdamemoryjogger.blob.core.windows.net/loft/resistance%20band%20door%20anchor.jpg',
        'resistance band handles': 'https://cdamemoryjogger.blob.core.windows.net/loft/resistance%20band%20handles.jpg',
        'resistance band hanger': 'https://cdamemoryjogger.blob.core.windows.net/loft/resistance%20band%20hanger.jpg',
       
        'resistance band organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/resistance%20band%20organizer.jpg',
        'resistance band set': 'https://cdamemoryjogger.blob.core.windows.net/loft/resistance%20band%20set.jpg',
        'resistance bands': 'https://cdamemoryjogger.blob.core.windows.net/loft/resistance%20bands.jpg',
        'stationary bike': 'https://cdamemoryjogger.blob.core.windows.net/loft/stationary%20bike.jpg',
        'stationary bike cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/stationary%20bike%20cover.jpg',
        'stationary bike mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/stationary%20bike%20mat.jpg',
        'stationary bike mat protector': 'https://cdamemoryjogger.blob.core.windows.net/loft/stationary%20bike%20mat%20protector.jpg',
        'stationary bike pedal straps': 'https://cdamemoryjogger.blob.core.windows.net/loft/stationary%20bike%20pedal%20straps.jpg',
        'stationary bike seat cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/stationary%20bike%20seat%20cover.jpg',
        'stretch strap': 'https://cdamemoryjogger.blob.core.windows.net/loft/stretch%20strap.jpg',
        'treadmill': 'https://cdamemoryjogger.blob.core.windows.net/loft/treadmill.jpg',
        'treadmill cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/treadmill%20cover.jpg',
        'treadmill lubricant': 'https://cdamemoryjogger.blob.core.windows.net/loft/treadmill%20lubricant.jpg',
        'treadmill mat': 'https://cdamemoryjogger.blob.core.windows.net/loft/treadmill%20mat.jpg',
        'treadmill safety key': 'https://cdamemoryjogger.blob.core.windows.net/loft/treadmill%20safety%20key.jpg',
        'treadmill safety key spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/treadmill%20safety%20key%20spare.jpg',
        'weight bench': 'https://cdamemoryjogger.blob.core.windows.net/loft/weight%20bench.jpg',
        'weight bench pad': 'https://cdamemoryjogger.blob.core.windows.net/loft/weight%20bench%20pad.jpg',
        'wrist weights': 'https://cdamemoryjogger.blob.core.windows.net/loft/wrist%20weights.jpg',
        'yoga block': 'https://cdamemoryjogger.blob.core.windows.net/loft/yoga%20block.jpg',
        'yoga mat bag': 'https://cdamemoryjogger.blob.core.windows.net/loft/yoga%20mat%20bag.jpg',
        'yoga mat cleaner': 'https://cdamemoryjogger.blob.core.windows.net/loft/yoga%20mat%20cleaner.jpg',
        'yoga mat strap': 'https://cdamemoryjogger.blob.core.windows.net/loft/yoga%20mat%20strap.jpg',
        'yoga strap': 'https://cdamemoryjogger.blob.core.windows.net/loft/yoga%20strap.jpg',
        'yoga wheel': 'https://cdamemoryjogger.blob.core.windows.net/loft/yoga%20wheel.jpg',
    
        'air purifier carbon filter': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20purifier%20carbon%20filter.jpg',
        'air purifier pre filter': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20purifier%20pre%20filter.jpg',
        'air purifier spare filter': 'https://cdamemoryjogger.blob.core.windows.net/loft/air%20purifier%20spare%20filter.jpg',
        'dehumidifier drain hose extension': 'https://cdamemoryjogger.blob.core.windows.net/loft/dehumidifier%20drain%20hose%20extension.jpg',
        'dehumidifier drain pump': 'https://cdamemoryjogger.blob.core.windows.net/loft/dehumidifier%20drain%20pump.jpg',
        'dehumidifier hose': 'https://cdamemoryjogger.blob.core.windows.net/loft/dehumidifier%20hose.jpg',
        'dehumidifier water bucket': 'https://cdamemoryjogger.blob.core.windows.net/loft/dehumidifier%20water%20bucket.jpg',
        'humidifier cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/loft/humidifier%20cleaning%20brush.jpg',
        'humidifier spare filter': 'https://cdamemoryjogger.blob.core.windows.net/loft/humidifier%20spare%20filter.jpg',
        'humidifier water filter': 'https://cdamemoryjogger.blob.core.windows.net/loft/humidifier%20water%20filter.jpg',
        'portable heater safety tip switch': 'https://cdamemoryjogger.blob.core.windows.net/loft/portable%20heater%20safety%20tip%20switch.jpg',
        'safe dehumidifier rod': 'https://cdamemoryjogger.blob.core.windows.net/loft/safe%20dehumidifier%20rod.jpg',
        'thermostat': 'https://cdamemoryjogger.blob.core.windows.net/loft/thermostat.jpg',
        'thermostat battery': 'https://cdamemoryjogger.blob.core.windows.net/loft/thermostat%20battery.jpg',
        'battery powered lantern': 'https://cdamemoryjogger.blob.core.windows.net/loft/battery%20powered%20lantern.jpg',
        'camera memory card': 'https://cdamemoryjogger.blob.core.windows.net/loft/camera%20memory%20card.jpg',
        'camera power extension cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/camera%20power%20extension%20cable.jpg',
        'carbon monoxide backup unit': 'https://cdamemoryjogger.blob.core.windows.net/loft/carbon%20monoxide%20backup%20unit.jpg',
        'fire blanket': 'https://cdamemoryjogger.blob.core.windows.net/loft/fire%20blanket.jpg',
        'fire escape ladder': 'https://cdamemoryjogger.blob.core.windows.net/loft/fire%20escape%20ladder.jpg',
        'fire extinguisher inspection tag': 'https://cdamemoryjogger.blob.core.windows.net/loft/fire%20extinguisher%20inspection%20tag.jpg',
        'fire extinguisher wall cabinet': 'https://cdamemoryjogger.blob.core.windows.net/loft/fire%20extinguisher%20wall%20cabinet.jpg',
        'first aid cabinet': 'https://cdamemoryjogger.blob.core.windows.net/loft/first%20aid%20cabinet.jpg',
        'first aid organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/first%20aid%20organizer%20tray.jpg',
        'first aid refill pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/first%20aid%20refill%20pack.jpg',
        'first aid supplies organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/first%20aid%20supplies%20organizer.jpg',
        'floor safe': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20safe.jpg',
        'motion sensor batteries': 'https://cdamemoryjogger.blob.core.windows.net/loft/motion%20sensor%20batteries.jpg',
        'safe lock box': 'https://cdamemoryjogger.blob.core.windows.net/loft/safe%20lock%20box.jpg',
        'security camera base station': 'https://cdamemoryjogger.blob.core.windows.net/loft/security%20camera%20base%20station.jpg',
        'security camera cable': 'https://cdamemoryjogger.blob.core.windows.net/loft/security%20camera%20cable.jpg',
        'security camera privacy cover': 'https://cdamemoryjogger.blob.core.windows.net/loft/security%20camera%20privacy%20cover.jpg',
        'smoke detector backup unit': 'https://cdamemoryjogger.blob.core.windows.net/loft/smoke%20detector%20backup%20unit.jpg',
        'smoke detector battery': 'https://cdamemoryjogger.blob.core.windows.net/loft/smoke%20detector%20battery.jpg',
        'flashlight batteries': 'https://cdamemoryjogger.blob.core.windows.net/loft/flashlight%20batteries.jpg',
    
        'adhesive hook heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/loft/adhesive%20hook%20heavy%20duty.jpg',
        'adhesive putty': 'https://cdamemoryjogger.blob.core.windows.net/loft/adhesive%20putty.jpg',
        'adhesive strip pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/adhesive%20strip%20pack.jpg',
        'adhesive strip refills': 'https://cdamemoryjogger.blob.core.windows.net/loft/adhesive%20strip%20refills.jpg',
        'adjustable wrench': 'https://cdamemoryjogger.blob.core.windows.net/loft/adjustable%20wrench.jpg',
        'cordless drill': 'https://cdamemoryjogger.blob.core.windows.net/loft/cordless%20drill.jpg',
        'drill bit set': 'https://cdamemoryjogger.blob.core.windows.net/loft/drill%20bit%20set.jpg',
        'folding step ladder': 'https://cdamemoryjogger.blob.core.windows.net/loft/folding%20step%20ladder.jpg',
        'hammer rubber grip': 'https://cdamemoryjogger.blob.core.windows.net/loft/hammer%20rubber%20grip.jpg',
        'hammer storage hook': 'https://cdamemoryjogger.blob.core.windows.net/loft/hammer%20storage%20hook.jpg',
        'hex key set': 'https://cdamemoryjogger.blob.core.windows.net/loft/hex%20key%20set.jpg',
        'level tool': 'https://cdamemoryjogger.blob.core.windows.net/loft/level%20tool.jpg',
        'measuring tape holder': 'https://cdamemoryjogger.blob.core.windows.net/loft/measuring%20tape%20holder.jpg',
        'measuring tape retractable': 'https://cdamemoryjogger.blob.core.windows.net/loft/measuring%20tape%20retractable.jpg',
        'nail assortment kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/nail%20assortment%20kit.jpg',
        'picture hanging hooks': 'https://cdamemoryjogger.blob.core.windows.net/loft/picture%20hanging%20hooks.jpg',
        'picture hanging hooks assorted': 'https://cdamemoryjogger.blob.core.windows.net/loft/picture%20hanging%20hooks%20assorted.jpg',
        'picture hanging wire roll': 'https://cdamemoryjogger.blob.core.windows.net/loft/picture%20hanging%20wire%20roll.jpg',
        'pliers set': 'https://cdamemoryjogger.blob.core.windows.net/loft/pliers%20set.jpg',
        'precision screwdriver set': 'https://cdamemoryjogger.blob.core.windows.net/loft/precision%20screwdriver%20set.jpg',
        'putty knife': 'https://cdamemoryjogger.blob.core.windows.net/loft/putty%20knife.jpg',
        'sandpaper variety pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/sandpaper%20variety%20pack.jpg',
        'screw assortment kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/screw%20assortment%20kit.jpg',
        'screwdriver bit set': 'https://cdamemoryjogger.blob.core.windows.net/loft/screwdriver%20bit%20set.jpg',
        'screwdriver magnetic holder': 'https://cdamemoryjogger.blob.core.windows.net/loft/screwdriver%20magnetic%20holder.jpg',
        'spackle kit': 'https://cdamemoryjogger.blob.core.windows.net/loft/spackle%20kit.jpg',
        'step ladder': 'https://cdamemoryjogger.blob.core.windows.net/loft/step%20ladder.jpg',
        'tape measure spare': 'https://cdamemoryjogger.blob.core.windows.net/loft/tape%20measure%20spare.jpg',
        'toggle bolts': 'https://cdamemoryjogger.blob.core.windows.net/loft/toggle%20bolts.jpg',
        'tool box organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/loft/tool%20box%20organizer%20tray.jpg',
        'tool kit storage box': 'https://cdamemoryjogger.blob.core.windows.net/loft/tool%20kit%20storage%20box.jpg',
        'toolbox': 'https://cdamemoryjogger.blob.core.windows.net/loft/toolbox.jpg',
        'toolbox organizer': 'https://cdamemoryjogger.blob.core.windows.net/loft/toolbox%20organizer.jpg',
        'utility knife': 'https://cdamemoryjogger.blob.core.windows.net/loft/utility%20knife.jpg',
        'wall hook heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/loft/wall%20hook%20heavy%20duty.jpg',
        'all purpose cleaner gallon': 'https://cdamemoryjogger.blob.core.windows.net/loft/all%20purpose%20cleaner%20gallon.jpg',
        'all purpose cleaner refill': 'https://cdamemoryjogger.blob.core.windows.net/loft/all%20purpose%20cleaner%20refill.jpg',
        'floor cleaning solution': 'https://cdamemoryjogger.blob.core.windows.net/loft/floor%20cleaning%20solution.jpg',
        'glass cleaner microfiber cloth': 'https://cdamemoryjogger.blob.core.windows.net/loft/glass%20cleaner%20microfiber%20cloth.jpg',
        'glass cleaner refill': 'https://cdamemoryjogger.blob.core.windows.net/loft/glass%20cleaner%20refill.jpg',
        'glass cleaner spray bottle': 'https://cdamemoryjogger.blob.core.windows.net/loft/glass%20cleaner%20spray%20bottle.jpg',
        'lint free cloths': 'https://cdamemoryjogger.blob.core.windows.net/loft/lint%20free%20cloths.jpg',
        'microfiber cloth bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/microfiber%20cloth%20bulk%20pack.jpg',
        'microfiber cloth pack': 'https://cdamemoryjogger.blob.core.windows.net/loft/microfiber%20cloth%20pack.jpg',
        'microfiber dust mitt': 'https://cdamemoryjogger.blob.core.windows.net/loft/microfiber%20dust%20mitt.jpg',
        'microfiber mop': 'https://cdamemoryjogger.blob.core.windows.net/loft/microfiber%20mop.jpg',
        'mop': 'https://cdamemoryjogger.blob.core.windows.net/loft/mop.jpg',
        'mop bucket liner': 'https://cdamemoryjogger.blob.core.windows.net/loft/mop%20bucket%20liner.jpg',
        'mop handle clip': 'https://cdamemoryjogger.blob.core.windows.net/loft/mop%20handle%20clip.jpg',
        'mop storage hook': 'https://cdamemoryjogger.blob.core.windows.net/loft/mop%20storage%20hook.jpg',
        'odor eliminator spray': 'https://cdamemoryjogger.blob.core.windows.net/loft/odor%20eliminator%20spray.jpg',
        'robot vacuum': 'https://cdamemoryjogger.blob.core.windows.net/loft/robot%20vacuum.jpg',
        'robot vacuum brush set': 'https://cdamemoryjogger.blob.core.windows.net/loft/robot%20vacuum%20brush%20set.jpg',
        'robot vacuum dock': 'https://cdamemoryjogger.blob.core.windows.net/loft/robot%20vacuum%20dock.jpg',
        'robot vacuum filters': 'https://cdamemoryjogger.blob.core.windows.net/loft/robot%20vacuum%20filters.jpg',
        'spray bottle set': 'https://cdamemoryjogger.blob.core.windows.net/loft/spray%20bottle%20set.jpg',
        'spray mop': 'https://cdamemoryjogger.blob.core.windows.net/loft/spray%20mop.jpg',
        'spray mop pads': 'https://cdamemoryjogger.blob.core.windows.net/loft/spray%20mop%20pads.jpg',
        'squeegee': 'https://cdamemoryjogger.blob.core.windows.net/loft/squeegee.jpg',
        'stain remover spray': 'https://cdamemoryjogger.blob.core.windows.net/loft/stain%20remover%20spray.jpg',
        'vacuum attachments': 'https://cdamemoryjogger.blob.core.windows.net/loft/vacuum%20attachments.jpg',
        'vacuum crevice tool': 'https://cdamemoryjogger.blob.core.windows.net/loft/vacuum%20crevice%20tool.jpg',
        'vacuum dusting brush': 'https://cdamemoryjogger.blob.core.windows.net/loft/vacuum%20dusting%20brush.jpg',
        'vacuum extension wand': 'https://cdamemoryjogger.blob.core.windows.net/loft/vacuum%20extension%20wand.jpg',
        'vacuum storage bags': 'https://cdamemoryjogger.blob.core.windows.net/loft/vacuum%20storage%20bags.jpg',
        'vacuum storage hook': 'https://cdamemoryjogger.blob.core.windows.net/loft/vacuum%20storage%20hook.jpg',
        'vacuum upholstery tool': 'https://cdamemoryjogger.blob.core.windows.net/loft/vacuum%20upholstery%20tool.jpg',
        'wood floor cleaner': 'https://cdamemoryjogger.blob.core.windows.net/loft/wood%20floor%20cleaner.jpg',
        'disposable wipes refill': 'https://cdamemoryjogger.blob.core.windows.net/loft/disposable%20wipes%20refill.jpg',
        'funnel set': 'https://cdamemoryjogger.blob.core.windows.net/loft/funnel%20set.jpg',
        
//basement

        'water heater T&P relief valve': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20T%26P%20relief%20valve.jpg',
        'water heater anode rod': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20anode%20rod.jpg',
        'water heater burner assembly': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20burner%20assembly.jpg',
        'water heater control valve': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20control%20valve.jpg',
        'water heater expansion tank': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20expansion%20tank.jpg',
        'water heater heating element': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20heating%20element.jpg',
        'water heater insulation blanket': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20insulation%20blanket.jpg',
        'water heater pressure relief valve': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20pressure%20relief%20valve.jpg',
        'water heater recirculation pump': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20recirculation%20pump.jpg',
        'water heater shutoff valve': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20shutoff%20valve.jpg',
        'water heater stand': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20stand.jpg',
        'water heater thermostat': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20heater%20thermostat.jpg',

        'sump pump alarm': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20alarm.jpg',
        'sump pump alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20alarm%20sensor.jpg',
        'sump pump alarm siren': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20alarm%20siren.jpg',
        'sump pump backflow preventer': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20backflow%20preventer.jpg',
        'sump pump backup pump unit': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20backup%20pump%20unit.jpg',
        'sump pump battery backup': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20battery%20backup.jpg',
        'sump pump battery box': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20battery%20box.jpg',
        'sump pump battery charger unit': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20battery%20charger%20unit.jpg',
        'sump pump check valve': 'https://cdamemoryjogger.blob.core.windows.net/basement/sump%20pump%20check%20valve.jpg',

        'UV water purifier': 'https://cdamemoryjogger.blob.core.windows.net/basement/UV%20water%20purifier.jpg',
        'filter housing bypass valve': 'https://cdamemoryjogger.blob.core.windows.net/basement/filter%20housing%20bypass%20valve.jpg',
        'water filtration sediment prefilter': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20filtration%20sediment%20prefilter.jpg',
        'water softener salt bags': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20softener%20salt%20bags.jpg',
        'whole house filter housing': 'https://cdamemoryjogger.blob.core.windows.net/basement/whole%20house%20filter%20housing.jpg',

        'P trap kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/P%20trap%20kit.jpg',
        'backwater valve': 'https://cdamemoryjogger.blob.core.windows.net/basement/backwater%20valve.png',
        'basin wrench': 'https://cdamemoryjogger.blob.core.windows.net/basement/basin%20wrench.jpg',
        'cleanout wrench': 'https://cdamemoryjogger.blob.core.windows.net/basement/cleanout%20wrench.jpg',
        'drain snake': 'https://cdamemoryjogger.blob.core.windows.net/basement/drain%20snake.jpg',
        'ejector pump alarm': 'https://cdamemoryjogger.blob.core.windows.net/basement/ejector%20pump%20alarm.jpg',
        'floor drain snake': 'https://cdamemoryjogger.blob.core.windows.net/basement/floor%20drain%20snake.jpg',
        'floor drain strainer basket': 'https://cdamemoryjogger.blob.core.windows.net/basement/floor%20drain%20strainer%20basket.jpg',
        'floor drain trap primer': 'https://cdamemoryjogger.blob.core.windows.net/basement/floor%20drain%20trap%20primer.jpg',
        'garden hose': 'https://cdamemoryjogger.blob.core.windows.net/basement/garden%20hose.jpg',
        'hand auger': 'https://cdamemoryjogger.blob.core.windows.net/basement/hand%20auger.png',
        'hose reel': 'https://cdamemoryjogger.blob.core.windows.net/basement/hose%20reel.jpg',
        'pipe cutter': 'https://cdamemoryjogger.blob.core.windows.net/basement/pipe%20cutter.jpg',
        'pipe freeze kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/pipe%20freeze%20kit.jpg',
        'pipe wrench': 'https://cdamemoryjogger.blob.core.windows.net/basement/pipe%20wrench.jpg',
        'plumbing torch': 'https://cdamemoryjogger.blob.core.windows.net/basement/plumbing%20torch.jpg',
        'sewage ejector pump': 'https://cdamemoryjogger.blob.core.windows.net/basement/sewage%20ejector%20pump.jpg',
        'sink faucet handle set': 'https://cdamemoryjogger.blob.core.windows.net/basement/sink%20faucet%20handle%20set.jpg',
        'sink faucet spray head': 'https://cdamemoryjogger.blob.core.windows.net/basement/sink%20faucet%20spray%20head.jpg',
        'spray nozzle': 'https://cdamemoryjogger.blob.core.windows.net/basement/spray%20nozzle.jpg',
        'toilet auger': 'https://cdamemoryjogger.blob.core.windows.net/basement/toilet%20auger.jpg',
        'utility hose': 'https://cdamemoryjogger.blob.core.windows.net/basement/utility%20hose.jpg',
        'utility sink cabinet': 'https://cdamemoryjogger.blob.core.windows.net/basement/utility%20sink%20cabinet.jpg',
        'utility sink splash guard': 'https://cdamemoryjogger.blob.core.windows.net/basement/utility%20sink%20splash%20guard.jpg',
        'utility sink storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/basement/utility%20sink%20storage%20shelf.jpg',

        'AFCI breaker': 'https://cdamemoryjogger.blob.core.windows.net/basement/AFCI%20breaker.jpg',
        'GFCI breaker': 'https://cdamemoryjogger.blob.core.windows.net/basement/GFCI%20breaker.jpg',
        'breaker finder tool': 'https://cdamemoryjogger.blob.core.windows.net/basement/breaker%20finder%20tool.jpg',
        'circuit breaker lockout kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/circuit%20breaker%20lockout%20kit.jpg',
        'electrical cord reel': 'https://cdamemoryjogger.blob.core.windows.net/basement/electrical%20cord%20reel.jpg',
        'electrical panel breaker labels': 'https://cdamemoryjogger.blob.core.windows.net/basement/electrical%20panel%20breaker%20labels.jpg',
        'electrical panel cover': 'https://cdamemoryjogger.blob.core.windows.net/basement/electrical%20panel%20cover.jpg',
        'electrical panel directory labels': 'https://cdamemoryjogger.blob.core.windows.net/basement/electrical%20panel%20directory%20labels.png',
        'electrical panel surge protector': 'https://cdamemoryjogger.blob.core.windows.net/basement/electrical%20panel%20surge%20protector.jpg',
        'electrical tape': 'https://cdamemoryjogger.blob.core.windows.net/basement/electrical%20tape.jpg',
        'electrical tape roll': 'https://cdamemoryjogger.blob.core.windows.net/basement/electrical%20tape%20roll.jpg',
        'generator inlet box': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20inlet%20box.jpg',
        'generator interlock kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20interlock%20kit.jpg',
        'generator transfer switch': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20transfer%20switch.jpg',
        'junction box': 'https://cdamemoryjogger.blob.core.windows.net/basement/junction%20box.jpg',
        'linesman pliers': 'https://cdamemoryjogger.blob.core.windows.net/basement/linesman%20pliers.jpg',
        'multimeter': 'https://cdamemoryjogger.blob.core.windows.net/basement/multimeter.jpg',
        'needle nose pliers': 'https://cdamemoryjogger.blob.core.windows.net/basement/needle%20nose%20pliers.jpg',
        'non contact voltage detector': 'https://cdamemoryjogger.blob.core.windows.net/basement/non%20contact%20voltage%20detector.jpg',
        'service disconnect switch': 'https://cdamemoryjogger.blob.core.windows.net/basement/service%20disconnect%20switch.jpg',
        'subpanel': 'https://cdamemoryjogger.blob.core.windows.net/basement/subpanel.jpg',
        'surge protection device whole house': 'https://cdamemoryjogger.blob.core.windows.net/basement/surge%20protection%20device%20whole%20house.jpg',
        'tandem breaker': 'https://cdamemoryjogger.blob.core.windows.net/basement/tandem%20breaker.jpg',
        'transfer switch cover': 'https://cdamemoryjogger.blob.core.windows.net/basement/transfer%20switch%20cover.jpg',
        'voltage tester': 'https://cdamemoryjogger.blob.core.windows.net/basement/voltage%20tester.jpg',
        'wire cutters': 'https://cdamemoryjogger.blob.core.windows.net/basement/wire%20cutters.jpg',
        'wire strippers': 'https://cdamemoryjogger.blob.core.windows.net/basement/wire%20strippers.jpg',

        'generator': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator.jpg',
        'generator air filter': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20air%20filter.jpg',
        'generator battery': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20battery.jpg',
        'generator battery tender': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20battery%20tender.jpg',
        'generator cover': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20cover.jpg',
        'generator extension cord': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20extension%20cord.jpg',
        'generator fuel can': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20fuel%20can.jpg',
        'generator fuel stabilizer': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20fuel%20stabilizer.jpg',
        'generator oil': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20oil.jpg',
        'generator oil filter': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20oil%20filter.jpg',
        'generator spark plug': 'https://cdamemoryjogger.blob.core.windows.net/basement/generator%20spark%20plug.jpg',

        'radon system gauge': 'https://cdamemoryjogger.blob.core.windows.net/basement/radon%20system%20gauge.jpg',
        'radon test kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/radon%20test%20kit.jpg',

        'CO alarm plug in': 'https://cdamemoryjogger.blob.core.windows.net/basement/CO%20alarm%20plug%20in.jpg',
        'LED shop lights': 'https://cdamemoryjogger.blob.core.windows.net/basement/LED%20shop%20lights.jpg',
        'backup battery charger': 'https://cdamemoryjogger.blob.core.windows.net/basement/backup%20battery%20charger.jpg',
        'backup battery pack': 'https://cdamemoryjogger.blob.core.windows.net/basement/backup%20battery%20pack.jpg',
        'backup power inverter': 'https://cdamemoryjogger.blob.core.windows.net/basement/backup%20power%20inverter.jpg',
        'batteries': 'https://cdamemoryjogger.blob.core.windows.net/basement/batteries.jpg',
        'battery backup UPS': 'https://cdamemoryjogger.blob.core.windows.net/basement/battery%20backup%20UPS.jpg',
        'battery bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/basement/battery%20bulk%20pack.jpg',
        'battery lantern': 'https://cdamemoryjogger.blob.core.windows.net/basement/battery%20lantern.jpg',
        'battery storage case': 'https://cdamemoryjogger.blob.core.windows.net/basement/battery%20storage%20case.jpg',
        'carbon monoxide alarm backup battery': 'https://cdamemoryjogger.blob.core.windows.net/basement/carbon%20monoxide%20alarm%20backup%20battery.jpg',
        'extension cord floor protector': 'https://cdamemoryjogger.blob.core.windows.net/basement/extension%20cord%20floor%20protector.jpg',
        'extension cord heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/basement/extension%20cord%20heavy%20duty.jpg',
        'extension cords': 'https://cdamemoryjogger.blob.core.windows.net/basement/extension%20cords.jpg',
        'flashlight charger': 'https://cdamemoryjogger.blob.core.windows.net/basement/flashlight%20charger.jpg',
        'flashlight rechargeable': 'https://cdamemoryjogger.blob.core.windows.net/basement/flashlight%20rechargeable.jpg',
        'flashlights': 'https://cdamemoryjogger.blob.core.windows.net/basement/flashlights.jpg',
        'headlamp': 'https://cdamemoryjogger.blob.core.windows.net/basement/headlamp.jpg',
        'lantern battery pack': 'https://cdamemoryjogger.blob.core.windows.net/basement/lantern%20battery%20pack.jpg',
        'lantern rechargeable': 'https://cdamemoryjogger.blob.core.windows.net/basement/lantern%20rechargeable.jpg',
        'portable work light': 'https://cdamemoryjogger.blob.core.windows.net/basement/portable%20work%20light.jpg',
        'power strip surge guard': 'https://cdamemoryjogger.blob.core.windows.net/basement/power%20strip%20surge%20guard.jpg',
        'power strip surge outlet': 'https://cdamemoryjogger.blob.core.windows.net/basement/power%20strip%20surge%20outlet.jpg',
        'power strips': 'https://cdamemoryjogger.blob.core.windows.net/basement/power%20strips.jpg',
        'shop light motion sensor': 'https://cdamemoryjogger.blob.core.windows.net/basement/shop%20light%20motion%20sensor.jpg',
        'shop light pull chain switch': 'https://cdamemoryjogger.blob.core.windows.net/basement/shop%20light%20pull%20chain%20switch.jpg',
        'smoke detector backup battery': 'https://cdamemoryjogger.blob.core.windows.net/basement/smoke%20detector%20backup%20battery.jpg',
        'solar charger': 'https://cdamemoryjogger.blob.core.windows.net/basement/solar%20charger.jpg',
        'work light tripod': 'https://cdamemoryjogger.blob.core.windows.net/basement/work%20light%20tripod.jpg',

        'air quality monitor': 'https://cdamemoryjogger.blob.core.windows.net/basement/air%20quality%20monitor.jpg',
        'carbon monoxide alarm battery pack': 'https://cdamemoryjogger.blob.core.windows.net/basement/carbon%20monoxide%20alarm%20battery%20pack.jpg',
        'carbon monoxide detector spare unit': 'https://cdamemoryjogger.blob.core.windows.net/basement/carbon%20monoxide%20detector%20spare%20unit.jpg',
        'digital hygrometer': 'https://cdamemoryjogger.blob.core.windows.net/basement/digital%20hygrometer.jpg',
        'emergency exit sign': 'https://cdamemoryjogger.blob.core.windows.net/basement/emergency%20exit%20sign.jpg',
        'emergency siren': 'https://cdamemoryjogger.blob.core.windows.net/basement/emergency%20siren.jpg',
        'emergency strobe light': 'https://cdamemoryjogger.blob.core.windows.net/basement/emergency%20strobe%20light.jpg',
        'fire blanket': 'https://cdamemoryjogger.blob.core.windows.net/basement/fire%20blanket.jpg',
        'fire extinguisher cabinet': 'https://cdamemoryjogger.blob.core.windows.net/basement/fire%20extinguisher%20cabinet.jpg',
        'fire extinguisher inspection tag': 'https://cdamemoryjogger.blob.core.windows.net/basement/fire%20extinguisher%20inspection%20tag.jpg',
        'freeze alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/basement/freeze%20alarm%20sensor.jpg',
        'humidity gauge': 'https://cdamemoryjogger.blob.core.windows.net/basement/humidity%20gauge.jpg',
        'smoke alarm interconnect module': 'https://cdamemoryjogger.blob.core.windows.net/basement/smoke%20alarm%20interconnect%20module.jpg',
        'smoke detector spare unit': 'https://cdamemoryjogger.blob.core.windows.net/basement/smoke%20detector%20spare%20unit.jpg',
        'temperature alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/basement/temperature%20alarm%20sensor.jpg',
        'water leak alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20leak%20alarm%20sensor.jpg',
        'water leak detector': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20leak%20detector.jpg',

        'basement shelving expansion kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/basement%20shelving%20expansion%20kit.jpg',
        'cabinet key set': 'https://cdamemoryjogger.blob.core.windows.net/basement/cabinet%20key%20set.jpg',
        'locking storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/basement/locking%20storage%20cabinet.jpg',
        'metal storage shelves': 'https://cdamemoryjogger.blob.core.windows.net/basement/metal%20storage%20shelves.jpg',
        'plastic storage shelves': 'https://cdamemoryjogger.blob.core.windows.net/basement/plastic%20storage%20shelves.jpg',
        'storage cabinets': 'https://cdamemoryjogger.blob.core.windows.net/basement/storage%20cabinets.jpg',
        'wire shelving': 'https://cdamemoryjogger.blob.core.windows.net/basement/wire%20shelving.jpg',

        'anti fatigue mat': 'https://cdamemoryjogger.blob.core.windows.net/basement/anti%20fatigue%20mat.jpg',
        'bench grinder': 'https://cdamemoryjogger.blob.core.windows.net/basement/bench%20grinder.jpg',
        'creeper mechanic': 'https://cdamemoryjogger.blob.core.windows.net/basement/creeper%20mechanic.jpg',
        'hydraulic jack': 'https://cdamemoryjogger.blob.core.windows.net/basement/hydraulic%20jack.jpg',
        'jack stands': 'https://cdamemoryjogger.blob.core.windows.net/basement/jack%20stands.jpg',
        'shop press': 'https://cdamemoryjogger.blob.core.windows.net/basement/shop%20press.jpg',
        'workbench': 'https://cdamemoryjogger.blob.core.windows.net/basement/workbench.jpg',
        'workbench stool': 'https://cdamemoryjogger.blob.core.windows.net/basement/workbench%20stool.jpg',
        'workbench vise': 'https://cdamemoryjogger.blob.core.windows.net/basement/workbench%20vise.jpg',

        'hardware organizer cabinet': 'https://cdamemoryjogger.blob.core.windows.net/basement/hardware%20organizer%20cabinet.jpg',
        'magnetic parts tray': 'https://cdamemoryjogger.blob.core.windows.net/basement/magnetic%20parts%20tray.jpg',
        'magnetic pickup tool': 'https://cdamemoryjogger.blob.core.windows.net/basement/magnetic%20pickup%20tool.jpg',
        'magnetic tool strip': 'https://cdamemoryjogger.blob.core.windows.net/basement/magnetic%20tool%20strip.png',
        'nail storage compartment box': 'https://cdamemoryjogger.blob.core.windows.net/basement/nail%20storage%20compartment%20box.jpg',
        'parts organizer drawers': 'https://cdamemoryjogger.blob.core.windows.net/basement/parts%20organizer%20drawers.jpg',
        'rolling tool cart': 'https://cdamemoryjogger.blob.core.windows.net/basement/rolling%20tool%20cart.jpg',
        'rolling tool cart drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/basement/rolling%20tool%20cart%20drawer%20liner.jpg',
        'screw storage drawer unit': 'https://cdamemoryjogger.blob.core.windows.net/basement/screw%20storage%20drawer%20unit.jpg',
        'small parts bins': 'https://cdamemoryjogger.blob.core.windows.net/basement/small%20parts%20bins.jpg',
        'tool chest': 'https://cdamemoryjogger.blob.core.windows.net/basement/tool%20chest.jpg',
        'tool chest drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/basement/tool%20chest%20drawer%20organizer.jpg',
        'tool chest drawer slides': 'https://cdamemoryjogger.blob.core.windows.net/basement/tool%20chest%20drawer%20slides.jpg',
        'tool organizer cabinet': 'https://cdamemoryjogger.blob.core.windows.net/basement/tool%20organizer%20cabinet.jpg',
        'tool storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/basement/tool%20storage%20cabinet.jpg',

        'C clamps': 'https://cdamemoryjogger.blob.core.windows.net/basement/C%20clamps.jpg',
        'bar clamps': 'https://cdamemoryjogger.blob.core.windows.net/basement/bar%20clamps.jpg',
        'box cutter': 'https://cdamemoryjogger.blob.core.windows.net/basement/box%20cutter.jpg',
        'circular saw': 'https://cdamemoryjogger.blob.core.windows.net/basement/circular%20saw.jpg',
        'cordless drill battery': 'https://cdamemoryjogger.blob.core.windows.net/basement/cordless%20drill%20battery.jpg',
        'drill': 'https://cdamemoryjogger.blob.core.windows.net/basement/drill.jpg',
        'drill case': 'https://cdamemoryjogger.blob.core.windows.net/basement/drill%20case.jpg',
        'heat gun': 'https://cdamemoryjogger.blob.core.windows.net/basement/heat%20gun.jpg',
        'impact driver': 'https://cdamemoryjogger.blob.core.windows.net/basement/impact%20driver.jpg',
        'impact sockets': 'https://cdamemoryjogger.blob.core.windows.net/basement/impact%20sockets.jpg',
        'jigsaw': 'https://cdamemoryjogger.blob.core.windows.net/basement/jigsaw.jpg',
        'ladder': 'https://cdamemoryjogger.blob.core.windows.net/basement/ladder.jpg',
        'ladder leveler': 'https://cdamemoryjogger.blob.core.windows.net/basement/ladder%20leveler.jpg',
        'level': 'https://cdamemoryjogger.blob.core.windows.net/basement/level.jpg',
        'miter saw': 'https://cdamemoryjogger.blob.core.windows.net/basement/miter%20saw.jpg',
        'nail gun': 'https://cdamemoryjogger.blob.core.windows.net/basement/nail%20gun.jpg',
        'nails assortment': 'https://cdamemoryjogger.blob.core.windows.net/basement/nails%20assortment.jpg',
        'pliers': 'https://cdamemoryjogger.blob.core.windows.net/basement/pliers.jpg',
        'ratchet set': 'https://cdamemoryjogger.blob.core.windows.net/basement/ratchet%20set.png',
        'router tool': 'https://cdamemoryjogger.blob.core.windows.net/basement/router%20tool.jpg',
        'sander orbital': 'https://cdamemoryjogger.blob.core.windows.net/basement/sander%20orbital.jpg',
        'sandpaper pack': 'https://cdamemoryjogger.blob.core.windows.net/basement/sandpaper%20pack.jpg',
        'sawzall reciprocating saw': 'https://cdamemoryjogger.blob.core.windows.net/basement/sawzall%20reciprocating%20saw.jpg',
        'screws assortment': 'https://cdamemoryjogger.blob.core.windows.net/basement/screws%20assortment.jpg',
        'shop clamps': 'https://cdamemoryjogger.blob.core.windows.net/basement/shop%20clamps.jpg',
        'socket set': 'https://cdamemoryjogger.blob.core.windows.net/basement/socket%20set.jpg',
        'spring clamps': 'https://cdamemoryjogger.blob.core.windows.net/basement/spring%20clamps.jpg',
        'staple gun': 'https://cdamemoryjogger.blob.core.windows.net/basement/staple%20gun.jpg',
        'step ladder': 'https://cdamemoryjogger.blob.core.windows.net/basement/step%20ladder.jpg',
        'stud finder': 'https://cdamemoryjogger.blob.core.windows.net/basement/stud%20finder.jpg',
        'table saw': 'https://cdamemoryjogger.blob.core.windows.net/basement/table%20saw.jpg',
        'tool kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/tool%20kit.jpg',
        'torque wrench': 'https://cdamemoryjogger.blob.core.windows.net/basement/torque%20wrench.jpg',
        'wrench set': 'https://cdamemoryjogger.blob.core.windows.net/basement/wrench%20set.jpg',

        'basement waterproofing paint': 'https://cdamemoryjogger.blob.core.windows.net/basement/basement%20waterproofing%20paint.jpg',
        'caulk gun': 'https://cdamemoryjogger.blob.core.windows.net/basement/caulk%20gun.jpg',
        'concrete patch': 'https://cdamemoryjogger.blob.core.windows.net/basement/concrete%20patch.jpg',
        'concrete sealer': 'https://cdamemoryjogger.blob.core.windows.net/basement/concrete%20sealer.jpg',
        'crack repair epoxy': 'https://cdamemoryjogger.blob.core.windows.net/basement/crack%20repair%20epoxy.jpg',
        'drop cloths': 'https://cdamemoryjogger.blob.core.windows.net/basement/drop%20cloths.jpg',
        'drywall compound': 'https://cdamemoryjogger.blob.core.windows.net/basement/drywall%20compound.jpg',
        'drywall patch kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/drywall%20patch%20kit.jpg',
        'hydraulic cement': 'https://cdamemoryjogger.blob.core.windows.net/basement/hydraulic%20cement.jpg',
        'paint brushes': 'https://cdamemoryjogger.blob.core.windows.net/basement/paint%20brushes.jpg',
        'paint can storage rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/paint%20can%20storage%20rack.jpg',
        'paint cans': 'https://cdamemoryjogger.blob.core.windows.net/basement/paint%20cans.jpg',
        'paint rollers': 'https://cdamemoryjogger.blob.core.windows.net/basement/paint%20rollers.jpg',
        'primer gallon': 'https://cdamemoryjogger.blob.core.windows.net/basement/primer%20gallon.jpg',
        'spackle': 'https://cdamemoryjogger.blob.core.windows.net/basement/spackle.jpg',
        'wood filler': 'https://cdamemoryjogger.blob.core.windows.net/basement/wood%20filler.jpg',

        'art supply bin': 'https://cdamemoryjogger.blob.core.windows.net/basement/art%20supply%20bin.jpg',
        'bankers boxes': 'https://cdamemoryjogger.blob.core.windows.net/basement/bankers%20boxes.jpg',
        'board game storage box': 'https://cdamemoryjogger.blob.core.windows.net/basement/board%20game%20storage%20box.jpg',
        'bubble wrap roll': 'https://cdamemoryjogger.blob.core.windows.net/basement/bubble%20wrap%20roll.jpg',
        'bungee cords': 'https://cdamemoryjogger.blob.core.windows.net/basement/bungee%20cords.jpg',
        'clear storage bins': 'https://cdamemoryjogger.blob.core.windows.net/basement/clear%20storage%20bins.jpg',
        'craft storage box': 'https://cdamemoryjogger.blob.core.windows.net/basement/craft%20storage%20box.jpg',
        'document file crate': 'https://cdamemoryjogger.blob.core.windows.net/basement/document%20file%20crate.jpg',
        'document safe pouch': 'https://cdamemoryjogger.blob.core.windows.net/basement/document%20safe%20pouch.jpg',
        'document storage tote': 'https://cdamemoryjogger.blob.core.windows.net/basement/document%20storage%20tote.jpg',
        'file storage boxes': 'https://cdamemoryjogger.blob.core.windows.net/basement/file%20storage%20boxes.jpg',
        'food grade buckets': 'https://cdamemoryjogger.blob.core.windows.net/basement/food%20grade%20buckets.jpg',
        'food storage bin airtight': 'https://cdamemoryjogger.blob.core.windows.net/basement/food%20storage%20bin%20airtight.jpg',
        'food storage rotation rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/food%20storage%20rotation%20rack.jpg',
        'labeled storage bins': 'https://cdamemoryjogger.blob.core.windows.net/basement/labeled%20storage%20bins.jpg',
        'moving boxes': 'https://cdamemoryjogger.blob.core.windows.net/basement/moving%20boxes.jpg',
        'packing tape dispenser': 'https://cdamemoryjogger.blob.core.windows.net/basement/packing%20tape%20dispenser.jpg',
        'plastic storage bins': 'https://cdamemoryjogger.blob.core.windows.net/basement/plastic%20storage%20bins.jpg',
        'ratchet straps': 'https://cdamemoryjogger.blob.core.windows.net/basement/ratchet%20straps.jpg',
        'storage trunk': 'https://cdamemoryjogger.blob.core.windows.net/basement/storage%20trunk.jpg',
        'storage trunk lock': 'https://cdamemoryjogger.blob.core.windows.net/basement/storage%20trunk%20lock.jpg',
        'tie down straps': 'https://cdamemoryjogger.blob.core.windows.net/basement/tie%20down%20straps.jpg',
        'toy storage bins': 'https://cdamemoryjogger.blob.core.windows.net/basement/toy%20storage%20bins.jpg',
        'vacuum sealer machine': 'https://cdamemoryjogger.blob.core.windows.net/basement/vacuum%20sealer%20machine.jpg',
        'vacuum storage bags': 'https://cdamemoryjogger.blob.core.windows.net/basement/vacuum%20storage%20bags.jpg',
        'water storage containers': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20storage%20containers.jpg',
        'waterproof storage container': 'https://cdamemoryjogger.blob.core.windows.net/basement/waterproof%20storage%20container.jpg',
        'weatherproof storage tote': 'https://cdamemoryjogger.blob.core.windows.net/basement/weatherproof%20storage%20tote.jpg',
       
        'file folder organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/basement/file%20folder%20organizer%20tray.jpg',
        'file organizer expanding': 'https://cdamemoryjogger.blob.core.windows.net/basement/file%20organizer%20expanding.jpg',
        'filing cabinet': 'https://cdamemoryjogger.blob.core.windows.net/basement/filing%20cabinet.jpg',
        'filing folders': 'https://cdamemoryjogger.blob.core.windows.net/basement/filing%20folders.jpg',
        'memory card storage case': 'https://cdamemoryjogger.blob.core.windows.net/basement/memory%20card%20storage%20case.jpg',
        'memory keepsake bin': 'https://cdamemoryjogger.blob.core.windows.net/basement/memory%20keepsake%20bin.jpg',
        'memory keepsake chest': 'https://cdamemoryjogger.blob.core.windows.net/basement/memory%20keepsake%20chest.jpg',
        'memory keepsake organizer': 'https://cdamemoryjogger.blob.core.windows.net/basement/memory%20keepsake%20organizer.jpg',
        'ornament storage box': 'https://cdamemoryjogger.blob.core.windows.net/basement/ornament%20storage%20box.jpg',
        'photo storage album': 'https://cdamemoryjogger.blob.core.windows.net/basement/photo%20storage%20album.jpg',
        'photo storage archival box': 'https://cdamemoryjogger.blob.core.windows.net/basement/photo%20storage%20archival%20box.jpg',

        'book collection': 'https://cdamemoryjogger.blob.core.windows.net/basement/book%20collection.jpg',
        'bookshelves': 'https://cdamemoryjogger.blob.core.windows.net/basement/bookshelves.jpg',
        'card table': 'https://cdamemoryjogger.blob.core.windows.net/basement/card%20table.jpg',
        'computer desk': 'https://cdamemoryjogger.blob.core.windows.net/basement/computer%20desk.jpg',
        'desk': 'https://cdamemoryjogger.blob.core.windows.net/basement/desk.jpg',
        'desk lamp': 'https://cdamemoryjogger.blob.core.windows.net/basement/desk%20lamp.jpg',
        'folding chairs': 'https://cdamemoryjogger.blob.core.windows.net/basement/folding%20chairs.jpg',
        'folding tables': 'https://cdamemoryjogger.blob.core.windows.net/basement/folding%20tables.jpg',
        'magazine storage': 'https://cdamemoryjogger.blob.core.windows.net/basement/magazine%20storage.jpg',
        'office chair': 'https://cdamemoryjogger.blob.core.windows.net/basement/office%20chair.jpg',
        'old textbooks': 'https://cdamemoryjogger.blob.core.windows.net/basement/old%20textbooks.jpg',
        'recliner': 'https://cdamemoryjogger.blob.core.windows.net/basement/recliner.jpg',
        'side tables': 'https://cdamemoryjogger.blob.core.windows.net/basement/side%20tables.jpg',
        'spare couch': 'https://cdamemoryjogger.blob.core.windows.net/basement/spare%20couch.jpg',
        'spare dining chairs': 'https://cdamemoryjogger.blob.core.windows.net/basement/spare%20dining%20chairs.jpg',

        'artificial tree storage bag': 'https://cdamemoryjogger.blob.core.windows.net/basement/artificial%20tree%20storage%20bag.jpg',
        'gift bags': 'https://cdamemoryjogger.blob.core.windows.net/basement/gift%20bags.jpg',
        'gift boxes': 'https://cdamemoryjogger.blob.core.windows.net/basement/gift%20boxes.jpg',
        'gift wrap storage container': 'https://cdamemoryjogger.blob.core.windows.net/basement/gift%20wrap%20storage%20container.jpg',
        'holiday inflatables': 'https://cdamemoryjogger.blob.core.windows.net/basement/holiday%20inflatables.jpg',
        'holiday lights storage reel': 'https://cdamemoryjogger.blob.core.windows.net/basement/holiday%20lights%20storage%20reel.jpg',
        'holiday storage bins': 'https://cdamemoryjogger.blob.core.windows.net/basement/holiday%20storage%20bins.jpg',
        'seasonal decor bin': 'https://cdamemoryjogger.blob.core.windows.net/basement/seasonal%20decor%20bin.jpg',
        'seasonal decor storage chest': 'https://cdamemoryjogger.blob.core.windows.net/basement/seasonal%20decor%20storage%20chest.jpg',
        'tree stand': 'https://cdamemoryjogger.blob.core.windows.net/basement/tree%20stand.jpg',
        'wrapping paper cutter spare': 'https://cdamemoryjogger.blob.core.windows.net/basement/wrapping%20paper%20cutter%20spare.jpg',
        'wrapping paper rolls': 'https://cdamemoryjogger.blob.core.windows.net/basement/wrapping%20paper%20rolls.jpg',
        'wreath storage bag': 'https://cdamemoryjogger.blob.core.windows.net/basement/wreath%20storage%20bag.jpg',
        'yard decor storage bin': 'https://cdamemoryjogger.blob.core.windows.net/basement/yard%20decor%20storage%20bin.jpg',

        'air mattress': 'https://cdamemoryjogger.blob.core.windows.net/basement/air%20mattress.jpg',
        'air pump': 'https://cdamemoryjogger.blob.core.windows.net/basement/air%20pump.jpg',
        'ball pump': 'https://cdamemoryjogger.blob.core.windows.net/basement/ball%20pump.jpg',
        'bike rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/bike%20rack.jpg',
        'camp cot': 'https://cdamemoryjogger.blob.core.windows.net/basement/camp%20cot.jpg',
        'camping chairs': 'https://cdamemoryjogger.blob.core.windows.net/basement/camping%20chairs.jpg',
        'camping lantern LED': 'https://cdamemoryjogger.blob.core.windows.net/basement/camping%20lantern%20LED.jpg',
        'camping stove': 'https://cdamemoryjogger.blob.core.windows.net/basement/camping%20stove.jpg',
        'camping stove carry case': 'https://cdamemoryjogger.blob.core.windows.net/basement/camping%20stove%20carry%20case.jpg',
        'coolers': 'https://cdamemoryjogger.blob.core.windows.net/basement/coolers.jpg',
        'grill cover': 'https://cdamemoryjogger.blob.core.windows.net/basement/grill%20cover.jpg',
        'picnic basket': 'https://cdamemoryjogger.blob.core.windows.net/basement/picnic%20basket.jpg',
        'picnic blanket': 'https://cdamemoryjogger.blob.core.windows.net/basement/picnic%20blanket.jpg',
        'portable grill': 'https://cdamemoryjogger.blob.core.windows.net/basement/portable%20grill.jpg',
        'propane tank': 'https://cdamemoryjogger.blob.core.windows.net/basement/propane%20tank.jpg',
        'sleeping bags': 'https://cdamemoryjogger.blob.core.windows.net/basement/sleeping%20bags.jpg',
        'sleeping pad': 'https://cdamemoryjogger.blob.core.windows.net/basement/sleeping%20pad.jpg',
        'sports equipment bin': 'https://cdamemoryjogger.blob.core.windows.net/basement/sports%20equipment%20bin.jpg',
        'tent': 'https://cdamemoryjogger.blob.core.windows.net/basement/tent.jpg',

        'helmet rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/helmet%20rack.jpg',
        'kayak rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/kayak%20rack.jpg',
        'ski rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/ski%20rack.jpg',
        'snowboard rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/snowboard%20rack.jpg',
        'sports bag': 'https://cdamemoryjogger.blob.core.windows.net/basement/sports%20bag.jpg',
        'sports gear drying rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/sports%20gear%20drying%20rack.jpg',

        'ab roller': 'https://cdamemoryjogger.blob.core.windows.net/basement/ab%20roller.jpg',
        'balance board': 'https://cdamemoryjogger.blob.core.windows.net/basement/balance%20board.jpg',
        'barbell rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/barbell%20rack.jpg',
        'barbell set': 'https://cdamemoryjogger.blob.core.windows.net/basement/barbell%20set.jpg',
        'boxing gloves': 'https://cdamemoryjogger.blob.core.windows.net/basement/boxing%20gloves.jpg',
        'dumbbells': 'https://cdamemoryjogger.blob.core.windows.net/basement/dumbbells.jpg',
        'elliptical machine': 'https://cdamemoryjogger.blob.core.windows.net/basement/elliptical%20machine.jpg',
        'exercise ball': 'https://cdamemoryjogger.blob.core.windows.net/basement/exercise%20ball.jpg',
        'exercise bike': 'https://cdamemoryjogger.blob.core.windows.net/basement/exercise%20bike.jpg',
        'fitness mat rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/fitness%20mat%20rack.jpg',
        'foam roller': 'https://cdamemoryjogger.blob.core.windows.net/basement/foam%20roller.jpg',
        'jump rope': 'https://cdamemoryjogger.blob.core.windows.net/basement/jump%20rope.jpg',
        'kettlebell rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/kettlebell%20rack.jpg',
        'lifting straps': 'https://cdamemoryjogger.blob.core.windows.net/basement/lifting%20straps.jpg',
        'medicine ball': 'https://cdamemoryjogger.blob.core.windows.net/basement/medicine%20ball.jpg',
        'power rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/power%20rack.jpg',
        'pull up bar': 'https://cdamemoryjogger.blob.core.windows.net/basement/pull%20up%20bar.jpg',
        'punching bag': 'https://cdamemoryjogger.blob.core.windows.net/basement/punching%20bag.jpg',
        'punching bag stand': 'https://cdamemoryjogger.blob.core.windows.net/basement/punching%20bag%20stand.jpg',
        'resistance bands': 'https://cdamemoryjogger.blob.core.windows.net/basement/resistance%20bands.jpg',
        'rowing machine': 'https://cdamemoryjogger.blob.core.windows.net/basement/rowing%20machine.jpg',
        'slam ball': 'https://cdamemoryjogger.blob.core.windows.net/basement/slam%20ball.jpg',
        'speed bag': 'https://cdamemoryjogger.blob.core.windows.net/basement/speed%20bag.jpg',
        'treadmill': 'https://cdamemoryjogger.blob.core.windows.net/basement/treadmill.jpg',
        'weight belt': 'https://cdamemoryjogger.blob.core.windows.net/basement/weight%20belt.jpg',
        'weight bench': 'https://cdamemoryjogger.blob.core.windows.net/basement/weight%20bench.jpg',
        'weight lifting gloves': 'https://cdamemoryjogger.blob.core.windows.net/basement/weight%20lifting%20gloves.jpg',
        'weight plates': 'https://cdamemoryjogger.blob.core.windows.net/basement/weight%20plates.jpg',
        'yoga mats': 'https://cdamemoryjogger.blob.core.windows.net/basement/yoga%20mats.jpg',
       
        
        'arcade machine': 'https://cdamemoryjogger.blob.core.windows.net/basement/arcade%20machine.jpg',
        'dart board': 'https://cdamemoryjogger.blob.core.windows.net/basement/dart%20board.jpg',
        'movie collection': 'https://cdamemoryjogger.blob.core.windows.net/basement/movie%20collection.jpg',
        'movie storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/basement/movie%20storage%20cabinet.jpg',
        'ping pong table': 'https://cdamemoryjogger.blob.core.windows.net/basement/ping%20pong%20table.jpg',
        'pool balls set': 'https://cdamemoryjogger.blob.core.windows.net/basement/pool%20balls%20set.jpg',
        'pool cue case': 'https://cdamemoryjogger.blob.core.windows.net/basement/pool%20cue%20case.jpg',
        'pool cues': 'https://cdamemoryjogger.blob.core.windows.net/basement/pool%20cues.jpg',
        'pool table': 'https://cdamemoryjogger.blob.core.windows.net/basement/pool%20table.jpg',
        'projector': 'https://cdamemoryjogger.blob.core.windows.net/basement/projector.jpg',
        'projector screen': 'https://cdamemoryjogger.blob.core.windows.net/basement/projector%20screen.jpg',
        'sound system': 'https://cdamemoryjogger.blob.core.windows.net/basement/sound%20system.jpg',

        'bleach': 'https://cdamemoryjogger.blob.core.windows.net/basement/bleach.jpg',
        'disinfecting wipes': 'https://cdamemoryjogger.blob.core.windows.net/basement/disinfecting%20wipes.jpg',
        'dust mop': 'https://cdamemoryjogger.blob.core.windows.net/basement/dust%20mop.jpg',
        'mop': 'https://cdamemoryjogger.blob.core.windows.net/basement/mop.jpg',
        'scrub brush': 'https://cdamemoryjogger.blob.core.windows.net/basement/scrub%20brush.jpg',
        'shop vacuum': 'https://cdamemoryjogger.blob.core.windows.net/basement/shop%20vacuum.jpg',
        'shop vacuum filter': 'https://cdamemoryjogger.blob.core.windows.net/basement/shop%20vacuum%20filter.jpg',

        'compost bin': 'https://cdamemoryjogger.blob.core.windows.net/basement/compost%20bin.jpg',
        'compost bin liners': 'https://cdamemoryjogger.blob.core.windows.net/basement/compost%20bin%20liners.jpg',
        'trash can heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/basement/trash%20can%20heavy%20duty.jpg',

        'fabric softener': 'https://cdamemoryjogger.blob.core.windows.net/basement/fabric%20softener.jpg',
        'iron': 'https://cdamemoryjogger.blob.core.windows.net/basement/iron.jpg',
        'ironing board': 'https://cdamemoryjogger.blob.core.windows.net/basement/ironing%20board.jpg',
        'laundry detergent': 'https://cdamemoryjogger.blob.core.windows.net/basement/laundry%20detergent.jpg',
        'sewing machine': 'https://cdamemoryjogger.blob.core.windows.net/basement/sewing%20machine.jpg',

        'air mover fan': 'https://cdamemoryjogger.blob.core.windows.net/basement/air%20mover%20fan.jpg',
        'box fan': 'https://cdamemoryjogger.blob.core.windows.net/basement/box%20fan.jpg',
        'fan filter': 'https://cdamemoryjogger.blob.core.windows.net/basement/fan%20filter.jpg',
        'floor fan': 'https://cdamemoryjogger.blob.core.windows.net/basement/floor%20fan.jpg',
        'portable heater': 'https://cdamemoryjogger.blob.core.windows.net/basement/portable%20heater.jpg',
        'ventilation fan': 'https://cdamemoryjogger.blob.core.windows.net/basement/ventilation%20fan.jpg',

        'furniture dolly': 'https://cdamemoryjogger.blob.core.windows.net/basement/furniture%20dolly.jpg',
        'hand truck': 'https://cdamemoryjogger.blob.core.windows.net/basement/hand%20truck.jpg',
        'hand truck stair climbers': 'https://cdamemoryjogger.blob.core.windows.net/basement/hand%20truck%20stair%20climbers.jpg',
        'moving blankets': 'https://cdamemoryjogger.blob.core.windows.net/basement/moving%20blankets.jpg',
        'moving dolly': 'https://cdamemoryjogger.blob.core.windows.net/basement/moving%20dolly.jpg',
        'rolling cart': 'https://cdamemoryjogger.blob.core.windows.net/basement/rolling%20cart.jpg',

        'crank radio': 'https://cdamemoryjogger.blob.core.windows.net/basement/crank%20radio.jpg',
        'emergency blankets': 'https://cdamemoryjogger.blob.core.windows.net/basement/emergency%20blankets.jpg',
        'emergency flashlight': 'https://cdamemoryjogger.blob.core.windows.net/basement/emergency%20flashlight.jpg',
        'emergency kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/emergency%20kit.jpg',
        'emergency preparedness kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/emergency%20preparedness%20kit.jpg',
        'emergency radio': 'https://cdamemoryjogger.blob.core.windows.net/basement/emergency%20radio.jpg',
        'fire safe box': 'https://cdamemoryjogger.blob.core.windows.net/basement/fire%20safe%20box.jpg',
        'first aid refill kit large': 'https://cdamemoryjogger.blob.core.windows.net/basement/first%20aid%20refill%20kit%20large.jpg',
        'first aid refill pack': 'https://cdamemoryjogger.blob.core.windows.net/basement/first%20aid%20refill%20pack.jpg',
        'first aid trauma kit': 'https://cdamemoryjogger.blob.core.windows.net/basement/first%20aid%20trauma%20kit.jpg',
        'food storage bucket': 'https://cdamemoryjogger.blob.core.windows.net/basement/food%20storage%20bucket.jpg',
        'jump starter pack': 'https://cdamemoryjogger.blob.core.windows.net/basement/jump%20starter%20pack.jpg',
        'portable inverter': 'https://cdamemoryjogger.blob.core.windows.net/basement/portable%20inverter.jpg',
        'portable water filter': 'https://cdamemoryjogger.blob.core.windows.net/basement/portable%20water%20filter.jpg',
        'safe': 'https://cdamemoryjogger.blob.core.windows.net/basement/safe.jpg',
        'safety glasses': 'https://cdamemoryjogger.blob.core.windows.net/basement/safety%20glasses.jpg',
        'water jug storage rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20jug%20storage%20rack.jpg',
        'water storage jug rack': 'https://cdamemoryjogger.blob.core.windows.net/basement/water%20storage%20jug%20rack.jpg',

        'hearing protection earmuffs': 'https://cdamemoryjogger.blob.core.windows.net/basement/hearing%20protection%20earmuffs.jpg',
        'knee pads': 'https://cdamemoryjogger.blob.core.windows.net/basement/knee%20pads.jpg',
        'respirator mask': 'https://cdamemoryjogger.blob.core.windows.net/basement/respirator%20mask.jpg',
        'work gloves': 'https://cdamemoryjogger.blob.core.windows.net/basement/work%20gloves.jpg',
       
       
       
 //garage

        'puzzle storage box': 'https://cdamemoryjogger.blob.core.windows.net/garage/puzzle%20storage%20box.jpg',
        'mop bucket': 'https://cdamemoryjogger.blob.core.windows.net/garage/mop%20bucket.jpg',
        'humidifier filter': 'https://cdamemoryjogger.blob.core.windows.net/garage/humidifier%20filter.jpg',
        'extension cord reel': 'https://cdamemoryjogger.blob.core.windows.net/garage/extension%20cord%20reel.jpg',
        'photo storage box': 'https://cdamemoryjogger.blob.core.windows.net/garage/photo%20storage%20box.jpg',
        'all purpose cleaner': 'https://cdamemoryjogger.blob.core.windows.net/garage/all%20purpose%20cleaner.jpg',
        'cleaning caddy': 'https://cdamemoryjogger.blob.core.windows.net/garage/cleaning%20caddy.jpg',
        'dustpan': 'https://cdamemoryjogger.blob.core.windows.net/garage/dustpan.jpg',
        'broom': 'https://cdamemoryjogger.blob.core.windows.net/garage/broom.jpg',
        'picture hanging kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/picture%20hanging%20kit.jpg',
        'measuring tape': 'https://cdamemoryjogger.blob.core.windows.net/garage/measuring%20tape.jpg',
        'hammer': 'https://cdamemoryjogger.blob.core.windows.net/garage/hammer.jpg',
        'screwdriver set': 'https://cdamemoryjogger.blob.core.windows.net/garage/screwdriver%20set.jpg',
        'first aid kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/first%20aid%20kit.jpg',
        'fire extinguisher': 'https://cdamemoryjogger.blob.core.windows.net/garage/fire%20extinguisher.jpg',
        'carbon monoxide detector': 'https://cdamemoryjogger.blob.core.windows.net/garage/carbon%20monoxide%20detector.jpg',
        'smoke detector': 'https://cdamemoryjogger.blob.core.windows.net/garage/smoke%20detector.jpg',
        'space heater': 'https://cdamemoryjogger.blob.core.windows.net/garage/space%20heater.jpg',
        'dehumidifier': 'https://cdamemoryjogger.blob.core.windows.net/garage/dehumidifier.jpg',
        'humidifier': 'https://cdamemoryjogger.blob.core.windows.net/garage/humidifier.jpg',
        'coat rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/coat%20rack.jpg',
        'lantern': 'https://cdamemoryjogger.blob.core.windows.net/garage/lantern.jpg',
        'area rug': 'https://cdamemoryjogger.blob.core.windows.net/garage/area%20rug.jpg',
        'light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/garage/light%20bulbs.jpg',
        'gaming console': 'https://cdamemoryjogger.blob.core.windows.net/garage/gaming%20console.jpg',
        'television': 'https://cdamemoryjogger.blob.core.windows.net/garage/television.jpg',
        'coffee table': 'https://cdamemoryjogger.blob.core.windows.net/garage/coffee%20table.jpg',
        'loveseat': 'https://cdamemoryjogger.blob.core.windows.net/garage/loveseat.jpg',
        'sofa': 'https://cdamemoryjogger.blob.core.windows.net/garage/sofa.jpg',
        'light bulb storage case': 'https://cdamemoryjogger.blob.core.windows.net/garage/light%20bulb%20storage%20case.jpg',
        'trash can deodorizer': 'https://cdamemoryjogger.blob.core.windows.net/garage/trash%20can%20deodorizer.jpg',
        'battery organizer case': 'https://cdamemoryjogger.blob.core.windows.net/garage/battery%20organizer%20case.jpg',

        'duct clamp set': 'https://cdamemoryjogger.blob.core.windows.net/garage/duct%20clamp%20set.jpg',
        'duct tape': 'https://cdamemoryjogger.blob.core.windows.net/garage/duct%20tape.jpg',
        'duct tape bulk roll': 'https://cdamemoryjogger.blob.core.windows.net/garage/duct%20tape%20bulk%20roll.jpg',
        'duct tape roll': 'https://cdamemoryjogger.blob.core.windows.net/garage/duct%20tape%20roll.jpg',
        'duct tape storage bin': 'https://cdamemoryjogger.blob.core.windows.net/garage/duct%20tape%20storage%20bin.jpg',
        'furnace filter': 'https://cdamemoryjogger.blob.core.windows.net/garage/furnace%20filter.jpg',
        'heavy duty duct tape': 'https://cdamemoryjogger.blob.core.windows.net/garage/heavy%20duty%20duct%20tape.jpg',
        'hvac duct sealant': 'https://cdamemoryjogger.blob.core.windows.net/garage/hvac%20duct%20sealant.jpg',
        'hvac return vent': 'https://cdamemoryjogger.blob.core.windows.net/garage/hvac%20return%20vent.jpg',
        'hvac vent covers': 'https://cdamemoryjogger.blob.core.windows.net/garage/hvac%20vent%20covers.jpg',
        'anti scald valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/anti%20scald%20valve.jpg',
        'hot water expansion valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/hot%20water%20expansion%20valve.jpg',
        'mixing valve thermostatic': 'https://cdamemoryjogger.blob.core.windows.net/garage/mixing%20valve%20thermostatic.jpg',
        'water heater T&P relief valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20T&P%20relief%20valve.jpg',
        'water heater anode rod': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20anode%20rod.jpg',
        'water heater burner assembly': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20burner%20assembly.jpg',
        'water heater control valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20control%20valve.jpg',
       
        'water heater drain pan': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20drain%20pan.jpg',
        'water heater expansion tank': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20expansion%20tank.jpg',
        'water heater heating element': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20heating%20element.jpg',
        'water heater insulation blanket': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20insulation%20blanket.jpg',
        'water heater pressure relief valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20pressure%20relief%20valve.jpg',
        'water heater recirculation pump': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20recirculation%20pump.jpg',
        'water heater shutoff valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20shutoff%20valve.jpg',
        'water heater stand': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20stand.jpg',
        'water heater thermostat': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20thermostat.jpg',
        'water heater vent pipe': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20heater%20vent%20pipe.jpg',
        'sump pump alarm': 'https://cdamemoryjogger.blob.core.windows.net/garage/sump%20pump%20alarm.jpg',
        'sump pump alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/garage/sump%20pump%20alarm%20sensor.jpg',
        'sump pump alarm siren': 'https://cdamemoryjogger.blob.core.windows.net/garage/sump%20pump%20alarm%20siren.jpg',
        'sump pump backflow preventer': 'https://cdamemoryjogger.blob.core.windows.net/garage/sump%20pump%20backflow%20preventer.jpg',
        'sump pump backup pump unit': 'https://cdamemoryjogger.blob.core.windows.net/garage/sump%20pump%20backup%20pump%20unit.jpg',
        'sump pump basin cover': 'https://cdamemoryjogger.blob.core.windows.net/garage/sump%20pump%20basin%20cover.jpg',
        'UV water purifier': 'https://cdamemoryjogger.blob.core.windows.net/garage/UV%20water%20purifier.jpg',
        'filter housing bypass valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/filter%20housing%20bypass%20valve.jpg',
        'water filter housing wrench spare': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20filter%20housing%20wrench%20spare.jpg',
        'water filtration housing wrench': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20filtration%20housing%20wrench.jpg',
        'water filtration sediment prefilter': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20filtration%20sediment%20prefilter.jpg',
        'water softener brine tank lid': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20softener%20brine%20tank%20lid.jpg',
        'water softener bypass valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20softener%20bypass%20valve.jpg',
        'water softener iron remover': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20softener%20iron%20remover.jpg',
        'water softener resin cleaner': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20softener%20resin%20cleaner.jpg',
        'water softener salt bags': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20softener%20salt%20bags.jpg',
        'whole house filter housing': 'https://cdamemoryjogger.blob.core.windows.net/garage/whole%20house%20filter%20housing.jpg',
    
        'backwater valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/backwater%20valve.jpg',
        'basin wrench': 'https://cdamemoryjogger.blob.core.windows.net/garage/basin%20wrench.jpg',
        'dehumidifier drain hose': 'https://cdamemoryjogger.blob.core.windows.net/garage/dehumidifier%20drain%20hose.jpg',
        'drain snake': 'https://cdamemoryjogger.blob.core.windows.net/garage/drain%20snake.jpg',
        'ejector pump alarm': 'https://cdamemoryjogger.blob.core.windows.net/garage/ejector%20pump%20alarm.jpg',
        'ejector pump check valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/ejector%20pump%20check%20valve.jpg',
        'floor drain backflow valve': 'https://cdamemoryjogger.blob.core.windows.net/garage/floor%20drain%20backflow%20valve.jpg',
        'floor drain cover': 'https://cdamemoryjogger.blob.core.windows.net/garage/floor%20drain%20cover.jpg',
        'floor drain snake': 'https://cdamemoryjogger.blob.core.windows.net/garage/floor%20drain%20snake.jpg',
        'garden hose': 'https://cdamemoryjogger.blob.core.windows.net/garage/garden%20hose.jpg',
        'hand auger': 'https://cdamemoryjogger.blob.core.windows.net/garage/hand%20auger.png',
        'hose reel': 'https://cdamemoryjogger.blob.core.windows.net/garage/hose%20reel.jpg',
        'pipe cutter': 'https://cdamemoryjogger.blob.core.windows.net/garage/pipe%20cutter.jpg',
        'pipe freeze kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/pipe%20freeze%20kit.jpg',
        'pipe wrench': 'https://cdamemoryjogger.blob.core.windows.net/garage/pipe%20wrench.jpg',
        'plumbing torch': 'https://cdamemoryjogger.blob.core.windows.net/garage/plumbing%20torch.jpg',
        'sewage ejector pump': 'https://cdamemoryjogger.blob.core.windows.net/garage/sewage%20ejector%20pump.jpg',
        'sink drain trap': 'https://cdamemoryjogger.blob.core.windows.net/garage/sink%20drain%20trap.jpg',
        'sink faucet aerator': 'https://cdamemoryjogger.blob.core.windows.net/garage/sink%20faucet%20aerator.jpg',
        'sink faucet handle set': 'https://cdamemoryjogger.blob.core.windows.net/garage/sink%20faucet%20handle%20set.jpg',
        'sink faucet spray head': 'https://cdamemoryjogger.blob.core.windows.net/garage/sink%20faucet%20spray%20head.jpg',
        'sink supply lines': 'https://cdamemoryjogger.blob.core.windows.net/garage/sink%20supply%20lines.jpg',
        'spray nozzle': 'https://cdamemoryjogger.blob.core.windows.net/garage/spray%20nozzle.jpg',
        'toilet auger': 'https://cdamemoryjogger.blob.core.windows.net/garage/toilet%20auger.jpg',
        'utility hose': 'https://cdamemoryjogger.blob.core.windows.net/garage/utility%20hose.jpg',

        'AFCI breaker': 'https://cdamemoryjogger.blob.core.windows.net/garage/AFCI%20breaker.jpg',
        'GFCI breaker': 'https://cdamemoryjogger.blob.core.windows.net/garage/GFCI%20breaker.jpg',
        'breaker finder tool': 'https://cdamemoryjogger.blob.core.windows.net/garage/breaker%20finder%20tool.jpg',
        'ceiling junction box cover': 'https://cdamemoryjogger.blob.core.windows.net/garage/ceiling%20junction%20box%20cover.jpg',
        'circuit breaker lockout kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/circuit%20breaker%20lockout%20kit.jpg',
        'electrical cord reel': 'https://cdamemoryjogger.blob.core.windows.net/garage/electrical%20cord%20reel.jpg',
        'electrical panel breaker labels': 'https://cdamemoryjogger.blob.core.windows.net/garage/electrical%20panel%20breaker%20labels.jpg',
        'electrical panel cover': 'https://cdamemoryjogger.blob.core.windows.net/garage/electrical%20panel%20cover.jpg',
        'electrical panel directory labels': 'https://cdamemoryjogger.blob.core.windows.net/garage/electrical%20panel%20directory%20labels.png',
        'electrical panel surge protector': 'https://cdamemoryjogger.blob.core.windows.net/garage/electrical%20panel%20surge%20protector.jpg',
        'electrical tape': 'https://cdamemoryjogger.blob.core.windows.net/garage/electrical%20tape.jpg',
        'electrical tape roll': 'https://cdamemoryjogger.blob.core.windows.net/garage/electrical%20tape%20roll.jpg',
        'generator inlet box': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20inlet%20box.jpg',
        'generator interlock kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20interlock%20kit.jpg',
        'generator transfer switch': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20transfer%20switch.jpg',
        'junction box': 'https://cdamemoryjogger.blob.core.windows.net/garage/junction%20box.jpg',
        'linesman pliers': 'https://cdamemoryjogger.blob.core.windows.net/garage/linesman%20pliers.jpg',
        'multimeter': 'https://cdamemoryjogger.blob.core.windows.net/garage/multimeter.jpg',
        'needle nose pliers': 'https://cdamemoryjogger.blob.core.windows.net/garage/needle%20nose%20pliers.jpg',
        'non contact voltage detector': 'https://cdamemoryjogger.blob.core.windows.net/garage/non%20contact%20voltage%20detector.jpg',
        'service disconnect switch': 'https://cdamemoryjogger.blob.core.windows.net/garage/service%20disconnect%20switch.jpg',
        'subpanel': 'https://cdamemoryjogger.blob.core.windows.net/garage/subpanel.jpg',
        'surge protection device whole house': 'https://cdamemoryjogger.blob.core.windows.net/garage/surge%20protection%20device%20whole%20house.jpg',
        'tandem breaker': 'https://cdamemoryjogger.blob.core.windows.net/garage/tandem%20breaker.jpg',
        'voltage tester': 'https://cdamemoryjogger.blob.core.windows.net/garage/voltage%20tester.jpg',
        'wire cutters': 'https://cdamemoryjogger.blob.core.windows.net/garage/wire%20cutters.jpg',
        'wire strippers': 'https://cdamemoryjogger.blob.core.windows.net/garage/wire%20strippers.jpg',

        'generator': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator.jpg',
        'generator air filter': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20air%20filter.jpg',
        'generator battery': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20battery.jpg',
        'generator battery tender': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20battery%20tender.jpg',
        'generator cover': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20cover.jpg',
        'generator extension cord': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20extension%20cord.jpg',
        'generator fuel can': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20fuel%20can.jpg',
        'generator fuel stabilizer': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20fuel%20stabilizer.jpg',
        'generator oil': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20oil.jpg',
        'generator oil filter': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20oil%20filter.jpg',
        'generator spark plug': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20spark%20plug.jpg',
        'generator wheel kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/generator%20wheel%20kit.jpg',
        'radon system fan cover': 'https://cdamemoryjogger.blob.core.windows.net/garage/radon%20system%20fan%20cover.jpg',
        'radon system gauge': 'https://cdamemoryjogger.blob.core.windows.net/garage/radon%20system%20gauge.jpg',
        'radon test kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/radon%20test%20kit.jpg',
        'CO alarm plug in': 'https://cdamemoryjogger.blob.core.windows.net/garage/CO%20alarm%20plug%20in.jpg',
        'LED shop lights': 'https://cdamemoryjogger.blob.core.windows.net/garage/LED%20shop%20lights.jpg',
        'backup battery charger': 'https://cdamemoryjogger.blob.core.windows.net/garage/backup%20battery%20charger.jpg',
        'backup battery pack': 'https://cdamemoryjogger.blob.core.windows.net/garage/backup%20battery%20pack.jpg',
        'backup power inverter': 'https://cdamemoryjogger.blob.core.windows.net/garage/backup%20power%20inverter.jpg',
        'battery backup UPS': 'https://cdamemoryjogger.blob.core.windows.net/garage/battery%20backup%20UPS.jpg',
    
        'carbon monoxide alarm backup battery': 'https://cdamemoryjogger.blob.core.windows.net/garage/carbon%20monoxide%20alarm%20backup%20battery.jpg',
        'ceiling light bulb guard': 'https://cdamemoryjogger.blob.core.windows.net/garage/ceiling%20light%20bulb%20guard.jpg',
        'ceiling light pull chain': 'https://cdamemoryjogger.blob.core.windows.net/garage/ceiling%20light%20pull%20chain.jpg',
        'extension cord floor protector': 'https://cdamemoryjogger.blob.core.windows.net/garage/extension%20cord%20floor%20protector.jpg',
        'extension cord heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/garage/extension%20cord%20heavy%20duty.jpg',
        'extension cords': 'https://cdamemoryjogger.blob.core.windows.net/garage/extension%20cords.jpg',
        'headlamp': 'https://cdamemoryjogger.blob.core.windows.net/garage/headlamp.jpg',
        'light fixture mounting bracket': 'https://cdamemoryjogger.blob.core.windows.net/garage/light%20fixture%20mounting%20bracket.jpg',
        'portable work light': 'https://cdamemoryjogger.blob.core.windows.net/garage/portable%20work%20light.jpg',
        'power strip surge guard': 'https://cdamemoryjogger.blob.core.windows.net/garage/power%20strip%20surge%20guard.jpg',
        'power strip surge outlet': 'https://cdamemoryjogger.blob.core.windows.net/garage/power%20strip%20surge%20outlet.jpg',
        'power strip with USB': 'https://cdamemoryjogger.blob.core.windows.net/garage/power%20strip%20with%20USB.jpg',
        'power strips': 'https://cdamemoryjogger.blob.core.windows.net/garage/power%20strips.jpg',
        'shop light motion sensor': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20light%20motion%20sensor.jpg',
        'shop light pull chain switch': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20light%20pull%20chain%20switch.jpg',
        'smoke detector backup battery': 'https://cdamemoryjogger.blob.core.windows.net/garage/smoke%20detector%20backup%20battery.jpg',
        'solar charger': 'https://cdamemoryjogger.blob.core.windows.net/garage/solar%20charger.jpg',
        'work light tripod': 'https://cdamemoryjogger.blob.core.windows.net/garage/work%20light%20tripod.jpg',
        'workbench power strip': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20power%20strip.jpg',

        'air quality monitor': 'https://cdamemoryjogger.blob.core.windows.net/garage/air%20quality%20monitor.jpg',
        'carbon monoxide alarm battery pack': 'https://cdamemoryjogger.blob.core.windows.net/garage/carbon%20monoxide%20alarm%20battery%20pack.jpg',
        'carbon monoxide detector spare unit': 'https://cdamemoryjogger.blob.core.windows.net/garage/carbon%20monoxide%20detector%20spare%20unit.jpg',
        'digital hygrometer': 'https://cdamemoryjogger.blob.core.windows.net/garage/digital%20hygrometer.jpg',
        'emergency exit sign': 'https://cdamemoryjogger.blob.core.windows.net/garage/emergency%20exit%20sign.png',
        'emergency siren': 'https://cdamemoryjogger.blob.core.windows.net/garage/emergency%20siren.jpg',
        'emergency strobe light': 'https://cdamemoryjogger.blob.core.windows.net/garage/emergency%20strobe%20light.jpg',
        'fire blanket': 'https://cdamemoryjogger.blob.core.windows.net/garage/fire%20blanket.jpg',
        'fire extinguisher cabinet': 'https://cdamemoryjogger.blob.core.windows.net/garage/fire%20extinguisher%20cabinet.jpg',
        'fire extinguisher inspection tag': 'https://cdamemoryjogger.blob.core.windows.net/garage/fire%20extinguisher%20inspection%20tag.jpg',
        'freeze alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/garage/freeze%20alarm%20sensor.jpg',
        'humidity gauge': 'https://cdamemoryjogger.blob.core.windows.net/garage/humidity%20gauge.jpg',
        'smoke alarm interconnect module': 'https://cdamemoryjogger.blob.core.windows.net/garage/smoke%20alarm%20interconnect%20module.jpg',
        'smoke detector spare unit': 'https://cdamemoryjogger.blob.core.windows.net/garage/smoke%20detector%20spare%20unit.jpg',
        'temperature alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/garage/temperature%20alarm%20sensor.jpg',
        'water leak alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20leak%20alarm%20sensor.jpg',
        'water leak detector': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20leak%20detector.jpg',

        'garage shelving expansion kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/garage%20shelving%20expansion%20kit.jpg',
        'cabinet key set': 'https://cdamemoryjogger.blob.core.windows.net/garage/cabinet%20key%20set.jpg',
        'locking cabinet key spare': 'https://cdamemoryjogger.blob.core.windows.net/garage/locking%20cabinet%20key%20spare.jpg',
        'locking storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/garage/locking%20storage%20cabinet.jpg',
        'metal shelf liners': 'https://cdamemoryjogger.blob.core.windows.net/garage/metal%20shelf%20liners.jpg',
        'metal storage shelves': 'https://cdamemoryjogger.blob.core.windows.net/garage/metal%20storage%20shelves.jpg',
        'plastic shelf storage bins': 'https://cdamemoryjogger.blob.core.windows.net/garage/plastic%20shelf%20storage%20bins.jpg',
        'plastic storage shelves': 'https://cdamemoryjogger.blob.core.windows.net/garage/plastic%20storage%20shelves.jpg',
        'storage cabinet casters': 'https://cdamemoryjogger.blob.core.windows.net/garage/storage%20cabinet%20casters.jpg',
        'storage cabinet lock set': 'https://cdamemoryjogger.blob.core.windows.net/garage/storage%20cabinet%20lock%20set.jpg',
        'storage cabinet magnetic latch': 'https://cdamemoryjogger.blob.core.windows.net/garage/storage%20cabinet%20magnetic%20latch.jpg',
        'storage cabinet shelf risers': 'https://cdamemoryjogger.blob.core.windows.net/garage/storage%20cabinet%20shelf%20risers.jpg',
        'storage cabinets': 'https://cdamemoryjogger.blob.core.windows.net/garage/storage%20cabinets.jpg',
        'wire shelving': 'https://cdamemoryjogger.blob.core.windows.net/garage/wire%20shelving.jpg',

        'anti fatigue mat': 'https://cdamemoryjogger.blob.core.windows.net/garage/anti%20fatigue%20mat.jpg',
        'bench grinder': 'https://cdamemoryjogger.blob.core.windows.net/garage/bench%20grinder.jpg',
        'creeper mechanic': 'https://cdamemoryjogger.blob.core.windows.net/garage/creeper%20mechanic.jpg',
        'hydraulic jack': 'https://cdamemoryjogger.blob.core.windows.net/garage/hydraulic%20jack.jpg',
        'jack stands': 'https://cdamemoryjogger.blob.core.windows.net/garage/jack%20stands.jpg',
        'shop press': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20press.jpg',
        'vise mounting bolts': 'https://cdamemoryjogger.blob.core.windows.net/garage/vise%20mounting%20bolts.jpg',
        'vise swivel base': 'https://cdamemoryjogger.blob.core.windows.net/garage/vise%20swivel%20base.jpg',
        'workbench': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench.jpg',
        'workbench butcher block top': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20butcher%20block%20top.jpg',
        'workbench drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20drawer%20liner.jpg',
        'workbench drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20drawer%20organizer.jpg',
        'workbench drawer slides': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20drawer%20slides.jpg',
        'workbench light bar': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20light%20bar.jpg',
        'workbench overhead light': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20overhead%20light.jpg',
        'workbench power outlet strip': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20power%20outlet%20strip.jpg',
        'workbench stool': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20stool.jpg',
        'workbench vise': 'https://cdamemoryjogger.blob.core.windows.net/garage/workbench%20vise.jpg',
   
        'hardware organizer cabinet': 'https://cdamemoryjogger.blob.core.windows.net/garage/hardware%20organizer%20cabinet.jpg',
        'magnetic parts tray': 'https://cdamemoryjogger.blob.core.windows.net/garage/magnetic%20parts%20tray.jpg',
        'magnetic pickup tool': 'https://cdamemoryjogger.blob.core.windows.net/garage/magnetic%20pickup%20tool.jpg',
        'magnetic tool strip': 'https://cdamemoryjogger.blob.core.windows.net/garage/magnetic%20tool%20strip.jpg',
        'nail storage compartment box': 'https://cdamemoryjogger.blob.core.windows.net/garage/nail%20storage%20compartment%20box.jpg',
        'parts organizer drawers': 'https://cdamemoryjogger.blob.core.windows.net/garage/parts%20organizer%20drawers.jpg',
        'pegboard bin holders': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20bin%20holders.jpg',
        'pegboard drill holder': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20drill%20holder.jpg',
        'pegboard hooks': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20hooks.jpg',
        'pegboard magnetic strip': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20magnetic%20strip.jpg',
        'pegboard pliers holder': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20pliers%20holder.jpg',
        'pegboard screwdriver holder': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20screwdriver%20holder.jpg',
        'pegboard shelf attachments': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20shelf%20attachments.jpg',
        'pegboard shelf brackets': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20shelf%20brackets.jpg',
        'pegboard storage bins': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20storage%20bins.jpg',
        'pegboard tool holders': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20tool%20holders.jpg',
        'pegboard wrench holders': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20wrench%20holders.jpg',
        'pegboard wrench rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/pegboard%20wrench%20rack.jpg',
        'rolling tool cart': 'https://cdamemoryjogger.blob.core.windows.net/garage/rolling%20tool%20cart.jpg',
        'rolling tool cart drawer liner': 'https://cdamemoryjogger.blob.core.windows.net/garage/rolling%20tool%20cart%20drawer%20liner.jpg',
        'rolling tool cart shelf mat': 'https://cdamemoryjogger.blob.core.windows.net/garage/rolling%20tool%20cart%20shelf%20mat.jpg',
        'screw storage drawer unit': 'https://cdamemoryjogger.blob.core.windows.net/garage/screw%20storage%20drawer%20unit.jpg',
        'screwdriver bit organizer': 'https://cdamemoryjogger.blob.core.windows.net/garage/screwdriver%20bit%20organizer.jpg',
        'small parts bins': 'https://cdamemoryjogger.blob.core.windows.net/garage/small%20parts%20bins.jpg',
        'tool chest': 'https://cdamemoryjogger.blob.core.windows.net/garage/tool%20chest.jpg',
        'tool chest drawer liners': 'https://cdamemoryjogger.blob.core.windows.net/garage/tool%20chest%20drawer%20liners.jpg',
        'tool chest drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/garage/tool%20chest%20drawer%20organizer.jpg',
        'tool chest drawer slides': 'https://cdamemoryjogger.blob.core.windows.net/garage/tool%20chest%20drawer%20slides.jpg',
        'tool organizer cabinet': 'https://cdamemoryjogger.blob.core.windows.net/garage/tool%20organizer%20cabinet.jpg',
        'tool storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/garage/tool%20storage%20cabinet.jpg',

        'C clamps': 'https://cdamemoryjogger.blob.core.windows.net/garage/C%20clamps.jpg',
        'bar clamps': 'https://cdamemoryjogger.blob.core.windows.net/garage/bar%20clamps.jpg',
        'box cutter': 'https://cdamemoryjogger.blob.core.windows.net/garage/box%20cutter.jpg',
        'circular saw': 'https://cdamemoryjogger.blob.core.windows.net/garage/circular%20saw.jpg',
        'cordless drill battery': 'https://cdamemoryjogger.blob.core.windows.net/garage/cordless%20drill%20battery.jpg',
        'drill': 'https://cdamemoryjogger.blob.core.windows.net/garage/drill.jpg',
        'drill case': 'https://cdamemoryjogger.blob.core.windows.net/garage/drill%20case.jpg',
        'drill charger': 'https://cdamemoryjogger.blob.core.windows.net/garage/drill%20charger.jpg',
        'heat gun': 'https://cdamemoryjogger.blob.core.windows.net/garage/heat%20gun.jpg',
        'impact driver': 'https://cdamemoryjogger.blob.core.windows.net/garage/impact%20driver.jpg',
        'impact sockets': 'https://cdamemoryjogger.blob.core.windows.net/garage/impact%20sockets.jpg',
        'jigsaw': 'https://cdamemoryjogger.blob.core.windows.net/garage/jigsaw.jpg',
        'ladder': 'https://cdamemoryjogger.blob.core.windows.net/garage/ladder.png',
        'ladder leveler': 'https://cdamemoryjogger.blob.core.windows.net/garage/ladder%20leveler.jpg',
        'level': 'https://cdamemoryjogger.blob.core.windows.net/garage/level.jpg',
        'miter saw': 'https://cdamemoryjogger.blob.core.windows.net/garage/miter%20saw.jpg',
        'nail gun': 'https://cdamemoryjogger.blob.core.windows.net/garage/nail%20gun.jpg',
        'nails assortment': 'https://cdamemoryjogger.blob.core.windows.net/garage/nails%20assortment.jpg',
        'pliers': 'https://cdamemoryjogger.blob.core.windows.net/garage/pliers.jpg',
        'ratchet set': 'https://cdamemoryjogger.blob.core.windows.net/garage/ratchet%20set.jpg',
        'router tool': 'https://cdamemoryjogger.blob.core.windows.net/garage/router%20tool.jpg',
        'sander orbital': 'https://cdamemoryjogger.blob.core.windows.net/garage/sander%20orbital.jpg',
        'sandpaper pack': 'https://cdamemoryjogger.blob.core.windows.net/garage/sandpaper%20pack.jpg',
        'sawzall reciprocating saw': 'https://cdamemoryjogger.blob.core.windows.net/garage/sawzall%20reciprocating%20saw.jpg',
        'screws assortment': 'https://cdamemoryjogger.blob.core.windows.net/garage/screws%20assortment.jpg',
        'shop clamps': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20clamps.jpg',
        'socket set': 'https://cdamemoryjogger.blob.core.windows.net/garage/socket%20set.jpg',
        'spring clamps': 'https://cdamemoryjogger.blob.core.windows.net/garage/spring%20clamps.jpg',
        'staple gun': 'https://cdamemoryjogger.blob.core.windows.net/garage/staple%20gun.jpg',
        'step ladder': 'https://cdamemoryjogger.blob.core.windows.net/garage/step%20ladder.jpg',
        'table saw': 'https://cdamemoryjogger.blob.core.windows.net/garage/table%20saw.jpg',
        'tool kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/tool%20kit.jpg',
        'torque wrench': 'https://cdamemoryjogger.blob.core.windows.net/garage/torque%20wrench.jpg',
        'wrench set': 'https://cdamemoryjogger.blob.core.windows.net/garage/wrench%20set.jpg',
        'garage waterproofing paint': 'https://cdamemoryjogger.blob.core.windows.net/garage/garage%20waterproofing%20paint.jpg',
        'concrete patch': 'https://cdamemoryjogger.blob.core.windows.net/garage/concrete%20patch.jpg',
        'concrete sealer': 'https://cdamemoryjogger.blob.core.windows.net/garage/concrete%20sealer.jpg',
        'corner bead': 'https://cdamemoryjogger.blob.core.windows.net/garage/corner%20bead.jpg',
        'crack repair epoxy': 'https://cdamemoryjogger.blob.core.windows.net/garage/crack%20repair%20epoxy.jpg',
        'drop cloths': 'https://cdamemoryjogger.blob.core.windows.net/garage/drop%20cloths.jpg',
        'drywall compound': 'https://cdamemoryjogger.blob.core.windows.net/garage/drywall%20compound.jpg',
        'drywall patch kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/drywall%20patch%20kit.jpg',
        'hydraulic cement': 'https://cdamemoryjogger.blob.core.windows.net/garage/hydraulic%20cement.jpg',
        'joint knife set': 'https://cdamemoryjogger.blob.core.windows.net/garage/joint%20knife%20set.jpg',
        'mud pan': 'https://cdamemoryjogger.blob.core.windows.net/garage/mud%20pan.jpg',
        'paint brushes': 'https://cdamemoryjogger.blob.core.windows.net/garage/paint%20brushes.jpg',
        'paint can storage rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/paint%20can%20storage%20rack.jpg',
        'paint cans': 'https://cdamemoryjogger.blob.core.windows.net/garage/paint%20cans.jpg',
        'paint rollers': 'https://cdamemoryjogger.blob.core.windows.net/garage/paint%20rollers.jpg',
        'spackle knife': 'https://cdamemoryjogger.blob.core.windows.net/garage/spackle%20knife.jpg',
        'spackle repair kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/spackle%20repair%20kit.jpg',
        'spackle sanding block': 'https://cdamemoryjogger.blob.core.windows.net/garage/spackle%20sanding%20block.jpg',
        'spackle sanding sponge': 'https://cdamemoryjogger.blob.core.windows.net/garage/spackle%20sanding%20sponge.jpg',
        
        'bankers boxes': 'https://cdamemoryjogger.blob.core.windows.net/garage/bankers%20boxes.jpg',
        'bubble wrap roll': 'https://cdamemoryjogger.blob.core.windows.net/garage/bubble%20wrap%20roll.jpg',
        'bungee cords': 'https://cdamemoryjogger.blob.core.windows.net/garage/bungee%20cords.jpg',
        'clear storage bins': 'https://cdamemoryjogger.blob.core.windows.net/garage/clear%20storage%20bins.jpg',
        'document file crate': 'https://cdamemoryjogger.blob.core.windows.net/garage/document%20file%20crate.jpg',
        'document safe pouch': 'https://cdamemoryjogger.blob.core.windows.net/garage/document%20safe%20pouch.jpg',
        'document storage tote': 'https://cdamemoryjogger.blob.core.windows.net/garage/document%20storage%20tote.jpg',
        'file storage boxes': 'https://cdamemoryjogger.blob.core.windows.net/garage/file%20storage%20boxes.jpg',
        'file storage waterproof tote': 'https://cdamemoryjogger.blob.core.windows.net/garage/file%20storage%20waterproof%20tote.jpg',
        'food grade buckets': 'https://cdamemoryjogger.blob.core.windows.net/garage/food%20grade%20buckets.jpg',
        'food storage bin airtight': 'https://cdamemoryjogger.blob.core.windows.net/garage/food%20storage%20bin%20airtight.jpg',
        'hanging file box': 'https://cdamemoryjogger.blob.core.windows.net/garage/hanging%20file%20box.jpg',
        'labeled storage bins': 'https://cdamemoryjogger.blob.core.windows.net/garage/labeled%20storage%20bins.jpg',
        'moving boxes': 'https://cdamemoryjogger.blob.core.windows.net/garage/moving%20boxes.jpg',
        'packing tape dispenser': 'https://cdamemoryjogger.blob.core.windows.net/garage/packing%20tape%20dispenser.jpg',
        'plastic storage bins': 'https://cdamemoryjogger.blob.core.windows.net/garage/plastic%20storage%20bins.jpg',
        'ratchet straps': 'https://cdamemoryjogger.blob.core.windows.net/garage/ratchet%20straps.jpg',
        'storage trunk': 'https://cdamemoryjogger.blob.core.windows.net/garage/storage%20trunk.jpg',
        'storage trunk lock': 'https://cdamemoryjogger.blob.core.windows.net/garage/storage%20trunk%20lock.jpg',
        'tie down straps': 'https://cdamemoryjogger.blob.core.windows.net/garage/tie%20down%20straps.jpg',
        'vacuum storage bags': 'https://cdamemoryjogger.blob.core.windows.net/garage/vacuum%20storage%20bags.jpg',
        'water storage containers': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20storage%20containers.jpg',
        'water storage jug rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20storage%20jug%20rack.jpg',
        'waterproof storage container': 'https://cdamemoryjogger.blob.core.windows.net/garage/waterproof%20storage%20container.jpg',
        'weatherproof storage tote': 'https://cdamemoryjogger.blob.core.windows.net/garage/weatherproof%20storage%20tote.jpg',
        'art supply bin': 'https://cdamemoryjogger.blob.core.windows.net/garage/art%20supply%20bin.jpg',
        'board game storage box': 'https://cdamemoryjogger.blob.core.windows.net/garage/board%20game%20storage%20box.jpg',
        'craft storage box': 'https://cdamemoryjogger.blob.core.windows.net/garage/craft%20storage%20box.jpg',
        'toy storage bins': 'https://cdamemoryjogger.blob.core.windows.net/garage/toy%20storage%20bins.jpg',

        'file folder organizer tray': 'https://cdamemoryjogger.blob.core.windows.net/garage/file%20folder%20organizer%20tray.jpg',
        'file organizer expanding': 'https://cdamemoryjogger.blob.core.windows.net/garage/file%20organizer%20expanding.jpg',
        'filing cabinet': 'https://cdamemoryjogger.blob.core.windows.net/garage/filing%20cabinet.jpg',
        'filing folders': 'https://cdamemoryjogger.blob.core.windows.net/garage/filing%20folders.jpg',
        'memory card storage case': 'https://cdamemoryjogger.blob.core.windows.net/garage/memory%20card%20storage%20case.jpg',
        'memory keepsake bin': 'https://cdamemoryjogger.blob.core.windows.net/garage/memory%20keepsake%20bin.jpg',
        'memory keepsake chest': 'https://cdamemoryjogger.blob.core.windows.net/garage/memory%20keepsake%20chest.jpg',
        'memory keepsake organizer': 'https://cdamemoryjogger.blob.core.windows.net/garage/memory%20keepsake%20organizer.jpg',
        'ornament storage box': 'https://cdamemoryjogger.blob.core.windows.net/garage/ornament%20storage%20box.jpg',
        'photo storage album': 'https://cdamemoryjogger.blob.core.windows.net/garage/photo%20storage%20album.jpg',
        'photo storage archival box': 'https://cdamemoryjogger.blob.core.windows.net/garage/photo%20storage%20archival%20box.jpg',

        'book collection': 'https://cdamemoryjogger.blob.core.windows.net/garage/book%20collection.jpg',
        'bookshelves': 'https://cdamemoryjogger.blob.core.windows.net/garage/bookshelves.jpg',
        'card table': 'https://cdamemoryjogger.blob.core.windows.net/garage/card%20table.jpg',
        'computer desk': 'https://cdamemoryjogger.blob.core.windows.net/garage/computer%20desk.jpg',
        'desk': 'https://cdamemoryjogger.blob.core.windows.net/garage/desk.jpg',
        'desk lamp': 'https://cdamemoryjogger.blob.core.windows.net/garage/desk%20lamp.jpg',
        'magazine storage': 'https://cdamemoryjogger.blob.core.windows.net/garage/magazine%20storage.jpg',
        'magazine storage bin': 'https://cdamemoryjogger.blob.core.windows.net/garage/magazine%20storage%20bin.jpg',
        'office chair': 'https://cdamemoryjogger.blob.core.windows.net/garage/office%20chair.jpg',
        'old textbooks': 'https://cdamemoryjogger.blob.core.windows.net/garage/old%20textbooks.jpg',
        'recliner': 'https://cdamemoryjogger.blob.core.windows.net/garage/recliner.jpg',
        'side tables': 'https://cdamemoryjogger.blob.core.windows.net/garage/side%20tables.jpg',
        'spare couch': 'https://cdamemoryjogger.blob.core.windows.net/garage/spare%20couch.jpg',
        'spare dining chairs': 'https://cdamemoryjogger.blob.core.windows.net/garage/spare%20dining%20chairs.jpg',
        'folding chairs': 'https://cdamemoryjogger.blob.core.windows.net/garage/folding%20chairs.jpg',
        'folding tables': 'https://cdamemoryjogger.blob.core.windows.net/garage/folding%20tables.jpg',
        
        'artificial tree storage bag': 'https://cdamemoryjogger.blob.core.windows.net/garage/artificial%20tree%20storage%20bag.jpg',
        'gift bags': 'https://cdamemoryjogger.blob.core.windows.net/garage/gift%20bags.jpg',
        'gift boxes': 'https://cdamemoryjogger.blob.core.windows.net/garage/gift%20boxes.jpg',
        'gift wrap storage container': 'https://cdamemoryjogger.blob.core.windows.net/garage/gift%20wrap%20storage%20container.jpg',
        'holiday inflatables': 'https://cdamemoryjogger.blob.core.windows.net/garage/holiday%20inflatables.jpg',
        'holiday lights storage reel': 'https://cdamemoryjogger.blob.core.windows.net/garage/holiday%20lights%20storage%20reel.jpg',
        'holiday storage bins': 'https://cdamemoryjogger.blob.core.windows.net/garage/holiday%20storage%20bins.jpg',
        'seasonal decor bin': 'https://cdamemoryjogger.blob.core.windows.net/garage/seasonal%20decor%20bin.jpg',
        'tree stand': 'https://cdamemoryjogger.blob.core.windows.net/garage/tree%20stand.jpg',
        'wrapping paper rolls': 'https://cdamemoryjogger.blob.core.windows.net/garage/wrapping%20paper%20rolls.jpg',
        'wreath storage bag': 'https://cdamemoryjogger.blob.core.windows.net/garage/wreath%20storage%20bag.jpg',
        'yard decor storage bin': 'https://cdamemoryjogger.blob.core.windows.net/garage/yard%20decor%20storage%20bin.jpg',

        'air mattress': 'https://cdamemoryjogger.blob.core.windows.net/garage/air%20mattress.jpg',
        'air pump': 'https://cdamemoryjogger.blob.core.windows.net/garage/air%20pump.jpg',
        'ball pump': 'https://cdamemoryjogger.blob.core.windows.net/garage/ball%20pump.jpg',
        'camp cot': 'https://cdamemoryjogger.blob.core.windows.net/garage/camp%20cot.jpg',
        'camp stove carry case': 'https://cdamemoryjogger.blob.core.windows.net/garage/camp%20stove%20carry%20case.jpg',
        'camping chairs': 'https://cdamemoryjogger.blob.core.windows.net/garage/camping%20chairs.jpg',
        'camping lantern LED': 'https://cdamemoryjogger.blob.core.windows.net/garage/camping%20lantern%20LED.jpg',
        'camping stove': 'https://cdamemoryjogger.blob.core.windows.net/garage/camping%20stove.jpg',
        'cooler cover': 'https://cdamemoryjogger.blob.core.windows.net/garage/cooler%20cover.jpg',
        'cooler wheel kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/cooler%20wheel%20kit.jpg',
        'coolers': 'https://cdamemoryjogger.blob.core.windows.net/garage/coolers.jpg',
        'grill cover': 'https://cdamemoryjogger.blob.core.windows.net/garage/grill%20cover.jpg',
        'picnic basket': 'https://cdamemoryjogger.blob.core.windows.net/garage/picnic%20basket.jpg',
        'picnic blanket': 'https://cdamemoryjogger.blob.core.windows.net/garage/picnic%20blanket.jpg',
        'portable grill': 'https://cdamemoryjogger.blob.core.windows.net/garage/portable%20grill.jpg',
        'propane tank': 'https://cdamemoryjogger.blob.core.windows.net/garage/propane%20tank.jpg',
        'sleeping bags': 'https://cdamemoryjogger.blob.core.windows.net/garage/sleeping%20bags.jpg',
        'sleeping pad': 'https://cdamemoryjogger.blob.core.windows.net/garage/sleeping%20pad.jpg',
        'tent': 'https://cdamemoryjogger.blob.core.windows.net/garage/tent.jpg',

        'bike rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/bike%20rack.jpg',
        'helmet rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/helmet%20rack.jpg',
        'kayak rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/kayak%20rack.jpg',
        'ski rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/ski%20rack.jpg',
        'snowboard rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/snowboard%20rack.jpg',
        'sports bag': 'https://cdamemoryjogger.blob.core.windows.net/garage/sports%20bag.jpg',
        'sports equipment bin': 'https://cdamemoryjogger.blob.core.windows.net/garage/sports%20equipment%20bin.jpg',
        'sports gear drying rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/sports%20gear%20drying%20rack.jpg',
  
        'ab roller': 'https://cdamemoryjogger.blob.core.windows.net/garage/ab%20roller.jpg',
        'balance board': 'https://cdamemoryjogger.blob.core.windows.net/garage/balance%20board.jpg',
        'barbell rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/barbell%20rack.jpg',
        'barbell set': 'https://cdamemoryjogger.blob.core.windows.net/garage/barbell%20set.jpg',
        'boxing gloves': 'https://cdamemoryjogger.blob.core.windows.net/garage/boxing%20gloves.jpg',
        'dumbbell rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/dumbbell%20rack.jpg',
        'dumbbells': 'https://cdamemoryjogger.blob.core.windows.net/garage/dumbbells.jpg',
        'elliptical machine': 'https://cdamemoryjogger.blob.core.windows.net/garage/elliptical%20machine.jpg',
        'exercise ball': 'https://cdamemoryjogger.blob.core.windows.net/garage/exercise%20ball.jpg',
        'exercise bike': 'https://cdamemoryjogger.blob.core.windows.net/garage/exercise%20bike.jpg',
        'fitness mat rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/fitness%20mat%20rack.jpg',
        'foam roller': 'https://cdamemoryjogger.blob.core.windows.net/garage/foam%20roller.jpg',
        'jump rope': 'https://cdamemoryjogger.blob.core.windows.net/garage/jump%20rope.jpg',
        'kettlebell rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/kettlebell%20rack.jpg',
        'lifting straps': 'https://cdamemoryjogger.blob.core.windows.net/garage/lifting%20straps.jpg',
        'medicine ball': 'https://cdamemoryjogger.blob.core.windows.net/garage/medicine%20ball.jpg',
        'power rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/power%20rack.jpg',
        'pull up bar': 'https://cdamemoryjogger.blob.core.windows.net/garage/pull%20up%20bar.jpg',
        'punching bag': 'https://cdamemoryjogger.blob.core.windows.net/garage/punching%20bag.jpg',
        'punching bag stand': 'https://cdamemoryjogger.blob.core.windows.net/garage/punching%20bag%20stand.jpg',
        'resistance bands': 'https://cdamemoryjogger.blob.core.windows.net/garage/resistance%20bands.jpg',
        'rowing machine': 'https://cdamemoryjogger.blob.core.windows.net/garage/rowing%20machine.jpg',
        'slam ball': 'https://cdamemoryjogger.blob.core.windows.net/garage/slam%20ball.jpg',
        'speed bag': 'https://cdamemoryjogger.blob.core.windows.net/garage/speed%20bag.jpg',
        'treadmill': 'https://cdamemoryjogger.blob.core.windows.net/garage/treadmill.jpg',
        'weight belt': 'https://cdamemoryjogger.blob.core.windows.net/garage/weight%20belt.jpg',
        'weight bench': 'https://cdamemoryjogger.blob.core.windows.net/garage/weight%20bench.jpg',
        'weight lifting gloves': 'https://cdamemoryjogger.blob.core.windows.net/garage/weight%20lifting%20gloves.jpg',
        'weight plates': 'https://cdamemoryjogger.blob.core.windows.net/garage/weight%20plates.jpg',
        'yoga mats': 'https://cdamemoryjogger.blob.core.windows.net/garage/yoga%20mats.jpg',

        'arcade machine': 'https://cdamemoryjogger.blob.core.windows.net/garage/arcade%20machine.jpg',
        'dart board': 'https://cdamemoryjogger.blob.core.windows.net/garage/dart%20board.jpg',
        'movie collection': 'https://cdamemoryjogger.blob.core.windows.net/garage/movie%20collection.jpg',
        'movie storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/garage/movie%20storage%20cabinet.jpg',
        'ping pong table': 'https://cdamemoryjogger.blob.core.windows.net/garage/ping%20pong%20table.jpg',
        'pool balls set': 'https://cdamemoryjogger.blob.core.windows.net/garage/pool%20balls%20set.jpg',
        'pool cue case': 'https://cdamemoryjogger.blob.core.windows.net/garage/pool%20cue%20case.jpg',
        'pool cues': 'https://cdamemoryjogger.blob.core.windows.net/garage/pool%20cues.jpg',
        'pool table': 'https://cdamemoryjogger.blob.core.windows.net/garage/pool%20table.jpg',
        'projector': 'https://cdamemoryjogger.blob.core.windows.net/garage/projector.jpg',
        'projector bulb spare': 'https://cdamemoryjogger.blob.core.windows.net/garage/projector%20bulb%20spare.jpg',
        'projector screen': 'https://cdamemoryjogger.blob.core.windows.net/garage/projector%20screen.jpg',
        'sound system': 'https://cdamemoryjogger.blob.core.windows.net/garage/sound%20system.jpg',

        'bleach': 'https://cdamemoryjogger.blob.core.windows.net/garage/bleach.jpg',
        'disinfecting wipes': 'https://cdamemoryjogger.blob.core.windows.net/garage/disinfecting%20wipes.jpg',
        'dust mop': 'https://cdamemoryjogger.blob.core.windows.net/garage/dust%20mop.jpg',
        'fan filter': 'https://cdamemoryjogger.blob.core.windows.net/garage/fan%20filter.jpg',
        'mop': 'https://cdamemoryjogger.blob.core.windows.net/garage/mop.jpg',
        'scrub brush': 'https://cdamemoryjogger.blob.core.windows.net/garage/scrub%20brush.jpg',
        'shop vacuum': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20vacuum.jpg',
        'shop vacuum bags': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20vacuum%20bags.jpg',
        'shop vacuum brush tool': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20vacuum%20brush%20tool.jpg',
        'shop vacuum crevice tool': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20vacuum%20crevice%20tool.jpg',
        'shop vacuum filter': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20vacuum%20filter.jpg',
        'shop vacuum floor nozzle': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20vacuum%20floor%20nozzle.jpg',
        'shop vacuum hose': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20vacuum%20hose.jpg',
        'shop vacuum wand': 'https://cdamemoryjogger.blob.core.windows.net/garage/shop%20vacuum%20wand.jpg',
        'vacuum sealer machine': 'https://cdamemoryjogger.blob.core.windows.net/garage/vacuum%20sealer%20machine.jpg',
        'ventilation fan': 'https://cdamemoryjogger.blob.core.windows.net/garage/ventilation%20fan.jpg',
        'wet dry vacuum squeegee': 'https://cdamemoryjogger.blob.core.windows.net/garage/wet%20dry%20vacuum%20squeegee.jpg',
  
        'compost bin': 'https://cdamemoryjogger.blob.core.windows.net/garage/compost%20bin.jpg',
        'compost bin liners': 'https://cdamemoryjogger.blob.core.windows.net/garage/compost%20bin%20liners.jpg',
        'recycling bin wheels': 'https://cdamemoryjogger.blob.core.windows.net/garage/recycling%20bin%20wheels.jpg',
        'trash can heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/garage/trash%20can%20heavy%20duty.jpg',

        'fabric softener': 'https://cdamemoryjogger.blob.core.windows.net/garage/fabric%20softener.jpg',
        'iron': 'https://cdamemoryjogger.blob.core.windows.net/garage/iron.jpg',
        'ironing board': 'https://cdamemoryjogger.blob.core.windows.net/garage/ironing%20board.jpg',
        'laundry detergent': 'https://cdamemoryjogger.blob.core.windows.net/garage/laundry%20detergent.jpg',
        'sewing machine': 'https://cdamemoryjogger.blob.core.windows.net/garage/sewing%20machine.jpg',

        'air mover fan': 'https://cdamemoryjogger.blob.core.windows.net/garage/air%20mover%20fan.jpg',
        'box fan': 'https://cdamemoryjogger.blob.core.windows.net/garage/box%20fan.jpg',
        'floor fan': 'https://cdamemoryjogger.blob.core.windows.net/garage/floor%20fan.jpg',
        'portable heater': 'https://cdamemoryjogger.blob.core.windows.net/garage/portable%20heater.jpg',

        'furniture dolly': 'https://cdamemoryjogger.blob.core.windows.net/garage/furniture%20dolly.jpg',
        'hand truck': 'https://cdamemoryjogger.blob.core.windows.net/garage/hand%20truck.jpg',
        'hand truck stair climbers': 'https://cdamemoryjogger.blob.core.windows.net/garage/hand%20truck%20stair%20climbers.jpg',
        'moving blankets': 'https://cdamemoryjogger.blob.core.windows.net/garage/moving%20blankets.jpg',
        'moving dolly': 'https://cdamemoryjogger.blob.core.windows.net/garage/moving%20dolly.jpg',
        'plastic tote dolly': 'https://cdamemoryjogger.blob.core.windows.net/garage/plastic%20tote%20dolly.jpg',
        'rolling cart': 'https://cdamemoryjogger.blob.core.windows.net/garage/rolling%20cart.jpg',

        'batteries': 'https://cdamemoryjogger.blob.core.windows.net/garage/batteries.jpg',
        'battery bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/garage/battery%20bulk%20pack.jpg',
        'battery lantern': 'https://cdamemoryjogger.blob.core.windows.net/garage/battery%20lantern.jpg',
        'battery storage case': 'https://cdamemoryjogger.blob.core.windows.net/garage/battery%20storage%20case.jpg',
        'crank radio': 'https://cdamemoryjogger.blob.core.windows.net/garage/crank%20radio.jpg',
        'emergency blankets': 'https://cdamemoryjogger.blob.core.windows.net/garage/emergency%20blankets.jpg',
        'emergency flashlight': 'https://cdamemoryjogger.blob.core.windows.net/garage/emergency%20flashlight.jpg',
        'emergency kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/emergency%20kit.jpg',
        'emergency preparedness kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/emergency%20preparedness%20kit.jpg',
        'emergency radio': 'https://cdamemoryjogger.blob.core.windows.net/garage/emergency%20radio.jpg',
        'fire safe box': 'https://cdamemoryjogger.blob.core.windows.net/garage/fire%20safe%20box.jpg',
        'first aid refill kit large': 'https://cdamemoryjogger.blob.core.windows.net/garage/first%20aid%20refill%20kit%20large.jpg',
        'first aid refill pack': 'https://cdamemoryjogger.blob.core.windows.net/garage/first%20aid%20refill%20pack.jpg',
        'first aid trauma kit': 'https://cdamemoryjogger.blob.core.windows.net/garage/first%20aid%20trauma%20kit.jpg',
        'flashlight charger': 'https://cdamemoryjogger.blob.core.windows.net/garage/flashlight%20charger.jpg',
        'flashlight rechargeable': 'https://cdamemoryjogger.blob.core.windows.net/garage/flashlight%20rechargeable.jpg',
        'flashlights': 'https://cdamemoryjogger.blob.core.windows.net/garage/flashlights.jpg',
        'food storage bucket': 'https://cdamemoryjogger.blob.core.windows.net/garage/food%20storage%20bucket.jpg',
        'food storage rotation rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/food%20storage%20rotation%20rack.jpg',
        'jump starter pack': 'https://cdamemoryjogger.blob.core.windows.net/garage/jump%20starter%20pack.jpg',
        'lantern battery pack': 'https://cdamemoryjogger.blob.core.windows.net/garage/lantern%20battery%20pack.jpg',
        'lantern rechargeable': 'https://cdamemoryjogger.blob.core.windows.net/garage/lantern%20rechargeable.jpg',
        'portable inverter': 'https://cdamemoryjogger.blob.core.windows.net/garage/portable%20inverter.jpg',
        'portable water filter': 'https://cdamemoryjogger.blob.core.windows.net/garage/portable%20water%20filter.jpg',
        'safe': 'https://cdamemoryjogger.blob.core.windows.net/garage/safe.jpg',
        'safety glasses': 'https://cdamemoryjogger.blob.core.windows.net/garage/safety%20glasses.jpg',
        'water jug storage rack': 'https://cdamemoryjogger.blob.core.windows.net/garage/water%20jug%20storage%20rack.jpg',
    
        'hearing protection earmuffs': 'https://cdamemoryjogger.blob.core.windows.net/garage/hearing%20protection%20earmuffs.jpg',
        'knee pads': 'https://cdamemoryjogger.blob.core.windows.net/garage/knee%20pads.jpg',
        'respirator mask': 'https://cdamemoryjogger.blob.core.windows.net/garage/respirator%20mask.jpg',
        'utility sink cabinet': 'https://cdamemoryjogger.blob.core.windows.net/garage/utility%20sink%20cabinet.jpg',
        'utility sink splash guard': 'https://cdamemoryjogger.blob.core.windows.net/garage/utility%20sink%20splash%20guard.jpg',
        'utility sink storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/basement/utility%20sink%20storage%20shelf.jpg',
        'work gloves': 'https://cdamemoryjogger.blob.core.windows.net/basement/work%20gloves.jpg',
   
//laundry

        'all purpose cleaner': 'https://cdamemoryjogger.blob.core.windows.net/laundry/all%20purpose%20cleaner.jpg',
        'broom': 'https://cdamemoryjogger.blob.core.windows.net/laundry/broom.jpg',
        'dehumidifier': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dehumidifier.jpg',
        'dustpan': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dustpan.jpg',
        'extension cord': 'https://cdamemoryjogger.blob.core.windows.net/laundry/extension%20cord.jpg',
        'fire extinguisher': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fire%20extinguisher.jpg',
        'glass cleaner': 'https://cdamemoryjogger.blob.core.windows.net/laundry/glass%20cleaner.jpg',
        'handheld steamer': 'https://cdamemoryjogger.blob.core.windows.net/laundry/handheld%20steamer.jpg',
        'light bulbs': 'https://cdamemoryjogger.blob.core.windows.net/laundry/light%20bulbs.jpg',
        'lint roller': 'https://cdamemoryjogger.blob.core.windows.net/laundry/lint%20roller.jpg',
        'mop bucket': 'https://cdamemoryjogger.blob.core.windows.net/laundry/mop%20bucket.jpg',
        'power strip': 'https://cdamemoryjogger.blob.core.windows.net/laundry/power%20strip.jpg',
        'wall clock': 'https://cdamemoryjogger.blob.core.windows.net/laundry/wall%20clock.jpg',
        'cleaning gloves': 'https://cdamemoryjogger.blob.core.windows.net/laundry/cleaning%20gloves.jpg',
        'paper towels': 'https://cdamemoryjogger.blob.core.windows.net/laundry/paper%20towels.jpg',


        'washer drip pan': 'https://cdamemoryjogger.blob.core.windows.net/laundry/washer%20drip%20pan.jpg',
        'washer pedestal storage bin': 'https://cdamemoryjogger.blob.core.windows.net/laundry/washer%20pedestal%20storage%20bin.jpg',
       
        'dryer': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer.jpg',
        'dryer ball refill set': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20ball%20refill%20set.jpg',
        'dryer booster fan': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20booster%20fan.jpg',
       
        'dryer rack insert': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20rack%20insert.jpg',
        'dryer sheets box': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20sheets%20box.jpg',
        'dryer stacking kit': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20stacking%20kit.jpg',
        'dryer vent cleaning brush': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20vent%20cleaning%20brush.jpg',
        'dryer vent cleaning kit': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20vent%20cleaning%20kit.jpg',
        'dryer vent cleaning rods': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20vent%20cleaning%20rods.jpg',
        'dryer vent hose': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dryer%20vent%20hose.jpg',
        'wool dryer balls': 'https://cdamemoryjogger.blob.core.windows.net/laundry/wool%20dryer%20balls.jpg',

        'dehumidifier drain hose': 'https://cdamemoryjogger.blob.core.windows.net/laundry/dehumidifier%20drain%20hose.jpg',
        'drain snake handheld': 'https://cdamemoryjogger.blob.core.windows.net/laundry/drain%20snake%20handheld.jpg',
        'laundry sink': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20sink.jpg',
        'laundry sink cabinet': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20sink%20cabinet.jpg',
        'laundry sink faucet': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20sink%20faucet.jpg',
        'laundry sink soap dispenser': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20sink%20soap%20dispenser.jpg',
        'laundry sink splash guard': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20sink%20splash%20guard.jpg',
        'laundry sink sprayer': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20sink%20sprayer.jpg',
        'plunger flange style': 'https://cdamemoryjogger.blob.core.windows.net/laundry/plunger%20flange%20style.jpg',
        'utility sink floor mat': 'https://cdamemoryjogger.blob.core.windows.net/laundry/utility%20sink%20floor%20mat.jpg',
        'utility sink strainer': 'https://cdamemoryjogger.blob.core.windows.net/laundry/utility%20sink%20strainer.jpg',
        'utility sink wall bracket': 'https://cdamemoryjogger.blob.core.windows.net/laundry/utility%20sink%20wall%20bracket.jpg',

        'folding table': 'https://cdamemoryjogger.blob.core.windows.net/laundry/folding%20table.jpg',
        'laundry cabinet glass doors': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20cabinet%20glass%20doors.jpg',
        'laundry cabinet handles': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20cabinet%20handles.jpg',
        'laundry cabinet sliding doors': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20cabinet%20sliding%20doors.jpg',
        'laundry cabinets': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20cabinets.jpg',
        'laundry countertop': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20countertop.jpg',
        'laundry shelf LED strip': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20shelf%20LED%20strip.jpg',
        'laundry shelving unit': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20shelving%20unit.jpg',
        'laundry under cabinet lighting strip': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20under%20cabinet%20lighting%20strip.jpg',
        'wire shelving rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/wire%20shelving%20rack.jpg',

        'collapsible laundry basket': 'https://cdamemoryjogger.blob.core.windows.net/laundry/collapsible%20laundry%20basket.jpg',
        'delicates bag': 'https://cdamemoryjogger.blob.core.windows.net/laundry/delicates%20bag.jpg',
        'double laundry hamper': 'https://cdamemoryjogger.blob.core.windows.net/laundry/double%20laundry%20hamper.jpg',
        'laundry basket plastic': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20basket%20plastic.jpg',
        'laundry basket woven': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20basket%20woven.jpg',
        'laundry color separation bags': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20color%20separation%20bags.jpg',
        'laundry hamper': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20hamper.jpg',
        'laundry hamper deodorizer': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20hamper%20deodorizer.jpg',
        'laundry mesh divider baskets': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20mesh%20divider%20baskets.jpg',
        'laundry sorter rolling': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20sorter%20rolling.jpg',
        'laundry sorter three bin': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20sorter%20three%20bin.jpg',
        'laundry storage baskets': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20storage%20baskets.jpg',
        'laundry storage crate stackable': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20storage%20crate%20stackable.jpg',
        'laundry supply basket wicker': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20supply%20basket%20wicker.jpg',
        'laundry wall mounted basket system': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20wall%20mounted%20basket%20system.jpg',
        'mesh laundry bags': 'https://cdamemoryjogger.blob.core.windows.net/laundry/mesh%20laundry%20bags.jpg',
        'rolling laundry bin with lid': 'https://cdamemoryjogger.blob.core.windows.net/laundry/rolling%20laundry%20bin%20with%20lid.jpg',
        'rolling laundry cart': 'https://cdamemoryjogger.blob.core.windows.net/laundry/rolling%20laundry%20cart.jpg',
        'shoe wash bag': 'https://cdamemoryjogger.blob.core.windows.net/laundry/shoe%20wash%20bag.jpg',
 
        'clip hangers': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clip%20hangers.jpg',
        'clothes hangers plastic': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothes%20hangers%20plastic.jpg',
        'clothes hangers velvet': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothes%20hangers%20velvet.jpg',
        'clothes hangers wood': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothes%20hangers%20wood.jpg',
        'clothing drying tree rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothing%20drying%20tree%20rack.jpg',
        'clothing rolling rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothing%20rolling%20rack.jpg',
        'clothing storage cedar hangers': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothing%20storage%20cedar%20hangers.jpg',
        'clothing storage garment rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothing%20storage%20garment%20rack.jpg',
        'coat hangers': 'https://cdamemoryjogger.blob.core.windows.net/laundry/coat%20hangers.jpg',
        'garment bag breathable cotton': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20bag%20breathable%20cotton.jpg',
        'garment bag large': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20bag%20large.jpg',
        'garment bag small': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20bag%20small.jpg',
        'garment bag zippered': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20bag%20zippered.jpg',
        'garment hanger clips set': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20hanger%20clips%20set.jpg',
        'garment storage box': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20storage%20box.jpg',
        'garment storage vacuum bags': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20storage%20vacuum%20bags.jpg',
        'hanger organizer rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/hanger%20organizer%20rack.jpg',
        'laundry rolling garment rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20rolling%20garment%20rack.jpg',
        'over door hanger rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/over%20door%20hanger%20rack.jpg',
        'padded hangers': 'https://cdamemoryjogger.blob.core.windows.net/laundry/padded%20hangers.jpg',
        'pants hangers': 'https://cdamemoryjogger.blob.core.windows.net/laundry/pants%20hangers.jpg',
        'shoe drying rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/shoe%20drying%20rack.jpg',
        'shoe laundry wash bag': 'https://cdamemoryjogger.blob.core.windows.net/laundry/shoe%20laundry%20wash%20bag.jpg',
        'skirt hangers': 'https://cdamemoryjogger.blob.core.windows.net/laundry/skirt%20hangers.jpg',
        'sock mesh wash pouch': 'https://cdamemoryjogger.blob.core.windows.net/laundry/sock%20mesh%20wash%20pouch.jpg',
        'sock organizer drawer insert': 'https://cdamemoryjogger.blob.core.windows.net/laundry/sock%20organizer%20drawer%20insert.jpg',

        'fabric repair patches iron on': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fabric%20repair%20patches%20iron%20on.jpg',
        'garment steamer': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20steamer.jpg',
        'iron': 'https://cdamemoryjogger.blob.core.windows.net/laundry/iron.jpg',
        'iron cord wrap': 'https://cdamemoryjogger.blob.core.windows.net/laundry/iron%20cord%20wrap.jpg',
        'iron storage caddy': 'https://cdamemoryjogger.blob.core.windows.net/laundry/iron%20storage%20caddy.jpg',
        'ironing board': 'https://cdamemoryjogger.blob.core.windows.net/laundry/ironing%20board.jpg',
        'ironing board cover': 'https://cdamemoryjogger.blob.core.windows.net/laundry/ironing%20board%20cover.jpg',
        'ironing water spray bottle': 'https://cdamemoryjogger.blob.core.windows.net/laundry/ironing%20water%20spray%20bottle.jpg',
        'spray bottle': 'https://cdamemoryjogger.blob.core.windows.net/laundry/spray%20bottle.jpg',
        'steamer water cup': 'https://cdamemoryjogger.blob.core.windows.net/laundry/steamer%20water%20cup.jpg',

        'button repair kit': 'https://cdamemoryjogger.blob.core.windows.net/laundry/button%20repair%20kit.jpg',
        'clothing moth deterrent cedar blocks': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothing%20moth%20deterrent%20cedar%20blocks.jpg',
        'clothing repair kit deluxe': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothing%20repair%20kit%20deluxe.jpg',
        'elastic band roll': 'https://cdamemoryjogger.blob.core.windows.net/laundry/elastic%20band%20roll.jpg',
        'fabric glue': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fabric%20glue.jpg',
        'fabric lint brush reusable': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fabric%20lint%20brush%20reusable.jpg',
        'fabric repair tape': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fabric%20repair%20tape.jpg',
        'fabric shaver': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fabric%20shaver.jpg',
        'hemming tape': 'https://cdamemoryjogger.blob.core.windows.net/laundry/hemming%20tape.jpg',
        'lint brush handheld': 'https://cdamemoryjogger.blob.core.windows.net/laundry/lint%20brush%20handheld.jpg',
        'lint roller refills': 'https://cdamemoryjogger.blob.core.windows.net/laundry/lint%20roller%20refills.jpg',
        'measuring tape sewing': 'https://cdamemoryjogger.blob.core.windows.net/laundry/measuring%20tape%20sewing.jpg',
        'needle set': 'https://cdamemoryjogger.blob.core.windows.net/laundry/needle%20set.jpg',
        'patch repair kit': 'https://cdamemoryjogger.blob.core.windows.net/laundry/patch%20repair%20kit.jpg',
        'safety pins box': 'https://cdamemoryjogger.blob.core.windows.net/laundry/safety%20pins%20box.jpg',
        'sewing kit': 'https://cdamemoryjogger.blob.core.windows.net/laundry/sewing%20kit.jpg',
        'sewing machine': 'https://cdamemoryjogger.blob.core.windows.net/laundry/sewing%20machine.jpg',
        'tailor chalk': 'https://cdamemoryjogger.blob.core.windows.net/laundry/tailor%20chalk.jpg',
        'thread organizer rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/thread%20organizer%20rack.jpg',
        'thread spool set': 'https://cdamemoryjogger.blob.core.windows.net/laundry/thread%20spool%20set.jpg',

        'bleach bottle': 'https://cdamemoryjogger.blob.core.windows.net/laundry/bleach%20bottle.jpg',
        'color safe bleach': 'https://cdamemoryjogger.blob.core.windows.net/laundry/color%20safe%20bleach.jpg',
        'color safe stain spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/color%20safe%20stain%20spray.jpg',
        'detergent dispenser pump': 'https://cdamemoryjogger.blob.core.windows.net/laundry/detergent%20dispenser%20pump.jpg',
        'detergent storage container': 'https://cdamemoryjogger.blob.core.windows.net/laundry/detergent%20storage%20container.jpg',
        'fabric softener bottle': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fabric%20softener%20bottle.jpg',
        'fabric softener pump': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fabric%20softener%20pump.jpg',
        'garment deodorizer spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/garment%20deodorizer%20spray.jpg',
        'laundry bar soap': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20bar%20soap.jpg',
        'laundry brightener liquid': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20brightener%20liquid.jpg',
        'laundry detergent bulk dispenser': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20detergent%20bulk%20dispenser.jpg',
        'laundry detergent eco sheets': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20detergent%20eco%20sheets.jpg',
        'laundry detergent liquid': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20detergent%20liquid.jpg',
        'laundry detergent powder': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20detergent%20powder.jpg',
        'laundry detergent pump bottle': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20detergent%20pump%20bottle.jpg',
        'laundry measuring cup': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20measuring%20cup.jpg',
        'laundry pet hair remover roller': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20pet%20hair%20remover%20roller.jpg',
        'laundry pet hair remover sheets': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20pet%20hair%20remover%20sheets.jpg',
        'laundry pods container': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20pods%20container.jpg',
        'laundry static guard spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20static%20guard%20spray.jpg',
        'laundry supply caddy': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20supply%20caddy.jpg',
        'laundry supply shelf': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20supply%20shelf.jpg',
        'laundry supply turntable': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20supply%20turntable.jpg',
        'laundry whitening booster powder': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20whitening%20booster%20powder.jpg',
        'laundry wrinkle spray large': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20wrinkle%20spray%20large.jpg',
        'odor eliminator spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/odor%20eliminator%20spray.jpg',
        'odor neutralizer spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/odor%20neutralizer%20spray.jpg',
        'oxygen booster tub': 'https://cdamemoryjogger.blob.core.windows.net/laundry/oxygen%20booster%20tub.jpg',
        'oxygen cleaner': 'https://cdamemoryjogger.blob.core.windows.net/laundry/oxygen%20cleaner.jpg',
        'pre treat spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/pre%20treat%20spray.jpg',
        'stain remover spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/stain%20remover%20spray.jpg',
        'stain stick remover': 'https://cdamemoryjogger.blob.core.windows.net/laundry/stain%20stick%20remover.jpg',
        'starch refill bottle': 'https://cdamemoryjogger.blob.core.windows.net/laundry/starch%20refill%20bottle.jpg',
        'starch spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/starch%20spray.jpg',
        'wrinkle release spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/wrinkle%20release%20spray.jpg',
        'wrinkle spray refill': 'https://cdamemoryjogger.blob.core.windows.net/laundry/wrinkle%20spray%20refill.jpg',
  
        'clothesline retractable reel': 'https://cdamemoryjogger.blob.core.windows.net/officestudy/clothesline%20retractable%20reel.jpg',
        'clothespin bag': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothespin%20bag.jpg',
        'clothespins': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothespins.jpg',
        'clothing folding template board': 'https://cdamemoryjogger.blob.core.windows.net/laundry/clothing%20folding%20template%20board.jpg',
        'folding drying rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/folding%20drying%20rack.jpg',
        'indoor clothesline': 'https://cdamemoryjogger.blob.core.windows.net/laundry/indoor%20clothesline.jpg',
        'laundry drying rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20drying%20rack.jpg',
        'laundry folding board': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20folding%20board.jpg',
        'laundry folding chair': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20folding%20chair.jpg',
        'laundry folding counter light': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20folding%20counter%20light.jpg',
        'laundry room sink drying rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20sink%20drying%20rack.jpg',
        'over door drying rack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/over%20door%20drying%20rack.jpg',

        'all purpose cleaner refill': 'https://cdamemoryjogger.blob.core.windows.net/laundry/all%20purpose%20cleaner%20refill.jpg',
        'cleaning brush set small': 'https://cdamemoryjogger.blob.core.windows.net/laundry/cleaning%20brush%20set%20small.jpg',
        'cleaning microfiber towel stack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/cleaning%20microfiber%20towel%20stack.jpg',
        'cleaning supply tote': 'https://cdamemoryjogger.blob.core.windows.net/laundry/cleaning%20supply%20tote.jpg',
        'cleaning wipes': 'https://cdamemoryjogger.blob.core.windows.net/laundry/cleaning%20wipes.jpg',
        'disinfectant refill bottle': 'https://cdamemoryjogger.blob.core.windows.net/laundry/disinfectant%20refill%20bottle.jpg',
        'disinfectant spray': 'https://cdamemoryjogger.blob.core.windows.net/laundry/disinfectant%20spray.jpg',
        'glass cleaner refill': 'https://cdamemoryjogger.blob.core.windows.net/laundry/glass%20cleaner%20refill.jpg',
        'laundry recycling bin divider': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20recycling%20bin%20divider.jpg',
        'laundry trash bag dispenser': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20trash%20bag%20dispenser.jpg',
        'laundry trash liner roll': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20trash%20liner%20roll.jpg',
        'mop': 'https://cdamemoryjogger.blob.core.windows.net/laundry/mop.jpg',
        'paper towel bulk pack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/paper%20towel%20bulk%20pack.jpg',
        'scrub brush': 'https://cdamemoryjogger.blob.core.windows.net/laundry/scrub%20brush.jpg',
        'scrub sponge refill pack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/scrub%20sponge%20refill%20pack.jpg',
        'sponges': 'https://cdamemoryjogger.blob.core.windows.net/laundry/sponges.jpg',

        'laundry room trash can': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20trash%20can.jpg',
        'laundry trash can pedal': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20trash%20can%20pedal.jpg',
        'recycling bin small': 'https://cdamemoryjogger.blob.core.windows.net/laundry/recycling%20bin%20small.jpg',
        'trash bags small': 'https://cdamemoryjogger.blob.core.windows.net/laundry/trash%20bags%20small.jpg',

        'appliance surge protector': 'https://cdamemoryjogger.blob.core.windows.net/laundry/appliance%20surge%20protector.jpg',
        'carbon monoxide detector battery pack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/carbon%20monoxide%20detector%20battery%20pack.jpg',
        'fire extinguisher cabinet small': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fire%20extinguisher%20cabinet%20small.jpg',
        'fire extinguisher inspection tag': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fire%20extinguisher%20inspection%20tag.png',
        'laundry room humidity monitor': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20humidity%20monitor.jpg',
        'laundry room leak alarm smart': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20leak%20alarm%20smart.jpg',
        'smoke detector battery pack': 'https://cdamemoryjogger.blob.core.windows.net/laundry/smoke%20detector%20battery%20pack.jpg',
        'water leak detector': 'https://cdamemoryjogger.blob.core.windows.net/laundry/water%20leak%20detector.jpg',

        'ceiling light LED panel': 'https://cdamemoryjogger.blob.core.windows.net/laundry/ceiling%20light%20LED%20panel.jpg',
        'extension cord organizer wrap': 'https://cdamemoryjogger.blob.core.windows.net/laundry/extension%20cord%20organizer%20wrap.jpg',
        'laundry room extension cord heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20extension%20cord%20heavy%20duty.jpg',
        'laundry room surge protector strip': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20surge%20protector%20strip.jpg',
        'laundry smart plug': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20smart%20plug.jpg',
        'power strip surge protector': 'https://cdamemoryjogger.blob.core.windows.net/laundry/power%20strip%20surge%20protector.jpg',

        'change jar': 'https://cdamemoryjogger.blob.core.windows.net/laundry/change%20jar.jpg',
        'laundry room bulletin board': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20bulletin%20board.jpg',
        'laundry room essential oil diffuser': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20essential%20oil%20diffuser.jpg',
        'laundry room rug': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20rug.jpg',
        'laundry room seating stool': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20seating%20stool.jpg',
        'laundry room storage bench': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20storage%20bench.jpg',
        'laundry room wall art': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20wall%20art.jpg',
        'laundry room whiteboard': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20room%20whiteboard.jpg',
        'laundry rug non slip pad': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20rug%20non%20slip%20pad.jpg',
        'laundry storage ottoman': 'https://cdamemoryjogger.blob.core.windows.net/laundry/laundry%20storage%20ottoman.jpg',
        'lost sock bin': 'https://cdamemoryjogger.blob.core.windows.net/laundry/lost%20sock%20bin.jpg',
        'utility hook heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/laundry/utility%20hook%20heavy%20duty.jpg',

        'anti fatigue mat': 'https://cdamemoryjogger.blob.core.windows.net/laundry/anti%20fatigue%20mat.jpg',
        'fan portable': 'https://cdamemoryjogger.blob.core.windows.net/laundry/fan%20portable.jpg',
        'step stool': 'https://cdamemoryjogger.blob.core.windows.net/laundry/step%20stool.jpg',
        'step stool folding': 'https://cdamemoryjogger.blob.core.windows.net/laundry/step%20stool%20folding.jpg',

        'appliance dolly': 'https://cdamemoryjogger.blob.core.windows.net/laundry/appliance%20dolly.jpg',
        'appliance moving straps': 'https://cdamemoryjogger.blob.core.windows.net/laundry/appliance%20moving%20straps.jpg',
        'appliance polish stainless': 'https://cdamemoryjogger.blob.core.windows.net/laundry/appliance%20polish%20stainless.jpg',

 //shed / storage unit

        'overhead storage shelf': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/overhead%20storage%20shelf.jpg',
        'corner shelving unit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/corner%20shelving%20unit.jpg',
        'heavy duty storage rack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/heavy%20duty%20storage%20rack.jpg',
        'wire storage rack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wire%20storage%20rack.jpg',
        'plastic storage rack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/plastic%20storage%20rack.jpg',
        'metal storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20storage%20cabinet.jpg',
        'locking storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/locking%20storage%20cabinet.jpg',
        'tall storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tall%20storage%20cabinet.jpg',
        'base storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/base%20storage%20cabinet.jpg',
        'stackable storage bins': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/stackable%20storage%20bins.jpg',
        'clear storage bins': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/clear%20storage%20bins.jpg',
        'heavy duty storage totes': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/heavy%20duty%20storage%20totes.jpg',
        'labeled storage bins': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/labeled%20storage%20bins.jpg',
        'storage crate plastic': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20crate%20plastic.jpg',
        'storage crate wood': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20crate%20wood.jpg',
        'file storage box': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/file%20storage%20box.jpg',
        'document storage tote': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/document%20storage%20tote.jpg',
        'waterproof storage case': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/waterproof%20storage%20case.jpg',
        'ammo storage can': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ammo%20storage%20can.jpg',
        'tool pegboard': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20pegboard.jpg',
        'slat wall panel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/slat%20wall%20panel.jpg',
        'wall hook heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wall%20hook%20heavy%20duty.jpg',
        'ceiling storage rack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ceiling%20storage%20rack.jpg',
        'plastic drawer unit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/plastic%20drawer%20unit.jpg',
        'hardware storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hardware%20storage%20cabinet.jpg',
        'metal shelving expansion kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20shelving%20expansion%20kit.jpg',
        'corner storage rack metal': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/corner%20storage%20rack%20metal.jpg',
        'wall cabinet metal': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wall%20cabinet%20metal.jpg',
        'attic storage bin': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/attic%20storage%20bin.jpg',
        'weatherproof storage chest': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/weatherproof%20storage%20chest.jpg',
        'metal storage trunk': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20storage%20trunk.jpg',
        'plastic storage drum': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/plastic%20storage%20drum.jpg',
        'lockable job box': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/lockable%20job%20box.jpg',
        'rolling storage chest': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rolling%20storage%20chest.jpg',
        'drawer tool cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drawer%20tool%20cabinet.jpg',
        'steel parts cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/steel%20parts%20cabinet.jpg',
        'outdoor storage bench': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/outdoor%20storage%20bench.jpg',
        'deck box large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/deck%20box%20large.jpg',
        'rolling bin cart': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rolling%20bin%20cart.jpg',
        'storage rack wheels kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20rack%20wheels%20kit.jpg',
        'shelf bracket corner': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/shelf%20bracket%20corner.jpg',
        'wire basket storage': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wire%20basket%20storage.jpg',
        'stackable drawer bins': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/stackable%20drawer%20bins.jpg',
        'utility cabinet tall': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/utility%20cabinet%20tall.jpg',
        'metal storage locker': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20storage%20locker.jpg',
        'greenhouse shelving kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/greenhouse%20shelving%20kit.jpg',
        'storage barrel rainproof': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20barrel%20rainproof.jpg',
        'storage cage metal': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20cage%20metal.jpg',
        'mesh security panel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mesh%20security%20panel.jpg',

        'workbench': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/workbench.jpg',
        'workbench vise': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/workbench%20vise.jpg',
        'workbench stool': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/workbench%20stool.jpg',
        'workbench power strip': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/workbench%20power%20strip.jpg',
        'bench grinder': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bench%20grinder.jpg',
        'drill press': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drill%20press.jpg',
        'drill press vise': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drill%20press%20vise.jpg',
        'anvil small': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/anvil%20small.jpg',
        'scaffold planks': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/scaffold%20planks.jpg',
        'portable scaffold': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/portable%20scaffold.jpg',
        'sawhorse pair': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sawhorse%20pair.jpg',
        'folding sawhorse': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/folding%20sawhorse.jpg',
        'work platform folding': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/work%20platform%20folding.jpg',
        'shop stool adjustable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/shop%20stool%20adjustable.jpg',
        'lathe benchtop': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/lathe%20benchtop.jpg',
        'band saw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/band%20saw.jpg',
        'scroll saw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/scroll%20saw.jpg',
        'shop press plates': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/shop%20press%20plates.jpg',
        'work table folding': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/work%20table%20folding.jpg',
        'bench vise swivel base': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bench%20vise%20swivel%20base.jpg',
        'router table': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/router%20table.jpg',
        'tool chest': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20chest.jpg',
        'rolling tool cart': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rolling%20tool%20cart.jpg',
        'tool cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20cabinet.jpg',
        'tool drawer organizer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20drawer%20organizer.jpg',
        'magnetic tool strip': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/magnetic%20tool%20strip.jpg',
        'power tool case stackable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/power%20tool%20case%20stackable.jpg',
        'stacking tool box': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/stacking%20tool%20box.jpg',
        'rolling stack toolbox': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rolling%20stack%20toolbox.jpg',

        'hammer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hammer.jpg',
        'sledgehammer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sledgehammer.jpg',
        'mallet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mallet.jpg',
        'screwdriver set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/screwdriver%20set.jpg',
        'precision screwdriver set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/precision%20screwdriver%20set.jpg',
        'wrench set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wrench%20set.jpg',
        'adjustable wrench': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/adjustable%20wrench.jpg',
        'socket set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/socket%20set.jpg',
        'ratchet set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ratchet%20set.jpg',
        'torque wrench': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/torque%20wrench.jpg',
        'pliers': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pliers.jpg',
        'needle nose pliers': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/needle%20nose%20pliers.jpg',
        'locking pliers': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/locking%20pliers.jpg',
        'wire cutters': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wire%20cutters.jpg',
        'wire strippers': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wire%20strippers.jpg',
        'utility knife': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/utility%20knife.jpg',
        'tape measure': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tape%20measure.jpg',
        'laser level': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/laser%20level.jpg',
        'bubble level': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bubble%20level.jpg',
        'brick trowel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/brick%20trowel.jpg',
        'masonry hammer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/masonry%20hammer.jpg',
        'concrete float': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/concrete%20float.jpg',
        'concrete edger': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/concrete%20edger.jpg',
        'concrete groover': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/concrete%20groover.jpg',
        'tamper tool': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tamper%20tool.jpg',
        'post hole digger': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/post%20hole%20digger.jpg',
        'fence post level': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/fence%20post%20level.jpg',
        'metal cutting snips': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20cutting%20snips.jpg',
        'metal file': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20file.jpg',
        'tap and die set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tap%20and%20die%20set.jpg',
        'metal punch set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20punch%20set.jpg',
        'center punch': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/center%20punch.jpg',
        'tool belt': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20belt.jpg',
        'tool pouch': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20pouch.jpg',
        'magnetic parts tray': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/magnetic%20parts%20tray.jpg',
        'work apron canvas': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/work%20apron%20canvas.jpg',
        'tool backpack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20backpack.jpg',
        'adjustable wrench large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/adjustable%20wrench%20large.jpg',
        'lug wrench': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/lug%20wrench.jpg',
        'oil filter wrench': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/oil%20filter%20wrench.jpg',
        'rotary hammer drill': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rotary%20hammer%20drill.jpg',
        'breaker bar': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/breaker%20bar.jpg',
        'ball peen hammer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ball%20peen%20hammer.jpg',
        'dead blow hammer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/dead%20blow%20hammer.jpg',
        'pry bar set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pry%20bar%20set.jpg',
        'crowbar': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/crowbar.jpg',
        'chisels cold': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chisels%20cold.jpg',
        'wood chisels set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wood%20chisels%20set.jpg',
        'files set metal': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/files%20set%20metal.jpg',
        'rasp wood': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rasp%20wood.jpg',
        'deburring tool': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/deburring%20tool.jpg',
        'pipe threader': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pipe%20threader.jpg',
        'tent stake hammer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tent%20stake%20hammer.jpg',
        'impact sockets': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/impact%20sockets.jpg',
        'clamp set assorted': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/clamp%20set%20assorted.jpg',
        'bar clamp large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bar%20clamp%20large.jpg',
        'corner clamp woodworking': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/corner%20clamp%20woodworking.jpg',
        'pipe clamp set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pipe%20clamp%20set.jpg',
        'spring clamp pack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/spring%20clamp%20pack.jpg',
        'toggle clamp': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/toggle%20clamp.jpg',
        
        'drill': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drill.jpg',
        'drill charger': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drill%20charger.jpg',
        'impact driver': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/impact%20driver.jpg',
        'circular saw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/circular%20saw.jpg',
        'jigsaw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/jigsaw.jpg',
        'reciprocating saw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/reciprocating%20saw.jpg',
        'angle grinder': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/angle%20grinder.jpg',
        'sander': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sander.jpg',
        'belt sander': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/belt%20sander.jpg',
        'heat gun': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/heat%20gun.jpg',
        'rotary tool': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rotary%20tool.jpg',
        'paint sprayer electric': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/paint%20sprayer%20electric.jpg',
        'router tool': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/router%20tool.jpg',
        'planer handheld': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/planer%20handheld.jpg',
        'oscillating tool': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/oscillating%20tool.jpg',
        'tile saw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tile%20saw.jpg',
        'concrete saw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/concrete%20saw.jpg',
        'pneumatic ratchet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pneumatic%20ratchet.jpg',
        'air impact wrench': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/air%20impact%20wrench.jpg',
        'soldering iron': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/soldering%20iron.jpg',
        'airbrush kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/airbrush%20kit.jpg',
        'airbrush compressor': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/airbrush%20compressor.jpg',
        'pneumatic brad nailer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pneumatic%20brad%20nailer.jpg',
        'pneumatic framing nailer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pneumatic%20framing%20nailer.jpg',
        'air compressor': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/air%20compressor.jpg',
        'air hose': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/air%20hose.jpg',
        'air hose reel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/air%20hose%20reel.jpg',
        'air chuck': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/air%20chuck.jpg',
        'nail gun': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/nail%20gun.jpg',
        'staple gun': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/staple%20gun.jpg',
        'compressor fittings kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/compressor%20fittings%20kit.jpg',
        'portable air tank': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/portable%20air%20tank.jpg',
        'pneumatic grease gun': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pneumatic%20grease%20gun.jpg',
        'metal sheets': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20sheets.jpg',
        'sheet metal screws': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sheet%20metal%20screws.jpg',
        'welding helmet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/welding%20helmet.jpg',
        'welding gloves': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/welding%20gloves.jpg',
        'forge propane burner': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/forge%20propane%20burner.jpg',
        'grease gun': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/grease%20gun.jpg',
        'bearing puller': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bearing%20puller.jpg',
        'gear puller': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/gear%20puller.jpg',
        'hydraulic press': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hydraulic%20press.jpg',
        'welding jacket': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/welding%20jacket.jpg',
        'extension cord': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/extension%20cord.jpg',
        'power strip': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/power%20strip.jpg',
        'extension cord heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/extension%20cord%20heavy%20duty.jpg',
        'junction box': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/junction%20box.jpg',
        'LED shop light': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/LED%20shop%20light.jpg',
        'motion sensor light': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/motion%20sensor%20light.jpg',
        'emergency light battery backup': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/emergency%20light%20battery%20backup.jpg',
        'portable flood light': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/portable%20flood%20light.jpg',
        'tripod work light': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tripod%20work%20light.jpg',
        'multimeter digital': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/multimeter%20digital.jpg',
        'voltage tester pen': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/voltage%20tester%20pen.jpg',
        'wire crimpers': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wire%20crimpers.jpg',
        'soldering stand': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/soldering%20stand.jpg',
        'desoldering pump': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/desoldering%20pump.jpg',
        'electrical fish tape': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/electrical%20fish%20tape.jpg',
        'outdoor extension cord reel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/outdoor%20extension%20cord%20reel.jpg',
        'work light clamp': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/work%20light%20clamp.jpg',
        'magnetic flashlight holder': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/magnetic%20flashlight%20holder.jpg',
        'cord management box': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/cord%20management%20box.jpg',
        'battery storage case fireproof': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/battery%20storage%20case%20fireproof.jpg',
        'electrical gloves rated': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/electrical%20gloves%20rated.jpg',
        'temporary power pole': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/temporary%20power%20pole.jpg',
        'jobsite power box': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/jobsite%20power%20box.jpg',
        'outdoor timer outlet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/outdoor%20timer%20outlet.jpg',
        'tool charging dock': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20charging%20dock.jpg',
        'bench light strip LED': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bench%20light%20strip%20LED.jpg',
        'generator portable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/generator%20portable.jpg',
        'fuel storage can': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/fuel%20storage%20can.jpg',
        'battery charger': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/battery%20charger.jpg',
        'jump starter pack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/jump%20starter%20pack.jpg',
        'solar panel portable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/solar%20panel%20portable.jpg',
        'power inverter': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/power%20inverter.jpg',
        'portable battery bank large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/portable%20battery%20bank%20large.jpg',
        'jump cable heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/jump%20 cable%20heavy%20duty.jpg',
        'generator cover waterproof': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/generator%20cover%20waterproof.jpg',
    
    'first aid kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/first%20aid%20kit.jpg',
    'fire extinguisher': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/fire%20extinguisher.jpg',
    'safety glasses': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/safety%20glasses.jpg',
    'work gloves': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/work%20gloves.jpg',
    'hearing protection': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hearing%20protection.jpg',
    'dust masks': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/dust%20masks.jpg',
    'respirator mask': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/respirator%20mask.jpg',
    'hard hat': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hard%20hat.jpg',
    'mechanic gloves': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mechanic%20gloves.jpg',
    'knee pads': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/knee%20pads.jpg',
    'security camera outdoor': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/security%20camera%20outdoor.jpg',
    'motion detector alarm': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/motion%20detector%20alarm.jpg',
    'padlock heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/padlock%20heavy%20duty.jpg',
    'combination lock': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/combination%20lock.jpg',
    'key safe lock box': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/key%20safe%20lock%20box.jpg',
    'door reinforcement plate': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/door%20reinforcement%20plate.jpg',
    'window security bars': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/window%20security%20bars.jpg',
    'tool lock cable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tool%20lock%20cable.jpg',
    'storage cabinet lock kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20cabinet%20lock%20kit.jpg',
    'safe small fireproof': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/safe%20small%20fireproof.jpg',
    'spill containment tray': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/spill%20containment%20tray.jpg',
    'safety cone set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/safety%20cone%20set.jpg',
    'fire blanket': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/fire%20blanket.jpg',
    'roof safety harness': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/roof%20safety%20harness.jpg',
    'fall protection rope': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/fall%20protection%20rope.jpg',
    'anchor point roof': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/anchor%20point%20roof.jpg',
    'safety barrier netting': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/safety%20barrier%20netting.jpg',
    'hard shell knee pads': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hard%20shell%20knee%20pads.jpg',
    'face shield clear': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/face%20shield%20clear.jpg',
    'fire resistant gloves': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/fire%20resistant%20gloves.jpg',
    'ear plug pack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ear%20plug%20pack.jpg',
    'document safe waterproof': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/document%20safe%20waterproof.jpg',
    'combination key lock': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/combination%20key%20lock.jpg',
    'padlock weatherproof': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/padlock%20weatherproof.jpg',
    'keyed alike lock set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/keyed%20alike%20lock%20set.jpg',
    'combination lock long shackle': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/combination%20lock%20long%20shackle.jpg',
    'hasp lock heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hasp%20lock%20heavy%20duty.jpg',
    'door reinforcement bar': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/door%20reinforcement%20bar.jpg',
    'security light solar': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/security%20light%20solar.jpg',
    'flashlight': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/flashlight.jpg',
    'lantern rechargeable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/lantern%20rechargeable.jpg',
    'batteries': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/batteries.jpg',
    'flashlight rechargeable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/flashlight%20rechargeable.jpg',
    'headlamp LED': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/headlamp%20LED.jpg',
    'waterproof flashlight case': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/waterproof%20flashlight%20case.jpg',

    'shop vacuum': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/shop%20vacuum.jpg',
    'shop vacuum hose': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/shop%20vacuum%20hose.jpg',
    'shop vacuum filter': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/shop%20vacuum%20filter.jpg',
    'push broom': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/push%20broom.jpg',
    'broom': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/broom.jpg',
    'dustpan': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/dustpan.jpg',
    'mop': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mop.jpg',
    'mop bucket': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mop%20bucket.jpg',
    'cleaning caddy': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/cleaning%20caddy.jpg',
    'all purpose cleaner': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/all%20purpose%20cleaner.jpg',
    'degreaser': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/degreaser.jpg',
    'trash can': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/trash%20can.jpg',
    'trash bags': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/trash%20bags.jpg',
    'recycling bin': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/recycling%20bin.jpg',
    'mouse bait station': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mouse%20bait%20station.jpg',
    'pressure washer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pressure%20washer.jpg',
    'pressure washer hose': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pressure%20washer%20hose.jpg',
    'pressure washer wand': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pressure%20washer%20wand.jpg',
    'pressure washer surface cleaner': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pressure%20washer%20surface%20cleaner.jpg',
    'spray wand extension': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/spray%20wand%20extension.jpg',
    'foam sprayer bottle': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/foam%20sprayer%20bottle.jpg',

    'lawn mower': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/lawn%20mower.jpg',
    'lawn mower blades': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/lawn%20mower%20blades.jpg',
    'weed trimmer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/weed%20trimmer.jpg',
    'leaf blower': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/leaf%20blower.jpg',
    'leaf rake': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/leaf%20rake.jpg',
    'garden rake': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/garden%20rake.jpg',
    'shovel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/shovel.jpg',
    'spade shovel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/spade%20shovel.jpg',
    'snow shovel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/snow%20shovel.jpg',
    'ice scraper': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ice%20scraper.jpg',
    'snow blower': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/snow%20blower.jpg',
    'hedge trimmer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hedge%20trimmer.jpg',
    'pruning shears': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pruning%20shears.jpg',
    'loppers': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/loppers.jpg',
    'axe': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/axe.jpg',
    'hatchet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hatchet.jpg',
    'chainsaw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chainsaw.jpg',
    'log splitter': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/log%20splitter.jpg',
    'wheelbarrow': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wheelbarrow.jpg',
    'tiller gas': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tiller%20gas.jpg',
    'cultivator tool': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/cultivator%20tool.jpg',
    'landscaping shovel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/landscaping%20shovel.jpg',
    'edger manual': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/edger%20manual.jpg',
    'edger gas': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/edger%20gas.jpg',
    'tree pruning saw': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tree%20pruning%20saw.jpg',
    'ash shovel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ash%20shovel.jpg',
    
    'watering can': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/watering%20can.jpg',
    'garden gloves': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/garden%20gloves.jpg',
    'drip irrigation kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drip%20irrigation%20kit.jpg',
    'sprinkler': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sprinkler.jpg',
    'garden hose': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/garden%20hose.jpg',
    'hose nozzle': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hose%20nozzle.jpg',
    'spray bottle garden': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/spray%20bottle%20garden.jpg',
    'pest control sprayer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pest%20control%20sprayer.jpg',
    'garden hose reel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/garden%20hose%20reel.jpg',
    'sprinkler timer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sprinkler%20timer.jpg',
    'backflow preventer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/backflow%20preventer.jpg',
    'garden cart rolling': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/garden%20cart%20rolling.jpg',
    'fertilizer spreader': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/fertilizer%20spreader.jpg',
    'broadcast spreader': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/broadcast%20spreader.jpg',
    'seed spreader hand': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/seed%20spreader%20hand.jpg',
    'utility sink freestanding': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/utility%20sink%20freestanding.jpg',
    'sink faucet outdoor': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sink%20faucet%20outdoor.jpg',
    'hose splitter brass': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hose%20splitter%20brass.jpg',
    'hose quick connect kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hose%20quick%20connect%20kit.jpg',
    'rain barrel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rain%20barrel.jpg',
    'rain barrel diverter kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rain%20barrel%20diverter%20kit.jpg',
    'chemical sprayer backpack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chemical%20sprayer%20backpack.jpg',

    'bike repair stand': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bike%20repair%20stand.jpg',
    'bike pump': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bike%20pump.jpg',
    'bike helmets': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bike%20helmets.jpg',
    'sports equipment bin': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sports%20equipment%20bin.jpg',
    'golf clubs': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/golf%20clubs.jpg',
    'golf bag': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/golf%20bag.jpg',
    'baseball bats': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/baseball%20bats.jpg',
    'baseballs': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/baseballs.jpg',
    'basketballs': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/basketballs.jpg',
    'football': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/football.jpg',
    'soccer ball': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/soccer%20ball.jpg',
    'tennis rackets': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tennis%20rackets.jpg',
    'tennis balls': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tennis%20balls.jpg',
    'skateboard': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/skateboard.jpg',
    'roller skates': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/roller%20skates.jpg',
    'skis': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/skis.jpg',
    'ski poles': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ski%20poles.jpg',
    'kayak paddles': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/kayak%20paddles.jpg',
    'pool equipment storage bin': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pool%20equipment%20storage%20bin.jpg',
    'chlorine storage bucket': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chlorine%20storage%20bucket.jpg',
    'pool net skimmer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pool%20net%20skimmer.jpg',
    'pool brush': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pool%20brush.jpg',
    'pool vacuum hose': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pool%20vacuum%20hose.jpg',
    'life jacket storage rack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/life%20jacket%20storage%20rack.jpg',
    'paddle board rack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/paddle%20board%20rack.jpg',
    'tackle box large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tackle%20box%20large.jpg',
    'bait cooler small': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bait%20cooler%20small.jpg',

    'camping cooler': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/camping%20cooler.jpg',
    'camping stove': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/camping%20stove.jpg',
    'propane tank': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/propane%20tank.jpg',
    'propane torch': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/propane%20torch.jpg',
    'folding camping chairs': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/folding%20camping%20chairs.jpg',
    'sleeping bags': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sleeping%20bags.jpg',
    'camp lantern': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/camp%20lantern.jpg',
    'cooler wheeled': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/cooler%20wheeled.jpg',
    'water jug camping': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/water%20jug%20camping.jpg',
    'portable toilet camping': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/portable%20toilet%20camping.jpg',
    'folding cot': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/folding%20cot.jpg',
    'bug zapper lantern': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bug%20zapper%20lantern.jpg',
    'propane heater portable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/propane%20heater%20portable.jpg',
    'battery lantern emergency': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/battery%20lantern%20emergency.jpg',
    'emergency radio crank': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/emergency%20radio%20crank.jpg',
    'camp tool kit compact': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/camp%20tool%20kit%20compact.jpg',
    'survival kit storage box': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/survival%20kit%20storage%20box.jpg',
    'outdoor folding table': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/outdoor%20folding%20table.jpg',
    'camp prep table': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/camp%20prep%20table.jpg',
    'water cooler dispenser': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/water%20cooler%20dispenser.jpg',
    'ice chest large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ice%20chest%20large.jpg',
    'camp cookware kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/camp%20cookware%20kit.jpg',

    'ladder': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ladder.jpg',
    'extension ladder': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/extension%20ladder.jpg',
    'step ladder': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/step%20ladder.jpg',
    'folding ladder': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/folding%20ladder.jpg',
    'ladder stabilizer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ladder%20stabilizer.jpg',
    'ladder leveler': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ladder%20leveler.jpg',
    'roof ladder hook': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/roof%20ladder%20hook.jpg',
    'extension ladder tie downs': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/extension%20ladder%20tie%20downs.jpg',
    'ladder tool tray': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ladder%20tool%20tray.jpg',

        'moving blankets': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/moving%20blankets.jpg',
        'storage trunk': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20trunk.jpg',
        'moving dolly': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/moving%20dolly.jpg',
        'hand truck': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hand%20truck.jpg',
        'wheel chocks': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wheel%20chocks.jpg',
        'ratchet straps heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ratchet%20straps%20heavy%20duty.jpg',
        'cargo net large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/cargo%20net%20large.jpg',
        'tow strap recovery': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tow%20strap%20recovery.jpg',
        'winch electric': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/winch%20electric.jpg',
        'winch remote': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/winch%20remote.jpg',
        'chain hoist manual': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chain%20hoist%20manual.jpg',
        'moving straps shoulder': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/moving%20straps%20shoulder.jpg',
        'appliance dolly straps': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/appliance%20dolly%20straps.jpg',
        'steel cable roll': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/steel%20cable%20roll.jpg',
        'chain link roll': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chain%20link%20roll.jpg',
        'pulley block heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pulley%20block%20heavy%20duty.jpg',

        'auto jack floor': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/auto%20jack%20floor.jpg',
        'jack stands pair': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/jack%20stands%20pair.jpg',
        'tire inflator': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tire%20inflator.jpg',
        'tire pressure gauge': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tire%20pressure%20gauge.jpg',
        'oil drain pan': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/oil%20drain%20pan.jpg',
        'mechanic creeper': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mechanic%20creeper.jpg',
        'mechanic stool rolling': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mechanic%20stool%20rolling.jpg',
        'automotive tool set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/automotive%20tool%20set.jpg',
        'trailer hitch lock': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/trailer%20hitch%20lock.jpg',
        'trailer ball mount': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/trailer%20ball%20mount.jpg',
        'truck tool box bed mount': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/truck%20tool%20box%20bed%20mount.jpg',
        'bed liner spray kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/bed%20liner%20spray%20kit.jpg',
        'cargo rack roof': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/cargo%20rack%20roof.jpg',
        'roof tie down straps': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/roof%20tie%20down%20straps.jpg',
        'tow hitch receiver': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tow%20hitch%20receiver.jpg',
        'hitch pin lock': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hitch%20pin%20lock.jpg',
        'trailer jack wheel': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/trailer%20jack%20wheel.jpg',
        'trailer spare tire mount': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/trailer%20spare%20tire%20mount.jpg',
        'tire patch kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tire%20patch%20kit.jpg',
        'hydraulic bottle jack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/hydraulic%20bottle%20jack.jpg',
        'transmission jack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/transmission%20jack.jpg',
        'engine stand': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/engine%20stand.jpg',
        'engine hoist': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/engine%20hoist.jpg',
        'load leveler bar': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/load%20leveler%20bar.jpg',
        'tow dolly': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/tow%20dolly.jpg',
        'trailer ramps': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/trailer%20ramps.jpg',
        'rolling mechanic seat': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rolling%20mechanic%20seat.jpg',

        'concrete mix bags': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/concrete%20mix%20bags.jpg',
        'cement mixer portable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/cement%20mixer%20portable.jpg',
        'mixing tub large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/mixing%20tub%20large.jpg',
        'gravel bags': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/gravel%20bags.jpg',
        'sand bags': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sand%20bags.jpg',
        'landscape fabric roll': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/landscape%20fabric%20roll.jpg',
        'paver stones': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/paver%20stones.jpg',
        'paver base': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/paver%20base.jpg',
        
        'paint cans assorted': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/paint%20cans%20assorted.jpg',
        'roller frames': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/roller%20frames.jpg',
        'drop cloth canvas': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drop%20cloth%20canvas.jpg',
        'painter tape roll': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/painter%20tape%20roll.jpg',
        'joint compound bucket': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/joint%20compound%20bucket.jpg',
        'drywall patch kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drywall%20patch%20kit.jpg',
        'paint brush set': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/paint%20brush%20set.jpg',
        'wood stain cans': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wood%20stain%20cans.jpg',
        'deck sealer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/deck%20sealer.jpg',
        'concrete sealer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/concrete%20sealer.jpg',
        'masonry waterproofing': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/masonry%20waterproofing.jpg',
        'roof patch sealant': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/roof%20patch%20sealant.jpg',
        'asphalt repair patch': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/asphalt%20repair%20patch.jpg',
        'driveway crack filler': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/driveway%20crack%20filler.jpg',
        'expanding foam insulation': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/expanding%20foam%20insulation.jpg',
        'foam gun applicator': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/foam%20gun%20applicator.jpg',
        'concrete patch compound': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/concrete%20patch%20compound.jpg',
        'epoxy repair kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/epoxy%20repair%20kit.jpg',
        'crack injection kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/crack%20injection%20kit.jpg',
        'moisture barrier paint': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/moisture%20barrier%20paint.jpg',

        'plumbing pipe PVC': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/plumbing%20pipe%20PVC.jpg',
        'PVC fittings assorted': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/PVC%20fittings%20assorted.jpg',
        'pipe wrench large': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pipe%20wrench%20large.jpg',
        'pipe cutter': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/pipe%20cutter.jpg',
        'water pump portable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/water%20pump%20portable.jpg',
        'sump pump': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sump%20pump.jpg',
        'sump pump hose': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/sump%20pump%20hose.jpg',
        'ice melt bucket': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ice%20melt%20bucket.jpg',
        'snow roof rake': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/snow%20roof%20rake.jpg',
        'roof snow guard': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/roof%20snow%20guard.jpg',

        'log rack firewood': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/log%20rack%20firewood.jpg',
        'firewood carrier': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/firewood%20carrier.jpg',
        'kindling splitter': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/kindling%20splitter.jpg',
        'maul splitting': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/maul%20splitting.jpg',
        'ash bucket metal': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/ash%20bucket%20metal.jpg',
        'chimney brush kit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chimney%20brush%20kit.jpg',
        'chimney rods extension': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chimney%20rods%20extension.jpg',
        'wood moisture meter': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/wood%20moisture%20meter.jpg',
        'stump grinder rental unit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/stump%20grinder%20rental%20unit.jpg',
        'log carrier canvas': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/log%20carrier%20canvas.jpg',
        'chimney cap stainless': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chimney%20cap%20stainless.jpg',

        'storage tarp heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20tarp%20heavy%20duty.jpg',
        'canopy tent frame': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/canopy%20tent%20frame.jpg',
        'boat cover': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/boat%20cover.jpg',

        'shed floor mat': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/shed%20floor%20mat.jpg',
        'temperature gauge analog': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/temperature%20gauge%20analog.jpg',
        'humidity gauge analog': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/humidity%20gauge%20analog.jpg',
        'weather station unit': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/weather%20station%20unit.jpg',
        'air circulator fan': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/air%20circulator%20fan.jpg',
        'box fan': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/box%20fan.jpg',
        'space heater portable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/space%20heater%20portable.jpg',
        'dehumidifier small': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/dehumidifier%20small.jpg',
        'floor mat anti slip': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/floor%20mat%20anti%20slip.jpg',
        'anti fatigue mat heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/anti%20fatigue%20mat%20heavy%20duty.jpg',
        'rubber floor tiles interlocking': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rubber%20floor%20tiles%20interlocking.jpg',
        'floor drain cover grate': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/floor%20drain%20cover%20grate.jpg',
    
        'boat anchor small': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/boat%20anchor%20small.jpg',
        'boat motor stand': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/boat%20motor%20stand.jpg',
        'boat fuel tank portable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/boat%20fuel%20tank%20portable.jpg',
        'boat trailer guide poles': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/boat%20trailer%20guide%20poles.jpg',
        'marine rope coil': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/marine%20rope%20coil.jpg',
        'dock line cleat': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/dock%20line%20cleat.jpg',

        'chemical storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/chemical%20storage%20cabinet.jpg',
        'flammable storage cabinet': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/flammable%20storage%20cabinet.jpg',
        'metal detector': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/metal%20detector.jpg',
        'rc hobby storage case': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/rc%20hobby%20storage%20case.jpg',
        'drone storage case': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/drone%20storage%20case.jpg',
        'spray booth portable': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/spray%20booth%20portable.jpg',
        'craft tool organizer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/craft%20tool%20organizer.jpg',
        'fuel storage locker': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/fuel%20storage%20locker.jpg',

        'solar yard light pack': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/solar%20yard%20light%20pack.jpg',
        'landscape lighting transformer': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/landscape%20lighting%20transformer.jpg',
        'storage hooks assorted': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/storage%20hooks%20assorted.jpg',
        'magnetic cabinet catch': 'https://cdamemoryjogger.blob.core.windows.net/shedstorageunit/magnetic%20cabinet%20catch.jpg',
  
//yard

    'raised garden bed': 'https://cdamemoryjogger.blob.core.windows.net/yard/raised%20garden%20bed.jpg',
    'garden arbor': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20arbor.jpg',
    'garden arch trellis': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20arch%20trellis.jpg',
    'yard trellis metal': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20trellis%20metal.jpg',
    'watering can plastic': 'https://cdamemoryjogger.blob.core.windows.net/yard/watering%20can%20plastic.jpg',
    'watering can metal': 'https://cdamemoryjogger.blob.core.windows.net/yard/watering%20can%20metal.jpg',
    'plant pots ceramic': 'https://cdamemoryjogger.blob.core.windows.net/yard/plant%20pots%20ceramic.jpg',
    'plant pots plastic': 'https://cdamemoryjogger.blob.core.windows.net/yard/plant%20pots%20plastic.jpg',
    'planter box wood': 'https://cdamemoryjogger.blob.core.windows.net/yard/planter%20box%20wood.jpg',
    'hanging planter basket': 'https://cdamemoryjogger.blob.core.windows.net/yard/hanging%20planter%20basket.jpg',
    'window planter box': 'https://cdamemoryjogger.blob.core.windows.net/yard/window%20planter%20box.jpg',
    'plant stand outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/plant%20stand%20outdoor.jpg',
    'potting bench': 'https://cdamemoryjogger.blob.core.windows.net/yard/potting%20bench.jpg',
    'garden fountain': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20fountain.jpg',
    'bird bath pedestal': 'https://cdamemoryjogger.blob.core.windows.net/yard/bird%20bath%20pedestal.jpg',
    'garden statue': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20statue.jpg',
    'tree stump remover chemical': 'https://cdamemoryjogger.blob.core.windows.net/yard/tree%20stump%20remover%20chemical.jpg',
    'tree wrap protective': 'https://cdamemoryjogger.blob.core.windows.net/yard/tree%20wrap%20protective.jpg',
    'plant frost cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/plant%20frost%20cover.jpg',
    'plant cage tomato': 'https://cdamemoryjogger.blob.core.windows.net/yard/plant%20cage%20tomato.jpg',
    'trellis netting': 'https://cdamemoryjogger.blob.core.windows.net/yard/trellis%20netting.jpg',
    'garden cloche cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20cloche%20cover.jpg',
    'raised bed liner': 'https://cdamemoryjogger.blob.core.windows.net/yard/raised%20bed%20liner.jpg',
    'garden gnome statue': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20gnome%20statue.jpg',
    'yard fountain tiered': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20fountain%20tiered.jpg',

    'sprinkler timer': 'https://cdamemoryjogger.blob.core.windows.net/yard/sprinkler%20timer.jpg',
    'garden hose heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20hose%20heavy%20duty.jpg',
    'soaker hose': 'https://cdamemoryjogger.blob.core.windows.net/yard/soaker%20hose.jpg',
    'hose reel freestanding': 'https://cdamemoryjogger.blob.core.windows.net/yard/hose%20reel%20freestanding.jpg',
    'spray nozzle adjustable': 'https://cdamemoryjogger.blob.core.windows.net/yard/spray%20nozzle%20adjustable.jpg',
    'sprinkler oscillating': 'https://cdamemoryjogger.blob.core.windows.net/yard/sprinkler%20oscillating.jpg',
    'sprinkler impact': 'https://cdamemoryjogger.blob.core.windows.net/yard/sprinkler%20impact.jpg',
    'watering wand': 'https://cdamemoryjogger.blob.core.windows.net/yard/watering%20wand.jpg',
    'rain gauge yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/rain%20gauge%20yard.jpg',
    'rain barrel system': 'https://cdamemoryjogger.blob.core.windows.net/yard/rain%20barrel%20system.jpg',
    'smart sprinkler controller': 'https://cdamemoryjogger.blob.core.windows.net/yard/smart%20sprinkler%20controller.jpg',
    'sprinkler riser extension': 'https://cdamemoryjogger.blob.core.windows.net/yard/sprinkler%20riser%20extension.jpg',
    'sprinkler valve box cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/sprinkler%20valve%20box%20cover.jpg',
    'irrigation drip emitters': 'https://cdamemoryjogger.blob.core.windows.net/yard/irrigation%20drip%20emitters.jpg',
    'irrigation tubing roll': 'https://cdamemoryjogger.blob.core.windows.net/yard/irrigation%20tubing%20roll.jpg',
    'irrigation pressure regulator': 'https://cdamemoryjogger.blob.core.windows.net/yard/irrigation%20pressure%20regulator.jpg',
    'irrigation filter inline': 'https://cdamemoryjogger.blob.core.windows.net/yard/irrigation%20filter%20inline.jpg',
    'hose timer digital': 'https://cdamemoryjogger.blob.core.windows.net/yard/hose%20timer%20digital.jpg',
    'hose splitter brass': 'https://cdamemoryjogger.blob.core.windows.net/yard/hose%20splitter%20brass.jpg',
    'hose quick connect fittings': 'https://cdamemoryjogger.blob.core.windows.net/yard/hose%20quick%20connect%20fittings.jpg',
    'rain barrel diverter kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/rain%20barrel%20diverter%20kit.jpg',
    'downspout extension flexible': 'https://cdamemoryjogger.blob.core.windows.net/yard/downspout%20extension%20flexible.jpg',
    'gutter splash block': 'https://cdamemoryjogger.blob.core.windows.net/yard/gutter%20splash%20block.jpg',
    'gutter guard mesh': 'https://cdamemoryjogger.blob.core.windows.net/yard/gutter%20guard%20mesh.jpg',
    'outdoor faucet cover winter': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20faucet%20cover%20winter.jpg',
    'garden hose repair kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20hose%20repair%20kit.jpg',
    'spray bottle pump garden': 'https://cdamemoryjogger.blob.core.windows.net/yard/spray%20bottle%20pump%20garden.jpg',
    'watering spike automatic': 'https://cdamemoryjogger.blob.core.windows.net/yard/watering%20spike%20automatic.jpg',
    'sprinkler rain sensor': 'https://cdamemoryjogger.blob.core.windows.net/yard/sprinkler%20rain%20sensor.jpg',

    'porch swing': 'https://cdamemoryjogger.blob.core.windows.net/yard/porch%20swing.jpg',
    'shade sail canopy': 'https://cdamemoryjogger.blob.core.windows.net/yard/shade%20sail%20canopy.jpg',
    'awning retractable': 'https://cdamemoryjogger.blob.core.windows.net/yard/awning%20retractable.jpg',
    'outdoor canopy tent': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20canopy%20tent.jpg',
    'sun shade umbrella': 'https://cdamemoryjogger.blob.core.windows.net/yard/sun%20shade%20umbrella.jpg',
    'umbrella base heavy': 'https://cdamemoryjogger.blob.core.windows.net/yard/umbrella%20base%20heavy.jpg',
    'outdoor rug patio': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20rug%20patio.jpg',
    'doormat exterior': 'https://cdamemoryjogger.blob.core.windows.net/yard/doormat%20exterior.jpg',
    'welcome mat decorative': 'https://cdamemoryjogger.blob.core.windows.net/yard/welcome%20mat%20decorative.jpg',
    'outdoor bench': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20bench.jpg',
    'outdoor dining table': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20dining%20table.jpg',
    'outdoor dining chairs': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20dining%20chairs.jpg',
    'outdoor sectional sofa': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20sectional%20sofa.jpg',
    'patio coffee table': 'https://cdamemoryjogger.blob.core.windows.net/yard/patio%20coffee%20table.jpg',
    'patio side table': 'https://cdamemoryjogger.blob.core.windows.net/yard/patio%20side%20table.jpg',
    'chaise lounge chair': 'https://cdamemoryjogger.blob.core.windows.net/yard/chaise%20lounge%20chair.jpg',
    'hammock stand': 'https://cdamemoryjogger.blob.core.windows.net/yard/hammock%20stand.jpg',
    'deck storage bench': 'https://cdamemoryjogger.blob.core.windows.net/yard/deck%20storage%20bench.jpg',
    'deck privacy screen': 'https://cdamemoryjogger.blob.core.windows.net/yard/deck%20privacy%20screen.jpg',
    'outdoor curtain panels': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20curtain%20panels.jpg',
    'gazebo mosquito netting': 'https://cdamemoryjogger.blob.core.windows.net/yard/gazebo%20mosquito%20netting.jpg',
    'pergola shade cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/pergola%20shade%20cover.jpg',
    'shade sail hardware kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/shade%20sail%20hardware%20kit.jpg',
    'patio heater propane': 'https://cdamemoryjogger.blob.core.windows.net/yard/patio%20heater%20propane.jpg',
    'patio heater cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/patio%20heater%20cover.jpg',
    'porch rocking chair': 'https://cdamemoryjogger.blob.core.windows.net/yard/porch%20rocking%20chair.jpg',
    'porch side table': 'https://cdamemoryjogger.blob.core.windows.net/yard/porch%20side%20table.jpg',
    'car port canopy': 'https://cdamemoryjogger.blob.core.windows.net/yard/car%20port%20canopy.jpg',
  
    'fire pit metal': 'https://cdamemoryjogger.blob.core.windows.net/yard/fire%20pit%20metal.jpg',
    'fire pit cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/fire%20pit%20cover.jpg',
    'propane fire table': 'https://cdamemoryjogger.blob.core.windows.net/yard/propane%20fire%20table.jpg',
    'charcoal grill': 'https://cdamemoryjogger.blob.core.windows.net/yard/charcoal%20grill.jpg',
    'gas grill': 'https://cdamemoryjogger.blob.core.windows.net/yard/gas%20grill.jpg',
    'grill cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/grill%20cover.jpg',
    'smoker grill': 'https://cdamemoryjogger.blob.core.windows.net/yard/smoker%20grill.jpg',
    'outdoor pizza oven': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20pizza%20oven.jpg',
    'grill tool set': 'https://cdamemoryjogger.blob.core.windows.net/yard/grill%20tool%20set.jpg',
    'propane tank outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/propane%20tank%20outdoor.jpg',
    'cooler outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/cooler%20outdoor.jpg',
    'outdoor bar cart': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20bar%20cart.jpg',
    'outdoor serving tray': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20serving%20tray.jpg',
    'propane tank cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/propane%20tank%20cover.jpg',
    'fire pit spark screen': 'https://cdamemoryjogger.blob.core.windows.net/yard/fire%20pit%20spark%20screen.jpg',
    'fire pit grate insert': 'https://cdamemoryjogger.blob.core.windows.net/yard/fire%20pit%20grate%20insert.jpg',
    'fire pit poker tool': 'https://cdamemoryjogger.blob.core.windows.net/yard/fire%20pit%20poker%20tool.jpg',
    'fire pit lava rocks': 'https://cdamemoryjogger.blob.core.windows.net/yard/fire%20pit%20lava%20rocks.jpg',
    'chiminea outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/chiminea%20outdoor.jpg',
    'grill burner tubes': 'https://cdamemoryjogger.blob.core.windows.net/yard/grill%20burner%20tubes.jpg',
    'grill ignition kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/grill%20ignition%20kit.jpg',
    'grill thermometer lid': 'https://cdamemoryjogger.blob.core.windows.net/yard/grill%20thermometer%20lid.jpg',
    'smoker wood chips box': 'https://cdamemoryjogger.blob.core.windows.net/yard/smoker%20wood%20chips%20box.jpg',
    'bar stool outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/bar%20stool%20outdoor.jpg',
    'cooler rolling outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/cooler%20rolling%20outdoor.jpg',
    'ice chest heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/yard/ice%20chest%20heavy%20duty.jpg',
    'picnic basket wicker': 'https://cdamemoryjogger.blob.core.windows.net/yard/picnic%20basket%20wicker.jpg',
    'serving cart patio': 'https://cdamemoryjogger.blob.core.windows.net/yard/serving%20cart%20patio.jpg',
    'outdoor buffet table': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20buffet%20table.jpg',
    'propane tank storage cage': 'https://cdamemoryjogger.blob.core.windows.net/yard/propane%20tank%20storage%20cage.jpg',

    'lawn mower push': 'https://cdamemoryjogger.blob.core.windows.net/yard/lawn%20mower%20push.jpg',
    'lawn mower riding': 'https://cdamemoryjogger.blob.core.windows.net/yard/lawn%20mower%20riding.jpg',
    'mower bag attachment': 'https://cdamemoryjogger.blob.core.windows.net/yard/mower%20bag%20attachment.jpg',
    'mower cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/mower%20cover.jpg',
    'weed trimmer electric': 'https://cdamemoryjogger.blob.core.windows.net/yard/weed%20trimmer%20electric.jpg',
    'weed trimmer gas': 'https://cdamemoryjogger.blob.core.windows.net/yard/weed%20trimmer%20gas.jpg',
    'leaf blower electric': 'https://cdamemoryjogger.blob.core.windows.net/yard/leaf%20blower%20electric.jpg',
    'leaf blower gas': 'https://cdamemoryjogger.blob.core.windows.net/yard/leaf%20blower%20gas.jpg',
    'hedge trimmer electric': 'https://cdamemoryjogger.blob.core.windows.net/yard/hedge%20trimmer%20electric.png',
    'hedge trimmer gas': 'https://cdamemoryjogger.blob.core.windows.net/yard/hedge%20trimmer%20gas.jpg',
    'chainsaw electric': 'https://cdamemoryjogger.blob.core.windows.net/yard/chainsaw%20electric.jpg',
    'chainsaw gas': 'https://cdamemoryjogger.blob.core.windows.net/yard/chainsaw%20gas.jpg',
    'pole saw': 'https://cdamemoryjogger.blob.core.windows.net/yard/pole%20saw.jpg',
    'garden rake leaf': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20rake%20leaf.jpg',
    'landscape rake wide': 'https://cdamemoryjogger.blob.core.windows.net/yard/landscape%20rake%20wide.png',
    'shovel round point': 'https://cdamemoryjogger.blob.core.windows.net/yard/shovel%20round%20point.jpg',
    'shovel square point': 'https://cdamemoryjogger.blob.core.windows.net/yard/shovel%20square%20point.jpg',
    'spade garden': 'https://cdamemoryjogger.blob.core.windows.net/yard/spade%20garden.jpg',
    'post hole digger manual': 'https://cdamemoryjogger.blob.core.windows.net/yard/post%20hole%20digger%20manual.jpg',
    'garden hoe': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20hoe.jpg',
    'wheelbarrow single wheel': 'https://cdamemoryjogger.blob.core.windows.net/yard/wheelbarrow%20single%20wheel.jpg',
    'garden cart dump': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20cart%20dump.jpg',
    'fertilizer spreader broadcast': 'https://cdamemoryjogger.blob.core.windows.net/yard/fertilizer%20spreader%20broadcast.jpg',
    'fertilizer spreader drop': 'https://cdamemoryjogger.blob.core.windows.net/yard/fertilizer%20spreader%20drop.jpg',
    'seed spreader handheld': 'https://cdamemoryjogger.blob.core.windows.net/yard/seed%20spreader%20handheld.jpg',
    'garden trowel hand': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20trowel%20hand.jpg',
    'hand cultivator': 'https://cdamemoryjogger.blob.core.windows.net/yard/hand%20cultivator.jpg',
    'pruning shears bypass': 'https://cdamemoryjogger.blob.core.windows.net/yard/pruning%20shears%20bypass.jpg',
    'loppers long handle': 'https://cdamemoryjogger.blob.core.windows.net/yard/loppers%20long%20handle.jpg',
    'tree pruner pole': 'https://cdamemoryjogger.blob.core.windows.net/yard/tree%20pruner%20pole.jpg',
    'driveway pressure washer': 'https://cdamemoryjogger.blob.core.windows.net/yard/driveway%20pressure%20washer.jpg',
    'snow shovel heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/yard/snow%20shovel%20heavy%20duty.jpg',
    'snow blower electric': 'https://cdamemoryjogger.blob.core.windows.net/yard/snow%20blower%20electric.jpg',
    'ice melt spreader': 'https://cdamemoryjogger.blob.core.windows.net/yard/ice%20melt%20spreader.jpg',
    'roof snow rake': 'https://cdamemoryjogger.blob.core.windows.net/yard/roof%20snow%20rake.jpg',
    'lawn aerator manual': 'https://cdamemoryjogger.blob.core.windows.net/yard/lawn%20aerator%20manual.jpg',
    'lawn aerator core': 'https://cdamemoryjogger.blob.core.windows.net/yard/lawn%20aerator%20core.jpg',
    'lawn dethatcher rake': 'https://cdamemoryjogger.blob.core.windows.net/yard/lawn%20dethatcher%20rake.jpg',
    'lawn roller': 'https://cdamemoryjogger.blob.core.windows.net/yard/lawn%20roller.jpg',
    'grass seed spreader': 'https://cdamemoryjogger.blob.core.windows.net/yard/grass%20seed%20spreader.jpg',
    'weed puller tool': 'https://cdamemoryjogger.blob.core.windows.net/yard/weed%20puller%20tool.jpg',
    'garden edging shovel': 'https://cdamemoryjogger.blob.core.windows.net/yard/garden%20edging%20shovel.jpg',
    'cultivator gas': 'https://cdamemoryjogger.blob.core.windows.net/yard/cultivator%20gas.jpg',
    'rototiller electric': 'https://cdamemoryjogger.blob.core.windows.net/yard/rototiller%20electric.jpg',
    'leaf vacuum mulcher': 'https://cdamemoryjogger.blob.core.windows.net/yard/leaf%20vacuum%20mulcher.jpg',
    'hedge shear manual': 'https://cdamemoryjogger.blob.core.windows.net/yard/hedge%20shear%20manual.jpg',
    'branch lopper ratchet': 'https://cdamemoryjogger.blob.core.windows.net/yard/branch%20lopper%20ratchet.jpg',
    'wood chipper electric': 'https://cdamemoryjogger.blob.core.windows.net/yard/wood%20chipper%20electric.jpg',
    'log splitter electric': 'https://cdamemoryjogger.blob.core.windows.net/yard/log%20splitter%20electric.jpg',

    'pool ladder': 'https://cdamemoryjogger.blob.core.windows.net/yard/pool%20ladder.jpg',
    'pool cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/pool%20cover.jpg',
    'pool pump': 'https://cdamemoryjogger.blob.core.windows.net/yard/pool%20pump.jpg',
    'pool filter system': 'https://cdamemoryjogger.blob.core.windows.net/yard/pool%20filter%20system.jpg',
    'pool skimmer net': 'https://cdamemoryjogger.blob.core.windows.net/yard/pool%20skimmer%20net.jpg',
   

    'playground swing set': 'https://cdamemoryjogger.blob.core.windows.net/yard/playground%20swing%20set.jpg',
    'slide freestanding': 'https://cdamemoryjogger.blob.core.windows.net/yard/slide%20freestanding.jpg',
    'trampoline yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/trampoline%20yard.jpg',
    'trampoline safety net': 'https://cdamemoryjogger.blob.core.windows.net/yard/trampoline%20safety%20net.jpg',
    'basketball hoop portable': 'https://cdamemoryjogger.blob.core.windows.net/yard/basketball%20hoop%20portable.jpg',
    'basketball hoop in ground': 'https://cdamemoryjogger.blob.core.windows.net/yard/basketball%20hoop%20in%20ground.jpg',
    'soccer goal yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/soccer%20goal%20yard.jpg',
    'baseball practice net': 'https://cdamemoryjogger.blob.core.windows.net/yard/baseball%20practice%20net.jpg',
    'golf practice net': 'https://cdamemoryjogger.blob.core.windows.net/yard/golf%20practice%20net.jpg',
    'batting tee': 'https://cdamemoryjogger.blob.core.windows.net/yard/batting%20tee.jpg',
    'sand box children': 'https://cdamemoryjogger.blob.core.windows.net/yard/sand%20box%20children.jpg',
    'climbing dome': 'https://cdamemoryjogger.blob.core.windows.net/yard/climbing%20dome.jpg',
    'zip line kit yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/zip%20line%20kit%20yard.jpg',
    'tire swing tree': 'https://cdamemoryjogger.blob.core.windows.net/yard/tire%20swing%20tree.jpg',
    'picnic table wood': 'https://cdamemoryjogger.blob.core.windows.net/yard/picnic%20table%20wood.jpg',
    'picnic table umbrella': 'https://cdamemoryjogger.blob.core.windows.net/yard/picnic%20table%20umbrella.jpg',
    'outdoor chalkboard': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20chalkboard.jpg',
    'yard game cornhole': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20game%20cornhole.jpg',
    'yard game ladder toss': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20game%20ladder%20toss.jpg',
    'swing set anchor kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/swing%20set%20anchor%20kit.jpg',
    'trampoline ladder': 'https://cdamemoryjogger.blob.core.windows.net/yard/trampoline%20ladder.jpg',
    'trampoline cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/trampoline%20cover.jpg',
    'playhouse outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/playhouse%20outdoor.jpg',
    'sandbox cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/sandbox%20cover.jpg',
    'tree swing rope kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/tree%20swing%20rope%20kit.jpg',
    'yard obstacle course kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20obstacle%20course%20kit.jpg',
    'croquet set lawn': 'https://cdamemoryjogger.blob.core.windows.net/yard/croquet%20set%20lawn.jpg',
    'bocce ball set': 'https://cdamemoryjogger.blob.core.windows.net/yard/bocce%20ball%20set.jpg',
    'horseshoe game set': 'https://cdamemoryjogger.blob.core.windows.net/yard/horseshoe%20game%20set.jpg',
    'giant checkers set': 'https://cdamemoryjogger.blob.core.windows.net/yard/giant%20checkers%20set.jpg',
    'giant connect four': 'https://cdamemoryjogger.blob.core.windows.net/yard/giant%20connect%20four.jpg',
    'disc golf basket': 'https://cdamemoryjogger.blob.core.windows.net/yard/disc%20golf%20basket.jpg',
    'kick dart board yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/kick%20dart%20board%20yard.jpg',
    'badminton net set': 'https://cdamemoryjogger.blob.core.windows.net/yard/badminton%20net%20set.jpg',
    'volleyball net yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/volleyball%20net%20yard.jpg',
    'outdoor projector screen': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20projector%20screen.jpg',
    'projector outdoor rated': 'https://cdamemoryjogger.blob.core.windows.net/yard/projector%20outdoor%20rated.jpg',

    'landscape lighting solar': 'https://cdamemoryjogger.blob.core.windows.net/yard/landscape%20lighting%20solar.jpg',
    'path lights solar': 'https://cdamemoryjogger.blob.core.windows.net/yard/path%20lights%20solar.jpg',
    'spotlight ground': 'https://cdamemoryjogger.blob.core.windows.net/yard/spotlight%20ground.jpg',
    'string lights outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/string%20lights%20outdoor.jpg',
    'post cap lights': 'https://cdamemoryjogger.blob.core.windows.net/yard/post%20cap%20lights.jpg',
    'deck lights': 'https://cdamemoryjogger.blob.core.windows.net/yard/deck%20lights.jpg',
    'flood light motion': 'https://cdamemoryjogger.blob.core.windows.net/yard/flood%20light%20motion.jpg',
    'timer outdoor outlet': 'https://cdamemoryjogger.blob.core.windows.net/yard/timer%20outdoor%20outlet.jpg',
    'extension cord outdoor rated': 'https://cdamemoryjogger.blob.core.windows.net/yard/extension%20cord%20outdoor%20rated.jpg',
    'flag pole solar light': 'https://cdamemoryjogger.blob.core.windows.net/yard/flag%20pole%20solar%20light.jpg',
    'landscape spotlight LED': 'https://cdamemoryjogger.blob.core.windows.net/yard/landscape%20spotlight%20LED.jpg',
    'uplight tree': 'https://cdamemoryjogger.blob.core.windows.net/yard/uplight%20tree.jpg',
    'pathway light low voltage': 'https://cdamemoryjogger.blob.core.windows.net/yard/pathway%20light%20low%20voltage.jpg',
    'deck post light solar': 'https://cdamemoryjogger.blob.core.windows.net/yard/deck%20post%20light%20solar.jpg',
    'string lights cafe style': 'https://cdamemoryjogger.blob.core.windows.net/yard/string%20lights%20cafe%20style.jpg',
    'outdoor light pole': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20light%20pole.jpg',
    'flood light LED': 'https://cdamemoryjogger.blob.core.windows.net/yard/flood%20light%20LED.jpg',
    'motion floodlight solar': 'https://cdamemoryjogger.blob.core.windows.net/yard/motion%20floodlight%20solar.jpg',
    'smart outdoor plug': 'https://cdamemoryjogger.blob.core.windows.net/yard/smart%20outdoor%20plug.jpg',
    'outdoor extension reel large': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20extension%20reel%20large.jpg',

    'mailbox locking': 'https://cdamemoryjogger.blob.core.windows.net/yard/mailbox%20locking.jpg',
    'security camera outdoor wired': 'https://cdamemoryjogger.blob.core.windows.net/yard/security%20camera%20outdoor%20wired.jpg',
    'security camera outdoor wireless': 'https://cdamemoryjogger.blob.core.windows.net/yard/security%20camera%20outdoor%20wireless.jpg',
    'alarm siren outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/alarm%20siren%20outdoor.jpg',
    'doorbell camera exterior': 'https://cdamemoryjogger.blob.core.windows.net/yard/doorbell%20camera%20exterior.jpg',
    'motion detector outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/motion%20detector%20outdoor.jpg',
    'parcel drop box': 'https://cdamemoryjogger.blob.core.windows.net/yard/parcel%20drop%20box.jpg',
    'security camera floodlight combo': 'https://cdamemoryjogger.blob.core.windows.net/yard/security%20camera%20floodlight%20combo.jpg',
    'video doorbell outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/video%20doorbell%20outdoor.jpg',
    'gate keypad entry': 'https://cdamemoryjogger.blob.core.windows.net/yard/gate%20keypad%20entry.jpg',
    'driveway alarm sensor': 'https://cdamemoryjogger.blob.core.windows.net/yard/driveway%20alarm%20sensor.jpg',
    'yard siren strobe': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20siren%20strobe.jpg',

    'yard address sign': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20address%20sign.jpg',
    'flag pole yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/flag%20pole%20yard.jpg',
    'weather station yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/weather%20station%20yard.jpg',
    'wind chime decorative': 'https://cdamemoryjogger.blob.core.windows.net/yard/wind%20chime%20decorative.jpg',
    'yard art metal': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20art%20metal.jpg',
    'yard sign holder': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20sign%20holder.jpg',
    'address numbers metal': 'https://cdamemoryjogger.blob.core.windows.net/yard/address%20numbers%20metal.jpg',
    'decorative yard flag': 'https://cdamemoryjogger.blob.core.windows.net/yard/decorative%20yard%20flag.jpg',
    'bird feeder hanging': 'https://cdamemoryjogger.blob.core.windows.net/yard/bird%20feeder%20hanging.jpg',
    'bird feeder pole': 'https://cdamemoryjogger.blob.core.windows.net/yard/bird%20feeder%20pole.jpg',
    'bird seed storage bin': 'https://cdamemoryjogger.blob.core.windows.net/yard/bird%20seed%20storage%20bin.jpg',
    'squirrel guard baffle': 'https://cdamemoryjogger.blob.core.windows.net/yard/squirrel%20guard%20baffle.jpg',
    'bat house mount': 'https://cdamemoryjogger.blob.core.windows.net/yard/bat%20house%20mount.jpg',
    'bee hotel garden': 'https://cdamemoryjogger.blob.core.windows.net/yard/bee%20hotel%20garden.jpg',
    'weather vane decorative': 'https://cdamemoryjogger.blob.core.windows.net/yard/weather%20vane%20decorative.jpg',
    'metal wind spinner': 'https://cdamemoryjogger.blob.core.windows.net/yard/metal%20wind%20spinner.jpg',

    'compost bin yard': 'https://cdamemoryjogger.blob.core.windows.net/yard/compost%20bin%20yard.jpg',
    'trash can outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/trash%20can%20outdoor.jpg',
    'recycling bin outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/recycling%20bin%20outdoor.jpg',
    'compost tumbler': 'https://cdamemoryjogger.blob.core.windows.net/yard/compost%20tumbler.jpg',
    'outdoor storage deck box': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20storage%20deck%20box.jpg',
    'storage shed small': 'https://cdamemoryjogger.blob.core.windows.net/yard/storage%20shed%20small.jpg',
    'tool shed large': 'https://cdamemoryjogger.blob.core.windows.net/yard/tool%20shed%20large.jpg',
    'wood pile rack': 'https://cdamemoryjogger.blob.core.windows.net/yard/wood%20pile%20rack.jpg',
    'firewood cover tarp': 'https://cdamemoryjogger.blob.core.windows.net/yard/firewood%20cover%20tarp.jpg',
    'outdoor trash enclosure': 'https://cdamemoryjogger.blob.core.windows.net/yard/outdoor%20trash%20enclosure.jpg',
    'trash can shed': 'https://cdamemoryjogger.blob.core.windows.net/yard/trash%20can%20shed.jpg',
    'recycling container large': 'https://cdamemoryjogger.blob.core.windows.net/yard/recycling%20container%20large.jpg',
    'compost aerator tool': 'https://cdamemoryjogger.blob.core.windows.net/yard/compost%20aerator%20tool.jpg',
    'compost bin tumbler dual': 'https://cdamemoryjogger.blob.core.windows.net/yard/compost%20bin%20tumbler%20dual.jpg',
    'firewood rack outdoor': 'https://cdamemoryjogger.blob.core.windows.net/yard/firewood%20rack%20outdoor.jpg',
    'generator outdoor cover': 'https://cdamemoryjogger.blob.core.windows.net/yard/generator%20outdoor%20cover.jpg',
    'weatherproof storage chest large': 'https://cdamemoryjogger.blob.core.windows.net/yard/weatherproof%20storage%20chest%20large.jpg',

    'topsoil bags': 'https://cdamemoryjogger.blob.core.windows.net/yard/topsoil%20bags.jpg',
    'mulch bags': 'https://cdamemoryjogger.blob.core.windows.net/yard/mulch%20bags.jpg',
    'pine straw bales': 'https://cdamemoryjogger.blob.core.windows.net/yard/pine%20straw%20bales.jpg',
    'decorative river rock': 'https://cdamemoryjogger.blob.core.windows.net/yard/decorative%20river%20rock.jpg',
    'landscape timbers': 'https://cdamemoryjogger.blob.core.windows.net/yard/landscape%20timbers.jpg',
    'deck stain': 'https://cdamemoryjogger.blob.core.windows.net/yard/deck%20stain.jpg',
    'deck sealer waterproof': 'https://cdamemoryjogger.blob.core.windows.net/yard/deck%20sealer%20waterproof.jpg',
    'deck cleaner solution': 'https://cdamemoryjogger.blob.core.windows.net/yard/deck%20cleaner%20solution.jpg',
    'driveway sealant bucket': 'https://cdamemoryjogger.blob.core.windows.net/yard/driveway%20sealant%20bucket.jpg',
    'asphalt patch repair': 'https://cdamemoryjogger.blob.core.windows.net/yard/asphalt%20patch%20repair.jpg',
    'concrete crack filler tube': 'https://cdamemoryjogger.blob.core.windows.net/yard/concrete%20crack%20filler%20tube.jpg',
    'driveway marker reflectors': 'https://cdamemoryjogger.blob.core.windows.net/yard/driveway%20marker%20reflectors.jpg',
    'mailbox post anchor': 'https://cdamemoryjogger.blob.core.windows.net/yard/mailbox%20post%20anchor.jpg',
    'fence post caps': 'https://cdamemoryjogger.blob.core.windows.net/yard/fence%20post%20caps.jpg',
    'fence pickets spare': 'https://cdamemoryjogger.blob.core.windows.net/yard/fence%20pickets%20spare.jpg',
    'fence repair kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/fence%20repair%20kit.jpg',
    'compost thermometer': 'https://cdamemoryjogger.blob.core.windows.net/yard/compost%20thermometer.jpg',

    'drainage pump portable': 'https://cdamemoryjogger.blob.core.windows.net/yard/drainage%20pump%20portable.jpg',
    'backyard flood barrier': 'https://cdamemoryjogger.blob.core.windows.net/yard/backyard%20flood%20barrier.jpg',
    'yard tarp heavy duty': 'https://cdamemoryjogger.blob.core.windows.net/yard/yard%20tarp%20heavy%20duty.jpg',
    'ground anchor kit': 'https://cdamemoryjogger.blob.core.windows.net/yard/ground%20anchor%20kit.jpg',
    'tent canopy weights': 'https://cdamemoryjogger.blob.core.windows.net/yard/tent%20canopy%20weights.jpg',
    'portable stage platform': 'https://cdamemoryjogger.blob.core.windows.net/yard/portable%20stage%20platform.jpg',


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

    const IMAGE_STORAGE_ACCOUNT = 'https://cdamemoryjogger.blob.core.windows.net';
    const IMAGE_BLOB_CONTAINERS = [
        'images', 'bathroom', 'bedroom', 'basement', 'garage',
        'laundry', 'livingroom', 'loft', 'officestudy', 'shedstorageunit', 'yard'
    ];
    const blobNameManifests = {};
    let blobManifestsPromise = null;

    function getBlobBaseName(name) {
        const dotIndex = name.lastIndexOf('.');
        return dotIndex > 0 ? name.slice(0, dotIndex) : name;
    }

    function parseBlobListXml(xmlText) {
        const byName = new Map();
        const byBaseName = new Map();
        try {
            const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
            const nameNodes = doc.getElementsByTagName('Name');
            for (let i = 0; i < nameNodes.length; i++) {
                const name = nameNodes[i].textContent || '';
                if (!name) continue;
                byName.set(name.toLowerCase(), name);
                const baseKey = getBlobBaseName(name).toLowerCase();
                if (!byBaseName.has(baseKey)) {
                    byBaseName.set(baseKey, name);
                }
            }
        } catch (error) {
            console.warn('Failed to parse blob list XML', error);
        }
        return { byName, byBaseName };
    }

    async function fetchContainerManifest(container) {
        try {
            const response = await fetch(`${IMAGE_STORAGE_ACCOUNT}/${container}?restype=container&comp=list`);
            if (!response.ok) return parseBlobListXml('');
            const text = await response.text();
            return parseBlobListXml(text);
        } catch (error) {
            console.warn(`Failed to list blobs for container "${container}"`, error);
            return parseBlobListXml('');
        }
    }

    function loadBlobManifests() {
        if (!blobManifestsPromise) {
            blobManifestsPromise = Promise.all(
                IMAGE_BLOB_CONTAINERS.map((container) =>
                    fetchContainerManifest(container).then((manifest) => {
                        blobNameManifests[container] = manifest;
                    })
                )
            );
        }
        return blobManifestsPromise;
    }

    function resolveBlobCaseInsensitive(url) {
        try {
            const parsed = new URL(url);
            const segments = parsed.pathname.split('/').filter(Boolean);
            const container = segments[0];
            const blobPath = decodeURIComponent(segments.slice(1).join('/'));
            const manifest = blobNameManifests[container];
            if (manifest) {
                const exactName = manifest.byName.get(blobPath.toLowerCase());
                if (exactName) {
                    if (exactName === blobPath) return url;
                    const encodedPath = exactName.split('/').map(encodeURIComponent).join('/');
                    return `${parsed.origin}/${container}/${encodedPath}`;
                }
                const baseName = manifest.byBaseName.get(getBlobBaseName(blobPath).toLowerCase());
                if (baseName) {
                    const encodedPath = baseName.split('/').map(encodeURIComponent).join('/');
                    return `${parsed.origin}/${container}/${encodedPath}`;
                }
            }
        } catch (error) {
            console.warn('Failed to resolve blob case for URL', url, error);
        }
        return url;
    }

    const MAX_RENDERED_CARDS = 10;
    const SWIPE_START_INDEX = 0;
    const ACHIEVEMENT_ICONS = ['🌱', '👍', '💪', '😁', '😍', '🙌', '😎', '🏅', '✨', '🥳', '🚀', '🤖', '😸', '👽', '🌟', '🤯', '🔥', '🎉'];
    const ACHIEVEMENT_STEP = 10;
    const MILESTONE_STEP = 20;
    const CELEBRATION_BASE_CONFETTI = 32;
    const CELEBRATION_CONFETTI_STEP = 10;
    const CELEBRATION_EFFECTS = ['confetti', 'balloons', 'streamers', 'stars', 'sparks'];
    const roomQueues = new Map();
    const roomSwipeCounts = new Map();
    const roomSwipeHistory = new Map();
    const SWIPE_RIGHT_POINTS = 100;

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
        const url = ITEM_IMAGES[normalized] || '';
        return url ? resolveBlobCaseInsensitive(url) : '';
    }

    function normalizeItemKey(value) {
        return (value || '').toString().trim().toLowerCase().replace(/\s+/g, ' ');
    }

    loadBlobManifests();

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
        const swipeScoreboard = document.getElementById('swipe-scoreboard');
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
        normalizeScoreState(state);
        renderRooms(state.rooms);
        updateSubmissionData(state.rooms);
        updateRoomCounter(state.rooms);
        renderScoreboard();

        function normalizeScoreState(nextState) {
            if (typeof nextState.score !== 'number' || Number.isNaN(nextState.score)) {
                nextState.score = 0;
            }
            if (typeof nextState.rightStreak !== 'number' || Number.isNaN(nextState.rightStreak)) {
                nextState.rightStreak = 0;
            }
            if (typeof nextState.multiplier !== 'number' || Number.isNaN(nextState.multiplier)) {
                nextState.multiplier = 1;
            }
        }

        function getMultiplierForStreak(streak) {
            if (streak < 3) return 1;
            const bonusSteps = 1 + Math.floor((streak - 3) / 3);
            return 2 ** bonusSteps;
        }

        function renderScoreboard() {
            if (!(swipeScoreboard instanceof HTMLElement)) return;
            swipeScoreboard.textContent = `Score: ${state.score} · Multiplier: ${state.multiplier}x · Right streak: ${state.rightStreak}`;
        }

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
                if (!saved) return { rooms: [], score: 0, rightStreak: 0, multiplier: 1 };
                const parsed = JSON.parse(saved);
                if (!Array.isArray(parsed.rooms)) return { rooms: [], score: 0, rightStreak: 0, multiplier: 1 };
                return {
                    score: typeof parsed.score === 'number' ? parsed.score : 0,
                    rightStreak: typeof parsed.rightStreak === 'number' ? parsed.rightStreak : 0,
                    multiplier: typeof parsed.multiplier === 'number' ? parsed.multiplier : 1,
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
                return { rooms: [], score: 0, rightStreak: 0, multiplier: 1 };
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

            tip.className = 'helper-text swipe-hint-arrows';

            const leftArrow = document.createElement('span');
            leftArrow.className = 'swipe-hint-arrow swipe-hint-arrow--left';
            leftArrow.textContent = '←';
            leftArrow.setAttribute('aria-label', 'Swipe left to skip');
            leftArrow.title = 'Swipe left to skip';

            const rightArrow = document.createElement('span');
            rightArrow.className = 'swipe-hint-arrow swipe-hint-arrow--right';
            rightArrow.textContent = '→';
            rightArrow.setAttribute('aria-label', 'Swipe right to add');
            rightArrow.title = 'Swipe right to add';

            tip.append(leftArrow, rightArrow);

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

            // Start from the 30th item (index 29), but fall back to start if not enough items.
            const startIndex = availableItems.length > SWIPE_START_INDEX ? SWIPE_START_INDEX : 0;
            const startItems = availableItems.slice(startIndex);

            const renderableItems = startItems.slice(0, MAX_RENDERED_CARDS);
            roomQueues.set(roomId, startItems.slice(MAX_RENDERED_CARDS));
            if (!roomSwipeCounts.has(roomId)) {
                roomSwipeCounts.set(roomId, 0);
            }

            panel.dataset.active = 'true';
            panel.dataset.roomId = roomId;

            const deck = panel.querySelector('.swipe-deck');
            const status = panel.querySelector('.swipe-status');

            if (!(deck instanceof HTMLElement) || !(status instanceof HTMLElement)) return;
            deck.innerHTML = '';

            if (!startItems.length) {
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
                `${startItems.length} item${startItems.length === 1 ? '' : 's'} to review`,
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
                history.push({
                    item,
                    direction,
                    queuedItem,
                    previousScore: state.score,
                    previousRightStreak: state.rightStreak,
                    previousMultiplier: state.multiplier
                });
                roomSwipeHistory.set(roomId, history);

                if (direction === 'have') {
                    state.rightStreak += 1;
                    state.multiplier = getMultiplierForStreak(state.rightStreak);
                    state.score += SWIPE_RIGHT_POINTS * state.multiplier;
                } else {
                    state.score = 0;
                    state.rightStreak = 0;
                    state.multiplier = 1;
                }

                renderScoreboard();
                saveState(state);
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
            }

            if (lastSwipe) {
                state.score = typeof lastSwipe.previousScore === 'number' ? lastSwipe.previousScore : 0;
                state.rightStreak = typeof lastSwipe.previousRightStreak === 'number' ? lastSwipe.previousRightStreak : 0;
                state.multiplier = typeof lastSwipe.previousMultiplier === 'number' ? lastSwipe.previousMultiplier : 1;
                renderScoreboard();
            }

            saveState(state);

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


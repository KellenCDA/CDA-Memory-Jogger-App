(function () {
    const STORAGE_KEY = 'joggerData';
    const DEFAULT_CATEGORY = 'Other';
    const ITEM_OPTIONS = {
        Kitchen: ['refrigerator', 'refrigerator shelves', 'refrigerator drawers', 'refrigerator door bins', 'freezer', 'freezer shelves', 'freezer drawers', 'ice maker', 'ice bin', 'water dispenser',
'cooktop', 'oven', 'oven racks', 'oven drawer', 'range hood', 'range hood filter', 'microwave', 'microwave turntable', 'dishwasher',
'dishwasher racks', 'dishwasher utensil basket', 'garbage disposal', 'kitchen sink', 'sink faucet', 'sprayer nozzle', 'soap dispenser', 'water filter system', 'kitchen island', 'bar stools', 'lazy susan', 'drawer organizers', 'cutlery tray', 'spice rack', 'wine rack', 'trash can', 'recycling bin',
'compost bin', 'paper towel holder', 'dish rack', 'drying mat', 'fire extinguisher', 'step ladder', 'ceiling light fixture', 'window blinds', 'curtains', 'curtain rod',

'toaster', 'toaster oven', 'air fryer', 'slow cooker', 'pressure cooker', 'rice cooker', 'electric kettle', 'coffee maker', 'espresso machine', 'coffee grinder',
'french press', 'single serve coffee maker', 'blender', 'immersion blender', 'stand mixer', 'hand mixer', 'food processor', 'hand chopper', 'juicer', 'electric griddle',
'waffle maker', 'panini press', 'indoor grill', 'electric skillet', 'bread maker', 'sous vide cooker', 'wine cooler', 'beverage fridge', 'kitchen scale',
'digital thermometer', 'knife block', 'chef knife', 'paring knife', 'bread knife', 'carving knife', 'utility knife', 'steak knives', 'kitchen shears', 'knife sharpener',

'cutting board wood', 'cutting board plastic', 'cutting board bamboo', 'mixing bowl set', 'measuring cups', 'measuring spoons', 'colander', 'mesh strainer', 'salad spinner',
'baking sheet', 'cookie sheet', 'muffin pan', 'cake pan', 'springform pan', 'loaf pan', 'pie dish', 'roasting pan', 'broiler pan', 'cooling rack',
'pizza stone', 'casserole dish', 'dutch oven', 'stock pot', 'saucepan', 'frying pan', 'nonstick skillet', 'cast iron skillet', 'wok', 'grill pan',
'saute pan', 'pot lids', 'splatter screen', 'trivet', 'spatula', 'whisk', 'ladle', 'slotted spoon', 'serving spoon',

'tongs', 'pasta server', 'turner', 'wooden spoon', 'can opener', 'bottle opener', 'wine opener', 'garlic press', 'vegetable peeler', 'box grater',
'zester', 'citrus juicer', 'meat tenderizer', 'potato masher', 'ice cream scoop', 'melon baller', 'apple corer', 'mandoline slicer', 'basting brush', 'flour sifter',
'aluminum foil', 'plastic wrap', 'parchment paper', 'wax paper', 'food storage bags', 'vacuum sealer', 'food storage containers', 'glass containers', 'plastic containers', 'spice jars',
'salt shaker', 'pepper shaker', 'salt grinder', 'pepper grinder', 'oil bottle', 'vinegar bottle', 'sugar canister', 'flour canister', 'coffee canister', 'tea canister',

'bread box', 'napkin holder', 'dish towels', 'hand towels', 'oven mitts', 'pot holders', 'apron', 'tablecloth', 'placemats', 'cloth napkins',
'kitchen rug', 'anti fatigue mat', 'wall clock', 'wall art', 'bulletin board', 'cookbook stand', 'cookbooks', 'recipe box', 'tablet stand', 'charging station',
'smart speaker', 'television', 'bar cart', 'china cabinet', 'buffet table', 'sideboard', 'dining table', 'dining chairs', 'serving tray', 'serving platter',
'serving bowl', 'gravy boat', 'plate set', 'salad plates', 'dinner plates', 'bowls', 'cereal bowls', 'soup bowls', 'mugs', 'coffee cups',

'tea cups', 'saucers', 'drinking glasses', 'wine glasses', 'champagne flutes', 'cocktail glasses', 'shot glasses', 'water pitcher', 'ice bucket', 'cake stand',
'tiered tray', 'butter dish', 'sugar bowl', 'cream pitcher', 'utensil crock', 'paper towel rolls', 'dish soap', 'hand soap', 'cleaning spray', 'disinfecting wipes',
'sponges', 'scrub brushes', 'dish brush', 'broom', 'dustpan', 'mop', 'mop bucket', 'vacuum', 'steam mop', 'trash bags',
'recycling bags', 'light bulbs', 'extension cord', 'power strip', 'smoke detector', 'carbon monoxide detector', 'pantry shelves', 'canned goods', 'dry pasta', 'rice bags',

'flour bags', 'sugar bags', 'baking powder', 'baking soda', 'cornstarch', 'cooking oil', 'olive oil', 'vegetable oil', 'soy sauce', 'hot sauce',
'ketchup', 'mustard', 'mayonnaise', 'salad dressing', 'peanut butter', 'jam', 'honey', 'cereal boxes', 'granola', 'oatmeal',
'snack chips', 'crackers', 'cookies', 'nuts', 'dried fruit', 'spice containers', 'tea boxes', 'coffee bags', 'paper plates', 'plastic cups',
'plastic utensils', 'can rack', 'rolling cart', 'storage bins', 'label maker', 'labels', 'drawer liners', 'cabinet liners', 'sink caddy', 'water bottles',
'travel mugs', 'thermos', 'measuring scale', 'timer', 'oven thermometer', 'meat thermometer', 'grill thermometer', 'cooler', 'ice packs', 'picnic basket',

'serving tongs', 'salad tongs', 'cake server', 'pie server', 'ladle set', 'utensil set', 'mixing spoon set', 'skillet lid', 'stock pot lid', 'pressure cooker lid',
'slow cooker insert', 'slow cooker lid', 'air fryer basket', 'air fryer tray', 'microwave cover', 'microwave rack', 'dishwasher detergent', 'rinse aid', 'garbage bags box', 'food clips',
'chip clips', 'bread ties', 'rolling pin', 'pastry mat', 'cookie cutters', 'decorating tips', 'icing spatula', 'cooling mat', 'spice grinder', 'mortar and pestle',
'herb scissors', 'oil sprayer', 'butcher block', 'knife magnet strip', 'dish warmer', 'warming drawer', 'cabinet locks', 'child safety latches', 'drawer slides', 'cabinet handles',
'cabinet knobs', 'water filter pitcher', 'replacement filters', 'ice trays', 'freezer bins', 'freezer bags', 'produce bins', 'egg holder', 'butter keeper', 'condiment rack',

'lazy susan turntable', 'under sink organizer', 'pull out trash bin', 'recycling container', 'compost pail', 'baking rack', 'sheet pan rack', 'cooling shelf', 'pan organizer', 'lid organizer',
'pot rack', 'hanging pot rack', 'wine glass rack', 'mug tree', 'plate rack', 'drawer dividers', 'silverware set', 'flatware set', 'steak knife set', 'serving fork',
'serving ladle', 'slotted turner', 'solid turner', 'skimmer', 'straining spoon', 'pancake spatula', 'fish spatula', 'pizza cutter', 'canister set', 'utensil holder',
'knife case', 'appliance covers', 'refrigerator magnets', 'calendar', 'message board', 'key holder', 'storage jars', 'cookie jar', 'utility scissors', 'kitchen flashlight',
'backup refrigerator', 'mini fridge', 'deep freezer', 'gas range', 'electric range', 'induction cooktop', 'double wall oven', 'trash compactor', 'wine fridge', 'beverage cooler',

'kegerator', 'coffee urn', 'water boiler', 'countertop mixer', 'immersion circulator', 'food dehydrator', 'meat slicer', 'pasta maker', 'grain mill', 'electric can opener',
'jar opener', 'knife set', 'cleaver', 'fillet knife', 'boning knife', 'carving fork', 'kitchen mallet', 'griddle pan', 'crepe pan', 'omelet pan',
'sauce whisk', 'balloon whisk', 'dough scraper', 'bench scraper', 'pastry brush', 'pastry blender', 'baking molds', 'souffle dish', 'ramekins', 'custard cups',
'measuring jug', 'probe thermometer', 'timer clock', 'under cabinet radio', 'security camera', 'smart display', 'floor mat', 'area rug', 'pantry door rack', 'over door organizer',
'storage baskets', 'wire baskets', 'plastic bins', 'glass jars', 'spice tins', 'tea kettle', 'whistling kettle', 'coffee mugs set', 'travel cup', 'insulated tumbler',

'water carafe', 'pitcher with lid', 'salad bowl', 'mixing pitcher', 'batter bowl', 'sifter', 'strainer set', 'colander set', 'food mill', 'ricer',
'egg slicer', 'cheese slicer', 'canisters with lids', 'airtight containers', 'bread basket', 'fruit bowl', 'banana hanger', 'paper towel stand', 'napkin rings', 'table runner',
'chair cushions', 'seat covers', 'high chair', 'booster seat', 'pet food bin', 'pet bowls', 'step trash can', 'touchless trash can', 'cabinet shelf riser', 'drawer spice organizer',
'plate charger set', 'serving utensils set', 'butcher knives', 'cut resistant gloves', 'oven rack guards', 'sink drying rack', 'dish drainer tray', 'kitchen storage cabinet', 'shelf liner', 'cabinet shelf liner',
'drawer liner', 'under sink mat', 'sink organizer rack', 'pull out cabinet organizer', 'corner cabinet organizer', 'cabinet basket insert', 'stackable pantry bins', 'clear storage bins', 'food storage turntable', 'pantry label set',

'chalkboard labels', 'measuring spoon set stainless steel', 'measuring cup set stainless steel', 'nested mixing bowls', 'collapsible colander', 'silicone baking mat', 'silicone spatula set', 'wooden utensil set', 'stainless steel utensil set', 'nylon cooking utensil set',
'ladle holder', 'spoon rest', 'utensil drawer organizer', 'knife drawer insert', 'in drawer knife block', 'knife roll bag', 'pot lid holder', 'cookware organizer rack', 'under cabinet mug hooks', 'hanging fruit basket',
'wall mounted spice rack', 'countertop spice carousel', 'oil and vinegar cruet set', 'salt cellar', 'pepper mill', 'butter crock', 'bread slicing guide', 'cake carrier', 'pie carrier', 'cupcake carrier',
'thermal casserole carrier', 'insulated food carrier', 'serving caddy', 'condiment caddy', 'picnic cooler', 'rolling cooler', 'ice chest', 'food storage jar set', 'glass canister set', 'ceramic canister set',
'stainless steel canister set', 'airtight cereal containers', 'flour storage bin', 'sugar storage bin', 'rice dispenser', 'pet food storage container', 'beverage dispenser', 'drink dispenser stand', 'coffee pod holder', 'coffee pod drawer',

'espresso tamper', 'milk frothing pitcher', 'coffee knock box', 'tea infuser', 'tea kettle electric', 'tea kettle stovetop', 'water filtration pitcher', 'replacement water filters', 'refrigerator deodorizer', 'freezer thermometer',
'pantry thermometer', 'humidity absorber', 'food scale digital', 'kitchen timer digital', 'wall mounted timer', 'clip on book light', 'cookbook shelf', 'recipe binder', 'tablet wall mount', 'charging dock',
'surge protector', 'extension cord heavy duty', 'step stool folding', 'rolling kitchen cart', 'utility cart', 'bar serving cart', 'wine bottle opener set', 'wine aerator', 'wine stopper set', 'champagne stopper',
'ice scoop', 'bar spoon', 'cocktail shaker', 'cocktail strainer', 'jigger', 'mudler', 'drink mixing glass', 'flatware set stainless steel', 'gold flatware set', 'serving fork stainless steel',
'serving spoon stainless steel', 'butter knives', 'seafood forks', 'soup spoons', 'dessert spoons', 'salad forks', 'dinner forks', 'dinner knives', 'teaspoons', 'tablespoons',

'steak knife block', 'china dinner set', 'stoneware dinner set', 'porcelain dinner set', 'melamine plate set', 'charger plates', 'glass salad bowl', 'wood salad bowl', 'ceramic serving bowl', 'pasta serving bowl',
'mixing pitcher glass', 'water goblets', 'beer mugs', 'pint glasses', 'highball glasses', 'lowball glasses', 'martini glasses', 'whiskey glasses', 'decanter', 'wine decanter',
'carafe', 'coffee carafe', 'tea pot', 'gravy ladle', 'cake knife', 'cake lifter', 'pastry server', 'bread basket liner', 'table centerpiece', 'decorative tray',
'countertop tray', 'fruit storage basket', 'banana tree stand', 'mug set ceramic', 'travel mug stainless steel', 'insulated water bottle', 'thermos stainless steel', 'dish soap dispenser', 'hand soap dispenser', 'cleaning caddy',
'all purpose cleaner', 'glass cleaner', 'stainless steel cleaner', 'granite cleaner', 'wood cleaner', 'oven cleaner', 'dishwasher cleaner', 'garbage disposal cleaner', 'drain cleaner', 'scrub sponges',

'heavy duty scrub pads', 'microfiber cloths', 'cleaning rags', 'paper towel pack', 'trash bag box', 'recycling bin liner', 'compostable bags', 'broom and dustpan set', 'push broom', 'floor mop',
'spray mop', 'steam cleaner', 'handheld vacuum', 'cordless vacuum', 'floor sweeper', 'rubber gloves', 'cleaning brush set', 'bottle brush', 'straw cleaning brush', 'sink plunger',
'drain snake', 'tool kit small', 'screwdriver set', 'hammer', 'measuring tape', 'level', 'stud finder', 'wall anchors', 'picture hanging kit', 'light bulb pack',
'cabinet light bulbs', 'under cabinet light strip', 'motion sensor light', 'smoke alarm', 'carbon monoxide alarm', 'fire blanket', 'first aid kit', 'bulk food storage bucket', 'emergency food supply kit', 'cooling ice packs',
'water storage containers', 'folding chairs', 'extra dining chairs', 'bar stool cushions', 'chair floor protectors', 'table leaf insert', 'buffet warming trays', 'chafing dish set', 'fondue pot', 'raclette grill',

'portable butane stove', 'butane fuel canisters', 'propane torch', 'kitchen torch', 'smoker box', 'meat carving station', 'electric knife', 'knife sharpening stone', 'knife honing rod', 'cast iron cleaner',
'cookware cleaner', 'dish drying cabinet', 'over sink drying rack', 'cabinet door organizer', 'pantry step ladder', 'folding utility table', 'rolling island cart', 'appliance sliding tray', 'appliance lift', 'cabinet pull out shelf',
'spice drawer insert', 'foil dispenser', 'wrap organizer', 'bag storage organizer', 'measuring conversion chart', 'grocery bag holder', 'reusable grocery bags', 'insulated grocery bags', 'cooler tote', 'picnic tableware set',
'plastic serving trays', 'paper napkin pack', 'cloth napkin rings', 'placemat set', 'table protector pad', 'kitchen wall mirror', 'decorative wall shelf', 'command hooks', 'adhesive wall hooks', 'drawer handle replacements',
'cabinet hinge replacements', 'cabinet bumpers', 'door draft stopper', 'floor protector pads', 'appliance thermometer', 'oven liner', 'stove burner covers', 'drip pans', 'range control knobs', 'replacement oven rack',

'refrigerator water line', 'ice maker water line', 'appliance cleaning wipes', 'granite sealer', 'cutting board oil', 'dish drying towel rack', 'sink splash guard', 'faucet aerator', 'replacement faucet cartridge', 'plumbing repair kit',
'pipe wrench', 'adjustable wrench', 'allen wrench set', 'socket set', 'cord organizer', 'appliance cord wrap', 'cabinet light remote', 'battery pack', 'step stool small', 'rolling pantry cart',
'produce storage bags', 'herb keeper', 'onion storage bin', 'potato storage bin', 'garlic keeper', 'bread proofing basket', 'dough rolling mat', 'pastry ring set', 'baking thermometer', 'oven mitt rack',
'pot rack hooks', 'under cabinet basket', 'cabinet shelf dividers', 'kitchen drawer bin set', 'flatware tray expandable', 'knife guard set', 'pan handle covers', 'microwave splatter cover', 'food cover dome', 'mesh food tent',

'condiment squeeze bottles', 'syrup dispenser', 'honey dispenser', 'sugar dispenser', 'salt box', 'pepper box', 'kitchen scissors heavy duty', 'kitchen twine', 'butcher paper roll', 'freezer paper roll',
'vacuum sealer rolls', 'storage lid organizer', 'pan protector pads', 'glass cooktop cleaner', 'cooktop scraper', 'sink strainer basket', 'garbage disposal splash guard', 'under sink storage shelf', 'sink drain stopper', 'dish drying clips',
'shelf risers', 'stackable cooling racks', 'mixing bowl lids', 'collapsible storage bowls', 'measuring spoon leveler', 'kitchen scale analog', 'thermometer probe cover', 'timer magnetic', 'kitchen whiteboard', 'magnetic grocery list pad',
'cookbook holder stand', 'tablet recipe stand', 'utensil hooks rail', 'under cabinet paper towel holder', 'counter paper towel holder', 'dish sponge holder', 'soap pump tray', 'sink brush holder', 'cleaning glove clips', 'broom holder wall mount',

'mop holder wall mount', 'dustpan holder', 'cleaning supply rack', 'trash can deodorizer', 'recycling sorter bins', 'compost filter replacements', 'drawer freshener', 'cabinet freshener', 'air purifier small', 'kitchen fan',
'ceiling fan light kit', 'light dimmer switch', 'smart light bulb', 'backup batteries', 'surge protector strip', 'extension cord reel', 'folding step ladder large', 'fire resistant safe', 'document organizer box', 'recipe storage box',
'party serving bowl set', 'buffet serving utensils', 'warming tray electric', 'electric carving knife', 'cheese board', 'cheese knife set', 'charcuterie board', 'serving slate board', 'cake decorating kit', 'baking decorating kit',
'silicone cupcake liners', 'reusable baking cups', 'oven thermometer analog', 'freezer thermometer analog', 'pantry storage rack', 'spice drawer labels', 'pan rack vertical', 'cookie cooling tower', 'knife sharpening guide', 'meat thermometer digital',

'cutting board stand', 'knife storage block empty', 'drawer knife organizer bamboo', 'rolling pin marble', 'rolling pin wood', 'flour shaker', 'powdered sugar shaker', 'oil sprayer bottle', 'vinegar cruet', 'salad dressing shaker',
'grill press', 'panini weight', 'cast iron press', 'bacon press', 'splatter guard large', 'splatter guard small', 'pot clip strainer', 'collapsible funnel', 'kitchen funnel set', 'measuring cup glass',
'measuring cup plastic', 'oven rack pull tool', 'microwave plate cover', 'dishwasher magnet clean dirty', 'kitchen timer mechanical', 'drawer knife tray', 'refrigerator bin organizer', 'freezer divider', 'fridge liner mats', 'ice cube storage bin',
'produce wash bowl', 'vegetable scrub brush', 'fruit corer tool', 'avocado slicer', 'egg separator', 'egg poacher pan', 'pancake ring set', 'waffle batter dispenser', 'gravy separator', 'fat separator cup',
'salad dressing mixer', 'herb stripping tool', 'meat shredder claws', 'taco holder stand', 'baking sheet rack', 'spice measuring spoons', 'citrus reamer', 'garlic slicer', 'herb chopper', 'kitchen storage tote',

'plastic drawer bins', 'glass storage bottles', 'kitchen storage crates', 'cabinet organizer bins', 'refrigerator lock', 'oven lock', 'cabinet child lock', 'drawer child lock', 'step trash liner refill', 'odor absorber box',
'kitchen air freshener', 'dish drying cabinet rack', 'cutting mat flexible', 'serving bowl large', 'serving bowl small', 'mixing bowl stainless', 'mixing bowl glass', 'mixing bowl ceramic', 'frying pan stainless', 'frying pan nonstick',
'saucepan stainless', 'saucepan nonstick', 'stock pot stainless', 'stock pot enamel', 'tea kettle stainless', 'tea kettle glass', 'coffee storage jar', 'sugar storage jar', 'flour storage jar', 'rice storage jar',
'utensil crock ceramic', 'utensil crock stainless', 'knife sharpening kit', 'food thermometer instant read', 'kitchen command center board', 'magnetic spice tins', 'magnetic knife holder', 'drawer utensil tray', 'kitchen apron hooks', 'rolling storage bin'
],
        'Living room': ['sofa', 'sectional sofa', 'loveseat', 'accent chair', 'recliner chair', 'power recliner', 'ottoman', 'storage ottoman', 'coffee table', 'end table',
'side table', 'console table', 'sofa table', 'media console', 'television stand', 'entertainment center', 'bookcase', 'bookshelf', 'display cabinet', 'curio cabinet',
'china cabinet', 'wall mounted shelves', 'floating shelves', 'corner shelf', 'cabinet with doors', 'storage cabinet', 'drawer chest', 'accent cabinet', 'bar cabinet', 'rolling bar cart',
'television', 'flat screen television', 'smart television', 'streaming device', 'blu ray player', 'dvd player', 'sound bar', 'subwoofer', 'surround sound speakers', 'speaker stands',
'home theater receiver', 'gaming console', 'game controller', 'virtual reality headset', 'cable box', 'satellite receiver', 'media remote', 'universal remote', 'remote control organizer', 'router',

'modem', 'wifi extender', 'smart speaker', 'floor lamp', 'table lamp', 'lamp shade', 'light bulbs', 'ceiling light fixture', 'ceiling fan', 'fan remote',
'area rug', 'throw rug', 'rug pad', 'carpet runner', 'window curtains', 'curtain rod', 'window blinds', 'window shades', 'valance', 'curtain tie backs',
'wall art', 'framed artwork', 'canvas art', 'wall mirror', 'decorative mirror', 'wall clock', 'picture frames', 'photo albums', 'decorative shelves', 'wall sconces',
'throw pillows', 'decorative pillows', 'seat cushions', 'throw blankets', 'quilt', 'afghan blanket', 'floor cushions', 'bean bag chair', 'folding chair', 'stool',

'fireplace', 'electric fireplace', 'fireplace screen', 'fireplace tools', 'fireplace log holder', 'mantle decor', 'mantle clock', 'candle holders', 'candles', 'lantern',
'indoor plant', 'plant stand', 'planter pot', 'artificial plant', 'floor vase', 'decorative vase', 'decorative bowl', 'coffee table books', 'magazine rack', 'magazines',
'board games', 'card games', 'puzzle box', 'playing cards', 'remote batteries', 'extension cord', 'power strip', 'surge protector', 'charging station', 'phone charger',
'tablet charger', 'laptop charger', 'laptop', 'tablet', 'wireless headphones', 'headphones', 'bluetooth speaker', 'cd collection', 'dvd collection', 'game disc case',

'storage baskets', 'woven baskets', 'decorative boxes', 'storage bins', 'blanket chest', 'toy storage bin', 'toy chest', 'coat rack', 'umbrella stand', 'entry bench',
'shoe rack', 'hall tree', 'console mirror', 'accent table lamp', 'floor cushion', 'window seat cushion', 'curtain rings', 'curtain clips', 'light dimmer switch', 'smart light bulb',
'air purifier', 'humidifier', 'dehumidifier', 'space heater', 'tower fan', 'standing fan', 'portable air conditioner', 'thermostat', 'security camera', 'alarm panel',
'door sensor', 'motion sensor', 'smoke detector', 'carbon monoxide detector', 'fire extinguisher', 'first aid kit', 'tool kit small', 'screwdriver set', 'hammer', 'measuring tape',

'wall hooks', 'coat hooks', 'adhesive hooks', 'command strips', 'picture hanging kit', 'wall anchors', 'decorative tray', 'serving tray', 'drink coasters', 'coaster holder',
'barware set', 'wine glasses', 'cocktail glasses', 'drink pitcher', 'ice bucket', 'bar tool set', 'wine opener', 'wine rack', 'bottle stopper', 'liquor cabinet contents',
'storage ottoman tray', 'furniture covers', 'sofa cover', 'chair cover', 'armrest covers', 'slipcovers', 'fabric protector spray', 'lint roller', 'hand vacuum', 'vacuum cleaner',
'carpet cleaner machine', 'broom', 'dustpan', 'floor mop', 'cleaning caddy', 'glass cleaner', 'all purpose cleaner', 'microfiber cloths', 'paper towels', 'trash can',

'recycling bin', 'trash bags', 'drawer organizer', 'cabinet shelf liner', 'furniture polish', 'wood cleaner', 'fabric freshener spray', 'air freshener', 'scent diffuser', 'essential oil diffuser',

'sectional sofa cushions', 'sofa legs', 'sofa accent pillows', 'sofa throw blanket', 'loveseat cushions', 'recliner remote', 'recliner power cord', 'ottoman tray', 'coffee table drawer organizer', 'end table lamp',
'side table decor', 'console table decor', 'media cabinet shelves', 'entertainment center drawers', 'bookcase decor', 'display cabinet lighting', 'curio cabinet shelves', 'storage cabinet baskets', 'drawer chest liners', 'accent cabinet hardware',
'bar cabinet glassware', 'bar cart wheels', 'television wall mount', 'tv wall bracket', 'streaming remote', 'blu ray discs', 'dvd storage rack', 'sound bar remote', 'speaker cables', 'receiver remote',
'gaming headset', 'gaming chair', 'controller charging dock', 'vr controllers', 'cable management box', 'router stand', 'modem cables', 'wifi booster', 'smart plug', 'smart home hub',
'floor lamp bulbs', 'table lamp bulbs', 'lamp finial', 'ceiling fan blades', 'fan light kit', 'area rug cleaner', 'rug corner grips', 'carpet stain remover', 'window curtain rods', 'curtain rod brackets',

'window shade pull', 'valance rod', 'wall art hooks', 'canvas hanging kit', 'mirror mounting kit', 'clock batteries', 'picture frame stand', 'photo storage box', 'decorative shelf brackets', 'wall sconce bulbs',
'throw pillow inserts', 'pillow covers', 'seat cushion covers', 'blanket storage basket', 'quilt storage bag', 'bean bag refill', 'folding chair pads', 'stool cushion', 'fireplace grate', 'fireplace poker',
'fireplace brush', 'fireplace shovel', 'fireplace tongs', 'fireplace ash bucket', 'mantle garland', 'candle snuffer', 'lantern candles', 'plant watering can', 'plant fertilizer', 'plant mister',
'artificial plant decor', 'vase filler stones', 'decorative bowl filler', 'coffee table tray', 'magazine holder', 'board game organizer', 'card shuffler', 'puzzle mat', 'battery storage box', 'extension cord reel',

'charging cable organizer', 'laptop stand', 'tablet case', 'wireless headphone case', 'cd storage case', 'dvd binder', 'game storage shelf', 'woven storage basket', 'decorative storage trunk', 'toy organizer bins',
'coat hanger rack', 'umbrella holder tray', 'entry bench cushion', 'shoe storage cabinet', 'hall tree hooks', 'console drawer liner', 'accent lamp shade', 'window seat throw pillow', 'curtain tieback hooks', 'light switch cover',
'air purifier filter', 'humidifier filter', 'dehumidifier bucket', 'space heater remote', 'tower fan remote', 'portable air conditioner hose', 'thermostat cover', 'security camera mount', 'alarm keypad', 'motion detector mount',
'smoke detector batteries', 'carbon monoxide detector batteries', 'fire extinguisher bracket', 'first aid refill kit', 'tool storage box', 'measuring tape case', 'wall hook rack', 'adhesive strip refills', 'picture wire', 'decor tray liner',

'drink coaster set', 'coaster storage box', 'bar tool rack', 'wine glass rack', 'bottle opener', 'liquor decanter', 'storage ottoman lid', 'furniture leg pads', 'sofa arm tray', 'chair arm covers',
'slipcover clips', 'fabric stain remover', 'lint brush', 'handheld steamer', 'upright vacuum', 'vacuum bags', 'carpet cleaning solution', 'broom holder', 'mop bucket', 'cleaning gloves',
'glass spray bottle', 'multi surface wipes', 'dusting wand', 'paper towel holder', 'trash can liner refill', 'recycling sorter bins', 'drawer divider set', 'cabinet organizer tray', 'wood polish cloth', 'fabric protector wipes',
'air freshener refill', 'essential oil set', 'scent diffuser reeds', 'throw blanket storage bag', 'decorative pillow basket', 'game console stand', 'media shelf riser', 'remote finder device', 'smart bulb hub', 'bluetooth remote',

'wall mounted cabinet', 'floating media shelf', 'corner display shelf', 'accent mirror', 'floor standing mirror', 'ottoman storage bin', 'coffee table book set', 'decorative lantern set', 'floor plant stand', 'plant drip tray',
'indoor tree planter', 'artificial tree decor', 'large decorative vase', 'ceramic decor bowl', 'magazine subscription box', 'board game storage rack', 'card deck holder', 'puzzle storage box', 'charging dock station', 'laptop storage sleeve',
'tablet charging cable', 'headphone stand', 'bluetooth speaker stand', 'cd display rack', 'dvd display shelf', 'game console cooling fan', 'router cable organizer', 'wifi signal booster', 'lamp timer switch', 'light bulb storage case',
'ceiling fan remote holder', 'rug storage roll', 'window blind cleaner', 'curtain cleaning brush', 'art cleaning cloth', 'picture frame cleaner', 'mirror cleaning spray', 'wall decor stencil', 'candle storage box', 'plant care kit',

'decorative stone set', 'coffee table organizer', 'magazine subscription rack', 'game night storage box', 'battery organizer case', 'cord management clips', 'charging hub', 'laptop cooling pad', 'tablet keyboard', 'wireless mouse',
'headphone extension cable', 'bluetooth transmitter', 'cd cleaner kit', 'dvd cleaning kit', 'game controller skins', 'media cabinet lock', 'decorative storage chest', 'toy storage basket', 'coat hanger set', 'umbrella cover',
'entryway rug', 'shoe polish kit', 'hallway bench', 'hallway storage cabinet', 'accent table decor', 'floor lamp dimmer', 'table lamp timer', 'window draft stopper', 'curtain blackout liner', 'decorative curtain rod ends',
'air purifier replacement filter', 'humidifier cleaning kit', 'dehumidifier filter', 'space heater safety guard', 'tower fan cleaning brush', 'portable air conditioner cover', 'thermostat battery', 'security camera cable', 'alarm system battery', 'motion sensor battery',

'sectional sofa cushions', 'sofa legs', 'sofa accent pillows', 'sofa throw blanket', 'loveseat cushions', 'recliner remote', 'recliner power cord', 'ottoman tray', 'coffee table drawer organizer', 'end table lamp',
'side table decor', 'console table decor', 'media cabinet shelves', 'entertainment center drawers', 'bookcase decor', 'display cabinet lighting', 'curio cabinet shelves', 'storage cabinet baskets', 'drawer chest liners', 'accent cabinet hardware',
'bar cabinet glassware', 'bar cart wheels', 'television wall mount', 'tv wall bracket', 'streaming remote', 'blu ray discs', 'dvd storage rack', 'sound bar remote', 'speaker cables', 'receiver remote',
'gaming headset', 'gaming chair', 'controller charging dock', 'vr controllers', 'cable management box', 'router stand', 'modem cables', 'wifi booster', 'smart plug', 'smart home hub',
'floor lamp bulbs', 'table lamp bulbs', 'lamp finial', 'ceiling fan blades', 'fan light kit', 'area rug cleaner', 'rug corner grips', 'carpet stain remover', 'window curtain rods', 'curtain rod brackets',

'window shade pull', 'valance rod', 'wall art hooks', 'canvas hanging kit', 'mirror mounting kit', 'clock batteries', 'picture frame stand', 'photo storage box', 'decorative shelf brackets', 'wall sconce bulbs',
'throw pillow inserts', 'pillow covers', 'seat cushion covers', 'blanket storage basket', 'quilt storage bag', 'bean bag refill', 'folding chair pads', 'stool cushion', 'fireplace grate', 'fireplace poker',
'fireplace brush', 'fireplace shovel', 'fireplace tongs', 'fireplace ash bucket', 'mantle garland', 'candle snuffer', 'lantern candles', 'plant watering can', 'plant fertilizer', 'plant mister',
'artificial plant decor', 'vase filler stones', 'decorative bowl filler', 'coffee table tray', 'magazine holder', 'board game organizer', 'card shuffler', 'puzzle mat', 'battery storage box', 'extension cord reel',

'charging cable organizer', 'laptop stand', 'tablet case', 'wireless headphone case', 'cd storage case', 'dvd binder', 'game storage shelf', 'woven storage basket', 'decorative storage trunk', 'toy organizer bins',
'coat hanger rack', 'umbrella holder tray', 'entry bench cushion', 'shoe storage cabinet', 'hall tree hooks', 'console drawer liner', 'accent lamp shade', 'window seat throw pillow', 'curtain tieback hooks', 'light switch cover',
'air purifier filter', 'humidifier filter', 'dehumidifier bucket', 'space heater remote', 'tower fan remote', 'portable air conditioner hose', 'thermostat cover', 'security camera mount', 'alarm keypad', 'motion detector mount',
'smoke detector batteries', 'carbon monoxide detector batteries', 'fire extinguisher bracket', 'first aid refill kit', 'tool storage box', 'measuring tape case', 'wall hook rack', 'adhesive strip refills', 'picture wire', 'decor tray liner',

'drink coaster set', 'coaster storage box', 'bar tool rack', 'wine glass rack', 'bottle opener', 'liquor decanter', 'storage ottoman lid', 'furniture leg pads', 'sofa arm tray', 'chair arm covers',
'slipcover clips', 'fabric stain remover', 'lint brush', 'handheld steamer', 'upright vacuum', 'vacuum bags', 'carpet cleaning solution', 'broom holder', 'mop bucket', 'cleaning gloves',
'glass spray bottle', 'multi surface wipes', 'dusting wand', 'paper towel holder', 'trash can liner refill', 'recycling sorter bins', 'drawer divider set', 'cabinet organizer tray', 'wood polish cloth', 'fabric protector wipes',
'air freshener refill', 'essential oil set', 'scent diffuser reeds', 'throw blanket storage bag', 'decorative pillow basket', 'game console stand', 'media shelf riser', 'remote finder device', 'smart bulb hub', 'bluetooth remote',

'wall mounted cabinet', 'floating media shelf', 'corner display shelf', 'accent mirror', 'floor standing mirror', 'ottoman storage bin', 'coffee table book set', 'decorative lantern set', 'floor plant stand', 'plant drip tray',
'indoor tree planter', 'artificial tree decor', 'large decorative vase', 'ceramic decor bowl', 'magazine subscription box', 'board game storage rack', 'card deck holder', 'puzzle storage box', 'charging dock station', 'laptop storage sleeve',
'tablet charging cable', 'headphone stand', 'bluetooth speaker stand', 'cd display rack', 'dvd display shelf', 'game console cooling fan', 'router cable organizer', 'wifi signal booster', 'lamp timer switch', 'light bulb storage case',
'ceiling fan remote holder', 'rug storage roll', 'window blind cleaner', 'curtain cleaning brush', 'art cleaning cloth', 'picture frame cleaner', 'mirror cleaning spray', 'wall decor stencil', 'candle storage box', 'plant care kit',

'decorative stone set', 'coffee table organizer', 'magazine subscription rack', 'game night storage box', 'battery organizer case', 'cord management clips', 'charging hub', 'laptop cooling pad', 'tablet keyboard', 'wireless mouse',
'headphone extension cable', 'bluetooth transmitter', 'cd cleaner kit', 'dvd cleaning kit', 'game controller skins', 'media cabinet lock', 'decorative storage chest', 'toy storage basket', 'coat hanger set', 'umbrella cover',
'entryway rug', 'shoe polish kit', 'hallway bench', 'hallway storage cabinet', 'accent table decor', 'floor lamp dimmer', 'table lamp timer', 'window draft stopper', 'curtain blackout liner', 'decorative curtain rod ends',
'air purifier replacement filter', 'humidifier cleaning kit', 'dehumidifier filter', 'space heater safety guard', 'tower fan cleaning brush', 'portable air conditioner cover', 'thermostat battery', 'security camera cable', 'alarm system battery', 'motion sensor battery',

'sofa side caddy', 'sofa cup holder', 'recliner cup holder insert', 'ottoman storage divider', 'coffee table leg protectors', 'end table drawer liner', 'console cable grommet', 'media console cable ties', 'bookcase bookends', 'display cabinet locks',
'curio cabinet light bulbs', 'storage cabinet shelf riser', 'drawer chest organizers', 'accent cabinet shelf liner', 'bar cabinet bottle rack', 'bar cart shelf liner', 'television cleaning kit', 'tv screen protector', 'streaming device cables', 'blu ray remote cover',
'dvd player cables', 'sound bar wall mount', 'subwoofer cable', 'speaker wire spool', 'receiver surge protector', 'gaming console storage stand', 'controller batteries', 'vr headset stand', 'cable box remote', 'satellite dish remote',
'media remote holder', 'router backup battery', 'modem power adapter', 'wifi extender cable', 'smart speaker stand', 'floor lamp base weight', 'table lamp harp', 'lamp shade finial', 'ceiling light bulbs', 'ceiling fan chain',
'fan blade cleaner', 'area rug corner tape', 'rug cleaning brush', 'carpet deodorizer', 'window curtain rings', 'curtain rod finials', 'window blind wand', 'window shade bracket', 'valance clips', 'curtain rod anchors',

'wall art level tool', 'canvas frame clips', 'mirror hanging wire', 'clock wall hook', 'picture mat boards', 'photo frame glass', 'decorative shelf anchors', 'wall sconce shades', 'throw pillow storage bag', 'decorative pillow inserts',
'seat cushion foam insert', 'throw blanket ladder', 'quilt hanger rack', 'bean bag chair cover', 'folding chair storage rack', 'stool leg caps', 'fireplace mantel shelf', 'fireplace ash vacuum', 'log storage rack', 'fireplace bellows',
'mantle decor garland lights', 'candle lighter', 'lantern hanger', 'plant soil bag', 'plant pruning shears', 'plant support stakes', 'artificial plant cleaner spray', 'floor vase filler sticks', 'decorative tray liner', 'coffee table centerpiece',
'magazine file holder', 'board game pieces organizer', 'card game storage tin', 'puzzle sorter trays', 'battery tester', 'extension cord splitter', 'charging cable box', 'laptop docking station', 'tablet stylus', 'wireless headphone charger',

'cd storage tower', 'dvd storage case', 'game controller case', 'storage basket liner', 'decorative box set', 'toy storage shelf', 'coat rack wall mount', 'umbrella drip tray', 'entry bench storage bin', 'shoe rack bench',
'hall tree basket', 'console mirror mounting kit', 'accent lamp bulb', 'window seat storage bin', 'curtain cleaning spray', 'light switch smart cover', 'air purifier pre filter', 'humidifier water tank', 'dehumidifier hose', 'space heater filter',
'tower fan replacement base', 'portable air conditioner window kit', 'thermostat wall plate', 'security camera memory card', 'alarm sensor battery', 'door sensor adhesive', 'motion sensor bracket', 'smoke alarm mount', 'carbon monoxide alarm mount', 'fire extinguisher cabinet',

'first aid supply box', 'tool organizer tray', 'screwdriver magnetic holder', 'hammer storage hook', 'measuring tape clip', 'wall hook adhesive pads', 'command hook refills', 'picture frame wire', 'decorative tray handles', 'drink coaster holder',
'barware storage box', 'wine glass polishing cloth', 'cocktail shaker strainer', 'drink pitcher lid', 'ice bucket tongs', 'bar tool organizer', 'wine cork holder', 'liquor bottle pourers', 'storage ottoman hinges', 'furniture scratch repair kit',
'sofa leg risers', 'chair floor protectors', 'slipcover straps', 'fabric cleaner spray', 'lint remover brush', 'handheld vacuum filter', 'upright vacuum belt', 'vacuum hose attachment', 'carpet shampoo solution', 'broom wall clip',
'mop replacement head', 'cleaning spray bottles', 'all purpose cleaning wipes', 'dusting cloth set', 'paper towel dispenser', 'trash can deodorizer', 'recycling bin labels', 'drawer organizer bins', 'cabinet shelf baskets', 'wood furniture polish',

'fabric freshener beads', 'air freshener plug in', 'essential oil refills', 'throw blanket basket', 'decorative pillow tray', 'game console cables', 'media shelf bracket', 'remote control batteries', 'smart bulb remote', 'bluetooth speaker charger',
'wall mounted display case', 'floating shelf brackets', 'corner wall cabinet', 'accent mirror frame', 'floor mirror stand', 'ottoman tray insert', 'coffee table glass top', 'decorative lantern candles', 'floor plant grow light', 'plant watering globe',
'indoor planter liner', 'artificial tree stand', 'large floor vase filler', 'ceramic bowl decor set', 'magazine display rack', 'board game shelf', 'card game binder', 'puzzle storage bag', 'charging cable station', 'laptop backpack',
'tablet sleeve', 'headphone wall hook', 'bluetooth speaker case', 'cd binder case', 'dvd rack wall mount', 'game console power cord', 'router wall mount', 'wifi booster stand', 'lamp smart plug', 'light bulb organizer box',

'ceiling fan balancing kit', 'rug vacuum attachment', 'window blind repair kit', 'curtain rod extender', 'art hanging kit', 'picture frame backing', 'mirror polish cloth', 'wall decor hooks', 'candle storage tray', 'plant fertilizer spikes',
'decorative stone bowl', 'coffee table storage box', 'magazine file bin', 'game storage cabinet', 'battery storage organizer', 'cord concealment kit', 'charging station dock', 'laptop privacy screen', 'tablet charging dock', 'wireless keyboard',
'headphone stand desk', 'bluetooth receiver', 'cd cleaning cloth', 'dvd organizer binder', 'game controller dock', 'media cabinet cable box', 'decorative storage bin', 'toy organizer shelf', 'coat hanger organizer', 'umbrella stand liner',
'entryway storage bench', 'shoe rack organizer', 'hallway console table', 'accent decor sculpture', 'floor lamp shade', 'table lamp base', 'window insulation kit', 'curtain rod wall anchors', 'decorative curtain tiebacks', 'air purifier cover',
'humidifier cleaning tablets', 'dehumidifier drain hose', 'space heater cord', 'tower fan remote battery', 'portable air conditioner drain kit', 'thermostat cover plate', 'security camera mount kit', 'alarm system keypad cover', 'motion sensor lens', 'smoke detector replacement unit',

'carbon monoxide detector replacement unit', 'fire extinguisher refill', 'first aid refill supplies', 'tool box large', 'tool box small', 'screw assortment kit', 'nail assortment kit', 'wall patch repair kit', 'paint touch up kit', 'furniture touch up markers',
'wood repair filler', 'fabric repair kit', 'leather repair kit', 'glass repair kit', 'window repair film', 'door draft guard', 'weather stripping roll', 'floor protector mat', 'rug gripper pads', 'furniture sliders',
'sofa cushion covers', 'loveseat slipcover', 'recliner cover', 'ottoman cover', 'coffee table runner', 'end table runner', 'console table runner', 'media cabinet doors', 'bookshelf lighting kit', 'display cabinet lock set',
'curio cabinet glass shelves', 'storage cabinet door handles', 'drawer chest knobs', 'accent cabinet hinges', 'bar cabinet lock', 'bar cart handle grips', 'television power cord', 'tv mounting screws', 'streaming device power adapter', 'blu ray storage case',
'dvd storage cabinet', 'sound bar mounting bracket', 'subwoofer isolation pad', 'speaker wall mounts', 'receiver cooling fan', 'gaming console storage case', 'controller thumb grips', 'vr headset cable', 'cable box power cord', 'satellite receiver cables',

'media remote batteries', 'router ethernet cable', 'modem coax cable', 'wifi extender bracket', 'smart speaker cable', 'floor lamp extension cord', 'table lamp replacement cord', 'lamp shade harp', 'ceiling light trim ring', 'ceiling fan light bulbs',
'fan pull chain', 'area rug cleaning spray', 'rug storage bag', 'carpet padding', 'window curtain cleaning brush', 'curtain rod center support', 'window blind brackets', 'window shade cord', 'valance rod clips', 'curtain ring clips',
'wall art cleaning brush', 'canvas stretcher kit', 'mirror adhesive strips', 'clock replacement mechanism', 'picture frame easel back', 'photo album sleeves', 'decorative shelf riser', 'wall sconce mounting plate', 'throw pillow zipper cover', 'decorative pillow trim',
'seat cushion foam pad', 'throw blanket clips', 'quilt storage chest', 'bean bag refill beads', 'folding chair storage bag', 'stool cushion cover', 'fireplace mantel clock', 'fireplace grate replacement', 'log carrier bag', 'fireplace ash shovel',

'mantle decor hooks', 'candle holder tray', 'lantern glass panels', 'plant soil scoop', 'plant leaf shine spray', 'plant pot liner', 'artificial plant base', 'floor vase cleaning brush', 'decorative bowl set', 'coffee table glass cleaner',
'magazine storage basket', 'board game storage drawers', 'card game storage pouch', 'puzzle piece organizer', 'battery charger', 'extension cord wall mount', 'charging cable sleeves', 'laptop carrying case', 'tablet charging brick', 'wireless headphone stand',
'cd storage sleeves', 'dvd storage tower', 'game disc storage case', 'storage basket lid', 'decorative box organizer', 'toy storage cubby', 'coat rack freestanding', 'umbrella holder stand', 'entry bench shoe storage', 'shoe rack stackable',
'hall tree storage shelf', 'console mirror decor', 'accent lamp cord cover', 'window seat storage drawer', 'curtain rod cleaning cloth', 'light switch guard', 'air purifier replacement motor', 'humidifier replacement tank', 'dehumidifier filter replacement', 'space heater replacement grill',

'tower fan replacement blades', 'portable air conditioner cover bag', 'thermostat wiring kit', 'security camera extension cable', 'alarm system motion sensor', 'door sensor replacement', 'motion sensor adhesive pads', 'smoke detector replacement battery pack', 'carbon monoxide alarm replacement battery pack', 'fire extinguisher wall mount',
'first aid kit wall mount', 'tool organizer wall rack', 'screwdriver bit set', 'hammer rubber grip', 'measuring tape holder', 'wall hook decorative', 'command strip hooks', 'picture frame corner protectors', 'decorative tray storage box', 'drink coaster cork set',
'barware storage cabinet', 'wine glass storage case', 'cocktail shaker lid', 'drink pitcher replacement lid', 'ice bucket liner', 'bar tool pouch', 'wine rack wall mount', 'liquor cabinet lock', 'storage ottoman hinge replacement', 'furniture leg caps',
'sofa arm cover set', 'chair seat protectors', 'slipcover replacement ties', 'fabric stain remover wipes', 'lint roller refills', 'handheld vacuum charger', 'upright vacuum filter', 'vacuum cleaner attachments', 'carpet cleaner hose', 'broom replacement handle',

'mop bucket wringer', 'cleaning supply caddy large', 'glass cleaner refill', 'all purpose cleaner refill', 'dusting mitt', 'paper towel holder wall mount', 'trash can lid replacement', 'recycling bin divider', 'drawer organizer expandable', 'cabinet shelf brackets',
'wood polish spray', 'fabric freshener refill', 'air freshener spray', 'essential oil storage case', 'throw blanket organizer', 'decorative pillow storage box', 'game console storage cabinet', 'media shelf lighting', 'remote control storage tray', 'smart bulb starter kit',
'bluetooth speaker wall mount', 'wall mounted display shelf', 'floating shelf hardware', 'corner cabinet storage', 'accent mirror mounting bracket', 'floor mirror frame', 'ottoman storage tray', 'coffee table leg levelers', 'decorative lantern hooks', 'floor plant basket',
'plant watering can metal', 'indoor planter decorative', 'artificial tree planter', 'large vase decorative', 'ceramic bowl centerpiece', 'magazine rack wall mount', 'board game cabinet', 'card deck storage box', 'puzzle board tray', 'charging station organizer',

'laptop desk tray', 'tablet stand adjustable', 'headphone storage case', 'bluetooth speaker dock', 'cd display case', 'dvd storage binder', 'game controller wall mount', 'router storage shelf', 'wifi extender wall plate', 'lamp dimmer cord',
'light bulb dimmer switch', 'ceiling fan mounting bracket', 'rug cleaning machine solution', 'window blind cleaning brush', 'curtain rod decorative ends', 'art hanging wire', 'picture frame cleaning kit', 'mirror hanging kit', 'candle storage cabinet', 'plant care spray bottle',
'decorative stone tray', 'coffee table organizer tray', 'magazine storage box', 'game storage shelf unit', 'battery storage drawer', 'cord organizer box', 'charging dock multi device', 'laptop screen cleaner', 'tablet protective cover', 'wireless mouse pad',
'headphone amplifier', 'bluetooth audio adapter', 'cd case organizer', 'dvd media cabinet', 'game controller battery pack', 'media cabinet shelf liner', 'decorative storage trunk large', 'toy storage ottoman', 'coat hanger wall rack', 'umbrella rack tray',

'entry rug indoor', 'shoe storage organizer box', 'hallway accent cabinet', 'accent decor bowl', 'floor lamp replacement bulb', 'table lamp replacement shade', 'window insulation curtain', 'curtain rod center bracket', 'decorative curtain holdbacks', 'air purifier replacement filter set',
'humidifier replacement filter set', 'dehumidifier water bucket', 'space heater replacement cord', 'tower fan replacement remote', 'portable air conditioner filter', 'thermostat smart upgrade', 'security camera mounting screws', 'alarm system control panel', 'motion sensor battery pack', 'smoke detector wall mount kit'
],

        Bedroom: ['bed frame', 'headboard', 'footboard', 'bed rails', 'bed slats', 'box spring', 'mattress', 'mattress topper', 'mattress pad', 'mattress protector',
'fitted sheet', 'flat sheet', 'pillowcases', 'bed skirt', 'comforter', 'duvet insert', 'duvet cover', 'quilt', 'blanket', 'throw blanket',
'decorative pillows', 'sleeping pillows', 'body pillow', 'pillow protectors', 'electric blanket', 'weighted blanket', 'bed tray', 'bedside caddy', 'bed risers', 'bed frame bolts',

'nightstand', 'nightstand lamp', 'lamp shade', 'light bulb', 'alarm clock', 'clock radio', 'phone charger', 'charging cable', 'power strip', 'extension cord',
'dresser', 'dresser drawers', 'dresser mirror', 'vanity table', 'vanity mirror', 'vanity stool', 'makeup organizer', 'jewelry box', 'jewelry organizer', 'watch box',
'chest of drawers', 'armoire', 'wardrobe cabinet', 'bookshelf', 'floating shelves', 'storage cabinet', 'under bed storage bin', 'storage baskets', 'storage bins', 'laundry basket',

'hampers', 'closet rods', 'closet shelves', 'closet organizer', 'shoe rack', 'shoe boxes', 'hanging organizers', 'coat hangers', 'garment bags', 'laundry bag',
'full length mirror', 'wall mirror', 'wall art', 'picture frames', 'photo albums', 'wall clock', 'area rug', 'rug pad', 'carpet runner', 'window curtains',
'curtain rod', 'window blinds', 'window shades', 'valance', 'curtain tie backs', 'door stop', 'door mirror', 'floor lamp', 'table lamp', 'ceiling light fixture',

'ceiling fan', 'fan remote', 'humidifier', 'air purifier', 'space heater', 'portable fan', 'thermostat', 'television', 'tv stand', 'media console',
'streaming device', 'blu ray player', 'sound bar', 'gaming console', 'game controller', 'laptop', 'tablet', 'wireless headphones', 'headphones', 'bluetooth speaker',
'desk', 'desk chair', 'desk lamp', 'desk organizer', 'file organizer', 'filing cabinet', 'bulletin board', 'whiteboard', 'office supplies tray', 'notebook storage box',

'throw pillows', 'seat cushion', 'accent chair', 'recliner', 'bench', 'ottoman', 'bean bag chair', 'folding chair', 'stool', 'window seat cushion',
'throw blanket storage basket', 'decorative tray', 'candle holders', 'candles', 'essential oil diffuser', 'scent diffuser', 'indoor plant', 'plant stand', 'planter pot', 'artificial plant',
'dresser drawer organizers', 'sock organizer', 'tie rack', 'belt rack', 'scarf hanger', 'jewelry tray', 'ring holder', 'necklace organizer', 'bracelet organizer', 'earring holder',

'clothing storage bins', 'seasonal clothing box', 'blanket storage bag', 'pillow storage bag', 'under bed shoe organizer', 'lint roller', 'fabric freshener spray', 'clothing steamer', 'iron', 'ironing board',
'ironing board cover', 'sewing kit', 'thread organizer', 'needle kit', 'measuring tape', 'small tool kit', 'screwdriver set', 'hammer', 'wall hooks', 'adhesive hooks',
'command strips', 'picture hanging kit', 'wall anchors', 'light switch cover', 'outlet cover', 'surge protector', 'smoke detector', 'carbon monoxide detector', 'fire extinguisher', 'first aid kit',

'trash can', 'trash bags', 'recycling bin', 'drawer liners', 'cabinet liners', 'furniture polish', 'glass cleaner', 'all purpose cleaner', 'cleaning cloths', 'paper towels',
'vacuum cleaner', 'hand vacuum', 'broom', 'dustpan', 'floor mop', 'mop bucket', 'carpet cleaner machine', 'air freshener', 'humidifier filter', 'air purifier filter',
'mattress cleaning spray', 'pillow spray', 'bed bug cover', 'bed rail padding', 'crib mattress', 'crib bedding set', 'crib sheet', 'crib blanket', 'changing table', 'changing pad',

'baby monitor', 'night light', 'sound machine', 'white noise machine', 'baby hamper', 'toy storage bin', 'toy chest', 'stuffed animals', 'children books', 'story books',
'closet light', 'closet light bulbs', 'closet storage baskets', 'closet shoe organizer', 'closet drawer unit', 'closet shelf dividers', 'garment rack', 'laundry detergent', 'fabric softener', 'dryer sheets',

'bed frame center support', 'headboard mounting brackets', 'footboard brackets', 'bed slat supports', 'box spring cover', 'mattress encasement', 'mattress foundation', 'mattress wedge pillow', 'bedside step stool', 'bed frame hardware kit',
'bed canopy', 'canopy curtain panels', 'bed canopy frame', 'bedding storage trunk', 'linen storage chest', 'extra sheet set', 'extra pillow set', 'pillow inserts', 'pillow covers', 'bed throw pillows',
'nightstand drawer organizer', 'nightstand coaster', 'lamp finial', 'lamp harp', 'lamp replacement cord', 'alarm clock batteries', 'clock backup battery', 'phone charging dock', 'wireless charger', 'charging station organizer',
'dresser drawer dividers', 'dresser drawer liner', 'dresser hardware set', 'vanity light bulbs', 'vanity drawer organizer', 'makeup brush holder', 'cosmetic organizer tray', 'jewelry travel case', 'watch winder', 'ring organizer tray',
'chest drawer liners', 'armoire hanging rod', 'wardrobe shelf insert', 'bookshelf bookends', 'floating shelf brackets', 'storage cabinet shelf liner', 'under bed rolling drawer', 'woven storage basket', 'fabric storage cube', 'collapsible storage bin',

'double hamper', 'laundry sorter', 'closet rod brackets', 'closet shelf liner', 'closet drawer organizer', 'shoe storage bench', 'shoe stackers', 'over door organizer', 'garment storage rack', 'laundry folding table',
'full length mirror stand', 'mirror mounting kit', 'wall decor hooks', 'picture frame glass', 'photo storage box', 'wall clock batteries', 'area rug cleaner', 'rug corner grippers', 'carpet stain remover', 'curtain rings',
'curtain rod brackets', 'window blind repair kit', 'window shade brackets', 'valance clips', 'curtain tieback hooks', 'door hinge pins', 'door draft stopper', 'floor lamp bulb', 'table lamp base', 'ceiling light bulbs',
'ceiling fan blades', 'fan pull chain', 'humidifier water tank', 'air purifier pre filter', 'space heater remote', 'portable fan stand', 'thermostat batteries', 'tv wall mount', 'media shelf', 'streaming remote',
'blu ray discs', 'sound bar remote', 'gaming headset', 'controller charging dock', 'laptop stand', 'tablet case', 'headphone stand', 'bluetooth speaker charger', 'desk drawer organizer', 'desk cable grommet',

'desk chair cushion', 'desk lamp bulb', 'file folder organizer', 'filing cabinet lock', 'bulletin board pins', 'whiteboard markers', 'office supply caddy', 'document storage box', 'throw pillow covers', 'seat cushion cover',
'accent chair cover', 'recliner cover', 'bench cushion', 'ottoman tray', 'bean bag refill beads', 'folding chair storage rack', 'stool leg caps', 'window seat storage bin', 'blanket ladder', 'decorative tray liner',
'candle snuffer', 'candle lighter', 'diffuser refill oil', 'scented candle storage box', 'plant watering can', 'plant fertilizer', 'plant mister', 'artificial plant cleaner spray', 'dresser drawer scent sachets', 'sock drawer liner',
'tie hanger rack', 'belt organizer hanger', 'scarf organizer', 'jewelry stand', 'ring storage box', 'necklace travel pouch', 'bracelet storage case', 'earring storage tray', 'clothing storage vacuum bags', 'seasonal wardrobe trunk',

'blanket vacuum storage bag', 'pillow vacuum storage bag', 'under bed rolling bin', 'lint roller refills', 'fabric deodorizer spray', 'garment steamer', 'iron storage rack', 'ironing board hanger', 'sewing thread kit', 'button repair kit',
'measuring tape case', 'small tool organizer', 'screw assortment kit', 'nail assortment kit', 'decorative wall hooks', 'adhesive strip refills', 'picture hanging wire', 'wall anchor kit', 'light switch guard', 'outlet safety covers',
'surge protector strip', 'smoke detector batteries', 'carbon monoxide alarm mount', 'fire extinguisher bracket', 'first aid refill supplies', 'bedroom trash can lid', 'trash bag box', 'recycling sorter bin', 'drawer freshener', 'cabinet freshener',
'wood polish cloth', 'glass cleaning wipes', 'all purpose cleaning wipes', 'microfiber dust cloth', 'paper towel holder', 'vacuum cleaner attachments', 'hand vacuum charger', 'broom wall clip', 'mop replacement head', 'carpet cleaner solution',

'air freshener refill', 'humidifier cleaning tablets', 'air purifier replacement filter', 'mattress stain remover', 'pillow protector zip cover', 'bed frame corner guards', 'crib rail cover', 'crib mobile', 'crib storage organizer', 'changing table organizer',
'baby monitor mount', 'night light bulbs', 'sound machine batteries', 'white noise machine cord', 'baby hamper liner', 'toy storage cubby', 'toy bin labels', 'stuffed animal net', 'children book shelf', 'story book storage bin',
'closet motion light', 'closet shoe boxes clear', 'closet shelf baskets', 'closet drawer dividers', 'garment rack cover', 'laundry detergent container', 'fabric softener dispenser', 'dryer sheet box', 'clothing rack wheels', 'folding laundry hamper',

'bed frame center beam', 'headboard cushion', 'footboard padding', 'bed slat replacement set', 'box spring support frame', 'mattress support board', 'mattress lifting strap', 'bedside storage pocket', 'bed rail brackets', 'bed corner protectors',
'canopy rod connectors', 'canopy tie backs', 'linen storage organizer', 'extra duvet insert', 'extra comforter set', 'pillow filling refill', 'body pillow cover', 'weighted blanket cover', 'electric blanket controller', 'bed tray folding legs',
'nightstand drawer knobs', 'nightstand shelf liner', 'lamp bulb spare pack', 'lamp shade replacement', 'alarm clock power cord', 'clock wall mount', 'phone charging cable extra', 'wireless charging pad', 'power strip surge', 'extension cord reel',
'dresser mirror clips', 'dresser anti tip kit', 'vanity mirror lights', 'vanity drawer liners', 'makeup drawer dividers', 'cosmetic brush cleaner', 'jewelry polishing cloth', 'watch storage tray', 'ring cleaning kit', 'bracelet display stand',
'chest drawer stops', 'armoire door lock', 'wardrobe hanger bar', 'bookshelf shelf pins', 'floating shelf anchors', 'storage cabinet locks', 'under bed storage lid', 'woven basket liner', 'fabric cube insert', 'collapsible bin lid',

'laundry hamper lid', 'laundry basket liner', 'closet rod extender', 'closet shelf bracket', 'closet drawer pulls', 'shoe rack expanders', 'over door hook rack', 'garment rack cover zip', 'laundry folding board', 'mirror floor support',
'wall mirror anchors', 'picture frame backing', 'photo album refill pages', 'wall clock mount', 'rug cleaning foam', 'rug anti slip pad', 'carpet brush', 'curtain cleaning brush', 'curtain rod extender', 'window blind cleaner tool',
'window shade pull cord', 'valance rod bracket', 'curtain tieback magnets', 'door hinge repair kit', 'door knob replacement', 'floor lamp dimmer switch', 'table lamp cord cover', 'ceiling light trim plate', 'ceiling fan balancing kit', 'fan remote holder',
'humidifier filter replacement', 'air purifier carbon filter', 'space heater cord replacement', 'portable fan blades', 'thermostat wall plate', 'tv remote cover', 'media console drawer liner', 'streaming stick power cable', 'blu ray remote cover', 'sound bar mount kit',
'gaming console stand', 'controller thumb grips', 'laptop cooling pad', 'tablet keyboard case', 'headphone amplifier', 'bluetooth speaker case', 'desk cable organizer', 'desk drawer tray', 'desk chair floor mat', 'file folder box',

'filing cabinet key spare', 'bulletin board eraser', 'whiteboard cleaner spray', 'office drawer dividers', 'document organizer binder', 'throw pillow inserts spare', 'seat cushion foam insert', 'accent chair leg pads', 'recliner side pocket', 'bench storage basket',
'ottoman storage divider', 'bean bag inner liner', 'folding chair leg caps', 'stool cushion cover zip', 'window seat cushion cover', 'blanket storage trunk', 'decorative tray handles', 'candle storage tray', 'diffuser cleaning kit', 'plant soil bag',
'plant pruning shears', 'plant support stakes', 'artificial plant base filler', 'drawer scent liners', 'sock divider tray', 'tie organizer box', 'belt hanger rack', 'scarf hanger hooks', 'jewelry drawer insert', 'ring organizer case',
'necklace detangler board', 'bracelet travel pouch', 'earring organizer card set', 'clothing vacuum pump', 'seasonal clothing labels', 'blanket storage chest large', 'pillow storage tote', 'under bed shoe rack', 'lint brush', 'fabric steamer attachments',

'iron cleaning stick', 'ironing board leg caps', 'sewing thread spools', 'needle organizer case', 'measuring tape soft', 'tool box organizer tray', 'screwdriver bit set', 'hammer wall mount', 'decorative wall anchors', 'adhesive hook refills',
'picture frame corner protectors', 'wall repair patch kit', 'light switch decorative plate', 'outlet surge protector', 'smoke detector mounting plate', 'carbon monoxide alarm replacement', 'fire extinguisher refill gauge', 'first aid storage box', 'trash can liner roll', 'recycling bin lid',
'drawer deodorizer', 'cabinet moisture absorber', 'wood furniture polish spray', 'glass cleaner refill', 'all purpose spray refill', 'dusting wand', 'paper towel refill pack', 'vacuum belt replacement', 'hand vacuum filter', 'broom replacement head',
'mop bucket wringer insert', 'carpet cleaning brush', 'air freshener plug in', 'humidifier cleaning brush', 'air purifier motor filter', 'mattress vacuum attachment', 'pillowcase set spare', 'bed frame support feet', 'crib sheet spare', 'crib mattress protector',

'crib storage drawer', 'changing pad cover', 'baby monitor charger', 'night light cover', 'sound machine stand', 'white noise machine cover', 'baby toy basket', 'toy cubby organizer', 'stuffed animal storage hammock', 'children book display rack',
'closet light motion sensor', 'closet organizer bins fabric', 'closet shoe rack metal', 'closet drawer inserts', 'garment rack extension bar', 'laundry detergent measuring cup', 'fabric softener bottle pump', 'dryer sheet storage bin', 'clothing rack shelf', 'folding hamper frame',

'bed frame replacement screws', 'headboard wall anchors', 'footboard stabilizer brackets', 'bed slat center support leg', 'box spring replacement cover', 'mattress rotation handle straps', 'mattress edge support foam', 'bed rail safety strap', 'bed canopy ceiling hooks', 'bedding storage vacuum bags',
'linen drawer organizers', 'extra sheet pillowcases', 'pillow stuffing refill', 'decorative pillow shams', 'weighted blanket storage bag', 'electric blanket storage case', 'bed tray cup holder', 'nightstand glass top', 'nightstand anti tip kit', 'lamp smart bulb',
'lamp timer switch', 'alarm clock backup battery', 'clock radio antenna', 'phone charging cable organizer', 'wireless charger stand', 'power strip wall mount', 'extension cord clips', 'dresser drawer glide', 'dresser drawer stop', 'vanity mirror magnifier',
'vanity organizer drawer insert', 'makeup brush case', 'cosmetic storage tower', 'jewelry armoire cabinet', 'watch polishing kit', 'ring cleaning cloth', 'bracelet display box', 'earring jewelry case', 'chest drawer dividers', 'armoire shelf insert',
'wardrobe garment bar extender', 'bookshelf lighting strip', 'floating shelf decorative brackets', 'storage cabinet door lock', 'under bed rolling storage frame', 'woven basket lid', 'fabric storage cube lid', 'collapsible bin organizer', 'laundry hamper divider', 'laundry basket cover',

'closet rod center support', 'closet shelf stacker', 'closet drawer bin set', 'shoe rack wall mount', 'over door mirror hooks', 'garment rack wheels', 'laundry folding counter', 'full length mirror jewelry storage', 'wall mirror adhesive pads', 'picture frame cleaning cloth',
'photo album storage case', 'wall clock replacement hands', 'area rug storage roll', 'rug cleaning spray bottle', 'carpet padding underlay', 'curtain blackout liner', 'curtain rod ceiling mount', 'window blind replacement slats', 'window shade repair kit', 'valance mounting hardware',
'curtain tieback rings', 'door draft seal strip', 'floor lamp replacement shade', 'table lamp replacement bulb', 'ceiling light diffuser cover', 'ceiling fan blade screws', 'fan remote battery', 'humidifier replacement tank cap', 'air purifier filter kit', 'space heater safety guard',
'portable fan replacement grill', 'thermostat smart sensor', 'tv mounting hardware kit', 'media shelf wall anchors', 'streaming device wall mount', 'blu ray disc storage binder', 'sound bar cable kit', 'gaming console cooling stand', 'controller charging cable', 'laptop docking station',

'tablet stylus pen', 'headphone storage hook', 'bluetooth speaker wall shelf', 'desk drawer lock', 'desk cable clips', 'desk chair leg pads', 'file organizer box', 'filing cabinet divider rails', 'bulletin board cork refill', 'whiteboard eraser set',
'office supply organizer tray', 'document file box', 'throw pillow vacuum bag', 'seat cushion foam pad', 'accent chair floor protectors', 'recliner armrest cover', 'bench leg caps', 'ottoman hinge replacement', 'bean bag chair cover spare', 'folding chair wall rack',
'stool cushion insert', 'window seat drawer organizer', 'blanket storage vacuum bag', 'decorative tray storage bin', 'candle storage cabinet', 'diffuser essential oil set', 'plant fertilizer spikes', 'plant watering globe', 'artificial plant pot liner', 'drawer deodorizer sachets',
'sock storage cube', 'tie organizer hanger', 'belt storage box', 'scarf storage box', 'jewelry cleaning solution', 'ring storage roll', 'necklace travel organizer', 'bracelet display tray', 'earring holder stand', 'clothing storage garment box',

'seasonal wardrobe container', 'blanket chest cedar', 'pillow storage crate', 'under bed clothing bin', 'lint roller storage holder', 'fabric freshener refill', 'garment steamer brush attachment', 'iron storage hook', 'ironing board wall mount', 'sewing machine small',
'thread storage rack', 'needle threader kit', 'measuring tape retractable', 'tool box storage tray', 'screw assortment container', 'nail storage box', 'wall patch compound', 'light switch dimmer', 'outlet surge protector wall', 'smoke detector test spray',
'carbon monoxide detector plug in', 'fire extinguisher cabinet small', 'first aid organizer case', 'trash can step lid', 'recycling bin liner roll', 'drawer moisture absorber', 'cabinet shelf liner roll', 'wood polish applicator', 'glass cleaner microfiber kit', 'all purpose cleaning cloths',
'dusting glove', 'paper towel wall dispenser', 'vacuum hose replacement', 'hand vacuum charging base', 'broom storage rack', 'mop storage hook', 'carpet cleaner brush attachment', 'air freshener automatic dispenser', 'humidifier cleaning solution', 'air purifier pre filter pack',

'mattress deodorizer powder', 'pillow protector spare', 'bed frame leg caps', 'crib mobile hanger', 'crib mattress cover spare', 'changing table pad liner', 'baby monitor wall mount', 'night light projector', 'sound machine battery pack', 'white noise machine remote',
'baby toy storage cube', 'toy organizer labels', 'stuffed animal bean bag', 'children bookcase small', 'closet shelf organizer metal', 'closet shoe cubby', 'closet drawer bin plastic', 'garment rack shelf insert', 'laundry detergent pump dispenser', 'fabric softener storage bottle',

'bedside rug small', 'bedroom entry rug', 'decorative wall sculpture', 'accent wall shelf', 'photo collage frame', 'mirror frame decorative', 'dresser top organizer', 'vanity tabletop tray', 'makeup mirror stand', 'jewelry display bust',
'watch storage drawer insert', 'ring display stand', 'bracelet display rod', 'earring display board', 'closet tie rack wall mount', 'belt hanger wall rack', 'scarf ring organizer', 'under bed organizer divider', 'seasonal storage label set', 'linen closet organizer',
'blanket ladder wooden', 'pillow storage shelf', 'bedside water carafe', 'nightstand coaster set', 'alarm clock decorative', 'lamp decorative base', 'desk drawer felt liner', 'file storage crate', 'book storage box', 'media device storage bin',
'gaming headset stand', 'laptop storage sleeve', 'tablet charging cable extra', 'headphone extension cable', 'bluetooth speaker stand', 'desk lamp smart bulb', 'floor lamp dimmer cord', 'window curtain rings spare', 'curtain rod decorative ends', 'area rug corner protectors',

'closet rod covers', 'closet shelf basket liners', 'shoe storage drawers', 'laundry basket wheels', 'mirror cleaning spray', 'picture frame hanging kit', 'decorative tray set', 'candle holder set', 'plant mister spray bottle', 'artificial plant decorative stones',
'drawer divider expandable', 'sock organizer fabric', 'tie hanger rotating', 'belt rack adjustable', 'scarf hanger velvet', 'jewelry drawer tray velvet', 'ring organizer velvet box', 'necklace hook board', 'bracelet storage cylinder', 'earring organizer tray',
'clothing rack portable', 'seasonal clothing storage bag large', 'blanket storage trunk large', 'pillow storage tote large', 'under bed rolling organizer', 'lint brush handle', 'fabric steamer water cup', 'iron replacement cord', 'ironing board padding', 'sewing kit deluxe',
'tool kit bedroom size', 'wall anchor heavy duty', 'adhesive hook heavy duty', 'light switch timer', 'outlet cover decorative', 'smoke detector spare unit', 'carbon monoxide alarm spare unit', 'fire extinguisher pressure gauge', 'first aid refill pack', 'trash bag refill roll'
],

        Bathroom: ['toilet', 'toilet tank', 'toilet seat', 'toilet lid', 'toilet bolts', 'toilet wax ring', 'toilet paper holder', 'toilet paper rolls', 'toilet brush', 'toilet plunger',
'bidet attachment', 'bidet sprayer', 'bathroom sink', 'sink faucet', 'faucet handles', 'sink drain stopper', 'sink overflow cover', 'vanity cabinet', 'vanity drawers', 'vanity countertop',
'vanity mirror', 'medicine cabinet', 'mirror mounting brackets', 'wall mounted mirror', 'mirror light fixture', 'light bulbs', 'ceiling light fixture', 'exhaust fan', 'fan cover', 'fan motor',
'shower', 'shower head', 'handheld shower head', 'shower hose', 'shower valve', 'shower handle', 'shower drain', 'shower pan', 'shower door', 'shower door handle',
'shower curtain rod', 'shower curtain', 'shower curtain liner', 'shower curtain rings', 'bathtub', 'bathtub drain', 'bathtub stopper', 'bath spout', 'bath overflow plate', 'bath tray',

'towel bars', 'hand towel ring', 'bath towel hooks', 'robe hook', 'bath towels', 'hand towels', 'washcloths', 'bath mat', 'shower mat', 'toilet seat cover',
'tissue box cover', 'soap dispenser', 'hand soap pump', 'bar soap dish', 'toothbrush holder', 'electric toothbrush', 'toothbrush charger', 'toothpaste', 'mouthwash', 'dental floss',
'floss picks', 'razor', 'razor refills', 'shaving cream', 'aftershave', 'hair dryer', 'hair dryer diffuser', 'hair straightener', 'curling iron', 'hair brush',
'hair comb', 'hair clips', 'bobby pins', 'hair ties', 'hair spray', 'hair gel', 'shampoo', 'conditioner', 'body wash', 'bar soap',

'loofah', 'shower sponge', 'bath sponge', 'bath brush', 'nail clippers', 'tweezers', 'cotton swabs', 'cotton balls', 'makeup remover', 'makeup wipes',
'facial cleanser', 'face lotion', 'body lotion', 'deodorant', 'perfume', 'cologne', 'makeup bag', 'makeup organizer', 'makeup brushes', 'foundation bottle',
'mascara', 'eyeliner', 'eyeshadow palette', 'lipstick', 'lip balm', 'nail polish', 'nail file', 'nail polish remover', 'bath salts', 'bubble bath',

'first aid kit', 'bandages', 'antiseptic', 'thermometer', 'pain reliever', 'cold medicine', 'allergy medicine', 'prescription medication', 'pill organizer', 'heating pad',
'bathroom scale', 'step stool', 'laundry hamper', 'storage baskets', 'under sink organizer', 'drawer organizers', 'cabinet shelf liner', 'trash can', 'trash bags', 'recycling bin',
'toilet paper storage rack', 'plunger holder', 'toilet brush holder', 'air freshener', 'air freshener refill', 'scent diffuser', 'essential oil set', 'candle holders', 'candles', 'humidifier',

'dehumidifier', 'wall art', 'picture frames', 'wall clock', 'floor rug', 'window blinds', 'window curtains', 'curtain rod', 'door stop', 'door hook',
'cleaning caddy', 'glass cleaner', 'all purpose cleaner', 'disinfecting wipes', 'bathroom cleaner spray', 'toilet bowl cleaner', 'drain cleaner', 'scrub brush', 'sponges', 'microfiber cloths',
'paper towels', 'rubber gloves', 'broom', 'dustpan', 'mop', 'mop bucket', 'steam cleaner', 'vacuum cleaner', 'smoke detector', 'carbon monoxide detector',

'fire extinguisher', 'plumbing repair kit', 'pipe wrench', 'adjustable wrench', 'allen wrench set', 'caulk gun', 'silicone sealant', 'plumber tape', 'replacement faucet cartridge', 'replacement shower head',

'toilet tank lid', 'toilet fill valve', 'toilet flapper', 'toilet flush handle', 'toilet supply line', 'toilet seat hinges', 'toilet bolt caps', 'toilet paper stand', 'toilet paper cabinet', 'toilet brush refills',
'plunger flange', 'bidet hose connector', 'sink supply lines', 'faucet aerator', 'sink p trap', 'sink mounting clips', 'vanity backsplash', 'vanity hardware knobs', 'vanity drawer liner', 'medicine cabinet shelves',
'medicine cabinet light', 'mirror defogger pad', 'mirror adhesive strips', 'light switch cover', 'outlet cover', 'gfci outlet', 'exhaust fan duct', 'fan wall switch', 'ceiling vent cover', 'shower niche shelf',
'shower shelf caddy', 'shower corner rack', 'shower tension pole caddy', 'shower soap dish', 'shower foot scrubber', 'shower grab bar', 'shower bench', 'shower curtain magnets', 'shower door seal', 'shower door rollers',
'bathtub caddy tray', 'bathtub grab bar', 'bath pillow', 'bath thermometer', 'bath toy storage net', 'bath toy bin', 'towel warmer', 'towel rack shelf', 'hand towel bar', 'robe hanger',

'bath towel set spare', 'hand towel set spare', 'washcloth set spare', 'bath mat spare', 'shower mat spare', 'toilet lid cover', 'soap refill bottle', 'hand soap refill pouch', 'soap pump replacement', 'toothbrush replacement heads',
'electric toothbrush case', 'toothbrush travel case', 'toothpaste dispenser', 'mouthwash cup', 'floss dispenser', 'razor storage holder', 'shaving mirror', 'hair dryer holder', 'hair dryer storage bag', 'hair straightener heat mat',
'curling iron holder', 'hair brush cleaner', 'comb storage case', 'hair clip organizer', 'bobby pin holder', 'hair tie storage jar', 'hair spray holder', 'shampoo pump dispenser', 'conditioner pump dispenser', 'body wash pump bottle',
'soap saver bag', 'loofah holder', 'bath sponge holder', 'bath brush hook', 'nail clipper set', 'tweezer case', 'cotton swab dispenser', 'cotton ball jar', 'makeup remover bottle', 'makeup wipe dispenser',

'facial cleanser pump', 'face towel stack', 'body lotion pump', 'deodorant storage tray', 'perfume tray', 'cologne display tray', 'makeup drawer divider', 'makeup brush cleaner mat', 'foundation storage tray', 'mascara organizer',
'eyeliner sharpener', 'eyeshadow organizer case', 'lipstick holder stand', 'lip balm storage tray', 'nail polish organizer rack', 'nail polish display stand', 'nail polish remover pump', 'bath salts jar', 'bubble bath bottle', 'first aid storage cabinet',

'bandage storage box', 'antiseptic wipes', 'digital thermometer', 'pain reliever bottle', 'cold medicine box', 'allergy relief tablets', 'prescription bottle organizer', 'weekly pill case', 'heating pad cover', 'bathroom scale battery',
'step stool foldable', 'laundry hamper liner', 'storage basket liner', 'under sink pull out drawer', 'drawer organizer plastic', 'cabinet shelf riser', 'trash can liner roll', 'recycling bin liner', 'toilet paper basket', 'plunger storage cabinet',
'air freshener plug in', 'air freshener spray', 'scent diffuser refill', 'essential oil diffuser', 'candle snuffer', 'humidifier filter replacement', 'dehumidifier water bucket', 'wall decor shelf', 'picture frame glass', 'wall clock battery',

'floor rug runner', 'window blind replacement slats', 'window curtain liner', 'curtain rod brackets', 'door hook over door', 'cleaning supply basket', 'glass cleaner refill', 'all purpose spray refill', 'disinfecting wipe refill', 'bathroom cleaner refill',
'toilet cleaner tablets', 'drain snake', 'scrub sponge heavy duty', 'microfiber towel set', 'paper towel holder wall', 'rubber glove storage clip', 'broom wall mount', 'dustpan replacement', 'mop replacement head', 'steam cleaner pads',

'vacuum hose attachment', 'smoke detector battery', 'carbon monoxide alarm mount', 'fire extinguisher bracket', 'plumbing tape roll', 'pipe joint compound', 'replacement faucet handles', 'replacement shower cartridge', 'caulk tube spare', 'grout repair kit',

'toilet seat bumpers', 'toilet tank bolts', 'toilet tank gasket', 'toilet flush valve', 'toilet handle chain', 'toilet shut off valve', 'toilet flange', 'toilet auger', 'toilet cleaning tablets', 'toilet deodorizer discs',
'bidet control knob', 'bidet water filter', 'sink faucet supply kit', 'faucet aerator key', 'sink drain assembly', 'sink strainer basket', 'vanity drawer pulls', 'vanity door hinges', 'medicine cabinet mirror shelf', 'medicine cabinet lock',
'mirror frame kit', 'mirror mounting hardware', 'light fixture mounting plate', 'vanity light bar', 'ceiling exhaust grille', 'fan timer switch', 'shower wall panels', 'shower tile trim', 'shower drain cover', 'shower drain hair catcher',
'shower valve trim kit', 'shower temperature control valve', 'shower hose bracket', 'shower head filter', 'shower arm flange', 'shower door sweep', 'shower door bottom seal', 'bathtub drain gasket', 'bathtub overflow gasket', 'bath spout diverter',
'bath tray extender', 'bath pillow suction cups', 'towel rack mounting kit', 'towel bar brackets', 'hand towel ring mount', 'robe hook screws', 'bath towel storage basket', 'hand towel storage tray', 'washcloth storage bin', 'bath mat holder',

'shower mat suction cups', 'toilet seat hinge bolts', 'soap dispenser pump', 'hand soap refill gallon', 'bar soap storage tin', 'toothbrush sanitizer', 'electric toothbrush head cover', 'toothpaste travel tube', 'mouthwash dispenser pump', 'floss threaders',
'razor blade disposal case', 'razor travel cover', 'shaving brush', 'aftershave balm', 'hair dryer concentrator nozzle', 'hair straightener pouch', 'curling iron heat resistant glove', 'hair brush cleaning tool', 'comb detangler spray', 'hair clip storage box',
'bobby pin magnetic holder', 'hair tie storage pouch', 'hair styling tray', 'shampoo travel bottles', 'conditioner travel bottles', 'body wash refill pouch', 'soap bar holder tray', 'loofah replacement pack', 'bath sponge replacement pack', 'bath brush replacement head',

'nail clipper case', 'tweezer set', 'cotton swab refill pack', 'cotton ball refill pack', 'makeup remover cloth set', 'makeup wipe refill pack', 'facial cleansing brush', 'face lotion pump bottle', 'body lotion refill pouch', 'deodorant storage bin',
'perfume organizer tray', 'cologne organizer tray', 'makeup vanity organizer', 'makeup brush drying rack', 'foundation pump dispenser', 'mascara storage case', 'eyeliner storage box', 'eyeshadow brush set', 'lipstick organizer case', 'lip balm organizer box',
'nail polish storage case', 'nail polish remover pads', 'bath salt scoop', 'bubble bath pump bottle', 'first aid cabinet shelf', 'bandage refill pack', 'antiseptic spray bottle', 'digital thermometer batteries', 'pain reliever organizer tray', 'medicine lock box',

'weekly pill organizer large', 'heating pad controller', 'bathroom scale replacement feet', 'step stool non slip pads', 'laundry hamper wheels', 'storage basket stacker', 'under sink storage shelf', 'drawer organizer expandable', 'cabinet moisture absorber', 'trash can replacement lid',
'recycling bin divider insert', 'toilet paper holder stand', 'plunger drip tray', 'toilet brush replacement head', 'air freshener automatic refill', 'scent diffuser sticks', 'essential oil storage tray', 'candle storage jar', 'humidifier cleaning brush', 'dehumidifier filter replacement',
'wall art mounting hooks', 'picture frame backing board', 'wall clock mounting hook', 'floor rug anti slip pad', 'window blind cleaning brush', 'window curtain tiebacks', 'curtain rod extension', 'door stopper wall mount', 'cleaning caddy large', 'glass cleaner microfiber cloth',

'all purpose cleaning brush', 'disinfectant spray bottle', 'bathroom cleaner scrub pad', 'toilet bowl brush refill', 'drain clog remover tool', 'scrub brush long handle', 'microfiber dust mitt', 'paper towel refill pack', 'rubber glove refill pack', 'broom replacement bristles',
'dustpan wall clip', 'mop handle replacement', 'steam cleaner refill pads', 'vacuum filter replacement', 'smoke detector mounting bracket', 'carbon monoxide alarm battery pack', 'fire extinguisher gauge check tag', 'plumbing repair seal kit', 'pipe wrench adjustable', 'caulk finishing tool',

'replacement faucet supply lines', 'replacement shower head hose', 'grout cleaning brush', 'tile scrub brush', 'tile sealer', 'bathroom silicone remover', 'mirror cleaning wipes', 'sink polishing kit', 'drain stopper replacement', 'shower curtain liner magnets',

'toilet replacement seat bolts', 'toilet tank repair kit', 'toilet flush lever replacement', 'toilet water supply valve', 'toilet flange repair ring', 'toilet seal gasket', 'toilet seat cushion pads', 'toilet night light', 'toilet cleaning wand', 'toilet rim brush',
'bidet mounting kit', 'bidet hose replacement', 'sink faucet handle kit', 'faucet cartridge replacement', 'sink drain pipe extension', 'sink mounting hardware kit', 'vanity countertop sealer', 'vanity drawer slides', 'medicine cabinet hinge kit', 'medicine cabinet replacement mirror',
'mirror frame replacement kit', 'mirror anti fog spray', 'vanity light bulb pack', 'light fixture glass cover', 'ceiling exhaust fan motor replacement', 'fan vent cleaning brush', 'shower tile caulk', 'shower grout repair pen', 'shower drain hair strainer', 'shower head extension arm',
'shower hose replacement', 'shower door roller replacement', 'shower door handle screws', 'bathtub drain stopper chain', 'bathtub caulk strip', 'bath spout replacement', 'bath overflow plate screws', 'bath tray soap holder', 'towel bar end caps', 'towel ring mounting plate',

'robe hook mounting screws', 'bath towel shelf bracket', 'hand towel hook set', 'washcloth organizer basket', 'bath mat anti slip backing', 'shower mat hanger', 'toilet lid hinge replacement', 'soap pump refill tube', 'toothbrush travel sanitizer', 'toothpaste squeezer tool',
'mouthwash measuring cup', 'floss refill cartridge', 'razor blade refill pack', 'shaving cream brush', 'aftershave splash bottle', 'hair dryer replacement filter', 'hair straightener heat pad', 'curling iron replacement clamp', 'hair brush storage cup', 'comb storage tray',
'hair clip travel case', 'bobby pin storage tin', 'hair tie organizer box', 'hair spray storage bin', 'shampoo bottle holder rack', 'conditioner bottle holder rack', 'body wash shower rack', 'soap dish wall mount', 'loofah suction holder', 'bath sponge storage basket',

'bath brush wall hook', 'nail clipper refill set', 'tweezer sharpening tool', 'cotton swab holder jar', 'cotton ball glass jar', 'makeup remover pump bottle', 'makeup wipe travel case', 'facial cleanser refill pouch', 'face lotion storage bottle', 'body lotion pump replacement',
'deodorant organizer drawer', 'perfume storage box', 'cologne storage case', 'makeup mirror light strip', 'makeup brush organizer cup', 'foundation display tray', 'mascara drawer organizer', 'eyeliner case holder', 'eyeshadow storage drawer', 'lipstick display stand',
'lip balm storage case', 'nail polish carrying case', 'nail polish remover bottle', 'bath salt storage jar', 'bubble bath storage bottle', 'first aid refill tray', 'bandage organizer case', 'antiseptic refill bottle', 'thermometer storage case', 'medicine organizer cabinet',

'pill cutter', 'pill crusher', 'heating pad storage bag', 'bathroom scale calibration weight', 'step stool rubber feet', 'laundry hamper replacement liner', 'storage basket lid cover', 'under sink mat', 'drawer liner roll', 'cabinet shelf protector',
'trash can foot pedal replacement', 'recycling bin lid replacement', 'toilet paper wall cabinet', 'plunger storage base', 'toilet brush drip tray', 'air freshener refill cartridge', 'scent diffuser oil refill', 'essential oil dropper set', 'candle storage tin', 'humidifier replacement wick',
'dehumidifier drain hose', 'wall art frame set', 'picture frame hanging wire', 'wall clock replacement battery pack', 'floor rug corner tape', 'window blind cord replacement', 'window curtain rod finials', 'curtain rod center support', 'door hook adhesive', 'cleaning supply organizer rack',

'glass cleaner spray bottle', 'all purpose cleaner gallon', 'disinfectant wipe container', 'bathroom cleaner foaming spray', 'toilet bowl cleaner brush set', 'drain clog remover liquid', 'scrub brush replacement head', 'microfiber cleaning cloth pack', 'paper towel holder counter', 'rubber glove storage hook',
'broom replacement handle', 'dustpan replacement handle', 'mop bucket replacement wringer', 'steam cleaner solution', 'vacuum cleaner brush attachment', 'smoke detector spare battery', 'carbon monoxide alarm spare unit', 'fire extinguisher inspection tag', 'plumbing gasket assortment', 'pipe leak repair clamp',

'replacement faucet hose', 'replacement shower valve kit', 'grout sealer applicator', 'tile polish solution', 'bathroom caulk finishing tool', 'mirror hanging clips', 'sink drain snake tool', 'shower curtain rod brackets', 'shower curtain liner replacement', 'bathroom storage tower',

'toilet paper bulk pack', 'bath towel bulk set', 'hand towel bulk set', 'washcloth bulk set', 'bath mat bulk set', 'soap refill bulk pack', 'toothpaste bulk pack', 'mouthwash bulk bottle', 'razor refill bulk pack', 'shampoo bulk bottle',
'conditioner bulk bottle', 'body wash bulk bottle', 'cotton swab bulk pack', 'cotton ball bulk pack', 'makeup wipe bulk pack', 'bandage bulk box', 'antiseptic wipe bulk pack', 'pain reliever bulk bottle', 'laundry detergent small bottle', 'fabric softener small bottle',

'bathroom drawer organizer large', 'bathroom shelf riser', 'under sink pull out organizer', 'over toilet storage cabinet', 'over toilet shelf unit', 'bathroom corner shelf', 'wall mounted storage basket', 'bathroom countertop tray', 'toothbrush holder wall mount', 'soap dispenser wall mount',
'towel hook wall mount', 'robe hook wall mount', 'bath towel ladder', 'bathroom ladder shelf', 'bathroom rolling cart', 'bathroom cabinet organizer', 'bathroom drawer divider', 'bathroom shelf liner', 'bathroom hamper small', 'bathroom trash bin small', 
'beard trimmer', 'beard trimmer guard set', 'beard oil', 'beard balm', 'mustache wax', 'shaving bowl', 'shaving soap puck', 'shaving stand', 'electric shaver', 'electric shaver cleaning station', 'nose hair trimmer', 'eyebrow trimmer',

'makeup primer', 'makeup setting spray', 'concealer tube', 'color corrector palette', 'contour stick', 'bronzer compact', 'highlighter compact', 'blush compact', 'eyebrow pomade', 'false eyelashes', 'eyelash glue', 'lip liner pencil', 'lip gloss tube', 'lip stain',

'facial steamer', 'facial ice roller', 'pore vacuum device', 'LED face mask', 'microdermabrasion device', 'derma roller', 'jade roller', 'facial cleansing brush',

'scalp massager', 'scalp scrub', 'hair mask jar', 'leave in conditioner spray', 'dry shampoo', 'heat protectant spray', 'hair mousse', 'root touch up spray', 'hair serum', 'hair oil treatment', 'silk hair wrap', 'shower cap', 'hair cutting scissors', 'hair thinning shears', 'barber cape', 'hair coloring kit',

'bathrobe', 'spa headband', 'spa wrap towel', 'bath bomb set', 'eucalyptus shower bundle', 'shower aromatherapy tablets', 'exfoliating gloves', 'pumice stone', 'foot file', 'foot spa basin',

'handheld steam cleaner', 'electric scrubber brush', 'mold remover gel', 'hard water stain remover', 'lime scale remover', 'moisture meter', 'leak detection alarm', 'water sensor alarm',

'rainfall shower system', 'dual body spray system', 'shower steam generator', 'glass shower coating kit', 'shower glass squeegee',

'freestanding soaking tub', 'whirlpool bathtub motor', 'bathtub heater element',

'heated towel rack wall mounted', 'towel drying stand',

'smart mirror display', 'LED vanity mirror with magnification', 'motion sensor night light',

'over door towel rack', 'over door mirror', 'rolling storage cart narrow', 'stackable acrylic organizer bins', 'rotating cosmetic organizer', 'linen tower cabinet',

'potty training seat', 'child faucet extender', 'baby bath tub', 'baby grooming kit',

'pet shampoo', 'pet grooming brush', 'pet nail trimmer',

'contact lens solution', 'contact lens case', 'retainer case', 'denture cup', 'denture cleaning tablets',

'portable space heater small', 'bathroom wall heater', 'heated floor mat',

'travel toiletry organizer hanging', 'travel makeup case structured',

'decorative vanity tray marble', 'floating wall shelf bathroom', 'freestanding bathroom cabinet',

'hand sanitizer dispenser automatic', 'UV toothbrush sterilizer box',

'smart humidity monitor', 'digital hygrometer thermometer',

'compact dehumidifier electric', 'humidifier ultrasonic tabletop'
],

        'Dining room': ['dining table', 'table base', 'table legs', 'table leaf insert', 'table leaf storage bag', 'dining chairs', 'arm chairs', 'side chairs', 'bench seating', 'chair cushions',
'seat covers', 'chair floor protectors', 'china cabinet', 'hutch cabinet', 'buffet table', 'sideboard', 'bar cabinet', 'wine cabinet', 'curio cabinet', 'display cabinet',
'console table', 'serving cart', 'bar cart', 'floating shelves', 'wall mounted shelves', 'storage cabinet', 'drawer organizers', 'cabinet shelf liner', 'table pad protector', 'table runner',

'placemats', 'cloth napkins', 'napkin rings', 'napkin holder', 'tablecloth', 'tablecloth clips', 'table centerpiece', 'decorative tray', 'candle holders', 'candles',
'wall art', 'picture frames', 'wall mirror', 'wall clock', 'area rug', 'rug pad', 'floor runner', 'ceiling light fixture', 'chandelier', 'light bulbs',
'window curtains', 'curtain rod', 'window blinds', 'window shades', 'curtain tie backs', 'door stop', 'floor lamp', 'table lamp', 'lamp shade', 'lamp bulbs',

'dinner plates', 'salad plates', 'bread plates', 'charger plates', 'bowls', 'soup bowls', 'cereal bowls', 'serving bowls', 'platter', 'serving platter',
'gravy boat', 'butter dish', 'salt shaker', 'pepper shaker', 'salt grinder', 'pepper grinder', 'sugar bowl', 'cream pitcher', 'water pitcher', 'carafe',
'wine glasses', 'champagne flutes', 'cocktail glasses', 'highball glasses', 'lowball glasses', 'beer mugs', 'pint glasses', 'shot glasses', 'coffee cups', 'tea cups',

'saucers', 'mugs', 'flatware set', 'dinner forks', 'salad forks', 'dinner knives', 'steak knives', 'soup spoons', 'teaspoons', 'serving spoons',
'serving forks', 'ladle', 'tongs', 'cake server', 'pie server', 'bread basket', 'bread basket liner', 'cake stand', 'tiered tray', 'dessert plates',
'food storage containers', 'leftover storage containers', 'china storage case', 'glassware storage box', 'silverware storage chest', 'tableware organizer tray', 'buffet warming trays', 'chafing dish set', 'fondue pot', 'raclette grill',

'wine rack', 'wine opener', 'wine stopper', 'wine aerator', 'ice bucket', 'ice tongs', 'bar tool set', 'cocktail shaker', 'bar spoon', 'jigger',
'decanter', 'liquor decanter', 'drink mixing glass', 'coasters', 'coaster holder', 'serving trays', 'drink dispenser', 'beverage tub', 'coffee carafe', 'tea pot',

'seasonal centerpiece decor', 'holiday table runner', 'holiday placemats', 'holiday napkins', 'holiday candle holders', 'ornament storage box', 'china polishing cloth', 'silver polish', 'furniture polish', 'glass cleaner',
'all purpose cleaner', 'disinfecting wipes', 'microfiber cloths', 'paper towels', 'trash can', 'trash bags', 'recycling bin', 'step stool', 'storage baskets', 'decorative boxes',

'table leg hardware kit', 'table corner protectors', 'table extension slides', 'table leveling pads', 'table leaf alignment pins', 'chair replacement legs', 'chair leg caps', 'chair glide pads', 'chair seat screws', 'chair back support brace',
'bench leg protectors', 'bench cushion ties', 'china cabinet shelf clips', 'china cabinet glass panels', 'hutch drawer pulls', 'buffet cabinet hinges', 'sideboard drawer dividers', 'bar cabinet lock', 'wine cabinet shelf inserts', 'curio cabinet lighting kit',
'display cabinet glass cleaner kit', 'console table drawer liner', 'serving cart wheels', 'bar cart bottle holder insert', 'floating shelf brackets', 'wall shelf anchors', 'storage cabinet door bumpers', 'drawer organizer expandable', 'cabinet shelf riser', 'table pad storage tube',

'placemat storage rack', 'napkin storage bin', 'napkin ring storage box', 'tablecloth storage bag', 'tablecloth ironing spray', 'centerpiece storage crate', 'decorative tray liner', 'candle snuffer', 'candle wick trimmer', 'wall art hanging kit',
'picture frame mounting hooks', 'mirror mounting brackets', 'wall clock battery pack', 'area rug corner tape', 'rug cleaning spray', 'floor runner anti slip pad', 'chandelier cleaning cloth', 'light dimmer switch', 'curtain rod brackets', 'window blind cleaning brush',
'curtain ring set', 'door draft stopper', 'floor lamp replacement cord', 'table lamp finial', 'lamp harp', 'replacement light bulbs pack', 'dinner plate storage rack', 'salad plate storage rack', 'charger plate storage case', 'bowl storage shelf',

'serving bowl storage bin', 'platter storage rack', 'gravy boat storage box', 'butter dish storage case', 'salt cellar', 'pepper mill', 'sugar dispenser', 'cream pitcher storage tray', 'water carafe lid', 'wine glass rack',
'champagne flute storage case', 'cocktail glass storage case', 'highball glass storage rack', 'beer mug storage crate', 'coffee cup organizer', 'tea cup display shelf', 'mug tree', 'flatware drawer tray', 'silverware polishing cloth', 'steak knife storage block',

'serving spoon set', 'serving fork stainless steel', 'ladle holder', 'tongs stainless steel', 'cake knife', 'pie server stainless steel', 'bread knife', 'bread cutting board', 'cake dome cover', 'dessert stand cover',
'leftover storage lid organizer', 'china plate protectors', 'glassware padding inserts', 'silverware chest lock', 'tableware storage labels', 'buffet fuel cans', 'chafing dish fuel holder', 'fondue forks', 'raclette spatulas', 'wine bottle chiller',

'wine cork holder', 'wine preservation pump', 'wine bottle stopper set', 'ice scoop', 'ice mold tray', 'bar mat', 'cocktail strainer', 'mudler', 'drink stirrers', 'drink garnish tray',
'liquor pour spouts', 'coaster set stone', 'coaster set cork', 'serving tray handles', 'beverage dispenser stand', 'coffee warmer plate', 'tea infuser', 'tea strainer', 'seasonal table decor bin', 'holiday china storage case',

'silver polish cloth set', 'furniture scratch repair kit', 'glass cabinet lock', 'all purpose spray refill', 'disinfectant spray bottle', 'microfiber towel pack', 'paper towel holder counter', 'trash liner roll', 'recycling liner roll', 'step stool folding',
'storage basket liner', 'decorative box lid', 'buffet warming tray cover', 'chafing dish lid holder', 'bar cabinet bottle rack', 'wine rack wall mount', 'curio cabinet shelf riser', 'display cabinet lock', 'console table anti tip kit', 'dining chair cushion replacements',

'table refinishing kit', 'table polish cloth', 'table scratch repair marker', 'table leg bolts', 'table stabilizer brackets', 'chair upholstery cleaner', 'chair seat cushion inserts', 'chair back pads', 'bench seat storage bins', 'bench cushion replacement',
'china cabinet light bulbs', 'china cabinet glass shelf inserts', 'hutch anti tip kit', 'buffet drawer slides', 'sideboard door hinges', 'bar cabinet glass rack', 'wine cabinet thermometer', 'curio cabinet glass cleaner', 'display cabinet shelf lighting', 'console table corner braces',
'serving cart handle grips', 'bar cart wheel locks', 'floating shelf level tool', 'wall shelf decorative trim', 'storage cabinet key set', 'drawer liner non slip', 'cabinet door handle replacements', 'table leaf support bracket', 'placemat holder tray', 'napkin folding guide',

'tablecloth clips stainless steel', 'centerpiece vase set', 'decorative bowl set', 'candle storage box', 'candle lighter', 'wall art dust cover', 'picture frame backing board', 'mirror cleaning spray', 'wall clock mounting screws', 'area rug beater tool',
'rug storage roll', 'chandelier replacement crystals', 'light fixture canopy', 'curtain rod finials', 'window blind replacement slats', 'curtain tieback hooks', 'floor lamp base weight', 'table lamp replacement switch', 'lamp cord cover', 'bulb storage organizer',

'dinner plate dividers', 'salad plate dividers', 'charger plate padding', 'bowl stacking pads', 'serving bowl lid', 'platter storage sleeve', 'gravy boat saucer', 'butter dish replacement lid', 'salt grinder refill', 'pepper grinder refill',
'sugar bowl lid', 'cream pitcher lid', 'water pitcher replacement spout', 'wine glass cleaning brush', 'champagne flute cleaning brush', 'cocktail glass cleaning cloth', 'beer mug cleaning brush', 'coffee cup saucer set', 'tea cup saucer replacements', 'mug storage cabinet insert',

'flatware polishing kit', 'dinner fork replacements', 'salad fork replacements', 'dinner knife replacements', 'steak knife sharpening kit', 'soup spoon replacements', 'teaspoon replacements', 'serving spoon replacement', 'serving fork replacement', 'ladle stainless steel',
'tongs silicone tip', 'cake cutter set', 'pie server replacement', 'bread basket cloth liner', 'cake stand dome cover', 'dessert plate storage box', 'leftover container glass', 'leftover container plastic', 'china display stand', 'glassware display stand',

'silverware chest lining', 'buffet warming tray fuel cover', 'chafing dish rack', 'fondue burner replacement', 'raclette grill stone plate', 'wine rack floor stand', 'wine bottle storage crate', 'wine opener replacement worm', 'wine stopper silicone', 'wine aerator stand',
'ice bucket liner', 'bar spoon long handle', 'jigger stainless steel', 'cocktail shaker lid', 'cocktail strainer spring', 'mudler wooden', 'drink stirrer reusable', 'garnish knife small', 'liquor bottle display stand', 'coaster holder rack',

'serving tray non slip liner', 'beverage dispenser spigot', 'coffee carafe replacement lid', 'tea pot infuser insert', 'seasonal decor table sign', 'holiday napkin holder', 'holiday centerpiece box', 'china storage divider', 'silver storage anti tarnish strips', 'furniture polish spray',
'glass cabinet shelf protector', 'all purpose cleaner gallon', 'disinfectant wipe refill', 'microfiber polishing cloth', 'paper towel bulk pack', 'trash can lid replacement', 'recycling bin divider insert', 'step stool rubber feet', 'storage basket stacker', 'decorative box storage crate',

'chair cushion storage bag', 'bench cushion ties replacement', 'china cabinet door lock', 'buffet cabinet key spare', 'sideboard anti tip bracket', 'bar cabinet lighting strip', 'wine glass rack under cabinet', 'curio cabinet shelf clips', 'display cabinet glass protector', 'console table anti slip pads',

'table leg levelers', 'table support beam', 'table brace kit', 'table hardware screws', 'chair leg braces', 'chair replacement cushions', 'chair upholstery kit', 'bench frame bolts', 'bench cushion foam', 'china cabinet door handles',
'china cabinet shelf lighting kit', 'hutch shelf brackets', 'buffet door bumpers', 'sideboard shelf supports', 'bar cabinet wine glass holders', 'wine cabinet bottle dividers', 'curio cabinet lock', 'display cabinet LED strip', 'console table wall anchors', 'serving cart bottle rack',

'bar cart glass holder insert', 'floating shelf anchor kit', 'wall shelf mounting screws', 'storage cabinet anti tip kit', 'drawer glide replacement', 'cabinet hinge repair kit', 'table pad replacement', 'placemat storage box', 'napkin press iron', 'tablecloth hanger rack',
'centerpiece decorative stones', 'decorative tray handles', 'candle storage sleeve', 'candle wax remover', 'wall art frame set', 'picture hanging wire kit', 'mirror anti fog cloth', 'wall clock repair kit', 'area rug cleaning kit', 'rug corner grippers',

'chandelier bulb set', 'light fixture glass replacement', 'curtain rod center support', 'window blind repair cord', 'curtain tieback rings', 'floor lamp dimmer cord', 'table lamp spare base', 'lamp bulb organizer box', 'dinner plate storage crate', 'salad plate storage crate',
'charger plate storage sleeve', 'bowl display stand', 'serving bowl rack', 'platter display easel', 'gravy boat tray', 'butter dish cover spare', 'salt cellar lid', 'pepper mill spare parts', 'sugar bowl spoon', 'cream pitcher tray',

'water pitcher filter insert', 'wine glass storage chest', 'champagne flute storage chest', 'cocktail glass organizer', 'beer mug display rack', 'coffee cup wall rack', 'tea cup hanging rack', 'mug cabinet riser', 'flatware chest insert', 'silverware anti tarnish cloth',
'steak knife block insert', 'serving utensil organizer', 'ladle hook rack', 'tongs storage clip', 'cake knife storage sleeve', 'pie server storage sleeve', 'bread knife storage sleeve', 'bread basket cover', 'cake stand replacement base', 'dessert plate display rack',

'leftover storage bin large', 'china cabinet plate stand', 'glassware padding wrap', 'silverware polishing gloves', 'buffet warming tray lid', 'chafing dish cover', 'fondue pot burner cap', 'raclette grill replacement cord', 'wine rack expansion kit', 'wine bottle cork display',
'wine opener stand', 'wine stopper holder', 'wine aerator filter', 'ice bucket stand', 'bar tool organizer tray', 'cocktail shaker replacement seal', 'cocktail strainer replacement spring', 'mudler storage case', 'drink stirrer holder', 'garnish tray lid',

'liquor decanter stopper', 'coaster storage drawer', 'serving tray stacking rack', 'beverage dispenser cleaning brush', 'coffee carafe warming plate', 'tea pot replacement lid', 'seasonal table runner storage box', 'holiday decor organizer', 'china cabinet polish cloth', 'furniture touch up markers',
'glass cabinet door bumpers', 'all purpose cleaner spray', 'disinfectant gallon refill', 'microfiber polishing mitt', 'paper towel holder wall mount', 'trash liner bulk pack', 'recycling bin lid replacement', 'step stool heavy duty', 'storage basket lid', 'decorative box large',

'chair cushion ties', 'bench storage drawer', 'china cabinet shelf liner', 'buffet anti slip mat', 'sideboard drawer liner', 'bar cabinet bottle mat', 'wine glass cleaning solution', 'curio cabinet display stand', 'display cabinet door magnet', 'console table drawer divider',

'table leveling shims', 'chair leg felt pads', 'bench leg levelers', 'china cabinet key replacement', 'hutch decorative trim', 'buffet cabinet shelf riser', 'sideboard anti tip strap', 'bar cabinet LED lighting', 'wine cabinet humidity monitor', 'curio cabinet shelf protector',
'display cabinet glass polish', 'console table leg braces', 'serving cart handle replacement', 'bar cart shelf liner', 'floating shelf decorative trim', 'wall shelf reinforcement bracket', 'storage cabinet replacement shelves', 'drawer knob replacements', 'cabinet latch replacement', 'table leaf lock clips',
'banquette', 'banquette cushion set', 'banquette slipcover', 'banquette storage bench', 'captain chair', 'swivel dining chair', 'stacking dining chairs', 'folding dining chairs', 'chair booster seat', 'high chair',

'chair upholstery fabric', 'chair slipcover set', 'chair cushion foam', 'chair cushion ties', 'chair armrest pads', 'chair leg felt pads', 'chair leg braces', 'chair backrest screws', 'chair spindle', 'chair seat webbing',

'dining table extension mechanism', 'table apron', 'table stretcher bar', 'table support beam', 'table corner braces', 'table underside brackets', 'table edge protectors', 'table top glass cover', 'tabletop sealer', 'tabletop protector film',

'place card holder', 'place cards', 'menu cards', 'napkin fold board', 'napkin press', 'table number stand', 'table decor riser', 'table garland', 'runner clips', 'table skirt',

'charger plate stand', 'plate easel stand', 'plate display hanger', 'bowl display riser', 'platter display stand', 'serving dish display stand', 'china display lighting puck', 'cabinet display turntable', 'display risers acrylic', 'display risers wood',

'china cabinet door magnet', 'china cabinet door catch', 'china cabinet door bumpers', 'china cabinet key', 'china cabinet lock cylinder', 'china cabinet glass shelf supports', 'china cabinet shelf pins', 'china cabinet shelf brackets', 'china cabinet leveling feet', 'china cabinet anti tip straps',

'hutch shelf pins', 'hutch shelf supports', 'hutch door catch', 'hutch door bumpers', 'hutch door hinges soft close', 'hutch cabinet feet levelers', 'hutch cabinet wall anchor kit', 'hutch glass shelf supports', 'hutch lighting remote', 'hutch LED puck lights',

'sideboard shelf pins', 'sideboard shelf supports', 'sideboard door catch', 'sideboard door bumpers', 'sideboard key', 'sideboard lock cylinder', 'sideboard adjustable feet', 'sideboard anti tip strap', 'sideboard cable grommet', 'sideboard cord management clips',

'bar cabinet wine bottle dividers', 'bar cabinet shelf liner roll', 'bar cabinet key', 'bar cabinet lock cylinder', 'bar cabinet magnetic catch', 'bar cabinet LED under shelf lights', 'bar cabinet glass shelf pins', 'bar cabinet leveling feet', 'bar cabinet anti tip strap', 'bar cabinet moisture absorber',

'wine fridge', 'wine fridge shelves', 'wine fridge drip tray', 'wine fridge charcoal filter', 'wine fridge thermometer probe', 'wine fridge humidity gauge', 'wine fridge door handle', 'wine fridge replacement gasket', 'wine fridge power cord', 'wine fridge cleaning kit',

'wine bottle storage bins', 'wine bottle label tags', 'wine bottle marker pen', 'wine bottle drip rings', 'wine bottle foil cutter', 'wine bottle opener electric', 'wine corkscrew lever', 'wine cork extractor', 'wine glass charms', 'wine glass polishing cloth',

'bar caddy', 'bar napkins', 'cocktail napkins', 'drink stirrer set', 'cocktail picks', 'cocktail pick holder', 'bitters bottles', 'bitters dropper caps', 'simple syrup bottles', 'mixer bottles',

'ice sphere mold', 'whiskey stones', 'whiskey stone pouch', 'bar strainer fine mesh', 'cocktail shaker weighted tins', 'cocktail shaker insulation sleeve', 'mixing spoon set', 'muddler silicone', 'jigger measuring set', 'cocktail rimmer',

'liquor bottle shelf', 'liquor bottle risers', 'liquor bottle pour spout caps', 'pour spout dust covers', 'speed pourer set', 'bar rail mat', 'bar rail liner', 'bar towel set', 'bar towel holder', 'glass drying mat',

'pitcher infuser insert', 'drink dispenser infuser tube', 'drink dispenser ice core', 'drink dispenser drip tray', 'beverage tub drain plug', 'beverage tub liner', 'ice bucket stand base', 'ice bucket drip mat', 'ice scoop holder', 'ice tongs holder',

'tea kettle electric', 'tea kettle base', 'tea canister set', 'tea canister labels', 'tea infuser basket', 'tea infuser spoon', 'tea warmer candle base', 'tea warmer plate', 'tea spoon set', 'tea storage organizer',

'coffee bean canister', 'coffee scoop', 'coffee filter basket', 'coffee pod holder', 'coffee pod drawer', 'coffee cup hooks', 'mug hook rack', 'cup saucer rack', 'cupboard mug riser', 'cup stacking stands',

'serving bowl with lid', 'serving bowl lid organizer', 'serving dish with cover', 'serving dish warming base', 'platter cover', 'domed platter cover', 'food tent mesh cover', 'cake slicer', 'cake knife set', 'pie cutter wheel',

'cheese board', 'cheese knives', 'cheese markers', 'cheese marker chalk', 'charcuterie board', 'charcuterie bowls', 'olive dish', 'dip bowl set', 'chip and dip platter', 'nut bowl set',

'salad bowl set', 'salad servers', 'salad dressing cruet', 'oil bottle dispenser', 'vinegar bottle dispenser', 'salt cellar spoon', 'pepper shaker cap', 'sugar tongs', 'tea strainer stand', 'honey jar',

'cloth napkin laundry bag', 'linen storage box', 'linen drawer sachets', 'table linen storage dividers', 'placemat wipes', 'fabric lint roller', 'fabric shaver', 'ironing board tabletop', 'iron travel', 'steamer travel',

'centerpiece foam blocks', 'floral wire', 'floral tape', 'flower frog', 'vase filler beads', 'vase filler stones', 'table decor LED string lights', 'fairy light battery pack', 'battery pack organizer', 'remote timer plug',

'chandelier chain', 'chandelier ceiling hook', 'chandelier mounting bracket', 'chandelier canopy screws', 'chandelier wire nuts', 'chandelier dimmer remote', 'chandelier bulb adapters', 'chandelier dusting wand', 'chandelier cleaning spray', 'chandelier crystal clip',

'wall sconce', 'wall sconce bulb', 'wall sconce shade', 'sconce mounting screws', 'picture light', 'picture light bulb', 'picture light remote', 'accent uplight', 'uplight power adapter', 'uplight floor base',

'curtain track', 'curtain track hooks', 'curtain weights', 'blackout curtain liner', 'sheer curtain panels', 'valance', 'valance rod', 'window film', 'privacy window film', 'blind wand replacement',

'decorative bowl', 'decorative vase', 'decorative pitcher', 'decorative lantern', 'tabletop sculpture', 'mantel clock', 'framed print', 'gallery wall frame set', 'mirror frame', 'mirror hanging wire',

'area rug cleaner machine', 'rug stain remover', 'rug deodorizer powder', 'rug brush', 'rug fringe comb', 'rug tape double sided', 'runner rug tape', 'rug grippers', 'rug corner weights', 'rug storage bag',

'felt pads bulk pack', 'furniture sliders', 'furniture leveling shims', 'furniture touch up wax sticks', 'furniture touch up crayons', 'wood filler', 'wood stain pen', 'wood polish cloth', 'wood cleaner concentrate', 'wood conditioner oil',

'cabinet deodorizer', 'cabinet moisture absorber', 'anti tarnish drawer liners', 'anti tarnish silver bags', 'anti tarnish strips', 'silver storage rolls', 'silver storage pouches', 'glassware drying cloth', 'dish drying rack', 'dish drying mat',

'trash can odor absorber', 'trash can deodorizer discs', 'trash can pedal replacement', 'trash can wheels', 'trash can bag cinch ring', 'recycling bin labels', 'recycling bin sorting stickers', 'recycling bin wheels', 'recycling bin bag insert', 'recycling bin odor absorber'
],
        "Office / Study": ['desk', 'standing desk', 'desk legs', 'desk drawer', 'desk hutch', 'desk return', 'keyboard tray', 'monitor stand', 'monitor riser', 'monitor arm',
'office chair', 'office chair mat', 'bookcase', 'bookshelf', 'filing cabinet', 'lateral file cabinet', 'storage cabinet', 'credenza', 'side table', 'console table',
'desk lamp', 'floor lamp', 'table lamp', 'ceiling light fixture', 'light bulbs', 'window blinds', 'window curtains', 'curtain rod', 'area rug', 'rug pad',

'desktop computer', 'computer tower', 'monitor', 'second monitor', 'laptop', 'tablet', 'docking station', 'keyboard', 'wireless keyboard', 'mouse',
'wireless mouse', 'mouse pad', 'extended mouse pad', 'webcam', 'microphone', 'headphones', 'headset', 'computer speakers', 'printer', 'scanner',
'printer stand', 'printer paper tray', 'printer ink cartridges', 'external hard drive', 'usb flash drives', 'router', 'modem', 'wifi extender', 'surge protector', 'power strip',

'extension cords', 'charging station', 'phone charger', 'tablet charger', 'laptop charger', 'cable organizer box', 'cord clips', 'cable sleeves', 'drawer organizers', 'desk organizer',
'pen holder', 'pencil holder', 'paper tray', 'letter tray', 'mail organizer', 'file folders', 'hanging file folders', 'file storage box', 'document storage box', 'safe box',

'paper shredder', 'laminator', 'laminating sheets', 'label maker', 'labels', 'calculator', 'desk calendar', 'wall calendar', 'bulletin board', 'whiteboard',
'whiteboard markers', 'dry erase eraser', 'push pins', 'stapler', 'staples', 'paper clips', 'binder clips', 'rubber bands', 'scissors', 'letter opener',

'hole punch', 'three hole punch', 'tape dispenser', 'adhesive tape', 'packing tape', 'glue sticks', 'liquid glue', 'correction tape', 'highlighters', 'permanent markers',
'notebooks', 'legal pads', 'sticky notes', 'index cards', 'binders', 'binder dividers', 'envelopes', 'manila envelopes', 'shipping envelopes', 'bubble mailers',

'printer paper ream', 'cardstock paper', 'photo paper', 'legal size paper', 'file cabinet dividers', 'document trays', 'document scanner tray', 'ink refill kit', 'printer cleaning sheets', 'usb hub',

'network switch', 'ethernet cables', 'hdmi cables', 'displayport cable', 'vga cable', 'power adapters', 'battery backup', 'external keyboard wrist rest', 'foot rest', 'seat cushion',
'throw blanket', 'decorative pillows', 'wall art', 'picture frames', 'wall clock', 'full length mirror', 'coat rack', 'umbrella stand', 'storage baskets', 'storage bins',

'cleaning caddy', 'microfiber cloths', 'all purpose cleaner', 'glass cleaner', 'disinfecting wipes', 'paper towels', 'trash can', 'trash bags', 'recycling bin', 'fire extinguisher',
'smoke detector', 'carbon monoxide detector', 'first aid kit', 'step stool', 'tool kit small', 'hammer', 'screwdriver set', 'measuring tape', 'wall anchors', 'picture hanging kit',

'desk leg levelers', 'desk corner protectors', 'desk cable grommet', 'desk drawer slides', 'desk drawer lock', 'keyboard wrist rest', 'monitor screen cleaner kit', 'monitor privacy screen', 'monitor power cable', 'monitor mounting screws',
'office chair armrest pads', 'office chair replacement wheels', 'chair floor protectors', 'bookcase shelf brackets', 'bookshelf anchors', 'filing cabinet key spare', 'file cabinet lock', 'file cabinet anti tip kit', 'storage cabinet shelf liner', 'credenza drawer divider',
'side table drawer liner', 'console table anti tip strap', 'desk lamp replacement bulb', 'floor lamp dimmer cord', 'table lamp replacement shade', 'ceiling light diffuser', 'curtain rod brackets', 'window blind cleaner tool', 'area rug corner tape', 'rug cleaning spray',

'desktop computer cables', 'computer cooling pad', 'monitor calibration tool', 'laptop stand adjustable', 'tablet stand holder', 'docking station power supply', 'keyboard cover', 'wireless mouse receiver', 'mouse pad wrist support', 'webcam privacy cover',
'microphone pop filter', 'headphone stand', 'headset charging dock', 'speaker isolation pads', 'printer cable usb', 'scanner cable usb', 'printer ink storage box', 'external hard drive case', 'usb flash drive organizer', 'router wall mount',

'modem power adapter', 'wifi extender wall plate', 'surge protector wall mount', 'power strip cord wrap', 'extension cord reel', 'charging cable organizer', 'phone dock stand', 'tablet charging cable spare', 'laptop sleeve case', 'cable management tray',
'cord concealment channel', 'drawer organizer expandable', 'desk drawer felt liner', 'pen refill pack', 'pencil sharpener', 'paper tray stacker', 'mail sorter wall mount', 'file folder labels', 'hanging file folder tabs', 'document safe fire resistant',

'shredder oil', 'laminator cleaning sheets', 'label maker tape refill', 'calculator battery', 'desk planner', 'wall calendar refill pages', 'bulletin board cork refill', 'whiteboard cleaner spray', 'whiteboard magnetic eraser', 'push pin container',
'staple remover', 'staple refill box', 'paper clip organizer', 'binder clip organizer', 'rubber band ball', 'scissor sharpener', 'letter opener stand', 'hole punch replacement blades', 'tape refill rolls', 'glue stick bulk pack',

'liquid glue bottle spare', 'correction fluid pen', 'highlighter pack', 'permanent marker pack', 'notebook storage crate', 'legal pad storage box', 'sticky note holder', 'index card organizer', 'binder storage rack', 'binder spine labels',
'envelope organizer tray', 'manila envelope storage box', 'shipping label roll', 'bubble mailer pack', 'printer paper storage bin', 'cardstock storage folder', 'photo paper storage sleeve', 'file cabinet hanging rails', 'document sorter rack', 'ink cartridge refill kit',

'printer maintenance kit', 'usb extension cable', 'network cable tester', 'ethernet wall plate', 'hdmi splitter', 'displayport adapter', 'vga adapter', 'universal power adapter', 'battery backup replacement battery', 'external keyboard cover',
'foot rest adjustable', 'seat cushion memory foam', 'throw blanket storage bag', 'decorative pillow covers', 'wall art hanging kit', 'picture frame backing board', 'wall clock battery pack', 'mirror mounting brackets', 'coat hanger set', 'umbrella drip tray',

'storage basket liner', 'storage bin lids', 'cleaning supply basket', 'microfiber duster', 'all purpose cleaner refill', 'glass cleaner refill', 'disinfectant spray bottle', 'paper towel holder wall mount', 'trash liner roll', 'recycling bin liner roll',
'fire extinguisher bracket', 'smoke detector battery', 'carbon monoxide alarm mount', 'first aid refill pack', 'step stool rubber feet', 'tool organizer tray', 'hammer wall hook', 'screw assortment kit', 'measuring tape retractable', 'wall repair patch kit',

'desk modesty panel', 'desk cable tray under mount', 'desk leveling shims', 'desk drawer handles', 'desk drawer dividers bamboo', 'keyboard tray brackets', 'monitor arm clamp', 'monitor riser shelf', 'office chair lumbar support', 'office chair gas lift cylinder',
'chair wheel casters set', 'bookcase shelf pins', 'bookshelf backing panel', 'filing cabinet drawer dividers', 'lateral file cabinet rails', 'storage cabinet door bumpers', 'credenza shelf supports', 'side table leg pads', 'console table drawer pulls', 'desk lamp dimmer switch',
'floor lamp base weight', 'table lamp finial', 'ceiling light mounting plate', 'curtain tieback hooks', 'window blind replacement cord', 'area rug anti slip pad', 'rug storage roll', 'desktop power supply', 'computer fan replacement', 'monitor replacement stand',

'laptop cooling fan', 'tablet screen protector', 'docking station cable kit', 'keyboard wrist pad', 'wireless mouse pad large', 'webcam mount clip', 'microphone stand desk mount', 'headphone cable extension', 'speaker wall mount', 'printer stand with drawers',
'scanner document feeder tray', 'printer ink organizer tray', 'external hard drive docking bay', 'usb flash drive case', 'router backup battery', 'modem coax cable', 'wifi extender ethernet cable', 'surge protector battery backup', 'power strip surge guard', 'extension cord floor cover',

'charging hub multi port', 'phone charging cable spare', 'tablet charging dock', 'laptop privacy filter', 'cable sleeve organizer', 'cord management clips', 'drawer divider plastic', 'desk organizer tray', 'pen storage box', 'pencil storage box',
'paper tray letter size', 'mail organizer drawer', 'file storage crate', 'document lock box', 'safe fireproof document box', 'paper shredder replacement blades', 'laminator pouch storage box', 'label maker case', 'calculator solar battery', 'desk calendar stand',

'wall calendar dry erase', 'bulletin board frame', 'whiteboard wall mount', 'whiteboard marker holder', 'push pin box', 'stapler heavy duty', 'staples bulk pack', 'paper clip tray', 'binder clip container', 'rubber band storage jar',
'scissors heavy duty', 'letter opener stainless steel', 'three hole punch heavy duty', 'tape dispenser weighted', 'adhesive tape bulk roll', 'packing tape gun', 'glue stick organizer', 'liquid glue refill bottle', 'correction tape refill', 'highlighter organizer',

'permanent marker organizer', 'notebook shelf rack', 'legal pad holder', 'sticky note dispenser', 'index card box', 'binder rack vertical', 'binder dividers labeled', 'envelope storage rack', 'shipping label printer', 'bubble mailer storage bin',
'printer paper cabinet', 'cardstock organizer tray', 'photo paper binder', 'file cabinet anti tip bracket', 'document tray stackable', 'ink cartridge storage case', 'printer head cleaning kit', 'usb hub powered', 'network switch rack mount', 'ethernet cable organizer',

'hdmi cable organizer', 'displayport cable spare', 'vga cable spare', 'power adapter organizer box', 'battery backup surge unit', 'external keyboard storage case', 'foot rest non slip', 'seat cushion cover', 'throw blanket folded storage bin', 'decorative pillow storage bag',
'wall art frame hooks', 'picture frame glass cleaner', 'wall clock repair battery', 'full length mirror stand kit', 'coat rack wall mount', 'umbrella stand liner', 'storage basket stacker', 'storage bin labels', 'cleaning supply shelf', 'microfiber cloth bulk pack',

'all purpose cleaner gallon', 'glass cleaner spray bottle', 'disinfectant wipes bulk pack', 'paper towel dispenser', 'trash can step lid', 'recycling sorter bins', 'fire extinguisher inspection tag', 'smoke detector spare unit', 'carbon monoxide spare unit', 'first aid cabinet wall mount',
'step stool folding', 'tool box medium', 'hammer rubber grip', 'screwdriver bit set', 'measuring tape clip', 'wall anchor assortment kit', 'picture hanging wire roll', 'cable tester kit', 'ethernet crimping tool', 'network wall jack kit',

'desk surface protector pad', 'desk corner guards', 'desk support brackets', 'desk hardware screw kit', 'keyboard tray replacement track', 'monitor mounting plate', 'monitor cable cover', 'office chair tilt mechanism', 'office chair base replacement', 'chair wheel floor protectors',
'bookcase anti tip strap', 'bookshelf shelf liners', 'filing cabinet label holder', 'file cabinet replacement lock', 'storage cabinet adjustable shelves', 'credenza cable grommet', 'side table reinforcement brackets', 'console table leg braces', 'desk lamp smart bulb', 'floor lamp dimmer switch',

'table lamp cord cover', 'ceiling light bulb pack', 'curtain rod center support', 'window blind mounting brackets', 'area rug corner protectors', 'rug vacuum attachment tool', 'desktop cable organizer tray', 'computer surge protector strip', 'monitor cleaning wipes', 'laptop docking cable',
'tablet charging cable spare', 'keyboard cleaning gel', 'mouse cleaning wipes', 'webcam cover slide', 'microphone shock mount', 'headphone stand wooden', 'speaker cable spool', 'printer paper catch tray', 'scanner glass cleaner', 'external hard drive cable spare',

'usb drive storage organizer', 'router ethernet switch', 'modem mounting shelf', 'wifi extender mounting kit', 'surge protector outlet cover', 'power strip wall bracket', 'extension cord storage reel', 'charging cable wall clips', 'phone dock charging station', 'tablet stand adjustable metal',
'laptop riser stand', 'cable concealment box', 'cord organizer sleeves', 'drawer organizer bamboo', 'desk drawer lock kit', 'pen refill organizer', 'pencil case organizer', 'paper tray stackable', 'mail sorter desktop', 'file storage tote',

'document fireproof bag', 'safe lock replacement key', 'shredder waste bin liner', 'laminator replacement rollers', 'label maker refill tape', 'calculator protective case', 'desk planner refill pages', 'wall calendar mount kit', 'bulletin board hanging kit', 'whiteboard tray ledge',
'push pin organizer tray', 'stapler replacement spring', 'staple storage box', 'paper clip magnetic holder', 'binder clip storage box', 'rubber band dispenser', 'scissor storage rack', 'letter opener display stand', 'three hole punch guide', 'tape refill organizer',

'adhesive tape dispenser wall mount', 'packing tape refill case', 'glue stick storage bin', 'liquid glue dispenser', 'correction tape bulk pack', 'highlighter storage tray', 'marker storage case', 'notebook storage cabinet', 'legal pad desk tray', 'sticky note organizer box',
'index card filing tray', 'binder storage cabinet', 'binder spine label kit', 'envelope filing drawer', 'shipping supply organizer', 'bubble mailer bulk box', 'printer paper bulk case', 'cardstock storage cabinet', 'photo paper archival box', 'file divider tab inserts',

'document organizer expanding', 'ink cartridge recycling box', 'printer maintenance wipes', 'usb cable organizer pouch', 'network cable rack', 'ethernet cable wall clips', 'hdmi cable storage box', 'displayport adapter spare', 'vga adapter spare', 'power adapter storage case',
'battery backup replacement unit', 'external keyboard travel case', 'foot rest adjustable metal', 'seat cushion replacement foam', 'throw blanket storage chest', 'decorative pillow insert spare', 'wall art mounting anchors', 'picture frame level kit', 'wall clock mounting bracket', 'full length mirror mounting kit',

'coat rack floor standing', 'umbrella stand decorative metal', 'storage basket fabric liner', 'storage bin rolling cart', 'cleaning supply organizer cabinet', 'microfiber cleaning mitt', 'all purpose cleaner spray bottle', 'glass cleaner gallon', 'disinfectant spray refill', 'paper towel bulk roll',
'trash bag bulk box', 'recycling bin lid replacement', 'fire extinguisher cabinet small', 'smoke detector mounting screws', 'carbon monoxide detector battery pack', 'first aid refill organizer', 'step stool heavy duty', 'tool kit organizer case', 'hammer storage clip', 'screwdriver rack wall mount',

'measuring tape storage hook', 'wall repair compound', 'picture hanging hardware kit', 'cable management under desk rack', 'ethernet wall plate cover', 'network cable tester advanced', 'desk privacy panel', 'acoustic wall panels', 'sound dampening foam panels', 'desk name plate',
'corner desk', 'executive desk', 'roll top desk', 'writing desk', 'secretary desk', 'drafting table', 'drafting stool', 'kneeling chair', 'task chair', 'guest chair',

'ergonomic chair headrest', 'chair armrest replacement', 'chair armrest screw set', 'chair tilt control handle', 'chair height adjustment lever', 'chair base replacement casters', 'chair lumbar pillow', 'chair seat cover', 'chair upholstery repair kit', 'chair gas lift removal tool',

'desk drawer divider set', 'desk drawer pencil tray', 'desk drawer cable port', 'desk cable spine', 'under desk keyboard drawer', 'under desk CPU mount', 'under desk storage shelf', 'under desk headphone hook', 'under desk foot hammock', 'desk cable clamp',

'desk blotter', 'desk writing pad', 'desk glass top protector', 'desk corner clamp light', 'desk pen tray', 'desk cable pass through', 'desk power grommet outlet', 'desk drawer tray insert', 'desk side hanging file rack', 'desk privacy screen panel',

'bookends metal', 'bookends decorative', 'book display stand', 'magazine holder', 'magazine rack wall mount', 'literature organizer', 'desktop bookshelf', 'desktop file sorter', 'desktop mail tray', 'desktop supply caddy',

'file cabinet label frame', 'file cabinet rail clips', 'file cabinet drawer handle', 'file cabinet glide kit', 'file cabinet leveling feet', 'file cabinet magnetic label', 'file cabinet file frame', 'file cabinet caster wheels', 'file cabinet drawer pull', 'file cabinet suspension rails',

'storage cabinet locking bar', 'storage cabinet door magnet', 'storage cabinet leveling feet', 'storage cabinet caster kit', 'storage cabinet shelf brackets', 'storage cabinet hinge screws', 'storage cabinet cam lock', 'storage cabinet wall anchors', 'storage cabinet key ring', 'storage cabinet door catch',

'credenza door handles', 'credenza lock cylinder', 'credenza adjustable shelf', 'credenza cable management hole cover', 'credenza caster wheels', 'credenza drawer slides heavy duty', 'credenza shelf pins', 'credenza anti tip kit', 'credenza door bumpers', 'credenza leveling shims',

'floor mat anti fatigue', 'chair mat hardwood floor', 'chair mat carpet floor', 'rug gripper pads', 'rug tape roll', 'rug repair patch', 'rug fringe repair kit', 'rug cleaning brush', 'rug deodorizer spray', 'rug stain remover pen',

'acoustic desk divider', 'acoustic ceiling panels', 'acoustic corner bass trap', 'acoustic foam tiles', 'acoustic isolation booth panel', 'soundproof door sweep', 'soundproof window insert', 'soundproof curtain panel', 'soundproofing tape', 'noise reducing door seal',

'desktop microphone boom arm', 'microphone desk stand', 'microphone isolation shield', 'microphone desk clamp', 'microphone cable XLR', 'XLR to USB adapter', 'audio interface', 'USB audio interface', 'audio mixer small', 'studio monitor speakers',

'speaker stands', 'speaker isolation stands', 'studio monitor isolation pads', 'headphone amplifier', 'headphone splitter', 'headphone ear pad replacement', 'headphone cable replacement', 'headphone case hard shell', 'headphone stand clamp mount', 'headphone hook adhesive',

'webcam tripod', 'webcam ring light', 'ring light tripod stand', 'ring light desk mount', 'ring light diffuser', 'ring light power adapter', 'green screen backdrop', 'green screen stand', 'backdrop clamp', 'backdrop crossbar',

'desktop NAS storage', 'external SSD drive', 'SSD enclosure', 'hard drive cloning dock', 'hard drive anti static bag', 'data recovery software license', 'USB C hub adapter', 'USB C to HDMI adapter', 'USB C docking hub', 'USB C extension cable',

'HDMI switch', 'KVM switch', 'display splitter', 'monitor light bar', 'screen light bar remote', 'blue light blocking glasses', 'computer privacy hood', 'laptop cooling stand', 'laptop riser tray', 'laptop vertical stand',

'network patch panel', 'network rack shelf', 'network rack screws', 'rack mount power strip', 'rack mount drawer', 'rack mount fan', 'rack mount cable manager', 'server rack rails', 'server rack caster kit', 'server rack blank panel',

'ethernet crimp connectors', 'ethernet cable boots', 'ethernet wall jack insert', 'keystone jack', 'cable punch down tool', 'cable management ring', 'cable management raceway', 'cable mounting base', 'Velcro cable ties', 'zip tie pack',

'power conditioner', 'UPS battery pack', 'surge suppression outlet', 'voltage regulator', 'plug splitter adapter', 'USB wall charger multi port', 'USB charging block', 'cable extension reel heavy duty', 'power cord organizer wrap', 'cord label tags',

'printer toner cartridge', 'laser printer drum unit', 'printer fuser unit', 'printer maintenance roller', 'printer transfer belt', 'printer cleaning solution', 'printer dust cover', 'printer stand shelf', 'printer output tray extension', 'printer paper feeder kit',

'scanner calibration sheet', 'flatbed scanner lid replacement', 'scanner stand', 'document scanner roller kit', 'scanner cleaning wipes', 'scanner dust cover', 'scanner power supply', 'scanner USB cable replacement', 'photo scanner tray', 'film negative scanner',

'desk filing tray metal', 'file expanding folder', 'accordion file organizer', 'receipt organizer', 'tax document organizer', 'checkbook organizer', 'invoice folder', 'project planner binder', 'document clip board', 'clipboard storage rack',

'planner stickers', 'planner tabs', 'planner refill inserts', 'calendar desk pad', 'calendar hanging clips', 'time tracking notebook', 'goal planner journal', 'project management notebook', 'address book', 'business card binder',

'business card holder', 'business card display stand', 'name badge holder', 'ID badge lanyard', 'ID badge reel', 'conference badge holder', 'presentation clicker', 'laser pointer', 'presentation remote batteries', 'portable projector',

'projector screen', 'projector ceiling mount', 'projector HDMI cable', 'projector remote replacement', 'projector lens cleaning kit', 'whiteboard eraser holder', 'whiteboard magnetic tray', 'whiteboard border tape', 'whiteboard calendar grid', 'dry erase board small',

'cork board push pin set', 'cork board decorative frame', 'magnetic cork board', 'bulletin board hooks', 'magnetic clips', 'magnetic paper holder', 'magnetic pen holder', 'magnetic calendar', 'magnetic name plate', 'magnetic ruler',
'desk drawer lock cylinder', 'desk lock key spare', 'desk hinge repair kit', 'desk panel fasteners', 'desk frame bolts', 'desk cross support bar', 'desk reinforcement plate', 'desk underside wire basket', 'desk shelf add on', 'desk side pocket organizer',

'standing desk motor', 'standing desk control panel', 'standing desk memory keypad', 'standing desk cable', 'standing desk power supply', 'standing desk frame kit', 'standing desk stability crossbar', 'standing desk caster wheels', 'standing desk leveling feet', 'standing desk anti collision sensor',

'desk drawer soft close adapter', 'drawer slide lubricant', 'drawer slide mounting jig', 'drawer lock bar', 'drawer handle template', 'drawer stop clip', 'drawer rail brackets', 'drawer track alignment tool', 'drawer pull backplate', 'drawer latch catch',

'office chair headrest attachment', 'office chair back mesh replacement', 'office chair seat plate', 'office chair tilt tension knob', 'office chair tilt limiter', 'office chair wheel base', 'office chair armrest pad screws', 'office chair piston cover', 'office chair foot ring', 'office chair glide feet',

'ergonomic keyboard', 'mechanical keyboard', 'mechanical keyboard keycap set', 'keycap puller tool', 'keyboard switch tester', 'keyboard switch puller', 'keyboard cleaning brush', 'keyboard vacuum mini', 'keyboard wrist support gel', 'keyboard travel case',

'gaming mouse', 'vertical mouse ergonomic', 'trackball mouse', 'mouse grip tape', 'mouse cable bungee', 'mouse skates replacement', 'mouse travel pouch', 'mouse battery pack', 'mouse USB receiver extender', 'mouse docking charger',

'laptop docking cradle', 'laptop external GPU enclosure', 'laptop memory upgrade kit', 'laptop SSD upgrade kit', 'laptop hinge repair kit', 'laptop battery replacement', 'laptop charger extension cable', 'laptop cooling mat', 'laptop anti theft cable', 'laptop security lock',

'monitor calibration sensor', 'monitor hood', 'monitor VESA mount kit', 'monitor wall mount bracket', 'monitor desk clamp arm dual', 'monitor desk clamp arm triple', 'monitor cable clips', 'monitor screen hood shade', 'monitor riser drawer', 'monitor LED bias light',

'tablet stylus pen', 'tablet stylus replacement tips', 'tablet keyboard case', 'tablet folio cover', 'tablet screen cleaning kit', 'tablet stand adjustable arm', 'tablet security lock', 'tablet pen holder clip', 'tablet docking station', 'tablet storage sleeve',

'external Blu ray drive', 'external DVD drive', 'USB floppy drive', 'USB card reader', 'SD card organizer case', 'SD card storage box', 'micro SD adapter', 'micro SD storage wallet', 'memory card reader hub', 'memory card archival case',

'NAS hard drive', 'NAS drive tray', 'server cooling fan', 'server rack mount rails', 'server cable arm', 'server power supply', 'server management console', 'rack cable ladder', 'rack blanking panel vented', 'rack grounding kit',

'ethernet cable tester advanced', 'ethernet loopback tester', 'ethernet continuity tester', 'ethernet strain relief boots', 'ethernet cable crimper tool', 'ethernet punch down block', 'patch cable organizer', 'patch cable color tags', 'network cable management panel', 'network keystone patch panel',

'WiFi antenna booster', 'WiFi signal analyzer', 'mesh WiFi node', 'mesh WiFi mounting bracket', 'router cooling fan', 'router cable organizer tray', 'router power backup mini', 'modem splitter coax', 'modem surge protector', 'network firewall appliance',

'USB charging tower', 'wireless charging pad', 'wireless charging stand', 'magnetic charging cable', 'charging cable multi head', 'charging cable retractable', 'charging station surge base', 'charging locker box', 'power outlet timer', 'smart plug WiFi',

'battery storage organizer', 'AA battery bulk pack', 'AAA battery bulk pack', 'button cell battery pack', 'battery tester device', 'battery disposal container', 'cordless phone charger base', 'cordless phone battery pack', 'portable power bank', 'power bank charging dock',

'printer duplex unit', 'printer WiFi adapter', 'printer paper tray extender', 'printer roller cleaning kit', 'printer waste toner bottle', 'printer maintenance counter reset tool', 'printer ink level reset chip', 'printer toner storage bin', 'printer toner refill kit', 'printer calibration tool',

'scanner transparency adapter', 'scanner film holder tray', 'scanner calibration target', 'scanner document weight', 'scanner glass protector sheet', 'scanner roller cleaning card', 'scanner USB extension', 'scanner power cord spare', 'scanner driver installation disc', 'portable document scanner',

'laminator heat resistant gloves', 'laminator corner rounder', 'laminator cooling rack', 'laminator thermal pouch carrier', 'laminator roller cleaner', 'laminator power cord replacement', 'laminator jam release tool', 'laminator foil sheets', 'laminator cold pouch kit', 'laminator trim cutter',

'label printer thermal', 'thermal label roll', 'shipping label scale', 'postal scale digital', 'barcode scanner USB', 'barcode scanner stand', 'barcode label roll', 'receipt printer', 'receipt paper roll', 'receipt printer ink ribbon',

'presentation binder case', 'presentation folder', 'document binding machine', 'binding comb set', 'binding coil set', 'binding cover sheets', 'binding spine cutter', 'binding machine power cord', 'binding punch replacement dies', 'binding cover storage box',

'whiteboard rolling stand', 'whiteboard marker organizer case', 'whiteboard eraser replacement pad', 'whiteboard corner protectors', 'whiteboard frame trim', 'whiteboard mounting anchors heavy duty', 'whiteboard cleaning wipes bulk', 'dry erase board calendar large', 'glass whiteboard', 'glass whiteboard markers',

'cork board push pin bulk pack', 'cork board repair kit', 'cork roll sheet', 'pin board wall strip', 'pin board hooks', 'magnetic board', 'magnetic board eraser', 'magnetic document frame', 'magnetic business card holder', 'magnetic pen tray',

'file tote rolling', 'document transport case', 'legal briefcase', 'attache case', 'portfolio folder zippered', 'accordion document case', 'document envelope waterproof', 'expanding file box', 'fireproof safe large', 'safe wall mount',

'office safe keypad replacement', 'safe battery pack', 'safe bolt down kit', 'safe fire liner insert', 'safe moisture absorber', 'safe dehumidifier rod', 'safe shelf divider', 'safe document tray', 'safe override key', 'safe lock lubricant',

'planner leather cover', 'planner storage box', 'journal locking case', 'writing journal set', 'fountain pen set', 'fountain pen ink bottle', 'ink blotter pad', 'pen display case', 'pen storage roll', 'pen cleaning kit',

'pencil lead refill pack', 'mechanical pencil set', 'drafting compass set', 'drafting triangle set', 'architect scale ruler', 'T square ruler', 'cutting mat self healing', 'precision craft knife', 'rotary cutter', 'paper trimmer guillotine',

'paper trimmer blade replacement', 'paper scoring board', 'envelope moistener bottle', 'postage stamp organizer', 'postage scale', 'mail opening tray', 'mail bag lockable', 'document scanning app license', 'cloud backup subscription card', 'software installation disc organizer',

'desk drawer power outlet', 'under desk surge strip', 'under desk cable hammock', 'desk clamp cup holder', 'desk side hook set', 'desk side cable pouch', 'desk side waste bin', 'desk side magazine rack', 'desk side drawer add on', 'desk corner shelf riser',

'privacy screen room divider', 'portable room divider panel', 'rolling partition screen', 'soundproof desk booth', 'desk mounted privacy wing', 'acoustic desk pad', 'anti glare desk mat', 'anti static desk mat', 'anti fatigue foot pad', 'balance board foot rest'
],

        Loft: ['sectional sofa', 'sofa', 'loveseat', 'accent chair', 'recliner', 'ottoman', 'storage ottoman', 'coffee table', 'end table', 'side table',
'console table', 'media console', 'television stand', 'bookcase', 'bookshelf', 'storage cabinet', 'display shelf', 'floating shelves', 'corner shelf', 'bar cart',
'television', 'smart television', 'streaming device', 'blu ray player', 'gaming console', 'game controllers', 'sound bar', 'subwoofer', 'surround speakers', 'remote controls',
'router', 'modem', 'wifi extender', 'power strip', 'surge protector', 'extension cord', 'charging station', 'phone charger', 'tablet charger', 'laptop charger',

'area rug', 'rug pad', 'floor runner', 'floor lamp', 'table lamp', 'lamp shade', 'light bulbs', 'ceiling light fixture', 'ceiling fan', 'fan remote',
'window curtains', 'curtain rod', 'window blinds', 'window shades', 'curtain tie backs', 'wall art', 'picture frames', 'wall mirror', 'wall clock', 'decorative shelves',
'throw pillows', 'decorative pillows', 'throw blankets', 'blanket basket', 'floor cushions', 'bean bag chair', 'folding chairs', 'stools', 'accent bench', 'window seat cushion',

'desk', 'desk chair', 'desk lamp', 'desk organizer', 'filing cabinet', 'file folders', 'bulletin board', 'whiteboard', 'office chair mat', 'paper shredder',
'printer', 'printer ink cartridges', 'printer paper', 'scanner', 'laptop', 'tablet', 'wireless keyboard', 'wireless mouse', 'headphones', 'headphone stand',
'book storage box', 'document storage box', 'cable organizer box', 'cord clips', 'drawer organizer', 'storage bins', 'storage baskets', 'closet organizer', 'coat rack', 'umbrella stand',

'daybed', 'daybed mattress', 'trundle bed', 'fold out sofa bed', 'air mattress', 'air pump', 'mattress topper', 'sheet set', 'pillow set', 'blanket set',
'bedside table', 'bedside lamp', 'alarm clock', 'full length mirror', 'clothing rack', 'garment rack', 'laundry hamper', 'laundry basket', 'iron', 'ironing board',
'ironing board cover', 'sewing kit', 'tool kit small', 'hammer', 'screwdriver set', 'measuring tape', 'wall hooks', 'adhesive hooks', 'picture hanging kit', 'wall anchors',

'board games', 'card games', 'puzzle box', 'game storage cabinet', 'playing cards', 'gaming headset', 'virtual reality headset', 'cd collection', 'dvd collection', 'book collection',
'magazine rack', 'magazines', 'coffee table books', 'craft storage box', 'yarn basket', 'art supplies box', 'paint supplies', 'easel', 'canvas panels', 'sketch pads',
'guitar', 'guitar stand', 'keyboard piano', 'music stand', 'microphone', 'microphone stand', 'speaker system', 'instrument cables', 'record storage crate', 'vinyl player',

'exercise mat', 'dumbbells', 'kettlebell', 'resistance bands', 'yoga block', 'foam roller', 'treadmill', 'stationary bike', 'fan heater', 'air purifier',
'humidifier', 'dehumidifier', 'thermostat', 'security camera', 'smoke detector', 'carbon monoxide detector', 'fire extinguisher', 'first aid kit', 'cleaning caddy', 'vacuum cleaner',
'broom', 'dustpan', 'mop', 'mop bucket', 'all purpose cleaner', 'glass cleaner', 'disinfecting wipes', 'microfiber cloths', 'paper towels', 'trash can',

'recycling bin', 'trash bags', 'storage trunk', 'seasonal decor box', 'holiday decoration bin', 'photo storage box', 'memory keepsake box', 'filing storage crate', 'rolling cart', 'folding table',

'sectional cushions', 'sofa legs', 'sofa slipcover', 'loveseat cover', 'accent chair cushion', 'recliner remote', 'ottoman tray', 'coffee table runner', 'end table drawer liner', 'side table decor tray',
'console table decor', 'media console shelves', 'tv wall mount', 'tv mounting hardware', 'streaming remote', 'blu ray storage case', 'game controller charging dock', 'sound bar wall mount', 'speaker stands', 'remote organizer tray',
'router wall mount', 'modem power adapter', 'wifi booster stand', 'power strip wall mount', 'surge protector backup battery', 'extension cord reel', 'charging cable organizer', 'phone charging dock', 'tablet stand', 'laptop stand',

'area rug cleaner', 'rug corner grippers', 'floor lamp dimmer', 'table lamp replacement bulb', 'ceiling fan blade screws', 'fan pull chain', 'curtain rings', 'curtain rod brackets', 'window blind cleaner tool', 'window shade repair kit',
'wall art hanging hooks', 'picture frame backing', 'mirror mounting kit', 'wall clock battery', 'decorative shelf brackets', 'throw pillow covers', 'blanket ladder', 'floor cushion cover', 'bean bag refill beads', 'folding chair storage rack',
'stool leg caps', 'accent bench cushion', 'window seat storage bin', 'desk drawer dividers', 'desk cable grommet', 'desk lamp replacement cord', 'filing cabinet key spare', 'file folder organizer box', 'bulletin board pins', 'whiteboard markers',

'office chair replacement wheels', 'paper shredder oil', 'printer cable', 'printer stand', 'scanner cable', 'laptop docking station', 'tablet keyboard case', 'wireless mouse pad', 'headphone amplifier', 'headphone cable extension',
'book storage crate', 'document file organizer', 'cable management sleeves', 'cord concealment kit', 'drawer liner roll', 'storage cube inserts', 'closet shelf riser', 'coat hanger rack', 'umbrella drip tray', 'daybed storage drawers',

'daybed frame support', 'trundle mattress', 'sofa bed mattress replacement', 'air mattress repair kit', 'air pump hose', 'mattress protector', 'extra sheet set', 'pillow protectors', 'throw blanket spare', 'bedside lamp replacement shade',
'alarm clock backup battery', 'full length mirror stand', 'clothing rack wheels', 'garment rack cover', 'laundry hamper liner', 'laundry basket wheels', 'iron storage rack', 'ironing board hanger', 'sewing thread kit', 'tool organizer tray',
'hammer wall mount', 'screw assortment kit', 'nail assortment kit', 'measuring tape retractable', 'wall hook decorative', 'adhesive strip refills', 'picture wire', 'wall repair patch kit', 'board game organizer box', 'card deck holder',

'puzzle storage mat', 'game disc storage binder', 'gaming headset stand', 'vr controller stand', 'cd storage tower', 'dvd storage shelf', 'book display stand', 'magazine file holder', 'craft organizer bins', 'yarn storage tote',
'art supply drawer organizer', 'paint brush holder', 'easel storage rack', 'canvas storage bin', 'sketch pad portfolio', 'guitar wall mount', 'guitar cable', 'keyboard stand', 'music sheet binder', 'microphone cable',
'microphone pop filter', 'speaker cable', 'instrument case', 'record cleaning kit', 'vinyl storage shelf', 'exercise mat storage strap', 'dumbbell rack', 'kettlebell storage tray', 'resistance band set', 'yoga mat cleaner',

'foam roller storage rack', 'treadmill mat', 'stationary bike mat', 'fan heater remote', 'air purifier replacement filter', 'humidifier filter', 'dehumidifier hose', 'thermostat battery', 'security camera mount', 'smoke detector battery',
'carbon monoxide alarm mount', 'fire extinguisher bracket', 'first aid refill pack', 'cleaning supply basket', 'vacuum attachments', 'broom wall clip', 'dustpan wall mount', 'mop replacement head', 'mop bucket wringer', 'all purpose cleaner refill',

'glass cleaner refill', 'disinfectant spray bottle', 'microfiber cloth pack', 'paper towel holder', 'trash can lid replacement', 'recycling bin liner', 'storage trunk lock', 'seasonal decor labels', 'holiday ornament storage tray', 'photo album storage case',

'sectional connector brackets', 'sofa cushion inserts', 'sofa armrest tray', 'loveseat leg pads', 'accent chair slipcover', 'recliner battery pack', 'ottoman hinge replacement', 'coffee table glass top', 'end table hardware kit', 'side table shelf liner',
'console cable grommet', 'media console cable ties', 'tv screen cleaner kit', 'tv surge protector', 'streaming device power adapter', 'blu ray remote cover', 'game console cooling fan', 'controller thumb grips', 'sound bar cable kit', 'speaker wall mounts',
'remote control batteries', 'router ethernet cable', 'modem coax cable', 'wifi extender cable', 'power strip extension', 'surge protector wall mount', 'extension cord floor cover', 'charging hub multi device', 'phone stand dock', 'tablet charging cable spare',

'laptop sleeve case', 'area rug storage roll', 'rug anti slip tape', 'floor lamp replacement cord', 'table lamp harp', 'ceiling fan balancing kit', 'fan light kit', 'curtain rod center support', 'window blind cord replacement', 'window shade mounting bracket',
'wall art level tool', 'picture frame cleaning kit', 'mirror polish cloth', 'wall clock mounting hook', 'decorative shelf riser', 'throw pillow storage bag', 'blanket storage trunk', 'floor cushion insert', 'bean bag inner liner', 'folding chair wall hook',
'stool cushion replacement', 'accent bench leg pads', 'window seat cushion cover', 'desk drawer lock', 'desk cable organizer tray', 'desk lamp bulb spare', 'filing cabinet divider rails', 'file storage crate', 'bulletin board eraser', 'whiteboard cleaner spray',

'office chair floor protectors', 'paper shredder replacement blades', 'printer ink refill kit', 'printer paper tray', 'scanner stand', 'laptop cooling pad', 'tablet stand adjustable', 'wireless keyboard cover', 'mouse wrist pad', 'headphone storage case',
'book storage shelf', 'document safe box', 'cable concealment channel', 'cord management clips', 'drawer organizer expandable', 'storage bin lids', 'closet rod extender', 'coat rack wall mount', 'umbrella rack liner', 'daybed mattress protector',

'daybed throw pillows', 'trundle bed wheels', 'sofa bed sheet set', 'air mattress storage bag', 'mattress vacuum bag', 'extra pillow set spare', 'blanket vacuum storage bag', 'bedside table coaster', 'alarm clock decorative', 'full length mirror wall anchors',
'clothing rack extension bar', 'garment rack shelf insert', 'laundry hamper cover', 'laundry basket stacker', 'iron cleaning stick', 'ironing board padding', 'sewing machine small', 'tool box organizer tray', 'hammer rubber grip', 'screwdriver magnetic holder',
'measuring tape clip', 'wall hook heavy duty', 'adhesive strip pack', 'picture hanging hooks', 'board game storage drawers', 'card game storage tin', 'puzzle organizer trays', 'game controller case', 'gaming headset charging dock', 'vr headset storage stand',

'cd binder case', 'dvd organizer cabinet', 'bookend set', 'magazine display rack', 'craft storage cabinet', 'yarn spool organizer', 'art supply caddy', 'paint palette tray', 'easel light', 'canvas carrying case',
'sketch pad drawer', 'guitar strap', 'guitar tuner', 'keyboard bench', 'music stand light', 'microphone storage case', 'microphone shock mount', 'speaker isolation pads', 'instrument cable organizer', 'record display frame',

'vinyl storage bin', 'exercise mat rack', 'dumbbell floor mat', 'kettlebell rack', 'resistance band hanger', 'yoga mat bag', 'foam roller rack', 'treadmill cover', 'stationary bike cover', 'fan heater safety grill',
'air purifier pre filter', 'humidifier cleaning tablets', 'dehumidifier replacement filter', 'thermostat wall plate', 'security camera cable', 'smoke detector replacement unit', 'carbon monoxide spare unit', 'fire extinguisher inspection tag', 'first aid wall mount', 'cleaning caddy large',

'vacuum filter replacement', 'broom replacement handle', 'dustpan replacement handle', 'mop storage hook', 'mop bucket liner', 'all purpose spray refill', 'glass cleaner microfiber cloth', 'disinfectant wipe refill', 'microfiber dust mitt', 'paper towel refill pack',
'trash bag bulk roll', 'recycling sorter bins', 'storage trunk handles', 'seasonal decor storage chest', 'holiday light storage reel', 'photo storage organizer box', 'memory keepsake binder', 'filing crate lid', 'rolling cart organizer tray', 'folding table leg caps',

'sectional cushion covers', 'sofa frame brackets', 'sofa leg levelers', 'loveseat armrest covers', 'accent chair leg protectors', 'recliner side pocket organizer', 'ottoman storage divider', 'coffee table leg pads', 'end table corner protectors', 'side table drawer organizer',
'console table shelf riser', 'media console door hinges', 'tv mounting screws', 'tv wall bracket', 'streaming stick wall mount', 'blu ray disc storage case', 'game console storage cabinet', 'controller battery pack', 'sound bar remote', 'speaker wire spool',
'remote control holder', 'router backup battery', 'modem surge protector', 'wifi extender wall plate', 'power strip cord wrap', 'surge protector outlet cover', 'extension cord wall clips', 'charging cable sleeves', 'phone charging cable spare', 'tablet screen protector',

'laptop desk tray', 'area rug corner protectors', 'rug vacuum attachment', 'floor lamp shade replacement', 'table lamp base replacement', 'ceiling fan remote holder', 'fan blade cleaner', 'curtain rod decorative finials', 'window blind repair kit', 'window shade pull cord',
'wall art adhesive strips', 'picture frame corner protectors', 'mirror hanging kit', 'wall clock spare hands', 'decorative shelf anchors', 'throw pillow insert spare', 'blanket storage vacuum bag', 'floor cushion storage bag', 'bean bag refill pack', 'folding chair leg caps',
'stool seat cover', 'accent bench storage bin', 'window seat drawer organizer', 'desk drawer felt liner', 'desk cord grommet insert', 'desk lamp dimmer cord', 'filing cabinet anti tip kit', 'file label maker', 'bulletin board cork refill', 'whiteboard eraser set',

'office chair armrest pads', 'paper shredder oil bottle', 'printer cable spare', 'printer stand with storage', 'scanner cable spare', 'laptop privacy screen', 'tablet charging dock', 'wireless keyboard wrist rest', 'mouse pad large', 'headphone wall hook',
'book storage bin', 'document fire safe box', 'cable management box', 'cord organizer basket', 'drawer divider bamboo', 'storage bin label set', 'closet shelf basket', 'coat hanger set', 'umbrella stand decorative', 'daybed frame bolts',

'daybed bedding set', 'trundle mattress protector', 'sofa bed mattress pad', 'air mattress patch kit', 'mattress lifting strap', 'extra blanket set', 'bedside lamp smart bulb', 'alarm clock battery pack', 'full length mirror stand kit', 'clothing rack cover',
'garment rack hanger set', 'laundry hamper divider insert', 'laundry basket liner replacement', 'iron replacement cord', 'ironing board wall mount', 'sewing thread organizer', 'tool kit storage box', 'hammer storage hook', 'screwdriver bit set', 'measuring tape holder',
'wall anchor assortment kit', 'adhesive hook heavy duty', 'picture hanging wire roll', 'board game shelf unit', 'card deck organizer case', 'puzzle storage box', 'game controller wall mount', 'gaming headset case', 'vr headset cable replacement', 'cd storage sleeves',

'dvd media cabinet', 'book display shelf', 'magazine storage box', 'craft organizer drawer', 'yarn storage cube', 'art supply organizer case', 'paint storage rack', 'easel storage hook', 'canvas art storage bin', 'sketch pad organizer',
'guitar wall hanger', 'guitar case hard shell', 'keyboard stand adjustable', 'music sheet storage binder', 'microphone stand boom arm', 'microphone cable spare', 'speaker stand floor', 'instrument cable wrap', 'record storage shelf', 'vinyl record cleaner',

'exercise equipment storage rack', 'dumbbell rack stand', 'kettlebell floor pad', 'resistance band organizer', 'yoga mat strap', 'foam roller storage bin', 'treadmill safety key', 'stationary bike mat protector', 'fan heater wall mount', 'air purifier spare filter',
'humidifier spare filter', 'dehumidifier drain pump', 'thermostat mounting screws', 'security camera memory card', 'smoke detector backup unit', 'carbon monoxide backup unit', 'fire extinguisher wall cabinet', 'first aid organizer tray', 'cleaning supply rack', 'vacuum storage hook',

'broom storage cabinet', 'dustpan clip mount', 'mop handle clip', 'mop bucket replacement wringer', 'all purpose cleaner gallon', 'glass cleaner spray bottle', 'disinfectant refill pouch', 'microfiber cloth bulk pack', 'paper towel wall dispenser', 'trash can step lid',
'recycling bin divider insert', 'storage trunk lock set', 'seasonal decor label tags', 'holiday ornament organizer', 'photo album storage crate', 'memory box large', 'filing crate organizer', 'rolling cart wheel replacement', 'folding table storage rack', 'loft railing decor lights',
'chaise lounge', 'chaise lounge cushion', 'chaise lounge slipcover', 'club chair', 'club chair ottoman', 'papasan chair', 'papasan cushion', 'swivel chair', 'barrel chair', 'wingback chair',
'rocking chair', 'glider chair', 'floor rocker chair', 'reading chair', 'massage chair', 'massage chair remote', 'massage chair cover', 'sofa chaise attachment', 'sofa headrest pillow', 'sofa armrest cover',
'sofa cushion cover set', 'sofa spring repair kit', 'sofa frame repair braces', 'sofa anti slip grippers', 'sofa furniture risers', 'sofa caster cups', 'loveseat armrest tray', 'loveseat cushion cover set', 'recliner cup holder insert', 'recliner power cord',
'recliner power supply', 'recliner hand control', 'recliner USB charger module', 'recliner headrest cover', 'accent chair arm covers', 'accent chair leg felt pads', 'accent chair armrest pads', 'accent chair seat protector', 'ottoman caster wheels', 'ottoman latch replacement',
'storage ottoman tray top', 'ottoman foam insert', 'ottoman storage divider', 'floor pouf', 'pouf cover', 'meditation cushion', 'meditation cushion cover', 'floor seating mat', 'floor seating pillows', 'folding floor chair',

'nesting tables', 'nesting table set', 'C shaped side table', 'sofa side table', 'drink table', 'martini table', 'tray table', 'folding snack table', 'TV tray table set', 'lift top coffee table',
'coffee table storage baskets', 'coffee table coasters set', 'coffee table leg levelers', 'coffee table scratch repair kit', 'end table replacement drawer pull', 'end table shelf brackets', 'side table cable grommet cover', 'console table cable management basket', 'media cabinet door magnet', 'media cabinet door catch',
'media cabinet shelf pins', 'media cabinet shelf supports', 'media cabinet hinge set', 'media cabinet leveling feet', 'media cabinet anti tip strap', 'TV stand caster wheels', 'TV stand cable pass through', 'television riser shelf', 'TV stand door bumpers', 'TV stand ventilation fan',
'storage cube shelf', 'cube storage shelf', 'cube storage bins fabric', 'bookcase cabinet doors', 'bookshelf dust covers', 'bookcase back panel', 'bookshelf shelf pins', 'bookshelf shelf supports', 'floating shelf LED strip', 'shelf edge guard',
'wall shelf reinforcement bracket', 'corner shelf wall anchor kit', 'display shelf risers', 'display shelf acrylic stands', 'bar cart cover', 'bar cart corner guards', 'bar cart stemware hanger', 'bar cart tool caddy', 'bar cart anti slip mat', 'bar cart accessory hooks',

'projector', 'projector screen', 'projector stand', 'projector ceiling mount', 'projector remote', 'projector HDMI cable', 'projector lens cap', 'projector carry case', 'projector screen wall hooks', 'projector keystone remote',
'TV antenna', 'HDMI switch', 'HDMI splitter', 'HDMI audio extractor', 'HDMI cable extender', 'HDMI wall plate', 'optical audio cable', 'RCA cable set', 'speaker wire', 'speaker wire banana plugs',
'speaker wire management clips', 'AV receiver', 'AV receiver remote', 'audio amplifier', 'phono preamp', 'Bluetooth receiver', 'Bluetooth transmitter', 'headphone splitter', 'headphone extension cable', 'sound bar power cord',
'sound bar HDMI ARC cable', 'subwoofer isolation pad', 'subwoofer power cord', 'speaker grille cloth', 'surround speaker mounts ceiling', 'surround speaker mounting screws', 'universal remote', 'remote control charging station', 'remote control silicone cover', 'remote control label stickers',
'streaming stick', 'streaming stick extender', 'streaming device Ethernet adapter', 'blu ray cleaning disc', 'disc resurfacing kit', 'game console vertical stand', 'game console travel case', 'console dust cover', 'console controller battery pack', 'controller charging cable',
'controller joystick replacement kit', 'controller trigger grips', 'controller silicone case', 'gaming mouse', 'gaming keyboard', 'gaming keyboard wrist rest', 'gaming chair', 'gaming chair footrest', 'gaming chair headrest pillow', 'gaming chair floor mat',
'VR headset charging dock', 'VR headset face cushion', 'VR headset lens cover', 'VR headset cable management kit', 'VR headset carry case', 'gaming router', 'network cable organizer', 'ethernet cable spool', 'ethernet coupler', 'coax splitter',

'LED strip lights', 'LED strip light controller', 'LED strip light diffuser channel', 'LED strip light corner connectors', 'smart LED light strip', 'smart light switch', 'smart dimmer plug', 'lamp smart bulb', 'lamp socket replacement', 'lamp harp replacement',
'lamp finial replacement', 'lamp shade diffuser', 'lamp shade spider adapter', 'lamp shade clip adapter', 'lamp cord replacement kit', 'lamp cord grommet', 'lamp cord protector sleeve', 'lamp cord floor cover', 'floor lamp shade replacement', 'table lamp base weight',
'ceiling fan light kit', 'ceiling fan balancing weights', 'ceiling fan blade set', 'ceiling fan downrod', 'ceiling fan mounting bracket', 'ceiling fan capacitor', 'ceiling fan speed control switch', 'ceiling fan pull chain extension', 'ceiling fan remote holder', 'ceiling light mounting bracket',
'light bulb changer pole', 'light bulb storage organizer', 'window curtain rings', 'curtain clip rings', 'curtain track', 'curtain track hooks', 'blackout curtain liner', 'sheer curtain panels', 'curtain weights', 'window film privacy',
'window insulation film kit', 'blind tilt wand', 'blind cord safety cleat', 'blind valance clips', 'shade chain tensioner', 'shade chain connector', 'window draft seal tape', 'draft stopper door snake', 'window sash lock', 'window latch replacement',

'gallery wall frame set', 'frame mat board', 'frame hanging wire kit', 'frame corner protectors', 'frame bumpers', 'picture light', 'picture light remote', 'art print', 'canvas art', 'wall tapestry',
'tapestry hanger', 'macrame wall hanging', 'wall shelves decorative set', 'decorative lantern', 'floor lantern', 'decorative vase', 'vase set', 'decorative bowl', 'decorative sculpture', 'tabletop sculpture',
'decorative tray marble', 'decorative tray rattan', 'decorative tray acrylic', 'candle lighter', 'candle snuffer', 'wick trimmer', 'flameless candles', 'remote candles', 'essential oil diffuser', 'diffuser refill oils',
'aromatherapy spray', 'room spray bottle', 'incense holder', 'incense sticks', 'decorative garland', 'string lights indoor', 'fairy lights', 'fairy light battery pack', 'wall decals', 'wall decals remover',
'throw pillow inserts', 'down pillow insert', 'lumbar pillow insert', 'blanket storage vacuum bags', 'quilt', 'quilt set', 'comforter', 'duvet insert', 'duvet cover', 'bedspread',
'weighted blanket', 'throw blanket clips', 'blanket clips', 'blanket hooks', 'blanket hamper', 'pillow protector set', 'pillowcase set extra', 'sheet suspenders', 'bed sheet fasteners', 'mattress vacuum bag',

'desk hutch organizer', 'desktop organizer tray', 'monitor light bar', 'monitor VESA mount kit', 'monitor desk clamp arm dual', 'monitor screen hood', 'keyboard cleaning brush', 'compressed air duster', 'computer cable ties', 'cable label tags',
'USB C hub', 'USB C to HDMI adapter', 'USB C extension cable', 'USB wall charger multi port', 'wireless charging pad', 'wireless charging stand', 'portable power bank', 'power bank charging dock', 'USB flash drive case', 'external SSD drive',
'hard drive docking station', 'hard drive anti static bags', 'printer toner cartridge', 'printer paper catch tray', 'printer duplex unit', 'printer dust cover', 'scanner cleaning kit', 'portable document scanner', 'laptop privacy filter', 'laptop anti theft cable',
'desk foot hammock', 'under desk cable tray basket', 'under desk CPU mount', 'desk clamp headphone hook', 'desk clamp cup holder', 'desk mat leather', 'writing pad blotter', 'desk drawer lock cylinder', 'file folder expanding', 'accordion file organizer',
'receipt organizer', 'tax document organizer', 'business card holder', 'business card binder', 'name badge holder', 'ID badge lanyard', 'label printer', 'thermal label roll', 'shipping scale', 'barcode scanner',

'daybed pillow shams', 'trundle bed linens', 'sofa bed mattress pad', 'sofa bed mattress cover', 'sofa bed mechanism kit', 'air mattress valve cap', 'air mattress electric pump', 'air pump adapter set', 'mattress encasement', 'mattress bag',
'mattress strap handles', 'mattress wedge pillow', 'bed wedge pillow cover', 'sleep mask', 'ear plugs', 'white noise machine', 'humidifier cleaning brush', 'dehumidifier water bucket', 'air purifier carbon filter', 'air purifier pre filter',
'fan heater replacement filter', 'fan heater thermostat knob', 'portable heater safety tip switch', 'space heater floor mat', 'portable AC unit', 'portable AC hose', 'portable AC window kit', 'portable AC filter', 'tower fan', 'tower fan remote',

'clothing steamer', 'steamer water cup', 'garment bag', 'garment bag zipper repair kit', 'lint roller', 'fabric shaver', 'laundry drying rack', 'folding drying rack', 'hanger set', 'velvet hangers',
'suit hanger', 'pants hanger', 'belt hanger', 'shoe rack', 'shoe organizer hanging', 'closet hanging organizer', 'closet drawer unit', 'closet storage cubes', 'closet rod brackets', 'closet rod cap',
'closet rod tension', 'clothing rack end caps', 'clothing rack caster locks', 'garment rack hanging hooks', 'hamper deodorizer', 'laundry bag', 'laundry sorter', 'laundry basket lid', 'iron cleaner', 'iron rest pad',

'toolbox', 'toolbox organizer', 'screwdriver bit set', 'precision screwdriver set', 'hex key set', 'adjustable wrench', 'pliers set', 'utility knife', 'replacement utility blades', 'level tool',
'laser level', 'stud finder', 'tape measure spare', 'picture hanging hooks assorted', 'command strips', 'adhesive putty', 'spackle kit', 'putty knife', 'sandpaper variety pack', 'touch up paint pen',
'cordless drill', 'drill bit set', 'wall anchor kit heavy duty', 'toggle bolts', 'zip tie pack', 'Velcro cable ties', 'cord clips adhesive', 'cable raceway kit', 'extension cord storage bag', 'power strip mounting brackets',

'board game card sleeves', 'dice set', 'dice tray', 'game timer', 'chess set', 'checkers set', 'backgammon set', 'domino set', 'poker chip set', 'card shuffler',
'card deck case', 'trading card binder', 'trading card sleeves', 'puzzle glue', 'puzzle saver sheets', 'puzzle sorting trays', 'puzzle frame', 'game shelf labels', 'media storage binder', 'disc sleeves',
'DVD player', 'CD player', 'cassette player', 'cassette tapes', 'headphones replacement ear pads', 'headset mic windscreen', 'microphone shock mount', 'microphone boom arm', 'microphone cable XLR', 'audio interface',
'desk speakers', 'speaker stands floor', 'speaker isolation stands', 'vinyl record sleeves', 'record divider tabs', 'record display frame', 'turntable needle', 'turntable slipmat', 'turntable dust cover', 'vinyl cleaning brush',

'craft table', 'craft organizer drawer unit', 'craft rolling cart', 'craft cutting mat', 'rotary cutter', 'rotary blades replacement', 'scissors craft', 'glue gun', 'glue gun sticks', 'hot glue gun stand',
'paper cutter', 'paper trimmer blade', 'scrapbook paper', 'scrapbook album', 'scrapbook stickers', 'washi tape set', 'tape runner', 'paint pens', 'markers art', 'colored pencils',
'pastel set', 'charcoal pencils', 'sketching pencils set', 'eraser kneaded', 'sharpener handheld', 'pencil case', 'paint palette', 'palette knives', 'paint brush set', 'brush cleaning soap',
'canvas roll', 'stretched canvas', 'watercolor paper pad', 'acrylic paint set', 'oil paint set', 'watercolor paint set', 'easel tabletop', 'easel clamp', 'drawing board', 'portfolio case',
'yarn winder', 'crochet hooks set', 'knitting needles set', 'stitch markers', 'sewing machine', 'sewing machine foot set', 'thread rack', 'bobbin case', 'fabric storage bin', 'pattern envelopes',

'guitar picks', 'guitar capo', 'guitar strings pack', 'guitar strap locks', 'guitar wall hanger', 'guitar case soft', 'guitar case hard', 'instrument tuner', 'metronome', 'music stand light',
'keyboard sustain pedal', 'keyboard power adapter', 'keyboard music rest', 'piano bench cushion', 'ukulele', 'ukulele stand', 'drum practice pad', 'drum sticks', 'harmonica', 'violin',
'violin case', 'instrument cleaning cloth', 'microphone pop screen', 'mic stand boom attachment', 'cable wrap', 'instrument cable repair kit', 'speaker cable banana plugs', 'mixer board', 'DJ controller', 'studio headphones',

'pull up bar doorway', 'pull up bar wall mount', 'adjustable dumbbell set', 'dumbbell collars', 'kettlebell handle grips', 'resistance band door anchor', 'resistance band handles', 'yoga strap', 'yoga wheel', 'pilates ring',
'balance board', 'exercise ball', 'exercise ball pump', 'jump rope', 'jump rope mat', 'fitness tracker', 'heart rate monitor strap', 'massage gun', 'massage gun heads', 'foam roller textured',
'stretch strap', 'ankle weights', 'wrist weights', 'weight bench', 'weight bench pad', 'kettlebell rack', 'dumbbell rack vertical', 'exercise mat rack', 'treadmill lubricant', 'treadmill safety key spare',
'stationary bike seat cover', 'stationary bike pedal straps', 'bike floor stabilizer mat', 'air purifier air quality monitor', 'humidifier water filter', 'dehumidifier drain hose extension', 'smart thermostat', 'smart thermostat sensor', 'security camera base station', 'smart door sensor',

'smart plug', 'smart speaker', 'smart display', 'smart light bulb', 'WiFi range extender', 'network switch', 'UPS battery backup', 'surge protector power conditioner', 'power strip with USB', 'battery organizer case',
'smoke alarm replacement', 'carbon monoxide alarm replacement', 'first aid cabinet', 'first aid supplies organizer', 'emergency flashlight', 'flashlight batteries', 'emergency radio', 'battery powered lantern', 'fire blanket', 'fire escape ladder',
'security camera privacy cover', 'camera memory card', 'camera power extension cable', 'motion sensor', 'motion sensor batteries', 'door chime', 'window alarm sensor', 'safe lock box', 'safe dehumidifier rod', 'floor safe',

'robot vacuum', 'robot vacuum dock', 'robot vacuum filters', 'robot vacuum brush set', 'vacuum belt replacement', 'vacuum hose replacement', 'vacuum crevice tool', 'vacuum dusting brush', 'vacuum upholstery tool', 'vacuum extension wand',
'microfiber mop', 'spray mop', 'spray mop pads', 'mop pad replacement set', 'floor cleaning solution', 'wood floor cleaner', 'carpet spot cleaner', 'carpet deodorizer powder', 'stain remover spray', 'odor eliminator spray',
'dusting wand', 'duster refills', 'cleaning gloves', 'cleaning brush set', 'squeegee', 'lint free cloths', 'disposable wipes refill', 'paper towel storage bin', 'trash compactor bags', 'recycling sorting labels',
'trash odor absorber', 'trash can deodorizer discs', 'broom head replacement', 'mop handle replacement', 'bucket caddy', 'cleaning apron', 'spray bottle set', 'funnel set', 'step ladder', 'folding step ladder',

'storage trunk key', 'storage trunk liner', 'under bed storage bins', 'under bed storage bags', 'vacuum storage bags', 'seasonal storage tote', 'holiday light storage reel', 'ornament storage case', 'wreath storage bag', 'gift wrap storage organizer',
'photo album', 'photo box archival', 'photo sleeves', 'frame storage box', 'memory binder', 'keepsake tote', 'document binder case', 'hanging file tote', 'rolling file cart', 'shelf storage baskets',
'plastic storage drawers', 'drawer label set', 'storage bin divider inserts', 'storage bin handle grips', 'storage bin dolly', 'rolling cart pegboard', 'rolling cart hooks', 'folding table carry bag', 'folding table locking latches', 'folding table leg levelers'
],

        Basement: ['furnace', 'furnace filter', 'water heater', 'water heater expansion tank', 'sump pump', 'sump pump battery backup', 'electrical panel', 'circuit breakers', 'generator', 'generator fuel can',
'water softener', 'water filtration system', 'dehumidifier', 'humidifier', 'utility sink', 'sink faucet', 'drain pipe', 'floor drain', 'hvac ductwork', 'duct insulation',
'exposed ceiling lighting', 'ceiling light fixture', 'light bulbs', 'smoke detector', 'carbon monoxide detector', 'fire extinguisher', 'radon mitigation fan', 'backup battery pack', 'extension cords', 'power strips',

'metal storage shelves', 'plastic storage shelves', 'storage cabinets', 'locking storage cabinet', 'workbench', 'workbench vise', 'pegboard wall', 'pegboard hooks', 'tool chest', 'rolling tool cart',
'plastic storage bins', 'clear storage bins', 'labeled storage bins', 'file storage boxes', 'bankers boxes', 'holiday storage bins', 'ornament storage box', 'document storage tote', 'photo storage box', 'memory keepsake bin',
'coat rack', 'folding tables', 'folding chairs', 'spare dining chairs', 'spare couch', 'sofa', 'loveseat', 'recliner', 'coffee table', 'side tables',

'bookshelves', 'book collection', 'magazine storage', 'old textbooks', 'filing cabinet', 'filing folders', 'desk', 'office chair', 'desk lamp', 'computer desk',
'area rug', 'rug pad', 'floor mats', 'card table', 'board game storage box', 'puzzle storage box', 'toy storage bins', 'craft storage box', 'art supply bin', 'seasonal decor bin',

'holiday lights storage reel', 'wreath storage bag', 'gift wrap storage container', 'wrapping paper rolls', 'gift bags', 'gift boxes', 'artificial tree storage bag', 'tree stand', 'holiday inflatables', 'yard decor storage bin',
'coolers', 'picnic basket', 'camping chairs', 'camping stove', 'sleeping bags', 'air mattress', 'air pump', 'tent', 'sports equipment bin', 'bike rack',

'treadmill', 'exercise bike', 'weight bench', 'dumbbells', 'barbell set', 'weight plates', 'resistance bands', 'yoga mats', 'foam roller', 'exercise ball',
'pool table', 'ping pong table', 'dart board', 'arcade machine', 'gaming console', 'television', 'sound system', 'projector', 'projector screen', 'movie collection',

'vacuum cleaner', 'shop vacuum', 'broom', 'dustpan', 'mop', 'mop bucket', 'cleaning caddy', 'all purpose cleaner', 'bleach', 'disinfecting wipes',
'paper towels', 'trash can', 'trash bags', 'recycling bin', 'laundry detergent', 'fabric softener', 'ironing board', 'iron', 'sewing machine', 'sewing kit',

'tool kit', 'hammer', 'screwdriver set', 'drill', 'drill bits', 'circular saw', 'saw blades', 'wrench set', 'socket set', 'pliers',
'measuring tape', 'level', 'stud finder', 'ladder', 'step ladder', 'paint cans', 'paint brushes', 'paint rollers', 'drop cloths', 'spackle',

'nails assortment', 'screws assortment', 'wall anchors', 'adhesive hooks', 'picture hanging kit', 'duct tape', 'electrical tape', 'flashlights', 'lantern', 'batteries',
'first aid kit', 'emergency kit', 'water storage containers', 'food storage bucket', 'fire safe box', 'safe', 'storage trunk', 'rolling cart', 'hand truck', 'moving blankets',

'furnace humidifier pad', 'furnace blower motor', 'water heater drain pan', 'water heater vent pipe', 'sump pump discharge hose', 'sump pump float switch', 'electrical panel cover', 'generator extension cord', 'generator wheel kit', 'water softener salt bags',
'water filter replacement cartridges', 'dehumidifier drain hose', 'humidifier filter', 'utility sink cabinet', 'sink drain trap', 'floor drain cover', 'hvac vent covers', 'duct tape roll', 'ceiling light pull chain', 'light fixture mounting bracket',

'smoke detector spare unit', 'carbon monoxide alarm battery pack', 'fire extinguisher wall bracket', 'radon pipe cover', 'backup battery replacement', 'extension cord reel', 'power strip wall mount', 'metal shelf liners', 'plastic shelf dividers', 'storage cabinet shelf risers',
'locking cabinet key spare', 'workbench drawer organizer', 'workbench stool', 'vise replacement jaws', 'pegboard shelf attachments', 'pegboard tool holders', 'tool chest drawer liners', 'rolling tool cart shelf mat', 'plastic storage bin lids', 'clear storage bin labels',

'file storage lid set', 'bankers box lids', 'holiday decor label tags', 'ornament divider trays', 'document storage fire bag', 'photo storage album', 'memory bin label set', 'coat hanger rack', 'folding table leg braces', 'folding chair storage rack',
'spare couch cover', 'sofa slipcover', 'loveseat cover', 'recliner cover', 'coffee table storage tray', 'side table drawer liner', 'bookshelf anti tip kit', 'book display stand', 'magazine file holder', 'textbook storage crate',

'filing cabinet lock replacement', 'file folder tabs', 'desk drawer organizer', 'office chair floor protectors', 'desk lamp spare bulb', 'computer desk cable tray', 'area rug anti slip pad', 'card table storage bag', 'board game organizer case', 'puzzle storage mat',
'toy bin stacker', 'craft organizer drawer', 'art supply organizer case', 'seasonal decor storage chest', 'holiday light clips', 'wreath hanger', 'gift wrap cutter', 'wrapping paper storage bag', 'gift bag organizer', 'artificial tree ornament hooks',

'cooler ice packs', 'picnic basket liner', 'camping stove fuel canister', 'sleeping bag storage sack', 'air mattress patch kit', 'tent stakes', 'tent pole repair kit', 'sports equipment rack', 'bike repair stand', 'bike helmet storage hook',
'treadmill safety key', 'exercise bike mat', 'weight bench bar holder', 'dumbbell rack', 'barbell collar clamps', 'weight plate tree', 'resistance band hooks', 'yoga mat strap', 'foam roller storage bin', 'exercise ball pump',

'pool table cover', 'ping pong paddle set', 'ping pong ball pack', 'dart board darts set', 'arcade machine power cord', 'gaming console controller', 'television wall mount', 'sound system speaker stands', 'projector ceiling mount', 'projector bulb spare',
'movie storage cabinet', 'shop vacuum filter', 'broom wall clip', 'dustpan replacement handle', 'mop replacement head', 'mop bucket wringer', 'cleaning caddy organizer tray', 'all purpose cleaner gallon', 'bleach storage bin', 'disinfectant spray bottle',

'paper towel bulk pack', 'trash can lid replacement', 'trash liner roll', 'recycling bin divider insert', 'laundry detergent storage jug', 'fabric softener storage bottle', 'ironing board wall mount', 'iron cleaning stick', 'sewing machine cover', 'thread organizer rack',

'tool belt', 'hammer rubber grip', 'screwdriver magnetic holder', 'drill charger', 'drill bit organizer case', 'circular saw blade case', 'wrench organizer rack', 'socket organizer tray', 'plier storage rack', 'measuring tape clip',
'level storage hook', 'stud finder battery', 'ladder stabilizer', 'step ladder non slip feet', 'paint can opener', 'paint tray liners', 'roller extension pole', 'drop cloth storage bag', 'spackle knife', 'nail organizer box',

'screw organizer box', 'wall anchor assortment kit', 'adhesive strip pack', 'picture hanging wire', 'heavy duty duct tape', 'electrical tape roll', 'flashlight charger', 'lantern battery pack', 'battery storage case', 'first aid refill pack',
'emergency flashlight', 'water container spigot', 'food storage bucket lid', 'fire safe key', 'safe shelf liner', 'storage trunk lock', 'rolling cart wheels', 'hand truck straps', 'moving blanket storage bag', 'basement dehumidifier tablets',

'furnace control board', 'furnace ignitor', 'furnace access panel screws', 'water heater thermostat', 'water heater heating element', 'sump pump check valve', 'sump pump alarm', 'electrical panel breaker labels', 'generator cover', 'generator transfer switch',
'water softener bypass valve', 'water filtration housing wrench', 'dehumidifier replacement filter', 'humidifier water panel', 'utility sink splash guard', 'sink supply lines', 'floor drain backflow valve', 'hvac return vent', 'duct clamp set', 'ceiling junction box cover',

'smoke detector mounting bracket', 'carbon monoxide detector spare unit', 'fire extinguisher inspection tag', 'radon system gauge', 'backup battery charger', 'extension cord floor protector', 'power strip surge guard', 'metal shelving anchor kit', 'plastic shelf storage bins', 'storage cabinet lock set',
'workbench power strip', 'workbench drawer slides', 'vise mounting bolts', 'pegboard bin holders', 'pegboard magnetic strip', 'tool chest lock', 'rolling tool cart drawer liner', 'plastic bin stacking clips', 'clear bin storage rack', 'file storage hanging rails',

'bankers box label kit', 'holiday decor storage dividers', 'ornament storage tray insert', 'document storage waterproof bag', 'photo storage archival box', 'memory keepsake organizer', 'coat rack wall mount', 'folding table storage cart', 'folding chair leg caps', 'spare couch cushion covers',
'sofa leg protectors', 'loveseat leg protectors', 'recliner remote holder', 'coffee table leg pads', 'side table anti tip kit', 'bookshelf shelf liners', 'book collection storage crate', 'magazine rack stand', 'textbook binder storage', 'filing cabinet drawer dividers',

'file organizer expanding', 'desk drawer felt liner', 'office chair gas lift', 'desk lamp cord replacement', 'computer desk cable clips', 'area rug storage roll', 'card table leg caps', 'board game shelf unit', 'puzzle storage drawers', 'toy storage chest',
'craft table mat', 'art supply shelf rack', 'seasonal decor ornament hooks', 'holiday light storage bag', 'wreath storage container', 'gift wrap ribbon organizer', 'wrapping paper cutter tool', 'gift tag storage box', 'artificial tree light tester', 'cooler drain plug',

'picnic basket handle replacement', 'camping stove igniter', 'sleeping bag liner', 'air mattress storage bag', 'tent repair patch', 'tent pole bag', 'sports ball rack', 'bike tire pump', 'bike tool kit', 'treadmill belt lubricant',
'exercise bike pedal straps', 'weight bench pad replacement', 'dumbbell handle grips', 'barbell storage rack', 'weight plate collars', 'resistance band door anchor', 'yoga mat cleaner spray', 'foam roller cleaner', 'exercise ball storage ring', 'pool table cue rack',

'ping pong net replacement', 'ping pong table cover', 'dart board cabinet', 'arcade machine coin box', 'gaming console storage case', 'television surge protector', 'sound system subwoofer cable', 'projector remote', 'projector mount screws', 'movie storage sleeves',
'shop vacuum hose replacement', 'broom replacement head', 'dustpan wall mount', 'mop storage hook', 'mop bucket drain plug', 'cleaning caddy shelf insert', 'all purpose cleaner refill', 'bleach storage rack', 'disinfectant wipe refill', 'paper towel holder wall mount',

'trash bag bulk box', 'recycling sorter bins', 'laundry detergent measuring cup', 'fabric softener dispenser pump', 'ironing board replacement cover', 'iron cord wrap', 'sewing machine foot pedal', 'thread spool storage case', 'tool organizer cabinet', 'hammer storage hook',
'screwdriver bit organizer', 'drill bit sharpening tool', 'circular saw blade guard', 'wrench holder rack', 'socket extension set', 'plier rack organizer', 'measuring tape holder clip', 'level wall mount', 'stud finder battery spare', 'ladder wall hooks',

'step ladder storage strap', 'paint storage shelf', 'paint brush cleaner', 'paint roller tray', 'drop cloth clips', 'spackle repair kit', 'nail storage magnetic tray', 'screw storage bin', 'wall anchor kit bulk', 'adhesive hook heavy duty',
'picture hanging hardware organizer', 'duct tape bulk roll', 'electrical cord reel', 'flashlight wall mount', 'lantern hook', 'battery organizer case', 'first aid wall cabinet', 'emergency radio', 'water storage jug rack', 'food storage rotation rack',

'furnace blower belt', 'furnace vent connector', 'water heater anode rod', 'water heater pressure relief valve', 'sump pump basin cover', 'sump pump discharge clamp', 'electrical panel surge protector', 'generator oil funnel', 'generator spark plug', 'water softener brine tank lid',
'water filter housing wrench spare', 'dehumidifier pump kit', 'humidifier water tank cap', 'utility sink storage shelf', 'sink faucet aerator', 'floor drain grate replacement', 'hvac duct sealant', 'duct hanger straps', 'ceiling light bulb guard', 'junction box extension ring',

'smoke detector backup battery', 'carbon monoxide alarm backup battery', 'fire extinguisher cabinet', 'radon pipe fan cover', 'backup power inverter', 'extension cord heavy duty', 'power strip surge outlet', 'metal shelving corner braces', 'plastic shelf bin dividers', 'storage cabinet magnetic latch',
'workbench drawer liner', 'workbench overhead light', 'vise swivel base', 'pegboard storage bins', 'pegboard wrench holders', 'tool chest drawer organizer', 'rolling tool cart handle replacement', 'plastic bin label holders', 'clear bin stacking rack', 'file storage waterproof tote',

'bankers box storage rack', 'holiday decor storage rack', 'ornament storage crate', 'document safe pouch', 'photo album archival sleeve', 'memory keepsake chest', 'coat rack hooks', 'folding table wall mount', 'folding chair storage bag', 'spare couch leg brackets',
'sofa cushion inserts', 'loveseat cushion inserts', 'recliner replacement lever', 'coffee table scratch repair kit', 'side table drawer slides', 'bookshelf support brackets', 'book crate wooden', 'magazine storage bin', 'textbook archive box', 'filing cabinet hanging rails',

'file folder organizer tray', 'desk cable management box', 'office chair wheel set', 'desk lamp bulb pack', 'computer desk power strip', 'area rug vacuum attachment', 'card table storage cover', 'board game plastic cases', 'puzzle piece sorter tray', 'toy storage cube bins',
'craft supply rolling cart', 'art canvas storage rack', 'seasonal decor label tags', 'holiday light extension cords', 'wreath storage rack', 'gift wrap storage shelf', 'wrapping paper cutter spare', 'gift bag bulk pack', 'artificial tree ornament organizer', 'cooler storage rack',

'picnic basket storage shelf', 'camping stove carry case', 'sleeping bag compression sack', 'air mattress electric pump', 'tent storage bag', 'tent repair sleeve', 'sports gear locker', 'bike wall mount', 'bike tire patch kit', 'treadmill cover',
'exercise bike cover', 'weight bench storage rack', 'dumbbell storage tray', 'barbell stand', 'weight plate rack', 'resistance band organizer rack', 'yoga mat wall mount', 'foam roller rack wall mount', 'exercise ball pump kit', 'pool table light fixture',

'ping pong paddle rack', 'ping pong ball storage jar', 'dart board wall protector', 'arcade machine coin tray', 'gaming console surge strip', 'television mounting hardware', 'sound system amplifier', 'projector storage case', 'projector screen mounting kit', 'movie media storage crate',
'shop vacuum bag replacement', 'broom storage rack', 'dustpan clip', 'mop bucket replacement handle', 'cleaning supply cabinet', 'all purpose spray bottle', 'bleach spill tray', 'disinfectant gallon jug', 'paper towel bulk case', 'trash can heavy duty',

'recycling bin large', 'laundry detergent shelf', 'fabric softener measuring cup', 'ironing board hanger', 'iron cleaning cloth', 'sewing machine storage table', 'thread storage cabinet', 'tool storage cabinet', 'hammer organizer tray', 'screwdriver wall rack',
'drill bit storage rack', 'circular saw storage hook', 'wrench organizer board', 'socket storage rail', 'plier wall rack', 'measuring tape rack', 'level clip mount', 'stud finder spare battery', 'ladder stabilizer feet', 'step ladder storage bracket',

'paint can rack', 'paint brush storage case', 'roller handle replacement', 'drop cloth storage bin', 'spackle sanding block', 'nail storage compartment box', 'screw storage drawer unit', 'wall anchor kit organizer', 'adhesive strip bulk pack', 'picture hanging nail kit',
'duct tape storage bin', 'electrical cord wall hook', 'flashlight rechargeable', 'lantern rechargeable', 'battery bulk pack', 'first aid refill kit large', 'emergency preparedness kit', 'water jug storage rack', 'food storage bin airtight', 'basement shelving expansion kit',
'furnace access door latch', 'furnace flame sensor', 'furnace thermocouple', 'furnace pressure switch', 'furnace draft inducer motor', 'furnace blower capacitor', 'furnace blower wheel', 'furnace fan relay', 'furnace limit switch', 'furnace gas valve',
'furnace condensate pump', 'furnace condensate tubing', 'furnace condensate neutralizer', 'furnace intake pipe', 'furnace exhaust flue elbow', 'furnace flue collar', 'furnace vent termination cap', 'furnace filter rack', 'furnace filter door', 'furnace filter clips',
'thermostat wire bundle', 'thermostat wire staples', 'thermostat wall plate cover', 'HVAC return air grille', 'HVAC supply register', 'register damper lever', 'register louvers', 'duct booster fan', 'inline duct fan', 'duct smoke detector',
'duct mastic sealant', 'foil tape HVAC', 'duct sealant caulk', 'duct hangers', 'duct support strap roll', 'duct saddle supports', 'duct end cap', 'duct elbow section', 'duct reducer', 'duct takeoff collar',
'duct boot', 'duct plenum', 'duct access panel', 'duct access door', 'duct insulation wrap roll', 'pipe insulation sleeves', 'pipe insulation tape', 'vibration isolators HVAC', 'HVAC drip pan', 'HVAC drip pan tablets',

'water heater drip leg', 'water heater gas flex line', 'water heater shutoff valve', 'water heater cold water inlet nipple', 'water heater hot water outlet nipple', 'water heater T&P relief valve', 'water heater discharge tube', 'water heater flue baffle', 'water heater draft hood', 'water heater burner assembly',
'water heater pilot assembly', 'water heater thermopile', 'water heater control valve', 'water heater burner gasket', 'water heater access panel', 'water heater insulation blanket', 'water heater stand', 'water heater seismic straps', 'water heater pan drain fitting', 'water heater condensate line',
'water heater recirculation pump', 'recirculation pump timer', 'recirculation pump check valve', 'recirculation pump isolation valves', 'hot water expansion valve', 'mixing valve thermostatic', 'anti scald valve', 'water heater vent cap', 'water heater vent collar', 'water heater vent screws',

'sump pump basin', 'sump pump basin lid', 'sump pump basin seal gasket', 'sump pump check valve union', 'sump pump discharge pipe', 'sump pump discharge pipe clamps', 'sump pump backflow preventer', 'sump pump pit liner', 'sump pump alarm sensor', 'sump pump alarm siren',
'sump pump battery box', 'sump pump battery terminal grease', 'sump pump battery charger unit', 'sump pump backup pump unit', 'sump pump float rod', 'sump pump float tether', 'sump pump intake screen', 'sump pump impeller', 'sump pump rubber coupling', 'sump pump discharge adapter',

'water softener resin cleaner', 'water softener iron remover', 'water softener brine well', 'water softener brine float assembly', 'water softener drain line', 'water softener drain line clamps', 'water softener overflow elbow', 'water softener o ring kit', 'water softener resin bed', 'water softener control head cover',
'water filtration sediment prefilter', 'whole house filter housing', 'filter housing o ring', 'filter housing pressure relief button', 'filter housing mounting bracket', 'filter housing bypass valve', 'UV water purifier', 'UV bulb replacement', 'UV quartz sleeve', 'UV ballast',

'utility sink strainer', 'utility sink stopper', 'utility sink drain assembly', 'utility sink tailpiece', 'utility sink sprayer', 'sink faucet spray head', 'sink faucet handle set', 'sink faucet cartridge', 'sink supply shutoff valves', 'sink braided supply hoses',
'P trap kit', 'slip joint washers', 'drain cleanout plug', 'cleanout wrench', 'floor drain trap primer', 'floor drain trap primer valve', 'floor drain strainer basket', 'floor drain odor seal insert', 'backwater valve', 'sewage ejector pump',
'ejector pump basin', 'ejector pump check valve', 'ejector pump vent pipe', 'ejector pump alarm', 'condensate pump check valve', 'condensate pump reservoir', 'condensate pump float switch', 'pipe wrench', 'basin wrench', 'plumber putty',

'electrical panel directory labels', 'circuit breaker lockout kit', 'breaker finder tool', 'voltage tester', 'multimeter', 'non contact voltage detector', 'wire strippers', 'wire cutters', 'needle nose pliers', 'linesman pliers',
'fish tape', 'conduit bender', 'conduit straps', 'electrical conduit', 'junction box', 'junction box cover plate', 'wire nuts', 'WAGO lever connectors', 'grounding wire', 'ground clamp',
'GFCI breaker', 'AFCI breaker', 'tandem breaker', 'breaker handle ties', 'subpanel', 'service disconnect switch', 'surge protection device whole house', 'generator interlock kit', 'generator inlet box', 'transfer switch cover',
'generator oil', 'generator oil filter', 'generator air filter', 'generator spark plug wrench', 'generator fuel stabilizer', 'generator funnel', 'generator drip pan', 'generator battery', 'generator battery tender', 'generator exhaust extension',

'LED shop lights', 'shop light chains', 'shop light mounting clips', 'shop light pull chain switch', 'shop light motion sensor', 'shop light diffuser cover', 'utility light cage guard', 'work light tripod', 'portable work light', 'headlamp',
'light bulb storage case', 'spare fuse assortment', 'extension cord outlet splitter', 'cord protector ramp', 'cord management hooks', 'cord storage straps', 'power strip with USB', 'smart plug', 'battery backup UPS', 'battery charger maintainer',

'radon system fan cover', 'radon pipe coupler', 'radon pipe support straps', 'radon pipe label stickers', 'radon manometer replacement', 'radon test kit', 'air quality monitor', 'humidity gauge', 'digital hygrometer', 'water leak detector',
'water leak alarm sensor', 'freeze alarm sensor', 'temperature alarm sensor', 'emergency siren', 'emergency strobe light', 'smoke alarm interconnect module', 'CO alarm plug in', 'fire extinguisher cabinet', 'fire blanket', 'emergency exit sign',

'metal shelving posts', 'metal shelving cross braces', 'shelving corner brackets', 'shelving wall anchors', 'shelving leveling feet', 'shelf edge guards', 'shelf bins', 'shelf label holders', 'wire shelving', 'wire shelf clips',
'plastic shelving feet', 'plastic shelving reinforcement bar', 'storage cabinet casters', 'cabinet cam lock', 'cabinet key set', 'cabinet magnet catch', 'cabinet door hinges', 'cabinet handle set', 'cabinet shelf pins', 'cabinet shelf brackets',
'workbench butcher block top', 'workbench peg rail', 'workbench power outlet strip', 'workbench light bar', 'workbench backsplash', 'workbench leg levelers', 'workbench anti vibration mat', 'workbench clamp set', 'bench grinder', 'bench grinder wheel',
'bench grinder spark guard', 'bench grinder tool rest', 'shop press', 'hydraulic jack', 'jack stands', 'torque wrench', 'impact driver', 'impact sockets', 'socket extension set', 'ratchet set',
'tool chest casters', 'tool chest handle', 'tool chest drawer slides', 'tool chest drawer dividers', 'tool chest foam inserts', 'tool chest top mat', 'rolling cart caster locks', 'rolling cart handle grips', 'rolling cart pegboard panel', 'rolling cart bin set',

'pegboard fastener kit', 'pegboard spacers', 'pegboard corner trim', 'pegboard screwdriver holder', 'pegboard pliers holder', 'pegboard wrench rack', 'pegboard drill holder', 'pegboard shelf brackets', 'pegboard bin cups', 'pegboard small parts trays',
'magnetic tool strip', 'magnetic parts tray', 'magnetic pickup tool', 'tool wall rack', 'tool belt suspenders', 'tool pouch set', 'work gloves', 'safety glasses', 'hearing protection earmuffs', 'dust mask',
'respirator mask', 'respirator cartridges', 'knee pads', 'shop apron', 'shop stool cushion', 'anti fatigue mat', 'creeper mechanic', 'parts organizer drawers', 'small parts bins', 'hardware organizer cabinet',

'plastic tote dolly', 'bin dolly wheels', 'stacking tote clips', 'storage bin gasket lid', 'weatherproof storage tote', 'waterproof storage container', 'document file crate', 'hanging file box', 'file box labels', 'file folder color tabs',
'photo negative sleeves', 'photo archival sleeves', 'memory card storage case', 'label maker embossing tape', 'inventory labels roll', 'zipper bags assorted', 'vacuum storage bags', 'vacuum sealer machine', 'desiccant packs', 'mothballs',

'camping lantern LED', 'camp stove carry case', 'propane hose adapter', 'propane regulator', 'propane tank', 'sleeping pad', 'camp cot', 'tent footprint', 'tent rainfly', 'tent guylines',
'tent stakes heavy duty', 'camp cookware bin', 'camp utensil kit', 'water jug camping', 'cooler cover', 'cooler latch kit', 'cooler wheel kit', 'picnic blanket', 'portable grill', 'grill cover',

'sports gear drying rack', 'ball pump', 'ball pump needles', 'sports cone set', 'sports net', 'sports bag', 'helmet rack', 'ski rack', 'snowboard rack', 'kayak rack',
'fitness mat rack', 'kettlebell rack', 'barbell rack', 'power rack', 'pull up bar', 'weight belt', 'lifting straps', 'weight lifting gloves', 'resistance band door anchor', 'jump rope',
'rowing machine', 'elliptical machine', 'boxing gloves', 'punching bag', 'punching bag stand', 'speed bag', 'medicine ball', 'slam ball', 'ab roller', 'balance board',

'pool cue rack wall', 'pool cues', 'pool cue case', 'pool balls set', 'pool chalk', 'pool table brush', 'pool table felt cleaner', 'pool table cue tips', 'cue tip shaper', 'cue tip replacement kit',
'ping pong net set', 'ping pong paddles rack', 'table tennis ball holder', 'dartboard backboard', 'dart flights', 'dart shafts', 'dart sharpener', 'arcade stool', 'arcade control panel cover', 'game room bar stools',

'media shelves', 'DVD binder sleeves', 'Blu ray sleeves', 'disc storage drawers', 'CD sleeves', 'projector screen tension kit', 'projector HDMI extender', 'soundbar remote cover', 'speaker wire staples', 'speaker wall plate',

'paint brush comb', 'paint brush spinner', 'paint roller cleaner', 'paint roller frame', 'paint roller covers pack', 'paint tray', 'paint grid', 'paint edger', 'painter tape blue', 'painter tape green',
'caulk gun', 'latex caulk', 'silicone caulk', 'caulk finishing tool', 'caulk remover', 'wood filler', 'wood putty', 'spackle sanding sponge', 'drywall tape', 'drywall compound',
'drywall patch kit', 'corner bead', 'joint knife set', 'mud pan', 'texture spray', 'primer gallon', 'stain blocker primer', 'paint stir sticks', 'paint can pour spout', 'paint can storage rack',

'nail gun', 'nail gun nails', 'staple gun', 'staple gun staples', 'cordless drill battery', 'drill battery charger', 'drill case', 'drill bit index', 'hole saw set', 'sawzall reciprocating saw',
'reciprocating saw blades', 'jigsaw', 'jigsaw blades', 'miter saw', 'miter saw stand', 'table saw', 'table saw push stick', 'table saw blade', 'router tool', 'router bits',
'sander orbital', 'sandpaper pack', 'shop clamps', 'C clamps', 'bar clamps', 'spring clamps', 'woodworking square', 'speed square', 'chisels set', 'mallet',

'plumbing torch', 'solder wire', 'flux paste', 'pipe cutter', 'PEX cutter', 'PEX tubing', 'PEX fittings', 'sharkbite fittings', 'thread sealant paste', 'PTFE tape',
'pipe dope', 'drain snake', 'hand auger', 'toilet auger', 'compression fittings', 'hose clamps', 'garden hose', 'utility hose', 'hose reel', 'spray nozzle',

'step ladder platform', 'ladder hooks', 'ladder leveler', 'ladder stabilizer bar', 'ladder bumper pads', 'hand truck wheel replacement', 'hand truck stair climbers', 'moving dolly', 'furniture dolly', 'dolly straps',
'ratchet straps', 'tie down straps', 'bungee cords', 'moving boxes', 'box cutter', 'packing tape dispenser', 'bubble wrap roll', 'packing paper', 'stretch wrap roll', 'furniture sliders',

'shop vacuum bags', 'shop vacuum hose', 'shop vacuum wand', 'shop vacuum floor nozzle', 'shop vacuum crevice tool', 'shop vacuum brush tool', 'wet dry vacuum squeegee', 'vacuum filter HEPA', 'vacuum belt', 'vacuum roller brush',
'carpet cleaner machine', 'carpet shampoo', 'stain pretreat spray', 'mold cleaner spray', 'mildew remover', 'rust remover', 'degreaser', 'floor degreaser', 'disinfectant concentrate', 'bleach alternative cleaner',
'glass scraper', 'scrub brush', 'scrub pads', 'grout brush', 'microfiber mop pads', 'dust mop', 'dust mop refills', 'push broom', 'broom bristles replacement', 'bucket with lid',

'trash can wheels', 'trash can dolly', 'trash can deodorizer', 'trash bag ties', 'recycling bin labels', 'recycling sorting stickers', 'recycling bin wheels', 'recycling bin bag insert', 'compost bin', 'compost bin liners',

'basement floor squeegee', 'floor fan', 'air mover fan', 'box fan', 'fan filter', 'ventilation fan', 'portable heater', 'space heater', 'heat gun', 'heat shrink tubing',
'moisture absorber tubs', 'desiccant dehumidifier', 'silica gel bucket', 'basement waterproofing paint', 'concrete sealer', 'crack repair epoxy', 'hydraulic cement', 'concrete patch', 'floor drain snake', 'pipe freeze kit',

'storm prep tote', 'emergency water bricks', 'water purification tablets', 'portable water filter', 'food grade buckets', 'gamma seal lids', 'mylar bags', 'oxygen absorbers', 'emergency blankets', 'hand warmers',
'battery lantern', 'crank radio', 'solar charger', 'portable inverter', 'jump starter pack', 'spare propane cylinders', 'firestarter kit', 'matches waterproof', 'first aid trauma kit', 'AED wall cabinet'
],

        Garage: ['garage door', 'garage door opener', 'garage door opener remote', 'garage door opener keypad', 'garage door opener motor', 'garage door track', 'garage door rollers', 'garage door springs', 'garage door cables', 'garage door sensors',
'garage ceiling light', 'light bulbs', 'shop lights', 'extension cords', 'power strips', 'surge protector', 'electrical outlet strip', 'wall mounted outlet', 'breaker panel subpanel', 'generator',
'generator fuel can', 'workbench', 'workbench vise', 'workbench stool', 'pegboard wall', 'pegboard hooks', 'tool chest', 'rolling tool cart', 'metal storage shelves', 'plastic storage shelves',

'storage cabinets', 'locking storage cabinet', 'overhead storage rack', 'wall storage rails', 'plastic storage bins', 'clear storage bins', 'labeled storage bins', 'storage totes', 'heavy duty storage bins', 'file storage boxes',
'ladder', 'extension ladder', 'step ladder', 'folding ladder', 'moving dolly', 'hand truck', 'wheelbarrow', 'shop vacuum', 'broom', 'dustpan',

'push broom', 'mop', 'mop bucket', 'cleaning caddy', 'all purpose cleaner', 'degreaser', 'oil absorbent pads', 'trash can', 'trash bags', 'recycling bin',
'air compressor', 'air hose', 'air hose reel', 'air pressure gauge', 'air chuck', 'nail gun', 'staple gun', 'compressor fittings kit', 'drill', 'drill charger',
'drill bits', 'impact driver', 'impact bits', 'circular saw', 'saw blades', 'miter saw', 'table saw', 'jigsaw', 'reciprocating saw', 'angle grinder',

'grinder discs', 'sander', 'sanding discs', 'belt sander', 'heat gun', 'rotary tool', 'rotary tool bits', 'battery charger', 'tool batteries', 'tool battery charger',
'hammer', 'framing hammer', 'sledgehammer', 'mallet', 'screwdriver set', 'precision screwdriver set', 'wrench set', 'adjustable wrench', 'socket set', 'socket extensions',
'ratchet set', 'torque wrench', 'pliers', 'needle nose pliers', 'locking pliers', 'wire cutters', 'wire strippers', 'crimping tool', 'utility knife', 'replacement blades',

'measuring tape', 'laser level', 'bubble level', 'stud finder', 'clamps', 'bar clamps', 'c clamp', 'corner clamps', 'work light', 'flashlight',
'lantern', 'batteries', 'first aid kit', 'fire extinguisher', 'smoke detector', 'carbon monoxide detector', 'paint cans', 'paint brushes', 'paint rollers', 'paint trays',
'drop cloths', 'spackle', 'caulk gun', 'caulk tubes', 'grout', 'tile adhesive', 'wood glue', 'super glue', 'epoxy kit', 'duct tape',

'electrical tape', 'masking tape', 'packing tape', 'nails assortment', 'screws assortment', 'bolts assortment', 'washers assortment', 'wall anchors', 'concrete anchors', 'lag bolts',
'tool belt', 'safety glasses', 'work gloves', 'hearing protection', 'dust masks', 'respirator mask', 'hard hat', 'mechanic gloves', 'knee pads', 'shop apron',

'car jack', 'jack stands', 'tire iron', 'lug wrench', 'torque wrench automotive', 'oil drain pan', 'funnel', 'oil filter wrench', 'car ramps', 'jumper cables',
'battery charger automotive', 'tire inflator', 'tire pressure gauge', 'spare tire', 'car cover', 'windshield washer fluid', 'motor oil', 'coolant', 'brake fluid', 'power steering fluid',

'transmission fluid', 'gear oil', 'fuel stabilizer', 'engine degreaser', 'car wash soap', 'wash mitt', 'bucket with grit guard', 'hose nozzle', 'pressure washer', 'pressure washer hose',
'pressure washer wand', 'foam cannon', 'microfiber drying towels', 'car wax', 'polish compound', 'clay bar kit', 'trim restorer', 'tire shine', 'glass cleaner automotive', 'interior cleaner spray',

'shop rags', 'oil absorbent granules', 'drip pans', 'magnetic parts tray', 'mechanic creeper', 'mechanic stool rolling', 'tool organizer bins', 'socket organizer rails', 'wrench organizer rack', 'screwdriver organizer rack',
'drill bit organizer case', 'saw blade storage case', 'battery storage case', 'extension cord reel wall mount', 'air compressor oil', 'air tool oil', 'impact wrench', 'impact sockets', 'breaker bar', 'ball peen hammer',

'dead blow hammer', 'pry bar set', 'chisels', 'wood chisels', 'cold chisel', 'files set', 'rasp', 'tap and die set', 'thread locker', 'grease gun',
'grease cartridges', 'bearing puller', 'gear puller', 'multimeter', 'voltage tester', 'wire connectors', 'electrical wire spool', 'heat shrink tubing', 'soldering iron', 'solder wire',

'soldering station', 'extension cord heavy duty', 'generator extension cord', 'portable work light', 'led light bar', 'shop fan', 'space heater', 'dehumidifier', 'utility sink', 'hose reel wall mount',
'garden hose', 'sprinkler', 'lawn mower', 'lawn mower blades', 'lawn mower fuel can', 'weed trimmer', 'weed trimmer line', 'leaf blower', 'leaf rake', 'garden rake',

'shovel', 'spade shovel', 'snow shovel', 'ice scraper', 'ice melt', 'push snow blower', 'snow blower fuel can', 'hedge trimmer', 'pruning shears', 'loppers',
'axe', 'hatchet', 'chainsaw', 'chainsaw chain', 'chainsaw oil', 'log splitter', 'wheelbarrow tire', 'watering can', 'plant pots', 'potting soil bags',

'fertilizer bags', 'grass seed', 'garden gloves', 'knee pad gardening', 'garden hose splitter', 'hose repair kit', 'drip irrigation kit', 'spray bottle garden', 'bug spray outdoor', 'rodent traps',
'storage rack ceiling mount', 'bike rack wall mount', 'bike repair stand', 'bike pump', 'bike helmets', 'sports equipment bin', 'golf clubs', 'golf bag', 'baseball bats', 'baseballs',

'basketballs', 'football', 'soccer ball', 'tennis rackets', 'tennis balls', 'skateboard', 'roller skates', 'skis', 'ski poles', 'ski boot bag',
'kayak paddles', 'camping cooler', 'camping stove', 'propane tank', 'propane torch', 'folding camping chairs', 'tent storage bag', 'sleeping bags', 'sleeping pads', 'camp lantern',

'paint sprayer', 'paint sprayer hose', 'paint sprayer tips', 'roller extension pole', 'paint mixer attachment', 'workbench power strip', 'pegboard storage bins', 'cabinet shelf liners', 'storage bin labels', 'moving blankets',
'storage trunk', 'file cabinet garage', 'document storage tote', 'holiday decor bin garage', 'ornament storage box garage', 'tool storage cabinet', 'rolling mechanic cart', 'engine hoist', 'engine stand', 'shop press',

'garage door insulation panels', 'garage door weather stripping', 'garage door hinge set', 'garage door torsion spring bars', 'garage door bottom seal', 'garage door track brackets', 'garage door opener chain', 'garage door opener belt', 'garage door opener light cover', 'garage door safety cables',
'ceiling storage hooks', 'overhead pulley storage system', 'wall mounted cabinet brackets', 'storage shelf support beams', 'locking cabinet key spare', 'workbench drawer slides', 'workbench drawer liner', 'vise replacement jaws', 'pegboard magnetic strip', 'pegboard shelf attachment',

'tool chest drawer liners', 'rolling cart replacement wheels', 'plastic storage bin lids', 'clear bin stacking clips', 'heavy duty storage crate', 'file storage hanging rails', 'ladder wall hooks', 'extension ladder stabilizer', 'step ladder rubber feet', 'folding ladder hinge kit',
'moving dolly straps', 'hand truck wheel replacement', 'wheelbarrow handle grips', 'shop vacuum hose replacement', 'push broom replacement head', 'mop replacement head heavy duty', 'oil drain container sealed', 'magnetic pickup tool', 'mechanic gloves spare pair', 'shop apron spare',

'air compressor regulator', 'air compressor pressure switch', 'air hose quick connect fittings', 'air tool set', 'brad nailer', 'finish nailer', 'compressor nail assortment', 'drill press', 'bench grinder', 'bench grinder wheel',
'impact driver bits set', 'circular saw guide rail', 'miter saw stand', 'table saw fence', 'jigsaw blade assortment', 'reciprocating saw blades metal', 'angle grinder cutting wheels', 'belt sander belts', 'heat gun nozzle set', 'rotary tool cutting discs',

'tool battery storage rack', 'battery charging station', 'hammer storage rack', 'framing square', 'speed square', 'torpedo level', 'pipe wrench', 'plumbing snake', 'bolt cutters', 'metal file set',
'tap and die organizer case', 'grease gun hose', 'bearing grease tub', 'gear puller jaws', 'digital multimeter case', 'wire crimp terminals', 'electrical junction box', 'romex cable spool', 'heat shrink connector kit', 'soldering iron stand',

'soldering helping hands tool', 'portable generator cover', 'work light tripod stand', 'led shop light strip', 'industrial shop fan', 'garage space heater electric', 'utility sink faucet replacement', 'hose reel portable', 'lawn mower blade sharpener', 'lawn mower spark plug',
'weed trimmer battery', 'leaf blower battery', 'garden rake metal', 'landscaping rake', 'snow shovel ergonomic', 'snow blower replacement belt', 'hedge trimmer blade sharpener', 'pruning saw', 'chainsaw sharpening kit', 'log splitter hydraulic fluid',

'fertilizer spreader', 'garden hose wall hanger', 'hose spray nozzle metal', 'irrigation timer', 'sprinkler head replacements', 'rodent bait station', 'pest control sprayer', 'bike wall hook', 'bike chain lubricant', 'bike tire patch kit',
'golf ball storage bin', 'baseball glove', 'sports helmet storage shelf', 'tennis racket cover', 'ski rack wall mount', 'kayak storage rack', 'camping stove fuel canisters', 'propane tank gauge', 'tent repair patch kit', 'sleeping bag compression sack',

'paint can storage rack', 'paint brush cleaner comb', 'paint roller storage tray', 'paint sprayer cleaning kit', 'workbench tool mat', 'pegboard wrench holders', 'cabinet magnetic catch', 'storage bin rolling cart', 'engine hoist chain', 'engine stand mounting bolts',
'shop press plates', 'automotive creeper seat', 'torque wrench calibration tool', 'brake bleeding kit', 'fuel line disconnect tool', 'radiator funnel kit', 'automotive fuse assortment', 'spare automotive bulbs', 'garage floor epoxy kit', 'concrete patch repair kit',

'garage door roller brackets', 'garage door cable drums', 'garage door track reinforcement bar', 'garage door opener backup battery', 'garage door opener wall control', 'garage door remote battery', 'garage door hinge bolts', 'garage door track bolts', 'garage door insulation clips', 'garage door threshold seal',
'overhead storage rack brackets', 'ceiling hook heavy duty', 'wall rail storage hooks', 'storage shelf anchor bolts', 'locking cabinet combination lock', 'workbench power strip mount', 'workbench pegboard backer', 'vise swivel base kit', 'pegboard bin dividers', 'tool chest lock replacement',

'rolling cart drawer divider', 'plastic bin divider inserts', 'clear bin label holders', 'heavy duty storage tote lid', 'file storage waterproof case', 'ladder rack wall mount', 'extension ladder tie down straps', 'step ladder storage hook', 'folding ladder lock pins', 'moving dolly wheel kit',
'hand truck strap kit', 'wheelbarrow tire replacement', 'shop vacuum filter cartridge', 'push broom handle replacement', 'mop bucket drain plug', 'oil spill containment tray', 'magnetic bolt tray', 'mechanic tool organizer pouch', 'shop apron pocket organizer', 'air compressor drain valve',

'air compressor mounting pad', 'air hose repair kit', 'quick connect coupler set', 'air tool blow gun', 'brad nail assortment', 'finish nail assortment', 'compressor air filter', 'drill press vise', 'bench grinder tool rest', 'impact bit holder magnetic',
'circular saw blade guard', 'miter saw replacement blade', 'table saw push sticks', 'jigsaw orbital blades', 'reciprocating saw pruning blade', 'angle grinder flap discs', 'belt sander platen', 'heat gun extension nozzle', 'rotary tool sanding drums', 'battery storage fireproof bag',

'battery wall mount rack', 'framing square holder', 'speed square holder', 'torpedo level holder', 'pipe wrench rack', 'plumbing fittings kit', 'bolt cutter storage hook', 'metal file cleaning brush', 'tap and die thread gauge', 'grease gun storage case',
'bearing grease storage tub', 'gear puller case', 'multimeter probe replacement', 'wire crimp tool spare', 'junction box cover plate', 'romex staple pack', 'heat shrink assortment box', 'soldering iron tip set', 'soldering sponge', 'generator maintenance kit',

'portable work light rechargeable', 'led shop light mounting kit', 'shop fan wall mount', 'garage heater thermostat', 'utility sink storage cabinet', 'hose reel replacement hose', 'lawn mower blade balancer', 'lawn mower wheel kit', 'weed trimmer head replacement', 'leaf blower nozzle attachment',
'garden rake replacement handle', 'landscape fabric roll', 'snow shovel edge protector', 'snow blower shear pins', 'hedge trimmer replacement blades', 'pruning shear sharpener', 'chainsaw bar oil container', 'log splitter wedge', 'fertilizer broadcast spreader', 'garden hose quick connect set',

'hose bib repair kit', 'irrigation sprinkler timer', 'sprinkler manifold', 'rodent proof storage bin', 'pest control bait traps', 'bike ceiling hoist', 'bike tire inflator gauge', 'bike chain cleaning tool', 'golf club cleaning brush', 'sports gear locker cabinet',
'tennis ball hopper', 'ski storage rack', 'kayak wall straps', 'camping lantern battery', 'propane tank storage rack', 'tent stake puller', 'sleeping bag storage bin', 'paint can opener tool', 'paint brush storage jar', 'paint roller extension handle',

'paint sprayer replacement seals', 'workbench anti slip mat', 'pegboard screw organizer', 'cabinet shelf support pins', 'storage tote dolly base', 'engine hoist load leveler', 'engine stand drip pan', 'shop press gauge', 'automotive creeper wheels', 'torque wrench case',
'brake pad spreader tool', 'fuel transfer pump', 'radiator pressure tester', 'automotive diagnostic scanner', 'garage floor mat heavy duty', 'concrete crack filler', 'epoxy floor roller kit', 'garage wall insulation panels', 'insulation foam board', 'garage shelving expansion kit',

'garage door strut brace', 'garage door reinforcement plate', 'garage door cable tensioner', 'garage door track lubrication spray', 'garage door opener mounting bracket', 'garage door opener chain tensioner', 'garage door opener gear kit', 'garage door remote visor clip', 'garage door weather seal adhesive', 'garage door bottom panel retainer',
'garage wall insulation batts', 'garage vapor barrier roll', 'garage drywall patch kit', 'garage wall storage cabinet tall', 'garage corner shelving unit', 'garage overhead bin system', 'garage storage pulley system', 'garage tool wall panel system', 'garage slat wall hooks', 'garage slat wall baskets',

'workbench drawer lock', 'workbench butcher block top', 'workbench caster kit', 'workbench clamp set', 'vise jaw pads', 'vise anvil attachment', 'pegboard drill holder', 'pegboard screwdriver rack', 'pegboard plier rack', 'pegboard bin cups',
'tool chest top compartment tray', 'tool chest side shelf', 'rolling tool cart power strip', 'tool cabinet drawer dividers', 'tool cabinet lock bar', 'heavy duty storage crate with lid', 'storage bin moisture absorber', 'file tote locking lid', 'ladder stabilizer bar', 'ladder roof hooks',

'extension ladder leveler', 'step ladder tool tray', 'moving strap harness', 'appliance dolly straps', 'wheel chocks', 'shop vacuum floor nozzle', 'shop vacuum crevice tool', 'push broom wide head', 'mop wringer replacement', 'oil drain funnel long neck',
'magnetic flashlight holder', 'mechanic fender cover', 'shop towel dispenser', 'air compressor vibration pads', 'air hose splitter', 'quick connect air manifold', 'pneumatic ratchet', 'air impact wrench', 'brad nail gun battery', 'finish nail gun battery',

'drill bit depth stop set', 'drill guide block', 'circular saw rip fence', 'miter saw laser guide', 'table saw blade guard', 'jigsaw metal blade set', 'reciprocating saw demolition blades', 'angle grinder wire wheel', 'belt sander dust bag', 'heat gun scraper attachment',
'rotary tool polishing kit', 'battery charger wall mount', 'tool battery wall rack', 'framing square clamp', 'speed square magnetic', 'torpedo level magnetic', 'pipe thread sealant', 'plumber wrench set', 'bolt extractor set', 'metal cutting snips',

'tap and die lubricant', 'grease gun coupler', 'bearing packer tool', 'multimeter test leads', 'wire loom tubing', 'junction box extension ring', 'romex junction connectors', 'heat shrink wire labels', 'solder sucker pump', 'generator oil change kit',
'portable led flood light', 'led light hanging chain', 'shop fan floor model', 'garage heater ceiling mount', 'utility sink plumbing kit', 'hose quick disconnect fittings', 'lawn mower cover', 'lawn mower oil filter', 'weed trimmer blade attachment', 'leaf blower shoulder strap',

'garden shovel long handle', 'snow roof rake', 'snow blower tire chains', 'hedge trimmer storage sheath', 'pruning ladder tripod', 'chainsaw storage case', 'log splitter cover', 'fertilizer hand spreader', 'garden hose timer mechanical', 'hose pressure regulator',
'irrigation drip emitters', 'sprinkler head adjustment tool', 'rodent deterrent spray', 'pest control fogger', 'bike repair tool kit', 'bike helmet rack', 'bike storage floor stand', 'golf club rack', 'sports ball inflation pump', 'tennis racket stringing kit',

'ski wax kit', 'kayak tie down straps', 'camp stove carry case', 'propane tank cover', 'tent footprint groundsheet', 'sleeping bag liner fleece', 'paint storage cabinet flammable', 'paint can pour spout', 'paint brush spinner cleaner', 'paint roller grid',
'paint sprayer extension wand', 'workbench light clamp', 'pegboard hook lock clips', 'cabinet door organizer rack', 'storage tote id tags', 'engine hoist ram replacement', 'engine stand tool tray', 'shop press bearing plates', 'automotive creeper headrest', 'torque wrench digital',

'brake caliper hanger hooks', 'fuel siphon pump', 'radiator hose clamp kit', 'automotive relay assortment', 'garage floor containment mat', 'concrete moisture barrier', 'epoxy floor squeegee', 'garage wall mounted broom holder', 'insulation fastener clips', 'garage ceiling storage net',

'garage attic access ladder', 'garage security camera', 'motion sensor flood light', 'garage alarm sensor', 'fire resistant cabinet', 'lockable chemical storage cabinet', 'spill containment kit', 'safety shower portable', 'eye wash station', 'hazardous material storage bin',
'safety cones', 'caution tape roll', 'traffic mirrors convex', 'wall mounted first aid cabinet', 'emergency exit sign light', 'backup power inverter garage', 'extension cord locking connector', 'heavy duty surge protector garage', 'battery maintainer trickle charger', 'car diagnostic code reader',

'engine oil storage rack', 'coolant funnel kit', 'transmission funnel long neck', 'oil filter storage bin', 'automotive gasket scraper', 'timing light', 'battery terminal cleaner brush', 'battery terminal protector spray', 'spark plug socket set', 'spark plug gap tool',
'windshield repair kit', 'dent puller kit', 'body panel clip assortment', 'trim removal tool set', 'automotive upholstery cleaner', 'seat cover protector', 'cargo net trunk', 'roof rack crossbars', 'trailer hitch ball mount', 'trailer hitch lock',

'trailer wiring harness', 'trailer jack stand', 'trailer wheel chock', 'boat tie down straps', 'ratchet strap heavy duty', 'bungee cord assortment', 'tie down anchor rings', 'storage shelf label maker', 'inventory clipboard', 'garage maintenance log binder',

'metal detector hobby', 'rc car storage case', 'workshop radio', 'bluetooth jobsite speaker', 'portable workbench folding', 'mechanics tool set master', 'tool calibration kit', 'garage refrigerator', 'garage freezer', 'beverage cooler garage',
'garage door torsion spring winding bars', 'garage door torsion spring cones', 'garage door torsion spring center bearing', 'garage door end bearing plates', 'garage door center bracket', 'garage door torsion tube', 'garage door torsion spring anchor bracket', 'garage door cable drums', 'garage door bottom bracket', 'garage door roller stems',
'garage door roller bearings', 'garage door roller hinge', 'garage door hinge bolts', 'garage door hinge lubrication spray', 'garage door track lag screws', 'garage door track splice bracket', 'garage door track angle iron', 'garage door track hangers', 'garage door track end stop', 'garage door track flag bracket',
'garage door opener rail', 'garage door opener rail bracket', 'garage door opener header bracket', 'garage door opener trolley', 'garage door opener carriage', 'garage door opener chain master link', 'garage door opener belt pulley', 'garage door opener idler pulley', 'garage door opener travel module', 'garage door opener force adjustment knob',
'garage door opener limit switch', 'garage door opener logic board', 'garage door opener capacitor', 'garage door opener transformer', 'garage door opener safety beam brackets', 'garage door sensor wiring kit', 'garage door keypad cover', 'garage door keypad battery', 'garage door remote keychain clip', 'garage door emergency release rope',
'garage door emergency release handle', 'garage door manual lock', 'garage door lock bar', 'garage door lock cylinder', 'garage door seal retainer', 'garage door side seal', 'garage door top seal', 'garage door threshold adhesive', 'garage door insulation retainer clips', 'garage door panel reinforcement strut',

'garage LED shop light replacement driver', 'shop light hanging chain set', 'shop light S hook set', 'shop light mounting brackets', 'shop light lens cover', 'shop light pull chain assembly', 'garage light motion sensor switch', 'garage light timer switch', 'garage dimmer switch', 'outlet cover plate',
'GFCI outlet', 'AFCI outlet', 'outlet box extender', 'weatherproof outlet cover', 'outlet tester', 'circuit breaker lockout kit', 'breaker finder', 'wire staples', 'wire loom conduit', 'cable raceway kit',
'cord organizer straps', 'cord reel retractable', 'cord protector ramp', 'power strip with USB', 'power strip mounting clips', 'surge protector wall bracket', 'battery backup UPS', 'generator inlet box', 'generator interlock plate', 'transfer switch mounting box',

'generator oil change kit', 'generator oil filter', 'generator spark plug', 'generator air filter', 'generator fuel stabilizer bottle', 'generator funnel spout', 'generator wheel chocks', 'generator battery tender', 'generator maintenance log book', 'generator exhaust extension hose',

'workbench top mat', 'workbench anti fatigue mat', 'workbench caster kit', 'workbench leg levelers', 'workbench backsplash board', 'workbench clamp rack', 'workbench tool rail', 'workbench corner braces', 'vise swivel base', 'vise handle replacement',
'vise jaw pads', 'vise mounting hardware kit', 'tool chest top mat', 'tool chest side handle', 'tool chest drawer slides', 'tool chest drawer dividers', 'tool chest lock cylinder', 'tool chest key set', 'rolling tool cart caster locks', 'rolling tool cart handle grips',
'rolling cart tray liner', 'pegboard spacers', 'pegboard mounting screws', 'pegboard bin cups', 'pegboard parts bins', 'pegboard wrench rack', 'pegboard screwdriver rack', 'pegboard pliers holder', 'magnetic tool strip', 'magnetic parts tray',

'overhead storage rack wire deck', 'overhead rack lag bolt kit', 'overhead rack ceiling brackets', 'slatwall panel system', 'slatwall hooks', 'slatwall baskets', 'slatwall shelf brackets', 'wall rail storage baskets', 'wall rail tool holders', 'wall rail hook kit',
'storage cabinet cam lock', 'storage cabinet key spare', 'storage cabinet leveling feet', 'storage cabinet caster wheels', 'storage cabinet shelf pins', 'storage cabinet hinge set', 'storage cabinet door magnet catch', 'storage tote dolly', 'storage tote gasket lid', 'weatherproof storage tote',
'moisture absorber tubs', 'desiccant packs', 'storage bin divider inserts', 'storage bin label holder clips', 'file tote locking lid', 'hanging file frame', 'file folder color tabs', 'inventory label rolls', 'label maker embossing tape', 'zipper bags assorted',

'ladder stabilizer bar', 'ladder roof hooks', 'ladder leveler', 'ladder bumper pads', 'ladder wall rack', 'ladder storage hooks', 'moving strap harness', 'ratchet straps', 'tie down straps', 'bungee cord assortment',
'furniture dolly', 'dolly wheel replacement kit', 'hand truck stair climbers', 'hand truck strap kit', 'wheelbarrow inner tube', 'wheelbarrow axle kit', 'wheelbarrow tire sealant', 'wheelbarrow tire gauge', 'shop vacuum filter HEPA', 'shop vacuum bags',
'shop vacuum floor nozzle', 'shop vacuum crevice tool', 'shop vacuum brush attachment', 'shop vacuum extension wand', 'shop vacuum squeegee attachment', 'shop vacuum hose cuff', 'broom wall mount rack', 'push broom bracket', 'mop handle wall clip', 'bucket caddy',

'floor squeegee', 'floor scrub brush', 'drip pan containment tray', 'oil spill kit', 'spill absorbent socks', 'spill absorbent powder', 'parts cleaning brush', 'spray bottle set', 'degreaser concentrate', 'rust remover',
'mold cleaner', 'odor eliminator', 'glass scraper', 'shop towel dispenser', 'shop towel roll', 'trash can dolly', 'trash can deodorizer discs', 'recycling bin wheels', 'recycling bin labels', 'battery storage organizer',

'air compressor drain valve', 'air compressor vibration pads', 'air compressor intake filter', 'air compressor belt guard', 'air manifold splitter', 'air hose repair kit', 'air quick connect couplers', 'air blow gun', 'tire inflator air chuck', 'pressure regulator inline',
'nail gun nose tip', 'staple gun nose piece', 'staple gun jam remover', 'compressor air filter', 'compressor oil bottle', 'pneumatic nail assortment kit', 'brad nailer nose cover', 'finish nailer depth adjustment knob', 'drill press chuck key', 'drill press belt',
'bench grinder spark guard', 'bench grinder tool rest', 'bench grinder wheel dresser', 'angle grinder guard', 'angle grinder spanner wrench', 'sander dust bag', 'sander vacuum adapter', 'belt sander platen', 'rotary tool flex shaft', 'rotary tool collet set',
'heat gun nozzle kit', 'miter saw laser guide', 'miter saw dust bag', 'table saw push stick', 'table saw featherboard', 'table saw miter gauge', 'jigsaw shoe plate', 'reciprocating saw shoe', 'circular saw rip fence', 'circular saw dust port adapter',

'drill battery wall mount', 'battery charging shelf', 'battery fireproof charging bag', 'battery terminal cover caps', 'wireless tool tracker tags', 'tool calibration block', 'tool bit magnetizer', 'drill bit depth stop set', 'drill bit sharpening tool', 'socket rail clips',
'wrench holder clips', 'screwdriver holder rails', 'plier rack organizer', 'clamp rack wall mount', 'clamp pads', 'corner clamp set', 'pipe clamp fixtures', 'C clamp pads', 'framing square holder', 'speed square holder',

'caulk smoothing tool', 'caulk remover', 'wood filler', 'sandpaper assortment pack', 'sanding sponge set', 'paint brush comb', 'paint brush spinner', 'paint roller grid', 'paint tray liner pack', 'paint can pour spout',
'paint can storage rack', 'drop cloth clips', 'masking paper roll', 'plastic sheeting roll', 'tack cloth', 'mixing sticks', 'stir paddle for drill', 'utility knife holster', 'replacement blade dispenser', 'duct tape storage bin',

'automotive fender cover', 'car battery terminal cleaner', 'battery terminal protector spray', 'spark plug socket set', 'spark plug gap tool', 'oil filter storage bin', 'fluid transfer pump', 'radiator funnel kit', 'brake bleeding bottle', 'tire valve core tool',
'tire plug repair kit', 'tire valve caps set', 'shop rags dispenser', 'mechanic hand cleaner', 'hand soap pumice', 'parts washer solvent', 'magnetic pickup wand', 'inspection mirror tool', 'borescope camera', 'OBD2 scanner case'
],

        Laundry: ['washing machine', 'washing machine lid', 'washing machine door', 'washing machine drum', 'washing machine agitator', 'washing machine control panel', 'washing machine detergent drawer', 'washing machine water hoses', 'washing machine drain hose', 'washing machine power cord',
'washing machine lint filter', 'washing machine water inlet valve', 'washing machine pump', 'washing machine belt', 'washing machine motor', 'washing machine shock absorbers', 'washing machine suspension rods', 'washing machine door seal', 'washing machine leveling feet', 'washer drip pan',

'dryer', 'dryer door', 'dryer drum', 'dryer lint trap', 'dryer lint screen housing', 'dryer heating element', 'dryer thermostat', 'dryer moisture sensor', 'dryer control board', 'dryer power cord',
'dryer vent hose', 'dryer vent clamp', 'dryer vent elbow', 'dryer vent wall cover', 'dryer booster fan', 'dryer vent cleaning brush', 'dryer vent cleaning kit', 'dryer stacking kit', 'dryer pedestal', 'dryer leveling feet',

'laundry sink', 'laundry sink faucet', 'laundry sink sprayer', 'laundry sink cabinet', 'laundry sink drain trap', 'laundry sink supply lines', 'utility sink strainer', 'floor drain cover', 'water shut off valve', 'washing machine outlet box',

'laundry cabinets', 'upper laundry cabinets', 'lower laundry cabinets', 'laundry countertop', 'folding table', 'laundry shelving unit', 'wire shelving rack', 'laundry storage baskets', 'laundry hamper', 'double laundry hamper',
'rolling laundry cart', 'laundry basket plastic', 'laundry basket woven', 'collapsible laundry basket', 'laundry sorter three bin', 'laundry sorter rolling', 'mesh laundry bags', 'delicates bag', 'shoe wash bag', 'garment bag zippered',

'clothes hangers plastic', 'clothes hangers wood', 'clothes hangers velvet', 'clip hangers', 'padded hangers', 'pants hangers', 'skirt hangers', 'coat hangers', 'hanger organizer rack', 'over door hanger rack',

'ironing board', 'ironing board cover', 'ironing board pad', 'iron', 'iron cord wrap', 'garment steamer', 'handheld steamer', 'steamer water cup', 'spray bottle', 'fabric shaver',
'lint roller', 'lint roller refills', 'sewing machine', 'sewing kit', 'thread spool set', 'needle set', 'button repair kit', 'safety pins box', 'measuring tape sewing', 'tailor chalk',

'laundry detergent liquid', 'laundry detergent powder', 'laundry pods container', 'fabric softener bottle', 'bleach bottle', 'color safe bleach', 'stain remover spray', 'pre treat spray', 'oxygen cleaner', 'laundry scent beads',
'dryer sheets box', 'wool dryer balls', 'starch spray', 'wrinkle release spray', 'odor eliminator spray', 'detergent dispenser pump', 'laundry measuring cup', 'laundry supply caddy', 'detergent storage container', 'laundry supply shelf',

'laundry room trash can', 'trash bags small', 'recycling bin small', 'paper towel holder', 'paper towels', 'all purpose cleaner', 'glass cleaner', 'disinfectant spray', 'cleaning wipes', 'sponges',
'scrub brush', 'cleaning gloves', 'mop', 'mop bucket', 'broom', 'dustpan', 'step stool', 'light fixture ceiling', 'light bulbs', 'smoke detector',

'carbon monoxide detector', 'fire extinguisher', 'extension cord', 'power strip', 'wall clock', 'wall shelf', 'laundry drying rack', 'wall mounted drying rack', 'folding drying rack', 'indoor clothesline',
'clothespins', 'clothespin bag', 'laundry folding board', 'lost sock bin', 'change jar', 'laundry room rug', 'anti fatigue mat', 'dehumidifier', 'fan portable', 'water leak detector',

'washing machine inlet screens', 'washing machine hose washers', 'washing machine drain pan alarm', 'washing machine vibration pads', 'washing machine transit bolts', 'washing machine pulley', 'washing machine control knob', 'washing machine timer', 'washing machine pressure switch', 'washing machine capacitor',
'washing machine door latch', 'washing machine door hinge', 'washing machine door handle', 'washing machine bleach dispenser insert', 'washing machine fabric softener dispenser insert', 'washing machine tub seal', 'washing machine bearing kit', 'washing machine drive shaft', 'washing machine water level sensor', 'washing machine temperature sensor',

'dryer lint screen replacement', 'dryer door latch', 'dryer door hinge', 'dryer door handle', 'dryer drum rollers', 'dryer idler pulley', 'dryer drive belt', 'dryer blower wheel', 'dryer gas valve coils', 'dryer igniter',
'dryer thermal fuse', 'dryer high limit thermostat', 'dryer cycling thermostat', 'dryer timer knob', 'dryer selector switch', 'dryer control knob', 'dryer light bulb', 'dryer drum seal', 'dryer felt seal kit', 'dryer vent periscope duct',

'stackable washer dryer frame', 'appliance anti tip bracket', 'washer drain hose extension', 'washer supply hose braided', 'washer hose Y connector', 'dryer vent foil tape', 'dryer vent roof cap', 'dryer vent wall thimble', 'dryer vent lint bucket', 'dryer vent draft blocker',

'laundry sink splash guard', 'laundry sink faucet cartridge', 'laundry sink sprayer hose', 'utility sink cabinet shelf', 'utility sink floor mat', 'floor drain backflow preventer', 'water leak shutoff valve', 'washing machine drain standpipe', 'washing machine drain hose clamp', 'appliance drip tray liner',

'laundry cabinet door bumpers', 'laundry cabinet handles', 'laundry cabinet hinges', 'laundry shelf brackets', 'laundry countertop support brackets', 'folding table wall mount', 'wire shelf shelf liners', 'wire shelf support clips', 'laundry basket lid', 'laundry basket liner',
'laundry sorter replacement bags', 'laundry sorter frame', 'rolling laundry cart wheels', 'laundry hamper lid', 'laundry hamper liner', 'laundry hamper deodorizer', 'mesh laundry bag zipper replacement', 'garment bag hanger slot', 'garment bag breathable cover', 'hanger connector hooks',

'ironing board hanger', 'ironing board storage hook', 'iron soleplate cleaner', 'iron water refill bottle', 'garment steamer hose', 'garment steamer nozzle', 'steamer cleaning solution', 'fabric shaver replacement blades', 'lint trap cleaning brush', 'sewing machine bobbins',
'sewing machine needles', 'sewing machine presser feet', 'thread organizer rack', 'button storage box', 'safety pin assortment', 'tailor measuring gauge', 'hemming tape', 'fabric glue', 'patch repair kit', 'elastic band roll',

'detergent pump dispenser', 'detergent drip tray', 'detergent spill mat', 'laundry detergent refill pack', 'fabric softener refill pack', 'bleach spill tray', 'stain remover wipes', 'oxygen booster tub', 'laundry whitening agent', 'laundry color catcher sheets',
'dryer sheet dispenser', 'dryer ball storage pouch', 'starch refill bottle', 'wrinkle spray refill', 'odor absorber pouch', 'laundry scent sachets', 'laundry supply turntable', 'laundry shelf riser', 'laundry drawer organizer', 'laundry bottle label set',

'laundry trash liner roll', 'paper towel dispenser wall mount', 'cleaning caddy organizer tray', 'all purpose cleaner refill', 'glass cleaner refill', 'disinfectant refill bottle', 'microfiber cloth pack', 'scrub pad pack', 'rubber cleaning gloves heavy duty', 'mop replacement head',
'mop handle wall clip', 'broom holder wall mount', 'dustpan clip mount', 'step stool folding', 'ceiling light cover', 'light dimmer switch', 'smoke detector battery pack', 'carbon monoxide detector battery pack', 'fire extinguisher wall bracket', 'extension cord reel',

'power strip surge protector', 'wall clock battery', 'wall shelf anchor kit', 'drying rack replacement rods', 'drying rack wall anchors', 'clothesline tensioner', 'clothesline hook set', 'clothespin storage jar', 'laundry folding counter mat', 'lost sock organizer tray',
'coin sorting tray', 'laundry rug non slip pad', 'anti fatigue mat corner protectors', 'dehumidifier replacement filter', 'fan dust cover', 'water leak alarm battery', 'plunger flange style', 'drain snake handheld', 'pipe wrench adjustable', 'utility gloves waterproof',

'appliance surge protector', 'washer power surge suppressor', 'dryer power surge suppressor', 'washing machine noise pad', 'washing machine anti vibration mat', 'washing machine pedestal drawer', 'washing machine drain pump filter', 'washing machine shock absorber kit', 'washing machine tub cleaner liquid', 'washing machine drum light',
'washing machine hinge screw set', 'washing machine control board cover', 'washing machine water hammer arrestor', 'washing machine hose strain relief', 'washing machine detergent drawer insert', 'washing machine soap tray liner', 'washing machine gasket cleaner', 'washing machine drain hose guide', 'washing machine overflow pan sensor', 'washing machine inlet hose screen filter',

'dryer drum light', 'dryer rack insert', 'dryer rack support brackets', 'dryer lint chute brush', 'dryer exhaust booster kit', 'dryer vibration pads', 'dryer pedestal drawer', 'dryer stacking bracket kit', 'dryer exhaust backdraft damper', 'dryer duct insulation sleeve',
'dryer vent magnetic cover', 'dryer vent pest guard', 'dryer vent cleaning rods', 'dryer exhaust clamp stainless', 'dryer exhaust tape aluminum', 'dryer moisture sensor cleaning kit', 'dryer vent lint alarm', 'dryer vent seal gasket', 'dryer exhaust hood replacement', 'dryer vent roof flashing',

'appliance dolly', 'appliance moving straps', 'appliance anti vibration pads', 'appliance leveling shims', 'appliance cleaning brush set', 'appliance microfiber cloths', 'appliance polish stainless', 'appliance touch up paint', 'appliance vent cleaning vacuum attachment', 'appliance maintenance log book',

'laundry sink drain basket', 'laundry sink faucet aerator', 'laundry sink soap dispenser', 'utility sink wall bracket', 'utility sink splash panel', 'floor drain hair trap', 'floor drain odor trap', 'water shutoff valve key', 'washing machine drain pan alarm kit', 'washing machine supply hose elbow',

'laundry cabinet shelf dividers', 'laundry cabinet child lock', 'laundry cabinet magnetic catch', 'laundry shelf liner roll', 'laundry counter edge protector', 'folding table hinge support', 'wire shelving corner unit', 'wire shelving wall anchors', 'laundry storage cubbies', 'laundry cubby baskets',
'laundry hamper double lid', 'laundry hamper divider insert', 'laundry hamper deodorizer sachet', 'rolling laundry bin with lid', 'laundry basket stacker', 'laundry basket storage rack', 'laundry sorter label set', 'laundry sorter replacement wheels', 'garment bag large', 'garment bag small',

'hanger storage box', 'hanger space saver hooks', 'hanger non slip grips', 'ironing board heat resistant mat', 'ironing board leg caps', 'iron storage caddy', 'iron water filter cartridge', 'garment steamer hanger', 'steamer heat glove', 'fabric shaver cleaning brush',
'lint brush handheld', 'lint trap vacuum attachment', 'sewing machine storage case', 'sewing machine extension table', 'thread spool box', 'needle threader tool', 'button sewing kit travel', 'safety pin magnetic holder', 'tailor ruler', 'fabric measuring tape retractable',

'laundry detergent travel size', 'laundry detergent pump bottle', 'laundry detergent bulk dispenser', 'fabric softener pump', 'bleach measuring cup', 'stain stick remover', 'laundry bar soap', 'oxygen booster scoop', 'laundry brightener liquid', 'color safe stain spray',
'dryer sheet travel pack', 'dryer ball refill set', 'starch spray travel size', 'wrinkle release wipes', 'odor neutralizer spray', 'laundry fragrance crystals', 'laundry scent booster refill', 'laundry supply cabinet organizer', 'laundry bottle drip tray', 'laundry bottle shelf guard',

'trash can lid replacement', 'recycling bin lid replacement', 'paper towel bulk pack', 'cleaning cloth dispenser box', 'scrub brush holder', 'cleaning glove clips', 'mop bucket wringer insert', 'mop head cotton', 'broom bristle replacement', 'dustpan long handle',
'step stool rubber feet', 'ceiling light mounting bracket', 'light bulb storage case', 'smoke detector tester spray', 'carbon monoxide tester spray', 'fire extinguisher inspection tag', 'extension cord wall clips', 'power strip wall mount', 'wall clock mounting hook', 'wall shelf floating bracket',

'drying rack floor protectors', 'drying rack hinge replacement', 'clothesline retractable reel', 'clothesline wall mount bracket', 'clothespin clip holder', 'laundry folding table mat', 'lost sock bin divider', 'coin jar lid secure', 'laundry rug stain guard spray', 'anti fatigue mat adhesive tabs',
'dehumidifier drain hose', 'fan wall mount bracket', 'water leak alarm sensor pad', 'plunger storage caddy', 'drain auger kit', 'pipe wrench storage hook', 'utility hook heavy duty', 'over door drying rack', 'laundry door draft stopper', 'laundry instruction magnet board',

'laundry room baseboards', 'laundry room door', 'laundry room door hinges', 'laundry room door knob', 'laundry room door stop', 'laundry room door sweep', 'laundry room light switch', 'laundry room outlet cover', 'laundry room GFCI outlet', 'laundry room exhaust fan',
'exhaust fan cover', 'exhaust fan motor', 'exhaust fan vent duct', 'exhaust fan wall cap', 'laundry ceiling vent', 'laundry air return vent', 'laundry wall insulation', 'laundry drywall patch', 'laundry wall paint', 'laundry trim molding',

'appliance installation kit washer', 'appliance installation kit dryer', 'washer drain hose clamp kit', 'washer hose burst protector', 'washer hose shutoff timer', 'washer pedestal storage bin', 'washer vibration sensor', 'washer water pressure regulator', 'washer drain lint trap', 'washer drain hose hook',
'dryer exhaust clamp stainless steel', 'dryer exhaust foil tape roll', 'dryer vent bird guard', 'dryer vent rod extension', 'dryer exhaust support strap', 'dryer vent cleaning vacuum attachment', 'dryer exhaust interior lint trap', 'dryer exhaust vent cover metal', 'dryer exhaust wall plate', 'dryer exhaust duct insulation wrap',

'laundry utility cart three tier', 'laundry cabinet tall pantry', 'laundry cabinet corner unit', 'laundry cabinet drawer organizer', 'laundry cabinet shelf basket', 'laundry under sink organizer', 'laundry counter storage bins', 'laundry counter tray', 'laundry folding counter riser', 'laundry countertop protector mat',
'laundry wall mounted cabinet', 'laundry wall peg hooks', 'laundry wall organizer rack', 'laundry wall drying bar', 'laundry wall hanger rod', 'laundry ceiling drying pulley', 'laundry retractable drying line', 'laundry drying clips rack', 'laundry garment drying hanger', 'laundry sweater drying mesh rack',

'fabric care brush', 'fabric stain guide chart', 'fabric repair patches iron on', 'fabric repair tape', 'fabric lint brush reusable', 'garment deodorizer spray', 'garment freshener sachet', 'garment storage box', 'garment storage vacuum bags', 'garment shoulder covers',
'ironing water spray bottle', 'ironing board storage cabinet', 'ironing board replacement screws', 'iron descaling solution', 'iron heat resistant pad', 'iron cord holder wall mount', 'steamer wrinkle brush', 'steamer lint attachment', 'steamer storage bag', 'steamer heat mat',

'detergent wall mounted dispenser', 'detergent drip catcher tray', 'detergent bottle carry caddy', 'detergent bulk refill station', 'fabric softener measuring dispenser', 'bleach bottle holder wall mount', 'bleach neutralizer', 'stain pre treatment brush', 'stain treatment wipes pack', 'laundry soap pump stainless',
'laundry detergent eco sheets', 'laundry detergent pods organizer', 'laundry supply label stickers', 'laundry supply chalk labels', 'laundry bottle organizer rack', 'laundry chemical storage bin', 'laundry child safety cabinet lock', 'laundry spill cleanup kit', 'laundry absorbent pads', 'laundry odor absorber tub',

'laundry trash can pedal', 'laundry recycling bin divider', 'laundry trash bag dispenser', 'paper towel wall bracket', 'cleaning brush set small', 'cleaning spray bottle labeled', 'cleaning supply tote', 'cleaning microfiber towel stack', 'scrub sponge refill pack', 'utility cleaning apron',
'mop wall hook', 'broom wall hook', 'dustpan wall hook', 'step stool anti slip tape', 'ceiling light LED panel', 'light bulb storage organizer', 'smoke detector replacement unit', 'carbon monoxide replacement unit', 'fire extinguisher cabinet small', 'extension cord organizer wrap',

'laundry room bulletin board', 'laundry room whiteboard', 'laundry room chore chart', 'laundry room instruction decals', 'laundry room wall art', 'laundry room shelving brackets heavy duty', 'laundry room rolling shelf unit', 'laundry room cabinet toe kick drawer', 'laundry room sink drying rack', 'laundry room sink mat',
'laundry room drain hair catcher', 'laundry room pipe insulation foam', 'laundry room leak alarm smart', 'laundry room temperature monitor', 'laundry room humidity monitor', 'laundry room air freshener dispenser', 'laundry room essential oil diffuser', 'laundry room soundproof panels', 'laundry room storage bench', 'laundry room seating stool',

'clothing repair kit deluxe', 'clothing moth deterrent cedar blocks', 'clothing moth traps', 'clothing storage cedar hangers', 'clothing storage garment rack', 'clothing rolling rack', 'clothing folding clips', 'clothing drying tree rack', 'clothing folding template board', 'clothing care label guide',
'sock organizer drawer insert', 'sock matching clips', 'sock mesh wash pouch', 'sock sorting tray', 'sock drying rack small', 'shoe deodorizer balls', 'shoe drying rack', 'shoe cleaning brush', 'shoe stain remover', 'shoe laundry wash bag',

'laundry pet hair remover roller', 'laundry pet hair remover sheets', 'laundry static guard spray', 'laundry wrinkle spray large', 'laundry whitening booster powder', 'laundry color separation bags', 'laundry mesh divider baskets', 'laundry folding counter light', 'laundry under cabinet lighting strip', 'laundry smart plug',

'laundry smart water shutoff valve', 'laundry leak detection cable kit', 'laundry drain overflow sensor', 'laundry hose quick shutoff', 'laundry appliance surge bar', 'laundry emergency water shutoff wrench', 'laundry flood barrier strip', 'laundry anti mold spray', 'laundry mildew cleaner', 'laundry grout brush',

'laundry storage crate stackable', 'laundry storage drawer unit plastic', 'laundry cabinet corner lazy susan', 'laundry cabinet shelf turntable', 'laundry shelf guard rail', 'laundry cabinet drawer pull set', 'laundry cabinet hinge soft close', 'laundry shelf expansion unit', 'laundry fold down shelf', 'laundry cabinet door rack',

'garment brush wood handle', 'garment lint comb', 'garment care kit travel', 'garment freshener tablets', 'garment steamer travel case', 'garment bag breathable cotton', 'garment rack cover', 'garment hanger clips set', 'garment care instruction binder', 'garment storage cedar sachets',

'laundry counter top ironing mat', 'laundry countertop edge trim', 'laundry folding station cabinet', 'laundry folding counter storage drawers', 'laundry sink under cabinet shelf', 'laundry sink drain screen', 'laundry sink faucet sprayer replacement', 'laundry sink water filter attachment', 'laundry plumbing repair kit', 'laundry pipe wrench small',

'laundry room extension cord heavy duty', 'laundry room surge protector strip', 'laundry room cable management clips', 'laundry room door organizer rack', 'laundry room over door storage bins', 'laundry room towel rack', 'laundry room hand towel holder', 'laundry room apron hooks', 'laundry room glove holder', 'laundry room supply closet rod',

'laundry rolling garment rack', 'laundry folding chair', 'laundry storage ottoman', 'laundry supply basket wicker', 'laundry cabinet glass doors', 'laundry cabinet sliding doors', 'laundry shelf LED strip', 'laundry wall mounted basket system', 'laundry shelf divider metal', 'laundry shelf label holder clip',

'laundry safety goggles', 'laundry chemical resistant gloves', 'laundry respirator mask', 'laundry spill containment tray', 'laundry eye wash bottle', 'laundry safety data binder', 'laundry hazard label stickers', 'laundry cleaning schedule board', 'laundry maintenance checklist clipboard', 'laundry appliance parts organizer box'
],

        'Shed / Storage Unit': ['shed door', 'shed door hinges', 'shed door handle', 'shed door lock', 'shed door latch', 'shed door threshold', 'shed door weather stripping', 'shed door sweep', 'shed door stop', 'shed door closer',
'shed window', 'shed window latch', 'shed window screen', 'shed window trim', 'shed roof panels', 'shed roof shingles', 'shed roof flashing', 'shed roof vent', 'shed gutter section', 'shed downspout',
'shed wall panels', 'shed wall studs', 'shed insulation batts', 'shed vapor barrier', 'shed interior plywood panels', 'shed ceiling joists', 'shed floor plywood', 'shed floor mat', 'shed foundation blocks', 'shed anchor kit',

'overhead storage shelf', 'wall mounted shelving', 'corner shelving unit', 'heavy duty storage rack', 'wire storage rack', 'plastic storage rack', 'metal storage cabinet', 'locking storage cabinet', 'tall storage cabinet', 'base storage cabinet',
'stackable storage bins', 'clear storage bins', 'heavy duty storage totes', 'labeled storage bins', 'storage crate plastic', 'storage crate wood', 'file storage box', 'document storage tote', 'waterproof storage case', 'ammo storage can',
'tool pegboard', 'pegboard hooks', 'pegboard baskets', 'pegboard tool holders', 'slat wall panel', 'slat wall hooks', 'slat wall baskets', 'wall hook heavy duty', 'ceiling storage rack', 'overhead pulley storage system',

'workbench', 'workbench vise', 'workbench stool', 'workbench drawer', 'workbench power strip', 'tool chest', 'rolling tool cart', 'tool cabinet', 'tool drawer organizer', 'magnetic tool strip',
'hammer', 'sledgehammer', 'mallet', 'screwdriver set', 'precision screwdriver set', 'wrench set', 'adjustable wrench', 'socket set', 'ratchet set', 'torque wrench',
'pliers', 'needle nose pliers', 'locking pliers', 'wire cutters', 'wire strippers', 'utility knife', 'replacement blades', 'tape measure', 'laser level', 'bubble level',

'drill', 'drill charger', 'drill bits', 'impact driver', 'impact bits', 'circular saw', 'saw blades', 'jigsaw', 'reciprocating saw', 'angle grinder',
'sander', 'sanding discs', 'belt sander', 'heat gun', 'rotary tool', 'rotary tool bits', 'air compressor', 'air hose', 'air hose reel', 'air chuck',

'nail gun', 'staple gun', 'compressor fittings kit', 'shop vacuum', 'shop vacuum hose', 'shop vacuum filter', 'push broom', 'broom', 'dustpan', 'mop',
'mop bucket', 'cleaning caddy', 'all purpose cleaner', 'degreaser', 'oil absorbent pads', 'trash can', 'trash bags', 'recycling bin', 'extension cord', 'power strip',

'lawn mower', 'lawn mower blades', 'lawn mower fuel can', 'weed trimmer', 'weed trimmer line', 'leaf blower', 'leaf rake', 'garden rake', 'shovel', 'spade shovel',
'snow shovel', 'ice scraper', 'snow blower', 'snow blower fuel can', 'hedge trimmer', 'pruning shears', 'loppers', 'axe', 'hatchet', 'chainsaw',
'chainsaw chain', 'chainsaw oil', 'log splitter', 'wheelbarrow', 'watering can', 'plant pots', 'potting soil bags', 'fertilizer bags', 'grass seed', 'garden gloves',

'drip irrigation kit', 'sprinkler', 'garden hose', 'hose nozzle', 'hose splitter', 'hose repair kit', 'spray bottle garden', 'rodent traps', 'pest control sprayer', 'bug spray outdoor',
'bike rack wall mount', 'bike repair stand', 'bike pump', 'bike helmets', 'sports equipment bin', 'golf clubs', 'golf bag', 'baseball bats', 'baseballs', 'basketballs',
'football', 'soccer ball', 'tennis rackets', 'tennis balls', 'skateboard', 'roller skates', 'skis', 'ski poles', 'kayak paddles', 'camping cooler',

'camping stove', 'propane tank', 'propane torch', 'folding camping chairs', 'tent storage bag', 'sleeping bags', 'sleeping pads', 'camp lantern', 'moving blankets', 'storage trunk',
'ladder', 'extension ladder', 'step ladder', 'folding ladder', 'moving dolly', 'hand truck', 'wheel chocks', 'first aid kit', 'fire extinguisher', 'flashlight',
'lantern rechargeable', 'batteries', 'safety glasses', 'work gloves', 'hearing protection', 'dust masks', 'respirator mask', 'hard hat', 'mechanic gloves', 'knee pads',

'concrete mix bags', 'cement mixer portable', 'rebar lengths', 'rebar tie wire', 'brick trowel', 'masonry hammer', 'concrete float', 'concrete edger', 'concrete groover', 'mixing tub large',
'wheelbarrow tire pump', 'gravel bags', 'sand bags', 'landscape fabric roll', 'landscape staples', 'paver stones', 'paver base', 'tamper tool', 'post hole digger', 'fence post level',

'wood boards 2x4', 'wood boards 4x4', 'plywood sheets', 'pressure treated lumber', 'wood dowels', 'trim boards', 'wood glue bottle', 'construction adhesive', 'caulk tubes', 'caulk gun',
'nails assorted', 'deck screws', 'wood screws', 'lag bolts', 'carriage bolts', 'washers assorted', 'metal brackets', 'joist hangers', 'corner braces', 'gate hinges heavy duty',

'metal sheets', 'sheet metal screws', 'metal cutting snips', 'welding helmet', 'welding gloves', 'welding rods', 'welding clamps', 'metal file', 'bench grinder', 'grinder discs',
'cut off wheels', 'wire wheel brush', 'drill press', 'drill press vise', 'tap and die set', 'thread cutting oil', 'metal punch set', 'center punch', 'anvil small', 'forge propane burner',

'generator portable', 'generator fuel stabilizer', 'fuel storage can', 'fuel funnel', 'battery charger', 'jump starter pack', 'solar panel portable', 'extension cord heavy duty', 'cord reel wall mount', 'power inverter',
'breaker panel subpanel', 'electrical wire spool', 'wire connectors', 'junction box', 'outlet box', 'GFCI outlet outdoor', 'light switch outdoor', 'LED shop light', 'light bulb pack', 'motion sensor light',

'security camera outdoor', 'motion detector alarm', 'padlock heavy duty', 'combination lock', 'key safe lock box', 'door reinforcement plate', 'window security bars', 'tool lock cable', 'storage cabinet lock kit', 'safe small fireproof',
'temperature gauge analog', 'humidity gauge analog', 'weather station unit', 'air circulator fan', 'box fan', 'space heater portable', 'dehumidifier small', 'moisture absorber buckets', 'odor absorber tubs', 'mouse bait station',

'storage shelf brackets heavy duty', 'shelf support pins', 'shelf liner roll', 'plastic drawer unit', 'drawer dividers', 'small parts organizer case', 'bolt organizer bin', 'screw organizer case', 'nail storage box', 'hardware storage cabinet',
'tool belt', 'tool pouch', 'magnetic parts tray', 'work apron canvas', 'tool backpack', 'socket organizer rail', 'wrench organizer rack', 'screwdriver organizer rack', 'drill bit organizer case', 'saw blade storage case',

'paint cans assorted', 'paint thinner', 'mineral spirits', 'roller frames', 'roller covers', 'paint trays', 'drop cloth canvas', 'plastic sheeting roll', 'masking tape roll', 'painter tape roll',
'paint sprayer electric', 'paint mixer attachment', 'stir sticks pack', 'paint can opener tool', 'scraper putty knife', 'joint compound bucket', 'drywall tape roll', 'drywall patch kit', 'sanding block', 'paint brush set',

'plumbing pipe PVC', 'PVC fittings assorted', 'pipe wrench large', 'adjustable wrench large', 'pipe cutter', 'plumber tape roll', 'drain auger large', 'water pump portable', 'sump pump', 'sump pump hose',
'pressure washer', 'pressure washer hose', 'pressure washer wand', 'garden hose reel', 'sprinkler timer', 'irrigation tubing', 'drip emitters pack', 'backflow preventer', 'hose bib lock', 'water shutoff wrench',

'auto jack floor', 'jack stands pair', 'lug wrench', 'tire inflator', 'tire pressure gauge', 'oil drain pan', 'oil filter wrench', 'mechanic creeper', 'mechanic stool rolling', 'automotive tool set',
'brake cleaner spray', 'engine degreaser spray', 'coolant jug', 'motor oil jug', 'transmission fluid jug', 'gear oil bottle', 'windshield washer fluid', 'battery terminal cleaner', 'fuse assortment', 'spare automotive bulbs',

'ratchet straps heavy duty', 'bungee cords pack', 'tie down anchors', 'cargo net large', 'trailer hitch lock', 'trailer wiring kit', 'trailer ball mount', 'tow strap recovery', 'winch electric', 'winch remote',
'chain hoist manual', 'come along winch', 'tow chains', 'load binder', 'moving straps shoulder', 'appliance dolly straps', 'furniture sliders', 'moving boxes flattened', 'packing blankets', 'storage pallet wood',

'metal shelving expansion kit', 'corner storage rack metal', 'overhead bin storage', 'wall cabinet metal', 'chemical storage cabinet', 'flammable storage cabinet', 'spill containment tray', 'safety cone set', 'caution tape roll', 'traffic mirror convex',
'first aid cabinet wall mount', 'emergency light battery backup', 'fire blanket', 'smoke detector battery pack', 'carbon monoxide detector battery pack', 'flashlight rechargeable', 'headlamp LED', 'portable flood light', 'tripod work light', 'extension cord locking connector',

'attic storage bin', 'weatherproof storage chest', 'metal storage trunk', 'plastic storage drum', 'lockable job box', 'rolling storage chest', 'drawer tool cabinet', 'steel parts cabinet', 'overhead ceiling hooks', 'ceiling bike hoist',
'wall mounted ladder rack', 'ladder stabilizer', 'ladder leveler', 'roof ladder hook', 'scaffold planks', 'portable scaffold', 'sawhorse pair', 'folding sawhorse', 'work platform folding', 'shop stool adjustable',

'router tool', 'router bits set', 'planer handheld', 'wood planer blades', 'lathe benchtop', 'lathe chisels', 'band saw', 'band saw blades', 'scroll saw', 'scroll saw blades',
'oscillating tool', 'oscillating blades', 'tile saw', 'tile saw blade', 'wet saw pump', 'concrete saw', 'diamond blade', 'core drill bit', 'rotary hammer drill', 'masonry drill bits',

'pneumatic ratchet', 'air impact wrench', 'impact sockets', 'breaker bar', 'ball peen hammer', 'dead blow hammer', 'pry bar set', 'crowbar', 'chisels cold', 'wood chisels set',
'files set metal', 'rasp wood', 'deburring tool', 'pipe threader', 'grease gun', 'grease cartridges', 'bearing puller', 'gear puller', 'hydraulic press', 'shop press plates',

'multimeter digital', 'voltage tester pen', 'wire crimpers', 'heat shrink tubing', 'soldering iron', 'solder wire spool', 'soldering stand', 'desoldering pump', 'electrical fish tape', 'cable staples',
'extension ladder tie downs', 'roof safety harness', 'fall protection rope', 'anchor point roof', 'safety barrier netting', 'hard shell knee pads', 'face shield clear', 'welding jacket', 'fire resistant gloves', 'ear plug pack',

'outdoor storage bench', 'deck box large', 'pool equipment storage bin', 'chemical measuring cup', 'chlorine storage bucket', 'pool net skimmer', 'pool brush', 'pool vacuum hose', 'leaf canister trap', 'garden cart rolling',
'fertilizer spreader', 'broadcast spreader', 'seed spreader hand', 'tiller gas', 'tiller tines', 'cultivator tool', 'landscaping shovel', 'edger manual', 'edger gas', 'tree pruning saw',

'log rack firewood', 'firewood carrier', 'kindling splitter', 'maul splitting', 'ash bucket metal', 'ash shovel', 'chimney brush kit', 'chimney rods extension', 'wood moisture meter', 'stump grinder rental unit',
'storage tarp heavy duty', 'canopy tent frame', 'canopy replacement cover', 'tie down stakes metal', 'ground anchor spiral', 'sandbag weights', 'weatherproof cable box', 'outdoor extension cord reel', 'solar yard light pack', 'landscape lighting transformer',

'metal detector', 'rc hobby storage case', 'drone storage case', 'battery charging station hobby', 'model paint storage rack', 'spray booth portable', 'airbrush kit', 'airbrush compressor', 'craft tool organizer', 'work table folding',
'utility sink freestanding', 'sink faucet outdoor', 'hose splitter brass', 'hose quick connect kit', 'rain barrel', 'rain barrel diverter kit', 'gutter guard section', 'ice melt bucket', 'snow roof rake', 'roof snow guard',

'truck tool box bed mount', 'bed liner spray kit', 'cargo rack roof', 'roof tie down straps', 'tow hitch receiver', 'hitch pin lock', 'trailer jack wheel', 'trailer spare tire mount', 'boat cover', 'boat anchor small',
'camp stove fuel canisters', 'cooler wheeled', 'water jug camping', 'portable toilet camping', 'folding cot', 'hammock straps', 'bug zapper lantern', 'propane heater portable', 'battery lantern emergency', 'emergency radio crank',

'storage hooks assorted', 'magnetic cabinet catch', 'drawer slide replacement', 'cabinet hinge replacement', 'door hinge screws pack', 'weather stripping roll', 'foam seal tape', 'silicone sealant tube', 'construction screws box', 'concrete anchors pack',
'steel cable roll', 'chain link roll', 'pad eye bolts', 'eye hooks large', 'turnbuckle kit', 'rope nylon coil', 'paracord bundle', 'pulley block heavy duty', 'carabiner clip steel', 'snap hook swivel',

'portable air tank', 'tire patch kit', 'roadside safety kit', 'warning triangles set', 'garage mirror wide angle', 'inventory clipboard', 'maintenance log binder', 'label maker handheld', 'barcode label roll', 'tool inventory tags',
'rolling bin cart', 'storage rack wheels kit', 'shelf bracket corner', 'wire basket storage', 'stackable drawer bins', 'document safe waterproof', 'key organizer rack', 'combination key lock', 'remote control storage box', 'utility cabinet tall',

'work light clamp', 'magnetic flashlight holder', 'cord management box', 'battery storage case fireproof', 'power tool wall mount', 'tool battery wall rack', 'spray paint rack', 'lubricant storage tray', 'oil storage rack', 'fuel storage locker',
'folding gate portable', 'temporary fence panel', 'fence post driver', 'chain link gate kit', 'driveway marker stakes', 'reflective tape roll', 'sign post metal', 'no trespassing sign', 'private property sign', 'security alarm siren',

'wood stain cans', 'deck sealer', 'concrete sealer', 'masonry waterproofing', 'roof patch sealant', 'asphalt repair patch', 'driveway crack filler', 'expanding foam insulation', 'foam gun applicator', 'insulation tape roll',
'weatherproof tarp clips', 'ball tarp bungee', 'zip tie assortment', 'hose clamp assortment', 'metal strapping roll', 'strapping tensioner tool', 'banding clips', 'shrink wrap roll', 'heat shrink gun', 'pallet wrap roll',

'bench vise swivel base', 'vise jaw pads magnetic', 'clamp set assorted', 'bar clamp large', 'corner clamp woodworking', 'pipe clamp set', 'spring clamp pack', 'toggle clamp', 'bench dogs set', 'workbench holdfast',
'tool sharpening stone', 'knife sharpening guide', 'chainsaw sharpening file', 'drill bit sharpener', 'saw blade sharpener', 'grinding wheel dresser', 'lathe chuck key', 'lathe faceplate', 'router table', 'router table fence',

'compressor oil bottle', 'air dryer filter', 'air regulator inline', 'air manifold splitter', 'pneumatic grease gun', 'pneumatic brad nailer', 'pneumatic framing nailer', 'nail assortment box', 'staple assortment box', 'air tool lubricant',
'hydraulic bottle jack', 'transmission jack', 'engine stand', 'engine hoist', 'load leveler bar', 'tow dolly', 'trailer ramps', 'ramp support stands', 'winch mounting plate', 'recovery shackles',

'metal storage locker', 'locker shelf insert', 'locker hanging rod', 'locker ventilation kit', 'storage cabinet caster kit', 'drawer cabinet divider kit', 'stackable crate lid', 'rolling crate base', 'bin divider inserts', 'label holder clips',
'heavy duty peg hooks', 'pegboard shelf tray', 'pegboard bin cups', 'slat wall tool holder', 'slat wall shelf', 'slat wall helmet rack', 'wall track rail system', 'rail storage hooks', 'ceiling rack pulley kit', 'overhead kayak hoist',

'camp tool kit compact', 'survival kit storage box', 'waterproof flashlight case', 'portable battery bank large', 'jump cable heavy duty', 'fuel siphon pump', 'gas can spout replacement', 'oil change container sealed', 'fluid transfer pump manual', 'shop funnel long neck',
'pressure washer surface cleaner', 'spray wand extension', 'foam sprayer bottle', 'chemical sprayer backpack', 'weed barrier pins', 'plant stake pack', 'tree tie straps', 'garden netting roll', 'bird netting roll', 'greenhouse shelving kit',

'storage barrel rainproof', 'metal drum lid clamp', 'drum pump manual', 'spill absorbent granules', 'hazmat storage container', 'safety storage signage', 'lockout tagout kit', 'breaker lock device', 'cable lockout device', 'electrical gloves rated',
'extension cord splitter', 'cord protector ramp', 'cord ceiling hanger', 'temporary power pole', 'jobsite power box', 'outdoor timer outlet', 'generator cover waterproof', 'generator wheel kit', 'generator maintenance kit', 'fuel stabilizer treatment',

'trimmer rack wall mount', 'mower lift jack', 'blade balancing tool', 'spark plug wrench', 'fuel line hose', 'primer bulb replacement', 'air filter replacement mower', 'belt replacement mower', 'snow blower shear pins', 'snow blower cover',
'log carrier canvas', 'firewood rack cover', 'kindling bag storage', 'chimney cap stainless', 'roof flashing repair kit', 'gutter cleaning tool', 'downspout extension', 'roof patch tape', 'ladder tool tray', 'ladder hook wall mount',

'outdoor folding table', 'camp prep table', 'water cooler dispenser', 'ice chest large', 'cooler divider insert', 'tent pole repair kit', 'tent stake hammer', 'camp cookware kit', 'propane cylinder storage rack', 'camp tool roll',
'boat motor stand', 'boat fuel tank portable', 'boat trailer guide poles', 'marine rope coil', 'dock line cleat', 'life jacket storage rack', 'paddle board rack', 'fishing rod rack wall mount', 'tackle box large', 'bait cooler small',

'storage shelf lighting kit', 'motion light battery', 'battery charging cabinet', 'tool charging dock', 'power tool case stackable', 'stacking tool box', 'rolling stack toolbox', 'drawer lock kit', 'tool chest handle replacement', 'tool chest caster wheels',
'cabinet anti tip bracket', 'cabinet anchor strap', 'cabinet leveling feet', 'storage cabinet shelf clips', 'drawer slide lubricant', 'hinge adjustment tool', 'door latch replacement kit', 'weather seal bottom sweep', 'threshold ramp rubber', 'floor mat anti slip',

'anti fatigue mat heavy duty', 'rubber floor tiles interlocking', 'floor drain cover grate', 'concrete patch compound', 'masonry repair mortar', 'expansion joint filler', 'epoxy repair kit', 'crack injection kit', 'moisture barrier paint', 'mold treatment spray',
'storage bench cushion', 'seat pad waterproof', 'utility stool folding', 'rolling mechanic seat', 'creeper replacement wheels', 'shop stool foot ring', 'workbench caster set', 'workbench leveling feet', 'bench storage drawer kit', 'bench light strip LED',

'storage cage metal', 'mesh security panel', 'padlock weatherproof', 'keyed alike lock set', 'combination lock long shackle', 'hasp lock heavy duty', 'hinge security pin', 'door reinforcement bar', 'window vent cover', 'security light solar'
],

        Yard: ['front lawn', 'back lawn', 'side yard', 'landscaped beds', 'mulch beds', 'rock beds', 'gravel area', 'garden border edging', 'retaining wall', 'decorative boulders',
'flower beds', 'raised garden bed', 'vegetable garden plot', 'herb garden bed', 'tree ring border', 'hedge row', 'privacy shrubs', 'ornamental grasses', 'ground cover plants', 'climbing vines trellis',

'sprinkler system control panel', 'sprinkler valves', 'sprinkler heads pop up', 'sprinkler heads rotary', 'sprinkler drip line', 'sprinkler backflow preventer', 'sprinkler timer', 'irrigation manifold', 'irrigation shutoff valve', 'hose bib outdoor',
'garden hose heavy duty', 'soaker hose', 'hose reel freestanding', 'hose reel wall mount', 'spray nozzle adjustable', 'sprinkler oscillating', 'sprinkler impact', 'watering wand', 'rain gauge yard', 'rain barrel system',

'patio concrete slab', 'paver patio', 'deck wood', 'deck composite', 'deck railing', 'deck stairs', 'porch front', 'porch railing', 'porch swing', 'gazebo structure',
'pergola wood', 'shade sail canopy', 'awning retractable', 'outdoor canopy tent', 'sun shade umbrella', 'umbrella base heavy', 'outdoor rug patio', 'doormat exterior', 'welcome mat decorative', 'outdoor bench',

'outdoor dining table', 'outdoor dining chairs', 'outdoor sectional sofa', 'patio coffee table', 'patio side table', 'chaise lounge chair', 'hammock stand', 'fire pit metal', 'fire pit cover', 'propane fire table',
'charcoal grill', 'gas grill', 'grill cover', 'smoker grill', 'outdoor pizza oven', 'grill tool set', 'propane tank outdoor', 'cooler outdoor', 'outdoor bar cart', 'outdoor serving tray',

'driveway concrete', 'driveway pavers', 'driveway gate', 'driveway motion light', 'driveway security camera', 'mailbox post', 'mailbox locking', 'house number plaque', 'yard address sign', 'flag pole yard',
'fence wood', 'fence vinyl', 'fence chain link', 'fence gate', 'gate latch exterior', 'gate hinges heavy', 'gate lock outdoor', 'garden arbor', 'garden arch trellis', 'yard trellis metal',

'lawn mower push', 'lawn mower riding', 'mower bag attachment', 'mower cover', 'weed trimmer electric', 'weed trimmer gas', 'leaf blower electric', 'leaf blower gas', 'hedge trimmer electric', 'hedge trimmer gas',
'chainsaw electric', 'chainsaw gas', 'pole saw', 'garden rake leaf', 'landscape rake wide', 'shovel round point', 'shovel square point', 'spade garden', 'post hole digger manual', 'garden hoe',

'wheelbarrow single wheel', 'garden cart dump', 'fertilizer spreader broadcast', 'fertilizer spreader drop', 'seed spreader handheld', 'garden trowel hand', 'hand cultivator', 'pruning shears bypass', 'loppers long handle', 'tree pruner pole',
'watering can plastic', 'watering can metal', 'plant pots ceramic', 'plant pots plastic', 'planter box wood', 'hanging planter basket', 'window planter box', 'plant stand outdoor', 'potting bench', 'compost bin yard',

'pool above ground', 'pool in ground', 'pool ladder', 'pool cover', 'pool pump', 'pool filter system', 'pool skimmer net', 'pool brush long handle', 'pool vacuum hose', 'pool float',
'hot tub spa', 'hot tub cover', 'hot tub steps', 'hot tub cover lift', 'outdoor shower', 'garden fountain', 'pond liner', 'pond pump', 'pond filter', 'bird bath pedestal',

'playground swing set', 'slide freestanding', 'trampoline yard', 'trampoline safety net', 'basketball hoop portable', 'basketball hoop in ground', 'soccer goal yard', 'baseball practice net', 'golf practice net', 'batting tee',
'sand box children', 'tree house', 'climbing dome', 'zip line kit yard', 'tire swing tree', 'picnic table wood', 'picnic table umbrella', 'outdoor chalkboard', 'yard game cornhole', 'yard game ladder toss',

'landscape lighting solar', 'path lights solar', 'spotlight ground', 'string lights outdoor', 'post cap lights', 'deck lights', 'flood light motion', 'timer outdoor outlet', 'extension cord outdoor rated', 'weatherproof outlet cover',
'security camera outdoor wired', 'security camera outdoor wireless', 'alarm siren outdoor', 'doorbell camera exterior', 'motion detector outdoor', 'smart sprinkler controller', 'weather station yard', 'wind chime decorative', 'garden statue', 'yard art metal',

'trash can outdoor', 'recycling bin outdoor', 'compost tumbler', 'outdoor storage deck box', 'storage shed small', 'tool shed large', 'wood pile rack', 'firewood cover tarp', 'propane tank cover', 'gas meter cover decorative',

'landscape border bricks', 'retaining wall blocks', 'retaining wall cap stones', 'gravel driveway stone', 'crushed stone base', 'topsoil bags', 'mulch bags', 'pine straw bales', 'decorative river rock', 'landscape timbers',
'concrete stepping stones', 'garden stepping path', 'flagstone slabs', 'paver edging restraints', 'weed barrier fabric', 'landscape staples metal', 'drainage gravel trench', 'french drain pipe', 'catch basin drain box', 'yard drainage grate',

'sprinkler head replacement', 'sprinkler riser extension', 'sprinkler valve box cover', 'irrigation drip emitters', 'irrigation tubing roll', 'irrigation pressure regulator', 'irrigation filter inline', 'hose timer digital', 'hose splitter brass', 'hose quick connect fittings',
'rain barrel diverter kit', 'downspout extension flexible', 'gutter splash block', 'gutter guard mesh', 'outdoor faucet cover winter', 'freeze proof hydrant', 'yard hydrant handle', 'garden hose repair kit', 'spray bottle pump garden', 'watering spike automatic',

'deck stain', 'deck sealer waterproof', 'deck cleaner solution', 'deck railing balusters', 'deck post caps', 'deck stair lighting', 'deck storage bench', 'deck privacy screen', 'patio privacy wall', 'outdoor curtain panels',
'gazebo mosquito netting', 'gazebo replacement canopy', 'pergola shade cover', 'shade sail hardware kit', 'awning motor replacement', 'patio heater propane', 'patio heater cover', 'outdoor ceiling fan damp rated', 'porch rocking chair', 'porch side table',

'fire pit spark screen', 'fire pit grate insert', 'fire pit poker tool', 'fire pit lava rocks', 'chiminea outdoor', 'grill grates replacement', 'grill burner tubes', 'grill ignition kit', 'grill thermometer lid', 'smoker wood chips box',
'outdoor kitchen island', 'outdoor sink station', 'outdoor refrigerator', 'outdoor cabinet stainless', 'bar stool outdoor', 'cooler rolling outdoor', 'ice chest heavy duty', 'picnic basket wicker', 'serving cart patio', 'outdoor buffet table',

'driveway sealant bucket', 'asphalt patch repair', 'concrete crack filler tube', 'driveway pressure washer', 'snow shovel heavy duty', 'snow blower electric', 'ice melt spreader', 'roof snow rake', 'driveway marker reflectors', 'car port canopy',
'mailbox replacement door', 'mailbox post anchor', 'parcel drop box', 'yard sign holder', 'address numbers metal', 'decorative yard flag', 'flag pole solar light', 'fence post caps', 'fence pickets spare', 'fence repair kit',

'lawn aerator manual', 'lawn aerator core', 'lawn dethatcher rake', 'lawn roller', 'grass seed spreader', 'weed puller tool', 'garden edging shovel', 'cultivator gas', 'rototiller electric', 'leaf vacuum mulcher',
'hedge shear manual', 'branch lopper ratchet', 'tree stump remover chemical', 'tree wrap protective', 'plant frost cover', 'plant cage tomato', 'trellis netting', 'garden cloche cover', 'raised bed liner', 'compost thermometer',

'pool cover reel', 'pool chlorine floater', 'pool test kit', 'pool skimmer basket', 'pool vacuum head', 'pool ladder anchor', 'solar pool cover', 'solar pool cover reel', 'hot tub chemical kit', 'hot tub filter replacement',
'pond waterfall kit', 'pond aerator pump', 'pond skimmer box', 'pond net cover', 'bird feeder hanging', 'bird feeder pole', 'bird seed storage bin', 'squirrel guard baffle', 'bat house mount', 'bee hotel garden',

'swing set anchor kit', 'trampoline ladder', 'trampoline cover', 'basketball hoop net replacement', 'soccer net replacement', 'playhouse outdoor', 'sandbox cover', 'tree swing rope kit', 'yard obstacle course kit', 'croquet set lawn',
'bocce ball set', 'horseshoe game set', 'giant checkers set', 'giant connect four', 'disc golf basket', 'kick dart board yard', 'badminton net set', 'volleyball net yard', 'outdoor projector screen', 'projector outdoor rated',

'landscape spotlight LED', 'uplight tree', 'pathway light low voltage', 'deck post light solar', 'string lights cafe style', 'outdoor light pole', 'flood light LED', 'motion floodlight solar', 'smart outdoor plug', 'weatherproof junction box',
'security camera floodlight combo', 'video doorbell outdoor', 'gate keypad entry', 'driveway alarm sensor', 'yard siren strobe', 'sprinkler rain sensor', 'weather vane decorative', 'garden gnome statue', 'metal wind spinner', 'yard fountain tiered',

'outdoor trash enclosure', 'trash can shed', 'recycling container large', 'compost aerator tool', 'compost bin tumbler dual', 'wood chipper electric', 'log splitter electric', 'firewood rack outdoor', 'propane tank storage cage', 'generator outdoor cover',

'storm shutter panels', 'window well cover', 'drainage pump portable', 'backyard flood barrier', 'yard tarp heavy duty', 'ground anchor kit', 'tent canopy weights', 'portable stage platform', 'outdoor extension reel large', 'weatherproof storage chest large'

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
        'wine opener': 'https://cdamemoryjogger.blob.core.windows.net/images/wine%20opener.jpg',
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
        'vacuum sealer': 'https://cdamemoryjogger.blob.core.windows.net/images/vacuum%20sealer.jpg',
        'food storage containers': 'https://cdamemoryjogger.blob.core.windows.net/images/food%20storage%20containers.jpg',
        'glass containers': 'https://cdamemoryjogger.blob.core.windows.net/images/glass%20containers.jpg',
        'plastic containers': 'https://cdamemoryjogger.blob.core.windows.net/images/plastic%20containers.jpg',
        'spice jars': 'https://cdamemoryjogger.blob.core.windows.net/images/spice%20jars.jpg',
        'salt shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20shaker.jpg',
        'pepper shaker': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20shaker.jpg',
        'salt grinder': 'https://cdamemoryjogger.blob.core.windows.net/images/salt%20grinder.jpg',
        'pepper grinder': 'https://cdamemoryjogger.blob.core.windows.net/images/pepper%20grinder.jpg',
        'oil bottle': 'https://cdamemoryjogger.blob.core.windows.net/images/oil%20bottle.jpg',
        'vinegar bottle': 'https://cdamemoryjogger.blob.core.windows.net/images/vinegar%20bottle.jpg',
        'sugar canister': 'https://cdamemoryjogger.blob.core.windows.net/images/sugar%20canister.jpg',
        'flour canister': 'https://cdamemoryjogger.blob.core.windows.net/images/flour%20canister.jpg',
        'coffee canister': 'https://cdamemoryjogger.blob.core.windows.net/images/coffee%20canister.jpg',
        'tea canister': 'https://cdamemoryjogger.blob.core.windows.net/images/tea%20canister.jpg'
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
    const SWIPE_START_INDEX = 120;
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


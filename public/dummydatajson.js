let arr = [
    {
        "id": 1,
        "name": "Amul Pro",
        "description": "Amul Pro is a high protein low-fat milk powder designed to help build and maintain muscle mass.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/067825/ensure-vanilla-nutrition-drink-refill-of-400-g-2-1671741395.jpg",
        "price": 350,
        "brand": "Amul",
        "discount": "10%"
    },
    {
        "id": 2,
        "name": "Dabur Honey",
        "description": "Dabur Honey is 100% pure and natural honey that is rich in antioxidants and helps boost immunity.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/067826/ensure-vanilla-nutrition-drink-jar-of-400-g-2.1-1671741700.jpg",
        "price": 220,
        "brand": "Dabur",
        "discount": "20%"
    },
    {
        "id": 3,
        "name": "Ever Herb Ashwagandha Capsules",
        "description": "Ever Herb Ashwagandha Capsules are made from the finest quality Ashwagandha root extract, and helps in reducing stress and anxiety.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/M01493/protinex-diabetes-care-vanilla-400gm-nutrition-drink-for-indian-adults-to-control-blood-sugar-2-1678708681.jpg",
        "price": 500,
        "brand": "Ever Herb",
        "discount": "15%"
    },
    {
        "id": 4,
        "name": "LiveEasy Oats",
        "description": "LiveEasy Oats are a high-fiber, low-fat breakfast option that helps in reducing cholesterol levels.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/P67858/kapiva-noni-juice-2l-rich-in-antioxidants-boosts-energy-builds-immunity-super-saver-pack-of-2-2-1668577899.jpg",
        "price": 150,
        "brand": "LiveEasy",
        "discount": "5%"
    },
    {
        "id": 5,
        "name": "Ensure Diabetes Care",
        "description": "Ensure Diabetes Care is a complete and balanced nutritional supplement designed to help manage blood sugar levels.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/374843/ensure-chocolate-nutrition-drink-refill-of-200-g-2-1669655441.jpg",
        "price": 800,
        "brand": "Ensure",
        "discount": "25%"
    },
    {
        "id": 6,
        "name": "Nestle Nangrow",
        "description": "Nestle Nangrow is a nutritious milk drink for growing children aged 2 to 5 years.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/L92445/baidyanath-honey-c4-approved-unadulterated-pure-honey-wholesome-health-naturally-500-g-2-1664626660.jpg",
        "price": 450,
        "brand": "Nestle",
        "discount": "10%"
    },
    {
        "id": 7,
        "name": "Amul Lassi",
        "description": "Amul Lassi is a refreshing drink made from fermented milk, and is rich in probiotics.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/241592/nepro-hp-vanilla-nutrition-drink-tin-of-400-g-2-1669634977.jpg",
        "price": 70,
        "brand": "Amul",
        "discount": "5%"
    }, {
        "id": 8,
        "name": "Ever Herb Turmeric Powder",
        "description": "Ever Herb Turmeric Powder is made from high-quality turmeric roots and is a rich source of antioxidants and anti-inflammatory compounds.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/I32849/grd-bix-cardamom-nutrition-biscuits-tin-of-250-g-2-1669710444.jpg",
        "price": 120,
        "brand": "Ever Herb",
        "discount": "15%"
    },
    {
        "id": 9,
        "name": "LiveEasy Quinoa",
        "description": "LiveEasy Quinoa is a gluten-free, high-protein grain that is rich in essential amino acids and fiber.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/I41640/baidyanath-madhu-500-gm-2-1669710864.jpg",
        "price": 250,
        "brand": "LiveEasy",
        "discount": "10%"
    },
    {
        "id": 10,
        "name": "Ensure Protein Powder",
        "description": "Ensure Protein Powder is a blend of whey and soy protein that helps in muscle building and recovery.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/H31888/myfitness-peanut-butter-chocolate-smooth-1250g-jar-2-1671742770.jpg",
        "price": 750,
        "brand": "Ensure",
        "discount": "20%"
    },
    {
        "id": 11,
        "name": "Nestle Milo",
        "description": "Nestle Milo is a chocolate and malt powder that is a rich source of energy and essential vitamins and minerals.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/M39272/heka-bites-roasted-5-in-1-seeds-mix-cranberries-high-protein-healthy-snacks-diabetic-snacks-2-1671742806.jpg",
        "price": 180,
        "brand": "Nestle",
        "discount": "5%"
    },
    {
        "id": 12,
        "name": "Amul Cheese Spread",
        "description": "Amul Cheese Spread is a creamy and delicious spread made from real cheese and is a good source of calcium.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/V24467/kapiva-organic-apple-cider-vinegar-with-the-mother-500ml-2-1660659350.jpg",
        "price": 90,
        "brand": "Amul",
        "discount": "5%"
    }, {
        "id": 13,
        "name": "Amul Buttermilk",
        "description": "Amul Buttermilk is a refreshing drink made from churned yogurt, and is rich in probiotics.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/M23200/heka-bites-roasted-jowar-puffs-majestic-masala-pack-of-8-30-grams-each-low-calorie-diabetic-snacks-2-1671745096.jpg",
        "price": 40,
        "brand": "Amul",
        "discount": "3%"
    },
    {
        "id": 14,
        "name": "Nestle Yogurt Smoothie",
        "description": "Nestle Yogurt Smoothie is a delicious drink made from blended yogurt and fruit, and is high in protein.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/B33406/myfitness-peanut-butter-natural-smooth-1250g-jar-2-1671742663.jpg",
        "price": 100,
        "brand": "Nestle",
        "discount": "10%"
    },
    {
        "id": 15,
        "name": "Mother Dairy Chaach",
        "description": "Mother Dairy Chaach is a traditional Indian drink made from churned yogurt, and is a great source of calcium.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/S52492/sugar-fighter-stevia-zero-calories-fat-free-sweetener-combo-100-gm-powder-jar-100-tablet-2-1641788853.jpg",
        "price": 35,
        "brand": "Mother Dairy",
        "discount": "2%"
    },
    {
        "id": 16,
        "name": "Danone Probiotic Drink",
        "description": "Danone Probiotic Drink is a nutritious drink made from fermented milk, and is rich in probiotics to support gut health.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/Y95815/namhya-cocoa-cinnamon-latte-100g-pouch-1-1671743736.jpg",
        "price": 90,
        "brand": "Danone",
        "discount": "7%"
    },
    {
        "id": 17,
        "name": "Gujarat Cooperative Milk Marketing Federation Buttermilk",
        "description": "Gujarat Cooperative Milk Marketing Federation Buttermilk is a refreshing drink made from churned yogurt, and is a good source of protein and calcium.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/A00680/neuherbs-omega-steel-cut-oats-400g-box-2.1-1671744185.jpg",
        "price": 30,
        "brand": "Gujarat Cooperative Milk Marketing Federation",
        "discount": "4%"
    },
    {
        "id": 18,
        "name": "Yakult Probiotic Drink",
        "description": "Yakult Probiotic Drink is a popular Japanese drink made from fermented milk, and is known for its probiotic content.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/K18655/fast-up-plant-protein-and-superfood-for-women-hormonal-balance-skin-hair-mango-450gms-2-1671742332.jpg",
        "price": 120,
        "brand": "Yakult",
        "discount": "12%"
    },
    {
        "id": 19,
        "name": "Nandini Buttermilk",
        "description": "Nandini Buttermilk is a traditional Indian drink made from churned yogurt, and is a great way to cool down on a hot day.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/D98932/nutrabay-pro-potent-caffeine-200mg-60-capsules-2-1641792435.jpg",
        "price": 25,
        "brand": "Nandini",
        "discount": "1%"
    }, {
        "id": 20,
        "name": "MTR Badam Drink Mix",
        "description": "MTR Badam Drink Mix is a refreshing drink made from almond powder and milk, and is a great source of protein.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/F33885/namhya-tragacanth-gum-crystals-400g-pouch-2-1671743781.jpg",
        "price": 50,
        "brand": "MTR",
        "discount": "5%"
    },
    {
        "id": 21,
        "name": "Epigamia Smoothies",
        "description": "Epigamia Smoothies are delicious, creamy drinks made from Greek yogurt and fruit, and are high in protein and low in calories.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/G20147/axiom-noni-juice-immunity-booster-500ml-3-1671742160.jpg",
        "price": 120,
        "brand": "Epigamia",
        "discount": "8%"
    },
    {
        "id": 22,
        "name": "Britannia Milk Bikis",
        "description": "Britannia Milk Bikis are biscuits made with milk and are a great source of calcium and energy.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/E29163/serapheena-jowar-sweet-potato-big-cake-mix-vanilla-pound-cake-375g-2-1671745371.jpg",
        "price": 20,
        "brand": "Britannia",
        "discount": "2%"
    },
    {
        "id": 23,
        "name": "Tropicana 100% Orange Juice",
        "description": "Tropicana 100% Orange Juice is a refreshing drink made from freshly squeezed oranges, and is a great source of vitamin C.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/B64545/beanies-flavoured-instant-coffee-white-chocolate-and-raspberry-50g-2-1671744487.jpg",
        "price": 90,
        "brand": "Tropicana",
        "discount": "6%"
    },
    {
        "id": 24,
        "name": "Horlicks Kesar Badam",
        "description": "Horlicks Kesar Badam is a nourishing drink made from milk, wheat, and malted barley, and is enriched with almonds and saffron.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/W27903/hass-pippali-churna-pippali-powder-long-pepper-powder-for-tea-1x1-kilogram-2-1667974849.jpg",
        "price": 75,
        "brand": "Horlicks",
        "discount": "4%"
    }, {
        "id": 25,
        "name": "Dabur Honey",
        "description": "Dabur Honey is a pure and natural honey that is rich in antioxidants and has many health benefits.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/C24190/beanies-flavoured-instant-coffee-caramelised-biscuit-50g-2-1671744483.jpg",
        "price": 550,
        "brand": "Dabur",
        "discount": "25%"
    },
    {
        "id": 26,
        "name": "Ever Herb Amla Juice",
        "description": "Ever Herb Amla Juice is a natural source of vitamin C and antioxidants that helps in boosting immunity and improving digestion.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/B53996/tagz-thai-vodka-tom-yum-canz6-chilli-garlic-aioli-dip-pepper-jack-cheese-2-1671744267.jpg",
        "price": 199,
        "brand": "Ever Herb",
        "discount": "10%"
    },
    {
        "id": 27,
        "name": "LiveEasy Muesli",
        "description": "LiveEasy Muesli is a nutritious breakfast cereal made from rolled oats, nuts, and dried fruits.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/F08318/equal-original-low-calorie-sweetener-sugar-free-low-calories-sugar-control-50-sachet-pack-of-5-2-1671745176.jpg",
        "price": 350,
        "brand": "LiveEasy",
        "discount": "15%"
    },
    {
        "id": 28,
        "name": "Ensure Diabetes Care",
        "description": "Ensure Diabetes Care is a nutritional supplement designed for people with diabetes and contains slow-release carbohydrates and high-quality protein.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/067825/ensure-vanilla-nutrition-drink-refill-of-400-g-2-1671741395.jpg",
        "price": 800,
        "brand": "Ensure",
        "discount": "30%"
    },
    {
        "id": 29,
        "name": "Nestle Milkmaid",
        "description": "Nestle Milkmaid is a sweetened condensed milk that is a versatile ingredient in many desserts.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/045245/coq-300mg-health-supplement-capsules-strip-of-15-2-1671741676.jpg",
        "price": 120,
        "brand": "Nestle",
        "discount": "5%"
    },
    {
        "id": 30,
        "name": "Bournvita",
        "description": "Bournvita is a chocolate malt drink mix that is rich in essential vitamins and minerals, and is a great source of energy.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/C51723/oziva-plant-based-collagen-builder-classic-pack-of-2-glowing-skin-2-1671744567.jpg",
        "price": 60,
        "brand": "Cadbury",
        "discount": "10%"
    },
    {
        "id": 31,
        "name": "Real Fruit Power Mango Juice",
        "description": "Real Fruit Power Mango Juice is a refreshing drink made from real mangoes, and is a great source of vitamin C.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/H92079/dr-morepen-multivitamins-for-men-with-omega-3-herbs-60-veg-tablets-2-1678945204.jpg",
        "price": 110,
        "brand": "Real",
        "discount": "7%"
    },
    {
        "id": 32,
        "name": "Nescafe Classic Coffee",
        "description": "Nescafe Classic Coffee is a premium coffee blend that is rich and full-bodied, and is perfect for a morning boost.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/Z11844/actifiber-natural-sugar-control-box-of-150-g-2-1672279598.jpg",
        "price": 80,
        "brand": "Nescafe",
        "discount": "3%"
    },
    {
        "id": 33,
        "name": "Sprite",
        "description": "Sprite is a refreshing lemon-lime soda that quenches your thirst and refreshes you instantly.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/R42241/blackmores-fish-oil-1000mg-dha-epa-supplement-general-wellness-30-capsules-2-1671744616.jpg",
        "price": 45,
        "brand": "Coca-Cola",
        "discount": "4%"
    }, {
        "id": 34,
        "name": "Amul Pro",
        "description": "Amul Pro is a high protein low-fat milk powder designed to help build and maintain muscle mass.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/067825/ensure-vanilla-nutrition-drink-refill-of-400-g-2-1671741395.jpg",
        "price": 350,
        "brand": "Amul",
        "discount": "10%"
    },
    {
        "id": 35,
        "name": "Dabur Honey",
        "description": "Dabur Honey is 100% pure and natural honey that is rich in antioxidants and helps boost immunity.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/067826/ensure-vanilla-nutrition-drink-jar-of-400-g-2.1-1671741700.jpg",
        "price": 220,
        "brand": "Dabur",
        "discount": "20%"
    },
    {
        "id": 36,
        "name": "Ever Herb Ashwagandha Capsules",
        "description": "Ever Herb Ashwagandha Capsules are made from the finest quality Ashwagandha root extract, and helps in reducing stress and anxiety.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/M01493/protinex-diabetes-care-vanilla-400gm-nutrition-drink-for-indian-adults-to-control-blood-sugar-2-1678708681.jpg",
        "price": 500,
        "brand": "Ever Herb",
        "discount": "15%"
    },
    {
        "id": 37,
        "name": "LiveEasy Oats",
        "description": "LiveEasy Oats are a high-fiber, low-fat breakfast option that helps in reducing cholesterol levels.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/P67858/kapiva-noni-juice-2l-rich-in-antioxidants-boosts-energy-builds-immunity-super-saver-pack-of-2-2-1668577899.jpg",
        "price": 150,
        "brand": "LiveEasy",
        "discount": "5%"
    },
    {
        "id": 38,
        "name": "Ensure Diabetes Care",
        "description": "Ensure Diabetes Care is a complete and balanced nutritional supplement designed to help manage blood sugar levels.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/374843/ensure-chocolate-nutrition-drink-refill-of-200-g-2-1669655441.jpg",
        "price": 800,
        "brand": "Ensure",
        "discount": "25%"
    },
    {
        "id": 39,
        "name": "Nestle Nangrow",
        "description": "Nestle Nangrow is a nutritious milk drink for growing children aged 2 to 5 years.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/L92445/baidyanath-honey-c4-approved-unadulterated-pure-honey-wholesome-health-naturally-500-g-2-1664626660.jpg",
        "price": 450,
        "brand": "Nestle",
        "discount": "10%"
    },
    {
        "id": 40,
        "name": "Amul Lassi",
        "description": "Amul Lassi is a refreshing drink made from fermented milk, and is rich in probiotics.",
        "image": "https://cdn01.pharmeasy.in/dam/products_otc/241592/nepro-hp-vanilla-nutrition-drink-tin-of-400-g-2-1669634977.jpg",
        "price": 70,
        "brand": "Amul",
        "discount": "5%"
    }


]
console.log(arr.length)











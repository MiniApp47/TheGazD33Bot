// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        {
            name: 'TELEGRAM PRINCIPAL 🥇',
            url: 'https://t.me/+JOpFtVxLTJ81MGIx',
            icon: '#icon-telegram',
            id: 'telegram-main',
            className: 'telegram-main',
            text: "TELEGRAM PRINCIPAL 🥇"
        },
        {
            name: 'POTATO PRINCIPAL 🥔',
            url: 'https://duanym138.org/thegazdoggy330',
            icon: '#icon-potato',
            id: 'potato-main',
            className: 'potato-main',
            text: "POTATO PRINCIPAL 🥔"
        },
        {
            name: 'CANAL LUFFA 🟣',
            url: 'https://callup.luffa.im/c/YWbtpoF4Trg',
            icon: '#icon-signal',
            id: 'luffa-main',
            className: 'luffa-main',
            text: "CANAL LUFFA 🟣"
        },
        {
            name: 'PAGE INSTAGRAM 📸',
            url: 'https://www.instagram.com/thegazdoggy1',
            icon: '#icon-instagram',
            id: 'insta-main',
            className: 'insta-main',
            text: "PAGE INSTAGRAM 📸"
        },
        {
            name: 'TELEGRAM DE SECOURS 🛟',
            url: 'https://t.me/+r4hrdY9TJgQ4YjRh',
            icon: '#icon-telegram',
            id: 'telegram-secours',
            className: 'telegram-secours',
            text: "TELEGRAM DE SECOURS 🛟"
        }
    ];

    // --- DONNÉES DE L'APPLICATION (NOUVELLE STRUCTURE) ---
    const appData = [
        // --- Catégorie 1: HASH ---
        {
            id: 'HASH',
            name: '🍪 Hash 🍪',
            farm: '',
            type: 'Hash',
            quality: ' 🍪 Hash 🍪',
            image: 'CategHash.jpg',

            farms: [
                {
                    id: '90u PREMIUM',
                    name: '🧪 90u PREMIUM 🧪',
                    image: 'CategHash.png',
                    badgeText: '5 produits',
                    products: [
                        {
                            id: 'MANDARINA 🍊🍊',
                            //  flag: '🇺🇸',
                            name: 'MANDARINA 🍊🍊',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductMand.jpg',
                            video: 'VideoGarry.mov',
                            description: '🍊 <b>VITAMINE C PURE</b> 🍊\n\nUne explosion d\'agrumes acidulés. Texture mousseuse et forte odeur de clémentine fraîche.\n\n⚡️ <i>Effet énergisant et créatif. Le top pour la journée.</i>',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 130.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 400.00 },
                                { weight: '200g', price: 700.00 },
                                { weight: '500g', price: 1700.00 },
                                { weight: 'Pour+', price: 'En Privé 🤫' },
                            ]
                        },
                        {
                            id: 'BLUE PAPAYA 🥭🥶',
                            //  flag: '🇺🇸',
                            name: 'BLUE PAPAYA 🥭🥶',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductPapayaB.jpg',
                            video: 'VideoPapayaB.mov',
                            description: '🥭 <b>COCKTAIL TROPICAL</b> 🏝️\n\nLe mariage exotique de la mangue et de la papaye. Texture grasse et collante, typique du 90u premium.\n\n🥶 <i>Puissant et apaisant. Déconnexion totale garantie.</i>',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 130.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 400.00 },
                                { weight: '200g', price: 700.00 },
                                { weight: '500g', price: 1700.00 },
                                { weight: 'Pour+', price: 'En Privé 🤫' },
                            ]
                        },
                        {
                            id: 'GOLDEN CHERRY 🏆🍒',
                            //  flag: '🇺🇸',
                            name: 'GOLDEN CHERRY 🏆🍒',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductCherry.jpg',
                            video: 'VideoCherry.mov',
                            description: '🍒 <b>CONFISERIE DE LUXE</b> 🏆\n\nUn profil "Golden" rare. Le goût du bonbon à la cerise griotte mélangé à la puissance du Dry.\n\n🍭 <i>Équilibré et gourmand. Une douceur à fumer toute la journée.</i>',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 130.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 400.00 },
                                { weight: '200g', price: 700.00 },
                                { weight: '500g', price: 1700.00 },
                                { weight: 'Pour+', price: 'En Privé 🤫' },
                            ]
                        },
                        {
                            id: 'GARRY PAYTON 🍭 ⛽️',
                            //  flag: '🇺🇸',
                            name: 'GARRY PAYTON 🍭 ⛽️',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductGarry.jpg', // Attention : vérifie si tu as une image 'ProductGarry.jpg'
                            video: 'VideoMand.mov', // Attention : vérifie la vidéo aussi
                            description: '🏀 <b>LE MVP DU GAZ</b> ⛽️\n\nUne frappe lourde : mélange d\'épices poivrées et de pur carburant. C\'est du sérieux.\n\n🥊 <i>Gros hit physique et cérébral. Ça tape fort, réservé aux experts.</i>',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 130.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 400.00 },
                                { weight: '200g', price: 700.00 },
                                { weight: '500g', price: 1700.00 },
                                { weight: 'Pour+', price: 'En Privé 🤫' },

                            ]
                        }
                    ]
                },
                {
                    id: '120u PREMIUM',
                    name: '🧬 120u PREMIUM 🧬',
                    image: 'CategHash.png',
                    badgeText: '5 produits',
                    products: [
                        {
                            id: 'PARMESAN COOKIES 🧀 🍪',
                            name: 'PARMESAN COOKIES 🧀 🍪',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: '120u PREMIUM',
                            image: 'ProductParm.jpg',
                            video: 'VideoParm.mov',
                            description: '🧀 <b>FUNKY & CRÉMEUX</b> 🍪\n\nUn croisement audacieux : l\'attaque puissante du fromage affiné adoucie par une note cookie sucrée.\n\n🧀 <i>Un profil terpénique complexe et "skunky". Pour les amateurs de goûts forts.</i>',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 480.00 },
                                { weight: '200g', price: 900.00 },
                                { weight: 'Pour+', price: 'En Privé 🤫' },
                            ]
                        },
                        {
                            id: 'HAWAIAN RAIN 🌴🏝️🍹',
                            name: 'HAWAIAN RAIN 🌴🏝️🍹',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: '120u PREMIUM',
                            image: 'ProductHaw.jpg',
                            video: 'VideoHaw.mov',
                            description: '🏝️ <b>TEMPÊTE TROPICALE</b> 🍹\n\nUne explosion de fruits exotiques et d\'agrumes. C\'est sucré, frais et floral comme un jus pressé.\n\n☔️ <i>Détente immédiate, comme des vacances au soleil. Terpènes très fruités.</i>',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 480.00 },
                                { weight: '200g', price: 900.00 },
                                { weight: 'Pour+', price: 'En Privé 🤫' },
                            ]
                        }
                    ]
                },
                {
                    id: 'SIFT FROZEN',
                    name: '🧊 FROZEN SIFT 🧊',
                    image: 'CategHash.png',
                    badgeText: '5 produits',
                    products: [
                        {
                            id: 'BOOBIES COOKING 🌾🥣',
                            name: 'BOOBIES COOKING 🌾🥣',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FRESH FROZEN',
                            image: 'ProductBoobie.jpg',
                            video: 'VideoBoobie.mp4',
                            description: 'NEW DROP 2026 ✨✨ \n FROZEN SIFT 🥶🧊', 
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        },
                        {
                            id: 'SOUR BURGER x LEMON 🍋🍔',
                            name: 'SOUR BURGER x LEMON 🍋🍔',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FRESH FROZEN',
                            image: 'ProductSourB.jpg',
                            video: 'VideoSourB.mp4',
                            description: 'NEW DROP 2026 ✨✨ \n FROZEN SIFT 🥶🧊', 
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        },
                        {
                            id: 'WATERMELON Z 🍈🍉',
                            name: 'WATERMELON Z 🍈🍉',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FRESH FROZEN',
                            image: 'ProductMelon.jpg',
                            video: 'VideoMelon.mp4',
                            description: '🍉 <b>L\'ÉTÉ EN BARRE</b> 🍉\n\nUne explosion de saveurs sucrées et fruitées rappelant le bonbon à la pastèque.\n\n❄️ <i>Fresh Frozen : Terpènes préservés à 100% pour un goût ultra frais.</i>', 
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        },
                        {
                            id: 'SUPER BOOF ⛽️',
                            name: 'SUPER BOOF ⛽️',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FRESH FROZEN',
                            image: 'ProductBoof.jpg',
                            video: 'VideoBoof.mp4',
                            description: '⛽️ <b>LA PUISSANCE PURE</b> ⛽️\n\nUn profil aromatique complexe : mélange d\'agrumes intenses et de notes terreuses.\n\n🚀 <i>Un effet lourd et immédiat. Réservé aux initiés.</i>', 
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        },
                        {
                            id: 'JELLY CAKE 🍰',
                            name: 'JELLY CAKE 🍰',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FRESH FROZEN',
                            image: 'ProductJelly.jpg',
                            video: 'VideoJelly.mp4',
                            description: '🍰 <b>DESSERT GOURMAND</b> 🍰\n\nLe mariage parfait entre le crémeux du gâteau et la douceur fruitée de la gelée.\n\n💎 <i>Texture incroyable et fumée onctueuse. Un vrai régal.</i>', 
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        }
                    ]
                }
               /*  {
                    id: '⚡️DOUBLE STATIC',
                    name: '⚡️DOUBLE STATIC ⚡️',
                    image: 'CategHash.png',
                    badgeText: '5 produits',
                    products: [
                        {
                            id: 'GRAPE GASOLINE 🍇⛽️',
                            name: 'GRAPE GASOLINE 🍇⛽️',
                            farm: 'HASH GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: '⚡️DOUBLE STATIC',
                            image: 'ProductGrape.jpg',
                            video: 'VideoGrape.mp4',
                            description: '🍇 <b>DOUCEUR & PUISSANCE</b> ⛽️\n\nLe combo parfait : l\'arôme sucré du bonbon au raisin trempé dans du pur carburant.\n\n⚡️ <i>Un Double Static aux terpènes violets et gassy. Goût incroyable.</i>', 
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 500.00 },
                                { weight: '100g', price: 900.00 },
                            ]
                        },
                        {
                            id: 'FORBIDDEN',
                            name: 'IMPERIUM X 👑💎',
                            farm: 'HASH GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: '⚡️DOUBLE STATIC',
                            image: 'ProductImp.jpg',
                            video: 'VideoImp.mp4',
                            description: '👑 <b>LA FORCE IMPÉRIALE</b> 💎\n\nUne des variétés les plus puissantes au monde. Un hash sombre, gras et complexe.\n\n🚀 <i>High Level. Effet lourd et durable, réservé aux vrais chefs.</i>', 
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 500.00 },
                                { weight: '100g', price: 900.00 },
                            ]
                        }
                    ]
                } */
            ]
        },

        // --- Catégorie 2: BEUH ---
        {
            id: 'WEED',
            name: ' 🪴 Weed 🪴',
            farm: '',
            type: 'Weed',
            quality: ' 🪴 Weed 🪴',
            image: 'CategWeed.jpg',
            farms: [
                {
                    id: 'CALIUS',
                    name: '🇺🇸 CALI US 🇺🇸',
                    image: 'Wizard4.png',
                    badgeText: '2 produits',
                    products: [
                        /* {
                            id: 'GUSHERS',
                            name: 'GUSHERS 2.0 🍬🍭',
                            farm: 'PARLAY LA 🇺🇸 ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductGush.jpg',
                            video: 'VideoGush.mp4',
                            description: 'Comme le bonbon Gushers : une explosion de fruits tropicaux.\n\n🇺🇸 <i>Import Cali authentique, têtes denses et colorées.</i>',
                            tarifs: [
                                { weight: '3,5g', price: 70.00 },
                                { weight: '7g', price: 130.00 },
                                { weight: '14g', price: 230.00 },
                                { weight: '56g', price: 650.00 },
                            ]
                        },
                        {
                            id: 'CANDLE',
                            name: 'CANDLE WAVE 🌊🍭',
                            farm: 'PARLAY LA 🇺🇸 ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductCandle.jpg',
                            video: 'VideoCandle.mp4',
                            description: 'Un profil unique, très parfumé avec une fumée douce.\n\n🌊 <i>Manucure parfaite, c\'est du propre made in USA.</i>',
                            tarifs: [
                                { weight: '3,5g', price: 70.00 },
                                { weight: '7g', price: 130.00 },
                                { weight: '14g', price: 230.00 },
                                { weight: '56g', price: 650.00 },
                            ]
                        },
                        {
                            id: 'PAPAYA',
                            name: 'PAPAYA x CHERRY GELATO 🍒 🥭',
                            farm: 'CALI NO BRAND ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductPapaya.jpg',
                            video: 'VideoPapaya.mp4',
                            description: 'Le mariage de la Papaye et de la Cerise Gelato. Très fruité.\n\n🍒 <i>LA FOLIE 🤪 ‼️ Goût intense et buds magnifiques.</i>',
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 120.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 420.00 },
                                { weight: '100g', price: 800.00 },
                            ]
                        } */
                    ]
                },
                {
                    id: 'WEEDholland',
                    name: '🇳🇱 WEED HOLLANDAISE 🇳🇱',
                    image: 'Wizard4.png',
                    badgeText: '2 produits',
                    products: [
                        {
                            id: 'AMNESIA HAZE',
                            name: 'AMNESIA HAZE ⛽️ 🌲',
                            farm: 'NO BRAND ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductAmne.jpg',
                            video: 'VideAmne.mp4',
                            description: 'L\'indémodable Haze à la puissance légendaire. Attendez-vous à un \'high\' cérébral stimulant et euphorique. \n\n🍋 Arômes Vifs & Citronnés 🍋\n avec des notes de poivre et d\'encens. Une expérience Haze authentique et pure.',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 270.00 },
                                { weight: '100g', price: 500.00 },
                            ]
                        }
                    ]
                },
                {
                    id: 'WeedCanada',
                    name: '🇨🇦 CALI CANADA 🇨🇦',
                    image: 'Wizard4.png',
                    badgeText: '2 produits',
                    products: [
                        {
                            id: 'PINK STARBURST 🌹🎟️',
                            name: 'PINK STARBURST 🌹🎟️',
                            farm: 'NO BRAND ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductPinkS.png',
                            video: 'VideoPinkS.mov',
                            description: '',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 180.00 },
                                { weight: '50g', price: 350.00 },
                                { weight: '100g', price: 600.00 },
                            ]
                        },
                        {
                            id: 'PINK GASOLINE 💕⛽️',
                            name: 'PINK GASOLINE 💕⛽️',
                            farm: 'NO BRAND ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductPinkG.png',
                            video: 'VideoPingG.mov',
                            description: '',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 180.00 },
                                { weight: '50g', price: 350.00 },
                                { weight: '100g', price: 600.00 },
                            ]
                        },
                        {
                            id: 'CHAOS CAKE 🍰 ',
                            name: 'CHAOS CAKE 🍰 ',
                            farm: 'NO BRAND ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductChaos.jpg',
                            video: 'VideoChaos.mov',
                            description: '',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 180.00 },
                                { weight: '50g', price: 350.00 },
                                { weight: '100g', price: 600.00 },
                            ]
                        },
                        {
                            id: 'ORANGE CREAMSICLE 🧈🍊',
                            name: 'ORANGE CREAMSICLE 🧈🍊',
                            farm: 'NO BRAND ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductSicle.jpg',
                            video: 'VideoSicle.mov',
                            description: '',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 180.00 },
                                { weight: '50g', price: 350.00 },
                                { weight: '100g', price: 600.00 },
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories';
    let currentCategoryId = null;
    let currentFarmId = null;
    let appliedPromo = null;
    let paymentMethod = 'Espèce';

    // --- DÉFINIS TES CODES PROMO ICI ---
    const validPromoCodes = {
        "ACTUPLUG33": {
            type: 'fixed',
            value: 10,
            appliesTo: 'eligible'
        }
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');
    const filterContainer = document.querySelector('.filters');
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;

    // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
    function getProductById(productId) {
        for (const category of appData) {
            for (const farm of category.farms) {
                const product = farm.products.find(p => p.id === productId);
                if (product) {
                    return product;
                }
            }
        }
        return undefined;
    }

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info');
        const contactNav = document.getElementById('nav-contact');

        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');

        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else {
            homeNav.classList.add('active');
        }
    }

    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        const farms = category.farms;

        productListContainer.innerHTML = '';
        if (farms.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune sous-catégorie disponible.</p>';
            return;
        }

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'sub-categories-container';

        farms.forEach(farm => {
            const button = document.createElement('button');
            button.className = 'sub-category-btn';
            button.dataset.farmId = farm.id;

            if (farm.clickable === false) {
                button.style.opacity = '0.6';
                button.style.cursor = 'not-allowed';
            }

            const productCount = farm.products.length;
            const badgeTextContent = productCount > 0 ? `${productCount} produit${productCount > 1 ? 's' : ''}` : (farm.badgeText || '');

            button.innerHTML = `
            <span>${farm.name}</span>
            ${badgeTextContent ? `<span class="sub-btn-badge">${badgeTextContent}</span>` : ''}
        `;
            buttonsContainer.appendChild(button);
        });

        productListContainer.appendChild(buttonsContainer);
    }

    function renderHomePage() {
        filterContainer.style.display = 'flex';

        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();


        if (currentView === 'categories') {
            renderCategoryList();
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId);
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #ca351d;
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
            filterContainer.prepend(backButton);

        } else if (currentView === 'products') {
            renderProductList(currentCategoryId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${category.name}`;
            backButton.style.cssText = ` background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #ca351d;
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
            filterContainer.prepend(backButton);
        }
    }

    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
        });

        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }

        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
            `;
            productListContainer.appendChild(card);
        });
    }

    function renderProductList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        let allProducts = [];

        if (currentFarmId) {
            const selectedFarm = category.farms.find(f => f.id === currentFarmId);
            if (selectedFarm) {
                allProducts = selectedFarm.products;
            }
            const backButton = document.createElement('button');
            backButton.className = 'back-to-farms-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> Retour aux choix`;
            backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); border-bottom: 2px solid #ca351d; border-top: none; border-left: none; border-right: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;`;

            const existingBtn = filterContainer.querySelector('.back-to-farms-btn');
            if (!existingBtn) filterContainer.prepend(backButton);
        }
        else {
            allProducts = category.farms.flatMap(farm => farm.products);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); border-bottom: 2px solid #ca351d; border-top: none; border-left: none; border-right: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;`;

            const existingBtn = filterContainer.querySelector('.back-to-categories-btn');
            if (!existingBtn) filterContainer.prepend(backButton);
        }

        if (!allProducts || allProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
            return;
        }

        const filteredProducts = allProducts.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const farmMatch = currentFarmId ? true : (currentFilters.farm === 'all' || product.farm === currentFilters.farm);
            return searchMatch && farmMatch;
        });

        productListContainer.innerHTML = '';

        filteredProducts.forEach(product => {
            const card = document.createElement('div');

            if (product.type === 'Promo') {
                card.className = 'product-card promo-card';
                card.innerHTML = `
                <div class="info">
                    <div class="promo-icon">🎄</div>
                    <div class="name">${product.name}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
            }
            else {
                card.className = 'product-card product-item-card';
                card.dataset.productId = product.id;

                if (product.clickable === false) {
                    card.classList.add('unclickable');
                }

                let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';

                card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${typeof product.tarifs[0].price === 'number' ? product.tarifs[0].price.toFixed(2) + '€' : product.tarifs[0].price}</div>
                </div>
            `;
            }

            productListContainer.appendChild(card);
        });
    }

    // --- FONCTION MODIFIÉE POUR GÉRER LE PRIX TEXTE (En Privé) ---
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        let mediaHTML = '';

        if (product.images && product.images.length > 0) {
            const slides = product.images.map(img => `
            <div class="carousel-slide">
                <img src="${img}" alt="${product.name}">
            </div>
        `).join('');

            mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les photos</div>
        `;
        } else {
            mediaHTML = `
            <video class="product-video" poster="${product.image}" src="${product.video || ''}" ${product.video ? 'controls' : ''}></video>
        `;
        }

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        const weightStyle = product.useSmallText ? 'font-size: 12px; line-height: 1.2;' : '';

        // ICI C'EST LA MODIFICATION CRITIQUE POUR NE PAS PLANTER
        let tarifsHTML = product.tarifs.map(tarif => {
            // On vérifie si c'est un nombre ou du texte
            const isPriceNumber = typeof tarif.price === 'number';
            const priceDisplay = isPriceNumber ? tarif.price.toFixed(2) + '€' : tarif.price;

            // Si c'est un prix texte, on met un bouton Contact au lieu de Panier
            const actionButton = isPriceNumber
                ? `<button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                     <svg width="20" height="20"><use href="#icon-cart"/></svg>
                   </button>`
                : `<button class="contact-btn-small" style="background: none; border: 1px solid black; width: 5vh; border-radius: 20px;" onclick="window.Telegram.WebApp.openLink('https://t.me/THEGAZCOMMANDE')">
                     <svg width="20" height="20" style="fill:white"><use href="#icon-telegram"/></svg>
                   </button>`;

            return `
        <div class="tarif-item">
            <div class="box-tarif">
                <div class="tarif-wieght" style="${weightStyle}">${tarif.weight}</div>
                <div class="tarif-price">${priceDisplay}</div>
            </div>
            ${actionButton}
        </div>
        `;
        }).join('');

        let descriptionHTML = '';
        if (product.description) {
            descriptionHTML = `<div class="product-description">${product.description}</div>`;
        }

        const pageContent = document.querySelector('#page-product .page-content');

        pageContent.innerHTML = `
        ${mediaHTML}
        <div id="product-details-content" class="product-details">
            <div class="name">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${descriptionHTML} 
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">
                ${tarifsHTML}
            </div>
        </div>
    `;

        showPage('page-product');
    }

    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];

            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                discountableAmount = subTotal;
            }

            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else { // 'fixed'
                discount = promo.value;
            }
        }

        if (discount > subTotal) {
            discount = subTotal;
        }

        const totalPrice = subTotal - discount;

        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `).join('');

        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = '';
        }

        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `
            <div class="summary-line">
                <span>Sous-total:</span>
                <span>${subTotal.toFixed(2)}€</span>
            </div>
        `;
        if (discount > 0) {
            summaryHTML += `
            <div class="summary-line discount">
                <span>Réduction:</span>
                <span>-${discount.toFixed(2)}€</span>
            </div>
            `;
        }
        summaryHTML += `
            <div class="summary-line total">
                <span>💰 Total final:</span>
                <span>${totalPrice.toFixed(2)}€</span>
            </div>
        `;
        summaryContainer.innerHTML = summaryHTML;

        showPage('page-confirmation');
    }

    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    function populateFilters() {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');

        const allNestedProducts = appData.flatMap(category => category.farms.flatMap(farm => farm.products));

        const categoryQualities = appData.map(c => c.quality);
        const qualities = ['all', ...new Set(categoryQualities)];

        const productFarms = allNestedProducts.map(p => p.farm);
        const farms = ['all', ...new Set(productFarms)];

        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'CATEGORIE' : q}</option>`).join('');
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? 'LES FARM' : farm}</option>`).join('');

        searchFilter.addEventListener('input', (e) => {
            currentFilters.searchTerm = e.target.value;
            renderHomePage();
        });

        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });

        farmFilter.addEventListener('change', (e) => {
            currentFilters.farm = e.target.value;
            renderHomePage();
        });
    }

    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;

        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;

        notification.innerText = message;
        notification.classList.add('show');

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function addToCart(productId, weight, price) {
        const cartItemId = `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);

        const product = getProductById(productId);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name,
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
        renderCart();
    }

    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = 0;
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else {
                discount = promo.value;
            }
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        let message = "NOUVELLE COMMANDE\n\n";
        message += "====================\n";
        message += "RESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `- Méthode de paiement: ${paymentMethod}\n`;
        message += "====================\n";
        message += `DETAIL DES ARTICLES:\n`;

        cart.forEach((item) => {
            message += `\n- ${item.id}`;
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });

        message += `\n\n====================\n`;
        message += `\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
        if (discount > 0) {
            message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`;
        }
        message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
        message += " \n-LIVRAISON: A convenir\n";
        message += " \n-CONTACT: Merci de confirmer cette commande\n";
        message += ` \n-Commande passee le: ${formattedDate}\n`;
        return message;
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            if (pageId === 'page-contact') {
                renderContactPage();
            }

            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';

                renderHomePage();
            }

            showPage(pageId);
        });
    });

    document.body.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');

            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');

            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');

            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false;
            return;
        }

        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            currentView = 'farms';

            currentCategoryId = categoryCard.dataset.categoryId;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;

            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            accordionItem.classList.toggle('active');
            return;
        }

        const subCategoryBtn = target.closest('.sub-category-btn');

        if (subCategoryBtn) {
            if (subCategoryBtn.style.cursor === 'not-allowed') return;

            currentView = 'products';
            currentFarmId = subCategoryBtn.dataset.farmId;

            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        const productCard = target.closest('.product-item-card');
        if (productCard) {

            if (productCard.classList.contains('unclickable')) {
                return;
            }
            renderProductPage(productCard.dataset.productId);
            return;
        }

        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase();

            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null;
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation();
        }

        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation();
        }

        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');
            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price));
        }

        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        if (target.closest('.close-button')) {
            showPage('page-home');
        }

        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
        }

        if (target.closest('.back-button')) {
            showPage('page-home');
        }

        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        if (target.closest('#confirm-order-button')) {
            const targetUsername = 'THEGAZCOMMANDE';
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');
            const encodedMessage = encodeURIComponent(message);
            const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;
            tg.openLink(telegramUrl);
        }
    });

    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage();
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});
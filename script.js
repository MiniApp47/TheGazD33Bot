// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#2c2c2e");
  tg.setBackgroundColor("#1c1c1d");

  // --- CONFIGURATION DES LIENS DE CONTACT ---
  const contactLinks = [
    {
      name: "TELEGRAM PRINCIPAL 🥇",
      url: "https://t.me/+JOpFtVxLTJ81MGIx",
      icon: "#icon-telegram",
      id: "telegram-main",
      className: "telegram-main",
      text: "TELEGRAM PRINCIPAL 🥇",
    },
    {
      name: "POTATO PRINCIPAL 🥔",
      url: "https://tatokdym.org/thegazdoggy330",
      icon: "#icon-potato",
      id: "potato-main",
      className: "potato-main",
      text: "POTATO PRINCIPAL 🥔",
    },
    {
      name: "CANAL LUFFA 🟣",
      url: "https://callup.luffa.im/c/YWbtpoF4Trg",
      icon: "#icon-signal",
      id: "luffa-main",
      className: "luffa-main",
      text: "CANAL LUFFA 🟣",
    },
    {
      name: "PAGE INSTAGRAM 📸",
      url: "https://www.instagram.com/thegdbdx?igsh=MWlvZWFybGd3bTVvaQ==",
      icon: "#icon-instagram",
      id: "insta-main",
      className: "insta-main",
      text: "CANAL INSTAGRAM 📸",
    },
    {
      name: "TELEGRAM DE SECOURS 🛟",
      url: "https://t.me/+r4hrdY9TJgQ4YjRh",
      icon: "#icon-telegram",
      id: "telegram-secours",
      className: "telegram-secours",
      text: "TELEGRAM DE SECOURS 🛟",
    },
  ];

  // --- DONNÉES DE L'APPLICATION (NOUVELLE STRUCTURE) ---
  const appData = [
    // --- Catégorie 0 : PACKS PROMO ---
    {
      id: "PackPromo",
      name: "💎 PACKS PROMO 💎",
      farm: "",
      type: "PackPromo",
      quality: "💎 PACKS PROMO 💎",
      image: "CategPromo.jpg",

      farms: [
        {
          id: "PACKS_DISPO",
          name: "🎁 NOS PACKS DISPONIBLES 🎁",
          image: "CategPromo.jpg",
          badgeText: "4 packs",

          products: [
            {
              id: "PACK_PLATINUM",
              name: "💎 PACK PLATINUM",
              farm: "L’EXPÉRIENCE ULTIME 👑",
              promoEligible: false,
              type: "Pack",
              useSmallText: true,
              image: "PackPL.png",
              images:["ProductPromo.jpg"],
              video: "",

              description: `<b>💎 PACK PLATINUM — L’EXPÉRIENCE ULTIME</b>

• 10G PLASMASTATIC au choix ⚡️
• 10G FROZEN SIFT au choix 🧊
• 25G 120U PREMIUM au choix 🧬
• 10G WEED CALI CANADA 🍁

<b>🎁 1 EXTRA AU CHOIX :</b>

• 1 VAPE CHOICES LAB 2G 💨
• 1 SERINGUE DELTA 💉
• 1 SYRUP 🧴

<i>💬 Précise les variétés et l’extra choisis lors de la confirmation de ta commande.</i>`,

              tarifs: [
                {
                  weight: "1 PACK",
                  price: 550.0,
                },
              ],
            },

            {
              id: "PACK_GOLD",
              name: "🥇 PACK GOLD",
              farm: "LE SPÉCIALISTE ✨",
              promoEligible: false,
              type: "Pack",
              useSmallText: true,
              image: "PackG.png",
                            images:["ProductPromo.jpg"],
              video: "",

              description: `<b>🥇 PACK GOLD — LE SPÉCIALISTE</b>

• 10G PLASMASTATIC au choix ⚡️
• 10G 120U PREMIUM au choix 🧬
• 25G 90U PREMIUM au choix 🧪

<b>🎁 1 EXTRA AU CHOIX :</b>

• 1 VAPE CHOICES LAB 2G 💨
• 1 SERINGUE DELTA 💉
• 1 SYRUP 🧴

<i>💬 Précise les variétés et l’extra choisis lors de la confirmation de ta commande.</i>`,

              tarifs: [
                {
                  weight: "1 PACK",
                  price: 350.0,
                },
              ],
            },

            {
              id: "PACK_SILVER",
              name: "🥈 PACK SILVER",
              farm: "L’ÉQUILIBRE ⚖️",
              promoEligible: false,
              type: "Pack",
              useSmallText: true,
              image: "PackS.png",
                            images:["ProductPromo.jpg"],
              video: "",

              description: `<b>🥈 PACK SILVER — L’ÉQUILIBRE</b>

• 5G FROZEN SIFT au choix 🧊
• 10G 90U PREMIUM au choix 🧪
• 10G WEED CALI CANADA 🍁

<b>🎁 1 EXTRA AU CHOIX :</b>

• 1 VAPE CHOICES LAB 2G 💨
• 1 SERINGUE DELTA 💉
• 1 SYRUP 🧴

<i>💬 Précise les variétés et l’extra choisis lors de la confirmation de ta commande.</i>`,

              tarifs: [
                {
                  weight: "1 PACK",
                  price: 200.0,
                },
              ],
            },

            {
              id: "PACK_STARTER",
              name: "🥉 PACK STARTER",
              farm: "LA DÉCOUVERTE 🚀",
              promoEligible: false,
              type: "Pack",
              useSmallText: true,
              image: "PackSt.png",
                            images:["ProductPromo.jpg"],
              video: "",

              description: `<b>🥉 PACK STARTER — LA DÉCOUVERTE</b>

• 5G 90U PREMIUM au choix 🧪
• 2G PLASMASTATIC au choix ⚡️
• 5G WEED CALI CANADA 🍁

<i>💬 Précise les variétés choisies lors de la confirmation de ta commande.</i>`,

              tarifs: [
                {
                  weight: "1 PACK",
                  price: 100.0,
                },
              ],
            },
          ],
        },
      ],
    },
    // --- Catégorie 1: HASH ---
    {
      id: "HASH",
      name: "🍪 Hash 🍪",
      farm: "",
      type: "Hash",
      quality: " 🍪 Hash 🍪",
      image: "CategHash.jpg",

      farms: [
        {
          id: "90u PREMIUM",
          name: "🧪 90u PREMIUM 🧪",
          image: "CategHash.png",
          badgeText: "5 produits",
          products: [
            {
              id: "APRICOT 🍑",
              name: "APRICOT 🍑",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "thegaz",
              image: "ProductAP.jpg",
              video: "VideoAP.mp4",
              description:
                "🍑 <b>NECTAR D'ABRICOT</b> 🍑\n\nUne texture grasse et un parfum explosif d'abricot mûr gorgé de soleil. Un profil fruité d'une rare intensité.\n\n☀️ <i>High chaleureux et relaxant. Idéal pour décompresser.</i>",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 130.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
                { weight: "Pour+", price: "En Privé 🤫" },
              ],
            },
            {
              id: "GUSHER MINTZ 🍭🍬",
              name: "GUSHER MINTZ 🍭🍬",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "thegaz",
              image: "ProductGM.jpg",
              video: "VideoGM.mp4",
              description:
                "🍬 <b>GIVRE SUCRÉ</b> 🍭\n\nLe combo parfait : l'explosion sucrée du bonbon fruit rouge percutée par une vague mentholée glaciale.\n\n❄️ <i>Frappe cérébrale nette suivie d'une grosse détente physique.</i>",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 130.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
                { weight: "Pour+", price: "En Privé 🤫" },
              ],
            },
            {
              id: "APPLE BANANA 🍏🍌",
              name: "APPLE BANANA 🍏🍌",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "thegaz",
              image: "ProductAB.jpg",
              video: "VideoAB.mp4",
              description:
                "🍏 <b>SALADE ACIDE & DOUCE</b> 🍌\n\nL'acidité piquante de la pomme verte adoucie par la rondeur crémeuse de la banane. Un terpène complexe et addictif.\n\n⚡️ <i>Effet joyeux, stimulant et créatif.</i>",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 130.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
                { weight: "Pour+", price: "En Privé 🤫" },
              ],
            },
            {
              id: "SOUR DIESEL ⛽️",
              name: "SOUR DIESEL ⛽️",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "thegaz",
              image: "ProductSD.jpg",
              video: "VideoSD.mp4",
              description:
                "⛽️ <b>LA LÉGENDE DU GAZ</b> ⛽️\n\nL'incontournable goût Diesel : piquant, terreux et chimique à souhait. Ça prend à la gorge instantanément.\n\n🔋 <i>Énergisant et ultra-cérébral. Le choix des puristes.</i>",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 130.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
                { weight: "Pour+", price: "En Privé 🤫" },
              ],
            },
          ],
        },
        {
          id: "120u PREMIUM",
          name: "🧬 120u PREMIUM 🧬",
          image: "CategHash.png",
          badgeText: "5 produits",
          products: [
            {
              id: "BISCOTTI PAPAY 🍪🥭",
              name: "BISCOTTI PAPAY 🍪🥭",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "120u PREMIUM",
              image: "ProductBP2.jpg",
              video: "VideoBP2.mp4",
              description:
                "🍪 <b>DESSERT TROPICAL</b> 🥭\n\nLe croisement parfait entre la pâte à biscuit sucrée et la douceur juteuse de la papaye. Un 120u gras et mousseux.\n\n🏝️ <i>High corporel très relaxant. L'idéal pour chiller le soir.</i>",
              tarifs: [
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 480.0 },
                { weight: "200g", price: 900.0 },
                { weight: "Pour+", price: "En Privé 🤫" },
              ],
            },
            {
              id: "BLUE LEMON 🍋",
              name: "BLUE LEMON 🍋",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "120u PREMIUM",
              image: "ProductBL2.jpg",
              video: "VideoBL2.mp4",
              description:
                "🫐 <b>LIMONADE GLACÉE</b> 🍋\n\nUne attaque acidulée de citron jaune suivie par la douceur des fruits des bois. Résine très claire et fondante.\n\n⚡️ <i>Effet électrique et stimulant. Parfait pour booster la créativité.</i>",
              tarifs: [
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 480.0 },
                { weight: "200g", price: 900.0 },
                { weight: "Pour+", price: "En Privé 🤫" },
              ],
            },
            {
              id: "PINAPPLE PUNCH 🍍👊",
              name: "PINAPPLE PUNCH 🍍👊",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "120u PREMIUM",
              image: "ProductPP2.jpg",
              video: "VideoPP2.mp4",
              description:
                "🍍 <b>UPPERCUT EXOTIQUE</b> 🥊\n\nUn jus d'ananas concentré en hash. Une odeur sucrée, fruitée et piquante qui envahit la pièce à l'ouverture.\n\n👊 <i>Frappe lourde et immédiate. Un stone qui détend chaque muscle.</i>",
              tarifs: [
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 480.0 },
                { weight: "200g", price: 900.0 },
                { weight: "Pour+", price: "En Privé 🤫" },
              ],
            },
            /* {
                            id: 'PURPULE PUNCH 🥊',
                            name: 'PURPULE PUNCH 🥊',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: '120u PREMIUM',
                            image: 'ProductPP.jpg',
                            video: 'VideoPP.mp4',
                            description: '🥊 <b>UPPERCUT FRUITÉ</b> 🥊\n\nLe croisement parfait entre le raisin sucré et la myrtille. Filtrage 120u ultra propre.\n\n🍇 <i>Un K.O. physique doux et rapide.</i>',
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
                            id: 'BUDDHA PEACH 🍑',
                            name: 'BUDDHA PEACH 🍑',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: '120u PREMIUM',
                            image: 'ProductBP.jpg',
                            video: 'VideoBP.mp4',
                            description: '🍑 <b>PÊCHE DIVINE</b> 🍑\n\nDes arômes de pêche juteuse avec un fond floral très doux. Un régal en bouche.\n\n🧘‍♂️ <i>Méditation et détente profonde. Zen absolu.</i>',
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
                            id: 'BUDDHA LEMON 🍋',
                            name: 'BUDDHA LEMON 🍋',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: '120u PREMIUM',
                            image: 'ProductBL.jpg',
                            video: 'VideoBL.mp4',
                            description: '🍋 <b>CITRON SACRÉ</b> 🍋\n\nUn zeste de citron vert ultra frais. Ça pique le nez et ça fond tout seul.\n\n🙏 <i>Un high clair et stimulant. Qualité 120u irréprochable.</i>',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 480.00 },
                                { weight: '200g', price: 900.00 },
                                { weight: 'Pour+', price: 'En Privé 🤫' },
                            ]
                        } */
          ],
        },
        {
          id: "FRESH FROZEN",
          name: "💎 FRESH FROZEN 💎",
          image: "CategHash.png",
          badgeText: "5 produits",
          products: [
            {
              id: "SUPER BOOF x CHERRY🍋 🍒",
              name: "SUPER BOOF x CHERRY🍋 🍒",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "FRESH FROZEN",
              image: "ProductSC.jpg",
              video: "VideoSC.mp4",
              description:
                "🍒 <b>COCKTAIL DÉTONANT</b> 🍋\n\nL'acidité piquante du citron rencontre la douceur de la cerise. Une résine glacée gorgée de terpènes.\n\n❄️ <i>Un high joyeux et élévateur. Parfait pour se motiver.</i>",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            {
              id: "SUPER BOOF x LEMON PAPAYA 🍋‍🟩🥭",
              name: "SUPER BOOF x LEMON PAPAYA 🍋‍🟩🥭",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "FRESH FROZEN",
              image: "ProductLP.jpg",
              video: "VideoLP.mp4",
              description:
                "🥭 <b>SALADE TROPICALE</b> 🍋‍🟩\n\nLe mix parfait entre la papaye mûre et le zeste de citron vert. Fresh Frozen d'une pureté absolue.\n\n🏝️ <i>Détente exotique. Une fumée épaisse et ultra-douce.</i>",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            {
              id: "TROPICAL ODV 🌴🍹",
              name: "TROPICAL ODV 🌴🍹",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "FRESH FROZEN",
              image: "ProductODV.jpg",
              video: "VideoODV.mp4",
              description:
                "🍹 <b>NECTAR DES ÎLES</b> 🌴\n\nUn jus de fruits exotiques concentré en résine. Des arômes très puissants d'ananas et de mangue.\n\n☀️ <i>Voyage direct sous les tropiques. Effet relaxant et apaisant.</i>",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            {
              id: "FORBIDDEN FRUIT X FRUIT JOY 🍭🍉🍇🍓",
              name: "FORBIDDEN FRUIT X FRUIT JOY 🍭🍉🍇🍓",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "FRESH FROZEN",
              image: "ProductFJ.jpg",
              video: "VideoFJ.mp4",
              description:
                "🍇 <b>CANDY SHOP</b> 🍭\n\nL'avalanche de fruits rouges et de bonbons. Un profil terpénique extrêmement riche et complexe.\n\n🍓 <i>Une claque gustative. Effet stone profond et gourmand.</i>",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            {
              id: "FORBIDDEN FRUIT X GARLIC COCKTAIL 🧄🍉🍓",
              name: "FORBIDDEN FRUIT X GARLIC COCKTAIL 🧄🍉🍓",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "FRESH FROZEN",
              image: "ProductFF.jpg",
              video: "VideoFF.mp4",
              description:
                "🧄 <b>SAVORY & SWEET</b> 🍓\n\nLe croisement improbable : l'umami piquant de l'ail adouci par un cocktail de fruits rouges.\n\n💥 <i>Un profil rare pour les vrais connaisseurs. Hit massif.</i>",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            {
              id: "GRAPPE GASOLINE ⛽️ 🍇",
              name: "GRAPPE GASOLINE ⛽️ 🍇",
              farm: "GAZ SELECTION 🇲🇦 ⛰️",
              promoEligible: true,
              type: "FRESH FROZEN",
              image: "ProductGG.jpg",
              video: "VideoGG.mp4",
              description:
                "⛽️ <b>PUR CARBURANT</b> 🍇\n\nL'odeur d'essence pure mélangée à du sirop de raisin. Ça pique le nez dès l'ouverture.\n\n🚀 <i>Une puissance phénoménale. K.O. technique assuré.</i>",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
          ],
        },
        {
          id: "PLASMASTATIC",
          name: "⚡️ PLASMASTATIC ⚡️",
          image: "CategHash.png",
          badgeText: "8 produits",
          products: [
            {
              id: "FORBIDDEN FRUIT x FRUIT JOY 🍉🍓🍋🍭",
              name: "FORBIDDEN FRUIT x FRUIT JOY 🍉🍓🍋🍭",
              farm: "GAZ SÉLECTION 🇲🇦⛰️",
              promoEligible: true,
              type: "PLASMASTATIC ⚡️ FROZEN",
              image: "ProductFFFJ.jpg",
              video: "VideoFFFJ.mp4",
              description:
                "🍉 <b>CANDY SHOP GLACÉ</b> 🍭\n\nL'ultime cocktail sucré. Une fusion magistrale de fruits rouges intenses et de bonbons acidulés, figée dans une résine Plasmastatic exceptionnelle.\n\n🍓 <i>Grosse euphorie cérébrale suivie d'un stone physique profond. Kiff absolu.</i>",
              tarifs: [
                { weight: "5g", price: 80.0 },
                { weight: "10g", price: 140.0 },
                { weight: "25g", price: 300.0 },
                { weight: "50g", price: 550.0 },
                { weight: "100g", price: 1000.0 },
              ],
            },
            {
              id: "ORANGE GROVIE x 26MM 🍊🍋⛽️",
              name: "ORANGE GROVIE x 26MM 🍊🍋⛽️",
              farm: "GAZ SÉLECTION 🇲🇦⛰️",
              promoEligible: true,
              type: "PLASMASTATIC ⚡️ FROZEN",
              image: "Product26.jpg",
              video: "Video26.mp4",
              description:
                "🍊 <b>AGRUMES SOUS PRESSION</b> ⛽️\n\nUn contraste explosif. L'orange douce et le citron piquant percutés de plein fouet par un fond gazeux lourd et persistant. Texture Plasmastatic d'élite.\n\n⚡️ <i>Hit surpuissant. Un effet clair et stimulant qui te maintient en orbite.</i>",
              tarifs: [
                { weight: "5g", price: 80.0 },
                { weight: "10g", price: 140.0 },
                { weight: "25g", price: 300.0 },
                { weight: "50g", price: 550.0 },
                { weight: "100g", price: 1000.0 },
              ],
            },
            {
              id: "SUPER BOOF X  TROP CHERRY🍋 🍒",
              name: "SUPER BOOF X  TROP CHERRY🍋 🍒",
              farm: "GAZ SÉLECTION 🇲🇦⛰️",
              promoEligible: true,
              type: "PLASMASTATIC ⚡️ FROZEN",
              image: "ProductStc.jpg",
              video: "VideoStc.mp4",
              description:
                "🍒 <b>COCKTAIL DÉTONANT</b> 🍋\n\nL'acidité piquante du citron rencontre la douceur de la cerise. Une résine glacée gorgée de terpènes.\n\n❄️ <i>Un high joyeux et élévateur. Parfait pour se motiver.</i>",
              tarifs: [
                { weight: "5g", price: 80.0 },
                { weight: "10g", price: 140.0 },
                { weight: "25g", price: 300.0 },
                { weight: "50g", price: 550.0 },
                { weight: "100g", price: 1000.0 },
              ],
            },
            {
              id: "RAIBOW BELTS X GARLIC COCKTAIL 🍬 🍹",
              name: "RAIBOW BELTS X GARLIC COCKTAIL 🍬 🍹",
              farm: "GAZ SÉLECTION 🇲🇦⛰️",
              promoEligible: true,
              type: "PLASMASTATIC ⚡️ FROZEN",
              image: "ProductRgc.jpg",
              video: "VideoRgc.mp4",
              description:
                "🍬 <b>UMAMI SUCRÉ</b> 🍹\n\nLe croisement improbable : l'umami piquant de l'ail adouci par la douceur des bonbons Zkittlez.\n\n💥 <i>Un profil rare pour les vrais connaisseurs. Hit massif et relaxant.</i>",
              tarifs: [
                { weight: "5g", price: 80.0 },
                { weight: "10g", price: 140.0 },
                { weight: "25g", price: 300.0 },
                { weight: "50g", price: 550.0 },
                { weight: "100g", price: 1000.0 },
              ],
            },
            {
              id: "CALIPPO x FORBIDDEN FRUIT 🍇🍦🍨",
              name: "CALIPPO x FORBIDDEN FRUIT 🍇🍦🍨",
              farm: "GAZ SÉLECTION 🇲🇦⛰️",
              promoEligible: true,
              type: "PLASMASTATIC ⚡️ FROZEN",
              image: "ProductCff.jpg",
              video: "VideoCff.mp4",
              description:
                "🍇 <b>GLACE AUX FRUITS</b> 🍦\n\nL'avalanche de fruits rouges et de bonbons couplée à la douceur crémeuse d'une glace.\n\n🍓 <i>Une claque gustative. Effet stone profond et gourmand.</i>",
              tarifs: [
                { weight: "5g", price: 80.0 },
                { weight: "10g", price: 140.0 },
                { weight: "25g", price: 300.0 },
                { weight: "50g", price: 550.0 },
                { weight: "100g", price: 1000.0 },
              ],
            },
            {
              id: "CALIPPO X PURPLE PANTIES 🍦🍓🍇🍒🍉",
              name: "CALIPPO X PURPLE PANTIES 🍦🍓🍇🍒🍉",
              farm: "GAZ SÉLECTION 🇲🇦⛰️",
              promoEligible: true,
              type: "PLASMASTATIC ⚡️ FROZEN",
              image: "ProductCpp.jpg",
              video: "VideoCpp.mp4",
              description:
                "🍓 <b>SALADE DE FRUITS GLACÉE</b> 🍉\n\nUn croisement explosif. Des arômes de fruits rouges intenses et sucrés avec une touche crémeuse.\n\n🍇 <i>Effet relaxant profond. Parfait pour chiller avec un goût incroyable en bouche.</i>",
              tarifs: [
                { weight: "5g", price: 80.0 },
                { weight: "10g", price: 140.0 },
                { weight: "25g", price: 300.0 },
                { weight: "50g", price: 550.0 },
                { weight: "100g", price: 1000.0 },
              ],
            },
            /*   {
                            id: 'HASH BURGER 🍔',
                            name: 'HASH BURGER 🍔',
                            farm: 'GAZ SÉLECTION 🇲🇦⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️ FROZEN',
                            image: 'ProductHxb.jpg',
                            video: 'VideoHxB.mp4',
                            description: '🍔 <b>FAST FOOD TERPS</b> 🍔\n\nDes notes umami, salées et épicées avec un fond gaz omniprésent. Une texture Plasmastatic incroyable.\n\n🔥 <i>Un goût unique de friture et de gasoil. Effet très lourd.</i>',                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 550.00 },
                                { weight: '100g', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'GSUPER LEMON HAZE 🍋',
                            name: 'SUPER LEMON HAZE 🍋',
                            farm: 'GAZ SÉLECTION 🇲🇦⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️ FROZEN',
                            image: 'ProductSLH.jpg',
                            video: 'VideoSLH.mp4',
                            description: '🍋 <b>CITRON HAUTE TENSION</b> ⚡️\n\nLe grand classique Haze revisité en extraction Plasmastatic. Un citron jaune électrique et piquant.\n\n⚡️ <i>Coup de boost immédiat. High cérébral très clair et créatif.</i>',                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 550.00 },
                                { weight: '100g', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'GAZZURPLE 🍇⛽️',
                            name: 'GAZZURPLE (GZE) 🍇⛽️',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️ FROZEN',
                            image: 'ProductGZE.jpg',
                            video: 'VideoGZE.mp4',
                            description: '🍇 <b>L\'ALLIANCE PARFAITE</b> ⛽️\n\nL\'équilibre parfait entre le sucré du raisin et la puissance brute du gaz. Une texture plasmastatic hors norme.\n\n⚡️ <i>Un hit foudroyant. Effet cérébral intense.</i>',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 550.00 },
                                { weight: '100g', price: 1000.00 },
                            ]
                        }, */
            /* {
                            id: 'HONEY BANANA 🍯🍌',
                            name: 'HONEY BANANA (HB) 🍯🍌',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️',
                            image: 'ProductHB.jpg',
                            video: 'VideoHB.mp4',
                            description: '🍌 <b>NECTAR TROPICAL</b> 🍯\n\nUne douceur mielleuse qui fond en bouche, sublimée par des notes de banane bien mûre.\n\n⚡️ <i>Gourmandise pure. Détente musculaire absolue.</i>',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 320.00 },
                                { weight: '50g', price: 600.00 },
                                { weight: '100g', price: 1100.00 },
                            ]
                        }, */
            /*   {
                            id: '24K 🔱🍋‍🟩🍋',
                            name: '24K 🔱🍋‍🟩🍋',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️ FROZEN',
                            image: 'Product24K.jpg',
                            video: 'Video24K.mp4',
                            description: '🔱 <b>L\'OR MASSIF</b> 🍋\n\nUne pureté exceptionnelle. Des arômes d\'agrumes explosifs (citron jaune et vert) pour une expérience VIP.\n\n⚡️ <i>Énergisant et euphorique. Le luxe à l\'état pur.</i>',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 550.00 },
                                { weight: '100g', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'LIMEZ x DOSIDOS 🍬🍭',
                            name: 'LIMEZ x DOSIDOS (LXD) 🍬🍭',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️ FROZEN',
                            image: 'ProductLXD.jpg',
                            video: 'VideoLXD.mp4',
                            description: '🍬 <b>CANDY KUSH</b> 🍭\n\nLe croisement ultime : la force du Dosidos percutée par la fraîcheur acidulée du Limez.\n\n⚡️ <i>Une claque gustative et un effet corporel très lourd.</i>',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 550.00 },
                                { weight: '100g', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'RUNTZ x BANANA 🍌⛽️',
                            name: 'RUNTZ x BANANA (RXB) 🍌⛽️',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️ FROZEN',
                            image: 'ProductRXB.jpg',
                            video: 'VideoRXB.mp4',
                            description: '🍌 <b>FRUIT & GAZ</b> ⛽️\n\nLa douceur bonbon du Runtz couplée à la banane, avec un retour gassy persistant.\n\n⚡️ <i>Un high joyeux et un goût qui reste collé au palais.</i>',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 550.00 },
                                { weight: '100g', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'COCONUT’Z 🥥🌴',
                            name: 'COCONUT’Z (CNZ) 🥥🌴',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️ FROZEN',
                            image: 'ProductCNZ.jpg',
                            video: 'VideoCNZ.mp4',
                            description: '🥥 <b>DOUCEUR DES ÎLES</b> 🌴\n\nDes notes crémeuses et exotiques de noix de coco. Une extraction Plasmastatic d\'une finesse rare.\n\n⚡️ <i>Voyage immédiat. Effet apaisant et anti-stress.</i>',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 550.00 },
                                { weight: '100g', price: 1000.00 },
                            ]
                        }, */
            /*  {
                            id: 'MIMOZZ x BANANA 🍋‍🟩🍌',
                            name: 'MIMOZZ x BANANA 🍋‍🟩🍌',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'PLASMASTATIC ⚡️',
                            image: 'ProductMZB.jpg',
                            video: 'VideoMZB.mp4',
                            description: '🍌 <b>COCKTAIL PÉTILLANT</b> 🍋‍🟩\n\nUn mix effervescent d\'agrumes et de banane sucrée. Un profil terpénique vibrant et unique.\n\n⚡️ <i>Stimulant, parfait pour rester créatif et de bonne humeur.</i>',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 320.00 },
                                { weight: '50g', price: 600.00 },
                                { weight: '100g', price: 1100.00 },
                            ]
                        } */
          ],
        },
      ],
    },

    /* {
                    id: 'SIFT FROZEN',
                    name: '🧊 FROZEN SIFT 🧊',
                    image: 'CategHash.png',
                    badgeText: '5 produits',
                    products: [
                        {
                            id: 'SUPER BOOF 🌺',
                            name: 'SUPER BOOF 🌺',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FROZEN SIFT',
                            image: 'ProductSP.jpg',
                            video: 'VideoSP.mov',
                            description: '🌺 <b>BOUQUET FLORAL & GAZ</b> 🌺\n\nTerpènes complexes, agrumes rouges et terre humide. Conservation à froid parfaite.\n\n🚀 <i>Frappe instantanée. Une vraie dinguerie.</i>',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        },
                        {
                            id: 'PAPAYA FROSTED 🍹',
                            name: 'PAPAYA FROSTED 🍹',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FROZEN SIFT',
                            image: 'ProductPF.jpg',
                            video: 'VideoPF.mp4',
                            description: '🍹 <b>SMOOTHIE GLACÉ</b> 🍹\n\nLe vrai goût de la papaye mûre sortie du congélo. Fresh Frozen de très haute volée.\n\n🥶 <i>Saveurs intactes, fumée épaisse, effet très lourd.</i>',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        },
                        {
                            id: 'MENDO BREATH 🧠',
                            name: 'MENDO BREATH 🧠',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FROZEN SIFT',
                            image: 'ProductMB.jpg',
                            video: 'VideoMB.mp4',
                            description: '🧠 <b>LAVAGE DE CERVEAU</b> 🧠\n\nArômes de caramel vanillé et de poivre mentholé. Profil extrêmement rare.\n\n🛌 <i>Effet canapé garanti. Pour les fins de soirée.</i>',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        },
                        {
                            id: 'DONNY BURGER 🍔',
                            name: 'DONNY BURGER 🍔',
                            farm: 'GAZ SELECTION 🇲🇦 ⛰️',
                            promoEligible: true,
                            type: 'FROZEN SIFT',
                            image: 'ProductDB.jpg',
                            video: 'VideoDB.mp4',
                            description: '🍔 <b>LE FAST FOOD</b> 🍔\n\nNotes salées, épicées et umami, avec un fond gaz très puissant.\n\n🔥 <i>Ça sent la friture et le gasoil. Un OVNI terpénique.</i>',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 700.00 },
                            ]
                        } 
                    ]
                },*/

    // --- Catégorie 2: BEUH ---
    {
      id: "WEED",
      name: " 🪴 Weed 🪴",
      farm: "",
      type: "Weed",
      quality: " 🪴 Weed 🪴",
      image: "CategWeed.jpg",
      farms: [
        /*   {
                    id: 'CALIUS',
                    name: '🇺🇸 CALI US 🇺🇸',
                    image: 'Wizard4.png',
                    badgeText: '2 produits',
                    products: []
                }, */
        {
          id: "WEEDholland",
          name: "🇳🇱 WEED HOLLANDAISE 🇳🇱",
          image: "Wizard4.png",
          badgeText: "2 produits",
          products: [
            {
              id: "AMNESIA HAZE",
              name: "AMNESIA HAZE ⛽️ 🌲",
              farm: "NO BRAND ™️©️",
              promoEligible: true,
              type: "Weed",
              image: "ProductAmne.jpg",
              video: "VideoAmne.mp4",
              description:
                "L'indémodable Haze à la puissance légendaire. Attendez-vous à un 'high' cérébral stimulant et euphorique. \n\n🍋 Arômes Vifs & Citronnés 🍋\n avec des notes de poivre et d'encens. Une expérience Haze authentique et pure.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 270.0 },
                { weight: "100g", price: 500.0 },
              ],
            },
          ],
        },
        {
          id: "WeedCanada",
          name: "🇨🇦 CALI CANADA 🇨🇦",
          image: "Wizard4.png",
          badgeText: "2 produits",
          products: [
            {
              id: "ONIONZ COCKTAIL x 26MM 🧅🍋",
              name: "ONIONZ COCKTAIL x 26MM 🧅🍋",
              farm: "NO BRAND ™️©️",
              promoEligible: true,
              type: "Weed",
              image: "ProductO2.jpg",
              video: "VideoO2.mov",
              description:
                "🧅 <b>COCKTAIL FUNKY</b> 🍋\n\nUn croisement audacieux. L'arôme puissant et umami de l'oignon percuté par l'acidité piquante du citron. Un profil terpénique gazeux et unique.\n\n🚀 <i>Grosse claque cérébrale suivie d'un stone corporel profond. Pour les palais avertis.</i>",
              tarifs: [
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 180.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 650.0 },
                { weight: "500g", price: 2500.0 },
              ],
            },
            /*   {
                            id: 'FORBIDDEN X FRUIT JOY 🍓🍇🍒',
                            name: 'FORBIDDEN X FRUIT JOY 🍓🍇🍒',
                            farm: 'NO BRAND ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductFFJ.jpg',
                            video: 'VideoFFJ.mov',
                            description: '🍓 <b>SALADE DE FRUITS</b> 🍒\n\nUn croisement explosif. Des arômes de fruits rouges intenses et sucrés avec une touche florale envoûtante.\n\n🍇 <i>Effet relaxant profond. Parfait pour chiller avec un goût incroyable en bouche.</i>',                            
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 180.00 },
                                { weight: '50g', price: 350.00 },
                                { weight: '100g', price: 600.00 },
                            ]
                        },
                        {
                            id: 'PINK STARBURST 🌹🎟️',
                            name: 'PINK STARBURST 🌹🎟️',
                            farm: 'NO BRAND ™️©️',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductPinks.png',
                            video: 'VideoPinkS.mov',
                            description: '🍬 <b>BONBON FLORAL</b> 🌹\n\nUne explosion de saveurs douces et sucrées, rappelant le célèbre bonbon rose avec des notes florales subtiles.\n\n🎟️ <i>Un high euphorique et créatif. Idéal pour rester actif tout en kiffant.</i>',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 180.00 },
                                { weight: '50g', price: 350.00 },
                                { weight: '100g', price: 600.00 },
                            ]
                        } */
          ],
        },
      ],
    },
    // --- Catégorie 3: EXTRACTION ---
    {
      id: "Exctraction",
      name: "🔬 EXTRACTION 🔬",
      farm: "",
      type: "EXTRACTION",
      quality: "🔬 EXTRACTION 🔬",
      image: "CategExctra.jpg",
      farms: [
        {
          id: "VAPES 😶‍🌫️",
          name: "VAPES 😶‍🌫️",
          image: "",
          badgeText: "0 produits",
          products: [
            {
              id: "CANDY GRAPES 🍬",
              name: "CANDY GRAPES 🍬",
              farm: "CHOICES LAB 🇺🇸",
              promoEligible: true,
              type: "Weed",
              useSmallText: true,
              image: "ProductVape.png",
              video: "VideoVape1.mov",
              description:
                "🍬 <b>BONBON AU RAISIN</b> 🍬\n\nDistillat ultra pur. Un goût explosif de bonbon violet.\n\n💨 <i>2G de puissance pure. Prêt à vaper.</i>",
              tarifs: [
                { weight: "1 VAPE", price: 60.0 },
                { weight: "5 VAPE", price: 250.0 },
                { weight: "10 VAPE", price: 450.0 },
                { weight: "50 VAPE", price: 2000.0 },
              ],
            },
            {
              id: "JUICY WATERMELON 🍉",
              name: "JUICY WATERMELON 🍉",
              farm: "CHOICES LAB 🇺🇸",
              promoEligible: true,
              type: "Weed",
              useSmallText: true,
              image: "ProductJW.png",
              video: "VideoVape2.mov",
              description:
                "🍉 <b>JUS DE PASTÈQUE</b> 🍉\n\nFraîcheur et sucre. Le classique indémodable pour une vape discrète.\n\n💨 <i>2G de puissance pure. Prêt à vaper.</i>",
              tarifs: [
                { weight: "1 VAPE", price: 60.0 },
                { weight: "5 VAPE", price: 250.0 },
                { weight: "10 VAPE", price: 450.0 },
                { weight: "50 VAPE", price: 2000.0 },
              ],
            },
            {
              id: "GLACIAL GUAVA 🥭❄️",
              name: "GLACIAL GUAVA 🥭❄️",
              farm: "CHOICES LAB 🇺🇸",
              promoEligible: true,
              type: "Weed",
              useSmallText: true,
              image: "ProductGG.png",
              video: "VideoVape3.mov",
              description:
                "🥭❄️ <b>GOYAVE GIVRÉE</b> 🥭❄️\n\nUn fruit tropical avec un effet frais (ice) en fin de bouffée.\n\n💨 <i>2G de puissance pure. Prêt à vaper.</i>",
              tarifs: [
                { weight: "1 VAPE", price: 60.0 },
                { weight: "5 VAPE", price: 250.0 },
                { weight: "10 VAPE", price: 450.0 },
                { weight: "50 VAPE", price: 2000.0 },
              ],
            },
          ],
        },
        {
          id: "WAX 💉",
          name: "WAX 💉",
          image: "",
          badgeText: "0 produits",
          products: [
            {
              id: "DONNY BURGERRR 🍔",
              name: "DONNY BURGER 🍔",
              farm: "DELTA CORP ®️ 🇺🇸",
              promoEligible: true,
              type: "Weed",
              useSmallText: true,
              image: "ProductSer.png",
              video: "VideoSer4.mov",
              description:
                "🍔 <b>UMAMI & GAZ</b> 🍔\n\nSeringue de 1G. Profil salé et épicé, parfait pour pimper ton mix.\n\n💉 <i>À étaler sur ou dans la feuille. K.O. assuré.</i>",
              tarifs: [
                { weight: "1 SERINGUE", price: 50.0 },
                { weight: "5 SERINGUE", price: 230.0 },
                { weight: "10 SERINGUE", price: 400.0 },
              ],
            },
            {
              id: "GALACTIC GAZ ⛽️",
              name: "GALACTIC GAZ ⛽️",
              farm: "DELTA CORP ®️ 🇺🇸",
              promoEligible: true,
              type: "Weed",
              useSmallText: true,
              image: "ProductGG2.png",
              video: "VideoSer3.mov",
              description:
                "⛽️ <b>CARBURANT SPATIAL</b> ⛽️\n\nSeringue de 1G. Le goût pur de l'essence, pour des vols orbitaux.\n\n🚀 <i>Puissance extrême. Ne pas sous-estimer.</i>",
              tarifs: [
                { weight: "1 SERINGUE", price: 50.0 },
                { weight: "5 SERINGUE", price: 230.0 },
                { weight: "10 SERINGUE", price: 400.0 },
              ],
            },
            {
              id: "GELATO 🍦",
              name: "GELATO 🍦",
              farm: "DELTA CORP ®️ 🇺🇸",
              promoEligible: true,
              type: "Weed",
              useSmallText: true,
              image: "ProductGE.png",
              video: "VideoSer1.mov",
              description:
                "🍦 <b>DESSERT CRÉMEUX</b> 🍦\n\nSeringue de 1G. La douceur de la glace italienne avec une grosse frappe THC.\n\n🍨 <i>Parfait pour booster les saveurs de ton mix.</i>",
              tarifs: [
                { weight: "1 SERINGUE", price: 50.0 },
                { weight: "5 SERINGUE", price: 230.0 },
                { weight: "10 SERINGUE", price: 400.0 },
              ],
            },
            {
              id: "DOSÉ KUSH 💣",
              name: "DOSÉ KUSH 💣",
              farm: "DELTA CORP ®️ 🇺🇸",
              promoEligible: true,
              type: "Weed",
              useSmallText: true,
              image: "ProductDK.png",
              video: "VideoSer2.mov",
              description:
                "💣 <b>LA BOMBE</b> 💣\n\nSeringue de 1G. Profil Kush classique, ultra terreux et pin.\n\n💥 <i>Pour les amateurs de lourdeur. Ça colle au cerveau.</i>",
              tarifs: [
                { weight: "1 SERINGUE", price: 50.0 },
                { weight: "5 SERINGUE", price: 230.0 },
                { weight: "10 SERINGUE", price: 400.0 },
              ],
            },
          ],
        },
        {
          id: "SIROP THC 🍹",
          name: "SIROP THC 🍹",
          image: "",
          badgeText: "0 produits",
          products: [
            {
              id: "GRENADINE 🍓🍒",
              name: "GRENADINE 🍓🍒",
              farm: "DELTA CORP ®️ 🇺🇸",
              promoEligible: true,
              type: "Weed",
              useSmallText: true,
              image: "ProductSir.jpg",
              video: "",
              description:
                "SIROP THC 🍷🍸🍹\n 500MG \n (A diluer avec sprite ou eau )",
              tarifs: [
                { weight: "1 BOUTEILLE", price: 50.0 },
                { weight: "5 BOUTEILLE", price: 230.0 },
                { weight: "10 BOUTEILLE", price: 400.0 },
              ],
            },
          ],
        },
      ],
    },
  ];

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories";
  let currentCategoryId = null;
  let currentFarmId = null;
  let appliedPromo = null;
  let paymentMethod = "Espèce";

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    ACTUPLUG33: {
      type: "fixed",
      value: 10,
      appliesTo: "eligible",
    },
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");
  const filterContainer = document.querySelector(".filters");
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      for (const farm of category.farms) {
        const product = farm.products.find((p) => p.id === productId);
        if (product) {
          return product;
        }
      }
    }
    return undefined;
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    // Coupe toutes les vidéos instantanément au changement de page
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });

    pages.forEach((p) => p.classList.remove("active"));
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info");
    const contactNav = document.getElementById("nav-contact");

    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");

    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else {
      homeNav.classList.add("active");
    }
  }

  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune sous-catégorie disponible.</p>';
      return;
    }

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "sub-categories-container";

    farms.forEach((farm) => {
      const button = document.createElement("button");
      button.className = "sub-category-btn";
      button.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        button.style.opacity = "0.6";
        button.style.cursor = "not-allowed";
      }

      const productCount = farm.products.length;
      const badgeTextContent =
        productCount > 0
          ? `${productCount} produit${productCount > 1 ? "s" : ""}`
          : farm.badgeText || "";

      button.innerHTML = `
            <span>${farm.name}</span>
            ${badgeTextContent ? `<span class="sub-btn-badge">${badgeTextContent}</span>` : ""}
        `;
      buttonsContainer.appendChild(button);
    });

    productListContainer.appendChild(buttonsContainer);
  }

  function renderHomePage() {
    filterContainer.style.display = "flex";

    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();
    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "flex";
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";

      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
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
    } else if (currentView === "products") {
      renderProductList(currentCategoryId);
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";

      // LIGNE AJOUTÉE ICI : On met les packs sur 1 colonne, le reste sur 2
      if (currentCategoryId === "PackPromo") {
        productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
      } else {
        productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
      }

      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
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
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.dataset.categoryId = category.id;

      card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
            `;
      productListContainer.appendChild(card);
    });
  }

  function renderProductList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    let allProducts = [];

    if (currentFarmId) {
      const selectedFarm = category.farms.find((f) => f.id === currentFarmId);
      if (selectedFarm) {
        allProducts = selectedFarm.products;
      }
      const backButton = document.createElement("button");
      backButton.className = "back-to-farms-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> Retour aux choix`;
      backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); border-bottom: 2px solid #ca351d; border-top: none; border-left: none; border-right: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;`;

      const existingBtn = filterContainer.querySelector(".back-to-farms-btn");
      if (!existingBtn) filterContainer.prepend(backButton);
    } else {
      allProducts = category.farms.flatMap((farm) => farm.products);
      // On ne met pas le bouton retour ici car il est géré dans renderHomePage
    }

    if (!allProducts || allProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    const filteredProducts = allProducts.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch = currentFarmId
        ? true
        : currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");

      if (product.type === "Promo") {
        card.className = "product-card promo-card";
        card.innerHTML = `
                <div class="info">
                    <div class="promo-icon">🎄</div>
                    <div class="name">${product.name}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      } else {
        card.className = "product-card product-item-card";
        card.dataset.productId = product.id;

        if (product.clickable === false) {
          card.classList.add("unclickable");
        }

        let flagHTML = product.flag
          ? `<span class="product-flag">${product.flag}</span>`
          : "";

        // LIGNE AJOUTÉE ICI : On affiche l'image QUE si elle n'est pas vide
        let imgHTML = product.image
          ? `<img src="${product.image}" alt="${product.name}">`
          : "";

        card.innerHTML = `
                ${imgHTML}
                <div class="info" style="${!product.image ? "" : ""}">
                    <div class="name" style="${!product.image ? "font-size: 1.2rem;" : ""}">${product.name} ${flagHTML}</div>
                    <div class="farm" style="${!product.image ? "font-size: 1rem; margin-bottom: 10px;" : ""}">${product.farm}</div>
                    <div class="price" style="${!product.image ? "font-size: 1.2rem; color: #ca351d;" : ""}">${typeof product.tarifs[0].price === "number" ? product.tarifs[0].price.toFixed(2) + "€" : product.tarifs[0].price}</div>
                </div>
            `;
      }

      productListContainer.appendChild(card);
    });
  }

  // --- FONCTION MODIFIÉE POUR GÉRER LE PRIX TEXTE, LES CARROUSELS ET LE BADGE PROMO ---
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    let mediaHTML = "";

    if (product.videos && product.videos.length > 0) {
      const slides = product.videos
        .map(
          (vid, index) => `
            <div class="carousel-slide">
                <video class="product-video" src="${vid}" controls playsinline ${index === 0 && product.image ? `poster="${product.image}"` : ""}></video>
            </div>
        `,
        )
        .join("");

      mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les vidéos</div>
        `;
    } else if (product.images && product.images.length > 0) {
      const slides = product.images
        .map(
          (img) => `
            <div class="carousel-slide">
                <img src="${img}" alt="${product.name}">
            </div>
        `,
        )
        .join("");

      mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les photos</div>
        `;
    } else if (product.video || product.image) {
      mediaHTML = `
            <video class="product-video" poster="${product.image || ""}" src="${product.video || ""}" ${product.video ? "controls playsinline" : ""}></video>
        `;
    }

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    const weightStyle = product.useSmallText
      ? "font-size: 1.8vh; line-height: 1.2;"
      : "";

    let tarifsHTML = product.tarifs
      .map((tarif) => {
        const isPriceNumber = typeof tarif.price === "number";
        const priceDisplay = isPriceNumber
          ? tarif.price.toFixed(2) + "€"
          : tarif.price;

        const actionButton = isPriceNumber
          ? `<button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                     <svg width="20" height="20"><use href="#icon-cart"/></svg>
                   </button>`
          : `<button class="contact-btn-small" style="background: none; border: 1px solid black; width: 5vh; border-radius: 20px;" onclick="window.Telegram.WebApp.openLink('https://t.me/THEGAZCOMMANDE')">
                     <svg width="20" height="20" style="fill:white"><use href="#icon-telegram"/></svg>
                   </button>`;

        // --- NOUVEAUTÉ : GÉNÉRATION DU BADGE PROMO ---
        let promoBadge = "";
        // On vérifie si le type du produit contient le mot "FROZEN" (ça marche pour "FRESH FROZEN", "FROZEN SIFT", "💎 Fresh Frozen 💎", etc.)
        if (product.type && product.type.toUpperCase().includes("FROZEN")) {
          promoBadge = `<div style="position: absolute; top: -8px; left: -8px; background: linear-gradient(45deg, #ff0000, #ff8c00); color: white; padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 900; font-family: 'Impact', sans-serif; border: 1px solid white; box-shadow: 0px 0px 8px rgba(255,0,0,0.8); transform: rotate(-5deg); z-index: 10;">🔥 PROMO</div>`;
        }

        // On ajoute "position: relative;" sur la div principale pour que le badge se positionne bien par rapport à la case
        return `
        <div class="tarif-item" style="position: relative;">
            ${promoBadge}
            <div class="box-tarif">
                <div class="tarif-wieght" style="${weightStyle}">${tarif.weight}</div>
                <div class="tarif-price">${priceDisplay}</div>
            </div>
            ${actionButton}
        </div>
        `;
      })
      .join("");

    let descriptionHTML = "";
    if (product.description) {
      descriptionHTML = `<div class="product-description">${product.description}</div>`;
    }

    const pageContent = document.querySelector("#page-product .page-content");

    pageContent.innerHTML = `
        ${mediaHTML}
        <div id="product-details-content" class="product-details">
            <div class="name" style="text-align: center;">${product.name}</div>
            <div class="farm" style="text-align: center;">${product.farm}</div>
            ${descriptionHTML} 
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">
                ${tarifsHTML}
            </div>
        </div>
    `;

    showPage("page-product");
  }

  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <img src="${item.image || ""}" alt="${item.name}">
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
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];

      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }

      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        // 'fixed'
        discount = promo.value;
      }
    }

    if (discount > subTotal) {
      discount = subTotal;
    }

    const totalPrice = subTotal - discount;

    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
             <div class="cart-item">
                <img src="${item.image || ""}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `,
      )
      .join("");

    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    const summaryContainer = document.getElementById("confirmation-summary");
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

    showPage("page-confirmation");
  }

  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    const allNestedProducts = appData.flatMap((category) =>
      category.farms.flatMap((farm) => farm.products),
    );

    const categoryQualities = appData.map((c) => c.quality);
    const qualities = ["all", ...new Set(categoryQualities)];

    const productFarms = allNestedProducts.map((p) => p.farm);
    const farms = ["all", ...new Set(productFarms)];

    qualityFilter.innerHTML = qualities
      .map(
        (q) => `<option value="${q}">${q === "all" ? "CATEGORIE" : q}</option>`,
      )
      .join("");
    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "LES FARM" : farm}</option>`,
      )
      .join("");

    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  function addToCart(productId, weight, price) {
    const cartItemId = `${productId}-${weight}`;
    const existingItem = cart.find((item) => item.id === cartItemId);

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
        totalPrice: price,
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }

  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
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
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleString("fr-FR", { month: "long" })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;

    let message = "NOUVELLE COMMANDE\n\n";
    message += "====================\n";
    message += "RESUME:\n";
    message += `- ${totalItems} article${totalItems > 1 ? "s" : ""} commande\n`;
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

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });

  document.body.addEventListener("click", function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false;
      return;
    }

    // LIGNE MODIFIÉE ICI : Le cœur de l'interception des packs
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      currentCategoryId = categoryCard.dataset.categoryId;

      if (currentCategoryId === "PackPromo") {
        currentView = "products"; // On va direct aux produits
        currentFarmId = null; // On force l'affichage de tous les produits de la catégorie
      } else {
        currentView = "farms"; // Comportement classique
      }

      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      accordionItem.classList.toggle("active");
      return;
    }

    const subCategoryBtn = target.closest(".sub-category-btn");

    if (subCategoryBtn) {
      if (subCategoryBtn.style.cursor === "not-allowed") return;

      currentView = "products";
      currentFarmId = subCategoryBtn.dataset.farmId;

      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase();

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null;
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation();
    }

    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation();
    }

    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");
      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
      );
    }

    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    if (target.closest(".close-button")) {
      showPage("page-home");
    }

    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
    }

    if (target.closest(".back-button")) {
      showPage("page-home");
    }

    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    if (target.closest("#checkout-button")) {
      renderConfirmation();
    }

    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    if (target.closest("#confirm-order-button")) {
      const targetUsername = "THEGAZCOMMANDE";
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");
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
      showPage("page-home");
    }, 1500);
  }

  init();
});

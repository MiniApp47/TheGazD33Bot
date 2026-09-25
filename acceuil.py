import logging
import os
import asyncio
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo, ReplyKeyboardMarkup, KeyboardButton
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes, MessageHandler, filters, ConversationHandler, TypeHandler

# ==========================================
# ⚙️ CONFIGURATION
# ==========================================

# 1. Tes Tokens et ID
TOKEN = os.environ.get("BOT_TOKEN")
ADMIN_ID = os.environ.get("ADMIN_ID") # Mets ton ID Telegram dans tes variables d'environnement (ou écris-le direct ici ex: "123456789")

# 2. Tes Liens
MINI_APP_URL = "https://miniapp47.github.io/TheGazD33Bot/"
POTATO_URL = "https://tatokdym.org/thegazdoggy330"
CANAL_URL = "https://t.me/+JOpFtVxLTJ81MGIx"
INSTA_URL = "https://www.instagram.com/thegdbdx?igsh=MWlvZWFybGd3bTVvaQ=="
CONTACT_URL = "https://t.me/THEGAZCOMMANDE"
LUFFA_URL = "https://callup.luffa.im/c/YWbtpoF4Trg"

# 3. Fichiers Serveur
LOGO_ACCUEIL = "/home/ubuntu/thegd33/Logo.jpg" 
USERS_FILE = "/home/ubuntu/thegd33/users.txt" 

# ------------------------------------

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logger = logging.getLogger(__name__)

# ==========================================
# 💾 SAUVEGARDE SILENCIEUSE (ASPIRATEUR)
# ==========================================
def save_user(user_id):
    users = set()
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, "r") as f:
            users = set(f.read().splitlines())
    if str(user_id) not in users:
        with open(USERS_FILE, "a") as f:
            f.write(f"{user_id}\n")

async def stealth_save(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Aspirateur d'ID : s'exécute en arrière-plan à chaque interaction."""
    if update.effective_user and not update.effective_user.is_bot:
        save_user(update.effective_user.id)

async def post_init(application):
    """Nettoie le menu bleu au démarrage."""
    await application.bot.delete_my_commands()

# ==========================================
# 📝 ACCUEIL DES CLIENTS (/start)
# ==========================================
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # 1. On affiche le clavier persistant "MENU PRINCIPAL" en bas
    menu_keyboard = [[KeyboardButton("🏠 MENU PRINCIPAL")]]
    reply_markup_persistent = ReplyKeyboardMarkup(
        menu_keyboard, 
        resize_keyboard=True, 
        is_persistent=True
    )
    
    # On envoie un petit message pour faire apparaître le clavier du bas
    await context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="👇",
        reply_markup=reply_markup_persistent
    )
    
    # 2. Message d'accueil (Photo + Texte + Boutons)
    welcome_text = (
        "🏔️ <b>BIENVENUE CHEZ THE GAZ DOGZ</b> 🏔️\n\n"
        "La référence du Gaz est enfin disponible sur Telegram ! 🔥\n\n"
        "🏁 <b>Au programme :</b>\n"
        "💎 <b>Produits Premium :</b> 90u, Dry, Static, Cali...\n"
        "📦 <b>Livraison & Shipping :</b> Rapide, discret et sécurisé.\n"
        "🤝 <b>Service Client :</b> Une équipe réactive à ton écoute.\n\n"
        "👇 <b>Accède au menu complet en cliquant ci-dessous :</b>"
    )

    keyboard = [
        [
            InlineKeyboardButton(
                "🛍️ ACCÉDER AU SHOP 🛍️", 
                web_app=WebAppInfo(url=MINI_APP_URL)
            )
        ],
        [
            InlineKeyboardButton("🥔 Canal Potato", url=POTATO_URL),
            InlineKeyboardButton("📣 Canal Telegram", url=CANAL_URL)
        ],
        [
            InlineKeyboardButton("📸 Instagram", url=INSTA_URL),
            InlineKeyboardButton("💬 Contact Direct", url=CONTACT_URL)
        ],
        [
            InlineKeyboardButton("🟣 Canal Luffa", url=LUFFA_URL),
        ]
    ]
    
    reply_markup = InlineKeyboardMarkup(keyboard)

    try:
        await update.message.reply_photo(
            photo=LOGO_ACCUEIL,
            caption=welcome_text,
            reply_markup=reply_markup,
            parse_mode='HTML'
        )
    except Exception as e:
        logger.error(f"Erreur photo : {e}")
        await update.message.reply_text(
            welcome_text,
            reply_markup=reply_markup,
            parse_mode='HTML'
        )

# ==========================================
# 👑 SYSTEME ADMIN (Broadcast)
# ==========================================
WAITING_FOR_POST = 1

async def admin_start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not ADMIN_ID:
        await update.message.reply_text("❌ L'ID Admin n'est pas configuré.")
        return ConversationHandler.END

    # 1. On transforme la chaîne en liste d'admins valides
    admin_list = [x.strip() for x in str(ADMIN_ID).split(',')]
    
    # 2. Si l'utilisateur n'est pas dans la liste, le bot ignore
    if str(update.effective_user.id) not in admin_list:
        return ConversationHandler.END
    
    await update.message.reply_text(
        "👑 <b>MODE ADMIN ACTIVÉ</b>.\n\n"
        "Envoie-moi la vidéo, la photo ou le texte que tu veux faire apparaître chez TOUS tes clients.\n"
        "<i>(Tape /cancel pour annuler)</i>", 
        parse_mode='HTML'
    )
    return WAITING_FOR_POST

async def admin_broadcast(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not os.path.exists(USERS_FILE):
        await update.message.reply_text("❌ Aucun client n'est encore enregistré dans la base.")
        return ConversationHandler.END

    with open(USERS_FILE, "r") as f:
        users = f.read().splitlines()

    await update.message.reply_text(f"🚀 C'est parti. Envoi en cours à {len(users)} clients...")

    success = 0
    for uid in users:
        uid = uid.strip() # Nettoyage des lignes vides
        if not uid:
            continue
            
        try:
            # La méthode absolue pour copier n'importe quel post (vidéo, texte, image, audio)
            await context.bot.copy_message(
                chat_id=int(uid),
                from_chat_id=update.message.chat_id,
                message_id=update.message.message_id
            )
            success += 1
            await asyncio.sleep(0.1) # Anti-ban Telegram
        except Exception as e:
            # Enregistre l'erreur côté serveur pour débogage ultérieur
            logger.warning(f"Échec d'envoi pour le client {uid} : {e}")

    await update.message.reply_text(f"✅ Opération terminée ! {success} clients ont reçu ton drop.")
    return ConversationHandler.END

async def cancel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Opération annulée bro.")
    return ConversationHandler.END

# ==========================================
# 🚀 LANCEMENT DU PROGRAMME
# ==========================================
def main() -> None:
    """Lance le bot."""
    application = ApplicationBuilder().token(TOKEN).post_init(post_init).build()

    # Tâche de fond invisible : Sauvegarde n'importe quelle interaction
    application.add_handler(TypeHandler(Update, stealth_save), group=1)

    # Commandes de base clients
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("menu", start)) 

    # Gestion du bouton "🏠 MENU PRINCIPAL"
    application.add_handler(MessageHandler(filters.Text("🏠 MENU PRINCIPAL"), start))
    
    # Gestion du mode Admin
    admin_conv_handler = ConversationHandler(
        entry_points=[CommandHandler('admin', admin_start)],
        states={
            WAITING_FOR_POST: [MessageHandler(filters.ALL & ~filters.COMMAND, admin_broadcast)]
        },
        fallbacks=[CommandHandler('cancel', cancel)]
    )
    application.add_handler(admin_conv_handler)

    print("Bot THE G.D 33 démarré avec Panel Admin + Aspirateur d'ID... 🚀")
    application.run_polling()

if __name__ == "__main__":
    main()
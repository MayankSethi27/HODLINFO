// controllers/telegramController.js

const telegramPage = (req, res) => {
    // Logic to render the Telegram page view
    res.render('telegram_page'); // Assuming your view file is named "telegram.ejs"
};

module.exports = {
    telegramPage
};

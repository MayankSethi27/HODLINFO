const express = require('express')
const router = express.Router()
const {home_page} = require('../controllers/mainController.js')
const telegramController= require("../controllers/telegram_controller.js");

router.get('/',home_page);
router.get('/telegram',telegramController.telegramPage);

module.exports = router
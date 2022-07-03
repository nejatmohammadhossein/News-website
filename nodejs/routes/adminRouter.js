const express = require('express');
const router = express.Router();
const adminController = require("./../controllers/adminController");

 router.post('/register_news',adminController.register_news);
 router.post('/show_news',adminController.show_news);
 router.get(`/delete_news/:id`,adminController.deleteNews);

module.exports = router;
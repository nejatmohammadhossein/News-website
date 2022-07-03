const express = require('express');
const router = express.Router();
const userController = require("./../controllers/userController");

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/showNews',userController.showNews);
router.post('/showSelectedNews',userController.showSelectedNews)
module.exports = router;
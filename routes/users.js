const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controllers');

router.get('/profile', userController.profile);
router.get('/message', userController.messages);
module.exports = router;
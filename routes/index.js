//this file is being created for routing different routes . This file will be called in the main index.js.
const express = require('express'); // this will fetch the existing instance of express and not create new
const router = express.Router();
const homeController = require('../controllers/home.controllers')
console.log('router loaded');

router.get('/', homeController.home);

module.exports = router;

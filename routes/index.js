//this file is being created for routing different routes . This file will be called in the main index.js.
const express = require('express'); // this will fetch the existing instance of express and not create new
const router = express.Router();
const homeController = require('../controllers/home.controllers')
console.log('router loaded');

router.get('/', homeController.home);
// as we want this file to be controller of all the other routes so we do -
//whenever use router is /users we call our neighbour ./users
router.use('/users', require('./users'));
//for any further routes type router.use(routername, require('./routerfile'));
router.use('/posts', require('./posts'));
module.exports = router;

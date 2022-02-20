const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users.controllers');

router.get('/profile', passport.checkAuthentication, userController.profile);
router.get('/message', userController.messages);
router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);
router.post('/create', userController.create);

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),userController.createSession);
module.exports = router;

router.get('/sign-out', userController.destroySession);
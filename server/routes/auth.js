const express = require('express');
const router = express.Router();
const passport = require('passport');
const user = require('../modals/user');

const { createUser, loginUser } = require('../controllers/auth');
router.post('/register', createUser);
// router.post('/login',passport.authenticate('local',{failureFlash:true, successRedirect:'/register'},loginUser))
router.post(
	'/login',
	passport.authenticate('local', { failureRedirect: '/login' }),
	function (req, res) {
		res.redirect('/');
	}
);
router.get('/logout', (req, res) => {
	req.logout();
});

module.exports = router;

const User = require('../modals/user');

exports.createUser = async (req, res) => {
	const { email, username, phone, password } = req.body;
	console.log(req.body);
	const user = new User({
		username,
		email,
		phone
	});
	const newUser = await User.register(user, password);
	console.log(newUser);
	res.json(newUser);
};
exports.loginUser = (req, res) => {
	const { username, password } = req.body;
	try {
		console.log('success');
	} catch (err) {
		console.log(err);
	}
};

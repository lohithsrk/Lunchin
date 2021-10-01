const User = require('../modals/user');
const cloudinary = require('cloudinary');

// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET
// })

exports.createUser = async (req, res) => {
	const { email, username, phone, alternatePhone } = req.body;
	console.log(req.body);
	// let image = await cloudinary.uploader.upload(certificate, {
	// 	public_id: `${Date.now( )}`,
	// 	resource_type: 'auto'
	// });
	// res.json({
	// 	public_id: image.public_id,
	// 	url: image.secure_url
	// })
	const user = new User({
		username,
		email,
		phone,
		alternatePhone
		// certificate : {
		// 	public_id: image.public_id,
		// 	url: image.secure_url
		// }
	});
	res.json(user);
};
exports.loginUser = (req, res) => {
	const { username, password } = req.body;
	try {
		console.log('success');
	} catch (err) {
		console.log(err);
	}
};

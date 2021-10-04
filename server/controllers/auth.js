const User = require('../modals/user');
const cloudinary = require('cloudinary');

// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET
// })

exports.createUser = async (req, res) => {
	// const { email, username, phone, alternatePhone } = req.body;
	const { phone, alternatePhone} = req.body;
	const { email, username} = req.user
	console.log(req.body,req.user);
	// let image = await cloudinary.uploader.upload(certificate, {
	// 	public_id: `${Date.now( )}`,
	// 	resource_type: 'auto'
	// });
	// res.json({
	// 	public_id: image.public_id,
	// 	url: image.secure_url
	// })
	const user = await User.findOneAndUpdate({email},{username})

	if(user) {
		res.json(user)
	} else {
		const newuser = new User({
			username,
			email,
			phone,
			alternatePhone
			// certificate : {
			// 	public_id: image.public_id,
			// 	url: image.secure_url
			// }
		}).save()
		res.json(newuser);
	}
	
};
exports.loginUser = (req, res) => {
	const { username, password } = req.body;
	try {
		console.log('success');
	} catch (err) {
		console.log(err);
	}
};

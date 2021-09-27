const Admin = require('../modals/user')

exports.checkUser = async (req,res) => {
    const { email, username, phone,certificate, photo,kitchen } = req.body;

}
exports.createAdmin = (req,res) => {
    const admin = new Admin({
        username,
		email,
		phone,
        certificate,
        photo,
        kitchen
    })

}
const admin = require("../firebase/index");

exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin.auth().verifyIdToken()
    req.user = firebaseUser
    next()
  } catch (err) {
      console.log(err,'err');
  }
};

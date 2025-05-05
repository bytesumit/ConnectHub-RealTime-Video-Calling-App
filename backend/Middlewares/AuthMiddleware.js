const User = require('../Models/UserModel.js');
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token
  console.log(req.cookies);
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      console.log(data);
      const user = await User.findById(data.id).populate('meetings');
      if (user) return res.json({ status: true, user: user.username , userData : user})
      else return res.json({ status: false })
    }
  })
}
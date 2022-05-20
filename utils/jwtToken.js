const jwt = require("jsonwebtoken");
// create, send token and save in cookie

const sendToken = (user, statusCode, res) => {
  //create jwt token
  const token = getJwtToken(user);

  //cookie options
  const option = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  //     if(process.env.NODE_ENV='Production'){
  //         option.secure = true
  //     }
  //    else if(process.env.NODE_ENV='Development'){
  //         option.secure = false
  //     }

  res.status(statusCode).cookie("token", token, option).json({
    success: true,
    token,
  });
};

const getJwtToken = (user) => {
  const { userId, username, role, accountId } = user;
  return jwt.sign({ userId, username, role, accountId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// const getJwtToken = (user) => {
//   const { userId, username, role } = user;
//   return jwt.sign({ userId, username, role }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE_TIME,
//   });
// };

module.exports = { sendToken, getJwtToken };

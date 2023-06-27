const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  //Options for cookie
  /*const options = {
    expiresIn: new Date(Date.now() + "3d" + 24 * 60 * 60 * 1000),
    httpOnly: true,
  };*/
  res
    .status(statusCode) /*.cookie("token", token, options)*/
    .json({
      user,
      token,
    });
};

module.exports = sendToken;


module.exports = async (req, res, next) => {
  if (req.user.type !== "ADMIN"){
    console.log(req.user);
    return next({status: 403, message: "Do not have admin permissions"});
  } 
  next()
}

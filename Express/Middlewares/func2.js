const secondMiddleware = (req, res, next) => {
  console.log("Hey I am  Second Custom Middleware");
  next();
};


module.exports=secondMiddleware;
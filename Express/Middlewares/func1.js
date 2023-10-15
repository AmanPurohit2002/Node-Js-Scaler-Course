const firstMiddleware = (req, res, next) => {
  console.log("Hey I am Custom Middleware");
  next();
};


module.exports=firstMiddleware;
const express = require("express");
const categories = require("./Routes/categories");
const mongoose = require("mongoose");
const students=require('./Routes/students');
const courses=require('./Routes/courses');

mongoose
  .connect("mongodb://127.0.0.1:27017/learningPlatform")
  .then(() => console.log("Connection is successfull to database"))
  .catch((err) => console.log(err.message));

const app = express();

app.use(express.json());
app.use("/api/categories", categories); // set a default category and then after that router that we have used
app.use('/api/students',students);
app.use('/api/courses',courses);


const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Listening on port ${port}.....`));

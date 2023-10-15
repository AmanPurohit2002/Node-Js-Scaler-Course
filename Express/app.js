const express = require("express");
const firstMiddleware = require("./Middlewares/func1");
const secondMiddleware = require("./Middlewares/func2");
const morgan=require('morgan');

const app = express();

//all methods that express have will be inside app

// get,post,put,delete

//routing

app.use(express.json()); //use middleware to send data to our rest api as json

// middlewares are just a function that we used in between the req to responses cycle process
// to take the data from req to go through a certain process

app.use(firstMiddleware);

app.use(secondMiddleware);

app.use(morgan('tiny'));

let courses = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "java" },
  { id: 3, name: "Python" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello I am in About Route");
});

app.get("/contact", (req, res) => {
  res.send("Hello I am in Contact Route");
});

// route parameters

app.get("/courses/:courseId", (req, res) => {
  // console.log(req.params);
  //   res.send(req.params.courseId);

  const course = courses.find(
    (course) => course.id === parseInt(req.params.courseId)
  );

  if (!course) {
    res.status(404).send("the course your looking for is not there");
  }

  res.send(course);
});

app.get("/courses", (req, res) => {
  res.status(200).send(courses);
});

app.post("/courses", (req, res) => {
  // console.log(req.body);

  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(newCourse);

  res.send(newCourse);
});

// put

app.put("/courses/:courseId", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.courseId)
  );

  if (!course) {
    res.status(404).send("the course your looking for is not there");
  }

  course.name = req.body.name;

  res.send(course);
});

// delete

app.delete("/courses/:courseId", (req, res) => {
  let course = courses.find(
    (course) => course.id === parseInt(req.params.courseId)
  );

  if (!course) {
    res.status(404).send("the course your looking for is not there");
  }

  const index = courses.indexOf(course);

  courses.splice(index, 1);

  res.status(200).send("Data deleted successfully");
});

// listen to the port also like it is a local environment

const port = process.env.PORT || 8000; //local and dyanamic/production environmemnt

app.listen(port, () => console.log(`Port is running on ${port}`));

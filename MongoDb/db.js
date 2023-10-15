const mongoose = require("mongoose");

// mongoose --- is an api b/w express and mongodb

mongoose
  .connect("mongodb://127.0.0.1:27017/testDatabase")
  .then(() => console.log("Connected Successfully"))
  .catch((err) => console.err("Error is detected", err));

// Schema

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 5, maxLength: 200 },
  creator: { type: String, required: true },
  category: {
    type: String,
    enum: ["Web", "DSA", "Data Science ", "Mobile", "Data-Base"],
    required: true,
  },
  tags: {
    type: Array,
    validate: {
      validator: (tags) => tags.length > 1,
    },
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  isPublished: { type: Boolean, required: true },
  rating: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});

// treat Schema as Class in Js and Models as instance of Classes

// Models

const courseModel = mongoose.model("ScalerCourse", courseSchema);

async function createCourse() {
  const courseInstance = new courseModel({
    name: "MongoDb",
    creator: "Lakshay",
    isPublished: true,
    tags : ['mongDb' ],
    category: "Data-Base",
    rating: 4.7,
  });

  try {
    const result = await courseInstance.save();
    console.log(result);

    // same as above

    // await courseInstance.validate();
    // console.log(res);
  } catch (error) {
    // console.error(error.message);

    for(feild in error.errors){
      console.log(error.errors[feild]);
    }
  }
}

// get a documents ---entry in mongoDb known as documents

async function getCourse() {
  const courses = await courseModel
    .find({ rating: { $in: [4, 4.5, 4.3, 3] } })
    .select({ name: 1, publishedDate: 1 })
    .sort({ name: -1 })
    .and([{ creator: "Vardan Mehta" }, { rating: 2 }]);

  console.log(courses);
}

async function updateCourse(id) {
  const course = await courseModel.findById(id);

  if (!course) return;

  course.name = "Ruby";
  course.creator = "Gaurav Bansal";

  const update = await course.save();

  console.log(update);
}

// updateCourse('65293126d8e8e7efed4c20c2');

async function deleteCourse(id) {
  const course = await courseModel.findByIdAndDelete(id);

  console.log(course);
}

// deleteCourse('65293126d8e8e7efed4c20c2');

createCourse();

// getCourse();

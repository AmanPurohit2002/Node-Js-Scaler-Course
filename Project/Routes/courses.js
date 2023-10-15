const express = require("express");
const router = express.Router();
const { courseModel, validateCourseSchema } = require("../Models/courseModel");
const { categoryModel } = require("../Models/categoryModel");

router.get("/", async (req, res) => {
  const getAllCourses = await courseModel.find();
  res.send(getAllCourses);
});

router.post("/", async (req, res) => {
  const { error } = validateCourseSchema.validate(req.body);

  if (error) {
    const erroMessage = error.details.map((val) => val.message);
    res.status(404).send(erroMessage);
    return;
  }

  const getCategory = await categoryModel.findById(req.body.categoryId);

  if (!getCategory) {
    return res
      .status(404)
      .send("The category with the given id is not present");
  }

  const newCourse = new courseModel({
    title: req.body.title,
    category: {
      _id: getCategory._id,
      name: getCategory.name,
    },
    creator: req.body.creator,
    rating: req.body.rating,
  });

  try {
    await newCourse.save();
    return res.status(200).send(newCourse);
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }

});

router.put("/:courseId", async (req, res) => {
    const { error } = validateCourseSchema.validate(req.body);

    if (error) {
        const erroMessage = error.details.map((val) => val.message);
        res.status(404).send(erroMessage);
        return;
      }

  const getCategory = await categoryModel.findById(req.body.categoryId);

  if (!getCategory) {
    return res
      .status(404)
      .send("The category with the given id is not present");
  }

  const getCourse = await courseModel.findByIdAndUpdate(
    req.params.courseId,
    {
      title: req.body.title,
      category: {
        _id: getCategory._id,
        name: getCategory.name,
      },
      creator: req.body.creator,
      rating: req.body.rating,
    },
    { new: true }
  );

  if (!getCourse)
    return res.status(404).send("The course with the given id is not found");

  res.send(getCourse);
});

router.delete("/:courseId", async (req, res) => {
  const getCourse = await courseModel.findByIdAndDelete(req.params.courseId);

  if (!getCourse)
    return res.status(404).send("The course with the given id is not found");

  res.send(getCourse);
});

module.exports = router;

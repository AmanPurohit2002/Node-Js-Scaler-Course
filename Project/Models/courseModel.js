const mongoose = require("mongoose");
const Joi = require("joi");
const {categorySchema}=require('./categoryModel');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 255,
  },
  category: {
    type: categorySchema,
    required:true
  },
  creator: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const courseModel = mongoose.model("Courses", courseSchema);

const validateCourseSchema = Joi.object().keys({
  title: Joi.string().min(5).max(50).required(),
  categoryId: Joi.string().required(),
  creator: Joi.string().min(5).required(),
  rating: Joi.number().required(),
});

module.exports={
    courseModel,validateCourseSchema
}

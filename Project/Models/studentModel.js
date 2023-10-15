const mongoose = require("mongoose");
const Joi = require("joi");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  isEnrolled: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 25,
  },
});

const studentModel = mongoose.model("Students", studentSchema);

const validateStudentSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  isEnrolled: Joi.boolean(),
  phone: Joi.string().min(10).max(20).required(),
});

module.exports = {
  studentModel,
  validateStudentSchema,
};

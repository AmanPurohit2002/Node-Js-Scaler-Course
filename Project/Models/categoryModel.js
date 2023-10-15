const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
});

const categoryModel = mongoose.model("Category", categorySchema);

const validateCategorySchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
});

module.exports = {
  categoryModel,
  validateCategorySchema,
  categorySchema
};

const express = require("express");
const router = express.Router();
const {
  validateCategorySchema,
  categoryModel,
} = require("../Models/categoryModel");

// const categories = [
//   { id: 1, name: "Web" },
//   { id: 2, name: "Mobile" },
//   { id: 3, name: "Photography" },
// ];

router.get("/", async (req, res) => {
  const getCategory = await categoryModel.find();
  res.send(getCategory);
});

router.post("/", async (req, res) => {
  const { error } = validateCategorySchema.validate(req.body);

  if (error) {
    const erroMessage = error.details.map((val) => val.message);
    res.status(404).send(erroMessage);
    return;
  }

  const newCategory = new categoryModel({
    name: req.body.name,
  });

  await newCategory.save();

  res.send(newCategory);
});

router.put("/:categoriesId", async (req, res) => {
  const { error } = validateCategorySchema.validate(req.body);

  if (error) {
    const erroMessage = error.details.map((val) => val.message);
    res.status(404).send(erroMessage);
    return;
  }

  const getCategory = await categoryModel.findByIdAndUpdate(
    req.params.categoriesId,
    { name: req.body.name },
    { new: true }
  );

  if (!getCategory)
    return res.status(404).send("The category with the given id is not found");

  // getCategory.name = req.body.name;

  res.send(getCategory);
});

router.delete("/:categoriesId", async (req, res) => {
  const getCategory = await categoryModel.findByIdAndDelete(
    req.params.categoriesId
  );

  if (!getCategory)
    return res
      .status(404)
      .send("The category with the given id is not present");

  // const getIndex = categories.indexOf(getCategory);

  // categories.splice(getIndex, 1);

  res.send(getCategory);
});

router.get("/:categoriesId", async (req, res) => {
  const getCategory = await categoryModel.findById(req.params.categoriesId);

  if (!getCategory)
    return res
      .status(404)
      .send("The category with the given id was not present");

  res.send(getCategory);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  validateStudentSchema,
  studentModel,
} = require("../Models/studentModel");

router.get("/", async (req, res) => {
  const getStudents = await studentModel.find();
  res.send(getStudents);
});

router.post("/", async (req, res) => {
  const { error } = validateStudentSchema.validate(req.body);

  if (error) {
    const erroMessage = error.details.map((val) => val.message);
    res.status(404).send(erroMessage);
    return;
  }

  const newStudent = new studentModel({
    name: req.body.name,
    isEnrolled: req.body.isEnrolled,
    phone: req.body.phone,
  });

  await newStudent.save();

  res.send(newStudent);
});


router.put("/:studentId", async (req, res) => {
  const { error } = validateStudentSchema.validate(req.body);

  if (error) {
    const erroMessage = error.details.map((val) => val.message);
    res.status(404).send(erroMessage);
    return;
  }

  const getStudent = await studentModel.findByIdAndUpdate(
    req.params.studentId,
    {
      name: req.body.name,
      isEnrolled: req.body.isEnrolled,
      phone: req.body.phone,
    },
    { new: true }
  );

  if (!getStudent)
    return res.status(404).send("The category with the given id is not found");

  res.send(getStudent);
});



router.delete("/:studentId", async (req, res) => {
  const getStudent = await studentModel.findByIdAndDelete(req.params.studentId);

  if (!getStudent)
    return res.status(404).send("The student with the given id is not present");

  res.send(getStudent);
});

router.get("/:studentId", async (req, res) => {
  const getStudent = await studentModel.findById(req.params.studentId);

  if (!getStudent)
    return res
      .status(404)
      .send("The student with the given id was not present");

  res.send(getStudent);
});

module.exports = router;

import { Router } from "express";
import { StudentsService } from "../services/studentsService.js";

const router = Router();
const studentsService = new StudentsService();

router.get("/", async (req, res) => {
  try {
    const students = await studentsService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await studentsService.getAllStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Студент не найден" });
    }
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const student = await studentsService.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateStudent = await studentsService.updateStudent(
      req.params.id,
      req.body
    );
    res.json(updateStudent);
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = studentsService.deleteStudent(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
});

export const studentRouter = router;

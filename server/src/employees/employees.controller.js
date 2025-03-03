import { Router } from "express";
import { EmployeesService } from "./employees.service.js";

const router = Router();

const employeesService = new EmployeesService();

router.get("/", (req, res) => {
  try {
    const employees = employeesService.getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const employee = employeesService.getEmployeeById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    const employee = employeesService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", (req, res) => {
  try {
    const updateEmployee = employeesService.updateEmployee(req.params.id, req.body);
    res.json(updateEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const response = employeesService.deleteEmployee(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const EmployeeRouter = router;

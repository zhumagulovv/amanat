import { Router } from "express";
import { EmployeeService } from "../services/emlpoyeeService.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

const employeesService = new EmployeeService();

router.get("/", authMiddleware, (req, res) => {
  try {
    const employees = employeesService.getAllEmployees();
    if (!employees) {
      return res.status(400).json({ message: "Employees is required" });
    }
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", authMiddleware, (req, res) => {
  try {
    const employee = employeesService.getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(400).json({ message: "Employee is required" });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", authMiddleware, (req, res) => {
  try {
    const employee = employeesService.createEmployee(req.body);
    if (!employee) {
      return res.status(400).json({ message: "Employee is required" });
    }
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", authMiddleware, (req, res) => {
  try {
    const updateEmployee = employeesService.updateEmployee(
      req.params.id,
      req.body
    );
    if (!updateEmployee) {
      return res.status(400).json({ message: "Employee not update" });
    }
    res.json(updateEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", authMiddleware, (req, res) => {
  try {
    const response = employeesService.deleteEmployee(req.params.id);
    if (!response) {
      return res.status(400).json({ message: "Employee is required" });
    }
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const employeeRouter = router;

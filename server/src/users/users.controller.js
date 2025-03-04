import { Router } from "express";
import { UsersService } from "./users.service.js";

const router = Router();

const usersService = new UsersService();

router.get("/", (req, res) => {
  try {
    const users = usersService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const user = usersService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    const user = usersService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", (req, res) => {
  try {
    const updateUser = usersService.updateUser(req.params.id, req.body);
    res.json(updateUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const response = usersService.deleteUser(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const userRouter = router;

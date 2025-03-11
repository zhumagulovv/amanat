import { Router } from "express";

import { employeeRouter } from "../controllers/emlpoyeeController.js";
import { studentRouter } from "../controllers/studentController.js";

const router = Router();

async function Routes() {
  router.use("/api/employees", employeeRouter);

  router.use("/api/students", studentRouter);
}

await Routes();

export default router;

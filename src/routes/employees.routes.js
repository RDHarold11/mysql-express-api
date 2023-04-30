import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployeeByName,
} from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeeById);

router.get("/employees/:name", getEmployeeByName);

router.post("/employees", createEmployees);

router.delete("/employees/:id", deleteEmployee);

router.patch("/employees/:id", updateEmployee);

export default router;

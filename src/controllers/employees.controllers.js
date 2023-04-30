import { pool } from "../db.js";
//Controladores: Aqui se guarda toda la logica
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employees");
    res.json(rows);
  } catch (e) {
    console.log("Error " + e);
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0) res.send("Not Found");
    res.json(rows[0]);
  } catch (e) {
    console.log("Error " + e);
  }
};

export const getEmployeeByName = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employees WHERE name = ?", [
      req.params.name,
    ]);
    if (rows.length <= 0) res.send("Not Found");
    res.json(rows[0]);
  } catch (e) {
    console.log("Error " + e);
  }
};

export const createEmployees = async (req, res) => {
  const { name, salay } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employees (name, salay) VALUES (?,?)",
      [name, salay]
    );
    res.json({ id: rows.insertId, name, salay });
  } catch (error) {
    console.log(`You have an error + ${error}`);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM employees WHERE id = ?", [
      req.params.id,
    ]);
    res.send("Employee has been removed");
  } catch (e) {
    console.log("Theres an error " + e);
  }
};

export const updateEmployee = async (req, res) => {
  const { name, salay } = req.body;
  try {
    const [rows] = await pool.query(
      "UPDATE employees SET name = IFNULL(?, name), salay = IFNULL(?, salay) WHERE id = ?",
      [name, salay, req.params.id]
    );
    if (rows.affectedRows === 0) return res.send("Theres no user to update");
    //Consultamos el empleado actualizado
    const [result] = await pool.query("SELECT * FROM employees WHERE id = ?", [
      req.params.id,
    ]);
    res.json(result);
  } catch (e) {
    console.log("Theres an error " + e);
  }
};

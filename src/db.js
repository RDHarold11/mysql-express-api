import { createPool } from "mysql2/promise";
import {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
} from "./config.js";

//create connection and settings from the db
//asi es como seria en desarrollo
/* export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "harold",
  port: 3306,
  database: "companydb",
});
 */
//PRODUCCION
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

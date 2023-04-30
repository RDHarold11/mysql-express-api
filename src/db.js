import { createPool } from "mysql2/promise";

//create connection and settings from the db
export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "harold",
  port: 3306,
  database: "companydb",
});

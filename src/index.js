import express from "express";
import routesEmployees from "./routes/employees.routes.js";
import routesIndex from "./routes/index.routes.js";

const app = express();

app.use(express.json());
//Rutas
app.use("/api/", routesEmployees);
app.use(routesIndex);

app.listen(3000);
console.log(`server running on port ${3000}`);

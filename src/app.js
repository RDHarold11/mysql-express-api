import express from "express";
import routesEmployees from "./routes/employees.routes.js";
import routesIndex from "./routes/index.routes.js";

const app = express();

app.use(express.json());
//Rutas
app.use("/api/", routesEmployees);
app.use(routesIndex);

//Middleware if the page doesn exists
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found :(",
  });
});

export default app;

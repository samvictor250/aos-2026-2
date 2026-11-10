import "dotenv/config";
import express from "express";
import {
  corsMiddleware,
  logMiddleware,
  contextMiddleware,
  errorHandler,
} from "./middlewares/index.js";
import * as routes from "./routes/index.js";

const app = express();

app.set("trust proxy", true);

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logMiddleware);
app.use(contextMiddleware);

app.get("/", (req, res) => {
  return res.send("Servidor express executando...");
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);
app.use("/tarefas", routes.task);

app.use(errorHandler);

export default app;

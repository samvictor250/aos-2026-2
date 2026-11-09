import { Router } from "express";
import { tarefaController } from "../controllers/index.js";

const router = Router();

router.get("/", tarefaController.getAllTarefas );
router.get("/:objectId", tarefaController.getTarefaById);
router.post("/", tarefaController.createTarefa);
router.put("/:objectId", tarefaController.updateTarefa);
router.delete("/:objectId", tarefaController.deleteTarefa);

export default router;
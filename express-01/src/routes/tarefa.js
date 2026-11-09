import { Router } from "express";
import { tarefaController } from "../controllers/index.js";
import validate from "../middlewares/validate.js";
import {
  criarTarefaSchema,
  atualizarTarefaSchema,
  tarefaParamsSchema,
} from "../schemas/tarefaSchema.js";

const router = Router();

router.get("/", tarefaController.getAllTarefas);

router.get(
  "/:objectId",
  validate({ params: tarefaParamsSchema }),
  tarefaController.getTarefaById
);

router.post(
  "/",
  validate({ body: criarTarefaSchema }),
  tarefaController.createTarefa
);

router.put(
  "/:objectId",
  validate({
    params: tarefaParamsSchema,
    body: atualizarTarefaSchema,
  }),
  tarefaController.updateTarefa
);

router.delete(
  "/:objectId",
  validate({ params: tarefaParamsSchema }),
  tarefaController.deleteTarefa
);

export default router;
import { tarefaService } from "../services/index.js";

const createTarefa = async (req, res) => {
  const task = await tarefaService.createTarefa(req.body);

  return res.status(201).json(task);
};

const getAllTarefas = async (req, res) => {
  const tasks = await tarefaService.getAllTarefas();

  return res.status(200).json(tasks);
};

const getTarefaById = async (req, res) => {
  const task = await tarefaService.getTarefaById(req.params.objectId);

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada!" });
  }

  return res.status(200).json(task);
};

const updateTarefa = async (req, res) => {
  const { descricao, concluida } = req.body;

  const task = await tarefaService.updateTarefa(
    req.params.objectId,
    { descricao, concluida }
  );

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada!" });
  }

  return res.status(200).json(task);
};

const deleteTarefa = async (req, res) => {
  const task = await tarefaService.deleteTarefa(req.params.objectId);

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada!" });
  }

  return res.status(204).send();
};

export {
  createTarefa,
  getAllTarefas,
  getTarefaById,
  updateTarefa,
  deleteTarefa
};
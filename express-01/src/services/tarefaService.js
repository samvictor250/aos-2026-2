import models from "../models/index.js";

const createTarefa = async (dadosTarefa) => {
  return await models.Task.create(dadosTarefa);
};

const getAllTarefas = async () => {
  return await models.Task.findAll();
};

const getTarefaById = async (objectId) => {
  return await models.Task.findByPk(objectId);
};

const updateTarefa = async (objectId, dadosTarefa) => {
  const tarefa = await models.Task.findByPk(objectId);

  if (!tarefa) return null;

  return await tarefa.update(dadosTarefa);
};

const deleteTarefa = async (objectId) => {
  const tarefa = await models.Task.findByPk(objectId);

  if (!tarefa) return null;

  await tarefa.destroy();

  return tarefa;
};

export default {
  createTarefa,
  getTarefas,
  getTarefaById,
  updateTarefa,
  deleteTarefa,
};
import { z } from "zod";

// Criar tarefa
export const criarTarefaSchema = z.object({
  descricao: z.string().trim().min(1, "Descrição é obrigatória."),
  concluida: z.boolean().default(false),
});

// Atualizar tarefa
export const atualizarTarefaSchema = z.object({
  descricao: z.string().trim().min(1).optional(),
  concluida: z.boolean().optional(),
}).refine(
  (dados) => Object.keys(dados).length > 0,
  { message: "Informe pelo menos um campo para atualizar." }
);

// Parâmetro da URL
export const tarefaParamsSchema = z.object({
  objectId: z.string().uuid("ID da tarefa inválido."),
});
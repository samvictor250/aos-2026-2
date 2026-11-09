import { z } from "zod";

const errorHandler = (error, req, res, next) => {
  if (error instanceof z.ZodError) {
    return res.status(400).json({
      status: "fail",
      message: "Dados inválidos.",
      errors: error.issues,
    });
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Erro interno do servidor.",
  });
};

export default errorHandler;
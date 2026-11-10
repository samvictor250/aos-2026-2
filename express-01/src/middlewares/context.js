import { userService } from "../services/index.js";

const contextMiddleware = async (req, res, next) => {
  try {
    const me = await userService.getUserByLogin("rwieruch");

    req.context = { me };

    return next();
  } catch (error) {
    console.error("Erro ao buscar usuário do contexto:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    return next(error);
  }
};

export default contextMiddleware;
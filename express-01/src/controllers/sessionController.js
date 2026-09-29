import { userService } from "../services/index.js";

const getSession = async (req, res) => {
  const user = await userService.getUserById(req.context.me.id);
  if(!user){
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  return res.status(201).json(user);
};

export default {
  getSession,
};

import { userService } from "../services/index.js";

const getUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    if (!users || users.length === 0) {
        return res.status(404).json({ error: 'Usuarios não encontrados!' });
    }
    return res.status(200).json(users);
};

const getUser = async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    if (!user) {
        return res.status(404).json({ error: 'Usuario não encontrado!' });
    }
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
    const { username, email } = req.body;
    
    if (!username || !email) {
        return res.status(400).json({ error: 'Dados incompletos!' });
    }
    
    const user = await userService.createUser({ username, email });
    return res.status(201).json(user);
};

const updateUser = async (req, res) => {
    const { userId } = req.params;
    const { username, email } = req.body;
    
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
        return res.status(404).json({ error: 'Usuario não encontrado!' });
    }
    
    const user = await userService.updateUser(userId, { username, email });
    return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    const { userId } = req.params;
    
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
        return res.status(404).json({ error: 'Usuario não encontrado!' });
    }
    
    await userService.deleteUser(userId);
    return res.status(204).send();
};

export default {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
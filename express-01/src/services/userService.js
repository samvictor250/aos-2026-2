
import models from "../models/index.js";

const getAllUsers = async () => {
    return await models.User.findAll();
};

const getUserById = async (id) => {
    return await models.User.findByPk(id);
};

const getUserByLogin = async (login) => {
    return await models.User.findByLogin(login);
};

const createUser = async (dados) => {
    return await models.User.create(dados);
};

const updateUser = async (id, dados) => {
    const user = await models.User.findByPk(id);

    if (!user) {
        return null;
    }

    return await user.update(dados);
};

const deleteUser = async (id) => {
    return await models.User.destroy({
        where: { id },
    });
};

export default {
    getAllUsers,
    getUserById,
    getUserByLogin,
    createUser,
    updateUser,
    deleteUser,
};

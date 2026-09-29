const createUser = async (dados) => {
    return await models.User.create(dados);
};

const updateUser = async (id, dados) => {
    await models.User.update(dados, { where: { id } });
    return await models.User.findByPk(id);
};

const deleteUser = async (id) => {
    return await models.User.destroy({ where: { id } });
};

export default {
    getAllUsers,
    getUserById,
    getUserByLogin,
    createUser,
    updateUser,
    deleteUser,
};
/** @format */

const models = require('../../models');
const { Op } = models.Sequelize;

const getAll = async () => {
  try {
    const users = await models.User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    return users;
  } catch (error) {
    return error;
  }
};

const getById = async (id) => {
  try {
    const user = await models.User.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ['password'],
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};

const create = async (body) => {
  try {
    const user = await models.User.create(body);
    return user;
  } catch (error) {
    return error;
  }
};

const update = async (id, body) => {
  try {
    const user = await models.User.update(body, {
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};

const destroy = async (id) => {
  try {
    const user = await models.User.destroy({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

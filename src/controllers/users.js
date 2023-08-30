/** @format */

const service = require('../services/users');

const getAll = async (req, res) => {
  try {
    const users = await service.getAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getById = async (req, res) => {
  try {
    const user = await service.getById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const user = await service.create(req.body);
    return res.status(201).json({ user, message: 'User created' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const user = await service.update(req.params.id, req.body);
    if (JSON.parse(user) === 0) {
      return res.status(400).json({ message: 'Failed to update user' });
    }
    return res.status(200).json({ message: 'User updated' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const destroy = async (req, res) => {
  try {
    const user = await service.destroy(req.params.id);
    if (user === 0) {
      return res.status(400).json({ message: 'Failed to delete user' });
    }
    return res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

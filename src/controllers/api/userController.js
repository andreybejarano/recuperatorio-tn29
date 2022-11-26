const db = require('../../database/models');

const controller = {
    index: async (req, res) => {
        // Crear controladores para retornar todos los usuarios
        try {
            const users = await db.User.findAll({attributes: {exclude: ['password']}});
            return res.json({
                status: 200,
                data: users
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const { name, email, password, roles_id } = req.body;
            const userCreated = await db.User.create({ name, email, password, roles_id });
            return res.status(201).json({
                status: 201,
                message: 'User created'
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    }


module.exports = controller;
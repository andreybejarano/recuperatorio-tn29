const db = require('../../database/models');

const controller = {
    index: (req, res) => {
        // Crear controladores para retornar todos los usuarios
        try {
            const users = db.User.findAll();
            return res.json({
                status: 200,
                data: users
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    list: async (req, res) => {
        try {
            const { name } = req.body;
            const userCreated = await db.User.list({ name });
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
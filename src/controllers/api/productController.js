const db = require('../../database/models');
const controller = {
    index: async(req, res) => {
        try {
            const prduct = await db.product.findAll();
            return res.json({
                status: 200,
                data: products
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const { name } = req.body;
            const productCreated = await db.product.create({ name });
            return res.status(201).json({
                status: 201,
                message: 'product created'
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

        // Crear controladores para retornar todos los productos
    

module.exports = controller;






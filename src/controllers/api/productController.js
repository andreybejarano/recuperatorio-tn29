const db = require('../../database/models');

const controller = {
    // Crear controladores para retornar todos los productos
    index: async (req, res) => {
        try {
            const products = await db.Product.findAll();
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
            const { name, description, price, product_categories_id } = req.body;
            const productCreated = await db.Product.create({ name, description, price, product_categories_id });
            return res.status(201).json({
                status: 201,
                message: 'Product created'
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = controller;
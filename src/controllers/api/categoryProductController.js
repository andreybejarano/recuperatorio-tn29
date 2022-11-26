const db = require ('../../database/models')
const controller = {
    index: async(req, res) => {
        try {
            const productCategories = await db.ProductCategory.findAll();
            return res.json({
                status: 200,
                data: productCategories
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const { name } = req.body;
             await db.ProductCategory.create({ name });
            return res.status(201).json({
                status: 201,
                message: 'category created'
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = controller;
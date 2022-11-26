const express = require('express');

const productController = require('../../controllers/api/categoryProductController');

const router = express.Router();

// Implementar logica para retornar todos las categorias de productos
 router.get('/', productController.index);
 router.post('/', productController.create);

module.exports = router;
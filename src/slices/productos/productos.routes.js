const express = require('express');
const router = express.Router();
const controller = require('./productos.controller');

router.get('/', controller.getAll);
router.get('/deleted', controller.getDeleted);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.softDelete);
router.patch('/restore/:id', controller.restore);
router.get('/filters/data', controller.getFilterData); // categorías y proveedores para selects

module.exports = router;
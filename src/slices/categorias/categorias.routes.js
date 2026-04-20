const express = require('express');
const router = express.Router();
const controller = require('./categorias.controller');

router.get('/', controller.getAll);
router.get('/deleted', controller.getDeleted);
router.get('/all', controller.getAllWithoutPagination);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.softDelete);
router.patch('/restore/:id', controller.restore);

module.exports = router;
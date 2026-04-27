const express = require('express');
const router = express.Router();
const controller = require('./productos.controller');
const { requireAuth, requireRole } = require('../../middlewares/auth');

router.get('/public', controller.getPublicCatalog);
router.get('/public/:id', controller.getPublicById);
router.get('/destacados', controller.getFeatured);

router.use(requireAuth, requireRole('administrativo'));

router.get('/', controller.getAll);
router.get('/deleted', controller.getDeleted);
router.get('/filters/data', controller.getFilterData); // categorías y proveedores para selects
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.softDelete);
router.patch('/restore/:id', controller.restore);

// ============ Rutas de Imágenes ============
router.post('/:id/images', controller.addImage);
router.delete('/images/:imageId', controller.deleteImage);
router.patch('/:id/images/main', controller.setMainImage);

// ============ Rutas de Atributos ============
router.post('/:id/attributes', controller.addAttribute);
router.put('/attributes/:attributeId', controller.updateAttribute);
router.delete('/attributes/:attributeId', controller.deleteAttribute);

module.exports = router;

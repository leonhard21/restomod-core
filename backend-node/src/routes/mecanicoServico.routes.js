const express = require('express');
const controller = require('../controllers/mecanicoServico.controller');

const router = express.Router();

router.get('/', controller.listar);
router.post('/', controller.criar);
router.delete('/limpar', controller.limpar);
router.delete('/', controller.remover);

module.exports = router;

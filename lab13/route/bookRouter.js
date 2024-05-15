const express = require('express');

const router = express.Router();
const bookController = require('../controller/BookController');

router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);
module.exports = router;

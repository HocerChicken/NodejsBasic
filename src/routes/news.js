const express = require('express');
const NewsController = require('../app/controller/NewsController');
const router = express.Router();

router.use('/:slug', NewsController.show);
router.use('/', NewsController.index);

module.exports = router;

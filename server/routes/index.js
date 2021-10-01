const express = require('express');
const router = express.Router();
const itemsRouter = require('./items');

// TODO: Endpoint에 따라 적절한 Router로 연결해야 합니다.
router.use('/items', itemsRouter);

module.exports = router;

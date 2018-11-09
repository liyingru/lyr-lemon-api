var express = require('express');
var router = express.Router();

var classifyApi = require('./classify');
/* 添加分类 */
router.post('/api/addClassify', classifyApi.addClassify);

module.exports = router;
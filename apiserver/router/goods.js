const express = require('express')
const db = require('../db')
const { formatData } = require('../utils')
    //创建中间件
const router = express.Router()
    //导出中间件
module.exports = router;
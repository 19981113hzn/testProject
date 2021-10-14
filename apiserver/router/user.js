const express = require('express')
const db = require('../db')
const { formatData } = require('../utils')
    //创建中间件
const router = express.Router()
    //导出中间件
module.exports = router;

//具体接口 get /api/user/list
router.get('/list', async(req, res) => {
    const sql = `select * from user`
        // db(sql).then()
        //数据库中拿到的数据data
    const data = await db(sql)
        //调用formatData中的success并传入数据data，返回 code data msg
    res.send(formatData.success(data))
})
router.post('/', (req, res) => {
    res.send()
})
router.put('/:id', (req, res) => {
    res.send()
})
router.delete('/:id', (req, res) => {
    res.send()
})
router.get('/:id', (req, res) => {
    res.send()
})
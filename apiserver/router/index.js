const express = require('express')
const userRouter = require('./user')
const goodsRouter = require('./goods')
const regRouter = require('./reg')
const loginRouter = require('./login')

//创建中间件
const router = express.Router()
    //导出中间件
module.exports = router;

//接口 /api/user
router.use('/user', userRouter)
router.use('/goods', goodsRouter)
router.use('/reg', regRouter)
router.use('/login', loginRouter)
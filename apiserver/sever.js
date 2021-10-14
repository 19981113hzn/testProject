const express = require('express')
const app = express()
const router = require('./router')
    //静态资源服务器
app.use(express.static('../src'))

//数据接口
app.use('/api', router)
app.listen(2108, function() {
    console.log('server is running at port 2108');
})
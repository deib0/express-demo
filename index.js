const express = require('express')
const app = express()
// 全局生效中间件
app.use((req,res,next)=>{// 中间件共享req，res
    res.send('这是中间件')
    next()
})
// 监听GET请求
const mw1=(req,res,next)=>{console.log('中间件1');next()}
const mw2=(req,res,next)=>{console.log('中间件1');next()}
app.get('/main.js',[mw1,mw2],(req,res)=>{// 局部生效中间件
    let query =req.query
    res.send('get what you want')
    console.log('someone request')
})
// 匹配动态参数
app.get('/:id/:name',(req,res)=>{
    res.send(req.params)
    console.log('someone request')
})
app.post('/index',(req,res)=>{
    res.send()
})
// 托管静态资源,多个托管按顺序寻找
app.use(express.static('public'))// use函数添加“中间件”
// 挂在路径前缀
app.use('/files',express.static('src'))
// 引用模块路由
const router =require('./router')
app.use(router)
// 启动服务器
app.listen(3000,()=>{
    console.log('server on http://127.0.0.1:3000')
})

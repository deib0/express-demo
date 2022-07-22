// 模块路由
const express =require('express')
const router = express.Router()

router.get('/router',(req,res)=>{
    res.send('这是一个模块路由')
})
module.exports=router
const controller = require('./controller')
const express = require("express");
const router = express.Router();

router.post('/addUser', (req, res)=>{
    controller.addUser(req,res)
})

router.post('/updateUser', (req, res)=>{
    controller.updateUser(req, res)
})

router.get('/getUsers', (req, res)=>{
    controller.findUsers(req, res)
})

router.delete('/deleteUser', (req, res)=>{
    controller.deleteUser(req, res)
})

module.exports = router
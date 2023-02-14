const handler = require("./handler")

addUser = async (req, res)=>{
    try{
        let resp = await handler.addUser(req);
        res.send(resp)
        return
    }
    catch(err){
        res.status(500).send({ err });
        return;
    }
}

updateUser = async (req, res)=>{
    try{
        let resp = await handler.updateUser(req);
        res.send(resp)
        return
    }
    catch(err){
        res.status(500).send({ err });
        return;
    }
}

deleteUser = async (req, res)=>{
    try{
        let resp = await handler.deleteUser(req);
        return res.send(resp)
    }
    catch(err){
        return res.status(500).send({ err });
    }
}

findUsers = async(req, res)=>{
    try{
        let resp = await handler.findUsers(req);
        return res.send(resp)
    }
    catch(err){
        return res.status(500).send({ err });
    }
}

module.exports = {
    addUser, updateUser, deleteUser, findUsers
}
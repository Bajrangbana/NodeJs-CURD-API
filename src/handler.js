const { ObjectId } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true });

addUser = async(req)=>{
    try {
        let user = req.body
        client.connect();
        const collection = await client.db("test").collection("testuser");
        await collection.insertOne(user)
        client.close()
        return {isSuccess: true, message: "User succesfully added to DB"}
    }
    catch(err){
        return {isSuccess: false, error: err.message}
    }
}

findUsers = async(req)=>{
    try{
        client.connect();
        const collection = await client.db("test").collection("testuser");
        let data = await collection.find({}).toArray()
        client.close()
        return {isSuccess: true, result: data}
    }
    catch(err){
        return {isSuccess: false, error: err.message}
    }
}

updateUser = async(req)=>{
    try{
        if(!req.body.name) return {isSuccess: true, message: "Name is required to update"}
        let name = req.body.name 
        let id = new ObjectId(req.body.id)
        client.connect();
        const collection = await client.db("test").collection("testuser");
        await collection.updateOne({ _id: id }, { $set: { name: name} })
        return {isSuccess: true, message: "Data succesfully updated in DB"}

    }
    catch(err){
        return {isSuccess: false, error: err.message}
    }
}

deleteUser = async(req)=>{
    try{
        let id = new ObjectId(req.body.id)
        client.connect();
        const collection = await client.db("test").collection("testuser");
        await collection.deleteOne({ _id: id });
        return {isSuccess: true, message: "User succesfully deleted from DB"}
    }
    catch(err){
        return {isSuccess: false, error: err.message}
    }
}


module.exports = {addUser, deleteUser, updateUser, findUsers}
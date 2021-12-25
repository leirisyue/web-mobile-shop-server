require('dotenv').config();
const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;

module.exports.DBConnection = async() => {
    try {
        let client = await MongoClient.connect(process.env.DB_HOST);
        return client;
    } catch (err) {
        return console.log('MongoDB Connection Error!', err.message)
    }
}

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://user1:user123@cluster0.fidj8.mongodb.net/javaScriptThuy?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
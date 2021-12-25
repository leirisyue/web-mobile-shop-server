let DBcon = require("./connection");

module.exports.getAllCollection = async(collectionName, condition = {}) => {
    try {
        var client = await DBcon.DBConnection();
        var db = await client.db(process.env.DB_NAME);
        var result = await db.collection(collectionName).find(condition).toArray()
        return result;
    } catch (err) {
        return console.log('Collecttion Connection Error!', err.message)
    } finally {
        client.close();
    }
}

module.exports.getOneCollection = async(collectionName, condition = {}) => {
    try {
        var client = await DBcon.DBConnection();
        var db = await client.db(process.env.DB_NAME);
        var result = await db.collection(collectionName).findOne(condition)
        return result;
    } catch (err) {
        return console.log('Collecttion Connection Error!', err.message)
    } finally {
        client.close();
    }
}

module.exports.insertOne = async(collectionName, objNew) => {
    try {
        var client = await DBcon.DBConnection();
        var db = await client.db(process.env.DB_NAME);
        var result = await db.collection(collectionName).insertOne(objNew);
        return (result) ? 1 : 0;

    } catch (err) {
        return console.log('Collecttion Connection Error!', err.message)
    } finally {
        client.close();
    }
}

module.exports.updateOne = async(collectionName, condition, objUpdate) => {
    try {
        var client = await DBcon.DBConnection();
        var db = await client.db(process.env.DB_NAME);
        var result = await db.collection(collectionName).updateOne(condition, objUpdate);
        return result.modifiedCount;

    } catch (err) {
        return console.log('Collecttion Connection Error!', err.message)
    } finally {
        client.close();
    }
}
module.exports.deleteOne = async(collectionName, condition) => {
    try {
        var client = await DBcon.DBConnection();
        var db = await client.db(process.env.DB_NAME);
        var result = await db.collection(collectionName).deleteOne(condition);
        return result.deletedCount;

    } catch (err) {
        return console.log('Collecttion Connection Error!', err.message)
    } finally {
        client.close();
    }
}
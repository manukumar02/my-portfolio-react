const mongoose = require('mongoose');
const colors = require('colors');

const uri = `mongodb://manu:root@cluster0-shard-00-00.degeo.mongodb.net:27017,cluster0-shard-00-01.degeo.mongodb.net:27017,cluster0-shard-00-02.degeo.mongodb.net:27017/proshop?ssl=true&replicaSet=atlas-l0d92b-shard-0&authSource=admin&retryWrites=true&w=majority`
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit();
  }
}

module.exports = connectDB;
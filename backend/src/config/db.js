const mongoose = require("mongoose");
let main = async () => {
    await mongoose.connect(process.env.MONGO_URL, { maxPoolSize: 10, serverSelectionTimeoutMS: 5000 });
}

module.exports = main;
import mongoose from "mongoose";

// async function connectDatabase() {
//     mongoose.connect(process.env.DB_CONNECTION_STRING);∏
//     return mongoose.connection;
// }

mongoose.connect(process.env.DB_CONNECTION_STRING);

let db = mongoose.connection;

export default db;


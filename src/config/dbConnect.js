import mongoose, { mongo } from "mongoose";

async function connectDatabase() {
    mongoose.connect ("mongodb+srv://admin:Pedro_Henrique%401@cluster0.h4fbi.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}

export default connectDatabase;

//mongodb+srv://admin:<password>@cluster0.h4fbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
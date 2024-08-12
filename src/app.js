import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
    console.error( "Erro de Conexão", error);
});

conexao.once("open", ()=> {
    console.log("Conexão feita com o banco com sucesso!");
});

const app = express();
routes(app);

export default app;


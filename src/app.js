import express from "express";
import connectDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
    console.error( "Erro de Conexão", error);
});

conexao.once("open", ()=> {
    console.log("Conexão feita com o banco com sucesso!");
});

const app = express();
app.use(express.json());


app.get("/", (req, res)=> {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res)=>  {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});


app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;

    const livro = livros[index];

    res.status(200).json(livro);
});

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso.');
});



export default app;


import express from "express";
import connectDatabase from "./config/dbConnect.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
    console.error( "Erro de Conexão", error);
});

conexao.once("open", ()=> {
    console.log("Conexão feita com o banco com sucesso!");
});

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    },
];

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res)=> {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res)=> {
    res.status(200).json(livros);
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

//mongodb+srv://admin:<password>@cluster0.h4fbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

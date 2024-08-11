import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
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
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})


export default app;
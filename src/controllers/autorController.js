import { autor } from "../models/Autor.js";

class AutorController {
    static async listarAutores(req, res) {
        try {
          const listaAutores = await autor.find({});
          res.status(200).json(listaAutores);
        } catch (erro) {
          res
            .status(500)
            .json({ message: `${erro.message} - falha na requisição` });
        }
      }

      static async cadastrarAutor(req, res){
        try {
            const novoAutor = await autor.create(req.body);

            console.log(req.body);

            res.status(201).json({
                message: "criado com sucesso", livro: novoAutor
            });
        } catch (erro) {
            res
            .status(500)
            .json({ message: `${erro.message} - falha ao cadastrar autor` });
            
        }
      }

      static async listarAutorPorId (req, res) {
        try {
          const id = req.params.id;
          const autorEncontrado = await autor.findById(id);
          res.status(200).json(autorEncontrado);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
        }
      };

      static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor atualizado"});
            
        } catch (erro) {
            res
            .status(500)
            .json({ message: `${erro.message} - falha na atualização do autor` });
            
        }
      }

      static async excluirAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor excluído"});
            
        } catch (erro) {
            res
            .status(500)
            .json({ message: `${erro.message} - falha na exclusão do autor` });
            
        }
      }

};

export default AutorController;
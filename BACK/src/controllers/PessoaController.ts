import { request, Request, Response } from "express";
import PessoaSchema from "../models/PessoaSchema";

class PessoaController{

    async cadastrar(request: Request, response: Response) {
        try {
            const { nome, cpf, idade} = request.body;
            const pessoa = await PessoaSchema.findOne({ cpf: cpf});
            if(pessoa == null){
                const novaPessoa = await PessoaSchema.create(request.body);
                response.status(201).json(novaPessoa);
            }else{
                response.status(400).json({
                    data: pessoa,
                    error: false,
                    msg: "CPF já cadastrado"
                });
            }
        } catch (error) {
          response.status(400).json({
            data: error,
            error: true,
            msg: "Não foi possível adicionar a pessoa"
          });
        }
    }

    async listar(request: Request, response: Response) {
        try{
          const pessoas = await PessoaSchema.find();
          response.status(200).json(pessoas);
        } catch(error){
          response.status(400).json({
            data: error,
            error: true,
            msg: "Não foi possível listar as pessoas"
          });
        }
    }

}

export { PessoaController };
import { Endereco } from "./endereco";

export class Pessoa {
    _id: string;
    nome: string;
    dataNascimento: string;
    genero: string;
    rg: string;
    cpf: number;
    endereco: Endereco;
}
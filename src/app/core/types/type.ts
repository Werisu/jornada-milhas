export interface Promocao {
  id: number;
  destino: string;
  imagem: string;
  preco: number;
}

export type UnidadeFederativa = {
  id: number;
  nome: string;
  sigla: string;
};

export type Depoimento = {
  id: number;
  texto: string;
  autor: string;
  avatar: string;
};

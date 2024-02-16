export interface IProduto{
    id: number;
    nome: String;
    description: String;
    price: number;
    image: String[];
    complementos: String[];
    complementosPrice: Number[];
    estoque: number;
}

export interface IProdutoCarrinho extends IProduto{
    quantidadeNoCarrinho:number;
}

export const produtos = [
    {id:1,nome:"Brigadeiro",description:"Unidade de 10g, 15g, 18g ou 22g",price:1.80, image:["./assets/unidade1.jpg","./assets/unidade2.jpg","./assets/unidade3.jpg"], complementos:[],complementosPrice:[],estoque:1},
    {id:2,nome:"Caixa com 3 brigadeiros",description:"Unidades de 15g, 18g ou 22g",price:8.70, image:["./assets/caixa3.jpg"], complementos:[],complementosPrice:[],estoque:1},
    {id:3,nome:"Caixa com 6 brigadeiros",description:"Unidades de 15g, 18g ou 22g",price:14.90, image:["./assets/caixa6.jpg"], complementos:[],complementosPrice:[],estoque:1},
    {id:4,nome:"Caixa para presentes com 5 brigadeiros",description:"Unidades de 18g ou 22g",price:22.80, image:["./assets/caixa5.jpg"], complementos:[],complementosPrice:[],estoque:1},
    {id:5,nome:"Caixa para presentes com 10 brigadeiros",description:"Unidade de 18g ou 22g",price:37.80, image:["./assets/caixacoracao10.jpg"], complementos:[],complementosPrice:[],estoque:1}
]
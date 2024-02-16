import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[]=[];

  constructor() { }

  getCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  saveCarrinho(){
    localStorage.setItem("carrinho",JSON.stringify(this.itens)) 
  }

  clearCarrinho(){
    this.itens=[];
    localStorage.removeItem("carrinho");
  }

  addToCarrinho(newItem:IProdutoCarrinho){
    this.itens.push(newItem);
    this.saveCarrinho();
  }

  removeItemFromCarrinho(indexCarrinho:number){
    this.itens = this.itens.filter(item => this.itens.indexOf(item) != indexCarrinho);
    this.saveCarrinho();
  }
}

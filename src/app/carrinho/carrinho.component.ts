import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  itensNoCarrinho:IProdutoCarrinho[]=[];

  constructor(
    private carrinhoService:CarrinhoService,
    private route: Router
    ){
    }

    ngOnInit(){
      this.itensNoCarrinho = this.carrinhoService.getCarrinho();
    }

    getcartTotal() {
      var total:number=0;
      for (let index = 0; index < this.itensNoCarrinho.length; index++) {
        total += this.itensNoCarrinho[index].price*this.itensNoCarrinho[index].quantidadeNoCarrinho;
      }
      return total;
    }

    buyCart() {
        alert("Os itens foram comprados");
        this.carrinhoService.clearCarrinho();
        this.route.navigate(["produtos"]);
      }

    removeItem(indexCarrinho:number) {
      this.carrinhoService.removeItemFromCarrinho(indexCarrinho);
      this.itensNoCarrinho = this.carrinhoService.getCarrinho();
      }

    clearCart() {
      this.carrinhoService.clearCarrinho();
      this.itensNoCarrinho = [];
      }
}

import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';
import { last } from 'rxjs';


@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrl: './detalhes-produtos.component.css'
})
export class DetalhesProdutosComponent implements OnInit{
  produto: IProduto| undefined;
  quantidade = 1;

  constructor(
    private produtosService:ProdutosService,
    private route: ActivatedRoute,
    private snackBarService: NotificacaoService,
    private carrinhoService:CarrinhoService
    ){
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId)
    /*throw new Error('Method not implemented.');*/
  }

  notificarAddCart(){
    this.snackBarService.notificar('Produto '+ this.produto?.nome +' adicionado ao carrinho');
  }

  adicionarAoCarrinho(){
    this.notificarAddCart();
    const item: IProdutoCarrinho = {
      ...this.produto!,/* o simbolo ! indica para variáveis indefinidas que a variavel existe na hr de utilização*/
      quantidadeNoCarrinho:this.quantidade
    };
    this.carrinhoService.addToCarrinho(item);
  }
}

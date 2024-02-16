import { Component } from '@angular/core';
import { IProduto } from './produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: IProduto[] | undefined;
  /**
   * dots_quantity
   */
  constructor(
    private productosService: ProdutosService,
    private route:ActivatedRoute
    ){
  }

  ngOnInit(): void{
    const produtos = this.productosService.getAll();
    this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get("descricao")?.toLowerCase();

      if (descricao) { /* if decricao não está vazio*/
        this.produtos = produtos.filter(produto => 
          produto.description.toLowerCase().includes(descricao)
          );
          return;
      }
      this.produtos=produtos;
    });
  }

  
}

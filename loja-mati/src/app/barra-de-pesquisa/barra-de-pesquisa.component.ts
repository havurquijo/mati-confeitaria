import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrl: './barra-de-pesquisa.component.css'
})
export class BarraDePesquisaComponent {
  descricao: String[]=[];

  constructor(
    private router:Router
  ){

  }
  pesquisar() {
    if (this.descricao) {/* se não está vazio descrição que vem do ngModel */
      this.router.navigate(["produtos"],{queryParams:{descricao: this.descricao}});/*passando o parámetro de descricao que contem o valor de this.descricao */
      return;
    }
    this.router.navigate(["produtos"]);

  }

}

import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cart_products = 0;
  constructor(public carrinhoService: CarrinhoService){
    }

    ngOnInit(){
    }

}

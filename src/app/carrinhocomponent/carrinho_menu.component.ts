import { Title } from '@angular/platform-browser';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoService } from '../services/produto.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'carrinhomenu',
    templateUrl: 'carrinho_menu.component.html'
})
export class CarrinhoMenuComponent implements OnInit {

    contador = 0;

    constructor(
        private _produtoService: ProdutoService,
        private _carrinhoService: CarrinhoService,
        private title : Title
    ) {
        _carrinhoService.itemAdded$.subscribe(() => this.aumentaUm());
        _carrinhoService.itemRemoved$.subscribe(() => this.diminuiUm());
        this.contador = _carrinhoService.getProdutosCarrinho().length;
    }

    public diminuiUm() {
        let cont = this._carrinhoService.getProdutosCarrinho().length;
        this.contador = cont;
    }

    public aumentaUm() {
        let cont = this._carrinhoService.getProdutosCarrinho().length;
        this.contador = cont;
    }

    ngOnInit() { 
        this.title.setTitle("Carrinho de compras");
    }
}
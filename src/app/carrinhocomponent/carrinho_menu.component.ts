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
        private _carrinhoService: CarrinhoService
    ) {
        _carrinhoService.itemAdded$.subscribe(() => this.aumentaUm());
        _carrinhoService.itemRemoved$.subscribe(() => this.diminuiUm());
        this.contador = _carrinhoService.getProdutosCarrinho().length;
    }

    public diminuiUm() {
        console.log("diminuiUm");
        let cont = this._carrinhoService.getProdutosCarrinho().length;
        console.log("diminuiUm" + cont);
        this.contador = cont;
    }

    public aumentaUm() {
        console.log("diminuiUm");
        let cont = this._carrinhoService.getProdutosCarrinho().length;
        console.log("aumentaUm" + cont);
        this.contador = cont;
    }

    ngOnInit() { }
}
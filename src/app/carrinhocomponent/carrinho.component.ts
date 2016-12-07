import { Title } from '@angular/platform-browser';
import { Produto } from '../models/produto.model';
import { CarrinhoService } from '../services/carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'carrinho',
    templateUrl: 'carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

    private itensCarrinho: Array<Produto>;

    constructor(private _carrinhoService: CarrinhoService, private _title : Title) {
        this.itensCarrinho = _carrinhoService.getProdutosCarrinho();
    }

    public remover(produto: Produto) {
        this._carrinhoService.removeProduto(produto);
    }

    ngOnInit() {
        this._title.setTitle("Carrinho de compras");

    }
}
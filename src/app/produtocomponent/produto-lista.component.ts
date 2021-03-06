import { Title } from '@angular/platform-browser';
import { CarrinhoService } from '../services/carrinho.service';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'produto-lista',
    templateUrl: 'produto-lista.component.html'
})
export class ProdutoListaComponent implements OnInit {

    produtos: Array<Produto>;
    q = "";

    constructor(private _produtoService: ProdutoService,
        private _carrinhoService: CarrinhoService,
        private _title: Title) {
        this.produtos = _produtoService.getProdutos();
    }

    public onItemAdded(item: any): any {
        this.produtos = this._produtoService.getProdutos();
    }

    public comprar(produto: Produto) {
        this._carrinhoService.addProduto(produto);
    }

    ngOnInit() {
        this._title.setTitle("Lista de produtos");
    }
}
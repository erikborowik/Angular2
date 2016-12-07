import { Title } from '@angular/platform-browser';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'produto-cadastro',
    templateUrl: 'produto-cadastro.component.html'
})
export class ProdutoCadastroComponent implements OnInit {
    constructor(private _produtoService: ProdutoService, private title : Title) {

    }

    adicionarProduto(titulo: string, preco: number, desc: string, imagem: string) {
        let produto = new Produto(titulo, preco, desc);
        this._produtoService.adicionarProduto(produto);
    }

    ngOnInit() {
        this.title.setTitle("Cadastro de produto");
    }
}
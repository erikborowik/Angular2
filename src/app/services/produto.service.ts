import { Produto } from '../models/produto.model';
import { Injectable, EventEmitter } from '@angular/core'

export class ProdutoService {
    produtosTable = "produtos";
    public itemAdded$: EventEmitter<any>;

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }

    public adicionarProduto(produto : Produto): any {
        console.log("add produto");
        let id: number = 1;
        id = parseInt(localStorage.getItem("id")) || 1;

        let produtos = this.getListaProdutos();

        produto.id = id.toString();
        produtos.push(produto);
        localStorage.setItem("id", (id + 1).toString());

        localStorage.setItem(this.produtosTable, JSON.stringify(produtos));
        this.itemAdded$.emit([produto, "Produto cadastrado com sucesso"]);

    }

    public getProdutos(): Array<Produto> {
        return this.getListaProdutos();
    }


    private getListaProdutos(): Array<Produto> {
        //localStorage.getItem() -> Recupera um item do localStorage
        let produtos_storage: string = localStorage.getItem(this.produtosTable) || "[]";
        //JSON.parse() -> transforma uma string Json para um obj Javascript
        let produtos: Array<Produto> = JSON.parse(produtos_storage);
        return produtos;
    }



}
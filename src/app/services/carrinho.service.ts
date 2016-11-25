import { Produto } from '../models/produto.model';
import { Injectable, EventEmitter } from '@angular/core'

export class CarrinhoService {
    public itemAdded$: EventEmitter<any>;
    public itemRemoved$: EventEmitter<any>;
    private carrinhoTable : string = 'carrinho';

    constructor() {
        this.itemAdded$ = new EventEmitter();
        this.itemRemoved$ = new EventEmitter();
    }

    public addProduto(produto : Produto){
        let itensCarrinho = this.getItensCarrinhoStorage();
        itensCarrinho.push(produto);
        localStorage.setItem(this.carrinhoTable, JSON.stringify(itensCarrinho));
        this.itemAdded$.emit([produto, "Produto adicionado no carrinho"]);
        
    }

    public removeProduto(produto : Produto){
        this.itemRemoved$.emit([produto, "Produto removido com sucesso"]);
    }

    public getProdutosCarrinho(): Array<Produto>{
        return this.getItensCarrinhoStorage();
    }

     private getItensCarrinhoStorage(): Array<Produto> {
        //localStorage.getItem() -> Recupera um item do localStorage
        let produtos_storage: string = localStorage.getItem(this.carrinhoTable) || "[]";
        //JSON.parse() -> transforma uma string Json para um obj Javascript
        let produtos: Array<Produto> = JSON.parse(produtos_storage);
        return produtos;
    }



}
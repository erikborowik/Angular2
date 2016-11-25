import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoService } from '../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mensagem',
    templateUrl: 'mensagem.component.html'
})
export class MensagemComponent implements OnInit {
    mensagem: string = '';

    constructor(
        private _produtoService: ProdutoService,
        private _carrinhoService: CarrinhoService) {
        _produtoService.itemAdded$.subscribe((data: Array<any>) => this.mostraMensagem(data));
        _carrinhoService.itemAdded$.subscribe((data: Array<any>) => this.mostraMensagem(data));
        _carrinhoService.itemRemoved$.subscribe((data: Array<any>) => this.mostraMensagem(data));
    }

    mostraMensagem(mensagem: Array<any>) {
        this.mensagem = mensagem[1];
    }

    ngOnInit() { }

}
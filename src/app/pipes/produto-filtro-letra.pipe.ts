import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroletra'
})

export class FiltroLetraPipe implements PipeTransform {
    transform(produtos: any, arg: any): any {
        return produtos.filter((produto:any)=>produto.nome.indexOf(arg)>-1);
    }
}
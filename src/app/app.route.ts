import { CarrinhoComponent } from './carrinhocomponent/carrinho.component';
import { ProdutoCadastroComponent } from './produtocomponent/produto-cadastro.component';
import { ProdutoListaComponent } from './produtocomponent/produto-lista.component';
import { LoginComponent } from './logincomponent/login.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: 'carrinho', component:  CarrinhoComponent},
    { path: 'produtos', component:  ProdutoListaComponent},
    { path: 'produto_cadastro', component:  ProdutoCadastroComponent},
    { path: 'login', component:  LoginComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
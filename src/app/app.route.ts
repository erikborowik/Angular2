import { AppComponent } from './';
import { AuthGuard } from './shared/auth.guard';
import { CarrinhoComponent } from './carrinhocomponent/carrinho.component';
import { ProdutoCadastroComponent } from './produtocomponent/produto-cadastro.component';
import { ProdutoListaComponent } from './produtocomponent/produto-lista.component';
import { LoginComponent } from './logincomponent/login.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthGuard] },
    { path: 'produtos', component: ProdutoListaComponent, canActivate: [AuthGuard] },
    { path: 'produto_cadastro', component: ProdutoCadastroComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: LoginComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
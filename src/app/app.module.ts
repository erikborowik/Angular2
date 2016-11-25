import { CarrinhoMenuComponent } from './carrinhocomponent/carrinho_menu.component';
import { MensagemComponent } from './mensagemComponent/mensagem.component';
import { routing } from './app.route';
import { FiltroLetraPipe } from './pipes/produto-filtro-letra.pipe';
import { SessionService } from './services/session.service';
import { ProdutoService } from './services/produto.service';
import { MessageService } from './services/message.service';
import { CarrinhoService } from './services/carrinho.service';
import { ProdutoListaComponent } from './produtocomponent/produto-lista.component';
import { ProdutoCadastroComponent } from './produtocomponent/produto-cadastro.component';
import { LoginComponent } from './logincomponent/login.component';
import { CarrinhoComponent } from './carrinhocomponent/carrinho.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    LoginComponent,
    ProdutoCadastroComponent,
    ProdutoListaComponent,
    FiltroLetraPipe,
    MensagemComponent,
    CarrinhoMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
  ],
  providers: [
    CarrinhoService, 
    MessageService, 
    ProdutoService,
    SessionService,
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

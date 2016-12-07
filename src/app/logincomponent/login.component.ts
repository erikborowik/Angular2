import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private auth : AuthService, private title : Title) { 

    }

    ngOnInit() { 
        this.title.setTitle("Login");
    }

    public logar(usuario : string, senha : string){
        console.log(usuario);
        console.log(senha);
        this.auth.autenticar(usuario,senha);
    }
}
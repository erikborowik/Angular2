import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private router: Router) {
        //console.log(router);
    }

    isAuthenticated(): boolean {
        var token = localStorage.getItem("token");
        /*
        for (let route of this.router.config) {

            if (route.canActivate) {//Tem AuthGuard
                console.log(route.path);//Rota
            }


        }*/
        return token != null;
    }

    autenticar(usuario: string, senha: string) {
        localStorage.setItem("token", "safasfasfas");


    }

}
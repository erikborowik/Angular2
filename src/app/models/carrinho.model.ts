import { Produto } from './produto.model';
import { Usuario } from './usuario.model';
export class Carrinho{

    private _usuario : Usuario;
    private _produtos: Array<Produto>;

	public get usuario(): Usuario {
		return this._usuario;
	}

	public set usuario(value: Usuario) {
		this._usuario = value;
	}
    
	public get produtos(): Array<Produto> {
		return this._produtos;
	}

	public set produtos(value: Array<Produto>) {
		this._produtos = value;
	}
    
    constructor(usuario : Usuario){
        this._usuario = usuario;
    }

}

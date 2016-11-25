export class Produto{

    private _id : string;
    private _nome: string;
    private _preco: number;
    private _descricao: string;

    constructor(nome: string, preco: number, descricao: string){
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
    }


	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public get preco(): number {
		return this._preco;
	}

	public set preco(value: number) {
		this._preco = value;
	}
     

	public get descricao(): string {
		return this._descricao;
	}

	public set descricao(value: string) {
		this._descricao = value;
	}

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

}
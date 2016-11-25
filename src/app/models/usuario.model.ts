export class Usuario{

    private _id: string;
    private _username: string;


	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public get username(): string {
		return this._username;
	}

	public set username(value: string) {
		this._username = value;
	}
    
    constructor(username: string){
		this._username = username;
	}

}

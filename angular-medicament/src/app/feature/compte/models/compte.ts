import { User } from "../../users/models/user";

export class Compte {
    private _id: number;
    private _email: string;
    private _password: string;
    private _users: User[];

    constructor(id: number, email: string, password: string, users: User[]) {
        this._id = id;
        this._email = email;
        this._password = password;
        this._users = users;
    }

    // Getter 
    get id () : number {
        return this._id;
    }

    // Setter
    set id (id:number) {
        this._id = id;
    }


    get email () : string {
        return this._email;
    }

    
}

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

    // Getter : qui permet de récupérer l'id d'un compte
    get id () : number {
        return this._id;
    }

    // Setter : qui permet de modifier l'id d'un compte
    // param : newId est la nouvelle valeur de l'id
    set id (newId:number) {
        this._id = newId;
    }

    // Getter : qui permet de récupérer l'email d'un compte
    get email () : string {
        return this._email;
    }

    // Setter : qui permet de modifier l'email d'un compte
    // param : newEmail est la nouvelle valeur de l'email
    set email (newEmail: string) {
        this._email = newEmail;
    }

    // Getter : qui permet de récupérer le mot de passe d'un compte
    get password () : string {
        return this._password;
    }

    // Setter : qui permet de modifier le mot de passe d'un compte
    // param : newPassword est la nouvelle valeur du mot de passe
    set password (newPassword) {
        this._password = newPassword;
    }

    // Getter : qui permet de récupérer la liste des utilisateurs d'un compte
    get users () : User[] {
        return this.users;
    }

    // Setter : qui permet de modifier la liste des utilisateurs d'un compte
    // param : newUsers est la nouvelles liste des utilisateurs
    set users (newUsers: User[]) {
        this._users = newUsers;
    }

}

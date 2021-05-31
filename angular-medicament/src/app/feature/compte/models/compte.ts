import { User } from "../../users/models/user";

/**
 * Class représentant le modèle d'un compte
 * @author fabien
 * @version 1.0
 */
export class Compte {
    private _id: number;
    private _email: string;
    private _password: string;
    private _users: User[];

    /**
     * @constructor
     * @param {number} id
     * @param {string} email 
     * @param {string} password 
     * @param {[User]} users 
     */
    constructor(id: number, email: string, password: string, users: User[]) {
        this._id = id;
        this._email = email;
        this._password = password;
        this._users = users;
    }

    /**
     * Get l'id d'un compte
     * @returns {number} : id
     * @public
     */
    public get id () : number {
        return this._id;
    }

    /**
     * Set l'id d'un compte
     * @param {number} newId
     * @public
     * l'utilisateur n'a pas accès à cette interface.
     */
    /*
    public set id (newId:number) {
        this._id = newId;
    }
    */

    /**
     * Get l'email d'un compte
     * @returns email
     * @public
     */
    public get email () : string {
        return this._email;
    }

    /**
     * Set l'email d'un compte
     * @param {string} newEmail
     * @public
     */
    public set email (newEmail : string) {
        this._email = newEmail;
    }

    /**
     * Get le mot de passe d'un compte
     * @returns {string} password
     * @public
     */
    public get password () : string {
        return this._password;
    }

    /**
     * Set le mot de passe d'un compte
     * @param {string} newPassword
     * @public
     */
    public set password (newPassword : string) {
        this._password = newPassword;
    }

    /**
     * Get la liste des utilisateurs d'un compte
     * @returns {[User]} users
     * @public
     */
    public get users () : User[] {
        return this._users;
    }

    /**
     * Set la liste des utilisateurs d'un compte
     * @param {[User]} newUsers
     * @public
     */
    public set users (newUsers: User[]) {
        this._users = newUsers;
    }

}

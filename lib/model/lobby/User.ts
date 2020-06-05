import { BaseModel } from "../BaseModel";
import Role from "./Role";

export = class User extends BaseModel {
    /**
     * ID
     */
    private _id: number;
    public set id(value: number) {
        this._id = value;
    }

    public get id() {
        return this._id;
    }

    /**
     * Login
     */
    private _login: string;
    public set login(value: string) {
        this._login = value;
    }

    public get login() {
        return this._login;
    }

    /**
     * Fuso Horário Local
     */
    private _localTimeZone: Date;
    public set localTimeZone(value: Date) {
        this._localTimeZone = value;
    }

    public get localTimeZone() {
        return this._localTimeZone;
    }

    /**
     * Papel Padrão Credencial
     */
    private _credentialStandardRole: Role;
    public set credentialStandardRole(value: Role) {
        this._credentialStandardRole = value;
    }

    public get credentialStandardRole() {
        return this._credentialStandardRole;
    }

}
import { BaseModel } from "../BaseModel";
import { DvrServerType } from "../../..";

export default class DvrServer extends BaseModel {
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
     * Nome do Servidor
     */
    private _name:string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

     /**
     * Tipo do Servidor DVR
     */
    private _dvrServerType:DvrServerType;
    public set dvrServerType(value: DvrServerType) {
        this._dvrServerType = value;
    }

    public get dvrServerType() {
        return this._dvrServerType;
    }

    /**
     * Usuário de Acesso
     */
    private _user:string;
    public set user(value: string) {
        this._user = value;
    }

    public get user() {
        return this._user;
    }

    /**
     * Senha de Acesso
     */
    private _password:string;
    public set password(value: string) {
        this._password = value;
    }

    public get password() {
        return this._password;
    }

    /**
     * Identificador de Rede
     */
    private _host:string;
    public set host(value: string) {
        this._host = value;
    }

    public get host() {
        return this._host;
    }

    /**
     * Porta de Comunicação
     */
    private _port:number
    public set port(value: number) {
        this._port = value;
    }

    public get port() {
        return this._port;
    }

    /**
     * Domínio de Rede
     */
    private _networkDomain:string;
    public set networkDomain(value: string) {
        this._networkDomain = value;
    }

    public get networkDomain() {
        return this._networkDomain;
    }

    /**
     * Identificador do Servidor
     */
    private _serverId:string;
    public set serverId(value: string) {
        this._serverId = value;
    }

    public get serverId() {
        return this._serverId;
    }

    /**
     * Prefixo da URL
     */
    private _urlPrefix:string;
    public set urlPrefix(value: string) {
        this._urlPrefix = value;
    }

    public get urlPrefix() {
        return this._urlPrefix;
    }
}
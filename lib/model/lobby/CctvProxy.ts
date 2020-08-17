import { BaseModel } from '../BaseModel';

export = class CctvProxy extends BaseModel {
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
     * Nome do Proxy CFTV
     */
    private _name: string;
    public set name(value: string) {
      this._name = value;
    }

    public get name() {
      return this._name;
    }

    /**
     * Host
     */
    private _host: string;
    public set host(value: string) {
      this._host = value;
    }

    public get host() {
      return this._host;
    }

    /**
     * Porta de Comunicação
     */
    private _port: number;
    public set port(value: number) {
      this._port = value;
    }

    public get port() {
      return this._port;
    }
}
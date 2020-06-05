import { BaseModel } from "../BaseModel"

export = class Procedure extends BaseModel {
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
     * Nome do procedimento
     */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
     * Descrição do procedimento
     */
    private _description: string;
    public set description(value: string) {
        this._description = value;
    }

    public get description() {
        return this._description;
    }

    /**
     * Validade do procedimento em dias
     */
    private _validityDays: number;
    public set validityDays(value: number) {
        this._validityDays = value;
    }

    public get validityDays() {
        return this._validityDays;
    }

    /**
     * Possui integração com GAS => default:false
     */
    private _integratedWithGAS: boolean;
    public set integratedWithGAS(value: boolean) {
        this._integratedWithGAS = value;
    }

    public get integratedWithGAS() {
        return this._integratedWithGAS;
    }
}
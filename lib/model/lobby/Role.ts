import { BaseModel } from "../BaseModel";

export = class Role extends BaseModel {
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
    * Nome
    */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
    * Papel Utilizado pelo Provisório
    */
    private _usedByProvisory: boolean;
    public set usedByProvisory(value: boolean) {
        this._usedByProvisory = value;
    }

    public get usedByProvisory() {
        return this._usedByProvisory;
    }

    /**
    * Papel que Recebe Visita
    */
    private _receiveVisit: boolean;
    public set receiveVisit(value: boolean) {
        this._receiveVisit = value;
    }

    public get receiveVisit() {
        return this._receiveVisit;
    }

}
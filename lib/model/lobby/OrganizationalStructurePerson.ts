import { BaseModel } from "../BaseModel";
import OrganizationalStructure from "./OrganizationalStructure";

export default class OrganizationalStructurePerson extends BaseModel {
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
     * Estrutura organizacional
     */
    private _organizationalStructure: OrganizationalStructure;
    public set organizationalStructure(value: OrganizationalStructure) {
        this._organizationalStructure = value;
    }

    public get organizationalStructure() {
        return this._organizationalStructure;
    }
}
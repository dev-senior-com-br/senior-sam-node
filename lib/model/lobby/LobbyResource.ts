import { BaseModel } from "../BaseModel";
import { VisitResource } from "../../..";

export default class LobbyResource extends BaseModel {
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
     * Nome do recurso
     */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
     * Tipo de Visita ligados ao Recurso
     */
    private _visitResources: VisitResource;
    public set visitResources(value: VisitResource) {
        this._visitResources = value;
    }

    public get visitResources() {
        return this._visitResources;
    }
}
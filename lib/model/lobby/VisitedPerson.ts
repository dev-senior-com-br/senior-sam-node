import { BaseModel } from "../BaseModel";
import { Scheduling } from "../../..";

export = class VisitedPerson extends BaseModel{
    /**
     * ID
     */
    private _id : number;
    public set id(value: number) {
        this._id = value;
    }

    public get id() {
        return this._id;
    }
    
    /**
     * Visitado
     */
    private _personId : number;
    public set personId(value: number) {
        this._personId = value;
    }

    public get personId() {
        return this._personId;
    }

    /**
     * Agendamento
     */
    private _scheduling : Scheduling;
    public set scheduling(value: Scheduling) {
        this._scheduling = value;
    }

    public get scheduling() {
        return this._scheduling;
    }
  
}
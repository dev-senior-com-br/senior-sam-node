import { BaseModel } from "../BaseModel";
import { Incident } from "../../..";

export default class IncidentViewed extends BaseModel {
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
     * Incidente
     */
    private _incident:Incident;
    public set incident(value: Incident) {
        this._incident = value;
    }
 
    public get incident() {
        return this._incident;
    }

    /**
     * Data de Visualização
     */
    private _viewedDate:Date;
    public set viewedDate(value: Date) {
        this._viewedDate = value;
    }
 
    public get viewedDate() {
        return this._viewedDate;
    }
}
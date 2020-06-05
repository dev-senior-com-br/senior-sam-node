import { BaseModel } from "../BaseModel";
import { StatusHistoric } from "../../..";

export = class PersonRoleSuspension extends BaseModel {
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
     * Data Início
     */
    private _startDate: Date;
    public set startDate(value: Date) {
        this._startDate = value;
    }

    public get startDate() {
        return this._startDate;
    }

    /**
     * Data Fim
     */
    private _endDate: Date;
    public set endDate(value: Date) {
        this._endDate = value;
    }

    public get endDate() {
        return this._endDate;
    }

    /**
     * Justificativa
     */
    private _justification: string;
    public set justification(value: string) {
        this._justification = value;
    }

    public get justification() {
        return this._justification;
    }

    /**
     * Status
     */
    private _status: StatusHistoric;
    public set status(value: StatusHistoric) {
        this._status = value;
    }

    public get status() {
        return this._status;
    }
}
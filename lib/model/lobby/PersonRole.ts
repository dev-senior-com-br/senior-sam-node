import { BaseModel } from "../BaseModel";
import { Role, StatusHistoric, List, PersonRoleSuspension } from "../../..";

export = class PersonRole extends BaseModel {
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
     * Papel
     */
    private _role: Role;
    public set role(value: Role) {
        this._role = value;
    }

    public get role() {
        return this._role;
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
     * Status
     */
    private _status: StatusHistoric;
    public set status(value: StatusHistoric) {
        this._status = value;
    }

    public get status() {
        return this._status;
    }

    /**
     * Suspensões de Papéis
     */
    private _personRoleSuspensions: List<PersonRoleSuspension>;
    public set personRoleSuspensions(value: List<PersonRoleSuspension>) {
        this._personRoleSuspensions = value;
    }

    public get personRoleSuspensions() {
        return this._personRoleSuspensions;
    }
}
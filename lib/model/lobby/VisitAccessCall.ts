import { BaseModel } from "../BaseModel";
import Person from "./Person";

export default class VisitAccessCall extends BaseModel {
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
  * Pessoa da Chamada
  */
    private _personCaller: Person;
    public set personCaller(value: Person) {
        this._personCaller = value;
    }

    public get personCaller() {
        return this._personCaller;
    }

    /**
     * Credencial Agendada
     */
    private _scheduledCredential: ScheduledCredential;
    public set scheduledCredential(value: ScheduledCredential) {
        this._scheduledCredential = value;
    }

    public get scheduledCredential() {
        return this._scheduledCredential;
    }
}
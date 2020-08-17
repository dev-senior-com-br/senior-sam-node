import { BaseModel } from '../BaseModel';
import Person from './Person';
import StatusHistoric from './portaria/StatusHistoric';

export = class PersonVehicle extends BaseModel {
  /**
     * ID
     */
    private _id:number;
    public set id(value: number) {
      this._id = value;
    }

    public get id() {
      return this._id;
    }

    /**
     * Pessoa
     */
    private _person:Person;
    public set person(value: Person) {
      this._person = value;
    }

    public get person() {
      return this._person;
    }

    /**
     * Data Início
     */
    private _startDate:Date;
    public set startDate(value: Date) {
      this._startDate = value;
    }

    public get startDate() {
      return this._startDate;
    }

    /**
     * Data Fim
     */
    private _endDate:Date;
    public set endDate(value: Date) {
      this._endDate = value;
    }

    public get endDate() {
      return this._endDate;
    }

    /**
     * Status
     */
    private _status:StatusHistoric;
    public set status(value: StatusHistoric) {
      this._status = value;
    }

    public get status() {
      return this._status;
    }

}
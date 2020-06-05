import { BaseModel } from "../BaseModel";
import { OffsetDaylightSavingType, Timezone } from "../../..";

export = class LocalTimezone extends BaseModel {

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
     * Nome do Local
     */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
     * Fuso horário
     */
    private _timezone: Timezone;
    public set timezone(value: Timezone) {
        this._timezone = value;
    }

    public get timezone() {
        return this.timezone;
    }

    /**
     * Horário de verão
     */
    private _daylightSaving: boolean;
    public set daylightSaving(value: boolean) {
        this._daylightSaving = value;
    }

    public get daylightSaving() {
        return this._daylightSaving;
    }

    /**
     * Tipo do horário de verão
     */
    private _offsetDaylightSaving: OffsetDaylightSavingType;
    public set offsetDaylightSaving(value: OffsetDaylightSavingType) {
        this._offsetDaylightSaving = value;
    }

    public get offsetDaylightSaving() {
        return this._offsetDaylightSaving;
    }

    /**
     * Data início do horário de verão
     */
    private _daylightSavingStartDate: Date;
    public set daylightSavingStartDate(value: Date) {
        this._daylightSavingStartDate = value;
    }

    public get daylightSavingStartDate() {
        return this._daylightSavingStartDate;
    }

    /**
     * Data fim do horário de verão
     */
    private  _daylightSavingFinishDate: Date;
    public set daylightSavingFinishDate(value: Date) {
        this._daylightSavingFinishDate = value;
    }
    
    public get daylightSavingFinishDate() {
        return this._daylightSavingFinishDate;
    }
}
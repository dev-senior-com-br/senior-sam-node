import { BaseModel } from "../BaseModel";

export default class InputMasking extends BaseModel {
    /**
     * ID
     */
    private _id: number;
    private set id(value: number) {
        this._id = value;
    }

    private get id() {
        return this._id;
    }

    /**
     * Hora Inicial
     */
    private _startHour: Date;
    private set startHour(value: Date) {
        this._startHour = value;
    }

    private get startHour() {
        return this._startHour;
    }

    /**
     * Hora Final
     */
    private _endHour: Date;
    private set endHour(value: Date) {
        this._endHour = value;
    }

    private get endHour() {
        return this._endHour;
    }

    /**
     * Dias da Semana
     */
    private _businessDays: boolean;
    private set businessDays(value: boolean) {
        this._businessDays = value;
    }

    private get businessDays() {
        return this._businessDays;
    }

    /**
     * Sábado
     */
    private _saturday: boolean;
    private set saturday(value: boolean) {
        this._saturday = value;
    }

    private get saturday() {
        return this._saturday;
    }

    /**
     * Domingo
     */
    private _sunday: boolean;
    private set sunday(value: boolean) {
        this._sunday = value;
    }

    private get sunday() {
        return this._sunday;
    }

    /**
     * Feriado
     */
    private _holiday: boolean;
    private set holiday(value: boolean) {
        this._holiday = value;
    }

    private get holiday() {
        return this._holiday;
    }

}
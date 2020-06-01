import { BaseModel } from "../BaseModel";
import { Scheduling, VisitorSituation, VisitorCompany } from "../../..";

export default class Visitor extends BaseModel {
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
     * Visitante
     */
    private _personId: number;
    public set personId(value: number) {
        this._personId = value;
    }

    public get personId() {
        return this._personId;
    }

    /**
     * Agendamento
     */
    private _scheduling: Scheduling;
    public set scheduling(value: Scheduling) {
        this._scheduling = value;
    }

    public get scheduling() {
        return this._scheduling;
    }

    /**
     * Situação do visitante
     */
    private _visitorSituation: VisitorSituation;
    public set visitorSituation(value: VisitorSituation) {
        this._visitorSituation = value;
    }

    public get visitorSituation() {
        return this._visitorSituation;
    }

    /**
     * Empresa do visitante
     */
    private _company: VisitorCompany;
    public set company(value: VisitorCompany) {
        this._company = value;
    }

    public get company() {
        return this._company;
    }

    /**
     * Código localizador
     */
    private _locator: string;
    public set locator(value: string) {
        this._locator = value;
    }

    public get locator() {
        return this._locator;
    }

    /**
     * Data do Checkin
     */
    private _checkinDate: Date;
    public set checkinDate(value: Date) {
        this._checkinDate = value;
    }

    public get checkinDate() {
        return this._checkinDate;
    }

    /**
     * Data de entrada
     */
    private _entranceDate: Date;
    public set entranceDate(value: Date) {
        this._entranceDate = value;
    }

    public get entranceDate() {
        return this._entranceDate;
    }

    /**
     * Data do checkout
     */
    private _checkoutDate: Date;
    public set checkoutDate(value: Date) {
        this._checkoutDate = value;
    }

    public get checkoutDate() {
        return this._checkoutDate;
    }
}
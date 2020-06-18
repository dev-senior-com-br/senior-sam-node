import { BaseModel } from "../BaseModel";
import Visitor from "./Visitor";
import List from "../List";
import { VisitType, PhysicalLocation, VisitedPerson, SchedulingResource, VisitSituation } from "../../..";
import LobbyEntity from "./LobbyEntity";

export = class Scheduling extends BaseModel {
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
     * Título da visita
     */
    private _title : string;
    public set title(value: string) {
        this._title = value;
    }

    public get title() {
        return this._title;
    }

    /**
     * Data prevista de início do agendamento
     */
    private _expectedStartDate : Date;
    public set expectedStartDate(value: Date) {
        this._expectedStartDate = value;
    }

    public get expectedStartDate() {
        return this._expectedStartDate;
    }

    /**
     * Data prevista de fim do agendamento
     */
    private _expectedEndDate : Date;
    public set expectedEndDate(value: Date) {
        this._expectedEndDate = value;
    }

    public get expectedEndDate() {
        return this._expectedEndDate;
    }

    /**
     * Tipo de visita
     */
    private _visitType : VisitType;
    public set visitType(value: VisitType) {
        this._visitType = value;
    }

    public get visitType() {
        return this._visitType;
    }

    /**
     * Local físico da visita
     */
    private _physicalLocation : PhysicalLocation;
    public set physicalLocation(value: PhysicalLocation) {
        this._physicalLocation = value;
    }

    public get physicalLocation() {
        return this._physicalLocation;
    }

    /**
     * Lista de visitados
     */
    private _visitedPeople : VisitedPerson;
    public set visitedPeople(value: VisitedPerson) {
        this._visitedPeople = value;
    }

    public get visitedPeople() {
        return this._visitedPeople;
    }

    /**
     * Lista de visitantes
     */
    private _visitors : List<Visitor>;
    public set visitors(value: List<Visitor>) {
        this._visitors = value;
    }

    public get visitors() {
        return this._visitors;
    }

    /**
     * Recursos da visita
     */
    private _schedulingResources : SchedulingResource;
    public set schedulingResources(value: SchedulingResource) {
        this._schedulingResources = value;
    }

    public get schedulingResources() {
        return this._schedulingResources;
    }

    /**
     * Situação da visita
     */
    private _visitSituation : VisitSituation;
    public set visitSituation(value: VisitSituation) {
        this._visitSituation = value;
    }

    public get visitSituation() {
        return this._visitSituation;
    }

    /**
     * Portaria
     */
    private _lobby : LobbyEntity;
    public set lobby(value: LobbyEntity) {
        this._lobby = value;
    }

    public get lobby() {
        return this._lobby;
    }

}
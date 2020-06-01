import { BaseModel } from "../BaseModel";
import { PhysicalLocation, Device, List, IncidentPerson, IncidentProcedure, IncidentPriority, IncidentStatus, IncidentType } from "../../..";

export default class Incident extends BaseModel {
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
      * Descrição
      */
    private _description: string;
    public set description(value: string) {
        this._description = value;
    }
 
    public get description() {
        return this._description;
    }
 
    /**
     * Local Físico
     */
    private _physicalLocation: PhysicalLocation;
    public set physicalLocation(value: PhysicalLocation) {
        this._physicalLocation = value;
    }
 
    public get physicalLocation() {
        return this._physicalLocation;
    }
 
    /**
     * Tipo de Incidente
     */
    private _incidentType: IncidentType;
    public set incidentType(value: IncidentType) {
        this._incidentType = value;
    }
 
    public get incidentType() {
        return this._incidentType;
    }
 
    /**
     * Prioridade do Incidente
     */
    private _incidentPriority: IncidentPriority;
    public set incidentPriority(value: IncidentPriority) {
        this._incidentPriority = value;
    }
 
    public get incidentPriority() {
        return this._incidentPriority;
    }
 
    /**
     * Usuário
     */
    private _userId: number;
    public set userId(value: number) {
        this._userId = value;
    }
 
    public get userId() {
        return this._userId;
    }
 
    /**
     * Dispositivo
     */
    private _device: Device;
    public set device(value: Device) {
        this._device = value;
    }
 
    public get device() {
        return this._device;
    }
 
    /**
     * Status do Incidente
     */
    private _status: IncidentStatus;
    public set status(value: IncidentStatus) {
        this._status = value;
    }
 
    public get status() {
        return this._status;
    }
 
    /**
     * Data da Criação
     */
    private _creationDate: Date;
    public set creationDate(value: Date) {
        this._creationDate = value;
    }
 
    public get creationDate() {
        return this._creationDate;
    }
 
    /**
     * Data
     */
    private _incidentDate: Date;
    public set incidentDate(value: Date) {
        this._incidentDate = value;
    }
 
    public get incidentDate() {
        return this._incidentDate;
    }
 
    /**
     * Timezone offset
     */
    private _timezoneOffset: number;
    public set timezoneOffset(value: number) {
        this._timezoneOffset = value;
    }
 
    public get timezoneOffset() {
        return this._timezoneOffset;
    }

    /**
     * Tramites
     */
    private _procedures: List<IncidentProcedure>;
    public set procedures(value: List<IncidentProcedure>) {
        this._procedures = value;
    }
 
    public get procedures() {
        return this._procedures;
    }

    /**
     * Pessoas
     */
    private _people: List<IncidentPerson>;
    public set people(value: List<IncidentPerson>) {
        this._people = value;
    }
 
    public get people() {
        return this._people;
    }
}
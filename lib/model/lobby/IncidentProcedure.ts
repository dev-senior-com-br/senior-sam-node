import { BaseModel } from "../BaseModel";
import { IncidentAttachment, IncidentPriority, IncidentStatus, IncidentProcedureType } from "../../..";

export default class IncidentProcedure extends BaseModel {
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
     * Usuário
     */
    private _user: number;
    public set user(value: number) {
        this._user = value;
    }

    public get user() {
        return this._user;
    }

    /**
     * Data do trâmite
     */
    private _procedureDate: Date;
    public set procedureDate(value: Date) {
        this._procedureDate = value;
    }

    public get procedureDate() {
        return this._procedureDate;
    }

    /**
     * Tipo do trâmite
     */
    private _incidentProcedureType: IncidentProcedureType;
    public set incidentProcedureType(value: IncidentProcedureType) {
        this._incidentProcedureType = value;
    }

    public get incidentProcedureType() {
        return this._incidentProcedureType;
    }

    /**
     * Status anterior
     */
    private _previousStatus: IncidentStatus;
    public set previousStatus(value: IncidentStatus) {
        this._previousStatus = value;
    }

    public get previousStatus() {
        return this._previousStatus;
    }

    /**
     * Status novo
     */
    private _newStatus: IncidentStatus;
    public set newStatus(value: IncidentStatus) {
        this._newStatus = value;
    }

    public get newStatus() {
        return this._newStatus;
    }

    /**
     * Prioridade anterior
     */
    private _previousPriority: IncidentPriority;
    public set previousPriority(value: IncidentPriority) {
        this._previousPriority = value;
    }

    public get previousPriority() {
        return this._previousPriority;
    }

    /**
     * Prioridade nova
     */
    private _newPriority: IncidentPriority;
    public set newPriority(value: IncidentPriority) {
        this._newPriority = value;
    }

    public get newPriority() {
        return this._newPriority;
    }

    /**
     * Anexo do tramite
     */
    private _incidentAttachment: IncidentAttachment;
    public set incidentAttachment(value: IncidentAttachment) {
        this._incidentAttachment = value;
    }

    public get incidentAttachment() {
        return this._incidentAttachment;
    }
}
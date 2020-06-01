import { BaseModel } from "../BaseModel";
import { PhysicalLocation, VisitLimitControl, LobbyCredentialTechnology } from "../../..";

export default class LobbyEntity extends BaseModel {
   
    /**
     * ID
     */
    private _id :number;
    public set id(value: number) {
        this._id = value;
    }

    public get id() {
        return this._id;
    }  

    /**
     * Nome da portaria
     */
    private _name : string;
    public set name(value: string) {
        this._name = value;
    }

    public get_name() {
        return this._name;
    }      
    /**
     * Local físico
     */
    private _physicalLocation : PhysicalLocation;
    public set physicalLocation(value: PhysicalLocation) {
        this._physicalLocation = value;
    }

    public get physicalLocation() {
        return this._physicalLocation;
    }  
    /**
     * Validade da foto do colaborador em dias =>  minValue : 0
     */
    private _provisoryCardPhotoValidityInDays :number;
    public set provisoryCardPhotoValidityInDays(value: number) {
        this._provisoryCardPhotoValidityInDays = value;
    }

    public get provisoryCardPhotoValidityInDays() {
        return this._provisoryCardPhotoValidityInDays;
    }  

    /**
     * Validade da foto do visitante em dias => minValue : 0
     */
    private _scheduledVisitPhotoValidityInDays :number; 
    public set scheduledVisitPhotoValidityInDays(value: number) {
        this._scheduledVisitPhotoValidityInDays = value;
    }

    public get scheduledVisitPhotoValidityInDays() {
        return this._scheduledVisitPhotoValidityInDays;
    }      
    /**
     * Validade da credencial provisória em dias => minValue : 1
     */
    private _provisoryCredentialValidityInDays : number;
    public set provisoryCredentialValidityInDays(value: number) {
        this._provisoryCredentialValidityInDays = value;
    }

    public get provisoryCredentialValidityInDays() {
        return this._provisoryCredentialValidityInDays;
    }      
    /**
     * Validade da credencial de visitante em horas => minValue : 1
     */
    private _schedulingCredentialValidityInHours : number;
    public set schedulingCredentialValidityInHours(value: number) {
        this._schedulingCredentialValidityInHours = value;
    }

    public get schedulingCredentialValidityInHours() {
        return this._schedulingCredentialValidityInHours;
    }  

    /**
     * Tolerância no agendamento em minutos => minValue : 0
     */
    private _schedulingToleranceInMinutes :number; 
    public set schedulingToleranceInMinutes(value: number) {
        this._schedulingToleranceInMinutes = value;
    }

    public get schedulingToleranceInMinutes() {
        return this._schedulingToleranceInMinutes;
    }  

    /**
     * Limite mensal de credenciais provisórias => minValue : 0
     */
    private _provisoryCredentialsMonthlyLimit :number; 
    public set provisoryCredentialsMonthlyLimit(value: number) {
        this._provisoryCredentialsMonthlyLimit = value;
    }

    public get provisoryCredentialsMonthlyLimititor() {
        return this._provisoryCredentialsMonthlyLimit;
    }  

    /**
     * Estado da portaria
     */
    private _isActive: boolean;
    public set isActive(value: boolean) {
        this._isActive = value;
    }

    public get isActive() {
        return this._isActive;
    }  

    /**
     * Possui integração com GAS => ? default:false
     */
    private _integratedWithGAS: boolean;
    public set integratedWithGAS(value: boolean) {
        this._integratedWithGAS = value;
    }

    public get integratedWithGAS() {
        return this._integratedWithGAS;
    }  

    /**
     * Identificador do Relatório de Agendamento na Plataforma
     */
    private _schedulingReportId: string;
    public set schedulingReportId(value: string) {
        this._schedulingReportId = value;
    }

    public get schedulingReportId() {
        return this._schedulingReportId;
    }  

    /**
     * Utiliza credencial = > default: true;
     */
    private _usesCredential: boolean; 
    public set usesCredential(value: boolean) {
        this._usesCredential = value;
    }

    public get usesCredential() {
        return this._usesCredential;
    }  

    /**
     * Tecnologia disponível para credencial
     */
    private _lobbyCredentialTechnologies: LobbyCredentialTechnology;
    public set lobbyCredentialTechnologies(value: LobbyCredentialTechnology) {
        this._lobbyCredentialTechnologies = value;
    }

    public get lobbyCredentialTechnologies() {
        return this._lobbyCredentialTechnologies;
    }  

    /**
     * Controle de limite de visitas
     */
    private _visitLimitControl: VisitLimitControl;
    public set visitLimitControl(value: VisitLimitControl) {
        this._visitLimitControl = value;
    }

    public get visitLimitControl() {
        return this._visitLimitControl;
    }  

    /**
     * Limite de dias com visita por semana =>  minValue: 0 maxValue: 7
     */
    private _limitOfDaysWithVisitPerWeek : number;
    public set limitOfDaysWithVisitPerWeek(value: number) {
        this._limitOfDaysWithVisitPerWeek = value;
    }

    public get limitOfDaysWithVisitPerWeek() {
        return this._limitOfDaysWithVisitPerWeek;
    }      
}
import { BaseModel } from "../BaseModel";
import InformationCardCredentialRecord from "./InformationCardCredentialRecord";
import Visitor from "./Visitor";

export = class CreateCardProvisoryCredentialIn extends BaseModel {
    /**
     * Se deve suspender a credencial existente
     */
    private _isCheckedOverlap: boolean;
    public set isCheckedOverlap(value: boolean) {
        this._isCheckedOverlap = value;
    }

    public get isCheckedOverlap() {
        return this._isCheckedOverlap;
    }    
    
    /**
     * Lista de cartões de credenciais a serem cadastradas
    */
    private _cardCredentialList: InformationCardCredentialRecord;
    public set cardCredentialList(value: InformationCardCredentialRecord) {
        this._cardCredentialList = value;
    }

    public get cardCredentialList() {
        return this._cardCredentialList;
    }    
    
    /**
     * Id do motivo da credencial provisória, cadastro pela entidade provisoryCredentialReason. É utilizado apenas para consultas e estatísticas
     */
    private _provisoryCredentialReasonId: number;
    public set provisoryCredentialReasonId(value: number) {
        this._provisoryCredentialReasonId = value;
    }

    public get provisoryCredentialReasonId() {
        return this._provisoryCredentialReasonId;
    }    
    
    /**
     * A data de início da credencial
     */
    private _startDate: Date;
    public set startDate(value: Date) {
        this._startDate = value;
    }

    public get startDate() {
        return this._startDate;
    }    
    
    /**
     * A data de expiração da credencial
     */
    private _endDate: Date;
    public set endDate(value: Date) {
        this._endDate = value;
    }

    public get endDate() {
        return this._endDate;
    }    
    
    /**
     * O identificador da portaria virtual, cadastro pelo serviço virtualLobby
     */
    private _virtualLobbyId: number;
    public set virtualLobbyId(value: number) {
        this._virtualLobbyId = value;
    }

    public get virtualLobbyId() {
        return this._virtualLobbyId;
    }    
    
    /**
     * O identificador da portaria, cadastro pela entidade lobby
     */
    private _lobbyId: number;
    public set lobbyId(value: number) {
        this._lobbyId = value;
    }

    public get lobbyId() {
        return this._lobbyId;
    }    
    
    /**
     * O visitante que receberá a credencial
     */
    private _visitor: Visitor;
    public set visitor(value: Visitor) {
        this._visitor = value;
    }

    public get visitor() {
        return this._visitor;
    }    
    
	/**
     * O agendamento relacionado à credencial, id da entidade scheduling, apenas para visitas agendadas
     */
    private _schedulingId: number;
    public set schedulingId(value: number) {
        this._schedulingId = value;
    }

    public get schedulingId() {
        return this._schedulingId;
    }    
    
    /**
     * O papel da credencial que o visitante vai assumir, usado principalmente para visitantes sem cadastro prévio, cadastro em sam-aplicacao-backend/entities/role
     */
    private _roleId: number;
    public set roleId(value: number) {
        this._roleId = value;
    }

    public get roleId() {
        return this._roleId;
    }    

}
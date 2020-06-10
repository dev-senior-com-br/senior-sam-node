import { BaseModel } from "../BaseModel";
import InformationCardCredentialRecord from "./InformationCardCredentialRecord";
import BiometricManufacturer from "./portaria/BiometricManufacturer";
import List from "../List";

export = class BaseCreateProvisoryCredential extends BaseModel {
    
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
    private _cardCredentialList: List<InformationCardCredentialRecord>;

    public set cardCredentialList(value: List<InformationCardCredentialRecord>) {
        this._cardCredentialList = value;
    }

    public get cardCredentialList() {
        return this.cardCredentialList;
    }
    
    /**
     * Id do motivo da credencial provisória, cadastro pela entidade provisoryCredentialReason. É utilizado apenas para consultas e estatísticas
     */
    private _provisoryCredentialReasonId: number;

    public set provisoryCredentialReasonId(value: number) {
        this._provisoryCredentialReasonId = value;
    }

    public get provisoryCredentialReasonId(){
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
     * o tipo de tecnologia biométrica e o fabricante
     */
    private _biometricManufacturer: BiometricManufacturer;

    public set biometricManufacturer(value: BiometricManufacturer) {
        this._biometricManufacturer = value;
    }

    public get biometricManufacturer() {
        return this._biometricManufacturer;
    }

    /**
     * O identificador da biometria da pessoa
     */
    private _biometricId: number;
    public set biometricId(value: number) {
        this._biometricId = value;
    }

    public get biometricId() {
        return this._biometricId;
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

    constructor(isCheckedOverlap: boolean, cardCredentialList: List<InformationCardCredentialRecord>, endDate: Date){ 
        super();
        this.isCheckedOverlap = isCheckedOverlap;
        this.cardCredentialList = cardCredentialList;
        this.endDate = endDate;
    }

}
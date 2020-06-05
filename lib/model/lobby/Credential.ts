import { BaseModel } from "../BaseModel";
import LobbyEntity from "./LobbyEntity";
import { Scheduling, Role, List, InformationCardCredentialRecord, Group, AccessCall, Vehicle, StatusHistoric, Biometry, CredentialFormat, CredentialType, CredentialSituation, CredentialOwner, VirtualLobby } from "../../..";
import Person from "./Person";

export = class Credential extends BaseModel {
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
     * Pessoa
     */
    private _person: Person;
    public set person(value: Person) {
        this._person = value;
    }

    public get person() {
        return this._person;
    }

    /**
     * Veículo
     */
    private _vehicle: Vehicle;
    public set vehicle(value: Vehicle) {
        this._vehicle = value;
    }

    public get vehicle() {
        return this._vehicle;
    }

    /**
     * Proprietário da Credencial
     */
    private _credentialOwner: CredentialOwner;
    public set credentialOwner(value: CredentialOwner) {
        this._credentialOwner = value;
    }

    public get credentialOwner() {
        return this._credentialOwner;
    }

    /**
     * Data Início
     */
    private _startDate: Date;
    public set startDate(value: Date) {
        this._startDate = value;
    }

    public get startDate() {
        return this._startDate;
    }

    /**
     * Situação da Credencial
     */
    private _credentialSituation: CredentialSituation;
    public set credentialSituation(value: CredentialSituation) {
        this._credentialSituation = value;
    }

    public get credentialSituation() {
        return this._credentialSituation;
    }

    /**
     * Tipo da Credencial
     */
    private _credentialType: CredentialType;
    public set credentialType(value: CredentialType) {
        this._credentialType = value;
    }

    public get credentialType() {
        return this._credentialType;
    }

    /**
     * Formato da Credencial
     */
    private _credentialFormat: CredentialFormat;
    public set credentialFormat(value: CredentialFormat) {
        this._credentialFormat = value;
    }

    public get credentialFormat() {
        return this._credentialFormat;
    }

    /**
     * Biometria
     */
    private _biometry: Biometry;
    public set biometry(value: Biometry) {
        this._biometry = value;
    }

    public get biometry() {
        return this._biometry;
    }

    /**
     * Papel
     */
    private _role: Role;
    public set role(value: Role) {
        this._role = value;
    }

    public get role() {
        return this._role;
    }

    /**
     * Grupo
     */
    private _group: Group;
    public set group(value: Group) {
        this._group = value;
    }

    public get group() {
        return this._group;
    }

    /**
     * Data Fim
     */
    private _endDate: Date;
    public set endDate(value: Date) {
        this._endDate = value;
    }

    public get endDate() {
        return this._endDate;
    }

    /**
     * Pessoa Visitada
     */
    private _visitedPerson: Person;
    public set visitedPerson(value: Person) {
        this._visitedPerson = value;
    }

    public get visitedPerson() {
        return this._visitedPerson;
    }

    /**
     * Status
     */
    private _status: StatusHistoric;
    public set status(value: StatusHistoric) {
        this._status = value;
    }

    public get status() {
        return this._status;
    }

    /**
     * Credênciais de Cartão
     */
    private _cardCredentialList: List<InformationCardCredentialRecord>;
    public set cardCredentialList(value: List<InformationCardCredentialRecord>) {
        this._cardCredentialList = value;
    }

    public get cardCredentialList() {
        return this._cardCredentialList;
    }

    /**
     * Portaria Virtual
     */
    private _virtualLobby: VirtualLobby;
    public set virtualLobby(value: VirtualLobby) {
        this._virtualLobby = value;
    }

    public get virtualLobby() {
        return this._virtualLobby;
    }

    /**
     * ID do Motivo da Credencial Provisória
     */
    private _provisoryCredentialReasonId: number;
    public set provisoryCredentialReasonId(value: number) {
        this._provisoryCredentialReasonId = value;
    }

    public get provisoryCredentialReasonId() {
        return this._provisoryCredentialReasonId;
    }

    /**
     * Chamada de Acesso
     */
    private _accessCall: AccessCall;
    public set accessCall(value: AccessCall) {
        this._accessCall = value;
    }

    public get accessCall() {
        return this._accessCall;
    }

    /**
     * O identificador do agendamento
     */
    private _scheduling: Scheduling;
    public set scheduling(value: Scheduling) {
        this._scheduling = value;
    }

    public get scheduling() {
        return this._scheduling;
    }

    /**
     * Portaria
     */
    private _lobby: LobbyEntity;
    public set lobby(value: LobbyEntity) {
        this._lobby = value;
    }

    public get lobby() {
        return this._lobby;
    }

}
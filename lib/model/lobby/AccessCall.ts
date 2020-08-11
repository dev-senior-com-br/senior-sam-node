import { BaseModel } from '../BaseModel';
import ReaderDeviceAccessCall from './ReaderDeviceAccessCall';
import { VirtualLobby, VirtualLobbyMovementType, VirtualLobbyMovement, 
  InputDeviceAccessCall, VisitAccessCall, AccessCallStatus, AccessCallOrigin } from '../../..';

export = class AccessCall extends BaseModel {
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
     * Status da Chamada
     */
    private _accessCallStatus: AccessCallStatus;
    public set accessCallStatus(value: AccessCallStatus) {
      this._accessCallStatus = value;
    }

    public get accessCallStatusd() {
      return this._accessCallStatus;
    }

    /**
     * Origem da Chamada
     */
    private _accessCallOrigin: AccessCallOrigin;
    public set accessCallOrigin(value: AccessCallOrigin) {
      this._accessCallOrigin = value;
    }

    public get accessCallOrigin() {
      return this._accessCallOrigin;
    }

    /**
     * Nome usuário
     */
    private _userName: string;
    public set userName(value: string) {
      this._userName = value;
    }

    public get userName() {
      return this._userName;
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
     * Movimento da Portaria Virtual
     */
    private _virtualLobbyMovement: VirtualLobbyMovement;
    public set virtualLobbyMovement(value: VirtualLobbyMovement) {
      this._virtualLobbyMovement = value;
    }

    public get virtualLobbyMovement() {
      return this._virtualLobbyMovement;
    }

    /**
     * Tipo de Movimentação da Portaria Virtual
     */
    private _virtualLobbyMovementType: VirtualLobbyMovementType;
    public set virtualLobbyMovementType(value: VirtualLobbyMovementType) {
      this._virtualLobbyMovementType = value;
    }

    public get virtualLobbyMovementType() {
      return this._virtualLobbyMovementType;
    }

    /**
     * Visita da Chamada de Acesso
     */
    private _visitAccessCall: VisitAccessCall;
    public set visitAccessCall(value: VisitAccessCall) {
      this._visitAccessCall = value;
    }

    public get visitAccessCall() {
      return this._visitAccessCall;
    }

    /**
     * Dispositivo de Entrada da Chamada
     */
    private _inputDeviceAccessCall: InputDeviceAccessCall;
    public set inputDeviceAccessCall(value: InputDeviceAccessCall) {
      this._inputDeviceAccessCall = value;
    }

    public get inputDeviceAccessCall() {
      return this._inputDeviceAccessCall;
    }

    /**
     * Leitora da Chamada
     */
    private _readerDeviceAccessCall: ReaderDeviceAccessCall;
    public set readerDeviceAccessCall(value: ReaderDeviceAccessCall) {
      this._readerDeviceAccessCall = value;
    }

    public get readerDeviceAccessCall() {
      return this._readerDeviceAccessCall;
    }

}
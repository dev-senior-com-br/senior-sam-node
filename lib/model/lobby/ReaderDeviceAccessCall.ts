import { BaseModel } from '../BaseModel';
import { AccessCall, AccessEventType } from '../../..';
import ReaderDevice from './ReaderDevice';

export = class ReaderDeviceAccessCall extends BaseModel {
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
     * Leitora
     */
    private _readerDevice: ReaderDevice;
    public set readerDevice(value: ReaderDevice) {
      this._readerDevice = value;
    }

    public get readerDevice() {
      return this._readerDevice;
    }
    /**
     * Credencial
     */
    private _credential: Credential;
    public set credential(value: Credential) {
      this._credential = value;
    }

    public get credential() {
      return this._credential;
    }
    /**
     * Tipo do Evento de Acesso
     */
    private _accessEventType: AccessEventType;
    public set accessEventType(value: AccessEventType) {
      this._accessEventType = value;
    }

    public get accessEventTyped() {
      return this._accessEventType;
    }
}
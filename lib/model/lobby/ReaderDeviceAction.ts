import { BaseModel } from '../BaseModel';
import { AccessType } from '../../..';
import OutputDevice from './OutputDevice';

export = class ReaderDeviceAction extends BaseModel {
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
     * Saída
     */
    private _outputDevice: OutputDevice;
    public set outputDevice(value: OutputDevice) {
      this._outputDevice = value;
    }

    public get outputDevice() {
      return this._outputDevice;
    }

    /**
     * Tipo do Acesso
     */
    private _accessType: AccessType;
    public set accessType(value: AccessType) {
      this._accessType = value;
    }

    public get accessType() {
      return this._accessType;
    }

    /**
     * Tempo do Acionamento
     */
    private _activationTime: number;
    public set activationTime(value: number) {
      this._activationTime = value;
    }

    public get activationTime() {
      return this._activationTime;
    }
}
import { BaseModel } from '../BaseModel';
import { Device, VirtualLobbyActionType } from '../../..';

export = class VirtualLobbyActionOutput extends BaseModel {
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
     * Dispositivo de Saída
     */
    private _outputDevice: Device;
    public set outputDevice(value: Device) {
      this._outputDevice = value;
    }

    public get outputDevice() {
      return this._outputDevice;
    }

    /**
     * Tipo do Acionamento da Portaria Virtual
     */
    private _virtualLobbyActionType: VirtualLobbyActionType;
    public set virtualLobbyActionType(value: VirtualLobbyActionType) {
      this._virtualLobbyActionType = value;
    }

    public get virtualLobbyActionType() {
      return this._virtualLobbyActionType;
    }

    /**
     * Tempo do Acionamento
     */
    private _actionTime: number;
    public set actionTime(value: number) {
      this._actionTime = value;
    }

    public get actionTime() {
      return this._actionTime;
    }
}
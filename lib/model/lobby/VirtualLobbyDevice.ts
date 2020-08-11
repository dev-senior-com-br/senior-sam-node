import { BaseModel } from '../BaseModel';
import Device from './Device';
import { VirtualLobbyAction, CallGenerationType } from '../../..';

export = class VirtualLobbyDevice extends BaseModel {
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
     * Dispositivo
     */
    private _device: Device;

    /**
     * Tipo da Geração de Chamado
     */
    private _callGenerationType: CallGenerationType;
    public set callGenerationType(value: CallGenerationType) {
      this._callGenerationType = value;
    }

    public get callGenerationType() {
      return this._callGenerationType;
    }

    /**
     * Acionamento da Portaria
     */
    private _virtualLobbyAction: VirtualLobbyAction;
    public set virtualLobbyAction(value: VirtualLobbyAction) {
      this._virtualLobbyAction = value;
    }

    public get virtualLobbyAction() {
      return this._virtualLobbyAction;
    }

}
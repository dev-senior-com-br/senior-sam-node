import { BaseModel } from '../BaseModel';

export = class OutputDeviceActivations extends BaseModel {
    /**
     * ID
     */
    private _id: number;
    private set id(value: number) {
      this._id = value;
    }

    private get id() {
      return this._id;
    }

    /**
     * Tempo do Acionamento
     */
    private _activationTime: number;
    private set activationTime(value: number) {
      this._activationTime = value;
    }

    private get activationTime() {
      return this._activationTime;
    }
}

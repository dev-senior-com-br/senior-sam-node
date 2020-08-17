import { BaseModel } from '../BaseModel';
import { Device } from '../../..';

export = class IncidentTypeReactionManagerDevice extends BaseModel {
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
     * Gerênciador
     */
    private _managerDevice: Device;
    private set managerDevice(value: Device) {
      this._managerDevice = value;
    }

    private get managerDevice() {
      return this._managerDevice;
    }
}
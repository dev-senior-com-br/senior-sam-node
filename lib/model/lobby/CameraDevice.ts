import { BaseModel } from "../BaseModel";
import Device from "./Device";

export default class CameraDevice extends BaseModel {
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
    public set device(value: Device) {
        this._device = value;
    }

    public get device() {
        return this._device;
    }
}
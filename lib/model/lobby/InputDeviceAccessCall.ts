import { BaseModel } from "../BaseModel";
import { InputDevice } from "../../..";

export = class InputDeviceAccessCall extends BaseModel {
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
     * Dispositivo de Entrada
     */
    private _inputDevice:InputDevice;
    public set inputDevice(value: InputDevice) {
        this._inputDevice = value;
    }

    public get inputDevice() {
        return this._inputDevice;
    }    
}
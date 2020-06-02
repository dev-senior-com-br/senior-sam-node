
import { Device } from "../../..";
import IncidentTypeActionType from "./IncidentTypeActionType";
import { BaseModel } from "../BaseModel";

export default class IncidentTypeAction extends BaseModel {
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
    * Dispositivo de Saída
    */
    private _outputDevice: Device;
    private set outputDevice(value: Device) {
        this._outputDevice = value;
    }

    private get outputDevice() {
        return this._outputDevice;
    }

    /**
     * Tipo do Acionamento
     */
    private _incidentTypeActionType: IncidentTypeActionType;
    private set incidentTypeActionType(value: IncidentTypeActionType) {
        this._incidentTypeActionType = value;
    }

    private get incidentTypeActionType() {
        return this._incidentTypeActionType;
    }

    /**
     * Tempo do Acionamento
     */
    private _actionTime: number;
    private set actionTime(value: number) {
        this._actionTime = value;
    }

    private get actionTime() {
        return this._actionTime;
    }

}
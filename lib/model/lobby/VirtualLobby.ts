import { BaseModel } from "../BaseModel";
import { PhysicalLocation, VirtualLobbyDevice, VirtualLobbyAction, VirtualLobbyCamera, VirtualLobbySituation } from "../../..";
import Group from "./Group";
import List from "../List";

export default class VirtualLobby extends BaseModel {
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
     * Nome
     */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
     * Descrição
     */
    private _description: string;
    public set description(value: string) {
        this._description = value;
    }

    public get description() {
        return this._description;
    }

    /**
     * Local Físico
     */
    private _physicalLocation: PhysicalLocation;
    public set physicalLocation(value: PhysicalLocation) {
        this._physicalLocation = value;
    }

    public get physicalLocation() {
        return this._physicalLocation;
    }

    /**
     * Local Físico de Origem
     */
    private _originPhysicalLocation: PhysicalLocation;
    public set originPhysicalLocation(value: PhysicalLocation) {
        this._originPhysicalLocation = value;
    }

    public get originPhysicalLocation() {
        return this._originPhysicalLocation;
    }

    /**
     * Local Físico de Destino
     */
    private _destinationPhysicalLocation: PhysicalLocation;
    public set destinationPhysicalLocation(value: PhysicalLocation) {
        this._destinationPhysicalLocation = value;
    }

    public get destinationPhysicalLocation() {
        return this._destinationPhysicalLocation;
    }

    /**
     * Grupo
     */
    private _group: Group;
    public set group(value: Group) {
        this._group = value;
    }

    public get group() {
        return this._group;
    }

    /**
     * Situação da Portaria Virtual
     */
    private _situation: VirtualLobbySituation;
    public set situation(value: VirtualLobbySituation) {
        this._situation = value;
    }

    public get situation() {
        return this._situation;
    }

    /**
     * Câmeras da Portaria Virtual
     */
    private _cameras: List<VirtualLobbyCamera>;
    public set cameras(value: List<VirtualLobbyCamera>) {
        this._cameras = value;
    }

    public get camerasid() {
        return this._cameras;
    }

    /**
     * Acionamentos da Portaria Virtual
     */
    private _actions: List<VirtualLobbyAction>;
    public set actions(value: List<VirtualLobbyAction>) {
        this._actions = value;
    }

    public get actions() {
        return this._actions;
    }

    /**
     * Dispositivos da Portaria Virtual
     */
    private _devices: List<VirtualLobbyDevice>;
    public set devices(value: List<VirtualLobbyDevice>) {
        this._devices = value;
    }

    public get devices() {
        return this._devices;
    }
}
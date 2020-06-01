import { BaseModel } from "../BaseModel";
import PhysicalLocationStatus from "./PhysicalLocationStatus";

export default class PhysicalLocation extends BaseModel {
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
     * Local Físico Pai
     */
    private _parent: number;
    public set parent(value: number) {
        this._parent = value;
    }

    public get parent() {
        return this._parent;
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
     * Status do Local Físico
     */
    private _status: PhysicalLocationStatus;
    public set status(value: PhysicalLocationStatus) {
        this._status = value;
    }

    public get status() {
        return this._status;
    }

}
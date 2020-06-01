import { BaseModel } from "../BaseModel";

export default class BiometryTemplate extends BaseModel {
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
     * Template
     */
    private _template:Int8Array;
    public set template(value: Int8Array) {
        this._template = value;
    }

    public get template() {
        return this._template;
    }    
}
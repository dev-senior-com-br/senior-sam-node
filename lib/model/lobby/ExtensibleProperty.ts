import { BaseModel } from "../BaseModel";
import { ExtensibleConfiguration } from "../../..";

export = class ExtensibleProperty extends BaseModel {
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
     * Chave
     */
    private _key: string;
    public set key(value: string) {
        this._key = value;
    }

    public get key() {
        return this._key;
    }

    /**
     * Valor
     */
    private _value: string;
    public set value(value: string) {
        this._value = value;
    }

    public get value() {
        return this._value;
    }

}
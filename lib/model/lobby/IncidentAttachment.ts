import { BaseModel } from "../BaseModel";

export default class IncidentAttachment extends BaseModel {
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

}
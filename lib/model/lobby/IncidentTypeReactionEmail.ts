import { BaseModel } from "../BaseModel";

export = class IncidentTypeReactionEmail extends BaseModel {
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
     * Email
     */
    private _email:string;
    private set email(value: string) {
        this._email = value;
    }

    private get email() {
        return this._email;
    }

  
}
import { BaseModel } from "../BaseModel";

export = class Email extends BaseModel {
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
     * Email Preferencial
     */
    private _preferential = false;
    public set preferential(value: boolean) {
        this._preferential = value;
    }

    public get preferential() {
        return this._preferential;
    }

    /**
     * Documento
     */
    private _email: string;
    public set email(value: string) {
        this._email = value;
    }

    public get email() {
        return this._email;
    }
}
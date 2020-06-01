import { BaseModel } from "../BaseModel";
import { CardFormat } from "../../..";

export default class ReaderDeviceCardFormat extends BaseModel {
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
     * Formato de Cartão
     */
    private _cardFormat: CardFormat;
    public set cardFormat(value: CardFormat) {
        this._cardFormat = value;
    }

    public get cardFormat() {
        return this._cardFormat;
    }        
}
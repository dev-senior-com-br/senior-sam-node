import { BaseModel } from "../BaseModel";
import CardTechnology from "./CardTechnology";

export = class LobbyCredentialTechnologiesIn extends BaseModel {
    /**
     * ID, utilizado ao substituir ou atualizar um registro
     */
    private _id: number;
    public set id(value: number) {
        this._id = value;
    }

    public get id() {
        return this._id;
    }
    
    /**
     * Tecnologia de credencial, podendo ser 'BARCODE_CARD' (Código de Barras), 'RFID_CARD' (RFID) ou 'SMART_CARD' (Smart Card)
     */
    private _cardTechnology : CardTechnology;
    public set cardTechnology(value: CardTechnology) {
        this._cardTechnology = value;
    }

    public get cardTechnology() {
        return this._cardTechnology;
    }
}
import { BaseModel } from "../BaseModel";
import List from "../List";
import { VirtualLobbyActionOutput, VirtualLobbyMovementType } from "../../..";

export = class VirtualLobbyAction extends BaseModel {
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
     * Movimentação da Pessoa
     */
    private _virtualLobbyMovementType: VirtualLobbyMovementType;
    public set virtualLobbyMovementType(value: VirtualLobbyMovementType) {
        this._virtualLobbyMovementType = value;
    }

    public get virtualLobbyMovementType() {
        return this._virtualLobbyMovementType;
    }

    /**
     * Acionamento Ativo
     */
    private _isActive: boolean;
    public set isActive(value: boolean) {
        this._isActive = value;
    }

    public get isActive() {
        return this._isActive;
    }
    /**
     * Saídas do Acionamento
     */
    private _outputs: List<VirtualLobbyActionOutput>;
    public set outputs(value: List<VirtualLobbyActionOutput>) {
        this._outputs = value;
    }

    public get outputs() {
        return this._outputs;
    }    
}
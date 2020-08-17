import { BaseModel } from '../BaseModel';
import LobbyEntity from './LobbyEntity';
import CardTechnology from './CardTechnology';

export = class LobbyCredentialTechnology extends BaseModel {
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
     * Identificador da portaria
     */
    private _lobby: LobbyEntity;
    public set lobby(value: LobbyEntity) {
      this._lobby = value;
    }

    public get lobby() {
      return this._lobby;
    }

    /**
     * Tecnologia de credencial
     */
    private _cardTechnology: CardTechnology;
    public set cardTechnology(value: CardTechnology) {
      this._cardTechnology = value;
    }

    public get cardTechnologyid() {
      return this._cardTechnology;
    }

}
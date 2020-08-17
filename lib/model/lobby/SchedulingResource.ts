import { BaseModel } from '../BaseModel';
import { LobbyResource, Scheduling } from '../../..';

export = class SchedulingResource extends BaseModel {
    /**
     * ID
     */
    private _id : number;
    public set id(value: number) {
      this._id = value;
    }

    public get id() {
      return this._id;
    }

    /**
     * Agendamento
     */
    private _scheduling : Scheduling;
    public set scheduling(value: Scheduling) {
      this._scheduling = value;
    }

    public get scheduling() {
      return this._scheduling;
    }

    /**
     * Recurso
     */
    private _lobbyResource : LobbyResource;
    public set lobbyResource(value: LobbyResource) {
      this._lobbyResource = value;
    }

    public get lobbyResource() {
      return this._lobbyResource;
    }

    /**
     * Quantidade
     */
    private _quantity : number;
    public set quantity(value: number) {
      this._quantity = value;
    }

    public get quantity() {
      return this._quantity;
    }

    /**
     * Observação
     */
    private _note : string;
    public set note(value: string) {
      this._note = value;
    }

    public get note() {
      return this._note;
    }

}
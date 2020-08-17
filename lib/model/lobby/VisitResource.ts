import { BaseModel } from '../BaseModel';
import { VisitType, LobbyResource } from '../../..';

export = class VisitResource extends BaseModel {
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
     * Tipo da visita
     */
    private _visitType: VisitType;
    public set visitType(value: VisitType) {
      this._visitType = value;
    }

    public get visitType() {
      return this._visitType;
    }

    /**
     * Recurso
     */
    private _lobbyResource: LobbyResource;
    public set lobbyResource(value: LobbyResource) {
      this._lobbyResource = value;
    }

    public get lobbyResource() {
      return this._lobbyResource;
    }

}
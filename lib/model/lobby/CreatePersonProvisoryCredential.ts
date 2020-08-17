import BaseCreateProvisoryCredential from './BaseCreateProvisoryCredential';
import InformationCardCredentialRecord from './InformationCardCredentialRecord';
import List from '../List';

export = class CreatePersonProvisoryCredential extends BaseCreateProvisoryCredential {

    /**
     * O identificador da pessoa que receberá a credencial, cadastro em sam-aplicacao-backend/entities/person
     */
    private _personId: number;

    public set personId(value: number) {
      this._personId = value;
    }

    public get personId() {
      return this._personId;
    }

    /**
     * O identificador da portaria, cadastro pela entidade lobby
     */
    private _lobbyId: number;

    public set lobbyId(value: number) {
      this._lobbyId = value;
    }

    public get lobbyId() {
      return this._lobbyId;
    }

    /**
     * This convenience constructor allows initialization of all required fields.
     */
    constructor(isCheckedOverlap: boolean, cardCredentialList: List<InformationCardCredentialRecord>, endDate: Date,
      personId: number, lobbyId: number) {
      super(isCheckedOverlap, cardCredentialList, endDate);       
      this._personId = personId;
      this._lobbyId = lobbyId;        
    }

}
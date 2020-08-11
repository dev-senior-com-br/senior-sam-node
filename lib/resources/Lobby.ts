import ListPersonLookupIn from '../model/lobby/ListPersonLookupIn';
import SAMApi from '../SAMApi';
import LobbyCredentialTechnologiesIn from '../model/lobby/LobbyCredentialTechnologiesIn';
import CreatePersonProvisoryCredential from '../model/lobby/CreatePersonProvisoryCredential';
import CreateVisitorProvisoryCredential from '../model/lobby/CreateVisitorProvisoryCredential';
import { RequestClient } from '@seniorsistemas/senior-core/dist/lib/base/RequestClient';
import { HttpMethod } from '@seniorsistemas/senior-core/dist/lib/model/HttpMethod';

export = class Lobby extends RequestClient {
  constructor(samApi: SAMApi) {
    super(samApi, 'sam', 'lobby');
  }

    listPersonLookup = (listPersonLookupIn: ListPersonLookupIn) => {
      const listPersonLookupInJSON = listPersonLookupIn.toJson();
      const clientOptions = {
        url: '/sam/lobby/queries/listPersonLookup',
        method: HttpMethod.POST,
        data: listPersonLookupInJSON,
        headers: {
          authorization: this.seniorApi.accessToken
        }
      };
      return this.request(clientOptions);
    };

    lobbyCredentialTechnologies = (parentId: number, lobbyCredentialTechnologiesIn: LobbyCredentialTechnologiesIn) => {
      const lobbyCredentialTechnologiesInJSON = lobbyCredentialTechnologiesIn.toJson();
      const clientOptions = {
        url: `/sam/lobby/entities/lobby/${parentId}/lobbyCredentialTechnologies`,
        method: HttpMethod.POST,
        data: lobbyCredentialTechnologiesInJSON,
        headers: {
          authorization: this.seniorApi.accessToken
        }
      };
      return this.request(clientOptions);
    };

    createPersonProvisoryCredentialCard = (createPersonProvisoryCredential: CreatePersonProvisoryCredential) => {
      const createPersonProvisoryCredentialJSON = createPersonProvisoryCredential.toJson();        
      const clientOptions = {
        url: '/sam/lobby/actions/createPersonProvisoryCredentialCard',
        method: HttpMethod.POST,
        data: createPersonProvisoryCredentialJSON,
        headers: {
          authorization: this.seniorApi.accessToken
        }
      };
      return this.request(clientOptions);
    };
    
    createVisitorProvisoryCredentialCard = (createVisitorProvisoryCredential: CreateVisitorProvisoryCredential) => {
      const createVisitorProvisoryCredentialJSON = createVisitorProvisoryCredential.toJson();        
      const clientOptions = {
        url: '/sam/lobby/actions/createVisitorProvisoryCredentialCard',
        method: HttpMethod.POST,
        data: createVisitorProvisoryCredentialJSON,
        headers: {
          authorization: this.seniorApi.accessToken
        }
      };        
      return this.request(clientOptions);
    };

    getCredentials = (personId: number, listPersonLookupIn: ListPersonLookupIn) => {
      const listPersonLookupInJSON = listPersonLookupIn.toJson();
      const clientOptions = {
        url: `/sam/application/entities/person/${personId}/credentials`,
        method: HttpMethod.GET,
        data: listPersonLookupInJSON,
        headers: {
          authorization: this.seniorApi.accessToken
        }
      };
      return this.request(clientOptions);
    };
}
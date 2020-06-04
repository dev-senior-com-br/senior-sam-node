import { HttpMethod } from "../model/HttpMethod";
import ListPersonLookupIn from "../model/lobby/ListPersonLookupIn";
import SAMApi from "../SAMApi";
import LobbyCredentialTechnologiesIn from "../model/lobby/LobbyCredentialTechnologiesIn";
import RequestClient from '@seniorsistemas/senior-core/lib/base/RequestClient';
import ENVIRONMENTS from "@seniorsistemas/senior-core/lib/Environments";

export default class Lobby extends RequestClient {
    private _client: RequestClient;

    constructor(samApi: SAMApi) {
        super(samApi);
    }

    listPersonLookup = (listPersonLookupIn: ListPersonLookupIn) => {
        let listPersonLookupInJSON = listPersonLookupIn.toJson();
        const clientOptions = {
            url: "/rest/sam/lobby/queries/listPersonLookup",
            method: HttpMethod.POST,
            data: listPersonLookupInJSON,
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    lobbyCredentialTechnologies = (parentId: number, lobbyCredentialTechnologiesIn: LobbyCredentialTechnologiesIn) => {
        let lobbyCredentialTechnologiesInJSON = lobbyCredentialTechnologiesIn.toJson();
        const clientOptions = {
            url: `/rest/sam/lobby/entities/lobby/${parentId}/lobbyCredentialTechnologies`,
            method: HttpMethod.POST,
            data: lobbyCredentialTechnologiesInJSON,
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    createCardProvisoryCredential = (listPersonLookupIn: ListPersonLookupIn) => {
        let listPersonLookupInJSON = listPersonLookupIn.toJson();
        const clientOptions = {
            url: "/rest/sam/lobby/actions/createCardProvisoryCredential",
            method: HttpMethod.POST,
            data: listPersonLookupInJSON,
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    getGredentials = (listPersonLookupIn: ListPersonLookupIn) => {
        let listPersonLookupInJSON = listPersonLookupIn.toJson();
        const clientOptions = {
            url: "/rest/sam/application/entities/person/{parentId}/credentials",
            method: HttpMethod.POST,
            data: listPersonLookupInJSON,
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };
}
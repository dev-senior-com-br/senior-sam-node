import { HttpMethod } from "../model/HttpMethod";
import ListPersonLookupIn from "../model/lobby/ListPersonLookupIn";
import SAMApi from "../SAMApi";
import LobbyCredentialTechnologiesIn from "../model/lobby/LobbyCredentialTechnologiesIn";
import RequestClient from '@seniorsistemas/senior-core/dist/lib/base/RequestClient';
import { CreatePersonProvisoryCredential, CreateVisitorProvisoryCredential } from "../..";

export = class Lobby extends RequestClient {
    seniorApi: any;

    constructor(samApi: SAMApi) {
        super(samApi, "sam", "lobby");
    }

    listPersonLookup = (listPersonLookupIn: ListPersonLookupIn) => {
        let listPersonLookupInJSON = listPersonLookupIn.toJson();
        const clientOptions = {
            url: "/sam/lobby/queries/listPersonLookup",
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
        let createPersonProvisoryCredentialJSON = createPersonProvisoryCredential.toJson();
        console.log("LemoelMarquesVieira: " + createPersonProvisoryCredential.toJsonString());
        const clientOptions = {
            url: "/sam/lobby/actions/createPersonProvisoryCredentialCard",
            method: HttpMethod.POST,
            data: createPersonProvisoryCredentialJSON,
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    createVisitorProvisoryCredentialCard = (createVisitorProvisoryCredential: CreateVisitorProvisoryCredential) => {
        let createVisitorProvisoryCredentialJSON = createVisitorProvisoryCredential.toJson();
        console.log("LemoelMarquesVieira: " + createVisitorProvisoryCredential.toJsonString());
        const clientOptions = {
            url: "/sam/lobby/actions/createVisitorProvisoryCredentialCard",
            method: HttpMethod.POST,
            data: createVisitorProvisoryCredentialJSON,
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };        
        return this.request(clientOptions);
    };

    getGredentials = (personId: number, listPersonLookupIn: ListPersonLookupIn) => {
        let listPersonLookupInJSON = listPersonLookupIn.toJson();
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
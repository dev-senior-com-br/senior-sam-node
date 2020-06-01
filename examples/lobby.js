require('dotenv').config({
    path: "../.env"
});

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;
var SAMApi = require('../built/index').SAMApi;
var ListPersonLookupIn = require('../built/index').ListPersonLookupIn;
var LobbyCredentialTechnologiesIn = require('../built/index').LobbyCredentialTechnologiesIn;
var CardTechnology = require('../built/index').CardTechnology;
var CreateCardProvisoryCredentialIn = require('../built/index').CreateCardProvisoryCredentialIn;

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;

var samApi = new SAMApi();
var listPersonLookupIn = new ListPersonLookupIn();
var lobbyCredentialTechnologiesIn = new LobbyCredentialTechnologiesIn();
var createCardProvisoryCredentialIn = new CreateCardProvisoryCredentialIn();

samApi.authentication.login(username, password).then(function (json) {
    samApi.accessToken = JSON.parse(json.body.jsonToken).access_token;
    listPersonLookupIn.searchText = 'Teste Versao';
    samApi.lobby.listPersonLookup(listPersonLookupIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

    const parentId = 1;
    lobbyCredentialTechnologiesIn.cardTechnology = CardTechnology.BARCODE_CARD;
    samApi.lobby.lobbyCredentialTechnologies(parentId, lobbyCredentialTechnologiesIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

    samApi.lobby.createCardProvisoryCredential(createCardProvisoryCredentialIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

    if (samApi.accessToken) {
        samApi.authentication.logout().catch(function (error) {
            console.error("Erro na tentativa de efetuar logout: ", error);
        });
    }
}).catch(function (error) {
    console.error("Erro na tentativa de efetuar login: ", error);
});
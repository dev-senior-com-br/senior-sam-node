require('dotenv').config({
    path: "../.env"
});

var SAMApi = require('../dist/index').SAMApi;
var ListPersonLookupIn = require('../dist/index').ListPersonLookupIn;
var LobbyCredentialTechnologiesIn = require('../dist/index').LobbyCredentialTechnologiesIn;
var CardTechnology = require('../dist/index').CardTechnology;
var CreateCardProvisoryCredentialIn = require('../dist/index').CreateCardProvisoryCredentialIn;
var ENVIRONMENTS = require('../dist/index').ENVIRONMENTS;

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;

var samApi = new SAMApi();
samApi.environment = "PROD";
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
    console.error('ENV: ' + samApi.environment);
    console.error("Erro na tentativa de efetuar login: ", error);
});
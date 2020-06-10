require('dotenv').config({
    path: "../.env"
});

var SAMApi = require('../dist/index').SAMApi;
var ListPersonLookupIn = require('../dist/index').ListPersonLookupIn;
var LobbyCredentialTechnologiesIn = require('../dist/index').LobbyCredentialTechnologiesIn;
var CardTechnology = require('../dist/index').CardTechnology;
var CreatePersonProvisoryCredential = require('../dist/index').CreatePersonProvisoryCredential;
var CreateVisitorProvisoryCredential = require('../dist/index').CreateVisitorProvisoryCredential;
var InformationCardCredentialRecord =  require('../dist/index').InformationCardCredentialRecord;
var ENVIRONMENTS = require('../dist/index').ENVIRONMENTS;

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;

var samApi = new SAMApi();
samApi.environment = "PROD";
var listPersonLookupIn = new ListPersonLookupIn();
var lobbyCredentialTechnologiesIn = new LobbyCredentialTechnologiesIn();
var createPersonProvisoryCredential;
var createVisitorProvisoryCredential = new CreateVisitorProvisoryCredential();

samApi.authentication.login(username, password).then(function (json) {
    samApi.accessToken = JSON.parse(json.body.jsonToken).access_token;    
    listPersonLookupIn.searchText = 'Teste Versao';
    // samApi.lobby.listPersonLookup(listPersonLookupIn).then(function (json) {
    //     if (json.statusCode != 200) {
    //         console.error(json);
    //     } else {
    //         console.log(json.body);
    //     }
    // }).catch(function (error) {
    //     console.error("Erro na tentativa de listar dependente: ", error);
    // });

    // const parentId = 1;
    // lobbyCredentialTechnologiesIn.cardTechnology = CardTechnology.BARCODE_CARD;
    // samApi.lobby.lobbyCredentialTechnologies(parentId, lobbyCredentialTechnologiesIn).then(function (json) {
    //     if (json.statusCode != 200) {
    //         console.error(json);
    //     } else {
    //         console.log(json.body);
    //     }
    // }).catch(function (error) {
    //     console.error("Erro na tentativa de listar dependente: ", error);
    // });
        
    informationCardCredentialRecord = new InformationCardCredentialRecord(CardTechnology.BARCODE_CARD, 1);
    createPersonProvisoryCredential = 
            new CreatePersonProvisoryCredential(true,[informationCardCredentialRecord], new Date, 1, 1);
            
    samApi.lobby.createPersonProvisoryCredentialCard(createPersonProvisoryCredential).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

    samApi.lobby.createVisitorProvisoryCredentialCard(createVisitorProvisoryCredential).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

    // const personId = 1;
    // samApi.lobby.getGredentials(personId, listPersonLookupIn).then(function (json) {
    //     if (json.statusCode != 200) {
    //         console.error(json);
    //     } else {
    //         console.log(json.body);
    //     }
    // }).catch(function (error) {
    //     console.error("Erro na tentativa de listar dependente: ", error);
    // });

    // if (samApi.accessToken) {
    //     samApi.authentication.logout().catch(function (error) {
    //         console.error("Erro na tentativa de efetuar logout: ", error);
    //     });
    // }
}).catch(function (error) {
    console.error('ENV: ' + samApi.environment);
    console.error("Erro na tentativa de efetuar login: ", error);
});
const Visitor = require('../dist/lib/model/lobby/Visitor');

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

if(username == undefined) {
    console.error("É necessário um nome de usuário");
}
var username = process.env.SENIOR_USERNAME;

if(password == undefined) {
    console.error("É necessário uma senha de usuário");
}
var password = process.env.PASS;

if(personId == undefined) {
    console.error("O identificador da pessoa que receberá a credencial, cadastro em sam-aplicacao-backend/entities/person");
}
var personId = process.env.PERSON_ID;

if(lobbyId == undefined){
    console.error("O identificador da portaria, cadastro pela entidade lobby");    
}
var lobbyId  = process.env.LOBBY_ID;

if (roleId == undefined) {
    console.error("O papel da credencial que o visitante vai assumir, usado principalmente para visitantes sem cadastro prévio, cadastro em sam-aplicacao-backend/entities/role");
}
var roleId  = process.env.ROLE_ID;

if (visitor == undefined) {
    console.error("O visitante que receberá a credencial");
}
var visitor = new Visitor(process.env.VISITOR_ID);

if (schedulingId == undefined) {
    console.error("O agendamento relacionado à credencial, id da entidade scheduling, apenas para visitas agendadas");
}
var schedulingId = process.env.SCHEDULING_ID;

var samApi = new SAMApi();
samApi.environment = "DEV";
var listPersonLookupIn = new ListPersonLookupIn();
var lobbyCredentialTechnologiesIn = new LobbyCredentialTechnologiesIn();
var createPersonProvisoryCredential;
var createVisitorProvisoryCredential;

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
    
    var endDate = adicionarDiasData(1);        
    informationCardCredentialRecord = new InformationCardCredentialRecord(CardTechnology.SMART_CARD, 7);
    createPersonProvisoryCredential = 
            new CreatePersonProvisoryCredential(true,[informationCardCredentialRecord], endDate, personId, lobbyId);
            
    samApi.lobby.createPersonProvisoryCredentialCard(createPersonProvisoryCredential).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

    createVisitorProvisoryCredential = 
        new CreateVisitorProvisoryCredential(false, [informationCardCredentialRecord], endDate, roleId, visitor, schedulingId);
    
    samApi.lobby.createVisitorProvisoryCredentialCard(createVisitorProvisoryCredential).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de criar credencial provisória: ", error);
    });
    
    samApi.lobby.getCredentials(personId, listPersonLookupIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar credenciais: ", error);
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

function adicionarDiasData(dias){
    var hoje        = new Date();
    return new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));    
}
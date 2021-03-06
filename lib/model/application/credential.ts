/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AccessCall } from './accessCall';
import { Biometry } from './biometry';
import { CardCredential } from './cardCredential';
import { CredentialFormat } from './credentialFormat';
import { CredentialOwner } from './credentialOwner';
import { CredentialSituation } from './credentialSituation';
import { CredentialType } from './credentialType';
import { Group } from './group';
import { Lobby } from './lobby';
import { Person } from './person';
import { Role } from './role';
import { Scheduling } from './scheduling';
import { StatusHistoric } from './statusHistoric';
import { Vehicle } from './vehicle';
import { VirtualLobby } from './virtualLobby';


export interface Credential { 
    biometry?: Biometry;
    role?: Role;
    accessCall?: AccessCall;
    /**
     * Data Fim
     */
    endDate?: Date;
    credentialSituation: CredentialSituation;
    vehicle?: Vehicle;
    credentialOwner: CredentialOwner;
    credentialType: CredentialType;
    visitedPerson?: Person;
    virtualLobby?: VirtualLobby;
    /**
     * Credênciais de Cartão
     */
    cardCredentialList?: Array<CardCredential>;
    lobby?: Lobby;
    person?: Person;
    credentialFormat: CredentialFormat;
    scheduling?: Scheduling;
    /**
     * ID
     */
    id?: number;
    /**
     * ID do Motivo da Credencial Provisória
     */
    provisoryCredentialReasonId?: number;
    /**
     * Data Início
     */
    startDate: Date;
    group?: Group;
    status: StatusHistoric;
}

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
import { CredentialFormat } from './credentialFormat';
import { Group } from './group';
import { Person } from './person';
import { PhysicalLocation } from './physicalLocation';
import { Role } from './role';


export interface ScheduledCredential { 
    visitedPerson?: Person;
    role?: Role;
    /**
     * Data Final
     */
    endDate: Date;
    person: Person;
    credentialFormat?: CredentialFormat;
    visitedPlace?: PhysicalLocation;
    /**
     * Data do Agendamento
     */
    scheludingDate: Date;
    /**
     * ID
     */
    id?: number;
    /**
     * Localizador
     */
    locator?: string;
    group: Group;
}

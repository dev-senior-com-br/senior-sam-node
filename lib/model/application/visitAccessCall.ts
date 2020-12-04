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
import { Person } from './person';
import { ScheduledCredential } from './scheduledCredential';


export interface VisitAccessCall { 
    personCaller: Person;
    accessCall?: AccessCall;
    scheduledCredential: ScheduledCredential;
    /**
     * ID
     */
    id?: number;
}

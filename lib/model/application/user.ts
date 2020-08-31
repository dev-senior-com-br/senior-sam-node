/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 * OpenAPI spec version: 4.7.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { LocalTimezone } from './localTimezone';
import { Person } from './person';
import { Role } from './role';


export interface User { 
    person?: Person;
    localTimeZone?: LocalTimezone;
    /**
     * ID
     */
    id?: number;
    /**
     * Login
     */
    login?: string;
    credentialStandardRole?: Role;
}

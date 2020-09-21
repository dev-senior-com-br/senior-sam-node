/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 * OpenAPI spec version: 4.8.2
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Person } from './person';
import { PersonRoleSuspension } from './personRoleSuspension';
import { Role } from './role';
import { StatusHistoric } from './statusHistoric';


export interface PersonRole { 
    /**
     * Suspensões de Papéis
     */
    personRoleSuspensions?: Array<PersonRoleSuspension>;
    role?: Role;
    /**
     * Data Fim
     */
    endDate?: Date;
    person?: Person;
    /**
     * ID
     */
    id?: number;
    /**
     * Data Início
     */
    startDate?: Date;
    status?: StatusHistoric;
}

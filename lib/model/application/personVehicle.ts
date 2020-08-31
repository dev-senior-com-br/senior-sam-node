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
import { Person } from './person';
import { StatusHistoric } from './statusHistoric';
import { Vehicle } from './vehicle';


export interface PersonVehicle { 
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
    vehicle?: Vehicle;
    status?: StatusHistoric;
}
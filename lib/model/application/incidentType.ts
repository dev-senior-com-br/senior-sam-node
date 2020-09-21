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
import { IncidentPriority } from './incidentPriority';


export interface IncidentType { 
    defaultPriority?: IncidentPriority;
    /**
     * Nome
     */
    name?: string;
    /**
     * ID
     */
    id?: number;
}

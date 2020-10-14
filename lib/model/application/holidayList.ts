/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 * OpenAPI spec version: 4.9.1
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Holiday } from './holiday';


export interface HolidayList { 
    /**
     * Nome da Lista de Feriados
     */
    name?: string;
    /**
     * ID
     */
    id?: number;
    /**
     * Lista de Feriados
     */
    holiday?: Array<Holiday>;
}

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
import { AccessCreditRangeList } from './accessCreditRangeList';


export interface AccessCreditRange { 
    /**
     * Hora Final
     */
    endHour?: string;
    /**
     * Domingo
     */
    sunday?: boolean;
    accessCreditRangeList?: AccessCreditRangeList;
    /**
     * Sábado
     */
    saturday?: boolean;
    /**
     * Terça
     */
    tuesday?: boolean;
    /**
     * Hora Inicial
     */
    startHour?: string;
    /**
     * Quarta
     */
    wednesday?: boolean;
    /**
     * Quinta
     */
    thursday?: boolean;
    /**
     * Sexta
     */
    friday?: boolean;
    /**
     * ID
     */
    id?: number;
    /**
     * Feriado
     */
    holiday?: boolean;
    /**
     * Segunda
     */
    monday?: boolean;
}

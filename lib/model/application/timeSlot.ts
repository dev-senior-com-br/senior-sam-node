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
import { TimeSlotList } from './timeSlotList';


export interface TimeSlot { 
    /**
     * Sábado
     */
    saturday?: boolean;
    /**
     * 
     */
    lastModifiedDate?: Date;
    /**
     * 
     */
    lastModifiedBy?: string;
    /**
     * Quinta
     */
    thursday?: boolean;
    /**
     * Feriado
     */
    holiday?: boolean;
    timeSlotList?: TimeSlotList;
    /**
     * Hora Final
     */
    endHour?: string;
    /**
     * Domingo
     */
    sunday?: boolean;
    /**
     * Terça
     */
    tuesday?: boolean;
    /**
     * 
     */
    createdDate?: Date;
    /**
     * 
     */
    createdBy?: string;
    /**
     * Hora Inicial
     */
    startHour?: string;
    /**
     * Quarta
     */
    wednesday?: boolean;
    /**
     * Sexta
     */
    friday?: boolean;
    /**
     * ID
     */
    id?: number;
    /**
     * Segunda
     */
    monday?: boolean;
}

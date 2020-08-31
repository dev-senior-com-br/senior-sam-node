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
import { PersonWorkSchedulePeriod } from './personWorkSchedulePeriod';


export interface PersonWorkScheduleTimeSlot { 
    /**
     * Hora Final
     */
    endHour?: string;
    /**
     * 
     */
    createdDate?: Date;
    /**
     * 
     */
    createdBy?: string;
    /**
     * 
     */
    lastModifiedDate?: Date;
    /**
     * Hora Inicial
     */
    startHour?: string;
    workSchedulePeriod?: PersonWorkSchedulePeriod;
    /**
     * 
     */
    lastModifiedBy?: string;
    /**
     * ID
     */
    id?: number;
}
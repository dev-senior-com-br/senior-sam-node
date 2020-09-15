/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 * OpenAPI spec version: 4.8.1
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { WeekDay } from './weekDay';
import { WorkSchedule } from './workSchedule';
import { WorkScheduleSlotTime } from './workScheduleSlotTime';


export interface WorkSchedulePeriod { 
    /**
     * 
     */
    createdDate?: Date;
    workSchedule?: WorkSchedule;
    /**
     * 
     */
    createdBy?: string;
    /**
     * 
     */
    lastModifiedDate?: Date;
    weekDay?: WeekDay;
    /**
     * 
     */
    lastModifiedBy?: string;
    /**
     * ID
     */
    id?: number;
    /**
     * Faixas Horárias da Escala
     */
    slotTimes?: Array<WorkScheduleSlotTime>;
}

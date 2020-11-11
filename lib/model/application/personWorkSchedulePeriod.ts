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
import { Person } from './person';
import { PersonWorkScheduleTimeSlot } from './personWorkScheduleTimeSlot';
import { WeekDay } from './weekDay';


export interface PersonWorkSchedulePeriod { 
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
    person?: Person;
    weekDay?: WeekDay;
    /**
     * 
     */
    lastModifiedBy?: string;
    /**
     * Faixas Horárias da Escala
     */
    timeSlots?: Array<PersonWorkScheduleTimeSlot>;
    /**
     * ID
     */
    id?: number;
}

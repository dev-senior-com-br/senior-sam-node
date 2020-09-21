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
import { HolidayList } from './holidayList';
import { TimeSlot } from './timeSlot';


export interface TimeSlotList { 
    /**
     * Nome
     */
    name?: string;
    /**
     * Lista de Faixas
     */
    timeSlots?: Array<TimeSlot>;
    /**
     * ID
     */
    id?: number;
    holidayList?: HolidayList;
}

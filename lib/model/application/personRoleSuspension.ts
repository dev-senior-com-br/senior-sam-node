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
import { PersonRole } from './personRole';
import { StatusHistoric } from './statusHistoric';


export interface PersonRoleSuspension { 
    /**
     * Data Fim
     */
    endDate?: Date;
    personRole?: PersonRole;
    /**
     * ID
     */
    id?: number;
    /**
     * Justificativa
     */
    justification?: string;
    /**
     * Data Início
     */
    startDate?: Date;
    status?: StatusHistoric;
}

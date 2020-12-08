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


export interface PersonSituation { 
    /**
     * Data do Bloqueio
     */
    blockDate: Date;
    person?: Person;
    /**
     * Justificativa do Desbloqueio
     */
    unblockJustification?: string;
    /**
     * ID
     */
    id?: number;
    /**
     * Procedimento de Desbloqueio
     */
    unblockProcedure?: string;
    /**
     * Motivo do Bloqueio
     */
    blockReason?: string;
    /**
     * Data do Desbloqueio
     */
    unblockDate?: Date;
}

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


export type AccessCallStatus = 'CALLING' | 'IN_PROGRESS' | 'FINISHED_TIMED_OUT' | 'FINISHED_ACCESS_ALLOWED' | 'FINISHED_ACCESS_DENIED';

export const AccessCallStatus = {
    CALLING: 'CALLING' as AccessCallStatus,
    INPROGRESS: 'IN_PROGRESS' as AccessCallStatus,
    FINISHEDTIMEDOUT: 'FINISHED_TIMED_OUT' as AccessCallStatus,
    FINISHEDACCESSALLOWED: 'FINISHED_ACCESS_ALLOWED' as AccessCallStatus,
    FINISHEDACCESSDENIED: 'FINISHED_ACCESS_DENIED' as AccessCallStatus
};

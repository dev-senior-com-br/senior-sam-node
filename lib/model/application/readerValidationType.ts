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


export type ReaderValidationType = 'BLOCK_ACCESS' | 'CARD' | 'CARD_OR_PIN' | 'CARD_AND_PIN' | 'ALLOW_ACCESS' | 'FACILITY_CODE';

export const ReaderValidationType = {
    BLOCKACCESS: 'BLOCK_ACCESS' as ReaderValidationType,
    CARD: 'CARD' as ReaderValidationType,
    CARDORPIN: 'CARD_OR_PIN' as ReaderValidationType,
    CARDANDPIN: 'CARD_AND_PIN' as ReaderValidationType,
    ALLOWACCESS: 'ALLOW_ACCESS' as ReaderValidationType,
    FACILITYCODE: 'FACILITY_CODE' as ReaderValidationType
};

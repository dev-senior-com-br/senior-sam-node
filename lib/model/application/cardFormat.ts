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


export interface CardFormat { 
    /**
     * Código de Acesso
     */
    facilityCode?: number;
    /**
     * Padrão Para Todas as Leitoras
     */
    defaultAllReaders?: boolean;
    /**
     * 
     */
    lastModifiedDate?: Date;
    /**
     * 
     */
    lastModifiedBy?: string;
    /**
     * Quantidade de Bits de Paridade Ímpar
     */
    oddBitsLength?: number;
    /**
     * Quantidade de Bits do Cartão
     */
    cardLength?: number;
    /**
     * Bit de Ínicio do Código de Acesso
     */
    facilityCodeStart?: number;
    /**
     * Quantidade de Bits de Paridade Par
     */
    evenBitsLength?: number;
    /**
     * Quantidade de Bits do Número do Cartão
     */
    cardNumberLength?: number;
    /**
     * 
     */
    createdDate?: Date;
    /**
     * Bit de Ínicio do Número do Cartão
     */
    cardNumberStart?: number;
    /**
     * 
     */
    createdBy?: string;
    /**
     * Nome do Formato
     */
    name?: string;
    /**
     * ID
     */
    id?: number;
    /**
     * Quantidade de Bits do Código de Acesso
     */
    facilityCodeLength?: number;
    /**
     * Deslocamento de Bits
     */
    bitsShift?: number;
}
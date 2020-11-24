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


export interface DocumentType { 
    /**
     * Nome do Tipo de Documento
     */
    name?: string;
    /**
     * ID
     */
    id?: number;
    /**
     * Label de Apresentação
     */
    label?: string;
    /**
     * Documento Utilizado pelo REP
     */
    useOnREP?: boolean;
    /**
     * Documento Obrigatório
     */
    required?: boolean;
    /**
     * Máscara
     */
    mask?: string;
}

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
import { DocumentType } from './documentType';
import { Person } from './person';


export interface Document { 
    documentType: DocumentType;
    person?: Person;
    /**
     * Documento
     */
    document: string;
    /**
     * ID
     */
    id?: number;
}

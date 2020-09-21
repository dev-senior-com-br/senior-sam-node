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
import { AccessType } from './accessType';
import { OutputDevice } from './outputDevice';
import { ReaderDevice } from './readerDevice';


export interface ReaderDeviceAction { 
    accessType?: AccessType;
    outputDevice?: OutputDevice;
    /**
     * ID
     */
    id?: number;
    readerDevice?: ReaderDevice;
    /**
     * Tempo do Acionamento
     */
    activationTime?: number;
}

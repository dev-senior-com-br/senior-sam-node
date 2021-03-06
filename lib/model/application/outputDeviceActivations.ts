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
import { InputDevice } from './inputDevice';
import { OutputDevice } from './outputDevice';


export interface OutputDeviceActivations { 
    outputDevice: OutputDevice;
    inputDevice?: InputDevice;
    /**
     * ID
     */
    id?: number;
    /**
     * Tempo do Acionamento
     */
    activationTime: number;
}

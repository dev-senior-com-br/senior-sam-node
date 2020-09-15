/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 * OpenAPI spec version: 4.8.1
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Device } from './device';
import { DeviceCommunicationStatus } from './deviceCommunicationStatus';
import { DeviceSituation } from './deviceSituation';
import { DeviceType } from './deviceType';
import { ExtensibleConfiguration } from './extensibleConfiguration';
import { OutputState } from './outputState';
import { PhysicalLocation } from './physicalLocation';


export interface OutputDevice { 
    deviceType?: DeviceType;
    parent?: Device;
    /**
     * Endereço
     */
    address?: number;
    physicalLocation?: PhysicalLocation;
    communicationStatus?: DeviceCommunicationStatus;
    defaultState?: OutputState;
    extensibleConfiguration?: ExtensibleConfiguration;
    /**
     * Descrição do Dispositivo
     */
    description?: string;
    /**
     * ID
     */
    id?: number;
    situation?: DeviceSituation;
    /**
     * Dispositivo Integrado
     */
    integrated?: boolean;
}

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
import { BiometricManufacturer } from './biometricManufacturer';
import { BiometricOneToOneValidationType } from './biometricOneToOneValidationType';
import { BiometricValidation } from './biometricValidation';
import { Device } from './device';
import { DeviceCommunicationStatus } from './deviceCommunicationStatus';
import { DeviceSituation } from './deviceSituation';
import { DeviceType } from './deviceType';
import { ExtensibleConfiguration } from './extensibleConfiguration';
import { PhysicalLocation } from './physicalLocation';
import { ReaderDeviceAction } from './readerDeviceAction';
import { ReaderDeviceCardFormat } from './readerDeviceCardFormat';
import { ReaderDeviceTechnology } from './readerDeviceTechnology';
import { ReaderDirection } from './readerDirection';
import { ReaderValidationType } from './readerValidationType';


export interface ReaderDevice { 
    /**
     * Controla Vagas
     */
    parkingSpaceControll?: boolean;
    parent?: Device;
    destinyPhysicalLocation?: PhysicalLocation;
    /**
     * Descrição do Dispositivo
     */
    description?: string;
    readerDeviceTechnology?: ReaderDeviceTechnology;
    /**
     * Identificador da Leitora HeadKey
     */
    headKeyId?: string;
    /**
     * Dispositivo Integrado
     */
    integrated?: boolean;
    biometricOneToOneValidationType?: BiometricOneToOneValidationType;
    biometricValidation?: BiometricValidation;
    urnSensor?: Device;
    /**
     * Valida Veículo
     */
    validateVehicle?: boolean;
    /**
     * ID
     */
    id?: number;
    originPhysicalLocation?: PhysicalLocation;
    situation?: DeviceSituation;
    /**
     * Bloqueia Provisório na Saída
     */
    blockProvisoryOnExit?: boolean;
    deviceType?: DeviceType;
    offlineReaderValidationType?: ReaderValidationType;
    biometricManufacturer?: BiometricManufacturer;
    /**
     * Baixa Provisório na Saída
     */
    releaseProvisoryOnExit?: boolean;
    /**
     * Endereço
     */
    address?: number;
    physicalLocation?: PhysicalLocation;
    /**
     * Formatos de Cartão
     */
    cardFormats?: Array<ReaderDeviceCardFormat>;
    /**
     * Leitora Pairada
     */
    pairingInReaderInterface?: boolean;
    /**
     * Tempo do Alarme de Porta Aberta
     */
    heldOpenTime?: number;
    /**
     * Tempo do Sensor de Urna
     */
    urnSensorTime?: number;
    onlineReaderValidationType?: ReaderValidationType;
    /**
     * Nível de Conferência Biométrica
     */
    biometryLevel?: number;
    communicationStatus?: DeviceCommunicationStatus;
    extensibleConfiguration?: ExtensibleConfiguration;
    /**
     * Saídas do Acionamento
     */
    activations?: Array<ReaderDeviceAction>;
    readerDirection?: ReaderDirection;
    relatedReader?: ReaderDevice;
    /**
     * Tempo de Acesso
     */
    accessTime?: number;
}
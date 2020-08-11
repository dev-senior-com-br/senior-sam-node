import { BaseModel } from '../BaseModel';
import {
  PhysicalLocation,
  Device,
  DeviceType,
  DeviceSituation,
  DeviceCommunicationStatus,
  ExtensibleConfiguration,
  ReaderDirection,
  BiometricValidation,
  ReaderDeviceTechnology,
  BiometricManufacturer,
  BiometricOneToOneValidationType,
  ReaderValidationType,
  ReaderDeviceCardFormat,
  ReaderDeviceAction,
} from '../../..';
import List from '../List';

export = class ReaderDevice extends BaseModel {
  /**
   * ID
   */
  private _id: number;
  public set id(value: number) {
    this._id = value;
  }

  public get id() {
    return this._id;
  }

  /**
   * Endereço
   */
  private _address: number;
  public set address(value: number) {
    this._address = value;
  }

  public get address() {
    return this._address;
  }

  /**
   * Tecnologia da Leitora
   */
  private _readerDeviceTechnology: ReaderDeviceTechnology;
  public set readerDeviceTechnology(value: ReaderDeviceTechnology) {
    this._readerDeviceTechnology = value;
  }

  public get readerDeviceTechnology() {
    return this._readerDeviceTechnology;
  }

  /**
   * Validação Biométrica
   */
  private _biometricValidation: BiometricValidation;
  public set biometricValidation(value: BiometricValidation) {
    this._biometricValidation = value;
  }

  public get biometricValidation() {
    return this._biometricValidation;
  }

  /**
   * Fabricante Biométrico
   */
  private _biometricManufacturer: BiometricManufacturer;
  public set biometricManufacturer(value: BiometricManufacturer) {
    this._biometricManufacturer = value;
  }

  public get biometricManufacturer() {
    return this._biometricManufacturer;
  }

  /**
   * Leitora Relacionada
   */
  private _relatedReader: ReaderDevice;
  public set relatedReader(value: ReaderDevice) {
    this._relatedReader = value;
  }

  public get relatedReader() {
    return this._relatedReader;
  }

  /**
   * Nível de Conferência Biométrica
   */
  private _biometryLevel: number;
  public set biometryLevel(value: number) {
    this._biometryLevel = value;
  }

  public get biometryLevel() {
    return this._biometryLevel;
  }

  /**
   * Direção de Acesso
   */
  private _readerDirection: ReaderDirection;
  public set readerDirection(value: ReaderDirection) {
    this._readerDirection = value;
  }

  public get readerDirection() {
    return this._readerDirection;
  }

  /**
   * Tempo do Sensor de Urna
   */
  private _urnSensorTime: number;
  public set urnSensorTime(value: number) {
    this._urnSensorTime = value;
  }

  public get urnSensorTime() {
    return this._urnSensorTime;
  }

  /**
   * Sensor de Urna
   */
  private _urnSensor: Device;
  public set urnSensor(value: Device) {
    this._urnSensor = value;
  }

  public get urnSensor() {
    return this._urnSensor;
  }

  /**
   * Controla Vagas
   */
  private _parkingSpaceControll: boolean;
  public set parkingSpaceControll(value: boolean) {
    this._parkingSpaceControll = value;
  }

  public get parkingSpaceControll() {
    return this._parkingSpaceControll;
  }

  /**
   * Tempo de Acesso
   */
  private _accessTime: number;
  public set accessTime(value: number) {
    this._accessTime = value;
  }

  public get accessTime() {
    return this._accessTime;
  }

  /**
   * Tipo de Validação Biométrica Um para Um
   */
  private _biometricOneToOneValidationType: BiometricOneToOneValidationType;
  public set biometricOneToOneValidationType(value: BiometricOneToOneValidationType) {
    this._biometricOneToOneValidationType = value;
  }

  public get biometricOneToOneValidationType() {
    return this._biometricOneToOneValidationType;
  }

  /**
   * Tipo de Validação da Leitora Online
   */
  private _onlineReaderValidationType: ReaderValidationType;
  public set onlineReaderValidationType(value: ReaderValidationType) {
    this._onlineReaderValidationType = value;
  }

  public get onlineReaderValidationType() {
    return this._onlineReaderValidationType;
  }

  /**
   * Tipo de Validação da Leitora Offline
   */
  private _offlineReaderValidationType: ReaderValidationType;
  public set offlineReaderValidationType(value: ReaderValidationType) {
    this._offlineReaderValidationType = value;
  }

  public get offlineReaderValidationType() {
    return this._offlineReaderValidationType;
  }

  /**
   * Local Físico de Origem
   */
  private _originPhysicalLocation: PhysicalLocation;
  public set originPhysicalLocation(value: PhysicalLocation) {
    this._originPhysicalLocation = value;
  }

  public get originPhysicalLocation() {
    return this._originPhysicalLocation;
  }

  /**
   * Local Físico de Destino
   */
  private _destinyPhysicalLocation: PhysicalLocation;
  public set destinyPhysicalLocation(value: PhysicalLocation) {
    this._destinyPhysicalLocation = value;
  }

  public get destinyPhysicalLocation() {
    return this._destinyPhysicalLocation;
  }

  /**
   * Baixa Provisório na Saída
   */
  private _releaseProvisoryOnExit: boolean;
  public set releaseProvisoryOnExit(value: boolean) {
    this._releaseProvisoryOnExit = value;
  }

  public get releaseProvisoryOnExit() {
    return this._releaseProvisoryOnExit;
  }

  /**
   * Bloqueia Provisório na Saída
   */
  private _blockProvisoryOnExit: boolean;
  public set blockProvisoryOnExit(value: boolean) {
    this._blockProvisoryOnExit = value;
  }

  public get blockProvisoryOnExit() {
    return this._blockProvisoryOnExit;
  }

  /**
   * Valida Veículo
   */
  private _validateVehicle: boolean;
  public set validateVehicle(value: boolean) {
    this._validateVehicle = value;
  }

  public get validateVehicle() {
    return this._validateVehicle;
  }

  /**
   * Tempo do Alarme de Porta Aberta
   */
  private _heldOpenTime: number;
  public set heldOpenTime(value: number) {
    this._heldOpenTime = value;
  }

  public get heldOpenTime() {
    return this._heldOpenTime;
  }

  /**
   * Leitora Pairada
   */
  private _pairingInReaderInterface: boolean;
  public set pairingInReaderInterface(value: boolean) {
    this._pairingInReaderInterface = value;
  }

  public get pairingInReaderInterface() {
    return this._pairingInReaderInterface;
  }

  /**
   * Identificador da Leitora HeadKey
   */
  private _headKeyId: string;
  public set headKeyId(value: string) {
    this._headKeyId = value;
  }

  public get headKeyId() {
    return this._headKeyId;
  }

  /**
   * Formatos de Cartão
   */
  private _cardFormats: List<ReaderDeviceCardFormat>;
  public set cardFormats(value: List<ReaderDeviceCardFormat>) {
    this._cardFormats = value;
  }

  public get cardFormats() {
    return this._cardFormats;
  }

  /**
   * Saídas do Acionamento
   */
  private _activations: List<ReaderDeviceAction>;
  public set activations(value: List<ReaderDeviceAction>) {
    this._activations = value;
  }

  public get activations() {
    return this._activations;
  }

  /**
   * Dispositivo Pai
   */
  private _parent: Device;
  public set parent(value: Device) {
    this._parent = value;
  }

  public get parent() {
    return this._parent;
  }

  /**
   * Descrição do Dispositivo
   */
  private _description: string;
  public set description(value: string) {
    this._description = value;
  }

  public get description() {
    return this._description;
  }

  /**
   * Tipo do Dispositivo
   */
  private _deviceType: DeviceType;
  public set deviceType(value: DeviceType) {
    this._deviceType = value;
  }

  public get deviceType() {
    return this._deviceType;
  }

  /**
   * Situação do Dispositivo
   */
  private _situation: DeviceSituation;
  public set situation(value: DeviceSituation) {
    this._situation = value;
  }

  public get situation() {
    return this._situation;
  }

  /**
   * Local Físico do Dispositivo
   */
  private _physicalLocation: PhysicalLocation;
  public set physicalLocation(value: PhysicalLocation) {
    this._physicalLocation = value;
  }

  public get physicalLocation() {
    return this._physicalLocation;
  }

  /**
   * Status de Comunicação
   */
  private _communicationStatus: DeviceCommunicationStatus;
  public set communicationStatus(value: DeviceCommunicationStatus) {
    this._communicationStatus = value;
  }

  public get communicationStatus() {
    return this._communicationStatus;
  }

  /**
   * Dispositivo Integrado
   */
  private _integrated: boolean;
  public set integrated(value: boolean) {
    this._integrated = value;
  }

  public get integrated() {
    return this._integrated;
  }

  /**
   * Configuração Extensível
   */
  private _extensibleConfiguration: ExtensibleConfiguration;
  public set extensibleConfiguration(value: ExtensibleConfiguration) {
    this._extensibleConfiguration = value;
  }

  public get extensibleConfiguration() {
    return this._extensibleConfiguration;
  }
};

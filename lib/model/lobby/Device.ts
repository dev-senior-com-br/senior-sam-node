import { BaseModel } from '../BaseModel';
import {
  PhysicalLocation,
  ExtensibleConfiguration,
  DeviceCommunicationStatus,
  DeviceSituation,
  DeviceType,
} from '../../..';

export = class Device extends BaseModel {
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

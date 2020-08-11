import { BaseModel } from '../BaseModel';
import {
  IncidentPriority,
  IncidentTypeReactionManagerDevice,
  IncidentTypeAction,
  IncidentTypeReactionEmail,
} from '../../..';
import List from '../List';

export = class IncidentType extends BaseModel {
  /**
   * ID
   */
  private _id: number;
  private set id(value: number) {
    this._id = value;
  }

  private get id() {
    return this._id;
  }

  /**
   * Nome
   */
  private _name: string;
  private set name(value: string) {
    this._name = value;
  }

  private get name() {
    return this._name;
  }

  /**
   * Descrição
   */
  private _description: string;
  private set description(value: string) {
    this._description = value;
  }

  private get description() {
    return this._description;
  }

  /**
   * Monitorado
   */
  private _monitored: boolean;
  private set monitored(value: boolean) {
    this._monitored = value;
  }

  private get monitored() {
    return this._monitored;
  }

  /**
   * Prioridade Padrão
   */
  private _defaultPriority: IncidentPriority;
  private set defaultPriority(value: IncidentPriority) {
    this._defaultPriority = value;
  }

  private get defaultPriority() {
    return this._defaultPriority;
  }

  /**
   * Emails
   */
  private _emails: List<IncidentTypeReactionEmail>;
  private set emails(value: List<IncidentTypeReactionEmail>) {
    this._emails = value;
  }

  private get emails() {
    return this._emails;
  }

  /**
   * Acionamentos
   */
  private _activations: List<IncidentTypeAction>;
  private set activations(value: List<IncidentTypeAction>) {
    this._activations = value;
  }

  private get activations() {
    return this._activations;
  }

  /**
   * Gerênciadores
   */
  private _managerDevices: List<IncidentTypeReactionManagerDevice>;
  private set managerDevices(value: List<IncidentTypeReactionManagerDevice>) {
    this._managerDevices = value;
  }

  private get managerDevices() {
    return this._managerDevices;
  }
};

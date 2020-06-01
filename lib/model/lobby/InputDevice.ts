import { BaseModel } from "../BaseModel";
import List from "../List";
import Device from "./Device";
import { DeviceType, DeviceSituation, PhysicalLocation, DeviceCommunicationStatus, ExtensibleConfiguration, IncidentType, IncidentPriority, OutputDeviceActivations, InputState } from "../../..";
import InputMasking from "./InputMasking";

export default class InputDevice extends BaseModel {
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
     * Gera Incidente
     */
    private _generateIncident: boolean;
    private set generateIncident(value: boolean) {
        this._generateIncident = value;
    }

    private get generateIncident() {
        return this._generateIncident;
    }

    /**
     * Endereço
     */
    private _address: number;
    private set address(value: number) {
        this._address = value;
    }

    private get address() {
        return this._address;
    }

    /**
     * Estado Padrão da Entrada
     */
    private _defaultState: InputState;
    private set defaultState(value: InputState) {
        this._defaultState = value;
    }

    private get defaultState() {
        return this._defaultState;
    }

    /**
     * Delay de Ativação da Entrada
     */
    private _activationDelay: number;
    private set activationDelay(value: number) {
        this._activationDelay = value;
    }

    private get activationDelay() {
        return this._activationDelay;
    }

    /**
     * Estado Atual da Entrada
     */
    private _inputState: InputState;
    private set inputState(value: InputState) {
        this._inputState = value;
    }

    private get inputState() {
        return this._inputState;
    }

    /**
     * Tipo de Incidente
     */
    private _incidentType: IncidentType;
    private set incidentType(value: IncidentType) {
        this._incidentType = value;
    }

    private get incidentType() {
        return this._incidentType;
    }

    /**
     * Prioridade do Incidente
     */
    private _incidentPriority: IncidentPriority;
    private set incidentPriority(value: IncidentPriority) {
        this._incidentPriority = value;
    }

    private get incidentPriority() {
        return this._incidentPriority;
    }

    /**
     * Mascaramentos da Entrada
     */
    private _masks: List<InputMasking>;
    private set masks(value: List<InputMasking>) {
        this._masks = value;
    }

    private get masks() {
        return this._masks;
    }

    /**
     * Acionamentos
     */
    private _activations: List<OutputDeviceActivations>;
    private set activations(value: List<OutputDeviceActivations>) {
        this._activations = value;
    }

    private get activations() {
        return this._activations;
    }

    /**
     * Dispositivo Pai
     */
    private _parent: Device;
    private set parent(value: Device) {
        this._parent = value;
    }

    private get parent() {
        return this._parent;
    }

    /**
     * Descrição do Dispositivo
     */
    private _description: string;
    private set description(value: string) {
        this._description = value;
    }

    private get description() {
        return this._description;
    }

    /**
     * Tipo do Dispositivo
     */
    private _deviceType: DeviceType;
    private set deviceType(value: DeviceType) {
        this._deviceType = value;
    }

    private get deviceType() {
        return this._deviceType;
    }

    /**
     * Situação do Dispositivo
     */
    private _situation: DeviceSituation;
    private set situation(value: DeviceSituation) {
        this._situation = value;
    }

    private get situation() {
        return this._situation;
    }

    /**
     * Local Físico do Dispositivo
     */
    private _physicalLocation: PhysicalLocation;
    private set physicalLocation(value: PhysicalLocation) {
        this._physicalLocation = value;
    }

    private get physicalLocation() {
        return this._physicalLocation;
    }

    /**
     * Status de Comunicação
     */
    private _communicationStatus: DeviceCommunicationStatus;
    private set communicationStatus(value: DeviceCommunicationStatus) {
        this._communicationStatus = value;
    }

    private get communicationStatus() {
        return this._communicationStatus;
    }

    /**
     * Dispositivo Integrado
     */
    private _integrated: boolean;
    private set integrated(value: boolean) {
        this._integrated = value;
    }

    private get integrated() {
        return this._integrated;
    }

    /**
     * Configuração Extensível
     */
    private _extensibleConfiguration: ExtensibleConfiguration;
    private set extensibleConfiguration(value: ExtensibleConfiguration) {
        this._extensibleConfiguration = value;
    }

    private get extensibleConfiguration() {
        return this._extensibleConfiguration;
    }

}
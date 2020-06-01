import { BaseModel } from "../BaseModel";
import Person from "./Person";
import { CredentialFormat, PhysicalLocation } from "../../..";
import Role from "./Role";
import Group from "./Group";

export default class ScheduledCredential extends BaseModel {
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
     * Pessoa
     */
    private _person: Person;

    /**
     * Data do Agendamento
     */
    private _scheludingDate: Date;
    /**
     * Formato da Credencial
     */
    private _credentialFormat: CredentialFormat;

    /**
     * Papel
     */
    private _role: Role;
    /**
     * Grupo
     */
    private _group: Group;

    /**
     * Data Final
     */
    private _endDate: Date;

    /**
     * Pessoa Visitada
     */
    private _visitedPerson: Person;

    /**
     * Localizador
     */
    private _locator: string;

    /**
     * Local da Visita
     */
    private _visitedPlace: PhysicalLocation;
}
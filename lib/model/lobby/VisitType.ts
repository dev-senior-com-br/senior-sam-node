import { BaseModel } from "../BaseModel";
import { VisitProcedure, Role, VisitResource } from "../../..";

export default class VisitType extends BaseModel {
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
     * Nome do tipo de visita
     */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
     * Procedimentos da visita
     */
    private _visitProcedures: VisitProcedure;
    public set visitProcedures(value: VisitProcedure) {
        this._visitProcedures = value;
    }

    public get visitProcedures() {
        return this._visitProcedures;
    }

    /**
     * Papel padrão para o tipo de visita
     */
    private _role: Role;
    public set role(value: Role) {
        this._role = value;
    }

    public get role() {
        return this._role;
    }

    /**
     * Recursos padrão do tipo de visita
     */
    private _visitResources: VisitResource;
    public set visitResources(value: VisitResource) {
        this._visitResources = value;
    }

    public get visitResources() {
        return this._visitResources;
    }

    /**
     * Flag se o tipo de visita é utilizado pelo totem
     */
    private _usedBySelfServiceTerminal: boolean;
    public set usedBySelfServiceTerminal(value: boolean) {
        this._usedBySelfServiceTerminal = value;
    }

    public get usedBySelfServiceTerminal() {
        return this._usedBySelfServiceTerminal;
    }

    /**
     * Flag se envia email de notificação ao visitado"
     */
    private _sendEmailToVisited: boolean;
    public set sendEmailToVisited(value: boolean) {
        this._sendEmailToVisited = value;
    }

    public get sendEmailToVisited() {
        return this._sendEmailToVisited;
    }

    /**
     * Possui integração com GAS => default:false
     */
    private _integratedWithGAS: boolean;
    public set integratedWithGAS(value: boolean) {
        this._integratedWithGAS = value;
    }

    public get integratedWithGAS() {
        return this._integratedWithGAS;
    }

}
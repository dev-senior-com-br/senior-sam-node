import { BaseModel } from "../BaseModel";
import { PhysicalLocation } from "../../..";
import List from "../List";
import GroupPerson from "./GroupPerson";

export = class Group extends BaseModel {
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
     * ID do Pai
     */
    private _parent: number;
    public set parent(value: number) {
        this._parent = value;
    }

    public get parent() {
        return this._parent;
    }

    /**
     * Nome do Grupo
     */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
     * Local Físico
     */
    private _physicalLocation: PhysicalLocation;
    public set physicalLocation(value: PhysicalLocation) {
        this._physicalLocation = value;
    }

    public get physicalLocation() {
        return this._physicalLocation;
    }

    /**
     * Vaga de Estacionamento
     */
    private _parkingSpace: number;
    public set parkingSpace(value: number) {
        this._parkingSpace = value;
    }

    public get parkingSpace() {
        return this._parkingSpace;
    }

    /**
     * Vaga de Estacionamento em Uso
     */
    private _parkingSpaceInUse: number;
    public set parkingSpaceInUse(value: number) {
        this._parkingSpaceInUse = value;
    }

    public get parkingSpaceInUse() {
        return this._parkingSpaceInUse;
    }

    /**
     * Pessoas do Grupo
     */
    private _people: List<GroupPerson>;
    public set people(value: List<GroupPerson>) {
        this._people = value;
    }

    public get people() {
        return this._people;
    }

    /**
     * Caminho hierárquico completo
     */
    private _fullHierarchicalPath: string;
    public set fullHierarchicalPath(value: string) {
        this._fullHierarchicalPath = value;
    }

    public get fullHierarchicalPath() {
        return this._fullHierarchicalPath;
    }
}
import { BaseModel } from '../BaseModel';
import OrganizationalStructureType from './OrganizationalStructureType';

export = class OrganizationalStructure extends BaseModel {
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
     * Estrutura organizacional pai
     */
    private _parent: number;
    public set parent(value: number) {
      this._parent = value;
    }

    public get parent() {
      return this._parent;
    }

    /**
     * Tipo da estrutura organizacional
     */
    private _organizationalStructureType: OrganizationalStructureType;
    public set organizationalStructureType(value: OrganizationalStructureType) {
      this._organizationalStructureType = value;
    }

    public get organizationalStructureType() {
      return this._organizationalStructureType;
    }

    /**
     * Descrição
     */
    private _description: string;
    public set description(value: string) {
      this._description = value;
    }

    public get description() {
      return this._description;
    }

    /**
     * Realiza Validação de Papel
     */
    private _integrated: boolean;
    public set integrated(value: boolean) {
      this._integrated = value;
    }

    public get integrated() {
      return this._integrated;
    }

}
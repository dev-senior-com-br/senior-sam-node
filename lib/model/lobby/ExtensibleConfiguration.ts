import { BaseModel } from "../BaseModel";
import List from "../List";
import ExtensibleProperty from "./ExtensibleProperty";

export = class ExtensibleConfiguration extends BaseModel {
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
     * Nome da Configuração Extensível
     */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
     * Lista de Propriedade Extensível
     */
    private _extensibleProperty: List<ExtensibleProperty>;
    public set extensibleProperty(value: List<ExtensibleProperty>) {
        this._extensibleProperty = value;
    }

    public get extensibleProperty() {
        return this._extensibleProperty;
    }

}
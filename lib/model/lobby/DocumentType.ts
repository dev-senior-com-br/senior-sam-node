import { BaseModel } from "../BaseModel";

export default class DocumentType extends BaseModel {

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
     * Nome do Tipo de Documento
     */
    private _name: string;
    public set name(value: string){
        this._name = value;
    }

    public get name(){
        return this._name;
    }    

    /**
     * Label de Apresentação
     */
    private _label: string;
    public set label(value: string){
        this._label = value;
    }

    public get label(){
        return this._label;
    }

    /**
     * Máscara
     */
    private _mask: string;
    public set mask(value: string) {
        this._mask = value;
    }

    public get mask(){
        return this._mask;
    }

    /**
     * Documento Obrigatório
     */
    private _required: boolean;
    public set required(value: boolean){
        this._required = value;
    }

    public get required() {
        return this._required;
    }

    /**
     * Documento Utilizado pelo REP
     */
    private _useOnREP: boolean;
    public set useOnREP(value: boolean) {
        this._useOnREP = value;
    }

    public get useOnREP() {
        return this._useOnREP;
    }

}
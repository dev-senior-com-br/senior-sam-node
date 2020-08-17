import { BaseModel } from '../BaseModel';
import { Person, DocumentType } from '../../..';

export = class Document extends BaseModel {

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
    public set person(value: Person) {
      this._person = value;
    }

    public get person() {
      return this._person;
    }

    /**
     * Tipo de Documento
     */
    private _documentType: DocumentType;

    
    /**
     * Documento
     */
    private _document: string;
}
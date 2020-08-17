import { BaseModel } from '../BaseModel';

export = class Timezone extends BaseModel {
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
     * Nome do Timezone
     */
    private _name: string;
    public set name(value: string) {
      this._name = value;
    }

    public get name() {
      return this._name;
    }
    /**
     * Offset em Minutos do Timezone
     */
    private _timezoneOffset: number;
    public set timezoneOffset(value: number) {
      this._timezoneOffset = value;
    }

    public get timezoneOffset() {
      return this._timezoneOffset;
    }
}
import { BaseModel } from '../BaseModel';

export = class Phone extends BaseModel {
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
     * Telefone Preferencial
     */
    private _preferential = false;
    public set preferential(value: boolean) {
      this._preferential = value;
    }

    public get preferential() {
      return this._preferential;
    }


    /**
     * DDI/IDD (International Direct Dialing)
     */
    private _idd: number;
    public set idd(value: number) {
      this._idd = value;
    }

    public get idd() {
      return this._idd;
    }


    /**
     * Número do Telefone
     */
    private _number: string;
    public set number(value: string) {
      this._number = value;
    }

    public get number() {
      return this._number;
    }

    /**
     * Ramal
     */
    private _phoneExtension: string;
    public set phoneExtension(value: string) {
      this._phoneExtension = value;
    }

    public get phoneExtension() {
      return this._phoneExtension;
    }

}
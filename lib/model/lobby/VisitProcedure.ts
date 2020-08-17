import { BaseModel } from '../BaseModel';
import VisitType from './VisitType';
import { Procedure } from '../../..';

export = class VisitProcedure extends BaseModel {
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
     * Tipo da visita
     */
    private _visitType: VisitType;
    public set visitType(value: VisitType) {
      this._visitType = value;
    }

    public get visitType() {
      return this._visitType;
    }

    /**
     * Procedimento
     */
    private _procedure: Procedure;
    public set procedure(value: Procedure) {
      this._procedure = value;
    }

    public get procedure() {
      return this._procedure;
    }

    /**
     * Flag sinalizando se execução do procedimento é obrigatória
     */
    private _required: boolean;
    public set required(value: boolean) {
      this._required = value;
    }

    public get requiredd() {
      return this._required;
    }

    /**
     * Possui integração com GAS => default:false
     */
    private _integratedWithGAS: boolean;
    public set integratedWithGAS(value: boolean) {
      this._integratedWithGAS = value;
    }

    public getintegratedWithGAS() {
      return this._integratedWithGAS;
    }

}
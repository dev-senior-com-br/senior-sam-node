import { BaseModel } from '../BaseModel';

export = class PersonSituation extends BaseModel {
  /**
     * ID
     */
    private _id:number;
    public set id(value: number) {
      this._id = value;
    }

    public get id() {
      return this._id;
    }

    /**
     * Data do Bloqueio
     */
    private _blockDate:Date;
    public set blockDate(value: Date) {
      this._blockDate = value;
    }

    public get blockDate() {
      return this._blockDate;
    }

    /**
     * Motivo do Bloqueio
     */
    private _blockReason:string;
    public set blockReason(value: string) {
      this._blockReason = value;
    }

    public get blockReason() {
      return this._blockReason;
    }

    /**
     * Data do Desbloqueio
     */
    private _unblockDate:Date;
    public set unblockDate(value: Date) {
      this._unblockDate = value;
    }

    public get unblockDate() {
      return this._unblockDate;
    }

    /**
     * Procedimento de Desbloqueio
     */
    private _unblockProcedure:string;
    public set unblockProcedure(value: string) {
      this._unblockProcedure = value;
    }

    public get unblockProcedure() {
      return this._unblockProcedure;
    }

    /**
     * Justificativa do Desbloqueio
     */
    private _unblockJustification:string;
    public set unblockJustification(value: string) {
      this._unblockJustification = value;
    }

    public get unblockJustification() {
      return this._unblockJustification;
    }
}
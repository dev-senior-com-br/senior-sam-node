import InformationCardCredentialRecord from './InformationCardCredentialRecord';
import BaseCreateProvisoryCredential from './BaseCreateProvisoryCredential';
import Visitor from './Visitor';
import List from '../List';

export = class CreateVisitorProvisoryCredential extends BaseCreateProvisoryCredential {
  /**
   * O papel da credencial que o visitante vai assumir, usado principalmente para visitantes sem 
   * cadastro prévio, cadastro em sam-aplicacao-backend/entities/role
   */
  private _roleId: number;

  public set roleId(value: number) {
    this._roleId = value;
  }

  public get roleId() {
    return this._roleId;
  }

  /**
   * O visitante que receberá a credencial
   */
  private _visitor: Visitor;

  public set visitor(value: Visitor) {
    this._visitor = value;
  }

  public get visitor() {
    return this._visitor;
  }

  /**
   * O agendamento relacionado à credencial, id da entidade scheduling, apenas para visitas agendadas
   */
  private _schedulingId: number;

  public set schedulingId(value: number) {
    this._schedulingId = value;
  }

  public get schedulingId() {
    return this._schedulingId;
  }

  /**
   * This convenience constructor allows initialization of all required fields.
   */
  constructor(
    isCheckedOverlap: boolean,
    cardCredentialList: List<InformationCardCredentialRecord>,
    endDate: Date,
    roleId: number,
    visitor: Visitor,
    schedulingId: number
  ) {
    super(isCheckedOverlap, cardCredentialList, endDate);
    this._roleId = roleId;
    this._visitor = visitor;
    this._schedulingId = schedulingId;
  }
};

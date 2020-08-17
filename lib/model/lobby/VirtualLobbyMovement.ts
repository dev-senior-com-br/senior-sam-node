import { BaseModel } from '../BaseModel';
import { VirtualLobby, Person, MovementDirection, Role, AccessCall } from '../../..';

export = class VirtualLobbyMovement extends BaseModel {
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
     * Portaria Virtual
     */
    private _virtualLobby: VirtualLobby;
    public set virtualLobby(value: VirtualLobby) {
      this._virtualLobby = value;
    }

    public get virtualLobby() {
      return this._virtualLobby;
    }

    /**
     * Visitante     
     */
    private _visitor: Person;
    public set visitor(value: Person) {
      this._visitor = value;
    }

    public get visitor() {
      return this._visitor;
    }

    /**
     * Visitado
     */
    private _visited: Person;
    public set visited(value: Person) {
      this._visited = value;
    }

    public get visited() {
      return this._visited;
    }

    /**
     * Responsável
     */
    private _responsible: Person;
    public set responsible(value: Person) {
      this._responsible = value;
    }

    public get responsible() {
      return this._responsible;
    }

    /**
     * Direção da movimentação
     */
    private _movementDirection: MovementDirection;
    public set movementDirection(value: MovementDirection) {
      this._movementDirection = value;
    }

    public get movementDirection() {
      return this._movementDirection;
    }

    /**
     * Data de criação
     */
    private _createdAt: Date;
    public set createdAt(value: Date) {
      this._createdAt = value;
    }

    public get createdAt() {
      return this._createdAt;
    }

    /**
     * Papél
     */
    private _role: Role;
    public set role (value: Role){
      this._role = value;
    }

    public get role() {
      return this._role;
    }

    /**
     * Chamada de Acesso
     */
    private _accessCall: AccessCall;
    public set accessCall(value: AccessCall){
      this._accessCall = value;
    }

    public get accessCall(){
      return this._accessCall;
    }
}
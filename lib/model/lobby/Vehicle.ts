import { BaseModel } from "../BaseModel";
import Role from "./Role";
import { PhysicalLocation, PersonVehicle, VehicleUse } from "../../..";
import List from "../List";

export default class Vehicle extends BaseModel {
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
     * Uso do Veículo
     */
    private _vehicleUse:VehicleUse;

    /**
     * Fabricante
     */
    private _manufacturer:string;

    /**
     * Modelo
     */
    private _model:string;

    /**
     * Placa
     */
    private _plate:string;

    /**
     * Papel do veículo
     */
    private _role:Role;

    /**
     * Local físico
     */
    private _physicalLocation:PhysicalLocation;

    /**
     * Data do Último Acesso
     */
    private _lastAccess:Date;

    /**
     * Pessoa Veículo
     */
    private _personVehicles:List<PersonVehicle>;

}
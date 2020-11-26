/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Credential } from './credential';
import { PersonVehicle } from './personVehicle';
import { PhysicalLocation } from './physicalLocation';
import { Role } from './role';
import { VehicleColor } from './vehicleColor';
import { VehicleUse } from './vehicleUse';


export interface Vehicle { 
    role?: Role;
    physicalLocation?: PhysicalLocation;
    color?: VehicleColor;
    /**
     * Credênciais do Veículo
     */
    credentials?: Array<Credential>;
    /**
     * Pessoa Veículo
     */
    personVehicles?: Array<PersonVehicle>;
    vehicleUse: VehicleUse;
    /**
     * Modelo
     */
    model: string;
    /**
     * Placa
     */
    plate: string;
    /**
     * Data do Último Acesso
     */
    lastAccess?: Date;
    /**
     * ID
     */
    id?: number;
    /**
     * Fabricante
     */
    manufacturer: string;
}

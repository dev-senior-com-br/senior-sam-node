/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 * OpenAPI spec version: 4.7.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PhysicalLocation } from './physicalLocation';
import { Role } from './role';


export interface RoleAuthorizePhysicalLocation { 
    role?: Role;
    physicalLocation?: PhysicalLocation;
    /**
     * ID
     */
    id?: number;
}

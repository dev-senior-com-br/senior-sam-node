/**
 * Aplicação
 * Serviço do backend da aplicação do Ronda senior X
 *
 * OpenAPI spec version: 4.9.1
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AccessCreditRangeList } from './accessCreditRangeList';
import { Role } from './role';


export interface RoleAccessCreditRangeList { 
    accessCreditRangeList?: AccessCreditRangeList;
    role?: Role;
    /**
     * ID
     */
    id?: number;
}

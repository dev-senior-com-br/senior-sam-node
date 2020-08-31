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
import { Blueprint } from './blueprint';
import { Camera } from './camera';


export interface BlueprintCamera { 
    blueprint?: Blueprint;
    /**
     * Latitude
     */
    latitude?: number;
    /**
     * ID
     */
    id?: number;
    camera?: Camera;
    /**
     * Longitude
     */
    longitude?: number;
}
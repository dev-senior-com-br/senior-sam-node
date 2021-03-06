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
import { CardTechnology } from './cardTechnology';
import { Credential } from './credential';


export interface CardCredential { 
    credential?: Credential;
    cardTechnology: CardTechnology;
    /**
     * ID
     */
    id?: number;
    /**
     * Número do Cartão
     */
    cardNumber: number;
}

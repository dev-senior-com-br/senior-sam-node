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


export type AccessEventType = 'ACCESS_VALID' | 'ACCESS_DENIED_PERMISSION' | 'ACCESS_DENIED_SITUATION' | 'ACCESS_DENIED_CARD_VALIDITY' | 'ACCESS_DENIED_LEVEL_CONTROLER' | 'ACCESS_DENIED_CREDIT_ACCESS' | 'ACCESS_DENIED_ROLE_RANGE' | 'ACCESS_DENIED_LOCAL_RANGE' | 'ACCESS_DENIED_CARD_NOT_FOUND' | 'ACCESS_VALID_ACCOMPANY' | 'ACCESS_DENIED_ACCOMPANY' | 'ACCESS_DENIED_INVALID_AUTHORIZER' | 'ACCESS_DENIED_WAITING_FOR_NEXT_VALIDATION' | 'ACCESS_DENIED_ANTI_PASSBACK' | 'ACCESS_DENIED_CREDIT_RANGE' | 'ACCESS_DENIED_STOCKING_CONTROL' | 'ACCESS_DENIED_NOT_PARKING_SPACE_TYPE' | 'ACCESS_DENIED_NOT_PARKING_SPACE' | 'ACCESS_COERCION' | 'ACCESS_DENIED_BIOMETRY' | 'ACCESS_DENIED_CARD_FORMAT_ERROR' | 'ACCESS_DENIED_FACILITY_CODE' | 'ACCESS_DENIED_PASSWORD' | 'ACCESS_DENIED_SECOND_CARD_NOT_PRESENTED' | 'ACCESS_DESISTENCE' | 'ACCESS_VALID_AUTHORIZER' | 'ACCESS_VALID_FACILITY_CODE' | 'ACCESS_VALID_FRAUD' | 'ACCESS_VALID_OUT_REPOSE' | 'ACCESS_DENIED' | 'ACCESS_DENIED_CREDENTIAL_NOT_FOUND' | 'ACCESS_DENIED_CREDENTIAL_VALIDITY' | 'ACCESS_DENIED_INVALID_VEHICLE_CREDENTIAL_FORMAT' | 'ACCESS_DENIED_INVALID_VEHICLE_CARD_CREDENTIAL' | 'ACCESS_DENIED_WAITING_VEHICLE' | 'ACCESS_DENIED_READER_NOT_VALIDATE_VEHICLE' | 'ACCESS_DENIED_PERSON_NOT_ASSOCIATED_WITH_VEHICLE' | 'ACCESS_DENIED_CUSTOM_VALIDATION' | 'ACCESS_DENIED_BLOCK_PROVISORY_ON_EXIT';

export const AccessEventType = {
  VALID: 'ACCESS_VALID' as AccessEventType,
  DENIEDPERMISSION: 'ACCESS_DENIED_PERMISSION' as AccessEventType,
  DENIEDSITUATION: 'ACCESS_DENIED_SITUATION' as AccessEventType,
  DENIEDCARDVALIDITY: 'ACCESS_DENIED_CARD_VALIDITY' as AccessEventType,
  DENIEDLEVELCONTROLER: 'ACCESS_DENIED_LEVEL_CONTROLER' as AccessEventType,
  DENIEDCREDITACCESS: 'ACCESS_DENIED_CREDIT_ACCESS' as AccessEventType,
  DENIEDROLERANGE: 'ACCESS_DENIED_ROLE_RANGE' as AccessEventType,
  DENIEDLOCALRANGE: 'ACCESS_DENIED_LOCAL_RANGE' as AccessEventType,
  DENIEDCARDNOTFOUND: 'ACCESS_DENIED_CARD_NOT_FOUND' as AccessEventType,
  VALIDACCOMPANY: 'ACCESS_VALID_ACCOMPANY' as AccessEventType,
  DENIEDACCOMPANY: 'ACCESS_DENIED_ACCOMPANY' as AccessEventType,
  DENIEDINVALIDAUTHORIZER: 'ACCESS_DENIED_INVALID_AUTHORIZER' as AccessEventType,
  DENIEDWAITINGFORNEXTVALIDATION: 'ACCESS_DENIED_WAITING_FOR_NEXT_VALIDATION' as AccessEventType,
  DENIEDANTIPASSBACK: 'ACCESS_DENIED_ANTI_PASSBACK' as AccessEventType,
  DENIEDCREDITRANGE: 'ACCESS_DENIED_CREDIT_RANGE' as AccessEventType,
  DENIEDSTOCKINGCONTROL: 'ACCESS_DENIED_STOCKING_CONTROL' as AccessEventType,
  DENIEDNOTPARKINGSPACETYPE: 'ACCESS_DENIED_NOT_PARKING_SPACE_TYPE' as AccessEventType,
  DENIEDNOTPARKINGSPACE: 'ACCESS_DENIED_NOT_PARKING_SPACE' as AccessEventType,
  COERCION: 'ACCESS_COERCION' as AccessEventType,
  DENIEDBIOMETRY: 'ACCESS_DENIED_BIOMETRY' as AccessEventType,
  DENIEDCARDFORMATERROR: 'ACCESS_DENIED_CARD_FORMAT_ERROR' as AccessEventType,
  DENIEDFACILITYCODE: 'ACCESS_DENIED_FACILITY_CODE' as AccessEventType,
  DENIEDPASSWORD: 'ACCESS_DENIED_PASSWORD' as AccessEventType,
  DENIEDSECONDCARDNOTPRESENTED: 'ACCESS_DENIED_SECOND_CARD_NOT_PRESENTED' as AccessEventType,
  DESISTENCE: 'ACCESS_DESISTENCE' as AccessEventType,
  VALIDAUTHORIZER: 'ACCESS_VALID_AUTHORIZER' as AccessEventType,
  VALIDFACILITYCODE: 'ACCESS_VALID_FACILITY_CODE' as AccessEventType,
  VALIDFRAUD: 'ACCESS_VALID_FRAUD' as AccessEventType,
  VALIDOUTREPOSE: 'ACCESS_VALID_OUT_REPOSE' as AccessEventType,
  DENIED: 'ACCESS_DENIED' as AccessEventType,
  DENIEDCREDENTIALNOTFOUND: 'ACCESS_DENIED_CREDENTIAL_NOT_FOUND' as AccessEventType,
  DENIEDCREDENTIALVALIDITY: 'ACCESS_DENIED_CREDENTIAL_VALIDITY' as AccessEventType,
  DENIEDINVALIDVEHICLECREDENTIALFORMAT: 'ACCESS_DENIED_INVALID_VEHICLE_CREDENTIAL_FORMAT' as AccessEventType,
  DENIEDINVALIDVEHICLECARDCREDENTIAL: 'ACCESS_DENIED_INVALID_VEHICLE_CARD_CREDENTIAL' as AccessEventType,
  DENIEDWAITINGVEHICLE: 'ACCESS_DENIED_WAITING_VEHICLE' as AccessEventType,
  DENIEDREADERNOTVALIDATEVEHICLE: 'ACCESS_DENIED_READER_NOT_VALIDATE_VEHICLE' as AccessEventType,
  DENIEDPERSONNOTASSOCIATEDWITHVEHICLE: 'ACCESS_DENIED_PERSON_NOT_ASSOCIATED_WITH_VEHICLE' as AccessEventType,
  DENIEDCUSTOMVALIDATION: 'ACCESS_DENIED_CUSTOM_VALIDATION' as AccessEventType,
  DENIEDBLOCKPROVISORYONEXIT: 'ACCESS_DENIED_BLOCK_PROVISORY_ON_EXIT' as AccessEventType
};
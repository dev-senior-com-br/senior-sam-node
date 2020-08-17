enum AccessEventType {
       /**
     * Acesso Permitido
     */
    ACCESS_VALID = 'ACCESS_VALID',

    /**
     * Acesso Negado por Local Não Permitido
     */
    ACCESS_DENIED_PERMISSION = 'ACCESS_DENIED_PERMISSION',

    /**
     * Acesso Negado Pela Situação
     */
    ACCESS_DENIED_SITUATION = 'ACCESS_DENIED_SITUATION',

    /**
     * Acesso Negado por Validade do Cartão
     */
    ACCESS_DENIED_CARD_VALIDITY = 'ACCESS_DENIED_CARD_VALIDITY',
    
    /**
     * Acesso Negado Pelo Controle de Nível
     */
    ACCESS_DENIED_LEVEL_CONTROLER = 'ACCESS_DENIED_LEVEL_CONTROLER',

    /**
     * Acesso Negado por Falta de Crédito Para Acesso
     */
    ACCESS_DENIED_CREDIT_ACCESS = 'ACCESS_DENIED_CREDIT_ACCESS',

    /**
     * Acesso Negado Pela Faixa Horária do Papel
     */
    ACCESS_DENIED_ROLE_RANGE = 'ACCESS_DENIED_ROLE_RANGE',

    /**
     * Acesso Negado Pela Faixa Horária do Local
     */
    ACCESS_DENIED_LOCAL_RANGE = 'ACCESS_DENIED_LOCAL_RANGE',

    /**
     * Acesso Negado Cartão Não Encontrado
     */
    ACCESS_DENIED_CARD_NOT_FOUND = 'ACCESS_DENIED_CARD_NOT_FOUND',

    /**
     * Acesso Permitido, Acompanhado Pelo Autorizador
     */
    ACCESS_VALID_ACCOMPANY = 'ACCESS_VALID_ACCOMPANY',

    /**
     * Acesso Negado, Acompanhado Pelo Autorizador
     */
    ACCESS_DENIED_ACCOMPANY = 'ACCESS_DENIED_ACCOMPANY',

    /**
     * Acesso Negado, Autorizador Incorreto
     */
    ACCESS_DENIED_INVALID_AUTHORIZER = 'ACCESS_DENIED_INVALID_AUTHORIZER',

    /**
     * Acesso Negado, Aguardando Próxima Validação
     */
    ACCESS_DENIED_WAITING_FOR_NEXT_VALIDATION = 'ACCESS_DENIED_WAITING_FOR_NEXT_VALIDATION',

    /**
     * Acesso Negado, Bloqueado por Antidupla
     */
    ACCESS_DENIED_ANTI_PASSBACK = 'ACCESS_DENIED_ANTI_PASSBACK',

    /**
     * Acesso Negado Fora da Faixa de Crédito de Acesso
     */
    ACCESS_DENIED_CREDIT_RANGE = 'ACCESS_DENIED_CREDIT_RANGE',

    /**
     * Acesso Negado, Lotação Atingida
     */
    ACCESS_DENIED_STOCKING_CONTROL = 'ACCESS_DENIED_STOCKING_CONTROL',

    /**
     * Acesso Negado, Tipo de Vaga Indisponível
     */
    ACCESS_DENIED_NOT_PARKING_SPACE_TYPE = 'ACCESS_DENIED_NOT_PARKING_SPACE_TYPE',

    /**
     * Acesso Negado, Sem Vaga
     */
    ACCESS_DENIED_NOT_PARKING_SPACE = 'ACCESS_DENIED_NOT_PARKING_SPACE',

    /**
     * Acesso Sob Coação
     */
    ACCESS_COERCION = 'ACCESS_COERCION',

    /**
     * Acesso Negado Biometria
     */
    ACCESS_DENIED_BIOMETRY = 'ACCESS_DENIED_BIOMETRY',

    /**
     * Acesso Negado Formato de Cartão Inválido
     */
    ACCESS_DENIED_CARD_FORMAT_ERROR = 'ACCESS_DENIED_CARD_FORMAT_ERROR',

    /**
     * Acesso Negado Facility Code
     */
    ACCESS_DENIED_FACILITY_CODE = 'ACCESS_DENIED_FACILITY_CODE',

    /**
     * Acesso Negado Password
     */
    ACCESS_DENIED_PASSWORD = 'ACCESS_DENIED_PASSWORD',

    /**
     * Acesso Negado Segundo Cartão Não Apresentado
     */
    ACCESS_DENIED_SECOND_CARD_NOT_PRESENTED = 'ACCESS_DENIED_SECOND_CARD_NOT_PRESENTED',

    /**
     * Desistência de Acesso
     */
    ACCESS_DESISTENCE = 'ACCESS_DESISTENCE',
    
    /**
     * Acesso Válido Autorizador
     */
    ACCESS_VALID_AUTHORIZER = 'ACCESS_VALID_AUTHORIZER',

    /**
     * Acesso Válido Facility Code
     */
    ACCESS_VALID_FACILITY_CODE = 'ACCESS_VALID_FACILITY_CODE',

    /**
     * Acesso Válido Burla
     */
    ACCESS_VALID_FRAUD = 'ACCESS_VALID_FRAUD',

    /**
     * Acesso Válido Fora do Repouso
     */
    ACCESS_VALID_OUT_REPOSE = 'ACCESS_VALID_OUT_REPOSE',

    /**
     * Acesso Negado que Não Entra nas Outras Opções
     */
    ACCESS_DENIED = 'ACCESS_DENIED',

    /**
     * Acesso Negado por Credencial Não Encontrada
     */
    ACCESS_DENIED_CREDENTIAL_NOT_FOUND = 'ACCESS_DENIED_CREDENTIAL_NOT_FOUND',

    /**
     * Acesso Negado por Validade de Credencial
     */
    ACCESS_DENIED_CREDENTIAL_VALIDITY = 'ACCESS_DENIED_CREDENTIAL_VALIDITY',

    /**
     * Acesso Negado por Formato Inválido da Credencial do Veículo
     */
    ACCESS_DENIED_INVALID_VEHICLE_CREDENTIAL_FORMAT = 'ACCESS_DENIED_INVALID_VEHICLE_CREDENTIAL_FORMAT',

    /**
     * Acesso Negado por Credencial de Crachá do Veículo Inválida
     */
    ACCESS_DENIED_INVALID_VEHICLE_CARD_CREDENTIAL = 'ACCESS_DENIED_INVALID_VEHICLE_CARD_CREDENTIAL',

    /**
     * Acesso Negado, Aguardando Credencial de Veículo
     */
    ACCESS_DENIED_WAITING_VEHICLE = 'ACCESS_DENIED_WAITING_VEHICLE',

    /**
     * Acesso Negado por Leitora que Não Valida Veículo
     */
    ACCESS_DENIED_READER_NOT_VALIDATE_VEHICLE = 'ACCESS_DENIED_READER_NOT_VALIDATE_VEHICLE',

    /**
     * Acesso Negado por Pessoa Não Associada com Veículo
     */
    ACCESS_DENIED_PERSON_NOT_ASSOCIATED_WITH_VEHICLE = 'ACCESS_DENIED_PERSON_NOT_ASSOCIATED_WITH_VEHICLE',

    /**
     * Acesso Negado Pela Validação Customizada
     */
    ACCESS_DENIED_CUSTOM_VALIDATION = 'ACCESS_DENIED_CUSTOM_VALIDATION',

    /**
     * Acesso Negado de Provisório na Saída
     */
    ACCESS_DENIED_BLOCK_PROVISORY_ON_EXIT = 'ACCESS_DENIED_BLOCK_PROVISORY_ON_EXIT'

}

export = AccessEventType;
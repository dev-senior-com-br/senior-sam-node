enum BiometricOneToOneValidationType {
    /**
     * Não Configurada
     */
    NONE = "NONE",

    /**
     * Requisita Somente se Existir Biometria Cadastrada
     */
    OPTIONAL = "OPTIONAL",

    /**
     * Sempre Vai Requisitar Biometria
     */
    REQUIRED = "REQUIRED"
}

export = BiometricOneToOneValidationType;
enum CallGenerationType {
    /**
     * Não Gera Chamada
     */
    DISABLED = "DISABLED",

    /**
     * Sempre Gera Chamada
     */
    ALWAYS = "ALWAYS",

    /**
     * Gera Chamada no Acesso Permitido
     */
    ON_ACCESS_ALLOWED = "ON_ACCESS_ALLOWED",

    /**
     * Gera Chamada no Acesso Negado
     */
    ON_ACCESS_DENIED = "ON_ACCESS_DENIED"
}
export = CallGenerationType;
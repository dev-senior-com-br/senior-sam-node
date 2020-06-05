enum ReaderValidationType {
   /**
     * Bloqueia acesso
     */
    BLOCK_ACCESS = "BLOCK_ACCESS",

    /**
     * Crachá
     */
    CARD = "CARD",

    /**
     * Crachá ou senha
     */
    CARD_OR_PIN = "CARD_OR_PIN",

    /**
     * Crachá e senha
     */
    CARD_AND_PIN = "CARD_AND_PIN",

    /**
     * Libera acesso
     */
    ALLOW_ACCESS = "ALLOW_ACCESS",

    /**
     * Código de acesso
     */
    FACILITY_CODE = "FACILITY_CODE"
}
export = ReaderValidationType;
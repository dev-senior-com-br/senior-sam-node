import { BaseModel } from "../BaseModel";

enum VisitorSituation {
    /**
     * Check-in pendente
     */
    CHECK_IN_PENDING = "CHECK_IN_PENDING",
    /**
     * Check-in realizado
     */
    CHECK_IN_REALIZED = "CHECK_IN_REALIZED",
    /**
     * Visitante já está com a visita em andamento
     */
    VISITING = "VISITING",
    /**
     * Check-out realizado
     */
    CHECK_OUT_REALIZED = "CHECK_OUT_REALIZED",
    /**
     * Check-in não realizado
     */
    CHECK_IN_NOT_REALIZED = "CHECK_IN_NOT_REALIZED",
    /**
     * Check-in expirado
     */
    CHECK_IN_EXPIRED = "CHECK_IN_EXPIRED"

}

export default VisitorSituation;
import { BaseModel } from "../BaseModel";

enum IncidentTypeActionType {
/**
     * Desabilitar o Acionamento
     */
    DISABLE_ACTION = "DISABLE_ACTION",

    /**
     * Habilitar o Acionamento
     */
    ENABLE_ACTION = "ENABLE_ACTION",

    /**
     * Habilitar o Acionamento com Timeout
     */
    ENABLE_ACTION_WITH_TIMEOUT = "ENABLE_ACTION_WITH_TIMEOUT"
}
export = IncidentTypeActionType;
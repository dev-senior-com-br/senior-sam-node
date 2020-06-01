import { BaseModel } from "../BaseModel";

enum VehicleUse {
    /**
    * Veículo de Uso Privado
    */
    PRIVATE_USE = "PRIVATE_USE",

    /**
     * Veículo de Uso Comum
     */
    COMMON_USE = "COMMON_USE",

    /**
     * Veículo de Uso Livre
     */
    FREE_USE = "FREE_USE"
}
export default VehicleUse;
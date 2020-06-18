import Lobby from "./resources/Lobby";
import SeniorApi from "@seniorsistemas/senior-core/dist/lib/SeniorApi";
import ENVIRONMENTS from "@seniorsistemas/senior-core/dist/lib/Environments";
export = class SAMApi extends SeniorApi {
    _lobby: Lobby;
    get lobby(): Lobby {
        this._lobby = this._lobby || new Lobby(this);
        return this._lobby;
    }
}
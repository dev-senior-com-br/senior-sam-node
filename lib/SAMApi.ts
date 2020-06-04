import Lobby from "./resources/Lobby";
import SeniorApi from "@seniorsistemas/senior-core/lib/SeniorApi";
export default class SAMApi extends SeniorApi {
    _lobby: Lobby;
   
    get lobby(): Lobby {
        this._lobby = this._lobby || new Lobby(this);
        return this._lobby;
    }
}
import { BaseModel } from "../BaseModel";
import Camera from "./Camera";

export = class VirtualLobbyCamera extends BaseModel {
    /**
    * ID
    */
    private _id: number;
    public set id(value: number) {
        this._id = value;
    }

    public get id() {
        return this._id;
    }

    /**
      * Câmera
      */
    private _camera: Camera;
    public set camera(value: Camera) {
        this._camera = value;
    }

    public get camera() {
        return this._camera;
    }
}
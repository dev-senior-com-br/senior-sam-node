import { BaseModel } from "../BaseModel";
import { PhysicalLocation, CameraDevice, CctvProxy, CameraStatus, DvrServer } from "../../..";
import List from "../List";

export default class Camera extends BaseModel {
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
      * Nome
      */
    private _name: string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }

    /**
     * Câmera PTZ
     */
    private _isPTZ: boolean;
    public set isPTZ(value: boolean) {
        this._isPTZ = value;
    }

    public get isPTZ() {
        return this._isPTZ;
    }

    /**
   * Servidor DVR
   */
    private _dvrServer: DvrServer;
    public set dvrServer(value: DvrServer) {
        this._dvrServer = value;
    }

    public get dvrServer() {
        return this._dvrServer;
    }

    /**
   * Servidor da Câmera
   */
    private _cameraServerId: string;
    public set cameraServerId(value: string) {
        this._cameraServerId = value;
    }

    public get cameraServerId() {
        return this._cameraServerId;
    }

    /**
   * Link do Stream da Câmera
   */
    private _streamLink: string;
    public set streamLink(value: string) {
        this._streamLink = value;
    }

    public get streamLink() {
        return this._streamLink;
    }

    /**
   * Local Físico
   */
    private _physicalLocation: PhysicalLocation;
    public set physicalLocation(value: PhysicalLocation) {
        this._physicalLocation = value;
    }

    public get _hysicalLocation() {
        return this._physicalLocation;
    }

    /**
   * Status da Câmera
   */
    private _status: CameraStatus;
    public set status(value: CameraStatus) {
        this._status = value;
    }

    public get status() {
        return this._status;
    }

    /**
     * Proxy CCTV
     */
    private _cctvProxy: CctvProxy;
    public set cctvProxy(value: CctvProxy) {
        this._cctvProxy = value;
    }

    public get cctvProxy() {
        return this._cctvProxy;
    }

    /**
   * Relação Câmera e Dispositivos
   */
    private _devices: List<CameraDevice>;
    public set devices(value: List<CameraDevice>) {
        this._devices = value;
    }

    public get devices() {
        return this._devices;
    }

    /**
   * Url de streaming
   */
    private _urlStreaming: string;
    public set urlStreaming(value: string) {
        this._urlStreaming = value;
    }

    public get urlStreaming() {
        return this._urlStreaming;
    }

}
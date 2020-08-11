import { BaseModel } from '../BaseModel';
import { BiometricManufacturer, BiometryTemplate } from '../../..';
import List from '../List';

export = class Biometry extends BaseModel {
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
     * Fabricante Biométrico
     */
    private _biometricManufacturer:BiometricManufacturer;
    public set biometricManufacturer(value: BiometricManufacturer) {
      this._biometricManufacturer = value;
    }

    public get biometricManufacturer() {
      return this._biometricManufacturer;
    }
    
    /**
     * Templates Biométricos
     */
    private _templates:List<BiometryTemplate>;
    public set templates(value: List<BiometryTemplate>) {
      this._templates = value;
    }

    public get _emplates() {
      return this._templates;
    }
        
}
import { BaseModel } from '../BaseModel';

export = class CardFormat extends BaseModel {
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
     * Nome do Formato
     */
    private _name: string;
    public set name(value: string) {
      this._name = value;
    }

    public get name() {
      return this._name;
    }

    /**
     * Código de Acesso
     */
    private _facilityCode: number;
    public set facilityCode(value: number) {
      this._facilityCode = value;
    }

    public get facilityCode() {
      return this._facilityCode;
    }

    /**
     * Deslocamento de Bits
     */
    private _bitsShift: number;
    public set bitsShift(value: number) {
      this._bitsShift = value;
    }

    public get bitsShift() {
      return this._bitsShift;
    }

    /**
     * Quantidade de Bits do Cartão
     */
    private _cardLength: number;
    public set cardLength(value: number) {
      this._cardLength = value;
    }

    public get cardLength() {
      return this._cardLength;
    }

    /**
     * Quantidade de Bits de Paridade Ímpar
     */
    private _oddBitsLength: number;
    public set oddBitsLength(value: number) {
      this._oddBitsLength = value;
    }

    public get oddBitsLength() {
      return this._oddBitsLength;
    }

    /**
     * Quantidade de Bits de Paridade Par
     */
    private _evenBitsLength: number;
    public set evenBitsLength(value: number) {
      this._evenBitsLength = value;
    }

    public get evenBitsLength() {
      return this._evenBitsLength;
    }

    /**
     * Quantidade de Bits do Código de Acesso
     */
    private _facilityCodeLength: number;
    public set facilityCodeLength(value: number) {
      this._facilityCodeLength = value;
    }

    public get facilityCodeLength() {
      return this._facilityCodeLength;
    }

    /**
     * Bit de Ínicio do Código de Acesso
     */
    private _facilityCodeStart: number;
    public set facilityCodeStart(value: number) {
      this._facilityCodeStart = value;
    }

    public get facilityCodeStart() {
      return this._facilityCodeStart;
    }

    /**
     * Quantidade de Bits do Número do Cartão
     */
    private _cardNumberLength: number;
    public set cardNumberLength(value: number) {
      this._cardNumberLength = value;
    }

    public get cardNumberLength() {
      return this._cardNumberLength;
    }

    /**
     * Bit de Ínicio do Número do Cartão
     */
    private _cardNumberStart: number;
    public set cardNumberStart(value: number) {
      this._cardNumberStart = value;
    }

    public get cardNumberStart() {
      return this._cardNumberStart;
    }

    /**
     * Padrão Para Todas as Leitoras
     */
    private _defaultAllReaders: boolean;
    public set defaultAllReaders(value: boolean) {
      this._defaultAllReaders = value;
    }

    public get defaultAllReaders() {
      return this._defaultAllReaders;
    }

}
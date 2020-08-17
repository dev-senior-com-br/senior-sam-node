import { CardTechnology } from '../../..';

export = class InformationCardCredentialRecord {
    /**
     * Código identificador
     */
    private _id: number;
    public set id(value: number) {
      this.id = value;
    }

    public get id() {
      return this._id;
    }
    
    /**
     * Tecnologia do Cartão
     */
    private _cardTechnology: CardTechnology;
    public set cardTechnology(value: CardTechnology) {
      this._cardTechnology = value;
    }

    public get cardTechnology() {
      return this._cardTechnology;
    }

    /**
     * Número do Cartão ->  minValue : 1
     */
    private _cardNumber: number;
    public set cardNumber(value: number) {
      this._cardNumber = value;
    }

    public get cardNumber() {
      return this._cardNumber;
    }

    constructor(cardTechnology: CardTechnology, cardNumber: number) {    
      this._cardTechnology = cardTechnology;
      this._cardNumber = cardNumber;
    }

}
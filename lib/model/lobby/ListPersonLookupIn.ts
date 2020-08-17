import { BaseModel } from '../BaseModel';

export = class ListPersonLookupIn extends BaseModel {
    /**
     * Campo de busca por nome ou documento
     */
    private _searchText: string;
    public set searchText(value: string) {
      this._searchText = value;
    }

    public get searchText() {
      return this._searchText;
    }

    /**
     * Identificador do Tipo de Documento
     */
    private _documentTypeId: number;
    public set documentTypeId(value: number) {
      this._documentTypeId = value;
    }

    public get documentTypeId() {
      return this._documentTypeId;
    }

    /**Quantidade de registros por página
     */
    private _size: number;
    public set size(value: number) {
      this._size = value;
    }

    public get size() {
      return this._size;
    }

    /**
     * Número da página
     */
    private _offset: number;
    public set offset(value: number) {
      this._offset = value;
    }

    public get offset() {
      return this._offset;
    }

    /**
     * Parâmetro de ordenação
     */
    private _orderby: string;

    public set orderby(value: string) {
      this._orderby = value;
    }

    public get orderby() {
      return this._orderby;
    }

}
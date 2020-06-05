import { BaseModel } from "../BaseModel";
import { PhysicalLocation, Biometry, PersonVehicle, OrganizationalStructurePerson, IncidentViewed, PersonSituation, PersonSituationType, Phone, PersonRole } from "../../..";
import List from "../List";
import GroupPerson from "./GroupPerson";
import User from "./User";
import Gender from "./Gender";
import Email from "./Email";

export = class Person extends BaseModel {
     /**
     * ID
     */
    private _id:number;
    public set id(value: number) {
        this._id = value;
    }

    public get id() {
        return this._id;
    }

    /**
     * Nome
     */
    private _name:string;
    public set name(value: string) {
        this._name = value;
    }

    public get name() {
        return this._name;
    }
   
    /**
     * Sexo
     */
    private _gender:Gender;
    public set gender(value: Gender) {
        this._gender = value;
    }

    public get gender() {
        return this._gender;
    }
   
    /**
     * Data de Nascimento
     */
    private _birthday:Date;
    public set birthday(value: Date) {
        this._birthday = value;
    }

    public get birthday() {
        return this._birthday;
    }
   
    /**
     * Matricula
     */
    private _registry:string;
    public set registry(value: string) {
        this._registry = value;
    }

    public get registry() {
        return this._registry;
    }
   
    /**
     * Data de Cadastro
     */
    private _registerDate:Date;
    public set registerDate(value: Date) {
        this._registerDate = value;
    }

    public get registerDate() {
        return this._registerDate;
    }
   
    /**
     * Data da Última Alteração
     */
    private _lastModificationDate:Date;
    public set lastModificationDate(value: Date) {
        this._lastModificationDate = value;
    }

    public get lastModificationDate() {
        return this._lastModificationDate;
    }
   
    /**
     * Data da Atualização da Foto
     */
    private _photoDate:Date;
    public set photoDate(value: Date) {
        this._photoDate = value;
    }

    public get photoDate() {
        return this._photoDate;
    }
   
    /**
     * Endereço
     */
    private _address:string;
    public set address(value: string) {
        this._address = value;
    }

    public get address() {
        return this._address;
    }
   
    /**
     * Bairro
     */
    private _district:string;
    public set district(value: string) {
        this._district = value;
    }

    public get district() {
        return this._district;
    }
   
    /**
     * Cidade
     */
    private _city:string;
    public set city(value: string) {
        this._city = value;
    }

    public get city() {
        return this._city;
    }
   
    /**
     * Estado
     */
    private _federalState:string;
    public set federalState(value: string) {
        this._federalState = value;
    }

    public get federalState() {
        return this._federalState;
    }
   
    /**
     * Código Postal
     */
    private _zipCode:string;
    public set zipCode(value: string) {
        this._zipCode = value;
    }

    public get zipCode() {
        return this._zipCode;
    }
   
    /**
     * Nacionalidade
     */
    private _nationality:string;
    public set nationality(value: string) {
        this._nationality = value;
    }

    public get nationality() {
        return this._nationality;
    }
   
    /**
     * Último Acesso
     */
    private _lastAccessDate:Date;
    public set lastAccessDate(value: Date) {
        this._lastAccessDate = value;
    }

    public get lastAccessDate() {
        return this._lastAccessDate;
    }
   
    /**
     * Local Atual da Pessoa
     */
    private _currentPhysicalLocation:PhysicalLocation;
    public set currentPhysicalLocation(value: PhysicalLocation) {
        this._currentPhysicalLocation = value;
    }

    public get currentPhysicalLocation() {
        return this._currentPhysicalLocation;
    }
   
    /**
     * Situação da Pessoa
     */
    private _situation:PersonSituationType;
    public set situation(value: PersonSituationType) {
        this._situation = value;
    }

    public get situation() {
        return this._situation;
    }
   
    /**
     * Data do Último Acesso Permitido
     */
    private _lastAccessAllowedDate:Date;
    public set lastAccessAllowedDate(value: Date) {
        this._lastAccessAllowedDate = value;
    }

    public get lastAccessAllowedDate() {
        return this._lastAccessAllowedDate;
    }
   
    /**
     * Local Físico do Último Acesso Permitido
     */
    private _lastAccessAllowedPhysicalLocation:PhysicalLocation;
    public set lastAccessAllowedPhysicalLocation(value: PhysicalLocation) {
        this._lastAccessAllowedPhysicalLocation = value;
    }

    public get lastAccessAllowedPhysicalLocation() {
        return this._lastAccessAllowedPhysicalLocation;
    }
   
    /**
     * Local última atualização de nível
     */
    private _physicalLocationWhereLevelUpdated:PhysicalLocation;
    public set physicalLocationWhereLevelUpdated(value: PhysicalLocation) {
        this._physicalLocationWhereLevelUpdated = value;
    }

    public get physicalLocationWhereLevelUpdated() {
        return this._physicalLocationWhereLevelUpdated;
    }
     
    /**
     * Documento
     */
    private _documents:List<Document>;
    public set documents(value: List<Document>) {
        this._documents = value;
    }

    public get documents() {
        return this._documents;
    }
   
    /**
     * Telefone
     */
    private _phones:List<Phone>;
    public set phones(value: List<Phone>) {
        this._phones = value;
    }

    public get phones() {
        return this._phones;
    }

    /**
     * Email
     */
    private _emails:List<Email>;
    public set emails(value: List<Email>) {
        this._emails = value;
    }

    public get emails() {
        return this._emails;
    }
   
    /**
     * Papéis da Pessoa
     */
    private _personRoles:List<PersonRole>;
    public set personRoles(value: List<PersonRole>) {
        this._personRoles = value;
    }

    public get personRoles() {
        return this._personRoles;
    }
   
    /**
     * Biometrias da Pessoa
     */
    private _biometries:List<Biometry>;
    public set biometries(value: List<Biometry>) {
        this._biometries = value;
    }

    public get biometries() {
        return this._biometries;
    }
   
    /**
     * Credênciais da pessoa
     */
    private _credentials:List<Credential>;
    public set credentials(value: List<Credential>) {
        this._credentials = value;
    }

    public get credentials() {
        return this._credentials;
    }
   
    /**
     * Lista de Situação da Pessoa
     */
    private _situations:List<PersonSituation>;
    public set situations(value: List<PersonSituation>) {
        this._situations = value;
    }

    public get situations() {
        return this._situations;
    }
   
    /**
     * Visualização de Incidentes
     */
    private _incidentViewed:List<IncidentViewed>;
    public set incidentViewed(value: List<IncidentViewed>) {
        this._incidentViewed = value;
    }

    public get incidentViewed() {
        return this._incidentViewed;
    }
   
    /**
     * Veículos da Pessoa
     */
    private _personVehicle:List<PersonVehicle>;
    public set personVehicle(value: List<PersonVehicle>) {
        this._personVehicle = value;
    }

    public get personVehicle() {
        return this._personVehicle;
    }
   
    /**
     * Grupos
     */
    private _groups:List<GroupPerson>;
    public set groups(value: List<GroupPerson>) {
        this._groups = value;
    }

    public get groups() {
        return this._groups;
    }
   
    /**
     * Estruturas organizacionais da pessoa
     */
    private _organizationalStructuresPerson:List<OrganizationalStructurePerson>;
    public set organizationalStructuresPerson(value: List<OrganizationalStructurePerson>) {
        this._organizationalStructuresPerson = value;
    }

    public get organizationalStructuresPerson() {
        return this._organizationalStructuresPerson;
    }
   
    /**
     * Usuário
     */
    private _user:List<User>;
    public set user(value: List<User>) {
        this._user = value;
    }

    public get user() {
        return this._user;
    }
   
}
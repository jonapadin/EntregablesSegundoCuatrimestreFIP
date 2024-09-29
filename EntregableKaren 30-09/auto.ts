export class Auto {
    private marca: string;
    private modelo: string;
    private motor: string;
    private patente: string;

    constructor(marca: string, modelo: string, motor: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.patente = patente;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getMotor(): string {
        return this.motor;
    }

    public setMotor(motor: string): void {
        this.motor = motor;
    }

    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }
}

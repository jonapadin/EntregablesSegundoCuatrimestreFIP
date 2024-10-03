import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo {
    constructor(marca: string, modelo: string, motor: string, patente: string) {
        super(marca,modelo,motor,patente)
    }
}

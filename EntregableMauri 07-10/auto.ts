import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo{

    constructor(marca: string, modelo: string, motor: string, patente: string) {
        super(marca,modelo,motor,patente)
    }
}

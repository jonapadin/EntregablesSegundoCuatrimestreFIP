import { Arquero } from "./arquero";

export class EvolucionArquero extends Arquero{
    constructor(nombre: string) {
        // Quiero que al evolucionar el nuevo personaje modifique sus stats
        super(nombre, 120, 70, 50, 120);
        this.destreza = 75;
    }

    flechaDeCazador(): void {
        console.log(`${this.nombre} ha disparado una Flecha de Cazador con precisión mortal, ocasionando ${this.agilidad} de daño!`);
    }
}
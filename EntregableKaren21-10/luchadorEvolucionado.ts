import { Luchador } from './luchador';

export class EvolucionLuchador extends Luchador {
    constructor(nombre: string) {
        // Quiero que al evolucionar el nuevo personaje modifique sus stats
        super(nombre, 200, 120, 30, 70);
        this.escudo = 75;
    }

    golpeRompeHuesos(): void {
        console.log(`${this.nombre} ha lanzado un golpe Rompe Huesos, realizando ${this.fuerza} de daño!`);
    }
}

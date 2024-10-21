import { Luchador } from './luchador';

export class EvolucionLuchador extends Luchador {
    constructor(nombre: string) {
        super(nombre);
        this.escudo = 75;
        this.puntosDeVida = 120;
        this.fuerza = 120;
        this.multiplicador = 2;
    }

    castigoDesterrador(): string {
        return `${this.nombre} ha lanzado un golpe Rompe Huesos, realizando ${this.fuerza} de daño!`;
    }
}

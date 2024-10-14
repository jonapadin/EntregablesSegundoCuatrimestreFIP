import { Mago } from "./mago";

export class EvolucionMago extends Mago {
    constructor(nombre: string) {
        // Quiero que al evolucionar el nuevo personaje modifique sus stats
        super(nombre, 120, 20, 150, 30);
        this.mana = 140;
    }

    tormentaDeFuego(): void {
        console.log(`${this.nombre} ha lanzado una Tormenta de Fuego, ocasionando ${this.inteligencia} de daño! Mana restante: ${this.mana}`);
    }
}
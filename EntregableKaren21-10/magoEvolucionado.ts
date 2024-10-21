import { Mago } from "./mago";

export class EvolucionMago extends Mago{

    constructor(nombre: string) {
        super(nombre);
        this.mana = 140;
        this.inteligencia = 120;
        this.bloqueo = 100;
        this.puntosDeVida = 130;
    }

    public rayoSolar(): string {
        this.mana -= 45;
        return `Un rayo de luz brillante surge de tu mano, ocasionando ${this.inteligencia} de daño!`
    }

    public campoAntimagia(): string {
        this.mana -= 55;
        return `Te rodea una esfera antimagia invisible, cubriendo ${this.bloqueo} de daño!`
    }
}
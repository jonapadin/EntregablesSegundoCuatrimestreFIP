import { Ataque } from "./Ataque";

export class AtaqueDeFlecha extends Ataque {
    constructor() {
        super();
        this.nombre = "Disparo de Flecha";
        this.basico = 30;
    }

    public atacar(): number {
        console.log(`${this.nombre} inflige ${this.basico} puntos de daño!`);
        return this.basico;
    }
}
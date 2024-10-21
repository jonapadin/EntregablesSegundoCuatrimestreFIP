import { Ataque } from "./Ataque";

export class AtaqueDeEspada extends Ataque {
    constructor() {
        super();
        this.nombre = "Corte con Espada";
        this.basico = 40;
    }

    public atacar(): number {
        console.log(`${this.nombre} inflige ${this.basico} puntos de daño!`);
        return this.basico;
    }
}
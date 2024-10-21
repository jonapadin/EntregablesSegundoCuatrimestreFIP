import { Ataque } from "./Ataque";

export class AtaqueDeFuego extends Ataque {
    constructor() {
        super();
        this.nombre = "Bola de Fuego";
        this.basico = 50;
    }

    public atacar(): number {
        return this.basico;
    }
}
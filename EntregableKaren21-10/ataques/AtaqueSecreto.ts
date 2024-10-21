import { Ataque } from "./Ataque";

export class AtaqueSecreto extends Ataque {
    constructor() {
        super();
        this.setNombre("Reprensión infernal");
        this.basico = 200; //200 Seria la vida maxima que cualquier personaje podria tener
    }

    public atacar(): number {
        return this.basico
    }
}
import { Personaje } from "./personaje";

export class Luchador extends Personaje{
    protected escudo : number;
    constructor(nombre:string){
        super(nombre, 140, 100, 15, 50);
        this.escudo = 50;
    }

    ataqueBasico(): void {
        console.log(`${this.nombre} realizó un ataque basico!`);
    }

    defender(): void {
        console.log(`${this.nombre} se está defendiendo!`)
    }

    golpeDeEspada() : void{
        console.log(`${this.nombre} golpeo con su espada realizando ${this.fuerza} de daño!`)
    }

    bloqueo() : void{
        console.log(`${this.nombre} bloqueo con su escudo ${this.escudo} de daño!`)
    }
}
import { Personaje } from "./personaje";

export class Arquero extends Personaje{
    protected destreza : number;
    constructor(nombre:string){
        super(nombre, 100, 50, 15, 100);
        this.destreza = 50
    }

    ataqueBasico(): void {
        console.log(`${this.nombre} realizó un ataque basico!`);
    }

    defender(): void {
        console.log(`${this.nombre} se está defendiendo!`)
    }

    flecha() : void{
        console.log(`${this.nombre} lanzó una flecha ocasionando ${this.agilidad} de daño!`)
    }

    esquive() : void{
        console.log(`${this.nombre} esquivó ${this.destreza} de daño!`)
    }
}
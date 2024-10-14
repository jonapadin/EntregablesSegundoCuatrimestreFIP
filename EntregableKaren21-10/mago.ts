import { Personaje } from './personaje';


export class Mago extends Personaje {
    protected mana: number;

    constructor(nombre: string) {
        super(nombre, 80, 10, 100, 40);
        this.mana = 100;
    }


    ataqueBasico(): void {
        console.log(`${this.nombre} realizó un ataque basico!`);
    }

    defender(): void {
        console.log(`${this.nombre} se está defendiendo!`)
    }

    bolaDeFuego(): void {
        if (this.mana >= 20) {
            this.mana -= 20;
            console.log(`${this.nombre} ha lanzado una bola de fuego ocasionando ${this.inteligencia} de daño! Mana restante: ${this.mana}`);
        } else {
            console.log(`No hay suficiente mana!`);
        }
    }
}
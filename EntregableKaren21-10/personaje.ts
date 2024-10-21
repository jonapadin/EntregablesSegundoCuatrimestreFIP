import { Ataque} from "./ataques/Ataque";

export class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;
    protected ataque: Ataque;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = 100;
        this.ataque = new Ataque();
    }
    public getNombre(): string {
        return this.nombre;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public getPuntosDeVida(): number {
        return this.puntosDeVida;
    }

    public setPuntosDeVida(puntosDeVida: number): void {
        if (puntosDeVida < 0) {
            this.puntosDeVida = 0;
        } else if (puntosDeVida > 200) {
            this.puntosDeVida = 200;
        } else {
            this.puntosDeVida = puntosDeVida;
        }
    }

    public subirNivel(): void {
        this.nivel++;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}!`);
    }
    
    public atacar(): number {
        return this.ataque.atacar();
    }

    public defender(): string {
        return `${this.nombre} se está defendiendo.`;
    }

    public setAtaque(ataque: Ataque): void {
        this.ataque = ataque;
    }

}
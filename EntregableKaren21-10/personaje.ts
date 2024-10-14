export abstract class Personaje {
   protected nombre: string;
   protected nivel: number;
   protected puntosDeVida : number;
   protected fuerza : number;
   protected inteligencia : number;
   protected agilidad : number;

    constructor(nombre: string, puntosDeVida: number, fuerza: number, inteligencia: number, agilidad: number) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
        this.fuerza = fuerza;
        this.inteligencia = inteligencia;
        this.agilidad = agilidad;
    }

    abstract ataqueBasico(): void 

    abstract defender(): void 
    

    subirNivel(): void {
        this.nivel++;
        this.fuerza += 5;
        this.inteligencia += 5;
        this.agilidad += 5;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}!`);
    }

    verAtributos(): void {
        console.log(`${this.nombre}: Nivel: ${this.nivel}, Puntos de vida: ${this.puntosDeVida}, Fuerza: ${this.fuerza}, Inteligencia: ${this.inteligencia}, Agilidad: ${this.agilidad}`);
    }
}
import { Personaje } from './personaje';
import { EvolucionMago } from './magoEvolucionado';

export class Mago extends Personaje {
    protected mana: number = 100;
    protected inteligencia : number = 75;
    private multiplicador : number = 1.25;
    protected bloqueo:number=30;

    constructor(nombre: string) {
        super(nombre);
    }

    public atacar(): number {
        if (this.mana >= 20) {
            this.mana -= 20;
            return this.ataque.atacar()* this.multiplicador;
        } else {
            return this.ataque.atacar()
        }
    }

    public defender(): string{
        if (this.mana >= 20) {
            this.mana -= 20;
            return `Unas tenues llamas envuelven el cuerpo de ${this.nombre} mientras dura el conjuro, bloqueando ${this.bloqueo} de daño`
        }
           
        else {
            return "No hay suficiente mana!"
        }
    }

    public setInteligencia(inteligencia:number): void{
        if(inteligencia>=0&&inteligencia<100) {
            this.inteligencia = inteligencia;
        }
    }
}
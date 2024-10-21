import { Personaje } from "./personaje";

export class Luchador extends Personaje{
    protected escudo : number = 30;
    protected fuerza : number = 75;
    protected multiplicador: number = 1.25;

    constructor(nombre:string){
        super(nombre);
    }

    public atacar(): number {
        if(this.escudo>60){
            this.escudo+= 5;
            return this.ataque.atacar() * this.multiplicador;
    } else{
        return this.ataque.atacar();
    }}

    public defender(): string {
        if(this.escudo==100){
            this.escudo=0;
            return `Bloqueo! ningun daño recibido`;
        }else
        return `${this.nombre} se está defendiendo.`;
    }

    public setFuerza(fuerza:number):void{
        if(fuerza>=0&&fuerza<100) {
            this.fuerza = fuerza;
        }
    }
}
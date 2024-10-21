import { Personaje } from "./personaje";

export class Arquero extends Personaje{
    protected veneno : number = 5;
    protected bloqueo:number=30;
    protected energia:number = 80
    
    constructor(nombre:string){
        super(nombre);
    }

    public atacar(): number {
        if(this.veneno>0) {
            this.veneno--;
            return this.ataque.atacar() * this.veneno;
        }
        return this.ataque.atacar();
    }
    public addVeneno():void{
        if(this.veneno<5) {
            this.veneno++;
        }
    }

    public defender(): string{
        if (this.energia >= 20) {
            this.energia -= 20;
            return `Te mueves agilmente y logras esquivar ${this.bloqueo} de daño`
        } else {
            return "No hay suficiente energia!"
        }
    }  
}
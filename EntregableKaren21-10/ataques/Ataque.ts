export class Ataque {
    protected basico: number;
    protected nombre: string;

    constructor() {
        this.basico = 30;
        this.nombre = "Ataque básico";
    }

    public atacar(): number {
        return this.basico;
    }

    public setDanio(danio: number): void {
        this.basico = danio;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getDanio(): number {
        return this.basico;
    }

    public toString(): string {
        return this.nombre;
    }
}
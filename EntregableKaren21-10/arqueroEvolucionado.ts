import { Arquero } from "./arquero";

export class EvolucionArquero extends Arquero {
  constructor(nombre: string) {
    super(nombre);
    this.bloqueo = 60;
    this.puntosDeVida = 130;
    this.energia = 90;
    this.veneno = 10;
  }

  public flechaDeCazador(): string {
    return `${this.nombre} ha disparado una flecha verde reluciente hacia a un objetivo y lo rocía con ácido, causandole ${this.energia} de daño!`;
  }

  public imagenMultiple(): string {
    return `${this.nombre} Tres duplicados ilusorios de ti mismo aparecen en tu espacio. Hasta que el conjuro termine, los duplicados se mueven a la vez que tú, imitan tus acciones y se cambian de posición, lo que hace que sea imposible seguir cuál es la imagen real permitiendote bloquear ${this.bloqueo} de daño`;
  }
}
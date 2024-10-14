import { Mago } from './mago';
import { Luchador } from './luchador';
import { Arquero } from './arquero';

let mago = new Mago('Gandalf');

let luchador = new Luchador('Aragorn');

let arquero = new Arquero('Legolas');

console.log("Personaje:", mago);
console.log("Personaje:", luchador);
console.log("Personaje:", arquero);

mago.bolaDeFuego();
console.log("Personaje:", mago);

luchador.golpeDeEspada();
luchador.bloqueo();
luchador.ataqueBasico();
console.log("Personaje:", luchador);

arquero.flecha();
arquero.esquive();
console.log("Personaje:", arquero);
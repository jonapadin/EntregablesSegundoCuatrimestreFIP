import { Mago } from './mago';
import { Luchador } from './luchador';
import { Arquero } from './arquero';

let mago = new Mago('Gandalf');

let luchador = new Luchador('Aragorn');

let arquero = new Arquero('Legolas');

mago.verAtributos();
luchador.verAtributos();
arquero.verAtributos()

mago.bolaDeFuego();

luchador.golpeDeEspada();
luchador.bloqueo();
luchador.ataqueBasico();

arquero.flecha();
arquero.esquive();
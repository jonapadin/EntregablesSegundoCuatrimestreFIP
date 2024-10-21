import { Personaje } from './personaje';
import { Mago } from './mago';
import { Luchador } from './luchador';
import { Arquero } from './arquero';
import { EvolucionMago } from './magoEvolucionado';
import { EvolucionLuchador } from './luchadorEvolucionado';
import { EvolucionArquero } from './arqueroEvolucionado';
import { AtaqueDeFuego } from './ataques/AtaqueDeFuego';
import { AtaqueDeEspada } from './ataques/AtaqueDeEspada';
import { AtaqueDeFlecha } from './ataques/AtaqueDeFlecha';
import { AtaqueSecreto } from './ataques/AtaqueSecreto';

//instanciamos los ataques especiales y el secreto
let bolaDeFuego : AtaqueDeFuego = new AtaqueDeFuego();
let corteDeEspada : AtaqueDeEspada = new AtaqueDeEspada();
let disparoDeFlecha : AtaqueDeFlecha = new AtaqueDeFlecha();
let represionInfernal : AtaqueSecreto = new AtaqueSecreto();

//creamos heroes normales y las evoluciones
let heroe : Personaje = new Personaje("Humano"); 
heroe = new Luchador("Godfrey");
console.log(((heroe)as Luchador));

let mago = new Mago("Eldryn el Arcano");
let archimago = new EvolucionMago("Lyra la Sabia");
let luchador = new Luchador("Baldor Martillo de Hierro");
let guerrero = new EvolucionLuchador("Kara Rompeacero");
let arquero = new Arquero("Faelan Flecha Veloz");
let arqueroMaestro = new EvolucionArquero("Sylas Ojo de Halcón");

//instanciamos los ataques
console.log(`${mago.getNombre()} realiza un ataque basico de daño: ${mago.atacar()}`);
console.log(mago.defender());
console.log(`${archimago.getNombre()} realiza un ataque basico de daño: ${archimago.atacar()}`);
console.log(archimago.rayoSolar());
console.log(archimago.campoAntimagia())
console.log(archimago.defender());
console.log(`${luchador.getNombre()} realiza un ataque basico de daño: ${luchador.atacar()}`);
console.log(luchador.defender());
console.log(`${guerrero.getNombre()} realiza un ataque basico de daño: ${guerrero.atacar()}`);
console.log(guerrero.defender());
console.log(guerrero.castigoDesterrador());
console.log(`${arquero.getNombre()} realiza un ataque basico de daño: ${arquero.atacar()}`);
console.log(arquero.defender());
console.log(`${arqueroMaestro.getNombre()} realiza un ataque basico de daño: ${arqueroMaestro.atacar()}`);
console.log(arqueroMaestro.defender());
console.log(arqueroMaestro.imagenMultiple());
console.log(arqueroMaestro.flechaDeCazador());

//Ataques especiales y ataqie secreto
mago.setAtaque(bolaDeFuego);
console.log(`${mago.getNombre()} ataca con una bola de fuego realizando: ${mago.atacar()} de daño`);
archimago.setAtaque(bolaDeFuego);
console.log(`${archimago.getNombre()} ataca con una bola de fuego realizando: ${archimago.atacar()} de daño`);
luchador.setAtaque(corteDeEspada);
console.log(luchador.atacar());
guerrero.setAtaque(corteDeEspada);
console.log(guerrero.atacar());
arquero.setAtaque(disparoDeFlecha);
console.log(arquero.atacar());
arqueroMaestro.setAtaque(disparoDeFlecha);
console.log(arqueroMaestro.atacar());

archimago.setAtaque(represionInfernal);
console.log(`${archimago.getNombre()} señalas con tu dedo a una criatura que te ha dañado, en un momento se ve rodeada por unas llamas infernales causandole ${archimago.atacar()} de daño`);
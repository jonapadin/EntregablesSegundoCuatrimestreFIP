import { RegistroAutomotor } from "./registroAuto";
import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";

// Creamos los nuevos vehiculos 
let auto1 = new Auto("Peugeot", "208", "Nafta", "AF601EP");
let auto2 = new Auto("Peugeot", "207", "Nafta", "AF602EP");
let moto1 = new Moto("Honda", "Ninja", "Nafta", "AWP123");
let moto2 = new Moto("Honda", "Ninja", "Nafta", "AWP124");
let camion1 = new Camion("Scania", "T900", "Gasoil", "AG103QW");
let camion2 = new Camion("Scania", "T1000", "Gasoil", "AG103QW");

// Creamos los arrays vacios para cargarlos con cada nuevo vehiculo
let autos: Auto[] = [];
let camiones: Camion[] = [];
let motos: Moto[] = [];

// Crear una instancia del RegistroAutomotor
let registro = new RegistroAutomotor(autos, camiones, motos);

// Los agregamos a Registro
registro.añadirAuto(auto1.getMarca(), auto1.getModelo(), auto1.getMotor(), auto1.getPatente());
registro.añadirAuto(auto2.getMarca(), auto2.getModelo(), auto2.getMotor(), auto2.getPatente());
registro.añadirMoto(moto1.getMarca(), moto1.getModelo(), moto1.getMotor(), moto1.getPatente());
registro.añadirMoto(moto2.getMarca(), moto2.getModelo(), moto2.getMotor(), moto2.getPatente());
registro.añadirCamion(camion1.getMarca(), camion1.getModelo(), camion1.getMotor(), camion1.getPatente());
registro.añadirCamion(camion2.getMarca(), camion2.getModelo(), camion2.getMotor(), camion2.getPatente());

// Mostramos en consola que fueron agregados
console.log("Autos en el registro:", autos);
console.log("Motos en el registro:", motos);
console.log("Camiones en el registro:", camiones);

// Comprobamos que se puede modificar
registro.modificarAuto("AF601EP", "Audi", "TT", "Nafta");

// comprobamos que se puede eliminar, en este caso el camion1
registro.eliminarCamion("AG103QW");

//Mosstramos como quedaron los Array despues de modificar y eliminar
console.log("Lista de autos después de modificación:", autos);
console.log("Lista de camiones después de eliminación:", camiones);
console.log("Lista de motos en el registro:", motos);

// Comprobamos que el metodo para dar de baja "eliminar" funciona
registro.darDeBajaMoto("AWP123");

// Mostramos como quedaron finalmente los Array
console.log("Estado final del registro:");
console.log("Autos:", autos);
console.log("Camiones:", camiones);
console.log("Motos:", motos);
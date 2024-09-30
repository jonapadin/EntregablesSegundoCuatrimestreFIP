import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";

export class RegistroAutomotor {
    private autos: Auto[];
    private camiones: Camion[];
    private motos: Moto[];

    constructor(autos: Auto[], camiones: Camion[], motos: Moto[]) {
        this.autos = autos;
        this.camiones = camiones;
        this.motos = motos;
    }

    // Metodos para Auto
    public añadirAuto(marca: string, modelo: string, motor: string, patente: string): void {
        let auto = new Auto(marca, modelo, motor, patente);
        this.autos.push(auto);
    }

    //!== parq que no sea igual a -1, es decir que exista
    public eliminarAuto(patente: string): void {
        const index = this.autos.findIndex(a => a.getPatente() === patente);
        if (index !== -1) {
            this.autos.splice(index, 1);
            console.log(`El auto con patente ${patente} fue eliminado.`);
        } else {
            console.log(`No se encontró un auto con la patente ${patente}.`);
        }
    }

    //? par a indicar que no es obligatorio
    public modificarAuto(patente: string, marca?: string, modelo?: string, motor?: string): void {
        const auto = this.autos.find(a => a.getPatente() === patente);
        if (auto) {
            if (marca) auto.setMarca(marca);
            if (modelo) auto.setModelo(modelo);
            if (motor) auto.setMotor(motor);
            console.log(`El auto con patente ${patente} fue modificado.`);
        } else {
            console.log(`No se encontró un auto con la patente ${patente}.`);
        }
    }    

    public darDeBajaAuto(patente: string): void {
        console.log(`El auto con patente ${patente} fue dado de baja.`);
        this.eliminarAuto(patente);
    }

    // Metodos para Camion
    public añadirCamion(marca: string, modelo: string, motor: string, patente: string): void {
        let camion = new Camion(marca, modelo, motor, patente);
        this.camiones.push(camion);
    }

    public eliminarCamion(patente: string): void {
        const index = this.camiones.findIndex(c => c.getPatente() === patente);
        if (index !== -1) {
            this.camiones.splice(index, 1);
            console.log(`El camión con patente ${patente} fue eliminado.`);
        } else {
            console.log(`No se encontró un camión con la patente ${patente}.`);
        }
    }

    public modificarCamion(patente: string, marca?: string, modelo?: string, motor?: string): void {
        const camion = this.camiones.find(c => c.getPatente() === patente);
        if (camion) {
            if (marca) camion.setMarca(marca);
            if (modelo) camion.setModelo(modelo);
            if (motor) camion.setMotor(motor);
            console.log(`El camión con patente ${patente} fue modificado.`);
        } else {
            console.log(`No se encontró un camión con la patente ${patente}.`);
        }
    }

    public darDeBajaCamion(patente: string): void {
        console.log(`El camión con patente ${patente} fue dado de baja.`);
        this.eliminarCamion(patente);
    }

    // Me3todos para Moto
    public añadirMoto(marca: string, modelo: string, motor: string, patente: string): void {
        let moto = new Moto(marca, modelo, motor, patente);
        this.motos.push(moto);
    }

    public eliminarMoto(patente: string): void {
        const index = this.motos.findIndex(m => m.getPatente() === patente);
        if (index !== -1) {
            this.motos.splice(index, 1);
            console.log(`La moto con patente ${patente} fue eliminada.`);
        } else {
            console.log(`No se encontró una moto con la patente ${patente}.`);
        }
    }

    public modificarMoto(patente: string, marca?: string, modelo?: string, motor?: string): void {
        const moto = this.motos.find(m => m.getPatente() === patente);
        if (moto) {
            if (marca) moto.setMarca(marca);
            if (modelo) moto.setModelo(modelo);
            if (motor) moto.setMotor(motor);
            console.log(`La moto con patente ${patente} fue modificada.`);
        } else {
            console.log(`No se encontró una moto con la patente ${patente}.`);
        }
    }

    public darDeBajaMoto(patente: string): void {
        console.log(`La moto con patente ${patente} fue dada de baja.`);
        this.eliminarMoto(patente);
    }
}
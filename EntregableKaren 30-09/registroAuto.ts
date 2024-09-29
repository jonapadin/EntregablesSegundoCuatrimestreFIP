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

    // Metodos para Auto, !== parq que no sea igual a -1, es decir que exista, ? par a indicar que no es obligatorio
    public añadirAuto(marca: string, modelo: string, motor: string, patente: string): void {
        let auto = new Auto(marca, modelo, motor, patente);
        this.autos.push(auto);
    }

    public eliminarAuto(auto: Auto): void {
        const index = this.autos.indexOf(auto);
        if (index !== -1) {
            this.autos.splice(index, 1);
        }
    }

    public modificarAuto(auto: Auto, marca?: string, modelo?: string, motor?: string, patente?: string): void {
        const index = this.autos.indexOf(auto);
        if (index !== -1) {
            if (marca) this.autos[index].setMarca(marca);
            if (modelo) this.autos[index].setModelo(modelo);
            if (motor) this.autos[index].setMotor(motor);
            if (patente) this.autos[index].setPatente(patente);
        }
    }

    public darDeBajaAuto(auto: Auto): void {
        console.log(`El auto con patente ${auto.getPatente()} fue dado de baja`);
        this.eliminarAuto(auto);
    }

    // Metodos para Camion
    public añadirCamion(marca: string, modelo: string, motor: string, patente: string): void {
        let camion = new Camion(marca, modelo, motor, patente);
        this.camiones.push(camion);
    }

    public eliminarCamion(camion: Camion): void {
        const index = this.camiones.indexOf(camion);
        if (index !== -1) {
            this.camiones.splice(index, 1);
        }
    }

    public modificarCamion(camion: Camion, marca?: string, modelo?: string, motor?: string, patente?: string): void {
        const index = this.camiones.indexOf(camion);
        if (index !== -1) {
            if (marca) this.camiones[index].setMarca(marca);
            if (modelo) this.camiones[index].setModelo(modelo);
            if (motor) this.camiones[index].setMotor(motor);
            if (patente) this.camiones[index].setPatente(patente);
        }
    }

    public darDeBajaCamion(camion: Camion): void {
        console.log(`El camion con patente ${camion.getPatente()} fue dado de baja`);
        this.eliminarCamion(camion);
    }

    // Me3todos para Moto
    public añadirMoto(marca: string, modelo: string, motor: string, patente: string): void {
        let moto = new Moto(marca, modelo, motor, patente);
        this.motos.push(moto);
    }

    public eliminarMoto(moto: Moto): void {
        const index = this.motos.indexOf(moto);
        if (index !== -1) {
            this.motos.splice(index, 1);
        }
    }

    public modificarMoto(moto: Moto, marca?: string, modelo?: string, motor?: string, patente?: string): void {
        const index = this.motos.indexOf(moto);
        if (index !== -1) {
            if (marca) this.motos[index].setMarca(marca);
            if (modelo) this.motos[index].setModelo(modelo);
            if (motor) this.motos[index].setMotor(motor);
            if (patente) this.motos[index].setPatente(patente);
        }
    }

    public darDeBajaMoto(moto: Moto): void {
        console.log(`La moto con patente ${moto.getPatente()} fue dada de baja`);
        this.eliminarMoto(moto);
    }
}
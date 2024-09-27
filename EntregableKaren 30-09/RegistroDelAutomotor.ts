class Auto{
    private marca:string;
    private modelo:string;
    private motor:string;
    private id:number;

    constructor(marca:string, modelo:string, motor:string, id:number){
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.id = id;
    }

    //getters y setters
    public getMarca(): string {
        return this.marca;
    }
    
    public setMarca(marca: string): void {
        this.marca = marca;
    }
    
    public getModelo(): string {
        return this.modelo;
    }
    
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    
    public getMotor(): string {
        return this.motor;
    }
    
    public setMotor(motor: string): void {
        this.motor = motor;
    }

    public getId(){
        return this.id;
    }

}

class Camion{
    private marca:string;
    private modelo:string;
    private motor:string;
    private id:number;
    
    constructor(marca:string, modelo:string, motor:string, id:number){
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.id = id;
    }

    //getters y setters
    public getMarca(): string {
        return this.marca;
    }
    
    public setMarca(marca: string): void {
        this.marca = marca;
    }
    
    public getModelo(): string {
        return this.modelo;
    }
    
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    
    public getMotor(): string {
        return this.motor;
    }
    
    public setMotor(motor: string): void {
        this.motor = motor;
    }

    public getId(){
        return this.id;
    }
}

class Moto{
    private marca:string;
    private modelo:string;
    private motor:string;
    private id:number;
    
    constructor(marca:string, modelo:string, motor:string, id:number){
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.id = id;
    }

    //getters y setters
    public getMarca(): string {
        return this.marca;
    }
    
    public setMarca(marca: string): void {
        this.marca = marca;
    }
    
    public getModelo(): string {
        return this.modelo;
    }
    
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    
    public getMotor(): string {
        return this.motor;
    }
    
    public setMotor(motor: string): void {
        this.motor = motor;
    }

    
    public getId(){
        return this.id;
    }

}

class RegistroDelAutomotor{
    private autos:Auto[];
    private camiones:Camion[];
    private motos:Moto[];
    private id: number;

    constructor(autos:Auto[], camiones:Camion[], motos:Moto[],id: number) {
        this.autos = autos;
        this.camiones = camiones;
        this.motos = motos;
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }
    
    //Metodos
    public agregarVehiculo(id:number): void{
        if (id === 0) {
            this.autos.push();
        } else if (id === 1) {
            this.camiones.push();
        } else if (id === 2) {
            this.motos.push();
        }
        }  
}



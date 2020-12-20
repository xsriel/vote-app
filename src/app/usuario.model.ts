export class usuario {
    nombre: string;
    email: string;
    password: string;
    tipo:string;

    constructor(nombre: string, email: string, password: string,tipo:string) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.tipo = tipo;
    }
}
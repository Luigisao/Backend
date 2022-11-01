class Usuario{

    constructor(nombre, apellido,libros=[],mascotas=[]){

        this.nombre = nombre;
        this.apellido= apellido;
        this.libros = libros;
        this.mascotas= mascotas;

    }

    getFullName() {
    return  console.log (`El nombre del usuario es ${this.nombre} ${this.apellido}`); 
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
        
    }

    countMascota(){
        return this.mascotas.length
    }

    addBook(nombre, autor){
        let nuevoLibro = {nombre, autor};
        this.libros.push(nuevoLibro);
    }

    getBookNames(){

        let nombresLibro = this.libros.map((libros) => {
            console.log( libros.nombre)
        })
        return nombresLibro
    }



}

const usuario = new Usuario ('Luigi', 'Marenco')

usuario.getFullName()

usuario.addMascota('Canario')
usuario.addMascota('Perro')

usuario.addBook('Harry Potter', 'J.K.R')
usuario.addBook('Señor de los Anillos', 'Tolkien')

console.log(usuario)
console.log(usuario.countMascota()
)
usuario.getBookNames()



// Ordenar en orden alfabetico los nombres de los alumnos
class Alumno {
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const alumnos = [];
 alumnos.push(new Alumno("alan",31));
 alumnos.push(new Alumno("maria",22));
 alumnos.push(new Alumno("juan",18));
 alumnos.push(new Alumno("laura",39));

 alumnos.sort((a,b) =>{
    if (a.nombre < b.nombre){
        return -1; 
    } 
    if (a.nombre > b.nombre){
        return 1;
    }
    return 0;
 }
 );
 console.log(alumnos)





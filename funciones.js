//!funciones declarativas:
// function hello(){
// console.log('hola mundo desde funcion declarativa')
// }

//!funciones anonimas:
// const hello2 = () {
//     console.log('hola mundo desde funcion anonima')
// }

//!arrow function
// const hello3 = () => {
//     console.log('hola mundo desde funcion de flecha ')
// }


 //!BASE DE DATOS PARA ELIMINAR USUARIOS
//  let database= ['matias', 'celeste', 'agustina', 'pedro', 'lucas', 'sol'];
//  const deleteUser = () => {
//      let nameUser= prompt('ingrese el usuario que desea eliminar');
//      let position = database.indexOf(nameUser)
//      if(database.includes(nameUser)){
//          database.splice(position,1);
//          alert('usuario eliminado correctamente');
//      }else{
//          alert('usuario no encontrado')
//      }
//  }
//!PARA EDITAR USUARIOS
//  const updateUser = () => {
//     let nameUser= prompt('ingrese el usuario que desea eliminar').toLocaleUpperCase()
//     let update=prompt('cual usuario queres agregar?').toLocaleLowerCase()
//     let position = database.indexOf(nameUser)
//     if(database.includes(nameUser)){
//         database.splice(position,1,update)
//         alert('usuario editado correctamente')
//     }else{
//         alert('usuario no encontrado')
//     }

//  }
//!EJERCICIO1: Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// const texto = prompt ('introduce un texto');
// let resultado ="";
// for(let i=0; i < texto.length; i++){
//     resultado += texto.charAt(i);
//     if ( i !== texto.length -1){
//         resultado += "-";
//     }
// }
// console.log(resultado);

//?utilizamos texto.charAt(i) para obtener el carácter en la posición i de la cadena de texto. Luego, ese carácter se concatena a la variable resultado para construir la cadena final.
// ? Por ejemplo, si tenemos la cadena "hola" y queremos obtener el carácter en la posición 2, usaríamos cadena.charAt(2), y esto devolvería la letra "l"

//?length, nos permite determinar la cantidad de caracteres en la cadena y utilizarlo en el bucle for para iterar sobre cada carácter.
//?si la cadena ingresada por el usuario es "hola qué tal", texto.length devolverá el valor 13, ya que hay 13 caracteres en esa cadena


 //!EJERCICIO2: Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”

const texto= prompt('introduce su texto');
const arraytexto= texto.split("");
const resultado= arraytexto.reverse().join("");
console.log(resultado);

//? se utiliza el método split("") para convertir la cadena de texto en un array, donde cada carácter se convierte en un elemento del array. se aplica el método reverse() al array para invertir el orden de los elementos. se utiliza el método join("") para convertir el array invertido de nuevo a una cadena de texto.

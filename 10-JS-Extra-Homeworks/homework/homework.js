// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  let array = Object.entries(objeto);
  return array;
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  /*let aux = string.split('');
  let letters = [];
  let count = 1;
  for(let i = 0; i < aux.length; i++){
    if(aux[i] === aux[i+1]) count++
    else{
      let value = `${aux[i]}: ${count}`
      letters = [...letters,value]
      count = 1;
    }
  }
   function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  } 
  return letters;*/

  let s = string;
  var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
  
 //  console.log(result); {h: 1, e: 1, l: 2, o: 1}
  return result
}
console.log(numberOfCharacters("vvvvaaaalentinoo"));


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let upperRgx = /[A-Z]/g;
    let upperLetters = s.match(upperRgx);
    for(let i=0; i < upperLetters.length;i++) {
        let indx = s.indexOf(upperLetters[i]);
      s = s.substring(0,indx)+s.substring(indx+1,s.length);
    }
    s = upperLetters.join("")+s;
    
    return s;
  
}
console.log(capToFront("hOOOOOlacheE"))

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  return str.split("").reverse().join("").split(" ").reverse().join(" "); 
} 
console.log(asAmirror("The Henry Challenge is close!"))


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 
  let result = numero.toString();
  let len = result.length;
  console.log(result)
  for (let i = 0; i < len / 2; i++) {  
  
    // validate the first and last characters are same  
    if (result[i] !== result[len - 1 - i]) { 
      
        return "No es capicua";
    }  
}  
  return "Es capicua"  
}  

console.log(capicua(11))


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 
  cadena = cadena.replace(/a/, "");
  cadena = cadena.replace(/b/, "");
  cadena = cadena.replace(/c/, "");
  return cadena;
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function startsWithUppercase(str) {
    return str.substr(0, 1).match(/[A-Z\u00C0-\u00DC]/);
}

 let result = arr.sort(function (a, b) {
  console.log(a, b);
  return a.length - b.length;
});
return result;
}
console.log(sortArray( ["You", "are", "beautiful", "looking"]))


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let result = arreglo1.filter(value => arreglo2.includes(value));
  return result;
}
console.log(buscoInterseccion([1,2,3],[5,6,7]))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


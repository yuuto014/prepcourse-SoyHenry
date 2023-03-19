/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = []
   for(let prop in objeto){
      array.push([prop, objeto[prop]]);
   }
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   //ordenar palabra inicial y ponerla en minusculas
   string = string.toLowerCase().split("").sort().join("");
   //crear objeto y llenarlo 
   let objetoLetras = {};
   for(let letra in string){
       if(objetoLetras[string[letra]] != undefined){
           let cantidad = objetoLetras[string[letra]]
           cantidad ++;

           objetoLetras[string[letra]] = cantidad;
       }
       else{
         objetoLetras[string[letra]] = 1;  
       }
   }
   return objetoLetras;
   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let upperCase = [];
   let lowerCase = [];

   for(letra of string){
      if(letra === letra.toLowerCase()){
           lowerCase.push(letra)
      }else{
           upperCase.push(letra)
      }
      
   }
   string = (upperCase.join("") + lowerCase.join(""));
   return string
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   frase = frase.split(" ");
    let newPhase = [];
    
    for(word of frase){
        word = word.split("").reverse().join("");
        newPhase.push(word);
    }
    newPhase = newPhase.join(" ");
    return newPhase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let num = numero.toString();
    let length = num.length;
    let middle = Math.floor(length/2);
    let response;
    length = num.length-1;
    for(let i = 0; i<middle ; i++){
        if(num[i] ===  num[length - i]){
            // console.log(`${num[i]} = ${num[length - i]}`);
        }else{
        return response = "No es capicua";
        }
    }
    return response = "Es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let temp = string.split("");
    let response = [];
    
    temp.forEach(function(letter){
        if(letter == 'a' || letter == 'b' || letter == 'c'){
            
        }else{
            response.push(letter);
        }
    });

    return response.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let temp = arrayOfStrings.sort((a,b)=>{
      return a.length - b.length
  });
  return temp
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let response = []
    array1.forEach(element1 => {
        array2.forEach(element2 => {
            if(element1 === element2){
                response.push(element1);
            }
        });
    });
    console.log(response.sort())
    return response;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

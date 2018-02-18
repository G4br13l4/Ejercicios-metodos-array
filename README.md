# Ejercicios-metodos-array
En este repositorio podemos encontrar ejercicios de manipulación de arreglos.

Se espera que hagas self learning sobre los temas de métodos de arreglos (forEach, map, filter, reduce y sort), y por otra parte estudies el concepto de callbacks para poder resolver los ejercicios de este repositorio.
Revisa este link, sobre métodos de arrays y también investiga por tu cuenta lo que haga falta:

http://blog.builtbyedgar.com/javascript-map-filter-y-reduce-para-dummies/


También estudia sobre callbacks:

https://www.youtube.com/watch?v=N3pDWm9zpdc


## REGLAS:

No puedes utilizar "loops" en ninguna de las funciones (for, while, do while)

Utiliza los metodos para arreglos .map, .reduce, .filter, .forEach y .sort

#### 1. Capitalize
Escribe una función capitalize que tome una palabra como string y retorne el mismo string con todas sus letras en mayusculas
 * ejem: capitalize("whoop") --->  "WHOOP" 

No puedes utilizar directamente sobre str toUpperCase

#### 2. swapCase
Ahora escribe una función llamada swapCase que tome una oración como string y retorne el string alternando una palabra en mayúsculas y otra en minúsculas
 * ejem: swapCase('hey gurl, lets javascript together sometime') ---> "HEY gurl, LETS javascript TOGETHER sometime" 

  NOTA: Debes hacer uso de la funcion capitalize()

#### 3. shiftLetter
Escribe una funcion ShiftLetter() que tome un string y retorne un string codificado cambiando cada letra por la siguiente del alfabeto.
Tips: Investiga sobre las funciones de JS (String.fromCharCode() y String.charCodeAt()) codigo ascii te puede ayudar para resolver este ejercicio 

 * ejem:  shiftLetters('hello')  ---> 'ifmmp'
 * ejem:  shiftLetters('abcxyz')  ---> "bcdyz

 #### 4. Even numbers
Manipula el siguiente array y devuelve un nuevo array que contenga solo a los números pares
 * ejem. evenNumber([1,2,3,4,5,6,7,8,9,10]) ---> [2, 4, 6, 8, 10]

 #### 5. Odd numbers
Ahora  manipulando el mismo array devuelve un nuevo array que contenga solo a los números impares.
 * ejem. oddNumbers([1,2,3,4,5,6,7,8,9,10]) ---> [1, 3, 5, 7, 9]

 #### 6. Reducer
Escribe una función reducer() que tome un arreglo de numeros y retorne un arreglo de dos elementos, el primer elemento será la suma de los números pares y el segundo elemento la suma de los números impares
 * ejem: reducer([1,2,3,4,5,6,7,8,9]) ---> [20, 25]

Nota: Debes de hacer uso de las funciones de evenNumbers() y oddNumbers.

#### 7. array with strings 'javascript'
Manipula el siguiente array y devuelve un nuevo array que contenga los strings 'javascript', debes concatenar dos difrentes métodos para arrays.

A partir de este ejercicio te toca darle nombre y forma a tus funciones y sus respectivos outputs.
 * ejem. output --> ['javascript', 'javascript', 'javascript']

#### 8. Render in DOM
Usando la data anterior y alguno de los métodos, pinta en el index.html a través del DOM
cada una de las personas y todas sus propiedades

#### 9. Total de edad en 'años perro' 
Considera la siguiente variables data. Nosotros tenmos un arreglo de objetos, cada objeto representa una mascota. Las mascotas tienen un nombre, una edad y un tipo.

Instrucciones: 
  1. Selecciona solo a los perros.
  2. Transforma su edad en años perros (multiplica cada una por siete).
  3. Suma el resultado.
  
  * ejem. output --> 84 


#### 10. Render in DOM 
Usando la data anterior y alguno de los métodos, pinta en el index.html a través del DOM
cada una de las mascotas junto con todas su propiedades


#### 11. Alphabetic order
Manipula el siguiente array de frutas y ordenalo alfabéticamente
 * ejem. output --> ['Apple', 'Banana', 'Kiwi', 'Orange'];




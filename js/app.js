
// Ejercicio 1
function capitalize(str) {
  var splited = (str.split(''));
  var capitals = [];
  splited.forEach(function(element){
    capitals.push(element.toUpperCase());
  });
  capitals = capitals.join('');
  console.log(capitals);
}

function capitalizeMap(str) {
  str = str.split('');
  str = str.map(function(x) {
    return x.toUpperCase();
  }).join('');
  console.log(str);
}

capitalize('whoop');
capitalizeMap('whoop');

// Ejercicio 2
function swapCase(str) {
  console.log(str.split(' ').map(function(s, i){
    if(i % 2 == 0){
      return s.toUpperCase();
  } else {
      return s;
  }
}
).join(' '));
}

swapCase("hey gurl, lets javascript together sometime");

// Ejercicio 3
function shiftLetters(str) {
  str = str.split('');
  str = str.map(function(x) {
    return String.fromCharCode(x.charCodeAt() + 1);
  }).join('');
  console.log(str);
}
shiftLetters('hello');

// Ejercicio 4
var numberArray = [1,2,3,4,5,6,7,8,9,10];
function evenNumbers(array) {
  return array.filter(function(number){
    return number % 2 == 0;
  })
};

var outputEvenNumbers = evenNumbers(numberArray);
console.log(outputEvenNumbers); // ---> [2, 4, 6, 8, 10];

// Ejercicio 5
function oddNumbers(array) {
  return array.filter(function(number){
    return number % 2 != 0;
  });
};

var outputOddNumbers = oddNumbers(numberArray);
console.log(outputOddNumbers); // ---> [1, 3, 5, 7, 9];

// Ejercicio 6
function reducer() {
  var odd = oddNumbers(numberArray);
  var even = evenNumbers(numberArray);
  var sumArray = [];
  var sumOdd =  odd.reduce(function(a,b){
    return a + b;
  })
sumArray.push(sumOdd);
var sumEven =  even.reduce(function(a,b){
  return a + b;
})
sumArray.push(sumEven);
return sumArray
}
console.log(reducer());

// Ejercicio 7
var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

var javascripts = [];
function jsFilter(){
  persons.forEach(function(element){
    if(element['tags'] == 'javascript'){
      javascripts.push(element['tags']);
    }
  });
  console.log(javascripts);
}

function jsOtherFilter(array){
  var jsArray = [];
  array.forEach(function(element){
    jsArray.push(element['tags']);
    jsOtherArray =  jsArray.filter(function(tag){
      return (tag == 'javascript');
    });
  })
  console.log(jsOtherArray);
  }
jsFilter();
jsOtherFilter(persons);

// Ejercicio 8
var paintPersons = function() {
  var container = document.getElementById('container');
  persons.forEach(function(element) {
    personId(element);
    personName(element);
    personTag(element);
  });
}

function personId(element) {
  var id = document.createElement('p');
  id.innerText = element['id'];
  container.appendChild(id);
}
function personName(element) {
  var name = document.createElement('p');
  name.innerText = element['name'];
  container.appendChild(name);
}
function personTag(element) {
  var tags = document.createElement('p');
  tags.innerText = element['tags'];
  container.appendChild(tags);
}
var outputPaintPerson = paintPersons(persons);

// Ejercicio 9
var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

function getAge(){
  var counter = 0;
  data.forEach(function(element){
    if(element['type'] === 'dog'){
      var dogAge = element['age'] * 7;
      counter = counter + dogAge;
    }
  })
console.log(counter);
}
getAge();

// Ejercicio 10
 var paintPets = function(array) {
  var container = document.getElementById('container')
  data.forEach(function(element) {
    petName(element);
    petAge(element);
    petType(element);
});
 };

function petName(element) {
  var name = document.createElement('p');
  name.innerText = element['name'];
  container.appendChild(name);
}

function petAge(element) { 
  var age = document.createElement('p');
  age.innerText = element['age'];
  container.appendChild(age);
}

function petType(element) {
  var type = document.createElement('p');
  type.innerText = element['type'];
  container.appendChild(type);
}
var outputPaintPets = paintPets(data);

// Ejercicio 11
var fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];
var sortedFruits = fruits.sort();
console.log(sortedFruits);

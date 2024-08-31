// variables

// let a = 5;
// let name = "Tejas";
// let status = true;

// console.log(a); 

// variables can also be declared using var keyword
// Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared

// constants
// const b = 5;

// datatypes
// primitive types
// string, number, boolean, undefined, null

// dynamic typing
// let a1 = 5;
// a1 = "Tejas";
// console.log(a1);

//Reference types
// Objects, Arrays, Functions

// objects
// let person = {
//     firstname: 'Tejas',
//     age: 22
// };
// console.log(person.firstname);
// console.log(person.age);
// console.log(person['firstname']);
// console.log(person['age']);

// arrays
// used to contain list of items
// let names = ['love', 'rahul', 'sangram'];
// console.log(names[1]);


// operators
// arithmetic ->>   (+   -   *   /   %   **)

// pre/post inc/dec
// ++x -> pre increment -> 1.firstly increment value 2. use the value
// x++ -> post increment -> 1. use the value 2. increment the value

// same for decrement

 
// assignment
// let n = 4;

// comparison
// [>, <, >=, <=, ===, !==]

// equality operator
// loose operator ==  -> checks only value should be equal
// strict equality === -> checks value as well as datatype

// the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands

// ternary operator
// condition ? val1 : val2;

// let age = 20;
// let status = (age>=18) ? 'I can vote' : 'I cannot vote';
// console.log(status);

// logical operator
// AND && , OR || , NOT !

// bitwise operator
// bitwise AND &
// bitwie OR |

// operator precedence
// let c = a + b * d / c;

// control statements
// if-else
// switch case

// let num = 2;
// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     default: console.log('D');
// }

// loops
// for loop
// while loop
// do-while loop -> works for atleast 1 time
// for-in loop
// for-of loop


// ******************** Lec 2 **************

// console.log("lets start");

// object create
// let rectangle = {
//     length: 1, 
//     breadth: 2,

//     draw: function(){
//         console.log('inside the function named draw');
//     }
// };

// console.log(rectangle);
// rectangle.draw();

// object creation - how?

// factory function
// -> for creation of objects multiple times
// function createRectangle(){
//     return rectangle = {
//         length: 1, 
//         breadth: 2,
    
//         draw: function(){
//             console.log('inside the function named draw');
//         }
//     };
// }

// console.log(createRectangle());
// let vari = createRectangle();
// console.log(vari);

// passing the parameters
// function createRectangle(len, bre){
//     return rectangle = {
//         length: len, 
//         breadth: bre,
    
//         draw: function(){
//             console.log('inside the function named draw');
//         }
//     };
// }
// let obj1 = createRectangle(3,5);
// console.log(obj1);
// obj1.draw();


// same as above
// function createRectangle(){
//     let rectangle = {
//         length: 1, 
//         breadth: 2,
    
//         draw: function(){
//             console.log('inside the function named draw');
//         }
//     };
//     return rectangle;
// }


// constructor function  ->> pascal notation ->> first letter of every word is capital

// this is notating towards the current object
// function Rectangle(){
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }

// // object creation using constructor
// let rectangleObject = new Rectangle();
// console.log(rectangleObject);


// dynamic nature of objects

// function Rectangle(){
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }

// let rectangleObject = new Rectangle();
// rectangleObject.color = 'yellow'; // adding new property
// console.log(rectangleObject);
// delete rectangleObject.color; // deleting color property
// console.log(rectangleObject);


// functions are objects

// types in js
// 1.primitives or value types
// 2.reference types or objects

// primitives are copied by their value
// references are copied by their address/reference


// iteration through objects
// for-of
// for-in

// let rectangle ={
//     length:2,
//     breadth:4
// };

// for-in loop
// for(let key in rectangle){
//     // console.log(key);
//     // keys are reflected through key variabbles
//     // values are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
// }


// for-of loop -> used only for iterables -> arrays and maps

// for checking if the property exists or not
// if('length' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }



// object cloning
// iteration
// assign
// spread

// iteration
// let src = {value:10};
// let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }
// for(let key in dest){
//     console.log(key);
// }

// assign 
// let src = {value:10};
// let dest = object.assign({}, src);

// let src = {value:10};
// let dest = {... src};


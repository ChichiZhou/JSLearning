function greet(name){
    console.log(`HELLO ${name}`);  // 将 input 放入到 string 中的方式
}

greet('SL');

// 注意以下两种的不同之处
const colors = ['red', 'green', 'yellow'];
for (let key in colors){
    console.log(key, colors[key]);
}

for (let color of colors){
    console.log(color);
}

// 可以直接用 {} 来创建一个 object
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    // 在object中放入一个 function，而这个 function 可以被称为是 method
    draw: function(){
        console.log('drow');
    }
};

// Factory Functions
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}
const myCircle = createCircle(1);

// Constructor Functions
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    return this;
}
const myCircle2 = new Circle(1);

// Show the constructor of the object
console.log(myCircle2.constructor);

// Function is object
const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    return this;
`);

const another = Circle1(1);

Circle.call({}, 1);
Circle.apply({}, [1]);

// Use Object.entries() ????
for (let key of Object.keys(circle)){
    console.log(key);
}

const message = 
`Hi Shi Lin,

I love you so much.

Yours,
HE ZHO
`
console.log(message);

// Array Operations //

 /**
  * Array Add elements
  */
 const numbers = [3, 4];
 // Add to the end
 numbers.push(5,6)
 // Add to the beginning
 numbers.unshift(1, 2);
 // Add to the middle
 numbers.splice(2, 0, 'a', 'b');
 console.log(numbers);


 /**
  * Array Find element
  */
 // Return the index of element
 console.log(numbers.indexOf('a'));
 // Return last index of element
 console.log(numbers.lastIndexOf(1));
 // Return if the array contains the element
 console.log(numbers.includes(1));
 // Set the starting point. The second parameter is the start position.
 console.log(numbers.indexOf(1, 2));

 // Find element for reference type
 const courses = [
     {id:1, name: 'a'},
     {id:2, name: 'b'},
 ];
// Find the element
 console.log(courses.find(course => {return course.name == 'a';}));
 // Find the index
 console.log(courses.findIndex(course => {return course.name == 'a';}));

 /**
  * Array Remove Element
  */
// Remove the last
const last = numbers.pop();
// Remove from the beginning
const first = numbers.shift();
// Remove from the middle
const middle = numbers.splice(2, 1);

/**
 * Combine Array
 */
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
// Use concat
const combined = firstArray.concat(secondArray);
// Use spread
const spreadCombined = [...firstArray, ...secondArray];
console.log(combined);
console.log(secondArray);
// Use forEach. forEach can have two index
combined.forEach((number, index) => console.log(number, index));
/**
 * Divide the Array
 */
const slice = combined.slice(2, 4);

/**
 * Join Array
 */
const joined = numbers.join(',');

/**
 * Split Array
 */
const messageForJoin = 'This is my first message';
const parts = messageForJoin.split(' ');
console.log(parts);

/**
 * Sort Array
 */
numbers.sort();
console.log(numbers);

/**
 * Reverse Array
 */
numbers.reverse();
console.log(numbers);

const coursesSort = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JAVAScript'},
]

coursesSort.sort(function(a, b) {
    // a < b ==> -1
    // a > b ==> 1
    // a === b ==> 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

/**
 * Test every element
 */
const numbersTest = [1, -1, 2, 3];
const allPositive = numbersTest.every(function(value){
    return value >= 0;
});

const onePositive = numbersTest.some(function(value){
    return value >= 0;
});

/**
 * Filter Array (This will create a new array)
 */

 const filtered = numbersTest.filter(function(value){
     return value >=0;
 });
 console.log(filtered);

 /**
  * Map the Array
  */

  const item = filtered.map(n => {return {value: n};});
  console.log(item);

/**
 * Reduce Array
 */

 const numbersReduce = [1, -1, 2, 3];
 const sumReduce = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue);
 console.log(sumReduce);

 // Function //
 // Function Declaration
 // 按照 JAVA 一样声明函数。这样做的好处是，可以在声明这个函数主体之前调用，即
 // 原因是 JAVAScript 会把所有的 Function Declariation 移动到最前面 （这个过程叫做 hoisting）
 walk();
function walk(){
    console.log('walk');
}
// Function Expression
// 按照 JAVAScript 声明函数。这样就不能再声明函数主体之前调用了
const run = function(){
    console.log('run');
}
run();


// Arguments
// Arguments 是 function 自带的一个 object，其作用是代表传入的参数。所以在 function 的声明中
// 可以不设置传入参数，直接用 argument
// 这样可以不必限定传入参数的个数
function sum(){
    let total = 0;
    for (let value of arguments){
        total += total;
    }
    return total;
}

console.log(sum(1,2,3,4,5));


// Rest Operator
// 这里需要注意，rest operator 必须是放在最后一位的
function sumOperator(...aargs){
    return arguments.reduce((a, b) => a + b);
}

// Getter and Setter
const person = {
    firstName: 'HE',
    lastName: 'ZHOU',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        if (value !== 'string'){
            throw new Error('Value is not a string');
        }

        const parts = value.split(' ');
        if (parts.length != 2){
            throw new Error('Enter a first and last name');
        }
        
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    printName(){
        console.log(`${person.firstName} ${person.lastName}`);
    }
}

try{
    person.fullName = '';
}
catch (e){
    alert(e);
}

const colorglobale = 'red';
function changeColor(){
    // 虽然这里创建了一个 c
    const colorglobale = 'blue';
    console.log('In the block, the color is ' + colorglobale);
}

changeColor();
console.log('In the global, the color is ' + colorglobale);


// let 和 var 的区别
// var 的 scope 不在于 block，而在于 function
// var => function-scoped variable
// let, const => block-scoped variable

// this
// method -> object
// function -> global
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
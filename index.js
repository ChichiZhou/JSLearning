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
const spreadCombined = [...first, ...second];
console.log(combined);
console.log(secondArray);

/**
 * Divide the Array
 */
const slice = combined.slice(2, 4);


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
/**
 * Array Operations
 */

 // Add elements
 const numbers = [3, 4];
 numbers.push(5,6)
 console.log(numbers);

 
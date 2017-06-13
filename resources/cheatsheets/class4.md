# Class 4 Cheatsheet

## Fetch

The Fetch helper accepts a URL and returns a promise. Use `.json()` on the initially-returned `Response` promise to get the JSON you need via chaining `this()`, for example:


```
fetch('https://api.github.com/users/octocat/repos')
  .then(response => response.json())
  .then(data => console.log(data)) // the JSON data
  .catch(err => console.log(err));
```

## Generator Functions

Generator functions are pausable functions that, when called, return an _iterator_. They contain _yield_ statements. After a _yield_ statement is returned, the function pauses execution at that point. To construct a generator function, use a `*` between `function` and the function name.

Call `next()` on the iterator to return an object containing the yielded `value` and `done` state of the generator function (e.g. `{ value: yieldValue, done: trueOrFalse}`).

```
function *createIterator() {
     yield 30;
     yield 31;
     yield 32;
   }
   
   const iterator = createIterator();
   console.log(iterator.next()); // { value: 30, done: false }
   console.log(iterator.next()); // { value: 31, done: false }
   console.log(iterator.next()); // { value: 32, done: false }
   
   // subsequent calls
   console.log(iterator.next()); // { value: undefined, done: true }
   ```
   
## Iterables
   
To make an object you've created iterable, add a `*[Symbol.iterator]()` method with yielded values:

```
const team = {
  members: [],
  *[Symbol.iterator](){
    for (let member of this.members) {
      yield member;
    }
  }
};
```

Loop through child notes by triggering that child node's `Symbol.iterator` generator function, for example:

// TODO

## Sets 

A set is an ordered list of **unique** values.

```
const set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(set.size); // 5
set.add(6);
console.log(set.size); // 6
```

## Maps

A map is an ordered list of key-value pairs, where the key and value can be any type.

```
const map = new Map();
map.set('title', 'JS206: Intro to ES6');
map.set('group', 'GDI');

console.log(map.get('title')); // JS206: Intro to ES6
console.log(map.get('group')); // GDI
```

## Built-in Iterators

You can loop over collections, including arrays, objects (using `Object.theIterator(objectName)`), maps, and sets using the following functions:
- `keys()` returns an iterator whose values are the keys contained in the collection
- `entries()` returns an iterator whose values are key-value pairs
- `values()` returns an iterator whose values are the values of the collection

## Classes

Declare classes with the `class` keyword, and make derived classes with the `extends` keyword. A derived class can access the base class constructor by calling `super()`:

```
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}
class Square extends Rectangle {
  constructor(length) {
    super(length, length); // calls the base class constructor
  }
}

const square = new Square(5);
console.log(square.getArea()); // 25
```

## Exporting and Importing Modules

### Exporting

Use the `export` keyword before variables, functions, and classes that you'd like to expose in a file, for example:

``` 
// export variables
export let description = 'GDI Fan';
export const threshold = 7;

// export functions
export function multiply(a, b) {
  return a * b;
}

// export classes
export class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}
```

### Importing

Import variables, functions, and classes by using the `import` keyword and placing all of your `import`s at the top of your file, for example:

``` 
import { Rectangle, description, multiply } from './myExports.js';

const shape = new Rectangle(6, 8);
console.log(description); // 'GDI Fan'
console.log(multiply(3, 5)); // 15
```
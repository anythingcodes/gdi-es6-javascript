# Class 3 Cheatsheet

## Function Parameters

### Default Function Parameter Values

Use an equal sign (`=`) after the parameter to which you'd like to assign a default value. 

```
function request(url, timeout = 2000, callback = () => {}) {
    callback();
}
```

ES6 will automatically evaluate values that were once considered falsey, such as `0`.


### Enforcing Mandatory Parameters

```
function mandatory() {
  throw new Error('You forgot a parameter!');
}

function doSomething(mustBeProvided = mandatory()) {
  return mustBeProvided;
}
```

### Rest Parameters

Rest parameters compress the _rest_ (i.e. all following parameters) of the parameters following `...` in a function to an array, for example:

```
function giveItARest(param1, ...allTheRest) {
  console.log(param1); // 1
  console.log(allTheRest); // [2, 3, 4, 5, 6]
}

giveItARest(1, 2, 3, 4, 5, 6);
```

### Spread Operator

Place `...` before an array to _spread_ the array into individual elements.

```
const numbers = [2, 3, 4];

console.log([1, numbers]); // nested array: [1, [2, 3, 4]]

console.log([1, ...numbers]); // normal array: [1, 2, 3, 4]
```

## Object Syntax

### Property Initializer Shorthand

When an object property name is the same as the local variable name, you can include the name without a colon and example, for example:

```
function saveData(url, data){
  $.ajax({ url, data, method: 'POST' });
}
```

### Concise Methods

Object methods no longer need `: function`, for example:

```
const dog = {
  name: 'Boo',
  bark() {
    console.log('yip!');
  }
};
dog.bark(); // yip!
```

## Destructuring

## Objects

Use destructuring on objects to pluck values by key name, for example:

```
const person = {
  name: 'Whitney',
  age: 38
};

const { name, age } = person;
console.log(name, age); // Whitney 38
```

In the event a value is undefined, set a default value with an equal sign (`=`) after that value, for example:

```
const person = {
  name: 'Whitney'
};

const { name, age = 0 } = person;
console.log(name, age); // Whitney 0
```

Destructuring can also be used in function parameters when an object (e.g. an `options` object) is passed in:

```
function register( { email, username, password, dateOfBirth, city }) {
  // code to create a new user
}

register(user); // will be destructured within register() parameters
```

To assign a different variable name to the destructured value, use a colon after the key name, for example:

```
const { name : localName, age } = person;
// now I can reference localName going forward!
```

### Arrays

Use destructuring on arrays to pluck values by position, for example:

```
const colors = ['red', 'green', 'blue'];

const [ first, second, third ] = colors;

console.log(first, second, third); // red green blue
```

In the event a value is undefined, set a default value with an equal sign (`=`) after that value, for example:

```
const scores = [ 94, 89 ];

const [ first, second, third = 0 ] = scores;

console.log(first, second, third); // 94 89 0
```

## Promises

Promises are placeholders for results that will eventually process. They're a great alternative to 'callback hell' and give developers more control over determining when an event is resolved or rejected. Be sure to **always** include a `catch()` handler.

To create a promise, create a `Promise` object with an executor callback function that accepts `resolve` and `reject` handlers. Attach a `catch()` block as a rejection handler and a `then()` block as your fulfillment handler, for example:

```
const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve(12);
	} else {
		reject(13);
	}
});

promise.then(res => {
		console.log(res); // 12
	})
	.catch(err => {
		console.log(err); // would output 13 if there were an error
	});
```

`Promise.all()` accepts an iterable (e.g. an array) of promises, and returns an array of result values. If any of the promises in the array fail, the returned promise fails too.

`Promise.race()` accepts an iterable (e.g. an array) and returns the results of the first promise to become fulfilled.```
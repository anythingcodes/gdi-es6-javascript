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

A set is an ordered list of unique values.
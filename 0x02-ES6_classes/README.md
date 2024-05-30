---
tags:
  - Programming
  - JavaScript
---
# Symbol
A symbol is a primitive value that is guaranteed to be unique, they are mostly used with classes and objects for information hiding.

```js
const symbol = Symbol('foo');
const obj = {
  name: 'Jack',
  age: 29,
  [symbol]: 'hidden property',
};

console.log(obj);
// {name: 'Jack', age: 29, Symbol(foo): 'hidden property'}

console.log(Object.keys(obj));
// ['name', 'age']

for (const prop in obj) {
  console.log(`obj[${prop}]: ${obj[prop]}`);
}
// obj[name]: Jack
// obj[age]: 29

console.log(JSON.strigfy(obj));
// {"name":"Jack","age":29}
```

## Symbols are unique
Symbols created by the Symbol factory are always unique, and that is the reason why we saved the symbol to a variable in the first example

```js
Symbol() == Symbol(); // false
Symbol('foo') == Symbol('foo'); // false
Symbol() == Symbol('foo'); // false
```

```js
const symbol = Symbol('foo');
const obj = {
  name: 'Jack',
  [symbol]: 'hidden property',
  [Symbol('bar')]: 'good luck finding me',
};
console.log(obj[symbol]); // 'hidden property'
console.log(obj[Symbol('foo')]); // undefined
console.log(obj[Symbol('bar')]); // undefined
```

we can get the `Symbol('bar')` actually
```js
const objSymbols = Object.getOwnPropertySymbols(obj);
console.log(objSymbols);  // [Symbol(foo), Symbol(bar)]
console.log(obj[objSymbols[1]]);  // good luck finding me
```

## Well-known Symbols
All static properties of the Symbol constructor are Symbols themselves, whose values are constant across realms. They are known as well-known Symbols, and their purpose is to serve as _protocols_ for certain built-in JavaScript operations, allowing users to customize the language's behavior.

```js
class Person {
  constructor(name, age) {
    this.name = name;
	this.age = age;
  }

  [Symbol.toPrimitive](dataType) {
	const types = {
	  string: this.name,
	  number: this.age,
	};
	return types[dataType];
  }
}

const ali = new Person('Ali', 22);
console.log(String(ali)); // Ali
console.log(Number(ali)); // 22
```

# Links
[[2024-05-30]]
[MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
[Meta-programming in ES6](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/)

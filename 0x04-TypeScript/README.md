# TypeScript
TypeScript is JavaScript with static typing, helping on building extensible applications and mitigating errors before they happen.
It provides a nice tooling like type-checking and auto-completion with text editors

## Primitive Types
All JavaScript types is available in TypeScript

```ts
let name: string = 'Doe';

name = 230; // this will throw an error, in the editor and at compile time
```

```ts
let name = 'Ali';

name = 340;
// same as above; typescript knows that the type will be string
```


## Custom Types
When using JavaScript you will create objects for sure, to objects and classes a type, you can use the new keywords TypeScript has: `type` and `interface`

```ts
interface User {
  name: string;
  id: number;
}

const user: User = {
  id: 1,
  username: 'kaka',  // error because User does not have username
};

function getUser(): User {
  // ...
  return user
}
```


## Composing Types
```typescript
type id = number | string;

function len(thing: string | any[]): number {
  return thing.length;
}
```


## Generics
```typescript
type names = Array<string>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
```


## Structural/Duck type system
In TypeScript the element is of the correct type if it looks like the type need, without being exactly of the same type.

```ts
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const color = { hex: "#187ABF" };
logPoint(color); // Error: is not assignable to type Point
```


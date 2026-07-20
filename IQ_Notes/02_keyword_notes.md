# JavaScript Keywords Guide

## What is a Keyword?

A **keyword** is a **reserved word** in JavaScript that has a special meaning and purpose. Keywords cannot be used as variable names, function names, or identifiers because they are already assigned specific functions by the language itself.

```js
// ❌ WRONG — 'let' is a keyword, cannot use as variable name
let let = 10;

// ✅ CORRECT — proper usage of 'let'
let x = 10;
```

---

## Why Keywords Matter?

| Aspect | Explanation |
|---|---|
| **Reserved** | Cannot be used as identifiers (variable/function names) |
| **Fixed meaning** | Each keyword tells JavaScript to do something specific |
| **Language structure** | Keywords define control flow, data types, scoping, etc. |
| **Error prevention** | Using a keyword as a name causes `SyntaxError` |

---

## All JavaScript Keywords (65 Total)

### 1. **Var, Let, Const** — Variable Declaration (3)

| Keyword | Scope | Redeclarable? | Mutable? | Hoisted? | Use Case |
|---|---|---|---|---|---|
| `var` | Function-scoped | ✅ Yes | ✅ Yes | ✅ Yes (partial) | ⚠️ Avoid — legacy, avoid conflicts |
| `let` | Block-scoped | ❌ No | ✅ Yes | ⚠️ TDZ | ✅ Modern default for variables |
| `const` | Block-scoped | ❌ No | ❌ No | ⚠️ TDZ | ✅ Default for constants/immutables |

**Example:**
```js
var x = 1;
var x = 2;  // ✅ Allowed — can redeclare
console.log(x);  // 2

let y = 1;
let y = 2;  // ❌ SyntaxError — cannot redeclare

const z = 1;
z = 2;  // ❌ TypeError — cannot reassign
```

---

### 2. **Control Flow** — Conditionals (5)

| Keyword | Purpose | Example |
|---|---|---|
| `if` | Execute code if condition is true | `if (x > 5) { ... }` |
| `else` | Execute code if `if` is false | `} else { ... }` |
| `else if` | Check another condition | `} else if (x === 5) { ... }` |
| `switch` | Check multiple conditions | `switch (day) { case 1: ... }` |
| `case` | Label in switch statement | `case 'Monday': break;` |

**Example:**
```js
let age = 20;

if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teen");
} else {
  console.log("Adult");
}  // Output: "Adult"
```

---

### 3. **Loops** — Iteration (5)

| Keyword | Purpose | Use When |
|---|---|---|
| `for` | Loop with counter | Need fixed iteration count |
| `while` | Loop while condition is true | Unknown iteration count |
| `do` | Execute, then loop while true | Need at least one execution |
| `break` | Exit loop early | Condition met early |
| `continue` | Skip to next iteration | Skip current cycle |

**Example:**
```js
// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);  // 0, 1, 2
}

// while loop
let count = 0;
while (count < 3) {
  console.log(count);  // 0, 1, 2
  count++;
}

// break & continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;  // skip 2
  if (i === 4) break;     // stop at 4
  console.log(i);  // 0, 1, 3
}
```

---

### 4. **Functions** — Function Declaration (5)

| Keyword | Purpose | Example | Arrow Function? |
|---|---|---|---|
| `function` | Declare a function | `function add(a, b) { return a + b; }` | ❌ No |
| `return` | Return value from function | `return x * 2;` | ✅ Yes |
| `async` | Declare async function | `async function fetch() { ... }` | ✅ Yes |
| `await` | Wait for Promise | `let result = await fetchData();` | ✅ Yes |
| `yield` | Return value from generator | `function* gen() { yield 1; }` | ❌ No |

**Example:**
```js
// Regular function
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Alice"));  // "Hello, Alice"

// Async function with await
async function fetchUser() {
  let data = await fetch('/api/user');
  return data.json();
}

// Generator function
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
let gen = counter();
console.log(gen.next());  // { value: 1, done: false }
```

---

### 5. **Object-Oriented** — Classes & Objects (6)

| Keyword | Purpose | Use |
|---|---|---|
| `class` | Define a class | `class Car { ... }` |
| `new` | Create new instance | `let car = new Car();` |
| `this` | Refer to current object | `this.name = "Tesla";` |
| `super` | Call parent class method | `super.method();` |
| `extends` | Inherit from class | `class Tesla extends Car { ... }` |
| `static` | Class method (not instance) | `static info() { ... }` |

**Example:**
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
  
  static info() {
    console.log("Dogs are loyal");
  }
}

let dog = new Dog("Buddy");
dog.bark();        // "Buddy barks"
Dog.info();        // "Dogs are loyal"
```

---

### 6. **Try-Catch** — Error Handling (3)

| Keyword | Purpose | When Used |
|---|---|---|
| `try` | Block that might throw error | Wrap risky code |
| `catch` | Handle error | If error occurs |
| `finally` | Always execute | Cleanup code |

**Example:**
```js
try {
  let result = JSON.parse("invalid JSON");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Cleanup complete");
}
// Output:
// "Error caught: Unexpected token i in JSON at position 0"
// "Cleanup complete"
```

---

### 7. **Operators & Logic** (8)

| Keyword | Purpose | Example |
|---|---|---|
| `typeof` | Get data type | `typeof 5 === 'number'` |
| `instanceof` | Check if object is instance | `dog instanceof Dog` |
| `in` | Check if property exists | `'name' in dog` |
| `delete` | Remove property | `delete dog.age;` |
| `void` | Return undefined | `void 0` |
| `new` | Create instance | `new Date()` |
| `this` | Current context | `this.name` |
| `super` | Parent class | `super.method()` |

---

### 8. **Modules** — Import/Export (4)

| Keyword | Purpose | Example |
|---|---|---|
| `import` | Import from module | `import { add } from './math.js';` |
| `export` | Export from module | `export function add(a, b) { ... }` |
| `from` | Specify module path | `import x from './file.js';` |
| `default` | Default export | `export default function() { ... }` |

**Example:**
```js
// math.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14;

// main.js
import { add, PI } from './math.js';
console.log(add(2, 3));  // 5
console.log(PI);         // 3.14
```

---

### 9. **Special Values & Flow** (6)

| Keyword | Value | Purpose | Type |
|---|---|---|---|
| `true` | Boolean | Represents true condition | Primitive |
| `false` | Boolean | Represents false condition | Primitive |
| `null` | Object (null) | Intentional absence of value | Primitive |
| `undefined` | Undefined | No value assigned yet | Primitive |
| `NaN` | Number | Not-A-Number | Special number |
| `Infinity` | Number | Infinite value | Special number |

**Example:**
```js
console.log(true);        // true
console.log(false);       // false
console.log(null);        // null
console.log(undefined);   // undefined
console.log(5 / 0);       // Infinity
console.log(0 / 0);       // NaN
```

---

### 10. **Miscellaneous** (6)

| Keyword | Purpose | Example |
|---|---|---|
| `debugger` | Pause execution (dev tools) | `debugger;` |
| `with` | Simplify object reference | `with (Math) { x = cos(0); }` ⚠️ Avoid |
| `label` | Label a code block | `label: { break label; }` |
| `throw` | Throw error manually | `throw new Error("Custom error");` |
| `protected` | (reserved, not used in modern JS) | — |
| `private` | (reserved for future use) | — |

---

## Complete Keyword Reference Table

| Category | Keywords | Count |
|---|---|---|
| **Variable Declaration** | var, let, const | 3 |
| **Control Flow** | if, else, else if, switch, case | 5 |
| **Loops** | for, while, do, break, continue | 5 |
| **Functions** | function, return, async, await, yield | 5 |
| **OOP** | class, new, this, super, extends, static | 6 |
| **Error Handling** | try, catch, finally | 3 |
| **Operators** | typeof, instanceof, in, delete, void | 5 |
| **Modules** | import, export, from, default | 4 |
| **Special Values** | true, false, null, undefined | 4 |
| **Miscellaneous** | debugger, with, label, throw | 4 |
| **Reserved (future)** | abstract, boolean, byte, char, double, enum, final, float, goto, implements, interface, int, long, native, package, private, protected, public, short, synchronized, throws, transient, volatile | 23 |
| **TOTAL** | — | **65+** |

---

## Keywords by Frequency of Use

### 🔥 **Most Used** (Daily)
- `let`, `const`, `function`, `if`, `else`, `for`, `return`, `class`, `try`, `catch`

### 📊 **Common** (Regular)
- `var`, `while`, `switch`, `async`, `await`, `new`, `this`, `import`, `export`, `typeof`

### 📌 **Occasional** (Less frequent)
- `do`, `break`, `continue`, `extends`, `super`, `static`, `delete`, `throw`, `finally`

### 🔧 **Rare** (Specialized)
- `yield`, `debugger`, `with`, `label`, `void`, `in`, `instanceof`, `default`, `from`

---

## Common Mistakes with Keywords

| ❌ Wrong | ✅ Correct | Issue |
|---|---|---|
| `let let = 5;` | `let x = 5;` | `let` is keyword, can't be identifier |
| `function = () => {}` | `const func = () => {}` | `function` is keyword |
| `if x > 5 { ... }` | `if (x > 5) { ... }` | Missing parentheses |
| `for i = 0; i < 5; i++` | `for (let i = 0; i < 5; i++)` | Missing declaration |
| `class { }` | `class MyClass { }` | Class needs name |

---

## TL;DR — JavaScript Keywords

**Keywords = Reserved words with special meaning that you cannot use as variable/function names.**

| Use Case | Keywords |
|---|---|
| **Declare variables** | `var`, `let`, `const` |
| **Control flow** | `if`, `else`, `switch`, `case` |
| **Loops** | `for`, `while`, `do`, `break`, `continue` |
| **Functions** | `function`, `async`, `await`, `return`, `yield` |
| **Classes** | `class`, `extends`, `super`, `static`, `this` |
| **Error handling** | `try`, `catch`, `finally`, `throw` |
| **Type checking** | `typeof`, `instanceof`, `in` |
| **Modules** | `import`, `export`, `from`, `default` |
| **Special values** | `true`, `false`, `null`, `undefined` |

> **Pro Tip:** Most modern JavaScript uses: `let`, `const`, `function`, `class`, `async/await`, `import/export`. Master these first!

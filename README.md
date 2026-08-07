# LearnPlayWright3X

LearnPlayWright3X is a practice repository for JavaScript fundamentals. The exercises are organized chapter by chapter, starting with basic output and variables, then moving through identifiers, literals, operators, statements, switch, user input, loops, arrays, and functions.

GitHub repository: https://github.com/rajr96/LearnPlayWright3X

## Repository contents

- Chapter-based JavaScript exercise files in numbered folders.
- IQ notes with reference material on JavaScript concepts, tooling, and runtime internals.
- A package setup that can also be used for Playwright experiments.

## Completed JavaScript exercises

### 01_chapter_Javascript
- 01_Helloworld.js: first console output example using console.log.
- 02_Let_concept.js: introduces let and simple variable output.

### 03_chapter_identifier
- 03_identifier_Rules.js: valid identifier characters and naming basics.
- 04_Identifier_Ruls_Part2.js: naming conventions such as camelCase, snake_case, and constants.
- 05_comments.js: single-line, multi-line, and JSDoc comments.
- 06_identifier_IQ.js: identifier-focused practice questions.

### 04_Chapter_Literal
- 07_Literal.js: literal values such as strings, numbers, and booleans.
- 08_null_undefined.js: difference between null and undefined.
- 09_null_IQ.js: practice around special values and edge cases.

### 05_Chapter_Operator
- 13_DataTypes.js: overview of primitive types, objects, arrays, functions, and NaN.
- 14_Assignment_operator.js: assignment and compound assignment operators.
- 15_Arthmetic_Operator: arithmetic operator examples.
- 16_comparsion_operator.js: comparison operators and boolean results.
- 17_logical_operators.js: logical AND, OR, and NOT.
- 18_confusing_comparsion.js: tricky coercion and equality comparisons.
- 20_Question.js: placeholder for operator practice questions.
- 21_String_Operators.js: string concatenation and related operator behavior.
- 22_Ternary_Operator.js: conditional expression examples.
- 28_Nested_terny_operator.js: nested ternary practice.
- 31_Type_op.js: typeof-based checks and type inspection.
- 32_Increment_Decrement_operator.js: pre/post increment and decrement behavior.
- 36_null_coalescing.js: nullish coalescing with default values.

### 06_chapter_Statement
- 37_iQ.js: statement and condition practice.
- 38.IQ.js: additional decision-making exercises.
- 39_multiple_condition.js: combining multiple conditions in one decision path.

### 07_Chapter_switch
- 39_switch.js: switch-case examples.
- 40_IQ.js: switch-related practice questions.

### 08_Chapter_UserInputs
- 50_Prompt.js: takes input with prompt-sync and checks even/odd.
- 51_Fs.js: reads stdin through fs.readFileSync.
- JS.js: another parity example using prompt-style input.

### 09_chapter_Loops
- 57_While.js: while loop basics.
- 60_while_vs_for.js: compares while loops with for loops.
- 61_Do_While.js: do...while loop examples.
- 62_DoWhile_vs_whle.js: difference between do...while and while.
- 63_NestedFor_Loop.js: nested loop traversal examples.
- For_Loop.js: standard for loop usage.
- loop.js: repetition without loops as a contrast exercise.

### 10_chapter_Arrays
- 64_Array.js: array basics and common methods such as push, pop, splice, sort, and slice.
- 66_Array_Creation.js: array literals, constructors, Array.of, and Array.from.
- 67_Array_Modifying.js: updating and changing array contents.
- 69_Array_Real.js: practical array usage.
- 70_Array_Searching.js: searching arrays with built-in helpers.
- 72_Array Iterate.js: iteration with for, for...of, and forEach.
- 73_Array_Transforming.js: transforming arrays with methods like map or filter.
- 74_Array_sorting.js: sorting values in arrays.
- 75_Array_Slicing.js: extracting parts of arrays.
- 76_ArrayConcat.js: concat, spread, and join examples.
- 77_Array_Checking.js: array checks and validation helpers.
- 78_Array_Copy.js: copying arrays and understanding shallow copies.
- 79_Array_Destructuring.js: destructuring and rest syntax.

### 11_Chapter_Functions
- 78_FN.js: shows why reusable function extraction is better than repeated inline logic.
- 79_Fn.js: introduces several function shapes, including arguments and return values.
- 80_Type1_basic_FN.js: no-argument, no-return functions and the difference between console.log and return.
- 81_Type2_Basic_fn.js: functions with parameters but no return value.
- 82_Type3_Basic_Fn.js: functions with no parameters but with a return value.
- 83_Type4_Basic_Fn.js: functions with parameters and a return value.
- 84_Template_Literal.js: returning strings with template literals.
- 85_Fn_Exp.js: function declarations, function expressions, and arrow functions.
- 88.Real.js: a practical status-code validation example written in three function styles.
- 89_Fn.js: IIFE patterns, arrow IIFEs, arguments, and returned values.

## Notes and references

### IQ_Notes
- 02_keyword_notes.md: JavaScript keywords, categories, and examples.
- 03_commands_mac.md: macOS command and shortcut notes.
- 03_commands_win.md: Windows and PowerShell command notes.
- Compiled_Interpreted_JIT_IQ.md: compiled vs interpreted vs JIT explanation with examples.
- source_code_bytecode_binary_iQ.md: source code, bytecode, and binary execution flow.
- examples.js: example program for mapping weekday numbers to names.

## Practical examples

```js
function getResult(score) {
  return score > 50 ? 'pass' : 'fail';
}

console.log(getResult(100));
console.log(getResult(40));
```

```js
const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge'];
const lastBrowser = browsers.at(-1);
console.log(lastBrowser);
```

```js
const greet = (name) => `Hello. ${name}`;
console.log(greet('John'));
```

## Running the exercises

Install dependencies:

```bash
npm install
```

Run a file with Node.js:

```bash
node 01_chapter_Javascript/01_Helloworld.js
node 10_chapter_Arrays/64_Array.js
node 11_Chapter_Functions/83_Type4_Basic_Fn.js
```

Note: 00_chapter_GENAI and 02_chapter_Javascript exist in the workspace, but they do not currently contain documented exercise files.

---

## 📋 Learning Path

### Beginner (Start Here)
1. ✅ `01_Helloworld.js` — Your first program
2. ✅ `02_Let_concept.js` — Understanding variables
3. 📖 `source_code_bytecode_binary_iQ.md` — How code works
4. 📖 `02_keyword_notes.md` — Learn JavaScript keywords

### Intermediate
5. ✅ `03_identifier_Rules.js` — Naming conventions
6. ✅ `04_Identifier_Ruls_Part2.js` — Advanced rules
7. ✅ `05_comments.js` — Code documentation
8. ✅ `06_identifier_IQ.js` — Challenge yourself
9. ✅ `07_Literal.js` — Understanding literals
10. ✅ `08_null_undefined.js` — Special values
11. ✅ `09_null_IQ.js` — Advanced challenge

### Advanced
12. ✅ `13_DataTypes.js` — Review data types
13. ✅ `14_Assignment_operator.js` — Assignment operators
14. ✅ `15_Arthmetic_Operator` — Arithmetic operations
15. ✅ `16_comparsion_operator.js` — Comparison & equality
16. ✅ `17_logical_operators.js` — Boolean logic
17. ✅ `18_confusing_comparsion.js` — Edge cases & pitfalls
18. ✅ `20_Question.js` — Operator practice challenges
19. ✅ `21_String_Operators.js` — String operators & templates
20. ✅ `22_Ternary_Operator.js` — Ternary (conditional) operator
21. ✅ `28_Nested_terny_operator.js` — Nested ternary patterns
22. ✅ `31_Type_op.js` — typeof & type-checking
23. ✅ `32_Increment_Decrement_operator.js` — ++/-- operators
24. ✅ `36_null_coalescing.js` — Nullish coalescing operator (??)
25. ✅ `37_iQ.js` — Conditional logic challenge
26. ✅ `38.IQ.js` — More conditional challenges
27. ✅ `39_multiple_condition.js` — If-else-if chains (grading system)
28. ✅ `39_switch.js` — Switch statement with day selector
29. ✅ `40_IQ.js` — Switch statement challenges (browsers, fruits)
30. 📖 `Compiled_Interpreted_JIT_IQ.md` — Deep dive into compilation
31. ✅ `50_Prompt.js` — Even/odd check using prompt-sync
32. ✅ `51_Fs.js` — Even/odd greeting using stdin input
33. ✅ `JS.js` — Prompt-style input and parity check

---

## ✅ Latest Exercise Updates

The following exercises were completed and documented in this repository:

### 1) `08_Chapter_UserInputs/50_Prompt.js`
- Added interactive number input using `prompt-sync`.
- Converts input to number and checks whether the value is even or odd.
- Demonstrates practical CLI user interaction in Node.js.

### 2) `08_Chapter_UserInputs/51_Fs.js`
- Added stdin-based input using `fs.readFileSync(0, 'utf-8')`.
- Shows how competitive-programming style input works in Node.js.
- Reinforces terminal EOF behavior when reading from stdin.

### 3) `09_chapter_Loops/63_NestedFor_Loop.js`
- Added nested loop examples to demonstrate repetition inside repetition.
- Supports understanding how inner loops run for every outer-loop iteration.
- Builds a strong foundation for pattern generation and matrix-style traversal.

### 3) `08_Chapter_UserInputs/JS.js`
- Added prompt-style even/odd exercise format.
- Highlights input parsing with `Number(...)` before arithmetic checks.
- Reinforces reusable condition-based output formatting.

### 4) `09_chapter_Loops/For_Loop.js`
- Added a basic `for` loop example that prints values from 0 to 9.
- Illustrates the loop structure: initialization, condition, and iteration.
- Helps connect theory with practical repetition logic.

### 5) `09_chapter_Loops/loop.js`
- Added a simple repetition example to compare manual output with loop-based output.
- Showcases how loops reduce repeated code and improve readability.

---

## 🎓 Key Concepts Summary

### Variables & Declaration
```js
var x = 10;     // Function-scoped, can redeclare (avoid)
let y = 20;     // Block-scoped, cannot redeclare (preferred)
const z = 30;   // Block-scoped, cannot reassign (best default)
```

### Identifiers
```js
// Valid identifiers
let userName = "Alice";
let user_name = "Bob";
let _private = "secret";
let $jquery = "value";

// Invalid identifiers
let 2var = 10;           // ❌ Cannot start with number
let var = 10;            // ❌ 'var' is a keyword
let user-name = "John";  // ❌ Hyphens not allowed
```

### Comments
```js
// Single-line comment
console.log("Hello");

/* Multi-line comment
   Can span multiple lines
   Useful for documentation */
console.log("World");
```

### Literals & Types
```js
// String literals
let name = "John";
let template = `Hello ${name}`;

// Number literals
let integer = 42;
let float = 3.14;

// Boolean literals
let isActive = true;
let isEmpty = false;

// Special values
let noValue = null;      // Intentional absence
let notDefined;          // undefined - no value assigned
```

### Operators

#### Assignment Operators
```js
let x = 10;      // Assignment
x += 5;          // x = x + 5 = 15
x -= 3;          // x = x - 3 = 12
x *= 2;          // x = x * 2 = 24
x /= 4;          // x = x / 4 = 6
x %= 2;          // x = x % 2 = 0
```

#### Arithmetic Operators
```js
let a = 10, b = 3;
console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7  (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1  (modulo - remainder)
console.log(a ** b);  // 1000 (exponentiation)
```

#### Comparison Operators
```js
let x = 5, y = "5";
console.log(x == y);    // true (loose equality - type coercion)
console.log(x === y);   // false (strict equality - no coercion)
console.log(x != y);    // false (loose inequality)
console.log(x !== y);   // true (strict inequality)
console.log(x > 3);     // true (greater than)
console.log(x < 10);    // true (less than)
console.log(x >= 5);    // true (greater than or equal)
console.log(x <= 5);    // true (less than or equal)
```

#### Logical Operators
```js
let a = true, b = false;
console.log(a && b);    // false (AND - both must be true)
console.log(a || b);    // true  (OR - at least one true)
console.log(!a);        // false (NOT - negation)

// Short-circuit evaluation
let x = 0 || 5;         // 5 (0 is falsy, returns 5)
let y = 10 && 20;       // 20 (10 is truthy, returns 20)
```

#### Confusing Comparisons (Type Coercion)
```js
console.log(null == undefined);      // true
console.log(null === undefined);     // false
console.log("5" == 5);               // true (type coercion)
console.log("5" === 5);              // false (strict - different types)
console.log(NaN == NaN);             // false (!!)
console.log(NaN === NaN);            // false (!!)
console.log(0 == false);             // true (coercion)
console.log(0 === false);            // false (different types)
```

#### String Operators
```js
// Concatenation
let firstName = "John";
let lastName  = "Doe";
console.log(firstName + " " + lastName);     // "John Doe"

// Template literals (preferred)
console.log(`${firstName} ${lastName}`);     // "John Doe"
console.log(`Sum = ${2 + 3}`);               // "Sum = 5"

// String + Number coercion
console.log("5" + 3);   // "53" (string concat, not addition)
console.log("5" - 3);   // 2   (numeric subtraction)
```

#### Ternary Operator
```js
// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);   // "Adult"

// Nested ternary
let score = 75;
let grade = score >= 90 ? "A"
          : score >= 75 ? "B"
          : score >= 60 ? "C"
          : "F";
console.log(grade);    // "B"
```

#### typeof Operator
```js
console.log(typeof "hello");       // "string"
console.log(typeof 42);            // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (historical JS bug)
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof function(){}); // "function"
```

#### Increment & Decrement Operators
```js
let x = 5;

// Pre-increment (increment first, then return)
console.log(++x);  // 6 (x is 6)
console.log(x);    // 6

// Post-increment (return first, then increment)
let y = 5;
console.log(y++);  // 5 (y is 6, but returns 5)
console.log(y);    // 6

// Same for decrement
let z = 5;
console.log(--z);  // 4 (pre-decrement)
console.log(z--);  // 4 (post-decrement, z becomes 3)
```

#### Nullish Coalescing Operator (??)
```js
let a = null;
let b = undefined;
let c = 0;
let d = "";

console.log(a ?? "default");  // "default" (null is nullish)
console.log(b ?? "default");  // "default" (undefined is nullish)
console.log(c ?? "default");  // 0 (0 is not nullish)
console.log(d ?? "default");  // "" (empty string is not nullish)

// vs || operator (treats falsy values)
console.log(0 || "default");  // "default" (0 is falsy)
console.log(0 ?? "default");  // 0 (0 is not nullish)
```

### Control Flow - If Statements
```js
// Simple if
if (age >= 18) {
  console.log("You are an adult");
}

// if-else
if (score >= 80) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// if-else-if-else (grading system)
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
```

### Control Flow - Switch Statements
```js
// Basic switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// Switch with multiple matching cases (fall-through)
let browser = "Chrome";
switch (browser) {
  case "Chrome":
  case "Firefox":
  case "Safari":
    console.log("We support this browser");
    break;
  case "Edge":
    console.log("You've got the Edge!");
    break;
  default:
    console.log("Unknown browser");
}

// Switch with grouped cases
let fruit = "Mango";
switch (fruit) {
  case "Banana":
  case "Mango":
  case "Pineapple":
    console.log("Tropical fruit");
    break;
  default:
    console.log("Unknown fruit");
}
```

---

## 🔗 Useful Resources

| Resource | Link | Purpose |
|---|---|---|
| MDN JavaScript | [mdn.io/js](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Official docs |
| Node.js | [nodejs.org](https://nodejs.org/) | JavaScript runtime |
| VS Code | [code.visualstudio.com](https://code.visualstudio.com/) | Code editor |
| Git Docs | [git-scm.com/docs](https://git-scm.com/docs) | Version control |

---

## 📊 Statistics

- **Total Chapters:** 7
- **Total Exercises:** 25
- **IQ Notes:** 5 comprehensive guides
- **Keywords Documented:** 65+
- **Commands Covered:** 100+
- **Keyboard Shortcuts:** 50+
- **Operators Covered:** 22+ (assignment, arithmetic, comparison, logical, string, ternary, typeof, increment/decrement, nullish coalescing)
- **Control Structures:** if-else, switch statements

---

## 🎯 Learning Objectives Achieved

✅ Understanding JavaScript basics (console, variables)
✅ Learning variable declaration (let, const, var)
✅ Identifier naming conventions and rules
✅ Code documentation with comments
✅ Literals and data types
✅ Special values (null, undefined)
✅ Assignment operators (=, +=, -=, *=, /=, %=, **=)
✅ Arithmetic operators (+, -, *, /, %, **)
✅ Comparison operators (==, ===, !=, !==, >, <, >=, <=)
✅ Logical operators (&&, ||, !)
✅ Type coercion and confusing comparisons
✅ String operators and template literals
✅ Ternary operator (condition ? a : b)
✅ Nested ternary patterns for multi-condition logic
✅ typeof operator for runtime type checking
✅ Increment/Decrement operators (++, --)
✅ Nullish coalescing operator (??) for default values
✅ If-else conditional statements
✅ Chaining multiple conditions with if-else-if
✅ Switch statements for multiple case matching
✅ Fall-through pattern in switch cases
✅ Case grouping and default handling
✅ Control flow and decision-making
✅ How code is compiled and executed
✅ Language compilation types (Compiled, Interpreted, JIT)
✅ JavaScript keywords and reserved words
✅ Git workflow and version control
✅ VS Code shortcuts and commands

---

## 💡 Tips for Success

1. **Run Code Frequently** — Don't just read, execute and modify code
2. **Practice IQ Challenges** — Test your understanding with challenges
3. **Use Comments** — Document your code as you learn
4. **Refer to Guides** — Use IQ_Notes when confused
5. **Use Shortcuts** — Memorize keyboard shortcuts for efficiency
6. **Commit Often** — Practice git workflow with every change

---

## 📝 Notes

- All code exercises are simple, beginner-friendly JavaScript files
- IQ_Notes contain tables, diagrams, and examples for better understanding
- Commands are provided for both Windows (PowerShell) and macOS (Bash)
- Follow the learning path for structured progression

---

## 👨‍💻 Author

**rajr96** — Learning JavaScript with practical exercises and comprehensive notes

---

## 📄 License

This repository is for educational purposes.

---

## 🔄 Last Updated

2026-07-20

---

## 📞 Support

For questions or improvements, refer to the IQ_Notes or create additional exercises!

---

**Happy Learning! 🚀**

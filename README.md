# LearnPlayWright3X

LearnPlayWright3X is a chapter-wise JavaScript practice repository. It focuses on core language fundamentals through small, runnable files: variables, identifiers, literals, operators, statements, switch, input handling, loops, arrays, and functions.

GitHub repository: https://github.com/rajr96/LearnPlayWright3X

## Current repository map

- `00_chapter_GENAI/08_UserInputs/` is present but currently empty.
- `01_chapter_Javascript/` contains starter JavaScript basics.
- `02_chapter_Javascript/` is present but currently empty.
- `03_chapter_identifier/` through `11_Chapter_Functions/` contain JavaScript exercises.
- `IQ_Notes/` contains conceptual notes and command references.

## Completed JavaScript exercises by chapter

### 01_chapter_Javascript
- `01_Helloworld.js`: first `console.log` example.
- `02_Let_concept.js`: introduces `let` and basic variable output.

### 03_chapter_identifier
- `03_identifier_Rules.js`: identifier naming basics and examples.
- `04_Identifier_Ruls_Part2.js`: camelCase, snake_case, and naming style patterns.
- `05_comments.js`: single-line, multi-line, and documentation-style comments.
- `06_identifier_IQ.js`: identifier rule questions and practice prompts.

### 04_Chapter_Literal
- `07_Literal.js`: string, number, and boolean literals.
- `08_null_undefined.js`: conceptual difference between `null` and `undefined`.
- `09_null_IQ.js`: null/undefined edge-case practice.

### 05_Chapter_Operator
- `13_DataTypes.js`: JavaScript data types and quick examples.
- `14_Assignment_operator.js`: assignment and compound assignment operators.
- `15_Arthmetic_Operator`: arithmetic operators with sample outputs.
- `16_comparsion_operator.js`: equality/relational operators.
- `17_logical_operators.js`: `&&`, `||`, `!`, and logical behavior.
- `18_confusing_comparsion.js`: coercion pitfalls and strict equality guidance.
- `20_Question.js`: operator-related question practice.
- `21_String_Operators.js`: string concatenation and operator behavior.
- `22_Ternary_Operator.js`: conditional (ternary) operator usage.
- `28_Nested_terny_operator.js`: nested ternary patterns.
- `31_Type_op.js`: `typeof` checks.
- `32_Increment_Decrement_operator.js`: pre/post increment-decrement behavior.
- `36_null_coalescing.js`: nullish coalescing (`??`) defaults.

### 06_chapter_Statement
- `37_iQ.js`: if/else eligibility logic practice.
- `38.IQ.js`: additional condition-based exercise.
- `39_multiple_condition.js`: multi-branch grading style conditions.

### 07_Chapter_switch
- `39_switch.js`: basic switch-case structure.
- `40_IQ.js`: switch exercises with day/category-style branching.

### 08_Chapter_UserInputs
- `50_Prompt.js`: input with `prompt-sync` and even/odd check.
- `51_Fs.js`: stdin input using `fs.readFileSync(0, 'utf-8')`.
- `JS.js`: prompt-style numeric parsing and parity check.

### 09_chapter_Loops
- `57_While.js`: while loop basics.
- `60_while_vs_for.js`: while vs for behavior comparison.
- `61_Do_While.js`: do...while loop flow.
- `62_DoWhile_vs_whle.js`: while and do...while side-by-side.
- `63_NestedFor_Loop.js`: nested loops and inner-outer iteration.
- `For_Loop.js`: standard for loop structure.
- `loop.js`: repeated output as a pre-loop contrast.

### 10_chapter_Arrays
- `64_Array.js`: array methods overview (`push`, `pop`, `unshift`, etc.).
- `66_Array_Creation.js`: array literals, constructor, `Array.of`, `Array.from`.
- `67_Array_Modifying.js`: array access and modification.
- `69_Array_Real.js`: practical array operations.
- `70_Array_Searching.js`: finding values in arrays.
- `72_Array Iterate.js`: iteration using loop patterns.
- `73_Array_Transforming.js`: transformations with methods like `map`.
- `74_Array_sorting.js`: sorting behavior and examples.
- `75_Array_Slicing.js`: `slice` usage and non-mutating extraction.
- `76_ArrayConcat.js`: concatenation patterns.
- `77_Array_Checking.js`: checks for array identity/conditions.
- `78_Array_Copy.js`: shallow copy patterns.
- `79_Array_Destructuring.js`: destructuring assignment basics.

### 11_Chapter_Functions
- `78_FN.js`: repeated logic refactored into functions.
- `79_Fn.js`: function declaration and argument examples.
- `80_Type1_basic_FN.js`: no-arg, no-return function pattern.
- `81_Type2_Basic_fn.js`: with-arg, no-return function pattern.
- `82_Type3_Basic_Fn.js`: no-arg, with-return function pattern.
- `83_Type4_Basic_Fn.js`: with-arg, with-return function pattern.
- `84_Template_Literal.js`: template literal formatting via function.
- `85_Fn_Exp.js`: declaration vs expression vs arrow function.
- `88.Real.js`: status code validator implementation.
- `89_Fn.js`: IIFE and immediate execution patterns.
- `90_Spread_Fn.js`: spread operator in function calls.
- `91_Return_FN.js`: return-based branching for status categories.
- `92_Var_Let_Const.js`: scope and declaration behavior notes.
- `93_Hosting.js`: hoisting with `var` example.
- `94_Var_Hosting.js`: practical `var` hoisting behavior.
- `96_let_Hosting.js`: temporal dead zone behavior with `let`.
- `97_let.js`: block scope exercise with `let`.
- `102_Hoisting_TDZ.md`: concept notes for hoisting and TDZ.

## Notes and references

### IQ_Notes
- `02_keyword_notes.md`: JavaScript keyword guide.
- `03_commands_mac.md`: VS Code and terminal commands for macOS.
- `03_commands_win.md`: VS Code and PowerShell commands for Windows.
- `Compiled_Interpreted_JIT_IQ.md`: compiled/interpreted/JIT comparison.
- `source_code_bytecode_binary_iQ.md`: source-to-bytecode-to-binary flow.
- `examples.js`: switch-based day-name helper example.

## Practical examples

### 1) Ternary result mapping

```js
function getResult(score) {
  return score > 50 ? "pass" : "fail";
}

console.log(getResult(100));
console.log(getResult(40));
```

### 2) Array last-item access

```js
const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
const lastBrowser = browsers.at(-1);
console.log(lastBrowser);
```

### 3) Function + template literal

```js
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("John"));
```

## Run the exercises

Install dependencies:

```bash
npm install
```

Run individual files with Node.js:

```bash
node 01_chapter_Javascript/01_Helloworld.js
node 08_Chapter_UserInputs/50_Prompt.js
node 10_chapter_Arrays/64_Array.js
node 11_Chapter_Functions/83_Type4_Basic_Fn.js
```

For `prompt-sync` based examples, enter values when prompted in the terminal.
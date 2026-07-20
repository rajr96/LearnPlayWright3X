# Compiled vs Interpreted vs JIT Languages

## Definitions Breakdown

| Concept | Description | When is code translated? | Human Readable Output? | Speed |
|---|---|---|---|---|
| **Compiled** | Source code is fully translated to binary **before** execution by a compiler | At build time (ahead of time) | ❌ No — produces `.exe` / `.out` | ⚡ Fastest — CPU runs binary directly |
| **Interpreted** | Source code is read and executed **line by line** at runtime by an interpreter | At runtime (on the fly) | ✅ Source stays as-is | 🐢 Slowest — no pre-optimization |
| **JIT (Just-In-Time)** | Starts interpreted, then **hot code paths** are compiled to binary during runtime | At runtime, selectively | ⚠️ Hybrid — bytecode + dynamic binary | 🚀 Fast — best of both worlds |

---

## Example Walkthrough Using Your JS Files

### `01_Helloworld.js` — JavaScript (JIT via Node.js V8)

```js
console.log("hello world");
```

| Layer | Compiled | Interpreted | JIT (JavaScript) |
|---|---|---|---|
| **Step 1** | Entire source → binary at build time | Read line 1 at runtime | Parse source → bytecode |
| **Step 2** | Binary stored as `.exe` / `.out` | Execute line 1 immediately | Ignition interpreter runs bytecode |
| **Step 3** | User runs binary — no source needed | Read line 2, execute… repeat | TurboFan detects hot paths → compiles to binary |
| **Step 4** | — | Source file must be present always | Optimized binary cached for reuse |
| **Output** | `hello world` | `hello world` | `hello world` |

---

## Pipeline Diagrams

### Compiled Language (e.g., C / C++ / Go / Rust)
```
Source Code (.c / .go)
        │
        ▼
   [Compiler — gcc / go build]
        │
        ▼
   Binary / Machine Code (.exe / .out)
        │
        ▼
   [CPU executes directly]
        │
        ▼
   Output: "hello world"
```

---

### Interpreted Language (e.g., Python / Ruby / early PHP)
```
Source Code (.py / .rb)
        │
        ▼
   [Interpreter reads line by line at runtime]
        │
        ▼
   No binary produced — source is always needed
        │
        ▼
   Output: "hello world"
```

---

### JIT Compiled Language (e.g., JavaScript / Java / C#)
```
Source Code (.js / .java / .cs)
        │
        ▼
   [Compiler / Parser]
        │
        ▼
   Bytecode (V8 Ignition / JVM / CLR)
        │
        ▼
   [JIT Compiler — TurboFan / HotSpot / RyuJIT]
   (triggered for "hot" / frequently-run code)
        │
        ▼
   Optimized Binary (in memory, not saved to disk)
        │
        ▼
   Output: "hello world"
```

---

## Full Comparison Table

| Feature | Compiled | Interpreted | JIT |
|---|---|---|---|
| **Translation time** | Before execution (build time) | During execution (line by line) | During execution (selectively) |
| **Output artifact** | Binary file (`.exe`, `.out`) | None — source runs directly | In-memory binary (not saved) |
| **Execution speed** | ⚡ Fastest | 🐢 Slowest | 🚀 Fast (near-compiled speed) |
| **Startup time** | Slow (compile step needed) | Fast (no compile step) | Medium |
| **Portability** | ❌ Low (CPU/OS specific binary) | ✅ High (source runs anywhere with interpreter) | ✅ High (bytecode is portable) |
| **Error detection** | Compile-time (before run) | Runtime (as line is hit) | Mix of both |
| **Memory usage** | Low (binary is efficient) | Higher (interpreter overhead) | Higher (JIT compiler in memory) |
| **Example languages** | C, C++, Go, Rust | Python, Ruby, PHP (classic), Bash | JavaScript, Java, C#, Kotlin |
| **Example tools** | `gcc`, `go build`, `rustc` | `python`, `ruby`, `php` | Node.js V8, JVM, .NET CLR |

---

## Language Placement Map

```
SLOW ◄────────────────────────────────────────► FAST

  Python       JavaScript        Java          C / C++ / Rust
  Ruby         (Node.js)         (JVM)         Go
  PHP          C# (.NET)         Kotlin
  Bash

[Interpreted]  [JIT Compiled]  [JIT Compiled]  [Compiled]
```

---

## Your JS Example — Which Category?

```js
// 02_Let_concept.js
let x = 10;
console.log(x);
```

| Stage | What happens in Node.js (JIT) |
|---|---|
| **Parse** | V8 reads `let x = 10` → builds AST (Abstract Syntax Tree) |
| **Bytecode** | Ignition generates: `CreateVariable x`, `StaGlobal x`, `LdaSmi [10]` |
| **Interpret** | Ignition executes bytecode immediately |
| **JIT trigger** | If this ran in a loop 1000x, TurboFan would compile it to optimized binary |
| **Output** | `10` |

> Since this code runs only once, it stays interpreted via bytecode. JIT kicks in only for **hot paths** (frequently executed code).

---

## TL;DR

| If you need... | Use... |
|---|---|
| Maximum raw performance (games, OS, embedded) | **Compiled** → C, C++, Rust, Go |
| Fast scripting, automation, data science | **Interpreted** → Python, Ruby, Bash |
| Web apps, enterprise apps, cross-platform | **JIT** → JavaScript, Java, C# |
| Best of all worlds (systems + safety) | **Compiled** → Rust |
| Easiest to learn and prototype | **Interpreted** → Python |

> **Key Insight:** JIT languages start as interpreted (fast startup, portable) and **become compiled** for hot code (fast execution). This is why Node.js can power high-performance servers despite JavaScript being a "scripting language."

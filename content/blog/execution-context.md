---
title: "Understanding Execution Context in JavaScript"
summary: "Explore the internals of how JavaScript executes your code using the concept of execution contexts and lexical environments."
author: "Chinnasurya Prasad"
date: "2025-07-01"
readTime: "4 min read"
tags: ["JavaScript", "execution", "concepts"]
---

## 🧠 Introduction

In JavaScript, the *execution context* is the environment in which code is evaluated and executed. It includes the scope chain, the variable object, and the value of `this`.

---

## 📚 Types of Execution Context

1. **Global Execution Context**: Created when the JavaScript engine first runs your code.
2. **Function Execution Context**: Created every time a function is invoked.
3. **Eval Execution Context**: Created during the execution of code inside `eval()` — rarely used.

---

## 🔍 Phases

- **Creation Phase**
  - Scope chain is created.
  - Variables and functions are hoisted.
  - `this` is set.

- **Execution Phase**
  - Code is executed line-by-line.
  - Variables are assigned actual values.

---

## 💡 Why It Matters

Understanding execution context helps with:
- Scoping issues
- Debugging async behavior
- Understanding how `this` behaves

---

## 🧪 Real-World Example

```js
var x = 10;
function foo() {
  var y = 20;
  console.log(x + y);
}
foo(); // Output: 30
```

Here, `foo()` creates a new execution context layered over the global context.

---

## 🏁 Final Thoughts

Mastering execution contexts gives you deep insight into how JavaScript interprets and runs your code behind the scenes.

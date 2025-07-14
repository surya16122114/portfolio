---
slug: "hoisting"
title: "JavaScript Hoisting Demystified"
summary: "Learn what hoisting is in JavaScript, how it affects variables and functions, and how to avoid common pitfalls."
author: "Chinnasurya Prasad"
date: "2025-07-03"
readTime: "3 min read"
tags:
  - JavaScript
  - hoisting
  - scope
---

## 🧬 What is Hoisting?
Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope during compilation.

## 🧪 Example
```js
console.log(a); // undefined
var a = 5;
```

This is interpreted as:
```js
var a;
console.log(a);
a = 5;
```

## ⚠️ Let and Const
Variables declared with `let` and `const` are hoisted but not initialized, leading to a Temporal Dead Zone.

## 📌 Final Notes
- Only declarations are hoisted, not initializations.
- Functions are fully hoisted (both name and body).

## 🏁 Summary
Understand hoisting to debug code better and avoid ReferenceErrors.

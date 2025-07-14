---
slug: "event-loop"
title: "JavaScript Event Loop Explained"
summary: "Understand how JavaScript handles asynchronous operations using the event loop, task queues, and microtasks."
author: "Chinnasurya Prasad"
date: "2025-07-02"
readTime: "5 min read"
tags:
  - JavaScript
  - event loop
  - async
---

## 🔁 What is the Event Loop?
The event loop is the mechanism in JavaScript that handles asynchronous callbacks using the call stack and task queues.

## 🧵 Single-threaded Model
JavaScript runs in a single thread, but can manage async tasks using:
- Call Stack
- Web APIs
- Callback Queue
- Microtask Queue

## ⏳ Example
```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
```

Output:
```
Start
End
Promise
Timeout
```

## 📌 Key Takeaway
Microtasks (Promises) are prioritized over macrotasks (setTimeout).

## 📚 Final Thoughts
Mastering the event loop helps you write efficient, non-blocking code.

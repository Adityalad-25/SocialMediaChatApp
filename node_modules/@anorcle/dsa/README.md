# Data Structures and Algorithms For Web

Data Structures and Algorithms are highly useful for development
of complex features in any Application. Here in this project we
are targeting to implement most of the important and useful Data
Structures and Algorithms for web Developers.

![issues](https://img.shields.io/github/issues/anorcle/dsa)
![License](https://img.shields.io/github/license/anorcle/dsa)
[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fanorcle%2Fdsa)](https://twitter.com/intent/tweet?text=Data+Structures+and+Algorithms+for+Web+😉:&url=https%3A%2F%2Fgithub.com%2Fanorcle%2Fdsa)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fanorcle.github.io%2Fdsa%2F)](https://anorcle.github.io/dsa/)
[![GitHub](https://img.shields.io/github/stars/anorcle/dsa?style=social)](https://github.com/anorcle/dsa/)

## [List of Implemented Data Structures](https://anorcle.github.io/dsa/modules.html)
- [AVL Tree](https://anorcle.github.io/dsa/classes/AVL.html)
- [Binary Search Tree](https://anorcle.github.io/dsa/classes/BST.html)
- [Doubly Linked List](https://anorcle.github.io/dsa/classes/LinkedList.html)
- [Set (Ordered)](https://anorcle.github.io/dsa/classes/Set.html)
- [Priority Queue](https://anorcle.github.io/dsa/classes/PriorityQueue.html)
  - Min Heap
  - Max Heap
- [Queue](https://anorcle.github.io/dsa/classes/Queue.html)
- [Deque](https://anorcle.github.io/dsa/classes/Deque.html)
- [Stack](https://anorcle.github.io/dsa/classes/Stack.html)

## Installation
```bash
npm i @anorcle/dsa
```

## Import

### ECMAScript Modules
Import Everything
```typescript
import * as dsa from '@anorcle/dsa';
```

Import Only Required Modules
```typescript
import { AVL, BST, Deque, LinkedList, PriorityQueue, Queue, Set, Stack } from '@anorcle/dsa';
```

### CommonJS
Import Everything
```typescript
const dsa = require('@anorcle/dsa')
```

Import Only Required Modules
```typescript
const { AVL, BST, Deque, LinkedList, PriorityQueue, Queue, Set, Stack } = require('@anorcle/dsa')
```


## Examples

### Max Heap
A Max Heap is a complete binary tree in which the value in each internal node is greater than or equal to the values in the children of that node.

<details open>
<summary style="font-size: 1.2em">TypeScript</summary>

```ts
import { PriorityQueue } from "@anorcle/dsa";

// compare function for Max Heap
const compare = (a: number, b: number): -1 | 0 | 1 => {
    if (a < b)
        return -1;
    if (a > b)
        return +1;
    return 0;
};

// create new Priority Queue of Numbers
const pq = new PriorityQueue<number>(compare);

pq.push(3);
pq.push(1);
pq.push(100);

console.log(pq.front) // 100

// remove the top element from priority queue and return it
pq.pop()
```
</details>


<details>
<summary style="font-size: 1.2em">JavaScript</summary>

```js
import { PriorityQueue } from "@anorcle/dsa";

// compare function for Max Heap
const compare = (a, b) => {
    if (a < b)
        return -1;
    if (a > b)
        return +1;
    return 0;
};

// create new Priority Queue of Numbers
const pq = new PriorityQueue(compare);
pq.push(3);
pq.push(1);
pq.push(100);
console.log(pq.front); // 100

// remove the top element from priority queue and return it
pq.pop();
```
</details>

### Min Heap
A Min Heap is a complete binary tree in which the value in each internal node is smaller than or equal to the values in the children of that node.

<details open>
<summary style="font-size: 1.2em">TypeScript</summary>

```ts
import { PriorityQueue } from "@anorcle/dsa";

// compare function for Min Heap
const compare = (a: number, b: number): -1 | 0 | 1 => {
    if (a < b)
        return +1;
    if (a > b)
        return -1;
    return 0;
};

// create new Priority Queue of Numbers
const pq = new PriorityQueue<number>(compare);

pq.push(3);
pq.push(1);
pq.push(100);

console.log(pq.front) // 1

// remove the top element from priority queue and return it
pq.pop()
```
</details>

<details>
<summary style="font-size: 1.2em">JavaScript</summary>

```js
import { PriorityQueue } from "@anorcle/dsa";

// compare function for Min Heap
const compare = (a, b) => {
    if (a < b)
        return +1;
    if (a > b)
        return -1;
    return 0;
};

// create new Priority Queue of Numbers
const pq = new PriorityQueue(compare);
pq.push(3);
pq.push(1);
pq.push(100);
console.log(pq.front); // 1

// remove the top element from priority queue and return it
pq.pop();
```
</details>

### Stack
Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
```ts
import { Stack } from "@anorcle/dsa";

const stack = new Stack<number>();
stack.push(3);
stack.push(1);
stack.push(100);

console.log(stack.top) // 100

// Remove Top Element from stack
stack.pop()

console.log(stack.top) // 1
```

### Queue
A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO)
```ts
import { Queue } from "@anorcle/dsa";

const queue = new Queue<number>();
queue.push(3);
queue.push(1);
queue.push(100);

console.log(queue.front) // 3

// Remove First Element from Queue
queue.pop()

console.log(queue.front) // 1
```

# Project-Linked-Lists
# 🧠 Linked List in JavaScript
A full-on implementation of a singly linked list in JavaScript using classes/factories. Built for learning, testing, and flexing your data structure muscles 💪.

This project includes:

Node & LinkedList classes

Full set of list operations (append, prepend, pop, etc.)

Extra credit: Insert and remove at specific indexes

Console output in a pretty readable format

## 📁 File Structure
├── LinkedList.js   // Contains Node and LinkedList class/factory
├── main.js         // Script to test the list
└── README.md       // You're here!
## 🛠️ Features
### ✅ Core Methods
append(value) — Add node to end

prepend(value) — Add node to beginning

size() — Return total number of nodes

head() — Return the first node

tail() — Return the last node

at(index) — Return node at given index

pop() — Remove the last node

contains(value) — Returns true if value exists

find(value) — Returns index of the node with that value or null

toString() — String representation like:
( dog ) -> ( cat ) -> ( parrot ) -> null

### 🌟 Extra Credit
insertAt(value, index) — Insert node at given index

removeAt(index) — Remove node at given index

All pointer connections (nextNode) are updated accordingly.

# TypeScript Merge Algorithm Project

A TypeScript project to merge three pre-sorted integer arrays into a single, ascending array without using any built-in sort functions.

## Implements:

```
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]

```

### Constraints:

* Returns a single array sorted in **ascending** order.

* **Do not use any built-in `sort()` method**.

### Input Sorting Rules:

`collection_1`: Sorted **descending** (max to min).

`collection_2`: Sorted **ascending** (min to max).

`collection_3`: Sorted **ascending** (min to max).

## Setup & Usage

### 1. Install Dependencies

```
npm install

```

### 2. Build the Project

This compiles the TypeScript files into JavaScript in the `dist` folder.

```
npm run build

```

### 3. Run Demo

Executes the example code from `src/index.ts`.

```
npm start

```

### 4. Run Tests

Verifies the implementation against all test cases using Jest.

```
npm test

```
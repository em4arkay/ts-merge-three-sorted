"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
// Example Usage
function main() {
    console.log("Running merge function with example data...");
    const collection_1 = [10, 7, 5, 3]; // Max to min
    const collection_2 = [2, 4, 6]; // Min to max
    const collection_3 = [1, 8, 9]; // Min to max
    console.log("Input Collection 1:", collection_1);
    console.log("Input Collection 2:", collection_2);
    console.log("Input Collection 3:", collection_3);
    const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
    console.log("\nMerged and Sorted Result:");
    console.log(result); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
main();

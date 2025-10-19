import { merge } from './merge';

// Example Usage
function main() {
    console.log("Running merge function with example data...");

    const collection_1 = [10, 7, 5, 3]; 
    const collection_2 = [2, 4, 6];     
    const collection_3 = [1, 8, 9];     

    console.log("Input Collection 1:", collection_1);
    console.log("Input Collection 2:", collection_2);
    console.log("Input Collection 3:", collection_3);

    const result = merge(collection_1, collection_2, collection_3);

    console.log("\nMerged and Sorted Result:");
    console.log(result); 
}

main();
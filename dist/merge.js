"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function mergeTwoSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
    // Traverse both arrays and pick the smaller element
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        }
        else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // If there are remaining elements in arr1, add them
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    // If there are remaining elements in arr2, add them
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}
function merge(collection_1, collection_2, collection_3) {
    // collection_1 is sorted max to min. We need it min to max for our merge logic.
    // We can reverse it in O(n) time. A new array is created to avoid side effects.
    const reversed_collection_1 = [];
    for (let i = collection_1.length - 1; i >= 0; i--) {
        reversed_collection_1.push(collection_1[i]);
    }
    // Step 1: Merge the first two collections
    const merged_1_2 = mergeTwoSortedArrays(reversed_collection_1, collection_2);
    // Step 2: Merge the result with the third collection
    const finalMerged = mergeTwoSortedArrays(merged_1_2, collection_3);
    return finalMerged;
}

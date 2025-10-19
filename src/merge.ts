function mergeTwoSortedArrays(arr1: number[], arr2: number[]): number[] {
  const merged: number[] = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Traverse both arrays and pick the smaller element
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
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

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {

  const reversed_collection_1: number[] = [];
  for (let i = collection_1.length - 1; i >= 0; i--) {
    reversed_collection_1.push(collection_1[i]);
  }

  const merged_1_2 = mergeTwoSortedArrays(reversed_collection_1, collection_2);

  const finalMerged = mergeTwoSortedArrays(merged_1_2, collection_3);

  return finalMerged;
}

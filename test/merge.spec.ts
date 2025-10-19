import { merge } from '../src/merge';

describe('merge', () => {
  it('should correctly merge three non-empty arrays', () => {
    const collection_1 = [10, 5, 1];
    const collection_2 = [2, 6];
    const collection_3 = [8, 12];
    const expected = [1, 2, 5, 6, 8, 10, 12];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle an empty collection_1', () => {
    const collection_1: number[] = [];
    const collection_2 = [3, 4];
    const collection_3 = [1, 2];
    const expected = [1, 2, 3, 4];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle an empty collection_2', () => {
    const collection_1 = [5, 3];
    const collection_2: number[] = [];
    const collection_3 = [1, 4];
    const expected = [1, 3, 4, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle an empty collection_3', () => {
    const collection_1 = [9, 8];
    const collection_2 = [1, 5];
    const collection_3: number[] = [];
    const expected = [1, 5, 8, 9];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle all empty collections', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const expected: number[] = [];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle arrays with duplicate numbers', () => {
    const collection_1 = [10, 5, 5];
    const collection_2 = [1, 5, 10];
    const collection_3 = [12];
    const expected = [1, 5, 5, 5, 10, 10, 12];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle arrays with negative numbers', () => {
    const collection_1 = [5, 0, -2];
    const collection_2 = [-8, -1];
    const collection_3 = [4];
    const expected = [-8, -2, -1, 0, 4, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle arrays of different lengths', () => {
    const collection_1 = [100, 90];
    const collection_2 = [1, 2, 3, 4, 5, 6];
    const collection_3 = [50];
    const expected = [1, 2, 3, 4, 5, 6, 50, 90, 100];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });
});

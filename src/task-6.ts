function getFirstElement<T>(arr: T[]): T{
  return arr[0];
}

console.log("getFirstElement([1, 2, 3])", getFirstElement<number>([1, 2, 3]));           // 1
console.log('getFirstElement(["a", "b", "c"])', getFirstElement<string>(["a", "b", "c"]));     // "a"
console.log("getFirstElement([true, false, true])", getFirstElement<boolean>([true, false, true])); // true

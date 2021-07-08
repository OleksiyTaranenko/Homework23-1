let arr1 = [1, 2, 3, 4];
let arr2 = ['a', 'b', 'c', 'd'];
let arr3 = [true, false, null];

let collection = new Map();

collection.set(arr1, 'I know where Elon Musk lives')
          .set(arr2, 'And also I know his phone number')
          .set(arr3, 'But I will never share this with you');

console.log(collection);


for (let value1 of collection) {
    console.log(value1);
}


let collectionKeys = collection.keys();

for (let value2 of collectionKeys) {
    console.log(value2);
}


let collectionValues = collection.values();

for (let value3 of collectionValues) {
    console.log(value3);
}


console.log('>> Number of elements is', collection.size);
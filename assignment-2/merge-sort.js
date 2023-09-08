function mergeSort(array){

    let middleIndex = Math.floor(array.length / 2);
    let leftSide = array.slice(0, middleIndex);
    let rightSide = array.slice(middleIndex);
    let sortedArray = [];

    if (array.length === 1) return array; // base case

    // recursive call
    mergeSort(leftSide);
    mergeSort(rightSide);

    // sort

}

const testArray = [7,26,4,11,8,2,10,14,21,6,15,3,18,12,5,29];

console.log(mergeSort(testArray));
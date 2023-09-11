function mergeSort(array){
    
    if (array.length === 1) return array; // base case
    
    let middleIndex = Math.floor(array.length / 2);
    let leftSide = array.slice(0, middleIndex);
    let rightSide = array.slice(middleIndex, array.length);

    // recursive call
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

// sort and merge
function merge(left, right){
    let sortedArray = [];
    
    while(left.length > 0 && right.length > 0){
       
        if(left[0] < right[0]){
            sortedArray.push(left[0]);
            left.shift();
        } else{
            sortedArray.push(right[0]);
            right.shift();
        }
    }

    while (right.length > 0) {
        sortedArray.push(right[0]);
        right.shift();
    }

    while (left.length > 0) {
        sortedArray.push(left[0]);
        left.shift();
    }

    return sortedArray;
}

const testArray = [7,26,4,11,8,2,10,14,21,6,15,3,18,12,5,29];

console.log(mergeSort(testArray));
/**
 * Binary Search (AKA Half-Interval search) is an Algorithm to 
 * find a specific element located in an Array 
 * (the array has to be sorted for this algo to work)
 * 
 * 
 * 
 * 
 */
// Binary Search has a time complexity of O(logn)

function binarySearch(arr,item){

    let low = 0;
    let high = arr.length;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        let guess = arr[mid];

        if(guess == item){
            return console.log(`item found : ${item} at position ${mid}`);
        }

        if(guess > item){

            high = mid - 1;
            console.log("Too big");

        }
        
        if(guess < item){

            low = mid + 1;
            console.log("Too big");
            
        }

    }

}

let myList = [1, 3, 5, 7, 9];

binarySearch(myList,9);
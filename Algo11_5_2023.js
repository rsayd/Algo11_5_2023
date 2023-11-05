/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// create the function and decide what params it needs and what it will return here:






function sumArray(arr, k) {
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let tempArr = [];
        let right = i;
        while (sum <= k) {
            sum += arr[right]
            tempArr.push(arr[right])
            right++
            if (sum === k) {
                returnArr.push([...tempArr])
            }
        }

    }
    return returnArr ? returnArr : []
}
console.log(sumArray(arr, k))





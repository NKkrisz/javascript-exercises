// const removeFromArray = function(arr, remove, remove2=undefined, remove3=undefined, remove4=undefined) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === remove || arr[i] === remove2 || arr[i] === remove3 || arr[i] === remove4){
//             arr.splice(i, 1)
//             i = 0
//         }
//     }
//     return arr;
// };

const removeFromArray = function(arr, ...remove) {
    for (let i = arr.length -1; i > -1; i--) {
        if(remove.includes(arr[i])){
            arr.splice(i, 1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

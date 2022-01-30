// Keep Multiplying Found Values by Two 

// const findFinalValue = (nums, original)=> {
//     for(let i = 0;i<nums.length;i++){
//         if(nums[i] == original){
//             original = original*2;
//             i = -1;
//         }
//     }
//     return original;
// };

// const res = findFinalValue([5,3,6,1,12],3)
// console.log(res);

// All Divisions With the Highest Score of a Binary Array
// ---->Runtime Error<----

// const maxScoreIndices = (nums)=> {
//     let res = [];
//     let arr = [];
//     let max = 0;
//     let sum = 0;
//     for(let i = 0;i<=nums.length;i++){
//         let left = nums.slice(0,i-1+1);
//         let right = nums.slice(i,nums.length);
//          let lCount = 0;
//         let rCount = 0;
//         for(let j = 0;j<left.length;j++){
//             if(left[j] === 0){
//                 lCount++;
//             }
//         }
//         for(let k = 0;k<right.length;k++){
//             if(right[k] == 1){
//                 rCount++;
//             }
//         }
//         sum = lCount + rCount;
//         max = Math.max(sum,max)
//         arr.push(sum);
//     }
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] == max){
//             res.push(i);
//         }
//     }
//     return res;
// };

// const result = maxScoreIndices([0,0,1,0]);
// console.log(result);

// ---->Count Elements With Strictly Smaller and Greater Elements<----

// const countElements = (nums)=> {
//         let max = Number.MIN_VALUE;
//         let min = Number.MAX_VALUE;
//         let count = 0;
//         max = Math.max(...nums);
//         min = Math.min(...nums);
//         for(let char of nums){
//             if(char<max && char>min){
//                 count++;
//             }
//         }
//         return count;
//     };
//     const result = countElements([11,7,2,15]);
//     console.log(result);
    
// ----> Find All Lonely Numbers in the Array<----

    // const findLonely = (nums)=> {
    //     let map = new Map();
    //     let arr = [];
    //     for(let char of nums){
    //         map.set(char,(map.get(char)||0)+1);
    //     }
    //     for(let [idx,elem] of map){
    //         if(map.get(idx) == 1){
    //             if(map.has(idx+1)||map.has(idx-1)){
    //                 continue;
    //             }
    //             else{
    //                 arr.push(idx);
    //             }
    //         }
    //     }
    //     return arr;
    // };
    // const result = findLonely([10,6,5,8]);
    // console.log(result);
    
// ---->Rearrange Array Elements by Sign<----

    // const rearrangeArray = (nums)=> {
    //     let arr = [];
    //     let even = 0;
    //     let odd = 1;
    //     for(let i = 0;i<nums.length;i++){
    //         if(nums[i]>0){
    //             arr[even] = nums[i];
    //             even = even+2;
    //         }
    //         else{
    //             arr[odd] = nums[i];
    //             odd = odd+2;
    //         }
    //     }
    //     return arr;
    // }
    // const result = rearrangeArray([3,1,-2,-5,2,-4]);
    // console.log(result);
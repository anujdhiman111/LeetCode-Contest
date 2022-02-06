/* 
---->Sort Even and Odd Indices Independently<----

const sortEvenOdd = (nums)=> {
    let even = [];
    let odd = [];
    let new_Array = new Array(nums.length);
    for(let i = 0;i<nums.length;i++){
        if(i%2 === 0){
            even.push(nums[i]);
        }
        else{
            odd.push(nums[i])
        }
    }
    
    even.sort((a,b)=>a-b);
    odd.sort((c,d)=>d-c); 
    
    for(let i = 0,j = 0;i<even.length;i++,j=j+2){
        new_Array[j] = even[i];
    }
    for(let i = 0,j = 1;i<odd.length;i++,j=j+2){
        new_Array[j] = odd[i];
    }
    return new_Array
};
const result = sortEvenOdd([4,1,2,3]);
console.log(result);

---->Smallest Value of the Rearranged Number<----
---->Design Bitset<----
---->Minimum Time to Remove All Cars Containing Illegal Goods<----

*/
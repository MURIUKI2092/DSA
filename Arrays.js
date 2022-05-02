const reverseArray =(arr)=>{
  for(let i=arr.length-1;i>=0;i--){
   console.log(arr[i])
    
  }
 
  

}
reverseArray([1,2,3,4,5,6])
// using  array.prototype.reverse()function
const reversal =(arr)=>{
  arr.slice().reverse().forEach((ar)=>{
    console.log(ar)
  })

}
reversal([1,2,3,4,5,6])

//using array.prototype.reduceRight()function
const arrayReversal =(arr)=>{
  arr.reduceRight((_,item)=>console.log(item),null)

}
arrayReversal([1,2,3,4,5,6,7,8,9,0])

const removeDuplicates =(nums)=>{
  

}
console.log(removeDuplicates([11222333344445555]));
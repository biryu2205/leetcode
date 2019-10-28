function twoSum(numArray, numTarget)
{
 const arraySize = numArray.length;

 for(let i = 0; i < arraySize; i++){

     for(let j= i + 1; j < arraySize; j++){

       if(numTarget - numArray[i] === numArray[j]){

          return `The sum of indices ${i} and ${j} equals ${numTarget}` 
        }
     }
  }
 return "target not found."
}
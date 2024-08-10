
 /* const nums=[10,20,30];
  nums[2]=99;
console.log(nums);
*/
function arraySwap(array){
  const lastIndex = array.length-1;
  const lastValue = array[lastIndex];
  const firstValue =array[0];
  array[0]=lastValue;
  array[lastIndex]=firstValue;
  return array;
}
console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi','hello','good']));
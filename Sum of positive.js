function positiveSum(arr) {
  let i = 0;
  let sum = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
    else if(arr == []){
      sum=0;
    }
  }
  return sum
}

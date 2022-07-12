function highAndLow(numbers){
  numbers=numbers.split(' ');
  let arr=[],max=Number(numbers[0]),min=Number(numbers[0]);
  
  
  for(let i =0;i<numbers.length;i++){
    if(Number(numbers[i])>=max){
      max=numbers[i];
    }
    else if(Number(numbers[i])<=min){
      min=numbers[i]
    }
  }
  arr.push(max);
  arr.push(min);
  return arr.join(' ')
}

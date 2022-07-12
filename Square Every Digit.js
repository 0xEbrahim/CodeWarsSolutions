function squareDigits(num){
  let res='';
  num=String(num).split('');
  for(let i=0;i<num.length;i++){
    res+=String(num[i] ** 2)
  }
  return Number(res)
}

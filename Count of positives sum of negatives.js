function countPositivesSumNegatives(input) {
  
  let out=[0,0];
  if(input == null)
      out.length=0;
  else if(input.every(item => item === 0)){
    out.length=0;
  }
  else
  {for(i=0;i<input.length;i++){
    if(input[i] > 0)
      out[0]=Number(out[0]+1);
    else if(input[i] < 0)
      out[1] =Number(out[1]+input[i]);
    
  }}
    return out;
}

function getSum( a,b )
{
  let sum=0;
   if(a>b){
     for(b;b<=a;b++)
       sum+=b;
   }
  else if(a==b){
    sum=a;
  }
    
  else {
    for(a;a<=b;a++){
      sum+=a;
    }
  }
  return sum;
}

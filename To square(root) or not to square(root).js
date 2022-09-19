function squareOrSquareRoot(array) {
  return array.map(a=>{
    if(Math.sqrt(a) === Math.trunc(Math.sqrt(a))){
     return Math.sqrt(a)
    }else{
      return Math.pow(a,2)
    }
  })  
}

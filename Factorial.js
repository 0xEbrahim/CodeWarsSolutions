function factorial(n){
  let x=[]
  if(n==0 || n==1){
    return 1
  }else {
    for(let i=1;i<=n;i++)
      x.push(i)
  }
  return x.reduce((a,b)=> {
    return a*b
  })
}

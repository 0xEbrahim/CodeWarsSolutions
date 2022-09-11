function findShort(s){
  let z = []
  s = s.split(' ')
  for(let i = 0 ; i < s.length ; i ++){
    z.push(s[i].length)
  }
  z.sort((a,b)=>a-b)
  return z[0]
}

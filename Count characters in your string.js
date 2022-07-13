function count (string) {  
  let count={};
  string.split('').forEach((a)=>{
    count[a] ? count[a]++: count[a]=1;
  });
  return count;
}

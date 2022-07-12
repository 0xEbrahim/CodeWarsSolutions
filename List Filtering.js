function filter_list(l) {
  const arr=[];
  for(let i=0;i<l.length;i++){
    if(typeof l[i] == 'number'){
      arr.push(l[i]);
    }
  }
  return arr;
}

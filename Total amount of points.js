function points(games) {
  let res=0;
  for(let i= 0;i<10;i++)
  {
  if(games[i].charAt(0) > games[i].charAt(2))
    res+=3;
    else if(games[i].charAt(0) < games[i].charAt(2))
    res+=0;
    else
      res+=1;
  }
  return res;
}

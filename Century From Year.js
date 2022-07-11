function century(year) {
  let num=Number(year%100);
  return num==0 ? Math.floor(year/100) :  Math.floor(year/100)+1;
}

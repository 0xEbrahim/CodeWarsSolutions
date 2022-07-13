function nbDig(n, d) {
  let arr = [];
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    arr.push(String(i * i));
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i].charAt(j) == d) {
        counter++;
      }
    }
  }
  return counter;
}

function sumDigits(number) {
  return String(Math.abs(number)).split('').map(a=>Number(a)).reduce((a,b)=>Number(a+b),0)
}

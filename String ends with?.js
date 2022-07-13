function solution(str, ending){
  return str.split('').splice(str.length-ending.length).join('') == ending
}

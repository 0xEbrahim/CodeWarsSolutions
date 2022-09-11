function minValue(values){
  values = [...new Set(values)]
  values.sort((a,b)=>a-b)
  return Number(values.join(''))
}

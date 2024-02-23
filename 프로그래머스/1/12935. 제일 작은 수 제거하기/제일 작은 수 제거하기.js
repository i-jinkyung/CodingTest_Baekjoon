function solution(arr) {

 if(!arr.length) return [-1]

  const minNum = arr.reduce((prev, curr)=>{ return prev > curr ? curr : prev})
  const minNumIdx = arr.indexOf(minNum)
  arr.splice(minNumIdx,1)

  return arr

}

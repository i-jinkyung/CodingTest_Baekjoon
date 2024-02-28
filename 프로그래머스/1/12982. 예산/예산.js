function solution(d, budget) {
  
  let index = 0
  
  d.sort((a,b) => a-b).reduce((acc,curr,idx)=>{
    acc - curr >= 0 && index++
    return acc -= curr;

  },budget)

  return index
}
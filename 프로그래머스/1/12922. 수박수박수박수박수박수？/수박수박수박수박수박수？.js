function solution(n) {
  const str = '수박'
  const newArr = str.split('')
  let answer =[]
  
  for(i=0; i<n; i++){
    i % 2 === 0 ?  answer.push(newArr[0]) : answer.push(newArr[1])
  }
  
  return answer.join().replaceAll(',','')
}
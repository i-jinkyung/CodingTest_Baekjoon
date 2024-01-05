function solution(array) {
  const a = array.filter((v)=>{return v%2 === 0}).length
  const b= array.length -a
  
  
  
 return [a,b]

}
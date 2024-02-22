function solution(arr, divisor) {
    
const answer = arr.filter((index)=>{return index % divisor === 0 })
    
return answer.length ? answer.sort((a,b)=> {return a-b}) : [-1]
}
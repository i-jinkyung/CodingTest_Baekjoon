function solution(n, m) {

    var answer = [];
    let max = []

  
  for(let i=0; i<=Math.min(n,m); i++){
    
    if(n % i === 0 && m % i===0){
      max.push(i)
    }
    
  }
   answer.push(max.reverse()[0])
   answer.push((n * m) / answer[0]);
    

    return answer;
}
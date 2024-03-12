function solution(s) {
  const numbers = ['zero', 'one','two','three','four','five','six','seven','eight','nine']
  let answer = s

  for(let i=0; i<numbers.length; i++){
     while(answer.includes(numbers[i])) { 
      answer = answer.replace(numbers[i], i); 
    }
  }
  
  return parseInt(answer)
  
}
function solution(str,n) {
  const newStr = str.split('')
  let answer = ''
  
  for(let i=0 ; i<str.length; i++){
    
    answer += str[i].repeat(n)

  }

 
return answer
}
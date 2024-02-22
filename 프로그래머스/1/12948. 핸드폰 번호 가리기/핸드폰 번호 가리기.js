function solution(num) {
  const phoneNum = num.split('').reverse()
   let answer = []

   for(let i=0; i<phoneNum.length; i++){
     i<=3 ? answer.push(phoneNum[i]) : answer.push('*')
   }

   return answer.reverse().join().replaceAll(',','')
   
}

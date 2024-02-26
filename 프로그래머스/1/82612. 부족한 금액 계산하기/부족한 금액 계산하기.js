function solution(price, money, count) {
  let totalPrice = 0
  
  for(let i=0; i<count; i++){
   totalPrice +=  price * (i+1)  
  }
  
  let answer = money - totalPrice;

  return answer > 0 ? 0 : Math.abs(answer);
}
function solution(s) {
  const length = s.length
  
    
 
 if(length %2 !==0){
 return s[(Math.round(length/2-1))]
 } else {
return s[(Math.round(length/2-1))] + s[(Math.round(length/2))]
 }
}
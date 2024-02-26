function solution(left, right) {


    var answer = [];
    
    for(let i=left; i<=right; i++){
      let result =[];
        for(let v=0; v<=right; v++){
          i%v === 0 && result.push(v)
        }
      result.length % 2 === 0 ? answer.push(i) : answer.push(-i)
    }


    return answer.reduce((acc,curr)=> acc + curr);
}
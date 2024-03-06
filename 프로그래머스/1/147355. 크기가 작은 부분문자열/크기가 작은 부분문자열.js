function solution(t, p) {
    var answer = []

for(let i=0; i<[...t].length; i++){
  const newNum = t.substr(i,[...p].length)
  newNum.length === [...p].length && answer.push(t.substr(i,[...p].length))  
}

return answer.filter((val)=> Number(val) <= Number(p)).length

}
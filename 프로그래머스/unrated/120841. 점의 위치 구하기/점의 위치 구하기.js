function solution(dot) {
const a = dot[0] > 0
const b = dot[1] > 0

if(a && b) return 1
if(!a && b) return 2
if(!a && !b) return 3
if(a && !b) return 4


}
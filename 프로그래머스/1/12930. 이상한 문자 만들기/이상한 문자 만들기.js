function solution(s) {
  return s.split(" ").map((val, idx)=> {return [...val].map((char,idx)=> idx % 2 ===0 ? char.toUpperCase() : char.toLowerCase())}).join(' ').replaceAll(",",'')

}
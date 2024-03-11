function solution(s) {
  
  
  
  return [...s].map((val,idx)=>{
    const findIdx = [...s].indexOf(val)
    if(findIdx-idx === 0) return -1
    

      const lastIdx = [...s.slice(0,idx)].lastIndexOf(val)
      return idx - lastIdx

  })

}
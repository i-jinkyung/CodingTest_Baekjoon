function solution(s) {
  const newArr = s.split(" ").map((value, index) => {
    return [...value]
      .map((char, index) => {
        return (index + 1) % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
      })
      .join("");
  });
  return newArr.join(" ");
}
function solution(elements) {
  const set = new Set(elements); 
  const length = elements.length; 
  
  // elements 배열에 시작위치를 알려주는 for문
    for(let i = 0; i < length; i++){
        let sum = 0;
        for(let j = i; j < length+i; j++){
            // set객체는 SameValueZero 알고리즘을 사용하여 중복된 값이 할당되지 않게함
            sum += elements[j % length]
            set.add(sum)
        }
    }
  return set.size
}
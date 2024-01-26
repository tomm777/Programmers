function solution(N, stages) {
    let count = stages.length;
    const obj = {};
    for(let i = 1; i <= N; i++){
        obj[i] = 0;
    }
    
    for(let i = 1; i <= N; i++){
        obj[i] = Number.parseFloat(stages.filter(num => num === i).length / count)
        
        count = count - stages.filter(num => num === i).length
    }
    const sortedKeys = Object.entries(obj)
  .sort(([, valueA], [, valueB]) => valueB - valueA)
  .map(([key]) => Number(key));
    return sortedKeys
    
}
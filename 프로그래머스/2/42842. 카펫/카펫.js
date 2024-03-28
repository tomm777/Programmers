function solution(brown, yellow) {
    var answer = [];
    let arr = [];
    // (brown + yellow) / x = y
    // (12) / 2,4,6,12 = y (6,3,2,1);
    
    
    // (x-2) * (y-2) === yellow
    
    
    let sum = brown + yellow
    for(let i = 2; i <= sum; i++){
        if(i === sum) break;
        if(sum % i === 0){
            arr.push(i)
        }
    for(let i = 0; i < arr.length; i++){
        let x = sum / arr[i];
        if((x -2) * (arr[i] - 2) === yellow){
            return [x,arr[i]]
        }
    }
}
}
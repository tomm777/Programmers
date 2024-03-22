function solution(n) {
    var answer = 0;
    let count = 1;
    let arr = [];
    
    for(let i = 1; i <= n; i++){
        arr.push(i)
        const sum = arr.reduce((acc, cur) => acc + cur, 0);
        if(i > 1){
            if((n - sum) % i === 0 && sum <= n){
                count++;
            }
        }
        if(sum > n){
            break;
        }
        
    }
    return count;
}
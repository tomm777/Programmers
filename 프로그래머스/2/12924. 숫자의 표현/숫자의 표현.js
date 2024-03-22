function solution(n) {
    var answer = 0;
    let count = 1;
    let sum = 0;
    
    for(let i = 1; i <= n; i++){
        sum += i
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
function solution(n) {
    var answer = 0;
    let count = 1;
    let test = [];
    
    for(let i = 1; i <= n; i++){
        test.push(i)
        const sum = test.reduce((acc, cur) => acc + cur, 0);
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
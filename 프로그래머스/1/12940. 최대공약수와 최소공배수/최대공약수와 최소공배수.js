function solution(n, m) {
    var answer = [];
    let min = 0;
    for(let i = 1; i <= m; i++){
        if(n % i === 0 && m % i === 0){
            min = i;
        }
    }
    return [min, n * (m / min)];
}
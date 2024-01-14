function solution(a, b, n) {
    let answer = 0;
    do{
        // 카운트되는 총 콜라 수
        answer += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + Math.floor(n % a);
    }while(n >= a)
   
    
    return answer;
}
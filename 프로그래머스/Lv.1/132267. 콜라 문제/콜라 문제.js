function solution(a, b, n) {
    let totalCoke = 0;
    let remainCoke = 0;
    do{
        // 카운트되는 총 콜라 수
        totalCoke += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + Math.floor(n % a);
    }while(n >= a)
   
    
    return totalCoke;
}
function solution(a, b, n) {
    let answer = 0;
    let totalCoke = 0;
     let currentCoke = 0;
    let remainCoke = 0;
    // let remainCoke = Math.floor(n % a);
    // let currentCoke = Math.floor(n / a) * b;
    do{
        // 카운트되는 총 콜라 수
        totalCoke += Math.floor(n / a) * b;
        // 현재 남아있는 콜라 수 (나머지 제외)
        // 12 8 6 4
        //12일때 2*3 + 2 = 8
        //8일때  1*3 + 3 = 6
        //6일때  1*3 + 1 = 5
        n = Math.floor(n / a) * b + Math.floor(n % a);
        console.log(n)
        
        

    }while(n >= a)
   
    
    return totalCoke;
}
function solution(s) {
    var answer = [];
    let count = 0;
    let procedureCount = 0;
    let test = 0;
    let num = 0;
    do{
        procedureCount++
        let currentNum = 0;
        if(num === 0){
          test = s.split('').filter(item => item === '1');
        }
        else {
            currentNum = test;
            test = test.filter(item => item === '1');
        }
        if(num === 0) {
            count += s.length - test.length;
        }
        // 0을 제외한 숫자 카운트
        else {
            count += currentNum.length - test.length;
        }
        // 자리수를 2진수로 변환
        num = test.length.toString(2);
        // 변환할 문자열을 전달
        test = num.split('');
        console.log(count)
    }while(test.length > 1)
    return [procedureCount,count];
}
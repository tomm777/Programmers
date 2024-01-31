function solution(lottos, win_nums) {
    const obj ={
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    let answer = [];
    // 일치한 숫자
    const commonNumbers = lottos.filter(num => win_nums.includes(num));
    // 0의 개수
    const zeroNum = lottos.filter(num => num === 0);
    
    answer.push(obj[commonNumbers.length]);
    answer.push(obj[commonNumbers.length + zeroNum.length]);
    
    return answer.sort();
}
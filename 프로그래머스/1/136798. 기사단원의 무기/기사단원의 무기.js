function solution(number, limit, power) {
    var answer = 0;
    for (let i = 1; i <= number; i++)
    {
        let count = 0;
        for (let j = 1; j * j <= i; j++)
        {
            if (j * j == i) count++;
            else if (i % j == 0) count += 2;
        }
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}
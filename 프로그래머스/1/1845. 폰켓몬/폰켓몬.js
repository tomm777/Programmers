function solution(nums) {
    let count = nums.length/2;
    const answer = [...new Set(nums)]

    return answer.length > count ? count : answer.length;
}
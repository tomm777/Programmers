function solution(n, lost, reserve) {
    
    let answer = 0;
    
    // 잃어버린 사람 번호
    const noReserveLost = lost.sort((a,b) => a-b).filter((lost) => !reserve.includes(lost));
    
    // 여벌 체육복이 있는 사람 번호
    let hasReserve = reserve.sort((a,b) => a-b).filter((reverse) => !lost.includes(reverse));
    const finalLost = noReserveLost.filter((lost) => {
        // 여벌 체육복이 있는 학생중 빌려줄 학생들 하나씩 제외
        const lend = hasReserve.find((reserve) => {
            return Math.abs(reserve - lost) === 1
        });
        
        if(!lend) return lost;
        hasReserve = hasReserve.filter((reverse) => reverse !== lend);
    })
    answer = n - finalLost.length;
    
    return n - finalLost.length;
}
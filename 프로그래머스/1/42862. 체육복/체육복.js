function solution(n, lost, reserve) {
    
    let answer = 0;
    
    // 잃어버리지 않은 사람 번호
    const noReserveLost = lost.sort((a,b) => a-b).filter((lost) => !reserve.includes(lost));
    
    let hasReserve = reserve.sort((a,b) => a-b).filter((reverse) => !lost.includes(reverse));
    // console.log(noReserveLost,hasReserve)
    
    const finalLost = noReserveLost.filter((lost) => {
        
        const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) == 1);
        console.log(lend)
        // console.log(Math.abs(reserve - lost))
        
        if(!lend) return lost;
        
        hasReserve = hasReserve.filter((reverse) => reverse !== lend);
    })
    answer = n - finalLost.length;
    
    return n - finalLost.length;
}
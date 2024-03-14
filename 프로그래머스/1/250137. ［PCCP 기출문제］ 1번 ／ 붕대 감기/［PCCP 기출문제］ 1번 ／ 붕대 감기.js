function solution(bandage, health, attacks) {
    // 마지막 공격
    const lastAttack = attacks[attacks.length - 1][0];
    // 현재 체력
    let currentHealth = health;
    //  시전시간   초당 회복량  추가회복량
    let [workTime,recoveryPS,addHealth] = bandage;
    // 연속 공격 카운팅 변수
    let count = 0;
    for(let i = 0; i <= lastAttack; i++){
        if(attacks[0][0] === i){
            currentHealth -= attacks[0][1]
            attacks.splice(0,1);
            count = 0;
        }
        else {
            count++
            if(count >= 1){
                currentHealth += recoveryPS;
                if(count === workTime) {
                    currentHealth += addHealth;
                    count = 0;
                }
                if(currentHealth > health) currentHealth = health;
            }
        }
         if (currentHealth <= 0) {
            return -1; // 체력이 0 이하면 즉시 종료
        }
    }
    
    return currentHealth
}
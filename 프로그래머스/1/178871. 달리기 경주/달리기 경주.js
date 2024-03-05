function solution(players, callings) {
    let playerIDX2 = {};
    for (let i = 0; i < players.length; i++) {
        playerIDX2[players[i]] = i;
    }
    for(let i = 0; i < callings.length; i++){
        let index = playerIDX2[callings[i]];
        let temp = players[index - 1];
        players[index - 1] = players[index];
        players[index] = temp;
        playerIDX2[players[index]] = index;
        playerIDX2[players[index - 1]] = index - 1;
    }
    return players;
}

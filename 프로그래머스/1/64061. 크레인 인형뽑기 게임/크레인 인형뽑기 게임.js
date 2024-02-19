function solution(board, moves) {
    let answer = 0;
    let arr = [];
    for(let i = 0; i < moves.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[j][moves[i] - 1] > 0){
                arr.push(board[j][moves[i] - 1]);
                if(arr.slice(-2)[0] === arr.slice(-2)[1]){
                    arr.splice(-2);
                    answer += 2
                }
                board[j][moves[i] - 1] = 0;
                break;
                
            }
        }
    }
    return answer;
}
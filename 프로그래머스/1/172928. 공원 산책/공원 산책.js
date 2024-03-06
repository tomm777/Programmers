function solution(park, routes) {
    let startLocation = [];
    for(let i = 0; i < park.length; i++){
        if(park[i].indexOf('S') !== -1){
            startLocation = [i, park[i].indexOf('S')];
            break;
        }
    }
    // 성공인지 실패인지 알려주는 함수
    const moveLocation = (currentPoint, direction, num) => {
    const [x, y] = currentPoint;
    let newX = x, newY = y;

    for (let i = 1; i <= num; i++) {
        if (direction === 'E') newY += 1;
        else if (direction === 'W') newY -= 1;
        else if (direction === 'S') newX += 1;
        else if (direction === 'N') newX -= 1;

        if (!park[newX] || !park[newX][newY] || park[newX][newY] === 'X') {
            return currentPoint;
        }
    }

    return [newX, newY];
};

    for(let i = 0; i < routes.length; i++){
        let direction = routes[i].split(' ')[0];
        let number = routes[i].split(' ')[1];
        let result = moveLocation([startLocation[0],startLocation[1]],direction,Number(number));
        if(result !== undefined){
            startLocation[0] = result[0];
            startLocation[1] = result[1]
        }
        else {
            continue;
        }
        
    }
    return [startLocation[0], startLocation[1]];
}
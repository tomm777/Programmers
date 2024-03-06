function solution(park, routes) {
    let startLocation = [];
    // S의 위치를 찾아서 대입
    for(let i = 0; i < park.length; i++){
        if(park[i].indexOf('S') !== -1){
            startLocation = [i, park[i].indexOf('S')];
            break;
        }
    }
    // 성공일때 그에 맞는 위치, 실패일 때 원래의 위치를 반환하는 함수
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
        let [direction, number] = routes[i].split(' ');
        startLocation = moveLocation([startLocation[0],startLocation[1]],direction,Number(number));
        
    }
    return startLocation
}
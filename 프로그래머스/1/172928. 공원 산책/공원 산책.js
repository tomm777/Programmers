function solution(park, routes) {
    var answer = [];
    let startLocation = [];
    let Obstacle = [];
    let field = [];
    for(let i = 0; i < park.length; i++){
        if(park[i].indexOf('S') !== -1){
            startLocation.push((i))
            startLocation.push(park[i].indexOf('S'));
            break;
        }
    }
    // 성공인지 실패인지 알려주는 함수
    const moveLocation = (currentPoint,direction,num) => {
        // console.log(currentPoint,direction,num)
        // console.log("OPERATION")
        num = Number(num);
        for(let i = 1; i <= num; i++){
            let point = '';
            if(direction === 'E'){
                point = park[currentPoint[0]]?.[currentPoint[1] + i]
            }
            else if(direction === 'N'){
                point = park[currentPoint[0] - i]?.[currentPoint[1]]
            }
            else if(direction === 'W'){
                point = park[currentPoint[0]]?.[currentPoint[1]  - i]
            }
            else if(direction === 'S'){
                point = park[currentPoint[0] + i]?.[currentPoint[1]]
            }
            if(point === 'X' || point === undefined){
                return;
            }
            
        }
        switch(direction){
            case 'E' : return [currentPoint[0],currentPoint[1] + num]
            case 'W' : return [currentPoint[0],currentPoint[1]  - num]
            case 'S' : return [currentPoint[0] + num, currentPoint[1]]
            case 'N' : return [currentPoint[0] - num, currentPoint[1]]
        }
    }
    for(let i = 0; i < routes.length; i++){
        let direction = routes[i].split(' ')[0];
        let number = routes[i].split(' ')[1];
        let result = moveLocation([startLocation[0],startLocation[1]],direction,number);
        if(result !== undefined){
            console.log(result)
            startLocation[0] = result[0];
            startLocation[1] = result[1]
        }
        else {
            continue;
        }
        
    }
    return [startLocation[0], startLocation[1]];
}
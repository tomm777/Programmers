function solution(wallpaper) {
    let S = [];
    let E = [];
    let test = [];
    // ------------------------------------------
    // let left = [];

    for(let i = 0; i < wallpaper.length; i++){
        if(wallpaper[i].includes('#')){
            S.push(wallpaper[i].indexOf('#').toString())
            E.push(wallpaper[i].lastIndexOf('#').toString())
            test.push(i)
        }
    }
    let answer = (Math.min(...S).toString() + (Math.max(...test) + 1) + (Math.max(...E) + 1)).split('')
    let left = Math.min(...test);
    let top = Math.min(...S)
    let right = Math.max(...test) + 1;
    let bottom = Math.max(...E) + 1;
    // answer.map(item => Number(item))
    console.log()
    return [left,top,right,bottom]
}
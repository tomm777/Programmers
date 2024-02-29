function solution(wallpaper) {
    let S = [];
    let E = [];
    let fileIndex = [];
    for(let i = 0; i < wallpaper.length; i++){
        if(wallpaper[i].includes('#')){
            S.push(wallpaper[i].indexOf('#').toString())
            E.push(wallpaper[i].lastIndexOf('#').toString())
            fileIndex.push(i)
        }
    }
    let left = Math.min(...fileIndex);
    let top = Math.min(...S)
    let right = Math.max(...fileIndex) + 1;
    let bottom = Math.max(...E) + 1;
    return [left,top,right,bottom]
}
function solution(strings, n) {
    var answer = [];

    return strings.sort().sort((a, b) => a[n].localeCompare(b[n]));;
}
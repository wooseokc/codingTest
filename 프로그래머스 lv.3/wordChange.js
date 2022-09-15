/*
https://school.programmers.co.kr/learn/courses/30/lessons/43163

이 문제는 DFS/BFS로 분류되어 있는 문제인데 나는 깊이 탐색으로 풀었다. BFS로 이 문제를 해결할 수 있나 싶다.
재귀함수를 돌리면서 모든 경우의 수를 탐색하는 방법으로 문제를 해결했다.
*/

function next (arr, now, count, target, answer) {
  if (arr.length === 0) return 
  if (now === target) {
    answer.push(count)
    return 
  }

  for (let i=0; i<arr.length ; i++) {
    let left = now.split('')
    let right = arr[i].split('')
    let diff = 0
    for (let i=0; i<left.length; i++) {
      if (left[i] === right[i]) {
        diff ++
      }
    }
    if (diff === now.length - 1) {
      let tmp = arr.slice()
      tmp.splice(i,1)
      next (tmp, arr[i], count + 1 , target, answer)
    }
  }
}
function solution(begin, target, words) {
  let answer = []
  next(words, begin, 0, target, answer)

  answer.sort((a,b) => a-b)
  console.log(answer)
  let result = answer[0] ? answer[0] : 0
  return result;
}

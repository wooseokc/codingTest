/*
https://school.programmers.co.kr/learn/courses/30/lessons/17678

카카오 기출은 기본적으로 과정이 복잡하긴하다. 일단 이 문제의 난이도를 줄이는 방법은 시간을 분단위로 모두 바꾸는 것이다.
그리고 딱히 잘 풀었다기 보다는 주어진 테스트 케이스를 하나씩 해결하다보니까 풀이가 성공했다..
기본적으로 버스 시간 배열과 도착 시간 배열을 조건이 맞을 경우 하나씩 pop하면서 남은 시간 배열에서 가장 적절한 시간을 고르도록 설계했다.
*/


function solution(n, t, m, timetable) {
  var answer = '';
  let split = timetable.map(item => item.split(':'))
  for (let idx in split) {
    split[idx] = (+split[idx][0]* 60) + +split[idx][1]
  }
  split.sort((a,b) => b-a)
  let busTable = [[9, 0]];
  for (let i=1 ; i<n; i++) {
    busTable[i] = busTable[i - 1].slice()
    busTable[i][1] += t;
    if (busTable[i][1] >= 60) {
      busTable[i][1] -= 60
      busTable[i][0] ++
    }
  }
  for (let idx in busTable) {
    busTable[idx] = (+busTable[idx][0]* 60) + +busTable[idx][1]
  }
  
  let peopleCount;
  for (let i=0; i<busTable.length-1; i++) {
    peopleCount = m
    let bus = busTable[i]
    while (split[split.length-1] <= bus && peopleCount > 0) {
      split.pop()
      peopleCount --
    }
  }
  let target = split[split.length-m] ? split[split.length-m] : split[0]
  if (busTable[busTable.length-1] < target) {
    target = busTable[busTable.length-1] +1
  }

  if (!split[split.length-m]) {
    if (split[0] < busTable[busTable.length-1]) {
      target = busTable[busTable.length-1] +1
    }
  }

  let tmp = [];
  tmp [0] = Math.floor((target-1) / 60).toString()
  tmp [1] = ((target-1) % 60).toString()
  for(let idx in tmp) {
    if (tmp[idx].length === 1) {
      tmp[idx] = `0${tmp[idx]}`
    }
  }

  answer = tmp.join(':')
  return answer;
}

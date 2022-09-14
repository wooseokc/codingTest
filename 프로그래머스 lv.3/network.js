/*
https://school.programmers.co.kr/learn/courses/30/lessons/43162

이 문제의 정석 풀이가 무엇인지는 잘모르겠다. 아무래도 그래프를 이용해서 푸는게 아닌가 싶은데...
일단 간단하게 생각하면 연결된 모든 컴퓨터는 하나의 네트워크다. 즉 그래프를 만들고 연결된 모든 노드를 지워버리면 하나의 네트워크를 지우는 것이다.
그래서 나는 이렇게 네트워크가 지워질 때마다 하나의 네트워크를 카운트했다.  
연결된 모든 노드를 지우는 것은 당연히 재귀 함수를 돌리면 된다.

*/

function check (obj, index) {
  if (!obj[index]) return
  let arr = obj[index].slice();
  delete obj[index]
  for (let i=0; i<arr.length ; i++) {
    check(obj, arr[i]);
  }
}

function solution(n, computers) {
  var answer = 0;
  let obj = {
  }

  for (let j=0; j < computers.length ; j++) {
    obj[j + 1] = []
    computers[j].map ((item, idx) => {
      if (item === 1) {
        obj[j + 1].push(idx + 1)
      }
    })
  }

  for (let i=1; i<=n ; i++) {
    if (obj[i]) {
      check(obj, i)
      answer ++
    }
  }

  return answer;
}
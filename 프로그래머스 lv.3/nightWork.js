/*
https://school.programmers.co.kr/learn/courses/30/lessons/12927

이 문제는 heap을 구현할 수 있냐를 물어보는 문제다. 
매 반복마다 최댓값을 구하고 거기서 1을 빼면 된다.
이중 우선순위 큐랑 비슷한 문제다. 새로운 객체를 만들어서 풀어도 될 것이고
무난하게 힙을 구현해서 풀어도 될 것이다. 나는 heap으로 풀었다. 
*/

function solution(n, works) {
  var answer = 0;
  let heap = [0]
  works.sort((a,b) => b- a)
  heap = [0, ...works]

  function topMinus () {
    let index = 1
    heap[index] --;

    while (heap[index] < heap[index * 2] || heap[index] <heap[index * 2 +1]) {
      if (!heap[index * 2]) return

      if (heap[index * 2] && heap[index * 2 + 1]) {
        if (heap[index * 2] >= heap[index * 2 + 1] ) {
          let top = heap[index];
          heap[index] = heap[index * 2];
          heap[index * 2] = top;
          index = index * 2;
        } else {
          let top = heap[index];
          heap[index] = heap[index * 2 + 1];
          heap[index * 2 + 1] = top;
          index = index * 2 + 1;
        }
      } else if (heap[index * 2]) {
        let top = heap[index];
        heap[index] = heap[index * 2];
        heap[index * 2] = top;
        index = index * 2;
      }
    }
  }

  while (n > 0) {
    topMinus()
    n--
  }
  heap.map(item => answer += Math.pow(item,2))
  if (heap[1] <= 0) answer = 0
  return answer;
}

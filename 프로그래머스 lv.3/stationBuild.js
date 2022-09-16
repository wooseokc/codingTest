/*
https://school.programmers.co.kr/learn/courses/30/lessons/12979

이 문제를 풀면서 쫌 짜증났던 부분이 효율성 커트라인이 좀 애매하게 잡혀있어서 채점을 돌릴 때 언제는 통과하고 언제는 튕긴다.
처음에 효율성 한 케이스가 튕겨서 상당 시간 고민하다가 도저히 줄일 부분이 없어서 공백 하나 지우고 돌렸는데 통과됐다...

이 문제 풀이는 제한 사항을 보고 배열을 만들면 안된다고 느꼈다. n값이 너무커서 배열을 만들 수 없다.
그래서 기지국이 커버하는 곳을 제외한 비어있는 칸수를 측정해서 거기에 가장 효율적으로 기지국을 넣는 방법을 택했대.
*/

function solution(n, stations, w) {
  var answer = 0;
  let arr = [];

  let start = 1;
  for (let i=0; i<stations.length ; i++) {
    let tmp = stations[i] - w;
    if (tmp <= start) {
      start = stations[i] + w + 1;

      continue
    }
    arr.push(tmp - start)
    start = stations[i] + w + 1;
  }
  if (start <= n) {
    arr.push(n - start + 1)
  }

  for (let i=0; i<arr.length ; i++) {
    answer += Math.ceil(arr[i]/(2*w + 1))
  }
  return answer;
}

solution(
  11, [1,2,4], 6
)
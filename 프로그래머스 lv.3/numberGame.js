/*
https://school.programmers.co.kr/learn/courses/30/lessons/12987

진심으로 왜 3단계인지 이해가 안되는 문제
예시를 일부로 함정으로 줬는데, 이 문제는 내게 주어진 배열에서 가장 큰 값으로 타켓되는 배열의 가장 큰 값을 지우면 된다.
이렇게 했을 때 더 효율적인 방법이 있지 않을까 생각할 수 있는데 없다.
*/
function solution(A, B) {
  var answer = 0;
  A.sort((a,b) => a - b)
  B.sort((a,b) => a - b)
  while(A.length > 0) {
    if (A[A.length-1] < B[B.length-1]) {
      A.pop()
      B.pop()
      answer ++
    } else {
      A.pop()
    }
  }
  return answer;
}

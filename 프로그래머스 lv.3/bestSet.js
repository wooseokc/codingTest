// https://school.programmers.co.kr/learn/courses/30/lessons/12938

/*
이 문제는 3단계에 있기에는 조금 애매하긴하다.
처음에 문제를 대충 읽고 집합의 원소에 중복이 없게 했는데 틀려서 다시 보니까 중복이 되더라.
중복이 되면 사실 난이도는 급감한다. 굳이 이 문제가 3단계인 이유는 시간 복잡도인 것 같은데
이중 반복문으로 풀면 당연히 안되고 수학적 사고가 조금은 필요하다.
귀납적으로 사례를 고민해보면 집합 원소의 크기가 전체적으로 클 수록 원소들의 곱이 커진다는 것을 알 수 있다.
중복도 되기 때문에 그냥 s를 n으로 나눈 몫 근처의 값을 구하면 최고의 집합이다.
*/
function solution(n, s) {
  if (s < n) return [-1]
  let floor = Math.floor(s/n)
  let newArr = []
  s -= (floor * n)
  for (let i=0; i<n; i++) {
    if (i >= n - s) {
      newArr[i] = floor +1
    } else newArr[i] = floor
  }
  return newArr
}

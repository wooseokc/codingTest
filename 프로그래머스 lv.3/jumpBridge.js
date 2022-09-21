/*
https://school.programmers.co.kr/learn/courses/30/lessons/64062

역시 카카오는 어렵다. O(n)의 시간복잡도로 풀이를 했었는데 효율성에서 튕겼다. 도저히 답을 찾을 수 없어서 답지를 봤는데
이중 탐색 알고리즘을 사용해야 하더라.. 그래서 그것을 이용해 풀었다. 이중 탐색 알고리즘에 친숙하지 않았어서 쉽지 않았던 문제였다.
https://tech.kakao.com/2020/04/01/2019-internship-test/
*/


function check (stones, k, people) {
  let tmp = stones.slice()
  // 이 부분을 for문으로 바꿔야 효율성이 통과됨 
  tmp = tmp.map((item) => {
    return item - people
  })
  
  
  let count = 0
  for (let i=0; i<tmp.length ; i++) {
    if (tmp[i] <= 0) {
      count ++
    } else count = 0

    if (count >= k) return false
  }
  return true

}
 
function solution(stones, k) {
  let max = 200000000
  let min = 0;

  while (min <= max) {
    let middle = min + Math.floor((max - min)/2)

    if (check(stones, k, middle)) {
      min = middle + 1
    } else {
      max = middle - 1;
    }
  }

  return min;
}

solution(
  [2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3
)
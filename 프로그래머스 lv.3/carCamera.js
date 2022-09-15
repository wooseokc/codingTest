/*
 사실 이 문제는 수학적으로 사고하면 너무 쉽게 풀 수 있다.
 어떤 차의 진출 시점과 다른 차의 진입 시점이 겹치는 그 사이에 카메라가 반드시 있어야 한다.
 왜냐하면 모든 차는 한 번은 찍혀야하니까. 이 생각을 조금 확장하면 어떤 차의 진출로에 카메라를 놓고
 그 지점을 통과하는 모든 차들을 한 카메라로 찍으면 된다는 결론이 나온다.
*/

function solution(routes) {
  var answer = 0;
  routes.sort((a,b) => a[1] - b[1])

  let camera = routes[0][0] - 1;

  for (let i=0; i<routes.length ; i++) {
    if (routes[i][0] > camera) {
      camera = routes[i][1]
      answer ++;
    } else continue
  }
  return answer;
}


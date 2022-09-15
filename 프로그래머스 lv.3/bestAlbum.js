/*
https://school.programmers.co.kr/learn/courses/30/lessons/42579

딱히 3단계라고 생각될 정도로 어려운 문제는 아닌 것 같음. 굳이 어려웠던 부분을 뽑자면
장르들의 합을 구하고 그 합을 정렬해서 순서대로 배치하는 것 정도?
오브젝트 객체를 잘 이용해서 장르를 총 횟수로 변환한다면 크게 어렵지 않은 문제
*/

function solution(genres, plays) {
  var answer = [];
  let sum = [];
  let obj = {}

  for (let i=0; i<genres.length ; i++) {
    sum.push([genres[i], plays[i], i])
    if (obj[genres[i]]) {
      obj[genres[i]] += plays[i]
    } else {
      obj[genres[i]] = plays[i]
    }
  }

  sum.map(item => {
    item[0] = obj[item[0]]
  })

  sum.sort((a,b) => b[1] - a[1])
  sum.sort((a,b) => b[0] - a[0])
  let prev = 0;
  for(let i=0; i<sum.length ; i++) {
    if (sum[i][0] !== prev) {
      prev = sum[i][0];
      answer.push(sum[i][2])
      if (sum[i + 1])
      answer.push(sum[i+1][2])
      i ++
    } else {
      continue
    }
  }

  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]
)
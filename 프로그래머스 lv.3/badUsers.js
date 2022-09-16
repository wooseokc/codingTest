/*
https://school.programmers.co.kr/learn/courses/30/lessons/64064

진짜 카카오 너무 어렵다.
제한 사항에 배열의 길이가 8이길래 완전탐색으로 모든 순열을 만들었다.
순열로 모든 케이스를 만들고도 ban id를 비교해야하는데 이것도 완전 탐색으로 모든 경우의 수를 다 봐야한다.
한문제를 푸는 재귀함수만 3개를 만들었다...
카카오 3단계는 다른 3단계랑 난이도가 다르다.
*/



function soonyeol (arr, count, tmp, output, length, idx) {
  if (count === length) {
    output.push(tmp.slice())
  }

  if (arr[idx] === undefined) return

  for(let i=idx; i<arr.length; i++) {
    tmp.push(arr[i]);
    soonyeol(arr, count + 1, tmp.slice(), output, length, i+1)
    tmp.pop()
  }
}

function compare (user, baned, result) {

  let output = []

  function caseMake (arr, tmp ,output) {
    if (arr.length === 0) {
      output.push(tmp)
      return
    }

    for (let i=0; i<arr.length; i++) {
      tmp.push(arr[i])
      let tmpArr = arr.slice()
      tmpArr.splice(i,1)
      caseMake(tmpArr, tmp.slice(), output)
      tmp.pop()
    }
  }

  caseMake(user, [], output)

  for (let i=0; i<output.length ; i++) {
    let arr = output[i];

    b : for (let p=0; p<baned.length; p ++) {
      let ban = baned[p].split('')

      a : for (let q=0; q<output[i].length; q ++) {
        let user = output[i][q].split('')
        if (user.length !== ban.length) {
          continue a
        }

        for (let j=0; j<ban.length; j++) {
          if (ban[j] !== user[j] && ban[j] !== '*') {
            continue a;
          }
        }

        output[i].splice(q, 1);
        q --
        continue b
      }
    }
    if (output[i].length === 0) {
      result.push(1);
      return
    }
  }
}

function solution(user_id, banned_id) {
  let length = banned_id.length
  let output = []
  soonyeol(user_id, 0, [], output, length, 0)
  let result = []
  for (let i=0; i<output.length ; i++) {
    compare(output[i], banned_id, result)

  }
  return result.length;
}

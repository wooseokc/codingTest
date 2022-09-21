function solution(gems) {
  var answer = [0,0, Number.MAX_SAFE_INTEGER];
  let gemObj = { count : 0}

  for (let i=0; i<gems.length ; i++) {
    if (gemObj[gems[i]]) {
      continue
    } else {
      gemObj[gems[i]] = 0
    }
  }

  let count = 0;
  for (let key in gemObj) {
    count ++
  }
  if (count === 2) {
    return [1, 1]
  }

  for (let i=0; i<gems.length ; i++) {
    gemObj[gems[i]] ++
    gemObj['count'] ++


    for (let j=i+1; j<gems.length ; j++) {
      gemObj[gems[j]] ++ 
      gemObj['count'] ++

      let total = false;
      for (let keys in gemObj) {
        if (gemObj[keys] > 0) {
          total = true
        } else {
          total = false
          break
        }
      }

      console.log(total)

      if (total) {
        if (gemObj['count'] < answer[2]) {
          answer = [i+1, j+1, gemObj['count']]
        }
      }

      let idx = i
      a : while (total) {
        gemObj[gems[idx]] --
        gemObj['count'] --

        for (let keys in gemObj) {
          if (gemObj[keys] > 0) {
            total = true
          } else {
            total = false
            continue a;
          }
        }
        idx ++

        if (gemObj['count'] < answer[2]) {
          answer = [idx + 1, j+1, gemObj['count']]
        }
      }
      i = idx
    }
  }

  console.log(answer)

  return answer.slice(0,2);
}

solution(
  ["XYZ", "XYZ", "XYZ"]
)
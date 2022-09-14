/*
https://school.programmers.co.kr/learn/courses/30/lessons/42628

이 문제는 큐 자료 구조를 사용할 수 있다면 쉽다.
당연히 shift()를 쓰면 시간 복잡도에서 컷일 것이기에...
재밌는 부분은 최솟값과 최댓값 삭제가 둘 다 있기에 큐 생성자에 head와 tail 값을 만들 필요가 있다.
그리고 큐에 값을 넣을 때는 당연히 대소 비교를 해서 순서에 맞게 넣어 정렬을 생략하는 과정이 중요하다.
*/


function DoubleQueue () {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node (value) {
  this.value = value
  this.next = null;
  this.prev = null;
}

DoubleQueue.prototype.enqueue = function (value) {
  const node = new Node(value)

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    if (value < this.head.value) {
      let tmp = this.head;
      this.head = node;
      this.head.next = tmp;
      tmp.prev = node;
    } else if (value > this.tail.value) {
      let tmp = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.tail.prev = tmp;
    } else {
      let tmpNode = this.head.next;
      while (tmpNode.value < value) {
        if (tmpNode.next.value > value) {
          break
        }
        tmpNode = tmpNode.next
      }

      let tmp = tmpNode.next;
      tmpNode.next = node;
      node.next = tmp; 
      node.prev = tmpNode;
    }
  }
}

DoubleQueue.prototype.pop = function () {
  if (!this.tail) {
    return
  } else if (this.tail === this.head) {
    this.head = null
    this.tail = null
  } 
  
  else {
    this.tail = this.tail.prev
    this.tail.next = null
  }
}

DoubleQueue.prototype.shift = function () {
  if (!this.head) {
    return
  } else if (this.tail === this.head) {
    this.head = null
    this.tail = null
  } 
  else {
    this.head = this.head.next;
    this.head.prev = null
  }
}

function solution(operations) {
  var answer = [];
  let dQ = new DoubleQueue();
  for(let i=0; i<operations.length ; i++) {
    if (operations[i].split(' ')[0] === 'I') {
      dQ.enqueue(Number(operations[i].split(' ')[1]))
    } else if (operations[i] === 'D -1') {
      dQ.shift()

    } else {
      dQ.pop()
    }
  }
  answer = [dQ.tail ? dQ.tail.value : 0, dQ.head ? dQ.head.value : 0]
  return answer;
}
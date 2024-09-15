/*
가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진
최소거리를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

▣ 입력예제 1
teachermode  e

▣ 출력예제 1
1  0  1  2  1  0  1  2  2  1  0
*/

function solution(s, t) {
  const result = [];
  let dist = s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      dist = 0;
    } else {
      dist++;
    }

    result.push(dist);
  }

  dist = s.length;
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      dist = 0;
    } else {
      dist++;
      result[j] = Math.min(result[j], dist);
    }
  }

  return result;
}

// function solution(s, t) {
//   let leftDist = s.length;
//   let rightDist = s.length;
//   const left = [];
//   const right = [];

//   for (let i = 0, j = s.length - 1; i < s.length, j >= 0; i++, j--) {
//     if (s[i] === t) {
//       leftDist = 0;
//     } else {
//       leftDist++;
//     }

//     if (s[j] === t) {
//       rightDist = 0;
//     } else {
//       rightDist++;
//     }

//     left[i] = leftDist;
//     right[j] = rightDist;
//   }

//   const result = [];
//   for (let i = 0; i < left.length; i++) {
//     if (left[i] <= right[i]) {
//       result.push(left[i]);
//     } else {
//       result.push(right[i]);
//     }
//   }

//   return result;
// }

let str = "teachermode";
console.log(solution(str, 'e'));

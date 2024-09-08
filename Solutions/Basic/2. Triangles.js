/*
  삼각형 판별하기
  길이가 서로 다른 A,  B,  C 세 개의  막대  길이가  주어지면  이  세 막대로 삼각형을 만들 수  있
  으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

  ▣ 입력설명
  첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

  ▣ 출력설명
  첫 번째 줄에 “YES", "NO"를 출력한다.

  ▣ 입력예제 1
  6 7 11

  ▣ 출력예제 1
  YES

  ▣ 입력예제 1
  13 33 17

  ▣ 출력예제 1
  NO

  ▣ 의사코드
  1. 두 변의 길이의 합이 나머지 한 변의 길이보다 커야 삼각형이 충족한다.
*/

function solution(a, b, c) {
  let answer = "YES";
  let max = 0;
  let sum = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) max = c;

  if (sum - max <= max) {
    answer = "NO";
  }

  return answer;
}

// function solution(a, b, c) {
//   let answer = "YES";

//   if (a + b < c || a + c < b || b + c < a) {
//     answer = 'NO';
//   }

//   return answer;
// }

console.log(solution(13, 33, 17));
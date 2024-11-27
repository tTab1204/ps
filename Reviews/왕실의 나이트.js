// 나이트가 움직일 수 있는 모든 경우의 수
const knight = (loc) => {
  const curPos = loc.split("");

  let row = loc[0];
  let col = loc[1];

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let i = 0; i <= alphabet.length; i++) {
    if (row === alphabet[i]) {
      row = i + 1;
      break;
    }
  }

  const steps = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  let result = 0;

  for (let i = 0; i < steps.length; i++) {
    let step = steps[i];
    let nextRow = Number(row) + step[0];
    let nextCol = Number(col) + step[1];

    if (nextRow > 0 && nextRow <= 8 && nextCol > 0 && nextCol <= 8) {
      result++;
    }
  }

  return result;
};

knight("c3");

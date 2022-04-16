var numRescueBoats = function (people, limit) {
  let left = 0;
  let right = people.length - 1;
  let cnt = 0;

  people.sort((a, b) => a - b);
  console.log('people: ', people);

  while (left <= right) {
    const sum = people[left] + people[right];

    if (sum <= limit) left++;
    right--;

    cnt++;
  }
  return cnt;
};

const people = [3, 2, 2, 1];
const limit = 3;

numRescueBoats(people, limit);

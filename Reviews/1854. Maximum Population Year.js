var maximumPopulation = function (logs) {
  const years = new Array(2051).fill(0);

  for (const [birth, death] of logs) {
    years[birth]++;
    years[death]--;
  }

  let max = years[1950];
  let maxYear = 1950;

  for (let i = 1950; i < years.length; i++) {
    years[i] += years[i - 1];

    if (years[i] > max) {
      max = years[i];
      maxYear = i;
    }
  }

  return maxYear;
};

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 0) {
      count++;
    } else {
      result = result + (count - 1) / 2;
      count = 0;
    }
  }
  if (count != 0) result += count / 2;
  console.log(result);
};

canPlaceFlowers([1, 0, 0, 0, 1], 1);

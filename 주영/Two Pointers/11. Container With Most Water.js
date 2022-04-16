const maxArea = (height) => {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let smallHeight;

      if (height[i] < height[j]) smallHeight = height[i];
      else smallHeight = height[j];

      let width = j - i;

      let area = smallHeight * width;

      max = Math.max(area, max);
    }
  }
  return max;
};

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // 현재 높이는 height[left]와 height[right]중 더 작은 것이 되어야 한다.
    let curHeight = Math.min(height[left], height[right]); // 세로
    let curWidth = right - left; // 가로
    maxArea = Math.max(maxArea, curHeight * curWidth); // 넓이

    if (height[left] < height[right]) left++;
    else right--;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height);

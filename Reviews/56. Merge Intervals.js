// Solution from Leetcode
var merge = function (intervals) {
    if (arr.length <= 1) {
      return intervals;
    }
      
    intervals.sort((a, b) => {
      return a[0] - b[0];
    });
  
      
      
    let results = [];
    let prev = intervals[0];
    results.push(prev);
    
    
    for(const cur of intervals) {
      if(cur.start <= prev.end) {
          prev.end = Math.max(prev.end, cur.end)
      } else {
          results.push(cur);
          prev = cur;
      }     
    }
    
    return results;
  };

const intervals = [
  [1, 4],
  [5, 6],
];
merge(intervals);



  
---
title: "1. Two Sum"
excerpt: "Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to_ `target`.
You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice."
coverImage: "/assets/blog/leetcode/benchmark-1.jpg"
date: "2025-03-21T21:22:10.652Z"
author:
  name: Salomon Lee
  picture: "/assets/blog/authors/sl.jpeg"
ogImage:
  url: "/assets/blog/leetcode/benchmark-1.jpg"
---

## Problem
Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to_ `target`.
You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.
You can return the answer in any order.

### Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```
  
### Intuition

Let's see if I can solve it by using brute force.
Once I got the idea of how this works I was thinking on how to elimiate the inner looping to improve the runtime.

### Approach

In the improved version I am using an unordered_map to store the indices of the numbers that I have already seen. This allows me to us find the complement of a number in constant time using find(). Since the instruction is to find the first occurrence of each number, we can simply return the index of the current element and the one stored in the map.
With this approach I can get from O(n^2) to O(n) which is big improvement.

### Time complexity:
Brute force is $O(n^2)$ and optimized is $O(n)$

### Space complexity:
$O(n)$

### Code
``` cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // vector<int> result;
        unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); i++) {
            /* Brute Force Approach
            // for (int j = i+1; j < nums.size(); j++) {
            //     if ((nums[i] + nums[j]) == target) {
            //         result.push_back(i);
            //         result.push_back(j);
            //     }
            // }
            */
            if (seen.find(target - nums[i]) != seen.end()) {
                return vector<int>{seen[target-nums[i]], i};
            }
            seen[nums[i]] = i;
        }
        throw invalid_argument("No solution found");
        // return result;
    }
};

```


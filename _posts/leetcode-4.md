---
title: "4. Median of two sorted arrays"
excerpt: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays."
coverImage: "/assets/blog/leetcode/benchmark-4-2.jpg"
date: "2025-03-22T18:10:10.652Z"
author:
  name: Salomon Lee
  picture: "/assets/blog/authors/sl.jpeg"
ogImage:
  url: "/assets/blog/leetcode/benchmark-4-1.jpg"
---

## Problem

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be $O(log (m+n))$.

### Example 1:

``` sh
Input: nums1 = [1,3], nums2 = [2]

Output: 2.00000

Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2:

``` sh
Input: nums1 = [1,2], nums2 = [3,4]

Output: 2.50000

Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

## Constraints:

nums1.length == m

nums2.length == n

0 <= m <= 1000

0 <= n <= 1000

1 <= m + n <= 2000

$-10^6$ <= nums1[i], nums2[i] <= $10^6$

## Brute forced and easy solution

![Benchmark](/assets/blog/leetcode/benchmark-4-1.jpg)

### Intuition

Conceptually Merge the Arrays: Combine nums1 and nums2 into a single sorted sequence (or find the median without fully merging, which we’ll optimize later).
Determine the Middle Position(s):
Total elements = 9 (odd), so take the element at position 5 (index 4).

If it were even, you’d average the two middle elements.

### Approach

Merge the two sorted arrays
Add the remaining elements from nums1, if any
Add the remaining elements from nums2, if any
Find the median
If there are odd number of elements I just need to return the middle element
Otherwise I just need to find the average of the two middle elements
Complexity

### Time complexity

$O(n+m)$ where n is the first list and m is teh second

### Space complexity

$O(n+m)$ where n is the first list and m is teh second

### Code

```cpp []
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Merge the two sorted arrays
        vector<int> merged;
        int i = 0, j = 0;
        while (i < nums1.size() && j < nums2.size()) {
            if (nums1[i] <= nums2[j]) {
                merged.push_back(nums1[i++]);
            } else {
                merged.push_back(nums2[j++]);
            }
        }
        // Add remaining elements from nums1, if any
        while (i < nums1.size()) merged.push_back(nums1[i++]);
        // Add remaining elements from nums2, if any
        while (j < nums2.size()) merged.push_back(nums2[j++]);

        // Find the median
        int total = merged.size();
        if (total % 2 == 1) {
            // Odd number of elements: return middle element
            return merged[total / 2];
        } else {
            // Even number of elements: average of two middle elements
            return (merged[(total - 1) / 2] + merged[total / 2]) / 2.0;
        }
    }
};
```
---

## Optimized and hard solution
![Benchmark](/assets/blog/leetcode/benchmark-4-2.jpg)
### Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I believe that a binary search can achieve a better performance without merging the arrays.

### Approach
<!-- Describe your approach to solving the problem. -->
* partitioning both arrays so always I have as the first array (`num1`) as the shortest array.
* binary search on the smaller array to find the correct partition point.
* median calculation:
    * Odd legnth: take the maximum of the left partition elements
    * Event length: average the max of the left and min of the right.

### Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(log(min(n,m))$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(log(min(n,m))$

### Code
```cpp 
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int n1 = nums1.size(), n2 = nums2.size();
        // Ensure nums1 is the smaller array for efficiency
        if (n1 > n2) return findMedianSortedArrays(nums2, nums1);

        int total = n1 + n2;
        int half = (total + 1) / 2; // Left partition size

        int left = 0, right = n1;
        while (left <= right) {
            int mid1 = left + (right - left) / 2; // Elements from nums1
            int mid2 = half - mid1;               // Elements from nums2

            // Get the boundary elements
            int l1 = (mid1 > 0) ? nums1[mid1 - 1] : INT_MIN; // Left of nums1
            int r1 = (mid1 < n1) ? nums1[mid1] : INT_MAX;    // Right of nums1
            int l2 = (mid2 > 0) ? nums2[mid2 - 1] : INT_MIN; // Left of nums2
            int r2 = (mid2 < n2) ? nums2[mid2] : INT_MAX;    // Right of nums2

            // Check if partitions are correct
            if (l1 <= r2 && l2 <= r1) {
                if (total % 2 == 1) {
                    return max(l1, l2); // Odd case: max of left partition
                } else {
                    return (max(l1, l2) + min(r1, r2)) / 2.0; // Even case: average
                }
            } else if (l1 > r2) {
                right = mid1 - 1; // Too many from nums1
            } else {
                left = mid1 + 1;  // Too few from nums1
            }
        }
        return 0; // Should never reach here with valid input
    }
};
```

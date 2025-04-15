---
title: "4. Median of two sorted arrays"
excerpt: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays."
coverImage: "/assets/blog/leetcode/benchmark-10.jpg"
date: "2025-03-29T08:11:10.652Z"
author:
  name: Salomon Lee
  picture: "/assets/blog/authors/sl.jpeg"
ogImage:
  url: "/assets/blog/leetcode/benchmark-10.jpg"
---

## Problem

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

### Example 1

``` sh
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

### Example 2

``` sh
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

### Example 3

``` sh
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 ```

### Constraints

1 <= s.length <= 20

1 <= p.length <= 20

s contains only lowercase English letters.

p contains only lowercase English letters, `'.'`, and `'*'`.

It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

![Benchmark](/assets/blog/leetcode/benchmark-10.jpg)

### Intuition

Dynamic Programming Approach

- 2D DP table where:

  - dp[i][j] represents whether the substring s[0...i-1] matches the pattern p[0...j-1].

  - Rows (i) correspond to prefixes of s, and columns (j) correspond to prefixes of p.

### Approach

- DP Table Setup:
  - Dimensions: (m+1) x (n+1), where m = s.length() and n = p.length().
  - Extra row/column for empty string/pattern.

- Base Cases:
  - `dp[0][0]` = `true` (empty pattern matches empty string).

  - `dp[i][0]` = `false` for i > 0 (empty pattern can’t match non-empty string).

  - `dp[0][j]` is `true` if `p[0...j-1]` is all `''` (e.g., "" or "**"), false otherwise.

- Transitions:
  - For each cell `dp[i][j]`:
    1. If `p[j-1]` is a letter or `'?'`:
        - Check if `s[i-1]` matches `p[j-1]` (equal if letter, any char if `'?'`).
        - Then, `dp[i][j]` = `dp[i-1][j-1]` (depends on previous match).

    2. If `p[j-1]` is `'*'`:
        - '*' can match:
            - Zero characters: `dp[i][j]` = `dp[i][j-1]` (skip the `'*'`).

            - One or more characters: `dp[i][j]` = `dp[i-1][j]` (use '' to match s[i-1] and keep '' for more).

        - Combine with OR: `dp[i][j] = dp[i][j-1] || dp[i-1][j]`.

### Time Complexity

`O(m * n)`, where `m` is the length of `s` and `n` is the length of `p`. Each cell is computed in `O(1)` time.

### Space complexity

`O(m * n)` for the **DP table**. This can be optimized to `O(n)` using a 1D array by only keeping the previous row, but the 2D version is more readable.

### Code

```cpp []
class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length();
        int n = p.length();
        
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true;
        
        for (int j = 2; j <= n; j++) {
            if (p[j-1] == '*' && dp[0][j-2]) {
                dp[0][j] = true;
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                char curr_s = s[i-1];
                char curr_p = p[j-1];
                
                if (curr_p == '.' || curr_p == curr_s) {
                    dp[i][j] = dp[i-1][j-1];
                } else if (curr_p == '*') {
                    char prev_p = p[j-2];
                    bool zero_occ = dp[i][j-2];
                    bool one_or_more = (prev_p == '.' || prev_p == curr_s) && dp[i-1][j];
                    dp[i][j] = zero_occ || one_or_more;
                }
            }
        }
        
        return dp[m][n];
    }
};
```

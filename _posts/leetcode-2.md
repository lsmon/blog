---
title: "2. Add Two Numbers"
excerpt: "Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to_ `target`.
You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice."
coverImage: "/assets/blog/leetcode/benchmark-2.jpg"
date: "2025-03-22T00:11:10.652Z"
author:
  name: Salomon Lee
  picture: "/assets/blog/authors/sl.jpeg"
ogImage:
  url: "/assets/blog/leetcode/benchmark-2.jpg"
---

## Problem

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. 

### Example 1:

```
Input: `l1 = [2,4,3], l2 = [5,6,4]`

Output: `[7,0,8]`

Explanation: 342 + 465 = 807.
```

### Example 2:
```
Input: `l1 = [0], l2 = [0]`

Output: `[0]`
```

### Example 3:
```
Input: `l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]`

Output: `[8,9,9,9,0,0,0,1]`
```

### Constraints:

The number of nodes in each linked list is in the range `[1, 100]`.

`0 <= Node.val <= 9`

It is guaranteed that the list represents a number that does not have leading zeros.

---

### Intuition

It is appraciated that the this problem already gives the numbers to be added parsed in a list and reversed making the alignment of the addition easier.

### Approach

The idea is get the value of each node on l1 and l2 the problem is returning the result since the addition and computetion of the carryover is simple.
In this code, I created a dummy pointer ptr to store the result and set result as its pointer. Then, I iteratively add the digits of both linked lists by checking if there's a current node for each list (l1 or l2). The while loop continues until neither of the linked lists has any remaining nodes.

### Time complexity:
$O(max(l1,l2))$

### Space complexity:
$O(max(l1,l2))$

``` Cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *result = nullptr;
        int carryOver = 0;
        ListNode *ptr = nullptr;

        while (l1 != nullptr || l2 != nullptr) {
            int currentSum = carryOver + (l1 ? l1->val : 0) + (l2 ? l2->val : 0);
            carryOver = currentSum > 9 ? 1 : 0;
            currentSum = currentSum > 9 ? currentSum - 10 : currentSum;

            ListNode *newNode = new ListNode(currentSum);
            if (result == nullptr) {
                result = newNode;
                ptr = result;
            } else {
                ptr->next = newNode;
                ptr = newNode;
            }

            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }

        if (carryOver > 0) {
            ListNode *newNode = new ListNode(carryOver);
            ptr->next = newNode;
        }
        return result;
    }
};
```

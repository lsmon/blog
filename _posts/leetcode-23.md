---
title: "4. Median of two sorted arrays"
excerpt: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays."
coverImage: "/assets/blog/leetcode/benchmark-23.jpg"
date: "2025-04-03T12:46:10.652Z"
author:
  name: Salomon Lee
  picture: "/assets/blog/authors/sl.jpeg"
ogImage:
  url: "/assets/blog/leetcode/benchmark-23.jpg"
---

## Problem - 23. Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.Merge all the linked-lists into one sorted linked-list and return it.

### Example 1

``` sh
Input: lists = `[[1,4,5],[1,3,4],[2,6]]`

Output: [1,1,2,3,4,4,5,6]
```

``` text
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

### Example 2

``` sh
Input: lists = []
Output: []
```

### Example 3

``` sh
Input: lists = [[]]
Output: []
```

### Constraints

k == lists.length

0 <= k <= 104

0 <= lists[i].length <= 500

-104 <= lists[i][j] <= 104

lists[i] is sorted in ascending order.

The sum of lists[i].length will not exceed 104.

![Benchmark](/assets/blog/leetcode/benchmark-23.jpg)

### Intuition

Merging k sorted lists is like merging multiple sorted arrays, but we’re dealing with linked lists. A min-heap is perfect because it lets us efficiently select the smallest node among the current heads of all lists.


### Approach

Initialize a Min-Heap: Use a priority queue to store pointers to the head nodes of non-empty lists.

Configure it to compare node values, so the smallest value is always at the top.

Build the Result List: Pop the smallest node from the heap.

Add it to the result list.

Push the next node (if any) from the same list into the heap.

Repeat until the heap is empty.

Handle Edge Cases:
If lists is empty or contains only empty lists, return nullptr.

`Why a Min-Heap?`

* Each pop gives us the smallest node in O(log k) time.

* We process each node exactly once, and there are up to 10^4 nodes total.

* This is more efficient than pairwise merging (O(N * k), where N is total nodes) for large k.

### Time Complexity

`N` is the total number of nodes across all lists (up to 10^4).

Heap operations (push/pop) take $O(log k)$ per node.
$$O(N * log k)$$

### Space complexity

The heap stores at most `k` nodes at a time.

The output list doesn’t count toward extra space.
$$O(k)$$


### Code

```cpp []
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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<pair<int, ListNode*>, vector<pair<int, ListNode*>>, greater<pair<int, ListNode*>>> pq;

        for (ListNode* list : lists) {
            if (list) {
                pq.push({list->val, list});
            }
        }
        ListNode dummy(0);
        ListNode* tail = &dummy;

        while (!pq.empty()) {
            auto [val, node] = pq.top();
            pq.pop();

            tail->next = node;
            tail = node;
            if (node->next)
            pq.push({node->next->val, node->next});
        }

        return dummy.next;
    }
};
```

export const dsaTopics = [
    {
        id: 1,
        title: "1. Getting Started",
        description: "Foundations of DSA, Time & Space Complexity.",
        concepts: [
            {
                id: "1-1",
                title: "Analysis of Algorithms",
                theory: "Understanding Big-O notation, time and space complexity trade-offs.",
                diagram: "O(1) < O(log n) < O(n) < O(n log n) < O(n^2)",
                resources: [
                    { name: "Big O Cheat Sheet", link: "https://www.bigocheatsheet.com/", source: "BigOCheatSheet" },
                    { name: "Time Complexity", link: "https://www.geeksforgeeks.org/time-complexity-and-space-complexity-analysis-of-algorithms/", source: "GFG" }
                ],
                problems: [
                    { name: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Nth Fibonacci Number", link: "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/", difficulty: "Easy", platform: "GFG" },
                    { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Recursive Digit Sum", link: "https://www.hackerrank.com/challenges/recursive-digit-sum/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Missing number in array", link: "https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Power of Two", link: "https://leetcode.com/problems/power-of-two/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Power of Three", link: "https://leetcode.com/problems/power-of-three/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Flipping bits", link: "https://www.hackerrank.com/challenges/flipping-bits/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Sqrt(x)", link: "https://leetcode.com/problems/sqrtx/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Square root of a number", link: "https://practice.geeksforgeeks.org/problems/square-root/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Modular Exponentiation", link: "https://www.hackerrank.com/challenges/modular-exponentiation/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Factorial Trailing Zeroes", link: "https://leetcode.com/problems/factorial-trailing-zeroes/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Trailing zeroes in factorial", link: "https://practice.geeksforgeeks.org/problems/trailing-zeroes-in-factorial5134/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Ugly Number", link: "https://leetcode.com/problems/ugly-number/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Ugly Numbers", link: "https://practice.geeksforgeeks.org/problems/ugly-numbers2254/1", difficulty: "Hard", platform: "GFG" },
                    { name: "Perfect Number", link: "https://leetcode.com/problems/perfect-number/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Sum vs XOR", link: "https://www.hackerrank.com/challenges/sum-vs-xor/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Nim Game", link: "https://leetcode.com/problems/nim-game/", difficulty: "Easy", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "2. Arrays",
        description: "Fundamental linear data structures.",
        concepts: [
            {
                id: "2-1",
                title: "Array Basics & Techniques",
                theory: "Static/Dynamic arrays, Two Pointers, Sliding Window, Prefix Sum.",
                diagram: "[Index 0] [Index 1] ... [Index N]",
                resources: [
                    { name: "Array Data Structure", link: "https://www.geeksforgeeks.org/array-data-structure/", source: "GFG" }
                ],
                problems: [
                    { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Key Pair", link: "https://practice.geeksforgeeks.org/problems/key-pair5616/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Stock Buy and Sell", link: "https://practice.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Majority Element", link: "https://leetcode.com/problems/majority-element/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Majority Element", link: "https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Move all zeroes to end of array", link: "https://practice.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Left Rotation", link: "https://www.hackerrank.com/challenges/array-left-rotation/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Merge two sorted arrays", link: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Kadane's Algorithm", link: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Array Manipulation", link: "https://www.hackerrank.com/challenges/crush/problem", difficulty: "Hard", platform: "HackerRank" },
                    { name: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Sort an array of 0s, 1s and 2s", link: "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1", difficulty: "Easy", platform: "GFG" },
                    { name: "New Year Chaos", link: "https://www.hackerrank.com/challenges/new-year-chaos/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trapping Rain Water", link: "https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1", difficulty: "Medium", platform: "GFG" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "3. Strings",
        description: "String manipulation and pattern matching.",
        concepts: [
            {
                id: "3-1",
                title: "String Algorithms",
                theory: "Immutability, Substrings, Palindromes, Anagrams.",
                diagram: "\"H\" -> \"e\" -> \"l\" -> \"l\" -> \"o\"",
                resources: [
                    { name: "String Algorithms", link: "https://www.geeksforgeeks.org/string-algorithms/", source: "GFG" }
                ],
                problems: [
                    { name: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Reverse a String", link: "https://practice.geeksforgeeks.org/problems/reverse-a-string/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Palindrome String", link: "https://practice.geeksforgeeks.org/problems/palindrome-string0817/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Anagram", link: "https://practice.geeksforgeeks.org/problems/anagram-1587115620/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Sherlock and the Valid String", link: "https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Longest Common Prefix in an Array", link: "https://practice.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Alternating Characters", link: "https://www.hackerrank.com/challenges/alternating-characters/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Implement strStr()", link: "https://leetcode.com/problems/implement-strstr/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Length of Last Word", link: "https://leetcode.com/problems/length-of-last-word/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Is Subsequence", link: "https://leetcode.com/problems/is-subsequence/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Longest Distinct characters in string", link: "https://practice.geeksforgeeks.org/problems/longest-distinct-characters-in-string5854/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Longest Palindrome in a String", link: "https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Common Child", link: "https://www.hackerrank.com/challenges/common-child/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "String to Integer (atoi)", link: "https://leetcode.com/problems/string-to-integer-atoi/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Implement Atoi", link: "https://practice.geeksforgeeks.org/problems/implement-atoi/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Smallest window in a string containing all the characters of another string", link: "https://practice.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "4. Linked Lists",
        description: "Dynamic linear data structures.",
        concepts: [
            {
                id: "4-1",
                title: "Singly & Doubly Linked Lists",
                theory: "Pointers, Node structure, Insertion, Deletion, Traversal.",
                diagram: "Head -> [Node] -> [Node] -> Null",
                resources: [
                    { name: "Linked List Basics", link: "https://www.geeksforgeeks.org/data-structures/linked-list/", source: "GFG" }
                ],
                problems: [
                    { name: "Delete Node in a Linked List", link: "https://leetcode.com/problems/delete-node-in-a-linked-list/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Delete without head pointer", link: "https://practice.geeksforgeeks.org/problems/delete-without-head-pointer/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Reverse a linked list", link: "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Finding middle element in a linked list", link: "https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Merge two sorted linked lists", link: "https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Detect Loop in linked list", link: "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Cycle Detection", link: "https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Remove Duplicates from Sorted List", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Intersection Point in Y Shapped Linked Lists", link: "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Add two numbers represented by linked lists", link: "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Linked List Cycle II", link: "https://leetcode.com/problems/linked-list-cycle-ii/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Clone a linked list with next and random pointer", link: "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1", difficulty: "Hard", platform: "GFG" },
                    { name: "Sort List", link: "https://leetcode.com/problems/sort-list/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rotate List", link: "https://leetcode.com/problems/rotate-list/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rotate a Linked List", link: "https://practice.geeksforgeeks.org/problems/rotate-a-linked-list/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "5. Stacks & Queues",
        description: "LIFO and FIFO data structures.",
        concepts: [
            {
                id: "5-1",
                title: "Stack & Queue Operations",
                theory: "Push, Pop, Enqueue, Dequeue, Monotonic Stack.",
                diagram: "Stack: | | <- Top\nQueue: In -> [ ] -> Out",
                resources: [
                    { name: "Stack Data Structure", link: "https://www.geeksforgeeks.org/stack-data-structure/", source: "GFG" },
                    { name: "Queue Data Structure", link: "https://www.geeksforgeeks.org/queue-data-structure/", source: "GFG" }
                ],
                problems: [
                    { name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Parenthesis Checker", link: "https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Balanced Brackets", link: "https://www.hackerrank.com/challenges/balanced-brackets/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Queue using two Stacks", link: "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Min Stack", link: "https://leetcode.com/problems/min-stack/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Get minimum element from stack", link: "https://practice.geeksforgeeks.org/problems/get-minimum-element-from-stack/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Next Larger Element", link: "https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Decode String", link: "https://leetcode.com/problems/decode-string/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Simplify Path", link: "https://leetcode.com/problems/simplify-path/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Asteroid Collision", link: "https://leetcode.com/problems/asteroid-collision/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Castle on the Grid", link: "https://www.hackerrank.com/challenges/castle-on-the-grid/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Maximum of all subarrays of size k", link: "https://practice.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Maximum Rectangular Area in a Histogram", link: "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Basic Calculator", link: "https://leetcode.com/problems/basic-calculator/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "6. Recursion",
        description: "Solving problems by breaking them down.",
        concepts: [
            {
                id: "6-1",
                title: "Recursive Thinking",
                theory: "Base cases, recursive steps, stack overflow, memoization intro.",
                diagram: "Func(n) calls Func(n-1)",
                resources: [
                    { name: "Recursion", link: "https://www.geeksforgeeks.org/recursion/", source: "GFG" }
                ],
                problems: [
                    { name: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "The Power Sum", link: "https://www.hackerrank.com/challenges/the-power-sum/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Power of Two", link: "https://leetcode.com/problems/power-of-two/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Recursive Digit Sum", link: "https://www.hackerrank.com/challenges/recursive-digit-sum/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "K-th Symbol in Grammar", link: "https://leetcode.com/problems/k-th-symbol-in-grammar/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Different Ways to Add Parentheses", link: "https://leetcode.com/problems/different-ways-to-add-parentheses/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Predict the Winner", link: "https://leetcode.com/problems/predict-the-winner/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Decode String", link: "https://leetcode.com/problems/decode-string/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Tower of Hanoi", link: "https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Permutations", link: "https://leetcode.com/problems/permutations/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Permutations of a given string", link: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Subsets", link: "https://leetcode.com/problems/subsets/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "N-Queens", link: "https://leetcode.com/problems/n-queens/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "N-Queen Problem", link: "https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Solve the Sudoku", link: "https://practice.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1", difficulty: "Hard", platform: "GFG" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "7. Sorting & Searching",
        description: "Algorithms to organize and find data.",
        concepts: [
            {
                id: "7-1",
                title: "Sort & Search Algorithms",
                theory: "Binary Search, Merge Sort, Quick Sort, Heap Sort.",
                diagram: "Divide and Conquer",
                resources: [
                    { name: "Sorting Algorithms", link: "https://www.geeksforgeeks.org/sorting-algorithms/", source: "GFG" }
                ],
                problems: [
                    { name: "Binary Search", link: "https://leetcode.com/problems/binary-search/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Binary Search", link: "https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1", difficulty: "Easy", platform: "GFG" },
                    { name: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Ice Cream Parlor", link: "https://www.hackerrank.com/challenges/icecream-parlor/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Guess Number Higher or Lower", link: "https://leetcode.com/problems/guess-number-higher-or-lower/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Peak Index in a Mountain Array", link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Kth smallest element", link: "https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Search in a Rotated Array", link: "https://practice.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Fraudulent Activity Notifications", link: "https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Median of 2 Sorted Arrays of Different Sizes", link: "https://practice.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1", difficulty: "Hard", platform: "GFG" },
                    { name: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "8. Hashing",
        description: "Fast data retrieval using hash functions.",
        concepts: [
            {
                id: "8-1",
                title: "Hash Maps & Sets",
                theory: "Collision resolution, chaining, open addressing.",
                diagram: "Key -> Hash -> Bucket",
                resources: [
                    { name: "Hashing", link: "https://www.geeksforgeeks.org/hashing-data-structure/", source: "GFG" }
                ],
                problems: [
                    { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Intersection of two arrays", link: "https://practice.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Two Strings", link: "https://www.hackerrank.com/challenges/two-strings/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Happy Number", link: "https://leetcode.com/problems/happy-number/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Isomorphic Strings", link: "https://leetcode.com/problems/isomorphic-strings/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Design HashMap", link: "https://leetcode.com/problems/design-hashmap/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Longest consecutive subsequence", link: "https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Sherlock and Anagrams", link: "https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Find All Anagrams in a String", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Sort Characters By Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "4Sum", link: "https://leetcode.com/problems/4sum/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Insert Delete GetRandom O(1)", link: "https://leetcode.com/problems/insert-delete-getrandom-o-1/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Smallest Positive Missing Number", link: "https://practice.geeksforgeeks.org/problems/smallest-positive-missing-number-1587115621/1", difficulty: "Medium", platform: "GFG" }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "9. Trees",
        description: "Hierarchical data structures.",
        concepts: [
            {
                id: "9-1",
                title: "Binary Trees & BST",
                theory: "Traversals (In/Pre/Post/Level), BST properties, Balancing.",
                diagram: "Root -> Left/Right Children",
                resources: [
                    { name: "Binary Tree", link: "https://www.geeksforgeeks.org/binary-tree-data-structure/", source: "GFG" }
                ],
                problems: [
                    { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Height of Binary Tree", link: "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Mirror Tree", link: "https://practice.geeksforgeeks.org/problems/mirror-tree/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Path Sum", link: "https://leetcode.com/problems/path-sum/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Same Tree", link: "https://leetcode.com/problems/same-tree/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Diameter of a Binary Tree", link: "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Tree: Huffman Decoding", link: "https://www.hackerrank.com/challenges/tree-huffman-decoding/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Lowest Common Ancestor of a BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Check for BST", link: "https://practice.geeksforgeeks.org/problems/check-for-bst/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Level order traversal", link: "https://practice.geeksforgeeks.org/problems/level-order-traversal/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Maximum Path Sum between 2 Leaf Nodes", link: "https://practice.geeksforgeeks.org/problems/maximum-path-sum/1", difficulty: "Hard", platform: "GFG" },
                    { name: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "10. Heaps",
        description: "Priority Queue implementation.",
        concepts: [
            {
                id: "10-1",
                title: "Heaps & Priority Queues",
                theory: "Min Heap, Max Heap, Heap Sort, Priority Queue applications.",
                diagram: "Complete Binary Tree satisfying Heap Property",
                resources: [
                    { name: "Heap Data Structure", link: "https://www.geeksforgeeks.org/heap-data-structure/", source: "GFG" }
                ],
                problems: [
                    { name: "Kth Largest Element in a Stream", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Last Stone Weight", link: "https://leetcode.com/problems/last-stone-weight/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "QHEAP1", link: "https://www.hackerrank.com/challenges/qheap1/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Kth largest element in a stream", link: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-a-stream2249/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Jesse and Cookies", link: "https://www.hackerrank.com/challenges/jesse-and-cookies/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Find K Pairs with Smallest Sums", link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Reorganize String", link: "https://leetcode.com/problems/reorganize-string/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Find median in a stream", link: "https://practice.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1", difficulty: "Hard", platform: "GFG" },
                    { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Minimum Cost to Hire K Workers", link: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "11. Graphs",
        description: "Modeling networks and relationships.",
        concepts: [
            {
                id: "11-1",
                title: "Graph Algorithms",
                theory: "BFS, DFS, Topological Sort, Dijkstra, Prim, Kruskal.",
                diagram: "V (Vertices) & E (Edges)",
                resources: [
                    { name: "Graph Data Structure", link: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/", source: "GFG" }
                ],
                problems: [
                    { name: "Find the Town Judge", link: "https://leetcode.com/problems/find-the-town-judge/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "BFS of graph", link: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1", difficulty: "Easy", platform: "GFG" },
                    { name: "DFS of Graph", link: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1", difficulty: "Easy", platform: "GFG" },
                    { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Find the number of islands", link: "https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Roads and Libraries", link: "https://www.hackerrank.com/challenges/torque-and-development/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Topological sort", link: "https://practice.geeksforgeeks.org/problems/topological-sort/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Redundant Connection", link: "https://leetcode.com/problems/redundant-connection/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Word Ladder I", link: "https://practice.geeksforgeeks.org/problems/word-ladder/1", difficulty: "Hard", platform: "GFG" },
                    { name: "Dijkstra: Shortest Reach 2", link: "https://www.hackerrank.com/challenges/dijkstrashortreach/problem", difficulty: "Hard", platform: "HackerRank" },
                    { name: "Alien Dictionary", link: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Alien Dictionary", link: "https://practice.geeksforgeeks.org/problems/alien-dictionary/1", difficulty: "Hard", platform: "GFG" },
                    { name: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", difficulty: "Medium", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "12. Dynamic Programming",
        description: "Optimization through subproblems.",
        concepts: [
            {
                id: "12-1",
                title: "DP Patterns",
                theory: "Knapsack, LCS, LIS, Matrix Chain Multiplication.",
                diagram: "Table Filling / Memoization",
                resources: [
                    { name: "Dynamic Programming", link: "https://www.geeksforgeeks.org/dynamic-programming/", source: "GFG" }
                ],
                problems: [
                    { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Min Cost Climbing Stairs", link: "https://leetcode.com/problems/min-cost-climbing-stairs/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "The Coin Change Problem", link: "https://www.hackerrank.com/challenges/coin-change/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "House Robber", link: "https://leetcode.com/problems/house-robber/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Stickler Thief", link: "https://practice.geeksforgeeks.org/problems/stickler-theif-1587115621/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Coin Change", link: "https://leetcode.com/problems/coin-change/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Coin Change", link: "https://practice.geeksforgeeks.org/problems/coin-change2448/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Longest Increasing Subsequence", link: "https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Longest Common Subsequence", link: "https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Sherlock and Cost", link: "https://www.hackerrank.com/challenges/sherlock-and-cost/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Edit Distance", link: "https://practice.geeksforgeeks.org/problems/edit-distance3702/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "13. Advanced Topics",
        description: "Tries, Segment Trees, etc.",
        concepts: [
            {
                id: "13-1",
                title: "Advanced Data Structures",
                theory: "Trie, Segment Tree, Fenwick Tree, Union Find.",
                diagram: "Complex Trees",
                resources: [
                    { name: "Advanced Data Structures", link: "https://www.geeksforgeeks.org/advanced-data-structures/", source: "GFG" }
                ],
                problems: [
                    { name: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Trie | (Insert and Search)", link: "https://practice.geeksforgeeks.org/problems/trie-insert-and-search0651/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Design Add and Search Words Data Structure", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Word Boggle", link: "https://practice.geeksforgeeks.org/problems/word-boggle4143/1", difficulty: "Medium", platform: "GFG" },
                    { name: "Range Sum Query - Mutable", link: "https://leetcode.com/problems/range-sum-query-mutable/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "The Skyline Problem", link: "https://leetcode.com/problems/the-skyline-problem/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Number of Islands II", link: "https://leetcode.com/problems/number-of-islands-ii/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Contacts", link: "https://www.hackerrank.com/challenges/contacts/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Range Module", link: "https://leetcode.com/problems/range-module/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Falling Squares", link: "https://leetcode.com/problems/falling-squares/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Rectangle Area II", link: "https://leetcode.com/problems/rectangle-area-ii/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Fancy Sequence", link: "https://leetcode.com/problems/fancy-sequence/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Design In-Memory File System", link: "https://leetcode.com/problems/design-in-memory-file-system/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "LFU Cache", link: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "All O`one Data Structure", link: "https://leetcode.com/problems/all-oone-data-structure/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    }
];

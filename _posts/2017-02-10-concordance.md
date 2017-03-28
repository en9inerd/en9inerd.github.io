---
layout: post
title: "Task on C for interview"
date: 2017-02-10 22:07 -05:00
category: Tests
tags: [C/C++, Python, hashtable, task for an interview]
---

One of the companies where I applied for a job, gave me [this]({{ site.github.owner_url }}/concordance#concordance) task for an interview. Task is mainly focused on knowledge of C programming language and data structures.

In my opinion, best solution is by using hash tables, because task involves frequent use of search and insert operations (Hash tables are *O(1)* average and amortized case complexity) of key-value pairs; where key is unique word (string) that gotten from an input document, and value is array of lines (positive integer) from the input document where the word appears.  
My implementation of hash table was based on implementation from [PineWiki by JamesAspnes]("http://www.cs.yale.edu/homes/aspnes/pinewiki/C(2f)HashTables.html?highlight=(CategoryAlgorithmNotes)"). This implementation is quite simple and it is not so good in terms of performance (especially for production), as [jwHash](https://github.com/watmough/jwHash).
Also, I implemented the task on C++ and Python for myself, where I used containers that are already implemented and contained in C++ STL (unordered_map, map and vector) and Python (dict and list).

Fastest implementation turned out to be in C++. Unfortunately, I did not use all the abilities of C. Also, it is not a very good implementation of hash table based on chaining instead of open addressing.

[Big-O Algorithm Complexity Cheat Sheet](http://bigocheatsheet.com/)
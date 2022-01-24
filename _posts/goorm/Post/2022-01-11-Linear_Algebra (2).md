---
title: "goormNLP [2주차 - Linear Algebra (2)]"  
categories:
 - goormNLP
tags:
 - study
 - math
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture 3: Linear combination, Vector equation, Four views of matrix multiplication

### Linear combination

c1**v<sub>1</sub>** + ... + c1**v<sub>p</sub>** is called a **linear combination** of **v<sub>1</sub>**, ... , **v<sub>p</sub>** with **weights or coefficients** c<sub>1</sub>**, ... , **c<sub>p</sub>.

- The weights in a linear combination can be <u>any real numbers, including zero</u>.

### Span

- Definition: Span {V1, ..., Vp} is defined as **the set of all linear combinations of V1, ... , Vp**.
    Span is also called the **sub set of** R<sup>n</sup> **spanned.**



<img src="https://user-images.githubusercontent.com/67947808/148902803-483e7e60-5696-4963-8bb7-71aeab0322e0.png" alt="image" style="zoom: 25%;" />

<img src="https://user-images.githubusercontent.com/67947808/148902982-c99bc511-f0c4-49a4-a1b6-6dc7767e711e.png" alt="스크린샷 2022-01-11 오후 4 57 14" style="zoom:67%;" />

- b가 span 안에 있으면 O -> 해가 존재함.
- b가 span 안에 없으면 X -> 해가 존재 하지 않음.



### Matrix Multiplications as Column Combinations

- Left matrix: **bases**, Right matrix: **coefficients**

![스크린샷 2022-01-11 오후 5 00 01](https://user-images.githubusercontent.com/67947808/148903350-073b884a-1f84-49b3-86ea-fff5c3c95fb1.png)

### Matrix Multiplications as Row Combinations

- Left matrix: **coefficients**, Right matrix: **bases**

<img src="https://user-images.githubusercontent.com/67947808/148903475-b98bb688-0f12-43f4-9432-29900458566c.png" alt="스크린샷 2022-01-11 오후 5 01 01" style="zoom:90%;" />

### Matrix Multiplications as Sum of (Rank-1) Outer Products

- (Rank-1) outer product

![스크린샷 2022-01-11 오후 5 03 47](https://user-images.githubusercontent.com/67947808/148903838-a37c5a29-43f6-4955-bfa1-15adb8f4d5ab.png)

- Sum of (Rank-1) outer products

![스크린샷 2022-01-11 오후 5 04 02](https://user-images.githubusercontent.com/67947808/148903854-4dae8ea0-64bd-453e-9bb7-fbc5b8e1b7d7.png)

=> Sum of (Rank-1) outer products is widely used in machine learning.

- Covariance matrix in multivariate Gaussian.
- Gram matrix in style transfer.

---



## Lecture 4: Linear Independence, Span, Subspace

### Uniqueness of Solution for Ax = b

<img src="https://user-images.githubusercontent.com/67947808/148904257-f88be9d2-5b74-414c-baa0-c3e930961e38.png" alt="스크린샷 2022-01-11 오후 5 07 20" style="zoom:90%;" />

- <u>It is unique</u> when a<sub>1</sub>, a<sub>2</sub>, and<sub>3</sub> are **<u>linearly independent</u>**.
선형 독립 --> 해가 1개 존재.

- <u>Infinitely many solutins</u> exist when  a<sub>1</sub>, a<sub>2</sub>, and<sub>3</sub> are **<u>linearly dependent</u>**.
선형 의존 --> 해가 무수히 존재.

<img src="https://user-images.githubusercontent.com/67947808/148904707-00c734be-3854-4a28-807e-7ac9b1767c73.png" alt="스크린샷 2022-01-11 오후 5 10 29" style="zoom:80%;" />

- if <u>at least one</u> such **V**<sub>j</sub> is found, then {V1, ... , Vp} is **linearly dependent.**
- if <u>no</u> such **V**<sub>j</sub> is found, the {V1, ... , Vp} is **linearly independent.**



- **A linearly dependent vector does not increase Span ! **



### Span and Subspace

- Definition: A **subspace** *H* is defined as a subset of **R**<sup>n</sup> closed under linear combination.

In fact, a subspace is **<u>always represented as Span {V1, ... , Vp}</u>**



### Basis of a Subspace

- Definition: A basis of a sub space *H* is a set of vectors that satisfies both of the following:
    1. Fully spans the given subspace *H*.
    1. Linearly independent.

### Column Space of Matrix

- Definition: The **column space** of a matrix A is the subspace spanned by the columns of A.
    - We call the column spac eof A as **Col A**. 

<img src="https://user-images.githubusercontent.com/67947808/148906500-f23d383c-7637-417d-8cef-419023b19cf1.png" alt="스크린샷 2022-01-11 오후 5 23 13" style="zoom:85%;" />

`What is dim Col A? ==> 2`



<img src="https://user-images.githubusercontent.com/67947808/148906682-710c8d07-f08e-4bd8-ba7b-6f1b99194729.png" alt="스크린샷 2022-01-11 오후 5 24 22" style="zoom:85%;" />

`What is dim Col A? ==> 2`



### Rank of Matrix

- Definition: The **rank** of a matrix A, denoted by **rank A**, is the dimension of the column space of A:
    - rank A = **dim** Col A.

<img src="https://user-images.githubusercontent.com/67947808/148906983-d3add804-4244-4c7e-a143-a43893fb3cad.png" alt="스크린샷 2022-01-11 오후 5 26 22" style="zoom:80%;" />

---
title: "goormNLP [2주차 - Linear Algebra (3)]"  
categories:
 - goormNLP
tags:
 - study
 - math
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture 5: Linear transformation



### Transformation

- Domain (정의역): Set of all the possible values of *x*.
- Co-domain (공역): Set of all the possible values of *y.*
- Image: a mapped output *y*, given *x.*
- Range (치역): Set of all the output values mapped by each *x* in the domain.

=> the output mapped by a particular *x* is **uniquely determined**.

<img src="https://user-images.githubusercontent.com/67947808/149084633-49ff8772-f313-4825-8327-05beb9d66023.png" alt="스크린샷 2022-01-12 오후 4 42 16" style="zoom:85%;" />



### Linear Transformation



- Definition: A transformation (or mapping) **T** is **linear** if:

<img src="https://user-images.githubusercontent.com/67947808/149084793-c38fde5e-a09f-402e-9f83-604bea3b3431.png" alt="스크린샷 2022-01-12 오후 4 43 32" style="zoom:85%;" />



<img src="https://user-images.githubusercontent.com/67947808/149084994-d82a6ff2-96b8-47cd-80da-be55883c4e8d.png" alt="스크린샷 2022-01-12 오후 4 44 56" style="zoom:85%;" />

- standard matrix

the matrix **A** is called the **standard matrix** of the linear transformation *T*

<img src="https://user-images.githubusercontent.com/67947808/149085295-759da393-ab8c-47ee-b47b-5d362eef380a.png" alt="스크린샷 2022-01-12 오후 4 47 01" style="zoom:85%;" />

### ONTO and ONE-TO-ONE

1. ONTO

<img src="https://user-images.githubusercontent.com/67947808/149085612-8925076d-6bc5-49cb-be48-994500cd2549.png" alt="스크린샷 2022-01-12 오후 4 49 20" style="zoom:85%;" />

2. ONE-TO-ONE

<img src="https://user-images.githubusercontent.com/67947808/149085686-c585e831-57ec-4d51-b332-66d1ba7a24c8.png" alt="스크린샷 2022-01-12 오후 4 49 53" style="zoom:85%;" />



<img src="https://user-images.githubusercontent.com/67947808/149085930-3dad2ad5-21e2-4dcf-84aa-42c1362ea826.png" alt="스크린샷 2022-01-12 오후 4 51 52" style="zoom:67%;" />



example

<img src="https://user-images.githubusercontent.com/67947808/149086046-f5d0dfa1-766f-4394-b2b4-35c779c73c83.png" alt="스크린샷 2022-01-12 오후 4 52 51" style="zoom:85%;" />

<img src="https://user-images.githubusercontent.com/67947808/149086120-1d6464a4-5586-4c93-8b8a-2fd8d7d6cca2.png" alt="스크린샷 2022-01-12 오후 4 53 23" style="zoom:85%;" />

---

## Lecture 6: Least Squares



- The number **u**<sup>T</sup>**v** is called the **inner product ** or **dot product** of **u** and **v**, and it is written as:

<img src="https://user-images.githubusercontent.com/67947808/149086562-f62eea94-2685-43e8-a9b0-4b8e5a740bb9.png" alt="스크린샷 2022-01-12 오후 4 56 22" style="zoom:80%;" />

- Properties of Inner Product:

<img src="https://user-images.githubusercontent.com/67947808/149086682-9838578e-e872-4584-8b2f-7d01cebb2595.png" alt="스크린샷 2022-01-12 오후 4 57 08" style="zoom:80%;" />

- Vector Norm (벡터의 길이)

The **length** (or **norm**) of **v** is the non-negative scalar ||**v**|| defined as the square root:

<img src="https://user-images.githubusercontent.com/67947808/149087030-65871ec0-a52a-4461-8b11-7b6dace23010.png" alt="스크린샷 2022-01-12 오후 4 59 35" style="zoom:80%;" />

- Unit vector (단위 벡터)

A vector whose **length** is *1* is called a **unit vector**.

Normalizing a vector: Given a nonzero vector **v**, if we divide it by its length, we obtain a unit vector as:

<img src="https://user-images.githubusercontent.com/67947808/149087479-2cde0d21-23e6-424e-8ffa-b97df6cf02c3.png" alt="스크린샷 2022-01-12 오후 5 03 04" style="zoom:80%;" />

**u** is in the <u>same direction</u> as **v**, but <u>its length is 1.</u>



- Distance between Vectors in R<sup>n</sup>

<img src="https://user-images.githubusercontent.com/67947808/149087744-8bd46f81-3cde-4265-9820-d3902ffd798e.png" alt="스크린샷 2022-01-12 오후 5 04 54" style="zoom:80%;" />

<img src="https://user-images.githubusercontent.com/67947808/149087774-14f364ce-8cca-454a-9908-95a25b623ab3.png" alt="스크린샷 2022-01-12 오후 5 05 07" style="zoom:80%;" />

![스크린샷 2022-01-12 오후 5 06 24](https://user-images.githubusercontent.com/67947808/149087970-562477ed-8225-4165-82c4-1a0060b180ff.png)



- Inner Product and Angle Between Vectors

Inner product between **u** and **v** can be rewritten using their norms and angle:

<img src="https://user-images.githubusercontent.com/67947808/149088259-cef58cda-7756-41ee-8b69-37575446fdeb.png" alt="스크린샷 2022-01-12 오후 5 08 24" style="zoom:80%;" />




- Orthogonal Vectors

<img src="https://user-images.githubusercontent.com/67947808/149088459-02c8b58e-b4f1-4020-afc4-b63f347b7f00.png" alt="스크린샷 2022-01-12 오후 5 09 56" style="zoom:80%;" />

- **Back to Over-Determined System**

<img src="https://user-images.githubusercontent.com/67947808/149088711-ab8aef45-c899-4bdd-beeb-70dece19b6cd.png" alt="스크린샷 2022-01-12 오후 5 11 47" style="zoom:80%;" />



- Least Squares: Best Approximation Criterion

<img src="https://user-images.githubusercontent.com/67947808/149088894-d077863f-2ea1-4118-867a-240782f01dcc.png" alt="스크린샷 2022-01-12 오후 5 13 04" style="zoom:80%;" />

<img src="https://user-images.githubusercontent.com/67947808/149089158-49a147c1-3671-4ecc-908e-14a435adfdd7.png" alt="스크린샷 2022-01-12 오후 5 14 51" style="zoom:80%;" />

- Geometric Interpretation of Least Squares.

<img src="https://user-images.githubusercontent.com/67947808/149089603-c3aa566c-5cc0-4fff-8e84-45be4b78149e.png" alt="스크린샷 2022-01-12 오후 5 17 45" style="zoom:70%;" />

- Normal Equation

<img src="https://user-images.githubusercontent.com/67947808/149089942-c80f51f3-2d9f-482f-b7b3-f5813cc88b37.png" alt="스크린샷 2022-01-12 오후 5 20 05" style="zoom:80%;" />


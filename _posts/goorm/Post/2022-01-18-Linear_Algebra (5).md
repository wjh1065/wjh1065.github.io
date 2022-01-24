---
title: "goormNLP [3주차 - Linear Algebra (5)]"  
categories:
 - goormNLP
tags:
 - study
 - math
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture 8: Advanced Eigendecomposition

2022-01-18

저번 포스팅에 고유값(eigenvalue), 고유벡터(eigenvector), 대각행렬(diagonal matrix) ,대각화(diagonalization)를 활용하여 n차 정방행렬의 p제곱을 구하였고, 이번에는 EVD(Eigenvalue-eigenvector Decomposition)에 대한 수업을 진행하였다. EVD는 <u>n by n 정방행렬</u>에 대해서만 적용이 가능하고 **Markov process 과정**을 적용하여 계산하였다.



- Symmetric Matrix
    If Matrix A is *symmetric*, then any two eigenvectors from different eigenspaces are **orthogonal**.
    
    
    
    ![스크린샷 2022-01-18 오후 2 31 03](https://user-images.githubusercontent.com/67947808/149876597-4bdf201b-d425-4bbe-9d8c-2ad4608f13d7.png)
    
    ![스크린샷 2022-01-18 오후 2 31 28](https://user-images.githubusercontent.com/67947808/149876648-6847f861-6f2c-4006-8fef-291207988bfe.png)
    
    
    
    > An n x n matrix A is said to be **orthogonally diagonalizable.**



<img src="https://user-images.githubusercontent.com/67947808/149876771-ad63c63f-a543-403f-b8c0-8522c4f2e7fb.png" alt="스크린샷 2022-01-18 오후 2 32 38" style="zoom:80%;" />

<img src="https://user-images.githubusercontent.com/67947808/149876926-3a90e85d-9768-4f2a-bc69-3d0ac1c2e906.png" alt="스크린샷 2022-01-18 오후 2 34 16" style="zoom:80%;" />





- ex) **Markov Process**
  
    
  
    ![스크린샷 2022-01-18 오후 2 36 26](https://user-images.githubusercontent.com/67947808/149877164-554aa58c-041c-4370-914d-d118f2978a3c.png)

    ![스크린샷 2022-01-18 오후 2 37 12](https://user-images.githubusercontent.com/67947808/149877215-a28c5864-2c8f-4fcb-8605-1c053115dab0.png)
    
    ![스크린샷 2022-01-18 오후 2 37 24](https://user-images.githubusercontent.com/67947808/149877234-feab56b3-3929-409f-9d5b-0dd7d056bf39.png)
    
    
    
    **step 1) eigenvalue 구하기**
    
    
    
    <img src="https://user-images.githubusercontent.com/67947808/149877300-967da64f-0a5a-47d8-91f3-36b823ff80fd.png" alt="스크린샷 2022-01-18 오후 2 38 17" style="zoom:80%;" />
    
    
    
    **step 2) eigenvector 구하기**
    
    
    
    <img src="https://user-images.githubusercontent.com/67947808/149877565-13cadd2b-7232-4993-86e1-c7b2f54eda45.png" alt="image" style="zoom:90%;" />
    
    <img src="https://user-images.githubusercontent.com/67947808/149877584-db5a5d3c-edc0-451a-9d89-7d4a1f8b7cc7.png" alt="image" style="zoom:80%;" />
    
    <img src="https://user-images.githubusercontent.com/67947808/149877611-6abc623a-cd5e-4137-aa59-e12161f5f2b9.png" alt="스크린샷 2022-01-18 오후 2 41 30" style="zoom:85%;" />
    
    
    
    **step 3) RESULT**
    
    
    
    <img src="https://user-images.githubusercontent.com/67947808/149877701-11c881f4-fe47-4dd0-90e3-0cb2cdf3cd35.png" alt="스크린샷 2022-01-18 오후 2 42 34" style="zoom:80%;" />
    
    
    

**본 그림의 출처는 아래와 같음.**

[R 분석과 프로그래밍](https://rfriend.tistory.com/)
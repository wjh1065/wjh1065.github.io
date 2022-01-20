---
title: "goormNLP [3주차 - Linear Algebra (6)]"  
categories:
 - goormNLP
tags:
 - study
 - math
---

# AI 기술 자연어 처리 전문가 양성 3기 [3주차 - Linear Algebra (6)]
# Linear Algebra

## Lecture 8: Advanced Eigendecomposition

2022-01-19

저번 수업 내용을 상기해보면 *n* x *n* matrix *A*가 orthogonally diagonalizable하다면 아래와 같은 식이 성립하게 된다는 것을 알게되었다.

<img src="https://user-images.githubusercontent.com/67947808/150086061-513299b4-d650-4909-9fe5-0ef438e3a839.png" alt="스크린샷 2022-01-19 오후 4 43 15" style="zoom:70%;" />

또한 EVD(고유값 분해)를 Algebraic / Geometric multiplicity 관점으로 바라보았다.

내일 수업에서 보게될 SVD(특이값 분해)를 배우기 전에 오늘은 **Spectral Decomposition**에 대해 공부를 진행하였다.

SVD는 행렬의 스펙트럼 이론을 임의의 직사각행렬에 대해 일반화한 것으로 볼 수 있다. **스펙트럼 이론**을 이용하면 직교 정사각행렬을 고유값을 기저로 하여 대각행렬로 분해할 수 있다.



- **Spectral decomposition**

An *n* x *n* symmetric matrix *A* has the following properties:

1. *A* has *n* **real eigenvalues**, counting multiplicities.
2. The dimension of the eigenspace for each eigen value λ **equals** the multiplicity of λ as a root of the *characteristic equation*.
    **The dimension of the eigenspace** ==> Geometric multiplicity.
    **The multiplicity of λ**                          ==> Algebraic multiplicity.

3. The eigenspaces are mutually orthogonal.
4. **A** is orthogonally diagonalizable.

<img src="https://user-images.githubusercontent.com/67947808/150087635-792eb8c9-d6b4-479b-99ed-4e2a2f51102f.png" alt="스크린샷 2022-01-19 오후 4 54 24" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/150087662-fddc9e8a-823b-40f6-9a85-9472d84ff61e.png" alt="스크린샷 2022-01-19 오후 4 54 37" style="zoom:67%;" />


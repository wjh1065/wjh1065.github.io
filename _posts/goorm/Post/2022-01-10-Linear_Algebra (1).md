---
title: "goormNLP [Linear Algebra & System]"  
categories:
 - goormNLP
tags:
 - study
 - math
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

2022-01-10 (월)
> 머신러닝과 선형대수의 관계

2주차에는 머신/딥러닝에 들어가기에 앞서 Linear Algebra: 선형대수학에 대해서 수업을 진행하였다.

선형대수학은 연립방정식을 손쉽게 풀고자하는 고민으로부터 시작되었다.
머신러닝은 본질적으로는 컴퓨터가 이해할 수 있는 대량의 데이터. 즉 숫자를 이용해 복잡한 계산을 수행하는 것이므로 선형대수학의 수식과 계산 기법을 사용하면 최소한의 타이핑 만으로도 대량의 계산을 손쉽게 컴퓨터에게 지시하는 것이 가능해진다.

## Lecture 1: Elements In Linear Algebra

### Scalar, Vector, Matrix

1. **Scalar**: a single number.
2. **Vector**: an ordered list of numbers.
3. **Matrix**: a two-dimensional array of numbers.
    - Matrix size: 3 x 2 means [3 rows(행) and 2 columns(열)]
    - Row vector: a horizontal vector - 수평
    - Column vector: a vertical vector - 수직

- a vector of n-dimension is usually a **column vector**. `a matrix of the size n x 1`

![스크린샷 2022-01-10 오후 12 07 40](https://user-images.githubusercontent.com/67947808/148713988-140f3c79-2a14-482b-ad67-7a3cbbc64b97.png)

- a row vector is usually written as its **transpose**.

![스크린샷 2022-01-10 오후 12 08 30](https://user-images.githubusercontent.com/67947808/148714037-1b14b09b-c74a-4509-8267-fb3bada46157.png)

- Square matrix ( # rows = # columns ).

- Rectangular matrix ( # rows != columns ).

- A<sup>T</sup>: **Transpose** of matrix ( mirroring across the main diagonal ).

![스크린샷 2022-01-10 오후 12 16 41](https://user-images.githubusercontent.com/67947808/148714568-d180fc44-9982-45fd-bde6-f8995d573d51.png)

- A<sub>2,1</sub> = 3 => ( i , j )-th component of A.
- A<sub>2,:</sub> = [3 4] => i-th **row vector** of A.

---

### Vector/Matrix Add & Mul

- C = A + B : Element-wise **addition.**

- cA : **Scalar multiple** of vector/matrix.

- C = AB  : **matrix-matrix multiplication**

![스크린샷 2022-01-10 오후 12 25 33](https://user-images.githubusercontent.com/67947808/148715076-af6f5378-5531-4137-998b-a3d450131c48.png)


- AB != BA : Matrix multiplication is **NOT** commutative.

![스크린샷 2022-01-10 오후 12 26 54](https://user-images.githubusercontent.com/67947808/148715153-9f881dec-af25-4706-bb4b-38ac3edfbe28.png)

---

### Other Properties.

1. A(B+C) = AB + AC : **Distributive**
2. A(BC) = (AB)C : **Associative**
3. (AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup> : **Property of transpose**

---

## Lecture 2: Linear System

- A **linear equation** in the variables x1, ..., x<sub>n</sub> is an equation that can be written in the form.

`a1x1 + a2x2+ ... + anxn = b`

- The above equation can be written as **a<sup>T</sup>x = b**

![스크린샷 2022-01-10 오후 12 32 02](https://user-images.githubusercontent.com/67947808/148715436-67923e9d-a3fd-4b6d-ae17-d28247cda969.png)

- A system of linear equations (or a **linear system**) is a collection of *one or more linear equations* involving the **same variables**.

`X1, ..., Xn.`

### Linear system example

![스크린샷 2022-01-10 오후 12 35 47](https://user-images.githubusercontent.com/67947808/148715664-6927fa5a-eb65-4128-85c2-d37a68727068.png)

![스크린샷 2022-01-10 오후 12 36 38](https://user-images.githubusercontent.com/67947808/148715697-09eec0d4-006e-434a-a02d-621fa3e845ef.png)

- we solve for x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub> given a new person with his/her *Weight, Height, Is_smoking*.
    we can predict his/her **life-span**.

Step 1. Let's collect all the coefficients on the left and form a matrix.

![스크린샷 2022-01-10 오후 12 38 54](https://user-images.githubusercontent.com/67947808/148715840-614f2962-7f84-45c4-be16-53325f651364.png)

Step 2. Let's form two vectors:

![스크린샷 2022-01-10 오후 12 39 26](https://user-images.githubusercontent.com/67947808/148715874-9fd186e1-0997-4892-b27e-acb90c0d4867.png)

=> Multiple equations can be converted into a **single** matrix equations.

![스크린샷 2022-01-10 오후 12 40 10](https://user-images.githubusercontent.com/67947808/148715925-5c18f20e-6e4a-47ae-93fb-65d58f51f2a7.png)

---

**Identity Matrix**

- **Definition** : An identity matrix is a **square** matrix whose diagonal entries are all **1's**, and all the other entries are **zeros**. 
- Often, we denote it as

![스크린샷 2022-01-10 오후 12 42 44](https://user-images.githubusercontent.com/67947808/148716067-9d7af812-827c-4e1e-b65c-4402c03e6c02.png) 

**Inverse Matrix**

- **Definition** : For a **square** matrix, its inverse matrix A<sup>-1</sup> is defined such that A<sup>-1</sup>A = AA<sup>-1</sup> = I<sub>n</sub>

- For a 2 x 2 matrix, its inverse matrix A<sup>-1</sup> is defined as

![스크린샷 2022-01-10 오후 12 45 02](https://user-images.githubusercontent.com/67947808/148716184-9511e070-bf45-44f2-8b18-bfcf70e1c5d4.png)

- We can now solve A**x** = **b** as follows:

![스크린샷 2022-01-10 오후 12 45 51](https://user-images.githubusercontent.com/67947808/148716230-5913710d-bccd-49d9-a378-15554a26a396.png)

---

Step 4. Solving linear system via inverse matrix.

![스크린샷 2022-01-10 오후 12 47 05](https://user-images.githubusercontent.com/67947808/148716293-6e49c095-1e08-45de-ba29-ded577dc08e0.png)

![스크린샷 2022-01-10 오후 12 47 20](https://user-images.githubusercontent.com/67947808/148716306-9b0acca2-f266-464b-92c9-d6a53bdbdaef.png)

- Now, the life-span can be written as

    (life - span) = **-0.4** * (Weight) + **20** * (Height) **-20** * (Is_smoking).

---

**Non-Invertible Matrix**

if A is invertible, the solution is **uniquely obtained** as x = A<sup>-1</sup>b.

if A is **NOT** invertible, the inverse does not *exist?*

![스크린샷 2022-01-10 오후 12 52 45](https://user-images.githubusercontent.com/67947808/148716618-9ab48170-8d5d-408a-8e9e-09477386a81e.png)

![스크린샷 2022-01-10 오후 12 53 13](https://user-images.githubusercontent.com/67947808/148716650-32e5f132-e522-43d7-bfbd-df7a1f027e3f.png)

**det A ** determines whether A is invertible *(when det A != 0)* or not *(when det A = 0)*.

=> if A is non-invertible, A**x** = **b** will have either **no solutuon** or **infinitely many solutions**.

---

### Rectangular Matrix A in Ax = b

![스크린샷 2022-01-10 오후 12 56 09](https://user-images.githubusercontent.com/67947808/148716803-4a3bbea8-4fbf-41c1-ac4e-0a5a71a14948.png)


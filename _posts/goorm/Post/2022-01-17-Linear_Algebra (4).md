---
title: "goormNLP [3주차 - Linear Algebra (4)]"  
categories:
 - goormNLP
tags:
 - study
 - math
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture 7: Eigendecomposition

2022-01-17

고유값(eigenvalue), 고유벡터(eigenvector)에 대한 <u>정의</u>를 이해하고 <u>값</u>들을 구하였다.

그 후 대각행렬(diagonal matrix) ,대각화(diagonalization)를 활용하여 n차 정방행렬의 <u>p제곱</u>을 구하였다.



> 정방행렬 A에 대하여 Ax = λx (상수 λ) 가 성립하는 0이 아닌 벡터 x가 존재할 때 
> 상수 λ 를 행렬 A의 고유값 (eigenvalue), x 를 이에 대응하는 고유벡터 (eigenvector) 라고 함. 

 

![스크린샷 2022-01-17 오후 4 32 48](https://user-images.githubusercontent.com/67947808/149726517-25f8e133-f092-4c4a-88b4-566223f62550.png)

<img src="https://user-images.githubusercontent.com/67947808/149726646-9536a72f-7083-48a1-a14e-b672435f6aa2.png" alt="스크린샷 2022-01-17 오후 4 33 56" style="zoom:85%;" />



> 행렬의 곱의 결과가 원래 벡터와 **"방향"**은 <u>같고</u>, **"배율"**만 상수 λ 만큼만 비례해서 <u>변한다</u>.



<img src="https://user-images.githubusercontent.com/67947808/149727000-43b20905-7c1e-457e-aba0-1ad5aece8ac6.png" alt="스크린샷 2022-01-17 오후 4 36 45" style="zoom:80%;" />

<img src="https://user-images.githubusercontent.com/67947808/149727034-26906718-5976-475a-88c4-45c51ffb15a6.png" alt="스크린샷 2022-01-17 오후 4 37 01" style="zoom:80%;" />



>eigenvector의 방향은 똑같고(same direction), 크기만 eigenvalue만큼씩 배수가 됨.



<img src="https://user-images.githubusercontent.com/67947808/149727266-f8a7b2a8-2258-4f5b-af09-cb22033c7c1b.png" alt="스크린샷 2022-01-17 오후 4 38 58" style="zoom:80%;" />

<img src="https://user-images.githubusercontent.com/67947808/149727382-7c88c62e-3b87-4ad8-ab12-a85539bfc89a.png" alt="스크린샷 2022-01-17 오후 4 39 55" style="zoom:80%;" />



> 고유값과 고유벡터를 구하는 순서는, **먼저 고유값을 구하고나서**, 나중에 Gauss 소거법 사용하여 고유값에 대응하는 고유벡터를 구함.



<img src="https://user-images.githubusercontent.com/67947808/149727691-e03462e3-3025-4faf-b416-c16ac7e30e91.png" alt="스크린샷 2022-01-17 오후 4 42 15" style="zoom:80%;" />

<img src="https://user-images.githubusercontent.com/67947808/149727710-fa7fbac0-94dc-43f3-b90b-50467afe0359.png" alt="스크린샷 2022-01-17 오후 4 42 22" style="zoom:80%;" />

---

<img src="https://user-images.githubusercontent.com/67947808/149728001-04c1ded9-7189-4e12-9dfc-3fbf15177fd6.png" alt="스크린샷 2022-01-17 오후 4 44 31" style="zoom:80%;" />



> 대각성분을 제외한 모든 성분이 0인 행렬을 대각행렬(diagonal matrix), 적절한 기저변환을 통하여 주어진 행렬을 대각행렬로 변환하는 것을 대각화(diagonolization)이라 함.



![스크린샷 2022-01-17 오후 4 46 17](https://user-images.githubusercontent.com/67947808/149728224-6ea7600c-b6f5-4378-b748-63fe41491d6d.png)

<img src="https://user-images.githubusercontent.com/67947808/149728290-9c6d48f0-cb73-4fea-af30-80ce9e8d5b95.png" alt="스크린샷 2022-01-17 오후 4 46 47" style="zoom:80%;" />

<img src="https://user-images.githubusercontent.com/67947808/149728322-120eac70-9b9d-42b4-9322-dbd78b6968b5.png" alt="스크린샷 2022-01-17 오후 4 46 59" style="zoom:80%;" />



> **고유값과 고유벡터를 이용한 n차 정방행렬의 p제곱의 정리를 이용하면 p가 매우 크더라도 연산량을 줄여서 쉽게 p제곱을 구할 수 있음**.



**본 그림의 출처는 아래와 같음.**

[출처 주소](https://rfriend.tistory.com/)
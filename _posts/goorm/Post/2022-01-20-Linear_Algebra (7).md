---
title: "goormNLP [Singular Value Decomposition]"  
categories:
 - goormNLP
tags:
 - study
 - math
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture 9: Singular Value Decomposition

2022-01-20

지금까지 배웠던 선형대수 개념을 이용하여 EVD(고유값 분해)를 진행하였다. 

EVD는 정방행렬에 대해서만 적용이 가능하고 이번에 배운 SVD(특이값 분해)는 직사각행렬에 폭넓게 사용이 가능하다. 

SVD는 저번 포스팅에 올린 Spectral decomposition을 이용하면 직사각행렬을 고유값을 기저로하여 대각행렬로 분해할 수 있다.



- SVD (Singular Value Decomposition)



<img src="https://user-images.githubusercontent.com/67947808/150263278-db454564-2ae9-4778-b748-7d03808872df.png" alt="스크린샷 2022-01-20 오전 11 49 35" style="zoom:80%;" />



- U = [u_1, u_2, ... , u_k+1, ... , u_m]는 **AA<sup>T</sup>**를 고유값분해로 직교대각화하여 얻은 <u>m by m</u> orthogonal matrix이며, 특히 [u_1, u_2, ... , u_k]를 **left singular vectors**라고 함.
- V = [v_1, v_2, ... , v_k+1, ... , v_n]는 **A<sup>T</sup>A**를 고유값분해로 직교대각화하여 얻은 <u>n by n</u> orthogonal matrix이며, 특히 [v_1, v_2, ... , v_k]를 **right singular vectors**라고 함.

<img src="https://user-images.githubusercontent.com/67947808/150264809-8f64cf65-9e4e-4cf2-9bb7-cf761077d2ab.png" alt="스크린샷 2022-01-20 오후 12 04 29" style="zoom:100%;" />

<img src="https://user-images.githubusercontent.com/67947808/150264842-67d0a27d-b77e-4cb2-b18c-d4deba14fc05.png" alt="스크린샷 2022-01-20 오후 12 04 54" style="zoom:80%;" />

![스크린샷 2022-01-20 오후 12 04 54](https://user-images.githubusercontent.com/67947808/150264842-67d0a27d-b77e-4cb2-b18c-d4deba14fc05.png)

![스크린샷 2022-01-20 오후 12 06 15](https://user-images.githubusercontent.com/67947808/150264962-5f52d2c6-7f6e-4697-9b1c-5d2ed0810732.png)



> 결국 SVD를 계산한다는 것은 AA<sup>T</sup>와 A<sup>T</sup>A의 고유벡터와 고유값을 구하는 것이라는 것을 알 수 있음.



<img src="https://user-images.githubusercontent.com/67947808/150265139-e6c5a1f8-a5b5-486d-9de4-088b9ee25beb.png" alt="스크린샷 2022-01-20 오후 12 08 08" style="zoom:85%;" />

\* 그림 출처 : https://en.wikipedia.org/wiki/Singular_value_decomposition


> 직교행렬 V<sup>T</sup>에 의해서 원 행렬 M이 회전(방향 전환)을 하게 되며, 시그마에 의해서 크기가 달라졌고(scale 변환), 다시 직교행렬 U에 의해서 V<sup>T</sup>에 의한 회전과는 반대로 회전(방향 전환)을 함.



- 고유값분해(EVD)를 통한 대각화의 경우 고유벡터의 방향은 변화가 없고, **크기만 고유값만큼** 변함.
- 특이값분해(SVD)는 **U, V<sup>T</sup>에 의해서 M의 방향이 변하고**, **시그마 특이값(singular values)들 만큼의 크기(scale)가 변했음**을 알 수 있음.



**Reduced Form of SVD**

차원 축소할 때는 reduced SVD를 진행함. full SVD 대비 **reduced SVD는 특이값들 중에서 <u>0인 것들을 제외</u>**하고 SVD를 함.

<img src="https://user-images.githubusercontent.com/67947808/150265797-4b73708c-d44c-419d-887b-545126860bbf.png" alt="스크린샷 2022-01-20 오후 12 14 55" style="zoom:85%;" />

<img src="https://user-images.githubusercontent.com/67947808/150265924-bd356ea3-049d-49af-a7bd-34a42bb23b80.png" alt="스크린샷 2022-01-20 오후 12 16 18" style="zoom: 70%;" />

<img src="https://user-images.githubusercontent.com/67947808/150265933-8c38c001-696f-4364-894f-0fd57400cdec.png" alt="스크린샷 2022-01-20 오후 12 16 23" style="zoom:90%;" />



**example of SVD**

![스크린샷 2022-01-20 오후 12 17 57](https://user-images.githubusercontent.com/67947808/150266055-820e3329-1c9f-4743-b2a5-4e1d1f570648.png)

<img src="https://user-images.githubusercontent.com/67947808/150266061-27d21602-ba62-45e2-bc26-120bbd6e3835.png" alt="스크린샷 2022-01-20 오후 12 18 04" style="zoom:85%;" />

![스크린샷 2022-01-20 오후 12 18 11](https://user-images.githubusercontent.com/67947808/150266074-ed37966e-e296-419c-82cd-f14259dcc762.png)

<img src="https://user-images.githubusercontent.com/67947808/150266082-c1dc2e5c-f4c4-464d-b297-cd35e1ba998e.png" alt="스크린샷 2022-01-20 오후 12 18 19" style="zoom:90%;" />

<img src="https://user-images.githubusercontent.com/67947808/150266122-154b4e7a-8678-46e4-b94e-36cab5770150.png" alt="스크린샷 2022-01-20 오후 12 18 51" style="zoom:85%;" />



**본 그림의 출처는 아래와 같음.**

[R 분석과 프로그래밍](https://rfriend.tistory.com/)
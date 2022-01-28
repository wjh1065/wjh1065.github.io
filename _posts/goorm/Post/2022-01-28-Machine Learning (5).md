---
title: "goormNLP [4주차 - Machine Learning (5)]"  
categories:
 - goormNLP
tags:
 - study
 - machine learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Cross Validation & Dimension Reduction

2022-01-28

지금까지 간단한 데이터를 이용하여 Regression에 대한 실습을 진행하였다.  
본 파트는 훈련한 모델의 성능을 높이기 위한 **Cross Validation** 기법과,  
**Dimension Reduction**을 통해 특정 Feature를 선택하거나 추출하는 기법에 대한 수업을 진행하였다.

지난 학기 수업때 PCA 기법을 단지 그림과 암기로만 이해를 했었는데,  
지난 주에 배운 Linear Algebra 지식을 활용하니 새로운 시점으로 이해를 하게 되었다. 



## Cross-Validation

- Leave-one-out CV

LOOCV는 ex) 총 100개의 데이터가 있으면, 99개의 Train 데이터와 1개의 Test 데이터로 나눈다.  
그리고 이러한 행위를 총 100번에 대해서 각 데이터들을 무조건 한 번씩 Test 데이터로 설정한다.  
이는 총 100개의 acc 및 loss의 평균을 구하는 방식이다.  

- K-fold CV
K-fold는 K번씩 데이터를 나누는 것이다.

<img src="https://user-images.githubusercontent.com/67947808/151482137-40d3786b-feb7-4b26-ba65-73b2c202f541.png" alt="스크린샷 2022-01-28 오후 12 25 03" style="zoom:67%;" />



## Dimension Reduction

<img src="https://user-images.githubusercontent.com/67947808/151482498-716d83e4-01d2-4420-b7e6-2a2557101dd7.png" alt="스크린샷 2022-01-28 오후 12 29 43" style="zoom:67%;" />

**Benefits of Dimension Reduction**
- Less storage: 데이터의 차원을 줄이니 당연히 용량을 적게 먹음.
- Faster computation: 100,000 dim vs. 10 dim vectors 결과 당연히 10개 차원의 계산 속도가 빠름.

- Noise removal: 더 좋은 performance를 위해 pre-processing를 진행함.

- **2D / 3D representation**: Interactive visual exploration.



**Two Main Techniques**

==> *Feature = Variable = Dimension*



1. Feature **selection**

Selects a subset of the **original variables** as <u>reduced dimensions.</u>

- Widely-used criteria.
- Typically combinatorial optimization problems.
- **greedy methods** are popular.
    - <u>Forward</u> selection: **Empty** set -> **Add** one variable at a time.
    - <u>Backward</u> elimination: **Entire** set -> **Remove** one variable at a time. 




2. Feature **extraction** (<u>MAIN TOPIC</u>)

Each reduced dimension **combines** <u>multiple original dimensions.</u>

<img src="https://user-images.githubusercontent.com/67947808/151483384-daf50fd9-ef0f-42e7-9b9f-e2ea140ffbab.png" alt="스크린샷 2022-01-28 오후 12 41 06" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/151483508-dc94ba59-0c30-461c-ba1f-53a5dfe7ac12.png" alt="스크린샷 2022-01-28 오후 12 42 31" style="zoom:67%;" />

- Represents each <u>reduced dimension</u> as a **linear combination** of original dimensions.

- Naturally capable of mapping new data to the same space.



## Principal Component Analysis (PCA)

- Finds the axis showing the <u>**largest variation**</u>, and <u>**project**</u> all points into this axis.

- Reduced dimensions are **orthogonal**.

- Algorithm: Eigen-decomposition.

<img src="https://user-images.githubusercontent.com/67947808/151483999-efe705e8-0bfb-4c69-942d-8621bf12b814.png" alt="스크린샷 2022-01-28 오후 12 48 12" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/151484091-7d2aa2bb-d6d9-4a05-a566-3a25279a564a.png" alt="스크린샷 2022-01-28 오후 12 49 21" style="zoom:67%;" />



---

[HW14 링크](https://github.com/wjh1065/goormNLP/blob/main/03_Machine_Learning/sol/%5BHW14%5D_Multiple_Logistic_Regression.ipynb)

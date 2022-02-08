---
title: "goormNLP [5주차 - Machine Learning (6)]"  
categories:
 - goormNLP
tags:
 - study
 - machine learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Demensionality Reduction

2022-02-07

황금같은 설 연휴가 지나고 수업도 다시 재개되었다..  
지난시간에는 **Dimension Reduction**을 통해 특정 Feature를 선택하거나 추출하는 기법 중 하나인 PCA에 대한 수업을 진행하였다.  
이번엔 **Multidimensional Scaling (MDS)**에 대한 내용을 리뷰하겠다.  

리뷰에 들어가기에 앞서 왜 ? <u>고차원 데이터를 저차원 데이터로 변환</u>하여 **Visualizing**하는지 말을 이어가겠다.

우리는 3차원 공간에서 살고 있으며, 보고 느낄 수 있는 것들은 1, 2, 3차원이다. 이것이 우리가 태생적으로 가지는 핸디캡이다.  
하지만 머신러닝에서 다루는 차원의 수는 매우 크다. 저번 HW14 리뷰를 기억해보면 무려 10,000개가 넘는 차원을 가지고 있었다.  
그러하여 <u>고차원 공간을 우리가 이해할 수 있는 저차원 공간으로 변환하는 기술을 연구</u>하였고 이를 **Dimensionality reduction**이라 한다.



## Multidimensional Scaling (MDS)

- Main idea
    **Tries to preserve given pairwise distances in low-dimensional space.**

    <img src="https://user-images.githubusercontent.com/67947808/152933582-1c1f60c3-0218-4424-8d30-f95bebf856b3.png" alt="스크린샷 2022-02-08 오후 3 50 50" style="zoom:67%;" />

    - <u>Metric MDS</u>
    Preserves given **distance values** 
    - <u>Nonmetric MDS</u>
    When you only know/care about ordering of distances
    Preserves only the **orderings** of distance values.



- Algorithm: gradient-decent type. 



## MDS - Sammon's mapping.

- Sammon's mapping
    <img src="https://user-images.githubusercontent.com/67947808/152933627-183de09d-4cc1-478e-8536-af335488b817.png" alt="스크린샷 2022-02-08 오후 3 51 17" style="zoom:67%;" />
    - Local version of MDS
    - Down-weights errors in large distances.



- Algorithm: gradient-decent type. 



## Practice

- MNIST는 가장 간단한 이미지 데이터셋이며, 28 x 28 pixel의 숫자 이미지로 구성되어 있다.

<img src="https://user-images.githubusercontent.com/67947808/152934747-46ff3ff0-1c71-4329-bfe0-5b24b027fa39.png" alt="스크린샷 2022-02-08 오후 3 59 28" style="zoom: 80%;" />

- 각각의 이미지는 28 x 28 pixel들을 가지고 있기 때문에 관찰자는 28 x 28 = 784 차원의 벡터를 확인할 수 있다.  
하지만 784 차원은 매우 많은 벡터들이 존재하고 MNIST가 차지하는 공간은 매우 작다.

- 수 많은 이미지들 중에 숫자를 나타내는 이미지는 매우 드물고, 그렇기 때문에 차지하는 차원도 더 작을 것이다.  
  이 매우 드문 것들을 더 작은 차원으로 내리려는 노력을 하기 위해 수업 때 배운 PCA 방법을 사용할 것이다.



**step 1)** 42,000개의 데이터 중 15,000개를 가지고 진행 함.

**step 2)** feature의 개수가 매우 많아 scikit-learn의 StandardScaler를 이용하여 z-score 정규화를 진행 함.

**step 3)** scikit-learn의 PCA 패키지를 사용하여 확인한 결과:

```python
from sklearn import decomposition
pca = decomposition.PCA()
pca.n_components = 2
pca_data = pca.fit_transform(sample_data)
```

<img src="https://user-images.githubusercontent.com/67947808/152935326-4d46c09b-9cc7-4221-a02c-34e806e097fc.png" alt="image" style="zoom:80%;" />

- 784차원에서 PCA를 통해 2차원으로 줄어든 것을 확인할 수 있음.



---

[HW15 링크](https://github.com/wjh1065/goormNLP/blob/main/03_Machine_Learning/sol/%5BHW15%5D_Visualizing_MNIST.ipynb)

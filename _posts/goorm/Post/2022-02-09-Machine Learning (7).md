---
title: "goormNLP [5주차 - Machine Learning (7)]"  
categories:
 - goormNLP
tags:
 - study
 - machine learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Clustering: Unsupervised learning

2022-02-09

지금까지는 input / target variable이 있고 둘 사이의 관계를 잘 설명해주는 **지도학습(supervised learning)**을 진행하였다.  

이번 시간에는 target variable(ground truth)를 모르고, 사용하지 않은 채로 학습을 하는 **비지도학습(unsupervised learning)**의 알고리즘 중 하나인 <u>K-means clustering</u>에 대해서 진행하였다.



## K-means clustering

<img src="https://user-images.githubusercontent.com/67947808/153118762-5f062096-0dfc-4e63-b4c0-f4c15672a479.png" alt="image" style="zoom:67%;" />

- K-means clustering은 분류가 되어있지 않은 데이터들을 다룰 때 사용함.
- <u>미리 정해놓은 개수(K)의 클러스터</u>로 주어진 데이터를 묶어내는 방법론임.

    주어진 데이터들을 **반복적**으로 K개의 클러스터 중 하나로 할당하는 방법을 학습하며 결국 가까운 데이터들끼리 같은 클러스터로 할당됨.



## K-meas algorithm

![image](https://user-images.githubusercontent.com/67947808/153119061-004e9d87-411d-4f5d-8140-eb91e4c87b1e.jpeg)



- K-means clustering은 레이블이 지정되지 않은 데이터를 중심부(centroid)를 기반으로 clustering을 함.

    다음 2가지 step을 반복적으로 수행하면서 이루어짐.
    1. **Data assignment step)**
    for $i$ = 1 to $m$
    $c^i$ : index (from 1 to K) of cluster centroid closest to $x^i$
    
    각 centroid는 하나의 cluster를 의미함. 모든 데이터들은 각자 자신과 가장 가까운 centroid에 해당하는 cluster에 속하게 됨.
    
    
    
    2. **Centroid update step)**
    for $k$ = 1 to $K$
    $u_k$ : average(mean) of points assigned to cluster $k$
    
    각 data가 cluster에 배정이 되었다면, 이제 cluster에 속해 있는 data들의 평균 위치로 centroid가 다시 갱신됨.



더이상 data들의 cluster가 변하지 않을 때 까지 위의 두 과정을 반복적으로 수행하게 됨.  
이 알고리즘은 반드시 수렴하게 되어있지만 초기화 하는 방식에 따라서 **local optimum**으로 수렴하게 될 수도 있음.

<img src="https://user-images.githubusercontent.com/67947808/153123926-111eef16-061c-4031-a74b-cde05df4263c.png" alt="스크린샷 2022-02-09 오후 1 49 24" style="zoom: 50%;" />



## Choosing the value of K

K-means algorithm은 미리 정해놓은 K의 값에 따라서 작동하게 됨.

가장 좋은 K값을 찾는데에는 여러가지 방법이 있지만 가장 대표적인 **elbow method**를 사용함.

<img src="https://user-images.githubusercontent.com/67947808/153163687-8d4e1975-1fc0-475e-bdaa-de5a168bfe8e.png" alt="image" style="zoom:80%;" />

**K**가 커질수록 cost function이 줄어들게 됨. 무작정 K의 개수를 키운다면 clustering을 하는 의미가 없어짐.  
그래서 cost function이 <u>가장 가파르게 줄어드는 마지막 지점의 K를</u> 선택하게되고 이것이 elbow method임.



---

[HW16 링크](https://github.com/wjh1065/goormNLP/blob/main/03_Machine_Learning/sol/%5BHW16%5D_K_means_Clustering.ipynb)

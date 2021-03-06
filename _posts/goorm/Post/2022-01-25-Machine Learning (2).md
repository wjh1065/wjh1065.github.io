---
title: "goormNLP [Multiple Variable Linear Regression]"  
categories:
 - goormNLP
tags:
 - study
 - machine learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Linear regression with multiple variables

2022-01-25

지난번 포스팅에는 하나의 독립 변수 $x$에 대해서 하나의 종속 변수 $y$ 사이의 관계를 알아보는 simple linear regression에 대해서 실습을 하였다.

이번 포스팅에서는 다양한 입력 변수들을 다루는 **multiple linear regression** 에 대해서 알아볼 예정이다.



## Multiple features

기존 하나의 변수를 가진 simple variable은 아래와 같다.

<img src="https://user-images.githubusercontent.com/67947808/150905514-fe4ab955-0ae5-4420-bcb3-c90c2f56afe2.png" alt="스크린샷 2022-01-25 오후 12 27 04" style="zoom:67%;" />



그리고 이번에 진행한 여러개의 변수를 가진 multiple variables은 아래와 같다.

<img src="https://user-images.githubusercontent.com/67947808/150905595-3587636e-726b-4841-b661-0de24caa8a42.png" alt="스크린샷 2022-01-25 오후 12 27 54" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/150905641-6d97a16b-2500-4b5f-b31b-bfeb041d7846.png" alt="스크린샷 2022-01-25 오후 12 28 23" style="zoom:67%;" />



스케일링 되지않은 데이터를 이용하여 Regression에 적용한다면 loss가 발산이 될 것이다. 

그러므로 모델에 적용 전 데이터들을 **Feature Scaling**을 통해 비슷한 스케일로 조정을 해주어야 한다.

<img src="https://user-images.githubusercontent.com/67947808/150905846-2c2f4cc9-5608-43de-a68c-c4dfef77aab3.png" alt="스크린샷 2022-01-25 오후 12 30 14" style="zoom: 50%;" />

Feature Scaling은 $0<=X<=1$, $-1<=X<=1$과 같은 범위로 나오게 되며,

데이터들의 MIN, MAX를 이용한 방법과 데이터들의 MEAN, STD를 이용한 Normalization이 있음.



**Polynomial Regression**은 항이 여러 개인 가설 함수로 결과를 예측하는 방법이다.  
<u>서로 다른 두 Feature를 하나의 Feature</u>로 만들어서 해당 Feature를 입력으로 2차 이상의 함수를 예측하는 것이다.

<img src="https://user-images.githubusercontent.com/67947808/150906733-e65649a3-d975-47a3-b77c-6fe7a7d455de.png" alt="스크린샷 2022-01-25 오후 12 40 06" style="zoom: 50%;" />

<img src="https://user-images.githubusercontent.com/67947808/150906938-6179f1fc-5d5e-43e5-a27b-c8e9cda2c6d2.png" alt="스크린샷 2022-01-25 오후 12 42 20" style="zoom:50%;" />





## Practice



실제로 <u>예측을 하고자 할 때 보통 하나 이상의 변수</u>들을 고려해야 한다.  
예를 들면 집 값을 예측을 하고자 한다면 <u>집의 크기, 주변의 편의 시설, 위치, 화장실의 개수, 건축 년도 등등 고려해야할 변수들</u>이 많다.

이번 포스팅에서는 다양한 입력 변수 들을 다루는 Multiple linear regression **예시**를 들어 볼 것이다.  
사용한 데이터셋: **자동차의 여러 기술적인 사양들을 고려하여 연비를 예측하는 auto miles per gallon(MPG) dataset.**



![스크린샷 2022-01-25 오후 12 14 08](https://user-images.githubusercontent.com/67947808/150904247-5cddc436-f796-4068-afc8-93ba00b9068f.png)

![Unknown](https://user-images.githubusercontent.com/67947808/150904351-8135aeb4-db27-4afa-8fe3-1b128d58dffa.png)



Accerlation, model_year => 양의 상관관계.  
나머지 => 음의 상관관계.  
위와 같은 상관관계를 통해서 Linear model이 연비를 예측하는데 충분함.  



우리가 찾고자하는 모델: $$\hat{y} = w_0 + w_1x_1 + w_2x_2 + ... + w_dx_d$$.

![스크린샷 2022-01-25 오후 12 18 48](https://user-images.githubusercontent.com/67947808/150904749-02fd2e70-59d5-4b03-9678-5c3abb197007.png)

맨 앞에 $x_0 = 1$을 추가했었기 때문에 $\mathbf{X}$의 맨 왼쪽 행렬은 1로 이루어져 있음. 



cost function: $L(\mathbf{y}, \hat{\mathbf{y}}) = \frac{1}{N} \sum_{i=1}^N (y^{(i)} - \hat{y}^{(i)})^2$



gradient descent를 이용하여 weights를 찾은 결과 loss가 무한대를 넘어가서 오류가 발생함.

=> 입력 변수들 중에 특정 값들이 너무 커서 일어난 결과임. **Feature scaling**을 통해 데이터 전처리를 진행하면 해결됨.

$x' = \frac{x - \min(x)}{\max(x)-\min(x)}$

---

만든 모델이 얼마나 정확한지 알아보기위해, Regression 문제에서 주로 사용되는 두개의 기본 지표를 사용함.

1. Mean absolute error(MAE)

${MAE}(\mathbf{y}, \hat{\mathbf{y}}) = \frac{1}{N} \sum_{i=1}^N \left\vert y^{(i)} - \hat{y}^{(i)}\right\vert$



2. Root mean squared error(RMSE)

${RMSE}(\mathbf{y}, \hat{\mathbf{y}}) =\sqrt{ \frac{1}{N} \sum_{i=1}^N (y^{(i)} - \hat{y}^{(i)})^2}$



---

[HW11 링크](https://github.com/wjh1065/goormNLP/blob/main/03_Machine_Learning/sol/%5BHW11%5D_Multiple_Linear_Regression.ipynb)


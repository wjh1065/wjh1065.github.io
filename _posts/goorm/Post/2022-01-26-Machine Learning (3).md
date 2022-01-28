---
title: "goormNLP [4주차 - Machine Learning (3)]"  
categories:
 - goormNLP
tags:
 - study
 - machine learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Logistic Regression

2022-01-26

지금까지 주어진 데이터와 가장 잘 맞는 직선을 찾는 <u>Linear Regression</u>을 진행했었다. 

이번에는 예측 값이 연속적인 값을 갖지 않는 **Logistic Regression**에 대해서 알아볼 것이다.



## Classification

<img src="https://user-images.githubusercontent.com/67947808/151110845-ed47db3c-044a-476a-bbd1-a5b7d95ed32c.png" alt="스크린샷 2022-01-26 오후 2 52 41" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/151110968-53e6a463-d30c-4d1e-83a0-2567e3715235.png" alt="스크린샷 2022-01-26 오후 2 54 01" style="zoom: 67%;" />



## Logistic function

Logistic regression을 진행하기 위해서는 출력 값을 0과 1의 값으로 맞춰주어야 한다.

이를 위해서 **logistic function** 을 사용했고, Logistic function은 아래와 같다. 

$\sigma(z) = \frac{1}{1 + e^{-z}}$

<img src="https://user-images.githubusercontent.com/67947808/151111302-e49140c7-b8ab-4fac-8cc1-4b3a4c4bafcf.png" alt="image"  />

Logistic regression을 진행할 때 입력 데이터를 $x$, 실제 class 값을 $y$, 예측된 출력 값을 $\hat{y}$라고 하면 $x$는 두가지 변환을 거쳐서 $\hat{y}$가 된다. 

$z = wx + b$
$\hat{y} = \sigma(z)$

위에 있는 식의 목표는 $\hat{y}$가 실제 $y$와 가장 가깝게 되도록 하는 $w$와 $b$를 찾는 것 이다. 



## Logistic loss function

$\sigma(z) = \frac{1}{1 + e^{-z}}$

$\sigma'(z) = \sigma(z) ( 1 - \sigma(z))$

$\frac{\partial{L}}{\partial{\sigma(z)}} = \frac{(y-\sigma(z))}{\sigma(z)(1-\sigma(z))}$



위와 같은 과정을 통해 구한 cost function $L$은 
$L = -y \log(a) + (y-1)\log(1-a)$이 된다. 



만약 $y=1$이라면 $L = -\log(a)$만 남게 되며, 그래프로 표현하면 다음과 같다.  
실제 class가 1일때 예측 값이 0에 가까워지면 cost function 값이 커지고, 1에 가까워지면 cost function 값이 작아지는 것을 알 수 있다. 

![image](https://user-images.githubusercontent.com/67947808/151111896-942a871a-1abd-4a07-a3e2-7bf81a677637.png)



이제 $y=0$이라면 $L = \log(1-a)$ 만 남게 되며, 그래프로 표현하면 다음과 같다.  
예측 값이 실제 값이랑 가까워지면 cost function 값이 작아지고 멀어지면 커지게 됨을 알 수 있다.

![image](https://user-images.githubusercontent.com/67947808/151112076-8f7cfbef-4506-40fc-ae3b-1967e4fe8f71.png)



## Practice

![image](https://user-images.githubusercontent.com/67947808/151112156-4497c2ab-2a8d-4345-91fd-aebb32f6c82a.png)

빨간색 곡선이 Logistic Regression의 모델이다.  
기준값을 정한 후, 그것보다 크면 1, 작으면 0으로 분류를 진행하게 된다.  
아래 사진은 기준값을 0.5로 설정한 예시이다.  

![image](https://user-images.githubusercontent.com/67947808/151112386-0d305db3-0515-477d-a554-776a5db3dca7.png)



---

[HW12 링크](https://github.com/wjh1065/goormNLP/blob/main/03_Machine_Learning/sol/%5BHW12%5D_Logistic_Regression.ipynb)
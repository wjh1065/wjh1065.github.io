---
title: "goormNLP [5주차 - Machine Learning (8)]"  
categories:
 - goormNLP
tags:
 - study
 - machine learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Neural Network

2022-02-10

다음주에 배울 DeepLearning에 앞서, ML 마지막 수업에서는 Neural Network에 대한 공부를 진행하였다.  
초기에는 ML이 DL보다 더 성능이 좋았지만 <u>빅데이터 시대가 오면서 점점 DL의 능력이 입증</u>되고 있는 추세이다.  
GPU도 발전함에 따라 DL의 성능 및 학습은 날로 발전하고 있다.  

DL의 분야는 Game AI, Face Detection & Recognition, Object Detection & Recognition, Image Captioning, Machine Translation 등이 있다.

이러한 DL에 들어가기 전에 DL의 베이스인 **Neural Network**에 대해 리뷰하고자 한다.



## Single & Multi Layer Perceptron

<img src="https://user-images.githubusercontent.com/67947808/153327402-6e57eccd-c856-45f9-91c9-a44ee2ce6861.png" alt="스크린샷 2022-02-10 오전 11 45 36" style="zoom:65%;" />

Single Layer Perceptron은 이전 Practice에서 layer가 1개인 진행한 모델(Logistic Regression)과 유사하다. 

위의 사진처럼 레이어가 한개인 퍼셉트론을 의미하며 <u>AND, OR gate과 같은 리니어한 경우</u>에 사용이 가능하다.  
하지만 Single Layer Perceptron으로는 <u>XOR gate 같은 리니어하지않은 경우</u>에는 사용이 불가능하다. 

그러므로 아래 사진과 같이 two single layer(AND, OR) perceptron을 이용하면 리니어하지않기 때문에 XOR gate 문제를 해결할 수 있다.

<img src="https://user-images.githubusercontent.com/67947808/153327823-00dce5de-17ba-4bb8-9a40-0d226efe0195.png" alt="스크린샷 2022-02-10 오전 11 49 41" style="zoom:65%;" />



## Neural Network Architecture

<img src="https://user-images.githubusercontent.com/67947808/153328010-bcb2a180-4af3-4f5d-b018-fd39d19af2fa.png" alt="스크린샷 2022-02-10 오전 11 51 24" style="zoom:67%;" />

과거에 딥러닝을 접했을때 <u>모듈 별로 어떻게 구분</u>하는지? 고민이 많았기에 위 PPT를 첨부한다.



## Forward Propagation

<img src="https://user-images.githubusercontent.com/67947808/153328449-06830fbb-f291-42ad-8631-c639ab5c1837.png" alt="스크린샷 2022-02-10 오전 11 55 55" style="zoom:65%;" />

- Forward Propagation은 신경망의 입력층부터 출력층까지 <u>순차적으로</u> 변수들을 계산하고 저장하는 것을 말한다.



## Backpropagation using Chain Rule

<img src="https://user-images.githubusercontent.com/67947808/153329239-aa711117-c2ac-4560-8e23-9f32b428238d.png" alt="스크린샷 2022-02-10 오후 12 03 58" style="zoom:65%;" />


- Backpropagation은 출력층부터 <u>반대 방향으로 순차적</u>으로 **편미분**을 수행해가면서 변수들을 계산하는 것을 말한다.

- 역 방향으로 cost function에 대한 편미분을 구하고 얻은 편미분 값을 이용해 w와 b 값들을 얻을 수 있고 다시 Forward Propagation을 진행하는 것을 반복하면서 오차를 낮출 수 있다.

#### Chain Rule

- x라는 변수가 바로 f로 가는게 아니라, x라는 변수가 q = x + y 라는 함수를 거치고, 그 함수가 f = q*z 로 이어진다. 
    즉, x 가 변하면 -> q 가 변하고 -> f 가 변하는 것이다. 따라서 f를 **미분**할 때도, x가 변함에 따라 q가 변하는 것과 그렇게 바뀐 q가 변함에 따라 f가 변함을 같이 고려해 주어야 하므로 다음과 같은 식이 나온다. 이게 바로 **Chain rule(연쇄법칙)**이다.

---



#### 참고자료

- [https://taeu.github.io](https://taeu.github.io/cs231n/deeplearning-cs231n-Backpropagation/)



[HW17 링크](https://github.com/wjh1065/goormNLP/blob/main/03_Machine_Learning/sol/%5BHW17%5D_LR_vs_MLP.ipynb)
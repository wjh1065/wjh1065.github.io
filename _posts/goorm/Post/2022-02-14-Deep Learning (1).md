---
title: "goormNLP [Training Neural Networks]"  
categories:
 - goormNLP
tags:
 - study
 - deep learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Training Neural Networks

2022-02-14

저번 주에 Maching Learning에 기본적인 개념을 다루고 실습을 진행하였다.

본 파트에서는 고전적인 ML 기술이 아닌, 새로운 DL (Deep Learning)에 대한 개념을 다루고자한다.

물론 Kaggle이나 여러 Competition에서 상위권은 앙상블 ML이 대세이지만,  
데이터가 많아질수록 DL 기술의 성장 효과는 ML과 비교가 불가능하다 생각한다.

오늘 딥러닝에 대해 다룰 주제는 아래와 같다

1. Activation functions
2. Batch normalization
3. Optimization methods
4. Ensemble and regularization



## Activation functions

#### Zero Centered

DNN의 Activation Function들의 특징들을 살펴보다 보면  Zero-Centered 라는 개념이 등장한다.

activation function들의 zero-centered의 여부가 neural network의 parameter update 과정에서 어떠한 의미를 갖는지 설명하겠다.

- Activation 함수의 **Output 값이 양수, 음수 모두 가능**하느냐의 의미.
  
    
  
    - zero-centered 하지 않다: parameter들의 gradient들이 서로 다른 부호를 가질 수 없음.  
        => 특정 벡터 공간에 한 번에 접근할 수 없기에 <u>update가 느림</u>.
    - zero-centered 하다: parameter들의 gradient들이 서로 같은 부호, 다른 부호 모두를 가질 수 있음.  
        => 특정 벡터 공간에 한 번에 접글할 수 있기에 <u>update가 빠름</u>. 






#### Sigmoid

<img src="https://user-images.githubusercontent.com/67947808/153813319-9aa056e3-055c-4894-bcd0-910e309c029c.png" alt="스크린샷 2022-02-14 오후 3 43 56" style="zoom:55%;" />

- Squashes numbers to <u>range [0 , 1]</u>

- Historically popular since they have nice interpretation as a saturating "firing rate" of a neuron.



**- Problems:**

- <u>Saturated neurons "kill"</u> the gradients.
- Sigmoid outtputs are <u>not zero-centered</u>.
- exp() is a bit compute expensive.



#### tanh

<img src="https://user-images.githubusercontent.com/67947808/153813622-d04971fd-9c58-46f2-9635-30f364a56ac8.png" alt="스크린샷 2022-02-14 오후 3 46 42" style="zoom:67%;" />

- Squashes numbers to <u>range [-1 , 1].</u>
- **zero centered**. (nice)



**- Problems:**

- still <u>kills gradients when satruated</u>.



#### ReLU

<img src="https://user-images.githubusercontent.com/67947808/153813815-c8c730ae-644c-49a6-a8af-e8258b1617af.png" alt="스크린샷 2022-02-14 오후 3 48 04" style="zoom:67%;" />

**Computes f(x) = max(0,x)**

- <u>Does not saturate</u>.
- Very <u>computationally efficient</u>.
- Actually more biologically plausible than sigmoid.



**- Problems:**

- **Not** zero-centered output.



## Batch Normalization

<img src="https://user-images.githubusercontent.com/67947808/153814183-f2b8ab0c-8d9f-4077-93ab-c850fef001f2.png" alt="스크린샷 2022-02-14 오후 3 51 14" style="zoom:67%;" />

- Improves gradient flow through the network.
- Allows higher learning rates.
- Reduces the strong dependence on initialization.



val / testing시, BatchNorm Layer를 사용했을때 model.eval()로 변경해야함. (BN의 학습된 파라미터 고정하기 위해)



## Optimization Method

<img src="https://user-images.githubusercontent.com/67947808/153830727-69540d4f-9fac-4acc-b4e0-80b7f2f0787a.png" alt="스크린샷 2022-02-14 오후 5 51 12" style="zoom:67%;" />

Neural network의 weight을 조절하는 과정에는 보통 Gradient Descent라는 방법을 사용한다.

vanilla GD는 learning rate만을 가지고 진행을 하였고, 이는 GD를 진행하는데 한계가 있다.  
이 한계를 극복하고자 Momentum 방식을 도입하였다.  

- Momentum 방식은 말 그대로 Gradient Descent를 통해 이동하는 과정에 일종의 **‘관성’**을 주는 것이다.  
    현재 Gradient를 통해 이동하는 방향과는 별개로, 과거에 이동했던 방식을 기억하면서 그 방향으로 일정 정도를 추가적으로 이동하는 방식이다.

#### Adagrad

<img src="https://user-images.githubusercontent.com/67947808/153833628-f47a6483-61e8-4a65-84f3-8106440b5934.png" alt="스크린샷 2022-02-14 오후 6 08 45" style="zoom:67%;" />

- Adagrad는 변수들을 update할 때 각각의 변수마다 step size를 다르게 설정해서 이동하는 방식.

- 지금까지 많이 변화하지 않은 변수들은 step size를 크게 하고,  
    지금까지 많이 변화했던 변수들은 step size를 작게 하자 라는 기본적인 아이디어이다.

#### RMSProp

<img src="https://user-images.githubusercontent.com/67947808/153834221-643e7147-0106-416e-a5b9-76e298ed9a83.png" alt="스크린샷 2022-02-14 오후 6 12 37" style="zoom: 67%;" />

- RMSProp은 Adagrad의 단점을 해결하기 위한 방법이다.  
    Adagrad의 식에서 gradient의 제곱값을 더해나가면서 구한 $G_t$ 부분을 합이 아니라 지수평균으로 바꾸어서 대체한 방법이다.

#### Adam

<img src="https://user-images.githubusercontent.com/67947808/153834610-756091b8-358b-4a89-bee0-18266ccbaa0c.png" alt="스크린샷 2022-02-14 오후 6 14 59" style="zoom:67%;" />

- 방향을 중심으로 한 <u>Momentum</u> 계열과 보폭을 중심으로 한 <u>Ada</u> 계열이 합쳐져, 보폭도, 방향도 적절하게 조절하는 방법이다.



**All optimization methods have Learning Rate as a hyperparameter.**



## Ensemble and regularization

#### Ensemble

Train multiple independent models => At test time average their results.  
**=> Enjoy 2% extra performance.**



####  L1 L2 Regularization

- 가중치의 성장을 제한하여 기존 학습에 큰 영향을 끼칠 수 있는 데이터를 지양하겠다는 의미.



**L1** : 가중치의 크기에 상관없이 상수 값을 뺌. 대체적으로 불필요한 가중치의 수치를 0으로 만들도록 하는 방향으로 적용함.

=> 중요한 가중치만을 취하기 때문에 sparse feature에 대한 모델을 구성하는데 적합함.



**L2** : 가중치의 값을 이용함. 노이즈가 있는 데이터에 대한 학습을 진행할 때 사용함.

=> 선형 모델의 일반화에 좋음.



#### Dropout

<img src="https://user-images.githubusercontent.com/67947808/153836241-629299f2-d079-4de3-8ad8-dbc1c4ef6fe8.png" alt="스크린샷 2022-02-14 오후 6 24 59" style="zoom:67%;" />


- 네트워크의 유닛의 일부만 동작하고 일부는 동작하지 않도록 하는 방법. <u>0.5 is common</u>.



#### Data augmentation

<img src="https://user-images.githubusercontent.com/67947808/153836552-0be0d451-999e-4f3f-9087-f658c471845f.png" alt="스크린샷 2022-02-14 오후 6 26 42" style="zoom:67%;" />

- 갖고 있는 데이터셋을 여러 가지 방법으로 augment(증강)하여 실질적인 학습 데이터셋의 규모를 키울 수 있는 방법.
  
    - Mirroring
    - Random Cropping
    - Rotation
    - Shearing
    - Local wraping
    - ...



#### 참고자료

- [https://shuuki4.github.io](https://shuuki4.github.io/deep%20learning/2016/05/20/Gradient-Descent-Algorithm-Overview.html)



[HW1.1 링크](https://github.com/wjh1065/goormNLP/blob/main/05_Deep_Learning/sol/%5BHW1%5DPytorchTutorial.ipynb)


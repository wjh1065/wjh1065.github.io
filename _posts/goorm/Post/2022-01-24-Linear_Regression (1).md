---
title: "goormNLP [4주차 - Linear Regression (1)]"  
categories:
 - goormNLP
tags:
 - study
 - regression
use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Linear regression with one variable

2022-01-24

Linear regression을 <u>one variable일 때의 Cost function, Gradient descent</u>에 대한 이론 및 실습을 진행하였다.

Linear regression는 Supervised Learning(지도 학습)이라는 큰 범위 내에 포함되어 있고, 한개 이상의 독립 변수 $X$와 종속 변수 $Y$의 선형 관계를 모델링하는 방법론이라 한다.

Regression Problem은 학부 및 대학원에서도 많이 다뤄본 주제이기에 다소 어렵지 않은 내용이였다.

Gradient descent는 머신/딥러닝 알고리즘에서 중요한 이론 중 하나이며 면접에서도 자주 물어보는 내용 중 하나이다.



## Model representation

### Linear regression

선형 관계를 모델링한다는 것은 1차로 이루어진 직선을 구하는 것임.

우리의 데이터를 가장 잘 설명하는 최적의 직선을 찾아냄으로써 독립 변수와 종속 변수 사이의 관계를 도출해 내는 과정임.

![스크린샷 2022-01-24 오후 2 19 18](https://user-images.githubusercontent.com/67947808/150726237-b44ba52c-0abe-453b-8bbb-f76bf4231181.png)

### Cost function

우리의 데이터를 가장 잘 설명하는 직선은 우리가 직선을 통해 <u>예측한 값이 실제 데이터의 값과 가장 비슷해야 함</u>. 우리의 모델이 예측한 값은 위에서 알 수 있듯 $f(x_i)$임. 그리고 실제 데이터는 $y$ 입니다. 실제 데이터(위 그림에서 빨간 점) 과 직선 사이의 차이를 줄이는 것이 우리의 목적이며 그것을 바탕으로 cost function을 아래와 같이 정의함.

**cost function =** $\frac{1}{N}\sum_{i=1}^n (y_i - f(x_i))^2$



EX)

$f(w) = w^2 + 3w -5$

![스크린샷 2022-01-24 오후 2 25 56](https://user-images.githubusercontent.com/67947808/150726811-83cb008d-9d2c-4259-bd8f-745344312b5c.png)

f_prime = $2w+3$ ==> $w$ = $-3/2$

### Gradient Descent

![스크린샷 2022-01-24 오후 2 27 13](https://user-images.githubusercontent.com/67947808/150726913-15732821-cd02-4773-9cd8-7daba1903c20.png)



```python
fpnum = sympy.lambdify(w, fprime)
type(fpnum)

w = 10.0   # starting guess for the min

for i in range(1000):
    w = w - fpnum(w)*0.01 # with 0.01 the step size

print(w)
>>> 1.4999999806458753
```




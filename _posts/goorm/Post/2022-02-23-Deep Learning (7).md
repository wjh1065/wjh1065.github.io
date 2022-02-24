---
title: "goormNLP [6주차 - Deep Learning (7)]"  
categories:
 - goormNLP
tags:
 - study
 - deep learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Self-Supervised Learning

2022-02-23

일반적으로 Supervised Learning은 높은 성능의 모델을 만드는 것이 유리하지만, 수 많은 데이터에 Label을 전부 달아야 한다는 점에서 데이터셋 모으기가 어려우며 제한적이다.  

이와 같은 문제를 해결하고자 나온 방법이 Semi-Supervised Learning (준지도 학습)과 Unsupervised Learning(비지도 학습)이다.

최근 주목받는 연구 방법은 **Self-Supervised Learning** (자기지도 학습)이다.
<u>자기 지도학습이란</u>

1. 연구자가 직접 만든(Pretext) task를 정의.
2. Label이 없는 데이터셋을 사용하여 1의 Pretext task를 목표로 모델을 학습.  
    이때, 데이터 자체의 정보를 Label로 직접적으로 처리하는 것이 아니라, 적당히 변형/사용하여 supervision(지도)로 삼음.
1. 2에서 학습 시킨 모델을 Downstream task에 가져와 weight는 freeze 시킨채로, transfer learning을 수행.
1. 처음에는 Label이 없는 상태에서 직접 supervision을 만들어 학습한 뒤, transfer learning 단계에서는 Label이 있는 ImageNet 등에서 Supervised Learning을 수행하여 2에서 학습 시킨 모델의 성능을 평가.

Self-Supervised Learning의 이름답게 Label 등의 직접적인 supervision이 없는 데이터셋에서 스스로 supervision을 만들어 학습한다.

---

### Simple Self-Supervised Models in Computer vision

- Context Autoencoders : Fill in the blanks of image

<img src="https://user-images.githubusercontent.com/67947808/155448569-5450b846-0f7d-4a60-9f4f-0c7c12128f0d.png" alt="스크린샷 2022-02-24 오전 11 52 34" style="zoom:67%;" />

- RotNet : Predicting Rotation of Images

<img src="https://user-images.githubusercontent.com/67947808/155448587-0f7da7d5-9227-480d-b446-43a505d80f7c.png" alt="스크린샷 2022-02-24 오전 11 52 44" style="zoom:67%;" />

- JigSAW : Solving the jigsaw puzzle

<img src="https://user-images.githubusercontent.com/67947808/155448599-b70d8f0f-404c-4d29-9cac-cc75e4ee8431.png" alt="스크린샷 2022-02-24 오전 11 52 53" style="zoom:67%;" />



### Evaluation Protocol

- Evaluate the pre-trained representations through fine-tuning in a transfer learning setting

<img src="https://user-images.githubusercontent.com/67947808/155449609-f82981de-94f3-4391-9c5d-5d606216ddf2.png" alt="스크린샷 2022-02-24 오후 12 01 38" style="zoom:80%;" />



### What is missing in pre-text tasks ?

- It is **unclear** whether aforementioned pre-text tasks really enhance the representation quality.
- What do we want from the learned representations?
    1. **Invariant mapping** : representations should be stable for an slightly transformed version of an image.
    1. **Semantic Similarity** : semantically related images should be close to each other. 






#### 참고자료

- [https://greeksharifa.github.io](https://greeksharifa.github.io/self-supervised%20learning/2020/11/01/Self-Supervised-Learning/)


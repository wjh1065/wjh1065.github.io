---
title: "goormNLP [6주차 - Deep Learning (6)]"  
categories:
 - goormNLP
tags:
 - study
 - deep learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Generative Adversarial Networks (GAN)

2022-02-22

딥러닝 학습 방법에는 정답지가 있는 Supervised Learning, 정답지가 없는 Unsupervised Learning,  
정답지가 없고 보상 방식인 Reinforcement Learning이 있다.

GAN은 Unsupervised Learning에 속하며, '생성적 적대 신경망'의 약자이다.  
즉, 생성자와 식별자가 서로 경쟁(Adversarial)하며 데이터를 생성(Generative)하는 모델을 말한다.  

---

### Intuition in GAN

<img src="https://user-images.githubusercontent.com/67947808/155444327-15631948-fcda-4693-a30e-10a5613c7f18.png" alt="스크린샷 2022-02-24 오전 11 13 32" style="zoom:67%;" />



- **G**enerator (생성자) : 생성된 z를 받아 실제 데이터와 비슷한 데이터를 <u>만들어</u>내도록 학습함.
- **D**iscriminator (구분자) : 실제 데이터와 생성자가 생성한 가짜 데이터를 <u>구별</u>하도록 학습함.

<img src="https://user-images.githubusercontent.com/67947808/155444612-f66eb525-63fd-4b49-8168-d3a936a1ccd5.png" alt="스크린샷 2022-02-24 오전 11 16 24" style="zoom:67%;" />

**Generator**는 입력 데이터의 분포(distribution)을 알아내도록 학습한다.  
이 분포를 재현하여 원 데이터의 분포와 차이가 없도록 하고 **Discriminator**는 실 데이터인지, 가짜 데이터인지 구별해서 각각에 대한 확률을 추정한다.



### Objective Function of GAN

<img src="https://user-images.githubusercontent.com/67947808/155444905-96f536a8-b741-46ff-ad8c-0dce8ade7bf8.png" alt="스크린샷 2022-02-24 오전 11 19 25" style="zoom:67%;" />

- **D**iscriminator는 <u>'최대화'</u> 하는 방향으로 가게하는 min-max Problem.



<img src="https://user-images.githubusercontent.com/67947808/155444928-5af7b8da-9b5b-43f6-a00e-be0c462bd0b0.png" alt="스크린샷 2022-02-24 오전 11 19 36" style="zoom:67%;" />

- **G**enerator는 <u>'최소화'</u> 하는 방향으로 가게하는 min-max Problem.



**GAN은 결국 주어진 데이터의 확률 분포를 예측하는 모델이다.**



### Extensions of GAN

- DCGAN : Deep Convolutional GAN
- CycleGAN : Unpaired Image-to-Image Translation
- Text2Image : Presents a novel model architecture that generates an image from the text
- StackGAN : Text to Photo-realistic Image Synthesis



#### 참고자료

- [https://ebbnflow.tistory.com](https://ebbnflow.tistory.com/167?category=895675)



[HW6 링크](https://github.com/wjh1065/goormNLP/blob/main/05_Deep_Learning/sol/%5BHW6%5DDCGAN_LCS.ipynb)


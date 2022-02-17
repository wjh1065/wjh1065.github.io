---
title: "goormNLP [6주차 - Deep Learning (3)]"  
categories:
 - goormNLP
tags:
 - study
 - deep learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: CNN Architercutres.

2022-02-16

저번 시간에는 CNN에 대한 기본적인 이론과 특징들을 설명하였다.  
본 파트에서는 <u>CNN이 적용된 여러 논문들의 모델</u>을 살펴보겠다.



**Case Studies**

- LeNet-5
- AlexNet
- VGGNet
- GoogLeNet
- ResNet



## LeNet-5 [LeCun et al., 1998]

LeNet-5은 Yann LeCun이 손으로 적힌 우편 번호를 <u>전통적인 방법보다 효율적으로 확인하기 위해</u> 고안된 **CNN 구조**를 말한다.



**전통적인 방법의 문제점**

1. Hand-designed feature extractor는 제한된 특징만 추출.
2. 너무 많은 매개변수를 포함.  
    (FC layer를 이용하면 너무 많은 가중치를 포함하게 되어 메모리 공간 및 더 많은 훈련셋이 필요해짐)
3. 입력 값의 topology가 완전히 무시됨.



**문자 인식 업무에서 CNN의 효과**

1. 수용 영역 - receptive field
2. 가중치 공유 - shared weight
3. sub-sampling



**모델 구조**

<img src="https://user-images.githubusercontent.com/67947808/154212055-275cc10f-d155-46bd-bef4-a918d318f72d.png" alt="스크린샷 2022-02-16 오후 3 54 35" style="zoom:50%;" />

- Conv filters were 5 x 5, applied at stride 1.
- Subsampling (Pooling) layers were 2 x 2 applied at stride 2  

=> [CONV - POOL - CONV - POOL - FC - FC]



## AlexNet [Krizhevsky et al., 2012]

**AlexNet** : ImageNet Classification with Deep Convilutional Neural Networks  

AlexNet 덕분에 딥러닝, 특히 CNN이 세간의 주목을 받게 되었으며, CNN 구조의 GPU 구현과 Dropout 적용이 보편화된 계기가 있다.



**AlexNet 구조**

<img src="https://user-images.githubusercontent.com/67947808/154212739-e0e6a8d9-fa89-44fd-b15d-4d5445f97c14.png" alt="image" style="zoom:67%;" />

이 모델은 일부가 **Max-Pooling layer**가 적용된 <u>5개의 convolutional layer</u>와, <u>3개의 fully-connected layer</u>로 이루어져 있다.



**AlexNet 특징**

1. ReLU Nonlinearity
2. Training on Multiple GPUs
3. Local Response Normalization (LRN)
4. Overlapping Pooling

**Reducing overfitting**

1. Data Augmentation
2. Dropout



## VGGNet [Simonyan and Zisserman, 2014]

**VGGNet** : Very Deep Convolutional Networks for large-scale image recognition

VGGNet은 19 layer를 지닌 깊은 network로 ILSVRC 2014 대회에서 2등을 차지했다.  
깊이가 깊어짐에 따라 overfitting, gradient vanishing, 연산량 문제가 생기기 때문에 깊이를 증가시키는 것이 쉬운 문제가 아니다.   



**VGGNet 구조**

<img src="https://user-images.githubusercontent.com/67947808/154231226-cc75c8b0-2a41-4b5b-861d-8ff7fb350b4e.png" alt="image" style="zoom:67%;" />

**VGGNet 특징**

- Small filters, Deeper networks
    8 layers (AlexNet) ==> 16 - 19 layers (VGG16Net)
- Only 3 x 3 CONV, stride 1, pad 1
    => Stack of three 3 x 3 conv (stride 1) layers has same effective receptive field as one 7 x 7 conv layer.
    => fewer paramters.
- 2 x 2 Max Pool, stride 2

- No Local Response Normalisation (LRN)

## GoogLeNet [Szegedy et al., 2014]

**GoogLeNet : ** Going deeper with convolutions

GoogLeNet은 **Inception block**을 적용한 CNN 모델이며 22층을 가진 deep neural network이다.  
neural network는 깊이와 넓이가 증가할 수록 높은 정확도를 얻을 수 있지만, parameter의 수가 기하급수적으로 증가하게 되거나, 메모리 사용량이 증가하게 된다. 

이러한 단점을 해결하고자, **Inception block**을 적용하여 기존 AlexNet보다 정확도는 뛰어나지만  parameter 수가 12배 적은 모델을 구축하게 된다.

**GoogLeNet 구조**

<img src="https://user-images.githubusercontent.com/67947808/154233313-8c5ff517-d4ce-4ec8-bb1d-8fd28213a0f9.png" alt="image" style="zoom:67%;" />

**GoogLeNet 특징**

- 22 layers
- Efficient "Inception" module
- No FC layers
- Only 5 million paramters, 12x less than AlexNet



**Auxiliary classification**

![스크린샷 2022-02-16 오후 6 42 37](https://user-images.githubusercontent.com/67947808/154237718-7f182625-4f2f-4ce1-a82b-11524159d667.png)


훈련을 잘하도록 도와주는 보조 역할.

Neural network가 깊어질수록 vanishing gradient 문제가 생기기 때문에, Auxiliary classification을 사용함.  
classification의 문제를 해결하는 Neural Network는 softmax를 맨 마지막 layer에 딱 하나만 놓는데,  
Auxiliary classifier는 중간중간 에 softmax를 두어 중간에서도 Backpropagation을 하게 함.  

이를 통해 gradient가 잘 전달되지 않는 문제 해결함.



**Inception Module**

![스크린샷 2022-02-16 오후 6 21 27](https://user-images.githubusercontent.com/67947808/154233960-a91e984e-2442-4efc-8fce-278313ebed74.png)

- Convolutional network에서 spase 구조를 손쉽게 dense 요소들로 근사화하고 다룰 수 있는 방법을 찾는 것에 근거한다.

Inception module에서 feature map을 효과적으로 추출하기 위해 1x1, 3x3, 5x5의 convolution 연산을 각각 수행하며,  
각 Matrix의 height, width가 같아야 하므로 pooling 연산에서 padding을 추가한다.



- 1 x 1 convolutions

1x1 convolution의 목적은 dimmension reduction을 적용하여 필요한 연산량을 감소시키는 것이다.



Inception Module의 효과

1. 계산 복잡도에서 조절되지 않는 폭발없이, 각 단계에서 unit의 수를 상당히 증가시킬 수 있다.
2. visual 정보가 다양한 규모로 처리되고, 다음 계층은 동시에 서로 다른 규모에서 특징을 추출할 수 있게 된다.




## ResNet [He et al., 2015]

**ResNet : ** Deep Residual Learning for Image Recognition

ResNet은 Residual representation 함수를 학습함으로써 152 layer까지 가질 수 있다.  
이전  layer의 입력을 다음 layer로 전달하기 위해 skip connection을 사용하였고,  
이는 깊은 신경망이 가능하게 한다.



**ResNet 구조**

<img src="https://user-images.githubusercontent.com/67947808/154235958-adfb9117-c8bd-430b-b89b-b7f18963ce1f.png" alt="image" style="zoom:70%;" />

**ResNet 특징**

- Stack residual blocks
- Every residual block has two 3 x 3 conv layers
- double # of filters and downsample spatially using stride 2 ( /2 in each dim)
- Additional conv layer at the beginning
- No FC layers at the end (only FC 1000 to output classes)



**Residual block**

<img src="https://user-images.githubusercontent.com/67947808/154236554-105c7032-a623-4a26-ab16-2b2f9b1f7c35.png" alt="image" style="zoom:67%;" />

기울기 소실/폭발 문제를 해결하기 위해, 입력 x를 layer 이후의 출력 값에 더해주는 **skip connection**을 더해주는 블럭이다.



#### 참고자료

- [https://deep-learning-study.tistory.com](https://deep-learning-study.tistory.com/473?category=963091)
- [https://technical-support.tistory.com](https://technical-support.tistory.com/87)


[HW3 링크](https://github.com/wjh1065/goormNLP/blob/main/05_Deep_Learning/sol/%5BHW3%5DVGGNet.ipynb)


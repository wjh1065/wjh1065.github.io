---
title: "goormNLP [Convolutional Neural Network]"  
categories:
 - goormNLP
tags:
 - study
 - deep learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Convolutional Neural Network (CNN)

2022-02-15

이번 시간에는 Computer Vision에서 가장 많이 쓰이는 딥러닝 모델 **CNN**에 대해 알아보고자 한다.



## CNN 특징

- 인간의 **시신경 구조를 모방**한 기술.
- 이미지를 인식하기 위해 **패턴**을 찾는데 유용함.
- 사람이 여러 데이터를 보고 기억한 후에 무엇인 지 맞추는 것과 유사함. (**filter** 반복)
- 이미지의 **공간 정보**를 유지한 채 학습을 하는 모델



## CNN 원리

#### Filtering : 

The math behind the match.

1. Line up the feature and the image patch.
2. Multiply each image pixel by the corresponding feature pixel.
3. Add them up.
4. Divide by the total number of pixels in the feature (optional)



<img src="https://user-images.githubusercontent.com/67947808/153998354-f8075ff2-0f19-4d24-abf4-3cc904e58ddd.png" alt="image" style="zoom: 40%;" />

<img src="https://user-images.githubusercontent.com/67947808/153998360-1caed3f3-7a78-4259-97d3-be58570b49d6.png" alt="image" style="zoom:40%;" />

<img src="https://user-images.githubusercontent.com/67947808/153998513-dfc1c43a-3c72-4084-a14a-4bf8d06f1b32.png" alt="스크린샷 2022-02-15 오후 2 30 08" style="zoom:70%;" />

- 각 필터에 있는 가중치를 이용하여 feature map을 만듬.



#### Stride :

필터의 이동량을 의미함.  
CNN을 구현할 때 합성곱 계층의 stride는 주로 1로 설정됨.

![스크린샷 2022-02-15 오후 2 44 48](https://user-images.githubusercontent.com/67947808/153999926-e7f51c42-9bb8-43f9-ad4d-1d374ad45e88.png)

왼쪽은 stride가 1인 경우, 오른쪽은 stride가 2인 경우.



#### Padding :

padding은 입력 이미지의 가장자리에 특정 값으로 설정된 픽셀들을 추가함으로써,  
입력 이미지와 출력이미지의 크기를 같거나 비슷하게 만드는 역할을 수행함.



![스크린샷 2022-02-15 오후 2 44 55](https://user-images.githubusercontent.com/67947808/153999934-085b0e6e-a133-495d-96b9-100489512041.png)

왼쪽은 padding을 적용 안한 경우, 오른쪽은 zero-padding을 적용한 경우.



#### Pooling :

Shrinking the image stack.

1. Pick a window size. (usually 2 or 3)
2. Pick a stride. (usually 2)
3. Walk your window across your filtered images.
4. From each window, take the maximum value.

<img src="https://user-images.githubusercontent.com/67947808/153998909-167499c5-a455-474c-b63b-644a6ee5d810.png" alt="image" style="zoom:40%;" />

- 이미지를 구성하는 요소들의 이동 및 회전 등에 의해 CNN의 출력 값이 영향을 받는 문제 완화.
- pooling layer를 통하면 이미지의 크기가 크게 줄어들기 때문에, 모델의 parameter 또한 크게 감소함.



#### Calculate output :

![image](https://user-images.githubusercontent.com/67947808/154001424-f69016f5-fe55-41c1-a358-625c5317ef16.png)

- W = Input size

- F = Kernel size
- P = amount of zero padding
- S = Stride value



example) 

W = [64, 1, 28, 28]  <== [batch_size, channel_size, input_dim, input_dim]  
parameter ==>  `W = 28, F = 7, P = 0, S = 1`

fixed_W = [64, 1, **22, 22**]




#### 참고자료

- [https://rubber-tree.tistory.com](https://rubber-tree.tistory.com/entry/딥러닝-모델-CNN-Convolutional-Neural-Network-설명)



[HW2 링크](https://github.com/wjh1065/goormNLP/blob/main/05_Deep_Learning/sol/%5BHW2%5DTrainingNN.ipynb)


---
title: "Project [DeepSORT Algorithm using Bird Eye View]"  
categories:
 - project
tags:
 - python
 - Opencv
 - object tracking
---

# DeepSORT Algorithm using Bird Eye View

## 1. 추진배경 및 필요성

- 추진배경

    기업체와 회의 결과 해당 업체가 최근 **물체 추적(Object Tracking)**과 관련된 기술이 필요하다는 것을 알게 되었음. 유사한 기술로서, CCTV 영상에서 전시장의 관람객이 어떤 관람물에 관심을 가지는지를 분석하는 기술을 개발하는 것을 목표로 함.
    
- 연구 목표

    이 프로젝트는 전시장 내에 있는 CCTV를 활용하여 관람객과 전시품의 연관성을 분석하여 관람객이 퇴장 시 관람객과 관람물의 연관성 정보들을 관측자에게 제공할 수 있도록 하는 것이 목표임. **딥러닝**을 활용한 물체 검출을 이용하여 관람객을 검출하고, 관람객의 동선을 추적하여 어떤 관람물에 관심을 가지는지를 확인할 수 있는 모델을 만들고자 함. <u>검출 성능을 높이기 위해 1. 다양한 물체 검출 알고리즘을 비교와 2. 물체 검출 및 동선 정보를 시각적으로 잘 전달하기 위한 Bird eye view 변환이 필요함</u>. 또한, 검출된 관람객들과 관람물 사이의 Interaction 분석을 위해 Deep Learning을 활용하려고 함.

## 2. 연구 결과

- 다중 물체 인식 및 추적 기술(Object Detection and Tracking)
  
    기존 다중 물체 인식 및 추적 성능이 좋다고 알려진 딥러닝 알고리즘을 활용하여 성능 비교 후 가장 좋은 성능을 보인 모델을 선정함. (**DeepSORT**) 또한, 물체 추적 시 <u>두 물체의 겹침</u>이 발생하면 인식이 정확히 이뤄지지 않는 문제가 발생하는데 이에 대해서는 두 물체 사이의 유사성을 판단할 수 있는 방법을 사용하여 문제를 극복하고자 함.

<img src="https://user-images.githubusercontent.com/67947808/148722299-a8e21908-ffc4-42c1-bb23-003a81b38976.png" alt="스크린샷 2022-01-10 오후 2 36 35" style="zoom:85%;" />

- 선택된 DeepSORT의 구조
    DeepSORT는 YOLO V4를 이용하여 Object Detection을 하는 것과 함께, **Multi-Object Tracking**을 지원하는 알고리즘임. 트래킹의 경우는 기본적으로 **Kalman Filter**를 사용하고 있으며, **Deep appearance descriptor**를 이용하여 물체의 유사도를 측정하고, **Hungarian Assignment algorithm**을 이용하여 여러 프레임에 걸쳐 나타나는 물체들의 **identity matching**을 지원하고 있음.

![스크린샷 2022-01-10 오후 2 44 31](https://user-images.githubusercontent.com/67947808/148722782-29124fe8-1ed2-44d4-9cd7-3ca104529084.png)

그림 출처: https://medium.com/augmented-startups/deepsort-deep-learning-applied-to-object-tracking-924f59f99104

- Bird-Eye-View (BEV)
    BEV는 geometric한 변환으로 위에서 아래를 내려다보는 top-view임. 전시장 내 여러 대의 CCTV가 존재할 경우 높이와 각도 때문에 동일한 사람을 매칭시키는데 어려움이 있으며, 관측자에게도 보다 나은 시각적 결과를 제공하기 위해 검출된 영상들에 대해 BEV를 적용함.

<script src="https://gist.github.com/wjh1065/07c29d50b60607a88b9d96b0a2e90c2b.js"></script>

<img src="https://user-images.githubusercontent.com/67947808/148722504-4b0478bb-4ba4-4fa9-b813-6d8b3f5d32b5.png" alt="스크린샷 2022-01-10 오후 2 39 55" style="zoom:67%;" />

- Bottom points
    Object detection에서 획득한 바운딩 박스로부터 하단 좌표(bottom point)를 구하고 BEV에 적용함.

<script src="https://gist.github.com/wjh1065/6450ec0a396616f8558d98bc1d4e5f7e.js"></script>

- Multi cam
    실제 전시장 상황에서는 단일 카메라가 아닌 2대 이상의 카메라를 사용한 것을 고려하여 문제를 인식함. 객체 검출 및 추적 시 **사람 간의 가림 또는 중첩 현상** 으로 사각지대가 발생하였을 때 멀티 카메라 상황에서는 다른 카메라가 이러한 사각지대를 채워줌으로 검출 및 추적 성능을 높일 수 있을 것임.

![스크린샷 2022-01-10 오후 2 48 19](https://user-images.githubusercontent.com/67947808/148723067-dce15071-46b1-43e1-af33-4bd79ed1b886.png)

시연 동영상 : https://youtu.be/xokeYEJiCZA

-  Future work (Similarity)
    멀티 캠 상황에서, 각 카메라에서 추출된 물체의 위치 정보를 하나의 공간에 투사하고 서로 연결시키기 위해서 BEV를 통해 변환하고, BEV 과정을 통해 변환된 좌표들 사이의 유사성(Similarity)을 이용하여 Remapping을 시행할 예정임.
    유사도 측정 방법으로는 아래와 같은 Euclidean distance를 사용할 예정임.

![스크린샷 2022-01-10 오후 2 51 46](https://user-images.githubusercontent.com/67947808/148723287-1dd53f29-5ad1-4374-8c85-71e4a242b1d0.png)

## 3. 요약 및 개선점

- **요약**
    Multi cam을 활용했을 때, 하나의 cam에서 인식한 사람을 다른 cam에서도 같은 사람으로 인식하는 것을 수행함. 기존 다중 물체 인식 및 추적 성능이 좋다고 알려진 딥러닝 알고리즘 중 가장 좋은 성능을 보인 모델을 선정하여 사람을 인식하게 함. 인식한 사람들의 bottom points를 사용하여 bird-eye-view로 나타내었고, bird-eye-view로 변환된 좌표들 사이의 유사성을 이용한 remapping을 사용하여 검출 및 추적 성능을 향상시키는 것을 목표로 연구함.
- 개선점
    Detection 성능에 의해 물체의 ID가 유실될 경우나 Multi cam의 FPS 차이와 같은 문제가 있었음. 이는 성능이 더 좋은 GPU를 이용하여 연구를 진행하면 Multi cam 간의 FPS 오차가 줄어들 것으로 예상됨. 또한 추후에 bottom points에 ID를 할당하면 Remapping에 대한 오차율을 줄일 수 있을 것이라고 생각됨.



## 4. 연구결과 활용

- 전시장 내에 있는 CCTV를 활용하여 관람객과 전시품의 연관성을 분석하여 관람객이 퇴장 시 관람객과 사람들의 연관성 정보들을 관측자에게 제공할 수 있도록 하면 개인 맞춤형 서비스를 제공하는 것이 더 쉬워질 것으로 보임.

- 산업체 측면:
     관람객 동선 분석을 통해 개인 맞춤형 정보를 제공해줄 수 있으며, 더욱 다양한 분야에서 필요로 하고 적용이 될 것으로 보임.

- 연구자 측면:
     연구자 측면에서는 산업체에서 요구하는 기술을 구현하며 적용시킴으로써 실무역량 향상 등 여러 측면에서 실적을 보임.

---

**References**

   Huge shoutout goes to hunglc007 and nwojke for creating the backbones of this repository:
  * [tensorflow-yolov4-tflite](https://github.com/hunglc007/tensorflow-yolov4-tflite)
  * [Deep SORT Repository](https://github.com/nwojke/deep_sort)

**Citing DeepSORT**

    @inproceedings{Wojke2017simple,
      title={Simple Online and Realtime Tracking with a Deep Association Metric},
      author={Wojke, Nicolai and Bewley, Alex and Paulus, Dietrich},
      booktitle={2017 IEEE International Conference on Image Processing (ICIP)},
      year={2017},
      pages={3645--3649},
      organization={IEEE},
      doi={10.1109/ICIP.2017.8296962}
    }
    
    @inproceedings{Wojke2018deep,
      title={Deep Cosine Metric Learning for Person Re-identification},
      author={Wojke, Nicolai and Bewley, Alex},
      booktitle={2018 IEEE Winter Conference on Applications of Computer Vision (WACV)},
      year={2018},
      pages={748--756},
      organization={IEEE},
      doi={10.1109/WACV.2018.00087}
    }


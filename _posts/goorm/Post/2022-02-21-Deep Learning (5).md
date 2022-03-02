---
title: "goormNLP [Attention Network]"  
categories:
 - goormNLP
tags:
 - study
 - deep learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Attention Models

2022-02-21

이번 시간에는 Attention model에 대해서 공부를 진행하였다.  

어텐션(attention)의 기본 아이디어는 <u>디코더에서 출력 단어를 예측하는 매 시점마다</u>,  
<u>인코더에서의 전체 입력 문장을 다시 한 번 참고</u>한다는 것이다.  

단, 전체 입력 문장을 전부 다 동일한 비율로 참고하는 것이 아니라,  
해당 시점에서 <u>예측 해야할 단어와 연관이 있는 입력 단어 부분을 좀 더 집중</u>해서 보는 방식이다.

---

### Image Captioning

<img src="https://user-images.githubusercontent.com/67947808/155440546-7d3e539f-2f71-4d17-9d25-99d50b0e3347.png" alt="스크린샷 2022-02-24 오전 10 37 40" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/155440772-502bce27-3c98-4751-9c5e-91757776d377.png" alt="스크린샷 2022-02-24 오전 10 39 42" style="zoom:67%;" />



- 어떤 이미지를 설명하는 문장을 만들어내는 것.
- Multi modal learning.
- CNN을 통해 이미지를 처리하고 RNN으로 문장을 만들어냄.

==> RNN의 한계로 좋은 성능을 이끌어내지 못함.



### Image Captioning with Attention

<img src="https://user-images.githubusercontent.com/67947808/155441062-3a90619d-f632-468f-ac9c-817ec19e13d6.png" alt="스크린샷 2022-02-24 오전 10 42 38" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/155441179-b446bbe1-2bec-41f0-b6d7-b05264d02347.png" alt="스크린샷 2022-02-24 오전 10 43 44" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/155441434-f89757ae-6741-4e1f-ac19-6d0414b02aaa.png" alt="스크린샷 2022-02-24 오전 10 46 06" style="zoom:67%;" />



- Attention 메커니즘을 사용하여 RNN의 한계점 보안함.
    - 주어진 이미지 안에서 어느 영역을 보고 지금 단어를 생성할지 결정.
    - 이미지는 여러 component를 번갈아가면서 captioning.
    - 이미지 안에서 특정 단어를 말할때 마다 다른 영역을 봐야함.



### Visual Question Answering

<img src="https://user-images.githubusercontent.com/67947808/155441784-d72c8f37-55fe-46df-8939-dc8b45d8e2a7.png" alt="스크린샷 2022-02-24 오전 10 49 17" style="zoom:67%;" />

- 어떤 이미지에 대한 질문의 답은 해당 이미지를 설명하는 속성으로 볼 수 있음.



### Sequence to Sequence Model with Attention

<img src="https://user-images.githubusercontent.com/67947808/155442553-d32f04f1-5540-43a7-8d27-dad7154d5892.png" alt="스크린샷 2022-02-24 오전 10 56 33" style="zoom:67%;" />

<img src="https://user-images.githubusercontent.com/67947808/155442488-72b51a47-abcb-457d-a8e0-533483f63200.png" alt="스크린샷 2022-02-24 오전 10 55 48" style="zoom:67%;" />

- 시퀀스를 입력으로 받아서, 시퀀스를 출력으로 생성.
- 많은 NLP task 들에서 기본 모델로 활용됨: 챗봇, 기계 번역 등
- 입력 seq의 마지막 시점의 벡터에 모든 정보를 다 담는것이 버거우므로, 모든 입력 seq의 정보를 조합하여 각 출력 단어를 생성함.



[HW5 링크](https://github.com/wjh1065/goormNLP/blob/main/05_Deep_Learning/sol/%5BHW5%5DLanguage_Model_solution.ipynb)


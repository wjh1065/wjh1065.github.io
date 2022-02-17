---
ㅌtitle: "goormNLP [6주차 - Deep Learning (4)]"  
categories:
 - goormNLP
tags:
 - study
 - deep learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: Recurrent Neural Networks (RNN)

2022-02-17

이번 시간에는 Sequence data, 즉 시계열 데이터에서 가장 많이 쓰이는 딥러닝 모델 **RNN**에 대해 알아보고자 한다.



**Case Studies**

- RNN
  
    RNN의 여러가지 형태
    Character-level LM
    Vanishing Gradient Problem

- LSTM & GRU




## RNN

<img src="https://user-images.githubusercontent.com/67947808/154411601-46775f8f-15ff-4a59-904a-cd989fde5560.png" alt="스크린샷 2022-02-17 오후 2 30 09" style="zoom:67%;" />



RNN은 히든 노드($h_t$)가 방향을 가진 엣지로 연결돼 <u>순환구조</u>를 이루는 인공신경망의 한 종류이다.



<img src="https://user-images.githubusercontent.com/67947808/154411772-2f7a8dcc-3797-478c-904e-d87d49ecbf62.png" alt="스크린샷 2022-02-17 오후 2 32 03" style="zoom:67%;" />



위의 그림에서도 알 수 있듯 <u>시퀀스 길이에 관계없이</u> 인풋과 아웃풋을 받아들일 수 있는 네트워크 구조이다.  
필요에 따라 다양하고 유연하게 구조를 만들 수 있다는 점이 RNN의 가장 큰 장점이다.  



<img src="https://user-images.githubusercontent.com/67947808/154412479-a26a9de1-6310-471c-b0fd-5e31303c429a.png" alt="스크린샷 2022-02-17 오후 2 38 55" style="zoom:67%;" />

빨간 박스는 인풋 $x$, 파란 박스는 아웃풋 $y$이다.  
현재 상태의 hidden state $h_t$는 직전 시점의 hidden state $h(t-1)$를 받아 갱신된다.  

현재 상태의 아웃풋 $y_t$는 $h_t$를 전달받아 갱신되는 구조이며, hidden state의 activation function은  비선형 함수인 tanh이다.



<img src="https://user-images.githubusercontent.com/67947808/154412896-347eac62-607a-43e4-80d2-e1d3bbea3b18.png" alt="스크린샷 2022-02-17 오후 2 43 33" style="zoom:75%;" />

**Example: character-level Language Model Sampling**

- Vocab: [h, e, l, o]

- At test-time sample characters one at time, feed back to model.



**Backpropagation Through Time (BPTT)**

<img src="https://user-images.githubusercontent.com/67947808/154413924-59531e0e-ed3e-4353-a82a-0b1466f9998d.png" alt="스크린샷 2022-02-17 오후 2 52 01" style="zoom: 60%;" />



기존의 단순한 Neural networks를 학습시키기 위해서 사용하던 Backpropagation 알고리즘과는 조금은 다른 방법이 필요하다.  

- **BPTT** : 일정 시간동안 에러 값들을 합한 값을 역전파하고,  
    업데이트를 진행하며 현재 시간의 에러를 과거 시간의 상태까지 역전파할 수 있다.

<img src="https://user-images.githubusercontent.com/67947808/154414352-5d3dcb23-5c47-4432-8be5-98460ab03d4a.png" alt="스크린샷 2022-02-17 오후 2 55 48" style="zoom: 60%;" />

BPTT는 시퀀스의 처음부터 끝까지를 모두 에러를 역전파해야 되기 떄문에, 계산량을 줄이기 위해서 **현재 time step에서 일정 시간 이전**까지 본다.  
이렇게 에러를 역전파 하는 방법인 **Truncated** Backpropagation through time(생략된-BPTT)을 많이 사용한다.



**Vanishing Gradient Problem**

- 학습 데이터의 길이가 길어질수록 먼 과거의 정보를 현재에 전달하기 힘듬.
- 역전파 도중, 과거로 올라가면 올라갈수록 gradient 소실되는 문제가 발생함.

==> RNN이 처리하지 못하는 장기 의존성(Long-Term dependencies) 문제를 다루기 위해 **LSTM**가 고안됨.



## LSTM

<img src="https://user-images.githubusercontent.com/67947808/154415182-dd36c807-4fa4-43bb-b708-7e7f1002dad2.png" alt="스크린샷 2022-02-17 오후 3 03 27" style="zoom:67%;" />

vanilla RNN의 문제점인 vanishing gradient problem을 극복하고자 제안된 것이 LSTM이다.  
LSTM은 RNN의 hidden state에 cell-state를 추가한 구조이다.

**CORE idea : ** cell state 정보가 아무 변화 없이 쭉 흐를 수 있는 구조 -> Long-tem dependency 해결.



![스크린샷 2022-02-17 오후 3 07 14](https://user-images.githubusercontent.com/67947808/154415637-27a44434-29f7-4c93-a7d0-c999bddbe43e.png)

**forget gate $f_t$: ** 과거 정보를 잊기 위한 게이트.  
(이전에서 넘어온 cell state 정보를 얼마나 흘려보낼지에 대한 gate)

<img src="https://user-images.githubusercontent.com/67947808/154415825-be15257d-7379-4adc-90a0-9a11b21400af.png" alt="스크린샷 2022-02-17 오후 3 08 51" style="zoom: 60%;" />

**input gate $i_t * g_t$:**  현재 정보를 기억하기 위한 게이트.  
(cell state에 추가할 정보를 생성하고, input gate를 통해 일부를 버림)

<img src="https://user-images.githubusercontent.com/67947808/154416213-442a77ee-a396-442a-a0df-25af2317d569.png" alt="스크린샷 2022-02-17 오후 3 11 55" style="zoom:60%;" />

<img src="https://user-images.githubusercontent.com/67947808/154416361-5b586404-85c5-4eb8-8667-1a96a539fcd6.png" alt="스크린샷 2022-02-17 오후 3 13 10" style="zoom:67%;" />

**cell state: ** 버릴 것은 버린 과거(forget gate)에서 넘어온 cell state에 현재 정보를 더해서 현재의 cell state 생성.

<img src="https://user-images.githubusercontent.com/67947808/154416548-cae38854-71b4-4f63-9923-7bc46009aa33.png" alt="스크린샷 2022-02-17 오후 3 14 53" style="zoom:67%;" />

**hidden state: ** 현재의 cell state를 tanh를 통과하고 output gate를 통과시켜 현재의 hidden state 생성.  
그 이후, 이 hidden state는 다음 tiem step으로 넘겨주고, 필요하면 output 쪽이나 next layer로 넘겨줌.



## GRU

<img src="https://user-images.githubusercontent.com/67947808/154417056-7afb232e-06d9-4682-aee8-956791e7b90e.png" alt="스크린샷 2022-02-17 오후 3 18 53" style="zoom:67%;" />

LSTM에서는 총 3개의 gate가 존재하지만, GRU에서는 **update gate, reset gate 두 가지 게이트**만 존재한다.  
cell state와 hidden state가 합쳐져 <u>하나의 hidden state</u>로 표현한다.

GRU와 LSTM 중 어떤 것이 모델의 성능면에서 더 낫다라고 단정지어 말할 수 없으며,  
기존에 LSTM을 사용하면서 최적의 하이퍼파라미터를 찾아낸 상황이라면 굳이 GRU로 바꿔서 사용할 필요는 없다고 한다.  



**reset gate ($r_t$): ** 이전 시점의 hidden state와 현 시점의 $x$를 sigmoid를 적용하여 구하는 방식이다.  
결과 값은 0~1 사이의 값을 가질 것이며 <u>이전 hidden state의 값을 얼마나 활용할 것인지에 대한 정보</u>가 나온다.



**update gate: ** LSTM의 input, forget gate와 비슷한 역할을 하며,  
<u>과거와 현재의 정보를 각각 얼마나 반영할지에 대한 비율</u>을 구한다.  

$z_t$를 통해서 구한 현재의 $z$ 결과는 <u>현재 정보를 얼마나 사용</u>할지를 반영하고,
전 과거 시점인 $1-z$ 결과는 <u>과거 정보에 대해서 얼마나 사용</u>할지를 반영한다.  
최종적으로 $h_t$를 통해 현 시점의 출력 값 hidden state를 구할 수 있다.



#### 참고자료

- [https://ratsgo.github.io](https://ratsgo.github.io/natural%20language%20processing/2017/03/09/rnnlstm/)
- [https://blog.naver.com/winddori2002](https://blog.naver.com/winddori2002/221992543837)


---
title: "goormNLP [6주차 - Deep Learning (5)]"  
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



[Mid Quiz 링크](https://github.com/wjh1065/goormNLP/blob/main/05_Deep_Learning/sol/%5BHW4%5D220218_Deep_Learning_mid.pdf)

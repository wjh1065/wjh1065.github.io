---
title: "goormNLP [Competition]"  
categories:
 - goormNLP
tags:
 - study
 - machine learning

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Multiple Logistic Regression

2022-02-08

중간고사를 대체해서 competition을 진행하였다.  
Dataset은 red wine quality로 0~5는 bad, 6~10은 good으로 regression하는 문제였다.  

지금까지 배워왔던 ML 이론으로 진행을 하였는데 패키지에 있는 model을 사용하는 것이 아닌  
밑바닥부터 구현한  `def regression model` 을 이용하여 진행하였다.

지난 Practice에서 진행한 코드를 사용했으며, <u>데이터의 퀄리티가 그렇게 좋지는 않아서 높은 성능을 보이진 않았다.</u>



데이터 EDA를 진행한 결과:

1) quality에서 3, 4, 5, 6, 7, 8 라벨 중 **3, 4, 8 라벨**이 데이터가 턱없이 부족하여 간단한 <u>data aug</u>를 진행함.  
2) 데이터 분포가 정규분포가 아니라 한 곳에 치우친 경향이 있어 <u>logarithm_scaler</u>를 진행하여 정규분포를 최대한 맞추어줌.  
3) outlier 2.5 이상 데이터는 제거함.  
4) scikit-learn의 StandardScaler를 이용하여 데이터 스케일링 진행함.  



**결과:**

```
Validation loss: 60.85813779097783
Validation precision: 0.59375
Validation recall: 0.8837209302325582
Validation F-score: 0.7102803738317758
Validation Accuracy: 0.7633587786259542
```


---

[ipynb 원본 링크](https://github.com/wjh1065/goormNLP/blob/main/04_Goorm_Competition/Multiple%20Logistic%20Regression.ipynb)

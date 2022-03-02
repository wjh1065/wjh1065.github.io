---
title: "goormNLP [NLP intro]"  
categories:
 - goormNLP
tags:
 - study
 - NLP

use_math: true
---

Auspice by Goorm, Manage by DAVIAN @ KAIST

## Lecture: NLP intro

2022-03-02

대략 2개월 간 Python 프로그래밍, 선형대수, 머신러닝, 딥러닝에 대한 수업을 마무리하였다.

본 수업부터는 약 3주간에 걸쳐 <u>자연어 처리의 A부터 Z</u>까지 다룰 예정이라 한다. 

현재 면접 준비하는 관계로, 글 포스팅이 잠시 멈출 것 같다

---

### Natural Language Processing

- NLP intro
  
    
  
    약 3주간에 걸쳐 자연어 처리의 이론에 대해서 학습하는 시간을 가진다.
    
    [HW24 링크](https://github.com/wjh1065/goormNLP/blob/main/06_Natural_Language_Processing/sol/%5BHW24_Answer%5D_NaiveBayes_Classifier.ipynb)
    
    
    
- Topic Modeling
  
    
  
    Text Mining 기법 중에서 가장 많이 활용되고 있는 Topic Modeling에 대해서 다뤄보고자 한다.
    
    
    
    Topic Modeling은 Unsupervised Learning 기반 방법 중 하나로,  
    말 그대로 여러 문서들에서 주제를 찾아내는 데에 사용하는 알고리즘 중 하나이다.  
    아주 많은 문서의 주제들을 추출할 수 있고, 시간별로 이 방법을 적용하여 대중의 트렌드를 파악하는 등 다양하게 적용되고 있다.
    
    [HW25 링크](https://github.com/wjh1065/goormNLP/blob/main/06_Natural_Language_Processing/sol/%5BHW25_Problem%5D_Topic_Modeling.ipynb)
    
    
    
- Word Embedding
  
    
  
    기존의 Word를 Vector로 표현하는 방법은 Topic Modeling에서와 같이 Freq(빈도) 기반의 방법론이 대세를 이루고 있다.  
    이러한 빈도 기반의 방법론에서 벗어나 Word Embedding을 distributed representation으로 나타내고자 한 방법이  
    바로 <u>Word2Vec과 GloVe</u>이다.
    
    
    
    해당 방법론들이 등장한 이후로 빈도 기반의 Word Embedding 방법론은 모두 사라지고  
    현재까지도 distributed representation 즉, word의 의미를 Vector의 각 차원에 고루 값을 갖도록 하는 방법이 유행하고 있다.  
    각 차원의 의미를 해석하기는 어려워졌지만, 다양한 Task에서 강력한 성능을 보이면서 현재까지 각광받고 있는 접근법이다.
    
    [HW26 링크](https://github.com/wjh1065/goormNLP/blob/main/06_Natural_Language_Processing/sol/%5BHW26_Problem%5DWord2Vec.ipynb) <= PCA font error issue.


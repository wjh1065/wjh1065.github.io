var store = [{
        "title": "Project 1. 3D 이미지 패치 학습",
        "excerpt":"3D 이미지 패치 학습 1. 추진배경 및 필요성 본 프로젝트는 비디오 메모리가 작은 GPU에서도 큰 Shape의 3D 데이터들을 패치로 분할하여 학습할 수 있는 방식을 제안함. 3차원 영상은 영상 데이터의 크기가 매우 크기 때문에, GPU 메모리의 한계로 인하여 학습을 진행하는데 어려움을 겪게 됨. 패치 학습을 사용하게 되면, 각 이미지의 크기가 줄어들어...","categories": ["project"],
        "tags": ["python","numpy"],
        "url": "/project/3D-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%A8%EC%B9%98-%ED%95%99%EC%8A%B5/",
        "teaser": null
      },{
        "title": "Project 2. DeepSORT with Bird Eye View",
        "excerpt":"DeepSORT with Bird Eye View (BEV) 1. 추진배경 및 필요성 추진배경 기업체와 회의 결과 해당 업체가 최근 물체 추적(Object Tracking)과 관련된 기술이 필요하다는 것을 알게 되었음. 유사한 기술로서, CCTV 영상에서 전시장의 관람객이 어떤 관람물에 관심을 가지는지를 분석하는 기술을 개발하는 것을 목표로 함. 연구 목표 이 프로젝트는 전시장 내에 있는 CCTV를...","categories": ["project"],
        "tags": ["python","Opencv","object tracking"],
        "url": "/project/DeepSORT-with-BEV/",
        "teaser": null
      },{
        "title": "Project 3. PVC of PET images using 3D ResUnet",
        "excerpt":"3D-ResUnet을 이용한 PET 영상의 Partial volume Effect correction 1. 추진배경 및 필요성 추진배경 알츠하이머성 치매(Alzheimer’s Disease, AD)가 유발되는 유력한 가설은 단백질 침착이 뇌 세포를 파괴하기 때문임. 즉 이러한 아밀로이드 단백질 축적량의 정확한 측정은 치매 발병의 조기예측에 있어서 매우 중요함. 아밀로이드 단백질의 축적량은 양성자 방출 단층 촬영(Positron Emission Tomography, PET)영상으로 측정이...","categories": ["project"],
        "tags": ["python","nibabel","medical image"],
        "url": "/project/PVC-of-PET-images-using-3D-ResUnet/",
        "teaser": null
      },{
        "title": "Project 4. GM segmentation of MR images using 3D ResUnet",
        "excerpt":"3D-ResUnet을 이용한 자기공명 영상의 뇌 회백질 영상 분할 1. 추진배경 및 필요성 추진배경 기존 영상 분할에 사용되는 방법 중 하나는 임계값 처리(Thresholding)가 있음. 데이터의 분포를 확인하여 픽셀 값이 불연속인 지점을 찾은 후 임계 값 처리를하는 방식의 단점으로 뽑히는 대표적인 문제는 잡음(noise)임. 데이터에 잡음이 있으면 불연속인 지점을 찾는데 한계가 있고 잘못하면...","categories": ["project"],
        "tags": ["python","nibabel","medical image"],
        "url": "/project/GM-segmentation-of-MR-images-using-3D-ResUnet/",
        "teaser": null
      },{
        "title": "goormNLP [1주차 - Python (1)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 1: Environment 운영체제 Windows 친숙함, 한컴, 공인인증서 등 사용가능. 한국에서 사용하기 편한 운영체제. Linux 서버 호환 쉬움. (WSL, SSH) 특정 라이브러리 설치 용이, 개인에게 무료 운영체제. 개인적으로 대학 연구실에서 GPU 서버 구축한 경험이 있어서 사용하는데 큰 어려움이 없음. Mac 현재 사용하고...","categories": ["goormNLP"],
        "tags": ["study","python"],
        "url": "/goormnlp/Python-(1)/",
        "teaser": null
      },{
        "title": "goormNLP [HW 1 - Python basic]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST 과제 1. 나만의 python &amp; 알고리즘 함수 만들기 1. 파이썬 내장함수 만들기 Python에는 사용자의 편의를 위해서 여러가지 함수를 내장하고 있다. 다음 사진이 python 내장함수의 목록을 보여준다. 자세한 내용은 링크에서 확인해 볼 수 있으며, 문서 안에서 몇 가지 예시를 제시하고 있다. 다음은 python...","categories": ["goormNLP"],
        "tags": ["study","python"],
        "url": "/goormnlp/HW1/",
        "teaser": null
      },{
        "title": "goormNLP [1주차 - Python (2)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 4: Data Structure List 배열: 일련의 데이터를 하나로 묶음. (파이썬에서 중요한 데이터 자료 중 하나) 파이썬 배열은 대괄호로 선언. [value 1, value 2, ...] 길이가 정해져 있지 않음. List indexing seq[index] 형태로 요소 하나 접근. 0부터 숫자세기 시작. 음수 가능. (뒤에서...","categories": ["goormNLP"],
        "tags": ["study","python"],
        "url": "/goormnlp/Python-(2)/",
        "teaser": null
      },{
        "title": "goormNLP [1주차 - Python (3)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 7: Pythonic Programming Comprehension List, Dictionary 등을 빠르게 만드는 기법. for + append 보다 속도 빠름. ```python result = [] for i in range(10): result.append(i * 2) example result = [i * 2 for i in range(10)] if 문을 마지막에 달아...","categories": ["goormNLP"],
        "tags": ["study","python"],
        "url": "/goormnlp/Python-(3)/",
        "teaser": null
      },{
        "title": "goormNLP [1주차 - Python (4)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST 2022-01-06 (목) 파이썬의 모듈과 패키지에 대해서 수업을 진행하였다. 학부연구생과 석사때 하나의 .py 파일에 함수, 데이터 로드, 훈련 코드 등… 구현한 기억이 있다. 이러한 결과는 추 후에 프로젝트 내용을 정리할때 혼란이 온적이 있다. 물론, 그 당시에도 모듈에 대한 지식은 있었다. 결과 내는것에 급했기...","categories": ["goormNLP"],
        "tags": ["study","python"],
        "url": "/goormnlp/Python-(4)/",
        "teaser": null
      },{
        "title": "goormNLP [HW 2 - Python crawling & class]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST 과제 2. 나만의 데이터 셋 만들기. 기계 학습 분야에서 중요한 것 중 하나가 학습에 사용할 자료를 수집하고 관리하는 것입니다. 예를 들어 주어진 문장이 부정인지 긍정인지 판별하는 모델을 학습 시키기 위해서는 긍정 부정이 라벨링된 문장 자료가 필요합니다. 문장 긍부정 진짜 좋은 영화. 가히...","categories": ["goormNLP"],
        "tags": ["study","python"],
        "url": "/goormnlp/HW2/",
        "teaser": null
      },{
        "title": "goormNLP [1주차 - Python (5)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 12: IO 표준 출력 (stdout) : 따로 Redirection 없으면 콘솔 출력. print('sentence') 표준 입력 (stdin) : 따로 Redirection 없으면 콘솔 입력. var = input() 파이썬은 File Descriptor를 열기 위하여 Open 내장 함수를 사용함. 접근 모드 설명 r 읽기 모드 rb 이진...","categories": ["goormNLP"],
        "tags": ["study","python"],
        "url": "/goormnlp/Python-(5)/",
        "teaser": null
      },{
        "title": "goormNLP [2주차 - Linear Algebra (1)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST 2022-01-10 (월) 머신러닝과 선형대수의 관계 2주차에는 머신/딥러닝에 들어가기에 앞서 Linear Algebra: 선형대수학에 대해서 수업을 진행하였다. 선형대수학은 연립방정식을 손쉽게 풀고자하는 고민으로부터 시작되었다. 머신러닝은 본질적으로는 컴퓨터가 이해할 수 있는 대량의 데이터. 즉 숫자를 이용해 복잡한 계산을 수행하는 것이므로 선형대수학의 수식과 계산 기법을 사용하면 최소한의...","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-(1)/",
        "teaser": null
      },{
        "title": "goormNLP [2주차 - Linear Algebra (2)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 3: Linear combination, Vector equation, Four views of matrix multiplication Linear combination c1v1 + … + c1vp is called a linear combination of v1, … , vp with weights or coefficients c1**, … , **cp. The weights in a linear combination...","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-(2)/",
        "teaser": null
      },{
        "title": "goormNLP [2주차 - Linear Algebra (3)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 5: Linear transformation Transformation Domain (정의역): Set of all the possible values of x. Co-domain (공역): Set of all the possible values of y. Image: a mapped output y, given x. Range (치역): Set of all the output values mapped by...","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-(3)/",
        "teaser": null
      },{
        "title": "goormNLP [2주차 - Linear Algebra Review (1)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST   Linear Algebra Review (1)                                                                                                           ","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-Review/",
        "teaser": null
      },{
        "title": "goormNLP [3주차 - Linear Algebra (4)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 7: Eigendecomposition 2022-01-17 고유값(eigenvalue), 고유벡터(eigenvector)에 대한 정의를 이해하고 값들을 구하였다. 그 후 대각행렬(diagonal matrix) ,대각화(diagonalization)를 활용하여 n차 정방행렬의 p제곱을 구하였다. 정방행렬 A에 대하여 Ax = λx (상수 λ) 가 성립하는 0이 아닌 벡터 x가 존재할 때 상수 λ 를 행렬 A의...","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-(4)/",
        "teaser": null
      },{
        "title": "goormNLP [3주차 - Linear Algebra (5)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 8: Advanced Eigendecomposition 2022-01-18 저번 포스팅에 고유값(eigenvalue), 고유벡터(eigenvector), 대각행렬(diagonal matrix) ,대각화(diagonalization)를 활용하여 n차 정방행렬의 p제곱을 구하였고, 이번에는 EVD(Eigenvalue-eigenvector Decomposition)에 대한 수업을 진행하였다. EVD는 n by n 정방행렬에 대해서만 적용이 가능하고 Markov process 과정을 적용하여 계산하였다. Symmetric Matrix If Matrix A is...","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-(5)/",
        "teaser": null
      },{
        "title": "goormNLP [3주차 - Linear Algebra (6)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 8: Advanced Eigendecomposition 2022-01-19 저번 수업 내용을 상기해보면 n x n matrix A가 orthogonally diagonalizable하다면 아래와 같은 식이 성립하게 된다는 것을 알게되었다. 또한 EVD(고유값 분해)를 Algebraic / Geometric multiplicity 관점으로 바라보았다. 내일 수업에서 보게될 SVD(특이값 분해)를 배우기 전에 오늘은 Spectral Decomposition에...","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-(6)/",
        "teaser": null
      },{
        "title": "goormNLP [3주차 - Linear Algebra (7)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture 9: Singular Value Decomposition 2022-01-20 지금까지 배웠던 선형대수 개념을 이용하여 EVD(고유값 분해)를 진행하였다. EVD는 정방행렬에 대해서만 적용이 가능하고 이번에 배운 SVD(특이값 분해)는 직사각행렬에 폭넓게 사용이 가능하다. SVD는 저번 포스팅에 올린 Spectral decomposition을 이용하면 직사각행렬을 고유값을 기저로하여 대각행렬로 분해할 수 있다. SVD...","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-(7)/",
        "teaser": null
      },{
        "title": "goormNLP [3주차 - Linear Algebra Review (2)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST   Linear Algebra Review (2)                                                                                                        ","categories": ["goormNLP"],
        "tags": ["study","math"],
        "url": "/goormnlp/Linear_Algebra-Review/",
        "teaser": null
      },{
        "title": "Pytorch 논문 구현 [MNIST]",
        "excerpt":"Pytorch Zero to All MNIST 2022-01-23 케라스는 파이토치, 텐서플로우에 비해 High Level로써 입문자에게 처음 딥러닝 실습에 적합한 언어라 생각한다. 연구실 생활때, 빠른 결과물을 내야했고.. 파이토치, 텐서플로우를 처음부터 배울 시간이 없었기에 케라스를 이용하여 연구에 대한 결과를 만들어 학회에 발표를 한 경험이 있다. 하지만 인공지능 계열로 취업을 준비했을때 많은 회사들이 Tensorflow보다는 Pytorch...","categories": ["Pytorch"],
        "tags": ["study","python"],
        "url": "/pytorch/MNIST/",
        "teaser": null
      },{
        "title": "Pytorch 논문 구현 [UNet (1)]",
        "excerpt":"Pytorch Zero to All   UNet (1)   2022-01-24   UNet 모델은 학부생때 딥러닝 주제를 정하고 케라스로 처음으로 구현해본 모델이다. 구현을 한 경험이 있고 논문 또한 정독을 많이 했기에 파이토치로 구현했을때 어려운 점은 없었다. (class 모듈화 공부를 더 해야할 듯..)   사용한 데이터: ISBI 2012 EM segmentation Challenge           ","categories": ["Pytorch"],
        "tags": ["study","python"],
        "url": "/pytorch/UNet-(1)/",
        "teaser": null
      },{
        "title": "goormNLP [4주차 - Linear Regression (1)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture: Linear regression with one variable 2022-01-24 Linear regression을 one variable일 때의 Cost function, Gradient descent에 대한 이론 및 실습을 진행하였다. Linear regression는 Supervised Learning(지도 학습)이라는 큰 범위 내에 포함되어 있고, 한개 이상의 독립 변수 $X$와 종속 변수 $Y$의 선형 관계를 모델링하는...","categories": ["goormNLP"],
        "tags": ["study","regression"],
        "url": "/goormnlp/Linear_Regression-(1)/",
        "teaser": null
      },{
        "title": "goormNLP [4주차 - Linear Regression (2)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture: Linear regression with multiple variables 2022-01-25 지난번 포스팅에는 하나의 독립 변수 $x$에 대해서 하나의 종속 변수 $y$ 사이의 관계를 알아보는 simple linear regression에 대해서 실습을 하였다. 이번 포스팅에서는 다양한 입력 변수들을 다루는 multiple linear regression 에 대해서 알아볼 예정이다. Multiple features...","categories": ["goormNLP"],
        "tags": ["study","regression"],
        "url": "/goormnlp/Linear_Regression-(2)/",
        "teaser": null
      },{
        "title": "goormNLP [4주차 - Linear Regression (3)]",
        "excerpt":"Auspice by Goorm, Manage by DAVIAN @ KAIST Lecture: Logistic Regression 2022-01-26 지금까지 주어진 데이터와 가장 잘 맞는 직선을 찾는 Linear Regression을 진행했었다. 이번에는 예측 값이 연속적인 값을 갖지 않는 Logistic Regression에 대해서 알아볼 것이다. Classification Logistic function Logistic regression을 진행하기 위해서는 출력 값을 0과 1의 값으로 맞춰주어야 한다. 이를...","categories": ["goormNLP"],
        "tags": ["study","regression"],
        "url": "/goormnlp/Linear_Regression-(3)/",
        "teaser": null
      }]

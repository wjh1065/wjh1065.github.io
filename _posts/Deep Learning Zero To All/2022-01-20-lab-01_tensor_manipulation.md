---
title: "Deep Learning Zero To All - Pytorch (1일 차) - 1"  
categories:
 - Deep Learning Zero To All
tags:
 - study
 - python
 - pytorch
use_math: true
---

# Lab 1: Tensor Manipulation

First Author: Seungjae Ryan Lee (seungjaeryanlee at gmail dot com)
Second Author: Ki Hyun Kim (nlp.with.deep.learning at gmail dot com)

<div class="alert alert-warning">
    NOTE: This corresponds to <a href="https://www.youtube.com/watch?v=ZYX0FaqUeN4&t=23s&list=PLlMkM4tgfjnLSOjrEJN31gZATbcj_MpUm&index=25">Lab 8 of Deep Learning Zero to All Season 1 for TensorFlow</a>.
</div>

## Imports

Run `pip install -r requirements.txt` in terminal to install all required Python packages.


```python
import numpy as np
import torch
```

## NumPy Review

We hope that you are familiar with `numpy` and basic linear algebra.

### 1D Array with NumPy


```python
t = np.array([0., 1., 2., 3., 4., 5., 6.])
print(t)
```

    [0. 1. 2. 3. 4. 5. 6.]



```python
print('Rank  of t: ', t.ndim)
print('Shape of t: ', t.shape)
```

    Rank  of t:  1
    Shape of t:  (7,)



```python
print('t[0] t[1] t[-1] = ', t[0], t[1], t[-1]) # Element
print('t[2:5] t[4:-1]  = ', t[2:5], t[4:-1])   # Slicing
print('t[:2] t[3:]     = ', t[:2], t[3:])      # Slicing
```

    t[0] t[1] t[-1] =  0.0 1.0 6.0
    t[2:5] t[4:-1]  =  [2. 3. 4.] [4. 5.]
    t[:2] t[3:]     =  [0. 1.] [3. 4. 5. 6.]


### 2D Array with NumPy


```python
t = np.array([[1., 2., 3.], [4., 5., 6.], [7., 8., 9.], [10., 11., 12.]])
print(t)
```

    [[ 1.  2.  3.]
     [ 4.  5.  6.]
     [ 7.  8.  9.]
     [10. 11. 12.]]



```python
print('Rank  of t: ', t.ndim)
print('Shape of t: ', t.shape)
```

    Rank  of t:  2
    Shape of t:  (4, 3)


## PyTorch is like NumPy (but better)

### 1D Array with PyTorch


```python
t = torch.FloatTensor([0., 1., 2., 3., 4., 5., 6.])
print(t)
```

    tensor([0., 1., 2., 3., 4., 5., 6.])



```python
print(t.dim())  # rank
print(t.shape)  # shape
print(t.size()) # shape
print(t[0], t[1], t[-1])  # Element
print(t[2:5], t[4:-1])    # Slicing
print(t[:2], t[3:])       # Slicing
```

    1
    torch.Size([7])
    torch.Size([7])
    tensor(0.) tensor(1.) tensor(6.)
    tensor([2., 3., 4.]) tensor([4., 5.])
    tensor([0., 1.]) tensor([3., 4., 5., 6.])


### 2D Array with PyTorch


```python
t = torch.FloatTensor([[1., 2., 3.],
                       [4., 5., 6.],
                       [7., 8., 9.],
                       [10., 11., 12.]
                      ])
print(t)
```

    tensor([[ 1.,  2.,  3.],
            [ 4.,  5.,  6.],
            [ 7.,  8.,  9.],
            [10., 11., 12.]])



```python
print(t.dim())  # rank
print(t.size()) # shape
print(t[:, 1])
print(t[:, 1].size())
print(t[:, :-1])
```

    2
    torch.Size([4, 3])
    tensor([ 2.,  5.,  8., 11.])
    torch.Size([4])
    tensor([[ 1.,  2.],
            [ 4.,  5.],
            [ 7.,  8.],
            [10., 11.]])


### Shape, Rank, Axis


```python
t = torch.FloatTensor([[[[1, 2, 3, 4],
                         [5, 6, 7, 8],
                         [9, 10, 11, 12]],
                       [[13, 14, 15, 16],
                        [17, 18, 19, 20],
                        [21, 22, 23, 24]]
                       ]])
```


```python
print(t.dim())  # rank  = 4
print(t.size()) # shape = (1, 2, 3, 4)
```

    4
    torch.Size([1, 2, 3, 4])


## Frequently Used Operations in PyTorch

### Mul vs. Matmul


```python
print()
print('-------------')
print('Mul vs Matmul')
print('-------------')
m1 = torch.FloatTensor([[1, 2], [3, 4]])
m2 = torch.FloatTensor([[1], [2]])
print('Shape of Matrix 1: ', m1.shape) # 2 x 2
print('Shape of Matrix 2: ', m2.shape) # 2 x 1
print(m1.matmul(m2)) # 2 x 1

m1 = torch.FloatTensor([[1, 2], [3, 4]])
m2 = torch.FloatTensor([[1], [2]])
print('Shape of Matrix 1: ', m1.shape) # 2 x 2
print('Shape of Matrix 2: ', m2.shape) # 2 x 1
print(m1 * m2) # 2 x 2
print(m1.mul(m2))
```


    -------------
    Mul vs Matmul
    -------------
    Shape of Matrix 1:  torch.Size([2, 2])
    Shape of Matrix 2:  torch.Size([2, 1])
    tensor([[ 5.],
            [11.]])
    Shape of Matrix 1:  torch.Size([2, 2])
    Shape of Matrix 2:  torch.Size([2, 1])
    tensor([[1., 2.],
            [6., 8.]])
    tensor([[1., 2.],
            [6., 8.]])


### Broadcasting

<div class="alert alert-warning">
    Carelessly using broadcasting can lead to code hard to debug.
</div>


```python
# Same shape
m1 = torch.FloatTensor([[3, 3]])
m2 = torch.FloatTensor([[2, 2]])
print(m1 + m2)
```

    tensor([[5., 5.]])



```python
# Vector + scalar
m1 = torch.FloatTensor([[1, 2]])
m2 = torch.FloatTensor([3]) # 3 -> [[3, 3]]
print(m1 + m2)
```

    tensor([[4., 5.]])



```python
# 2 x 1 Vector + 1 x 2 Vector
m1 = torch.FloatTensor([[1, 2]])
m2 = torch.FloatTensor([[3], [4]])
print(m1 + m2)
```

    tensor([[4., 5.],
            [5., 6.]])


### Mean


```python
t = torch.FloatTensor([1, 2])
print(t.mean())
```

    tensor(1.5000)



```python
# Can't use mean() on integers
t = torch.LongTensor([1, 2])
try:
    print(t.mean())
except Exception as exc:
    print(exc)
```

    Can only calculate the mean of floating types. Got Long instead.


You can also use `t.mean` for higher rank tensors to get mean of all elements, or mean by particular dimension.


```python
t = torch.FloatTensor([[1, 2], [3, 4]])
print(t)
```

    tensor([[1., 2.],
            [3., 4.]])



```python
print(t.mean())
print(t.mean(dim=0))
print(t.mean(dim=1))
print(t.mean(dim=-1))
```

    tensor(2.5000)
    tensor([2., 3.])
    tensor([1.5000, 3.5000])
    tensor([1.5000, 3.5000])


### Sum


```python
t = torch.FloatTensor([[1, 2], [3, 4]])
print(t)
```

    tensor([[1., 2.],
            [3., 4.]])



```python
print(t.sum())
print(t.sum(dim=0))
print(t.sum(dim=1))
print(t.sum(dim=-1))
```

    tensor(10.)
    tensor([4., 6.])
    tensor([3., 7.])
    tensor([3., 7.])


### Max and Argmax


```python
t = torch.FloatTensor([[1, 2], [3, 4]])
print(t)
```

    tensor([[1., 2.],
            [3., 4.]])


The `max` operator returns one value if it is called without an argument.


```python
print(t.max()) # Returns one value: max
```

    tensor(4.)


The `max` operator returns 2 values when called with dimension specified. The first value is the maximum value, and the second value is the argmax: the index of the element with maximum value.


```python
print(t.max(dim=0)) # Returns two values: max and argmax
print('Max: ', t.max(dim=0)[0])
print('Argmax: ', t.max(dim=0)[1])
```

    (tensor([3., 4.]), tensor([1, 1]))
    Max:  tensor([3., 4.])
    Argmax:  tensor([1, 1])



```python
print(t.max(dim=1))
print(t.max(dim=-1))
```

    (tensor([2., 4.]), tensor([1, 1]))
    (tensor([2., 4.]), tensor([1, 1]))


### View

<div class="alert alert-warning">
    This is a function hard to master, but is very useful!
</div>


```python
t = np.array([[[0, 1, 2],
               [3, 4, 5]],

              [[6, 7, 8],
               [9, 10, 11]]])
ft = torch.FloatTensor(t)
print(ft.shape)
```

    torch.Size([2, 2, 3])



```python
print(ft.view([-1, 3]))
print(ft.view([-1, 3]).shape)
```

    tensor([[ 0.,  1.,  2.],
            [ 3.,  4.,  5.],
            [ 6.,  7.,  8.],
            [ 9., 10., 11.]])
    torch.Size([4, 3])



```python
print(ft.view([-1, 1, 3]))
print(ft.view([-1, 1, 3]).shape)
```

    tensor([[[ 0.,  1.,  2.]],
    
            [[ 3.,  4.,  5.]],
    
            [[ 6.,  7.,  8.]],
    
            [[ 9., 10., 11.]]])
    torch.Size([4, 1, 3])


### Squeeze


```python
ft = torch.FloatTensor([[0], [1], [2]])
print(ft)
print(ft.shape)
```

    tensor([[0.],
            [1.],
            [2.]])
    torch.Size([3, 1])



```python
print(ft.squeeze())
print(ft.squeeze().shape)
```

    tensor([0., 1., 2.])
    torch.Size([3])


### Unsqueeze


```python
ft = torch.Tensor([0, 1, 2])
print(ft.shape)
```

    torch.Size([3])



```python
print(ft.unsqueeze(0))
print(ft.unsqueeze(0).shape)
```

    tensor([[0., 1., 2.]])
    torch.Size([1, 3])



```python
print(ft.view(1, -1))
print(ft.view(1, -1).shape)
```

    tensor([[0., 1., 2.]])
    torch.Size([1, 3])



```python
print(ft.unsqueeze(1))
print(ft.unsqueeze(1).shape)
```

    tensor([[0.],
            [1.],
            [2.]])
    torch.Size([3, 1])



```python
print(ft.unsqueeze(-1))
print(ft.unsqueeze(-1).shape)
```

    tensor([[0.],
            [1.],
            [2.]])
    torch.Size([3, 1])


### Scatter (for one-hot encoding)

<div class="alert alert-warning">
    Scatter is a very flexible function. We only discuss how to use it to get a one-hot encoding of indices.
</div>


```python
lt = torch.LongTensor([[0], [1], [2], [0]])
print(lt)
```

    tensor([[0],
            [1],
            [2],
            [0]])



```python
one_hot = torch.zeros(4, 3) # batch_size = 4, classes = 3
one_hot.scatter_(1, lt, 1)
print(one_hot)
```

    tensor([[1., 0., 0.],
            [0., 1., 0.],
            [0., 0., 1.],
            [1., 0., 0.]])


### Casting


```python
lt = torch.LongTensor([1, 2, 3, 4])
print(lt)
```

    tensor([1, 2, 3, 4])



```python
print(lt.float())
```

    tensor([1., 2., 3., 4.])



```python
bt = torch.ByteTensor([True, False, False, True])
print(bt)
```

    tensor([1, 0, 0, 1], dtype=torch.uint8)



```python
print(bt.long())
print(bt.float())
```

    tensor([1, 0, 0, 1])
    tensor([1., 0., 0., 1.])


### Concatenation


```python
x = torch.FloatTensor([[1, 2], [3, 4]])
y = torch.FloatTensor([[5, 6], [7, 8]])
```


```python
print(torch.cat([x, y], dim=0))
print(torch.cat([x, y], dim=1))
```

    tensor([[1., 2.],
            [3., 4.],
            [5., 6.],
            [7., 8.]])
    tensor([[1., 2., 5., 6.],
            [3., 4., 7., 8.]])


### Stacking


```python
x = torch.FloatTensor([1, 4])
y = torch.FloatTensor([2, 5])
z = torch.FloatTensor([3, 6])
```


```python
print(torch.stack([x, y, z]))
print(torch.stack([x, y, z], dim=1))
```

    tensor([[1., 4.],
            [2., 5.],
            [3., 6.]])
    tensor([[1., 2., 3.],
            [4., 5., 6.]])



```python
print(torch.cat([x.unsqueeze(0), y.unsqueeze(0), z.unsqueeze(0)], dim=0))
```

    tensor([[1., 4.],
            [2., 5.],
            [3., 6.]])


### Ones and Zeros Like


```python
x = torch.FloatTensor([[0, 1, 2], [2, 1, 0]])
print(x)
```

    tensor([[0., 1., 2.],
            [2., 1., 0.]])



```python
print(torch.ones_like(x))
print(torch.zeros_like(x))
```

    tensor([[1., 1., 1.],
            [1., 1., 1.]])
    tensor([[0., 0., 0.],
            [0., 0., 0.]])


### In-place Operation


```python
x = torch.FloatTensor([[1, 2], [3, 4]])
```


```python
print(x.mul(2.))
print(x)
print(x.mul_(2.))
print(x)
```

    tensor([[2., 4.],
            [6., 8.]])
    tensor([[1., 2.],
            [3., 4.]])
    tensor([[2., 4.],
            [6., 8.]])
    tensor([[2., 4.],
            [6., 8.]])


## Miscellaneous

### Zip


```python
for x, y in zip([1, 2, 3], [4, 5, 6]):
    print(x, y)
```

    1 4
    2 5
    3 6



```python
for x, y, z in zip([1, 2, 3], [4, 5, 6], [7, 8, 9]):
    print(x, y, z)
```

    1 4 7
    2 5 8
    3 6 9


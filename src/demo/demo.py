import tensorflow as tf
import keras
import numpy as np 

import sys,os 
print(os.path.join(os.path.dirname(__file__),".."))
sys.path.append(os.path.join(os.path.dirname(__file__),".."))
from savemodle import model as s

# 定义模型 
model = tf.keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])
 #设置损失函数和优化模型
model.compile(optimizer='sgd', loss='mean_squared_error')
path="./tmp/demo.pickle.data"

# 训练
def training(m): 
    # 设置数据
    xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], dtype=float)
    ys = np.array([-2.0, 1.0, 4.0, 7.0, 10.0, 13.0], dtype=float)
    # 训练
    m.fit(xs, ys, epochs=500)  
    
# 使用
m=s.internal_load(path)
if m!=None: print(m.predict([10.0]))
else:
    training(model)
    s.internal_save(model,path)
    print(model.predict([10.0]))
    

import os
import pickle #内置保存模型的方法 
'''
from sklearn.ensemble import RandomForestClassifier
from sklearn import datasets
from sklearn.experimental import joblib
'''
# 保存模型
import pickle #内置保存模型的方法

class model:
    def internal_save(model,savePath):
        f=open(savePath,'wb+')
        pickle.dump(model,f)
        f.close()
    def internal_load(modelPath):
        if os.path.exists(modelPath):
            f=open(modelPath,"rb")
            m=pickle.load(f)
            f.close()
            return m
        return None
    '''
    def sklearn_save(model,savePath):
        joblib.dump(model,savePath)

    def sklearn_load(savePath):
        if os.path.exists(savePath): 
            return joblib.load(savePath) 
        return None
    '''
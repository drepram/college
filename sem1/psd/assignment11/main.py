# This program and its computation instruction was written by Andre Christoga Pramaditya (drepram.com) with the student ID (2006570006).
# Program dan instruksi komputasi ini ditulis oleh Andre Christoga Pramaditya (drepram.com) dengan Nomor Pokok Mahasiswa (2006570006).

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset

dataset = pd.read_csv('height-weight.csv')
df1 = dataset[['height', 'weight']]
df2 = df1.dropna()

corr = df2.corr()
print(corr)

# Linearity and Normality Test

import seaborn as sns

sns.set(style='ticks', color_codes=True, font_scale=2)
g=sns.pairplot(df2, height=3, diag_kind='hist', kind='reg')
g.fig.suptitle('Scatter Plot', y=1.08)

# Homoscedasticity

from statsmodels.formula.api import ols

reg=ols('weight~height', data=df2).fit()
print(reg.summary())

import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8,3.5))
pred_val=reg.fittedvalues.copy()
true_val=df2['weight'].values.copy()
resid=true_val-pred_val
res=sns.residplot(resid,pred_val)
plt.title('Homoscedasticity')

# Normality of errors / residue

import scipy.stats as stats

fig, ax = plt.subplots(figsize=(10,6))
stats.probplot(resid, dist='norm', plot=plt)
plt.show()




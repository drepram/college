# This program and its computation instruction was written by Andre Christoga Pramaditya (drepram.com) with the student ID (2006570006).
# Program dan instruksi komputasi ini ditulis oleh Andre Christoga Pramaditya (drepram.com) dengan Nomor Pokok Mahasiswa (2006570006).

import numpy as np
import matplotlib.pyplot as plt

import warnings
warnings.filterwarnings("ignore") # insert programmer laziness joke here

sample_size = 100

# We make use of NumPy's normal distribution feature (https://numpy.org/doc/stable/reference/random/generated/numpy.random.normal.html)
# Wherein np.random.normal, the first argument is the mean, the second is the standard deviation, and the third is the size (output shape)

std_20 = np.random.normal(60,20,sample_size)
std_25 = np.random.normal(60,25,sample_size)
std_50 = np.random.normal(60,50,sample_size)

combined_histogram = plt.figure(1, figsize=(7,7))

plt.hist(std_20, 15, density=True)
plt.hist(std_25, 15, density=True)
plt.hist(std_50, 15, density=True)

combined_histogram.suptitle('Normal Distribution Combined Histogram \nwith Differing Standard Deviation', fontsize=14, fontweight='bold')
combined_axes_title = combined_histogram.add_subplot(111)
combined_histogram.subplots_adjust(top=0.80)
combined_axes_title.set_title('Blue bars (Standard Deviation (σ) = 20), \nOrange bars (Standard Deviation (σ) = 25), \nGreen bars (Standard Deviation (σ) = 50)')
combined_histogram.show()

histogram_each, (case1, case2, case3) = plt.subplots(3,1, figsize=(6,10))
histogram_each.suptitle('Normal Distribution for Each Case \n(with more specific range for the x axis)', fontweight='bold')
case1.hist(std_20, 15, density=True, color="blue")
case1.set_title('σ = 20, sample size = 100')
case2.hist(std_25, 15, density=True, color="orange")
case2.set_title('σ = 25, sample size = 100')
case3.hist(std_50, 15, density=True, color="green")
case3.set_title('σ = 50, sample size = 100')
histogram_each.show()

plt.show()
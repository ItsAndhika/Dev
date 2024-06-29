import numpy as np
import matplotlib.pyplot as plt

n = 1000000
t = np.logspace(np.log10(10),np.log10(500),n)

# Silakan merubah parameter ini
A = [  1, 6, 1.5, 1.5 ]
d = [ .004, .001, .002, .0015 ]
f = [   3, 1, 4, 2.5 ]

# Membuat pasangan x dan y
x = A[0]*np.sin(t*f[0])*np.exp(-d[0]*t) + A[1]*np.sin(t*f[1])*np.exp(-d[1]*t)
y = A[2]*np.sin(t*f[2])*np.exp(-d[2]*t) + A[3]*np.sin(t*f[3])*np.exp(-d[3]*t)

# Menampilkan plot nya
plt.plot(x,y,'g',linewidth=.1)
plt.axis('off')
plt.show()

# Melihat komponen satu per satu
plt.plot(np.sin(t*2*f[0])*np.exp(-d[0]*0.5*t),linewidth=.5)
plt.show()
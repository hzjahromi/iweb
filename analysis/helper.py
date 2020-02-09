### Importing required libraries
import pandas as pd
import numpy as np
from statistics import mean 
import matplotlib.pyplot as plt
import os
import seaborn as sns
from pylab import rcParams
import scipy.stats as ss
import statsmodels.api as sm
from statsmodels.formula.api import ols
import math
from scipy.optimize import curve_fit

############################ reading the raw data from dataset/raw_data/raw_data.csv ############################ 
#################################################################################################################

base_df = pd.read_csv('..//dataset//raw_data//raw_data.csv')
print (base_df.head(5))

#################################################################################################################
############################ Ceaning the data and computing mean iLT abd CiLT foreach task ###################### 
#################################################################################################################

mos_df = pd.DataFrame() 
col_names =  ['type','iLTs','miLT', 'ACR','net_delay','no_click','TCiL','subject']
mos_df  = pd.DataFrame(columns = col_names,dtype=int)
temp_df =  pd.DataFrame(columns = col_names,dtype=int)
for inex,row in base_df.iterrows():
    ######### splitting each ilt and removing any unsuccessful measurement ##########  
    ilt_array= row['iLTs'].replace("'","").split(',')
    for i in range(len(ilt_array) - 1, -1, -1):
        element = ilt_array[i]   
        if element.count(':')<1:
            del ilt_array[i]

    try:       
        ilt_array =[i.split(':', 1)[1] for i in ilt_array]
        ilt_array=[int(value) for value in ilt_array]         
        ilt_array=[a for a in ilt_array if a >= 10]
    except Exception as e:
        ilt_array=np.NaN

    ######### stripping mouse clicks. Removing the timestamps and coordinares of mouse clicks #########  
    mouse_array=row['mouse_clicks'].split(',')
    try:
        mouse_array = [i.split(':', 1)[0] for i in mouse_array]
    except Exception as e:
         pass
     
    mouse_array=[a for a in mouse_array if a!="up"]
    mouse_array=[int(value) for value in mouse_array]
    ######### computing miLT and TCiL #########  

    _miLT=np.mean(ilt_array)
    TCiL=len([i for i in ilt_array if i>=0])
      
    temp_df.loc[-1]=[row['typ'],ilt_array,_miLT, row['ACR'], row['net_delay'],len(mouse_array),TCiL,row['subject']] 
    mos_df = mos_df.append(temp_df, ignore_index=True)
#################################################################################################################
################################################## Exporting proccess Data ######################################
#################################################################################################################
mos_df.to_csv('..//dataset//processed//dataset.csv')
    
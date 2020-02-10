## Estimating Quality of Experience for Interactive Web Applications Ueer Study 
## Use Case: Web Mapping Application
## Objectives:
To investigate how to measure waiting time for a user's interactions with a web application across a session and correlate it with user-reported perceived quality.  We introduced  two new measures: interactive Load Time (iLT) and Total Completed interactive Load (TCiL) to establish the waiting time associated with a web application user's interactions. 

## Definitions:
### Interactive Load Time (iLT):
 is the time taken to complete aninteractive load starting from a user interaction (e.g. a mouseclick) to the completed update of the web application display.
### Total Completed interactive Load (TCiL):
represents the num-ber  of  times  that  the  iLT  is  successfully  measured  for  theentire session time. 

## Study Proccess and Parameters
For more information about study proccess and parameters please read the published paper from [paper-url]

## Dependencies
The main python dependencies for analysing the data are:
- NumPy
- SciPy
- Pandas
- Pandas-flavor
- Matplotlib
- Seaborn
- Statsmodels
- Scikit-learn

Please not that the python codes available in this repository have been developed using Python 3.6. 

The main dependencies for running the experimental platfrom:
- Ubuntu or CentOS
- node js

## Quick start

If you want to run analysis on the collected data, please use dataset and analysis folders

If you want to see how did we instrument a web mapping application to measue iLT and CiLT, please see experminal experimental platform/client/webqoe.html

If you want re-run the same subjective study:

- please copy  the  experimental platform/ onn a linux machine,
- run ``` node server.js ``` 
- use client/index.html on a client machine and follow the test procedures. Please note that some browser may not allow you to submit ajax form when you run the html file localyl. If you want host the client files
  - Copy the client folder to your linux machine
  - Run ``` node http_server.js ``` from the client folder 
  - Open the web page via ip address / machine name. i.e. http://localhost/index.html 

## Repository Structure 

### helper.py

helper.py reads the raw data from dataset/raw_data/raw_data.csv and extracts the required information from the collected data. iLT and CiLT are computed based on the equations explained in [published url]

## Dataset Folder 

### raw_data

This folder includes the raw data collected during the subjective study. The data records contain time stamps and extra information about users' clicks. i.e. the coordinates of the mouse clicks on the screen.  

### processed _data 

This folder contained clean data proccessed by helper.py.


### questionnaire 
Includes demographical and previous information of the participants

## Contributors
Mr. Hamed Jahromi
Dr. Declan Delaney
Dr. Andrew Hines 

## How to cite?
If you want to cite thei data, please use the publication in IEE:
[bib info]
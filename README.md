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

If you want to run analysis on the collected data, please use dataset and analysis folders.

If you want to see how did we instrument a web mapping application to measue iLT and CiLT, please see experminal experimental platform/client/web-client/map-webqoe.html

If you want run the experimental platfrom:

- Please copy  the  experimental platform folder to your linux machine,
- run ``` node experimental platform/server/server.js [participantid.csv] ``` . Replace the particiapant id. This code needs to be ran for each partiticpant. The collected data from  will be saved in a separate csv file. 
- Downlload http://netverge.net/map-tiles.zip and http://netverge.net/sat-tiles.zip.  Extract them Under client/map-tiles and client/sat-tiles, respectively.
- Run ``` node experimental platform/client/http_server.js ``` 
- Open the web page via ip address / machine name. i.e. http://localhost/index.html 

## Repository Structure 

### helper.py

helper.py reads the raw data from dataset/raw_data/raw_data.csv and extracts the required information from the collected data. iLT and CiLT are computed based on the equations explained in [published url].

## Dataset Folder 

### raw_data

Includes the raw data collected during the subjective study. The data records contain time stamps and extra information about users' clicks. i.e. the coordinates of the mouse clicks on the screen.  

### processed _data 

Contains clean data proccessed by helper.py.


### questionnaire 
Includes demographical and previous information of the participants.

## Contributors
Mr. Hamed Jahromi
Dr. Declan Delaney
Dr. Andrew Hines 

## How to cite?
If you want to cite the data / platform, please cite the followying paper:
[bib info]

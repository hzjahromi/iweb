## Estimating Quality of Experience for Interactive Web Applications User Study 
## Use Case: Web Mapping Application
## Objectives:
To investigate how to measure waiting time for a user's interactions with a web application across a session and correlate it with user-reported perceived quality.  We introduced two new measures: interactive Load Time (iLT) and Total Completed interactive Load (TCiL) to establish the waiting time associated with a web application user’s interaction. 

## Definitions:
### Interactive Load Time (iLT):
 iLT is the time taken to complete an interactive load starting from user interaction (e.g. a mouse click) to the completed update of the web application display.
### Total Completed interactive Load (TCiL):
TCIL represents the number of times that the iLT is successfully measured for the entire session time. 

## Study Process and Parameters
For more information about the study process and parameters, please read the published paper from [paper-url]

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

Please note that the python codes available in this repository have been developed using Python 3.6. 

The main dependencies for running the experimental platform:
- Ubuntu or CentOS
- node js

## Quickstart

If you want to run an analysis on the collected data, please use dataset and analysis folders.

If you want to see how we instrumented a web mapping application to measure iLT and TCiL, please see experimental platform/application server/web-client/map-webqoe.html

If you want to run the experimental platform:

- Please copy the  experimental platform folder to your Linux machine,
- run ``` node experimental platform/controller/controller.js [participantid.csv] ```. Replace the participant id. This code needs to be executed for each participant. The collected data will be saved in a separate CSV file. 
- Download http://netverge.net/map-tiles.zip and http://netverge.net/sat-tiles.zip.  Extract them Under client/map-tiles and client/sat-tiles, respectively.
- Run ``` node experimental platform/application server/http_server.js ``` 
- Open the web page via IP address/machine name. i.e. http://localhost/index.html 

## Repository Structure 

### helper.py

helper.py reads the raw data from dataset/raw_data/raw_data.csv and extracts the required information from the collected data. iLT and TCiL are computed based on the equations explained in [published URL].

## Dataset Folder 

### raw_data

raw_data.csv includes the raw data collected during the subjective study. The data records contain time stamps and extra information about users clicks. i.e. the coordinates of the mouse click on the screen.  

### processed _data 

dataset.csv contains clean data processed by helper.py.


### questionnaire 
Includes demographical and previous information of the participants.

## Contributors
Mr. Hamed Jahromi

Dr. Declan Delaney

Dr. Andrew Hines 

## How to cite?
If you want to cite the data/platform, please cite the following paper:
[bib info]

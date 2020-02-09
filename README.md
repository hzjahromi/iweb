## Estimating Quality of Experience for Interactive Web Applications Ueer Study 
## Use Case: Web Mapping Application
## Objectives:
To investigate how to measure waiting time for a user's interactions with a web application across a session and correlate it with user-reported perceived quality.  We introduced  two new measures: interactive Load Time (iLT) and Total Completed interactive Load (TCiL) to establish the waiting time associated with a web application user's interactions. 

## Definitions:
### Interactive Load Time (iLT):
 is the time taken to complete aninteractive load starting from a user interaction (e.g. a mouseclick) to the completed update of the web application display.
### Total Completed interactive Load (TCiL):
represents the num-ber  of  times  that  the  iLT  is  successfully  measured  for  theentire session time. 

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



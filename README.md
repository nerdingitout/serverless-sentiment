# Deploy a Serverless Application that detects sentiment of text on Red Hat OpenShift
## Introduction
This tutorial aims to demonstrate the serverless functionality on Red Hat OpenShift. In this tutorial you will deploy an application that is made of frontend and backend. The frontend consists of a simple form where the user submits a sentence which is then processed in the backend to later view the output of the sentiment. The backend is a python application that uses TextBlob library to detect the sentiment in addition to Cloudant to save and fetch results.
## Prerequisites
For this tutorial you will need:
- Red Hat OpenShift Cluster 4.3 on IBM Cloud.
- oc CLI (can be downloaded from this link or you can use it at http://shell.cloud.ibm.com/.
## Estimated Time
It will take you around 30 minutes to complete this tutorial.
## Steps
- Create Cloudant Service on IBM Cloud
- Login to your OpenShift Cluster
- Install OpenShift Serverless Operator
## Create Cloudant Service on IBM Cloud
## Login to your OpenShift Cluster
## Install OpenShift Serverless

You can install the OpenShift Serverless Operator using the OperatorHub in your OpenShift dashboard. Use Update Channel version 4.5

![Serverless Operator](images/serverless-operator.png)

![Serverless Operator Configuration](images/serverless-operator-config.png)
## Summary

# Deploy a Serverless Application that detects sentiment of text on Red Hat OpenShift
## Introduction
This tutorial aims to demonstrate the serverless functionality on Red Hat OpenShift. In this tutorial you will deploy an application that is made of frontend and backend. The frontend consists of a simple form where the user submits a sentence which is then processed in the backend to later view the output of the sentiment. The backend is a python application that uses TextBlob library to detect the sentiment in addition to Cloudant to save and fetch results.
## Prerequisites
For this tutorial you will need:
- Sign up for your IBM Cloud account – https://ibm.biz/BdfFXA
- Register for the live stream and access the replay – https://www.crowdcast.io/e/serverless-knative
- Red Hat OpenShift Cluster 4 on IBM Cloud. You can get it from
  - URL:
  - Key:
- oc CLI (can be downloaded from this link or you can use it at http://shell.cloud.ibm.com/.
## Estimated Time
It will take you around 30 minutes to complete this tutorial.
## Steps
- Create Cloudant Service on IBM Cloud
- Install OpenShift Serverless Operator
- Login to your OpenShift Cluster
## Create Cloudant Service on IBM Cloud
In in this tutorial we will be using Cloudant to save the JSON objects in the database. Create the service on IBM Cloud and name it 'cloudant-sentiment'.
![cloudant service](https://user-images.githubusercontent.com/36239840/105366717-16b79580-5c19-11eb-96b5-143304b50020.JPG)
<br>Once created, go to the newly provisioned service and create credintials from 'Service Credintials' tab, make sure the role is 'Manager'. You will be using these credintials in your code at a later step.
![credintials](https://user-images.githubusercontent.com/36239840/105366671-099aa680-5c19-11eb-8960-dd609bfbb297.JPG)

## Install OpenShift Serverless

You can install the OpenShift Serverless Operator using the OperatorHub in your OpenShift dashboard. Use Update Channel version 4.5

![serverless operator](https://user-images.githubusercontent.com/36239840/105360538-21baf780-5c12-11eb-8b87-41c77346dca0.JPG)

![installed](https://user-images.githubusercontent.com/36239840/105361025-af96e280-5c12-11eb-8aa6-38d58d4f4b65.JPG)
## Login to your OpenShift Cluster

## Summary

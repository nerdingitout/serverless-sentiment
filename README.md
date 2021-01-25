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
- Fork the GitHub repo
- Create Cloudant Datavase on IBM Cloud
- Install OpenShift Serverless Operator
- Login to your OpenShift Cluster
## Fork the GitHub repo
- First thing you need to do is fork the GitHub repository so you can make your own changes later.

## Create Cloudant Database on IBM Cloud
- In in this tutorial we will be using Cloudant to save the JSON objects in the database. Create the service on IBM Cloud and name it 'cloudant-sentiment'.
![cloudant service](https://user-images.githubusercontent.com/36239840/105366717-16b79580-5c19-11eb-96b5-143304b50020.JPG)
- Once created, go to the newly provisioned service and create credintials from 'Service Credintials' tab, make sure the role is 'Manager'. You will be using these credintials in your code at a later step.
![credintials](https://user-images.githubusercontent.com/36239840/105366671-099aa680-5c19-11eb-8960-dd609bfbb297.JPG)
- Next, go to Dashboard under Manage tab and click 'Launch Dashboard'.<br>
![launch dashboard](https://user-images.githubusercontent.com/36239840/105606331-26b6ad00-5db2-11eb-868a-aaaa5428f2e6.JPG)
- Then create the Database as shown in the image. Name it 'sample', select Non-parttioned, and click Create.
![createdb](https://user-images.githubusercontent.com/36239840/105606398-8c0a9e00-5db2-11eb-8fc6-edddf29e7596.JPG)
- The sample database opens automatically. Leave the database empty for now. At a later step, you will create the documents through the backend.

## Install OpenShift Serverless
- From the web console, you can install the OpenShift Serverless Operator using the OperatorHub in your OpenShift dashboard. Use Update Channel version 4.5
![serverless operator](https://user-images.githubusercontent.com/36239840/105360538-21baf780-5c12-11eb-8b87-41c77346dca0.JPG)
![installed](https://user-images.githubusercontent.com/36239840/105361025-af96e280-5c12-11eb-8aa6-38d58d4f4b65.JPG)

## Login from the CLI
- Go to the web console and click on your username at the top right then 'Copy Login Command', then display the token and copy the ```oc login``` command in your terminal.<br>
![login](https://user-images.githubusercontent.com/36239840/97104809-26821500-16d0-11eb-936e-c2b7fb914523.JPG)

## Create Project
- From the CLI, create a project and name it 'sentiment-project' as shown in the following command.<br>
```oc new-project sentiment-project```

## Create Backend Application
In this step, you will be creating the backend application through the ```service.yaml``` file that's in the backend directory in the github repo. Use the following command.<br>
```oc apply -f https://raw.githubusercontent.com/nerdingitout/serverless-sentiment/main/backend/service.yaml```
<br>
The yaml file contains the following information. Make sure that the namespace matches the name you created.<br>
```
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: sentiment 
  namespace: sentiment-project 
spec:
  template:
    spec:
      containers:
        - image: s4saif/senti:v6
          env:
            - name: TARGET
              value: "Sample v3"
```
<br>Once created, you can find the newly deployed application on the topology as shown below. Keep in mind that it is a serverless application so the pods will be terminated if you aren't accessing it which means the circle around the pod will be colored in white. If you try to access the application externally, you will notice new pods have been created, which will change the color to dark blue. You will notice that the application would show 404 status, but don't worry much, we will be using the application with the frontend application.
![topology backend](https://user-images.githubusercontent.com/36239840/105719666-fbf86000-5f3b-11eb-8cfc-6328f0be8e26.JPG)


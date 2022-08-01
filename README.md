# Amplify Studio Tutorial 

Building Yelp for Bathrooms. This was my demo for the AWS NYC Summit talk. 

It's inspired by Seinfeld and the [scene where George Costanza](https://www.youtube.com/watch?v=JYVBRQ7t46g) says "give me an address, ill tell you the best bathroom in the city." 

<img src='screenshot_1.png' height='425' />

View the running demo here [https://main.d2ddguywmojniz.amplifyapp.com/](https://main.d2ddguywmojniz.amplifyapp.com/)

## Amplify Studio 

[Amplify Studio](https://aws.amazon.com/amplify/studio/) is a new service apart of the Amplify portfilio -- it helps frontend developers more easily build UIs by converting Figma files to human-readable react code! You don't have to be a CSS wiz! 

# Building the App

Step-by-step on how to configure, develop & deploy this app on AWS.

## Housekeeping

## Studio Setup

Studio will orchestrate handling your data APIs, generating your React code from Figma and more, like authentication! 

1. Sign-in to AWS or [Create an Account](https://us-west-2.console.aws.amazon.com)
2. Head over to AWS Amplify, New app -> Build an app. Give it a name, deploy. 
3. Launch Studio! FYI, you can grant co-workers access to studio without requiring an AWS account.
4. Let's add our data models. Use the suggested model below called `Bathrooms`

```
name -> String
rating -> Float
address -> String
description -> String
image_url -> String 
```
5. Save, and deploy. 

## Figma Setup 

We reccomend starting with our [base Figma template](https://www.figma.com/community/file/1047600760128127424) and altering/building components from there. These privatives are tied to [Amplify UI library](https://ui.docs.amplify.aws/).

1. For this tutorial, you can use my [Figma File](https://www.figma.com/file/OKViErrJvjjAgTqNCD4azZ/AWS-NYC-Summit-2022?node-id=861%3A3635) where I've configured 4 components to match the above design. The components are called:

```
NavBar
BathroomCard
HeroGeorge
TestFooter
```
2. Play around with the file, and create or alter a component of your own! We will use shortly.

<img src='screenshot_2.png' height=300 />

## Local Dev Setup

1. Create a base React app to give us a starting point. 
2. I used CRA - `npx npx create-react-app .`
3. `npm install` & `npm start` - confirm this works as expected
4. Install Amplify CLI (Amplify's toolchain) `npm install -g @aws-amplify/cli`
5. Install Amplify's UI lib `npm install aws-amplify @aws-amplify/ui-react`


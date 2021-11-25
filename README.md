# Fassos ( Cloud Technologies Project 2 )

- University Name: http://www.sjsu.edu/
- Course: [Cloud Technologies](https://sjsu.instructure.com/courses/1464821)
- Professor [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/) (This is link to LinkedIn Profile)
- Students:
    - [Shivani Pandit](https://www.linkedin.com/in/shivanikpandit/)
    - [Chirag Rajpal](https://www.linkedin.com/in/chirag-rajpal/)
    - [Satish Kathiriya](https://www.linkedin.com/in/satishkathiriya/)
    - [Supreetha M A](https://www.linkedin.com/in/supreetha-m-a-a18340103/)

  
    ## Problem Statement:
    The Fassos is a whole new way to order take-out, that delivers fresh homemade food made by your neighbor, to your door. 

    Discover local home-based cooks in your community, browse their unique menus, and let them handle the cooking for you!
    
    ## Solution the our Project Provides:
     Faasos is a food app, which provides a user-friendly interface to order home made food.
     Having it’s ground in AWS it is a highly scalable and responsive application.

    ## Features of our Project:
    ```
    Food Ordering:
    Customer will register in app
    Customer can select from a range of restaurants.
    Add items to the cart
    Checkout and place the order.
    Restaurant registration:
    Restaurant Description
    Upload Image to represent restaurant
    Menu upload
    ```

  ## Sample Demo Screenshots
  
  1. **Home Page** 
     
     ![Create Account](https://github.com/shivanipandit88/FoodApp/blob/main/Screenshots/HomePage1.PNG?raw=true)  

  
  2. **Registration Page**
 
      ![Create Account](https://github.com/shivanipandit88/FoodApp/blob/main/Screenshots/Create%20Account.PNG?raw=true) 
      
  3. **Login Page**
    
    ![Create Account](https://github.com/shivanipandit88/FoodApp/blob/main/Screenshots/Login%20Page.PNG?raw=true)
         
  4. **Register Restaurant Page**
    
    ![Create Account](https://github.com/shivanipandit88/FoodApp/blob/main/Screenshots/Create%20Restaurant.PNG?raw=true)
     
  5. **Restaurant Menu Page**

    ![Create Account](https://github.com/shivanipandit88/FoodApp/blob/main/Screenshots/MenuPage.PNG)
  
  6. **Order Cart Page**
  
    ![Create Account](https://github.com/shivanipandit88/FoodApp/blob/main/Screenshots/CartItem.PNG)
    
    
## Solution for each requirement present in the problem statement.
As a solution to the problem statement we mention above, we have developed Fassos App where the customers can register and order fresh homemade food from the registered restaurants (can be an individual/group). 


## Public URL to the application:
https://main.d30i7ibo5hjmbm.amplifyapp.com/
Test account credentials:
Username: shivanipandit88
Password: user1234

## URL to GitHub :
https://github.com/shivanipandit88/FoodApp


    
## Pre-requisites
```
Install npm
Install and configure amplify CLI
Clone this git repo using amplify
Project Set-up
amplify init --app https://github.com/shivanipandit88/FoodApp will initialize locally.

amplify push will then create the following resources in the AWS cloud:

S3 buckets (hosting the frontend + for prescription upload/download)
AppSync (for GraphQL API between frontend and database)
Cloudfront distribution (for frontend distribution)
DynamoDB (for database storage)
Lambda (for authorization of the user at the time of signup)
```

## Local configuration
How to set up and run project locally:
```
git clone https://github.com/shivanipandit88/FoodApp
cd FoodApp
npm init
npm start
The local Host should run on http://localhost:3000 
```

 ## Architecture Diagram:
   This project frontend is created using ReactApplication while the backend is managed using AWS Amplify Services.
   
   .
    ![Create Account](https://github.com/shivanipandit88/FoodApp/blob/main/Screenshots/CLoudProject2_architechture.drawio.png)
   
     
## Individual contribution breakdown :

## Shivani Pandit : 
```
Step 1: Start with getting introduced with AWS Amplify. Set up the Amplify CLI on my local system with an AWS IAM user and deployed a basic React Application
Step 2: Set up Git repository with Amplify CI/CD
Step 3: Implemented Cognito for User Registration and Login with  verification code sent to their email address. 
Step 4: Started working on the UI in React using Bootstrap, HTML and CSS
Step 5: Added APIs to Amplify and generate database tables in AWS DynamoDB. Using those APIs connected the UI to the backend
Step 6: Initially started with Registering a Restaurant to deliver food. 
Step 7: Populate the Restaurant Table on the homepage for the user to view the options to choose from.
Step 8: Add Menu Option for the newly registered restaurants.
Step 9: Populate the Menu page when a user selects a restaurant.
Step 10: Provided the Amplify setup to my teammates and allocated the remaining modules for them to work on.
Step 11: Documentation, Updating Readme.md
```

## Chirag Rajpal :
```
Started with getting introduced to AWS Amplify, React and Node.js
Made a setup of Amplify with the existing React App configuration.
S3 image storage Worked on application to understand how to fetch the images from S3 bucket using Amplify by enabling the S3 policies and fetch the same to the Application.
Worked on Cart Module to pass the Menu items from MenuID table to Cart Table.
Tested the application for functionality testing.
Created Architecture diagram, Documentation and PPT
```

## Satish Kathiriya : 
```
Start with getting introduced with AWS Amplify, React and node.
Setup Amplify with existing React App
Worked on Cart Module - Created the tables and api endpoints for the cart page and integrated it with frontend UI.
Tested the application: Integration testing
Created Architecture diagram, Documentation and PPT
```

## Supreetha M A : 
```
Requirement analysis for the UI wireframes
Testing the application
Documentation and PPT
```   

# Getting started with PokeBerry App

## Table of Contents
1. Introduction
2. General information
3. Visual overview of PokeBerry App
4. Installation guide
5. Application functionalities
6. User access


## ***Introduction***

PokeBerry App has been built as `end assignment` of Frontend bootcamp for `NOVI Hogeschool`.

PokeBerry is a simple application that offers easy access to information about _Pokemon and pokeberries_. 
The goal of the app is to match the berries to the right Pokemon who eat them. 
Users can list through a full overview of Pokemon and berries, filter berries according to their firmness and flavor, search for Pokemon evolution chains, play Pokemon name-guessing game and much more!
Use this app in combination with Pokemon videogames, or just for fun. 


## ***2. General information***

### **React**
Poke Berry App is a simple application built in `React`, the library for web and native user interfaces.

### **PokeAPI documentation**
This application is using `The RESTful Pokemon API`. 
RESTful APIs are the most commonly used APIs that use HTTP protocol to create, read, update and delete data (CRUD).

>[!NOTE]
>The documentation of Pokemon API can be found on [PokeAPI website](https://pokeapi.co/docs/v2).

### **API key**
PokeAPI is not using API keys, therefore no API keys are required to run the PokeBerry App.

### **Backend**
This application is using the educational backend of Novi Hogeschool.

>[!NOTE]
>Please visit [Novi Hogeschool's educational backend](https://github.com/hogeschoolnovi/novi-educational-backend-documentation) for more information.



## ***3. Visual overview of PokeBerry App***

### _Landing page_
![landing](landing-page.png)

### _Home page_
![home](home-page.png)

### _Registration page_
![register](register.png)

### _Favorites page_
![favorites](favorites-page.png)

### _Pokemon overview_
![pokemons](pokemon-overview.png)

### _Single Pokemon_
![single-page](..%2F..%2FDesktop%2Fpokebery%20screenshots%2Fscreenshots%20application%2FScreenshot%202023-11-01%20at%2020.54.20.png)
   

## ***4.Installation Guide***

>[!IMPORTANT]
>To run this web application, you will need an IDE such as Webstorm. You will also need Node.js to run the PokeBerry App. 
>If you still don't have Node.js installed, please proceed with the installation before you continue.


>[!NOTE]
>Please visit [the website of Node.js](https://nodejs.org/en) to download Node.js and start the installation.


### **1.Navigate to PokeBerry App on GitHub**

[PokeBerry App on Github](https://github.com/marijana82/poke-berry-final-project)

### **2.Download the application via SSH link**

1. Click the `Code` button, choose `SSH key` and click on `Copy`

### **3.Follow the steps in your Webstorm**

1. Go to `Webstorm`, open File - New - Project from Version Control
2. Paste the URL link into the empty URL field, then click the button `Clone`


### **4.Install the project**

To install the project, type the following command in the terminal:
```
npm install
```
Click on Enter.


### **5.Run the project**

To run the project, type the following command in the terminal:
```
npm run start 
```
Click on Enter.


### **6.Open the project**

The project will open on [Localhost 3000] (http://localhost:3000/)


### **7.Exit the project**

If you want to exit the project type `CTRL + C` in the terminal. 


### **8.Re-run the project**

In case you want to re-run the project, type `npm start` in the terminal, then press Enter. 


## ***6. User access***

### **Registration and login**
You can register and login to this application by creating your own private account.
Users can log in just by their previously registered username and password.
Make sure the username and password contain `at least one number and one capital letter`.
>Example username: Scorbunny1
>Example password: Scorbunny1

A personal token is saved automatically in the backend. The user does not need the token to log in.

>[!WARNING]
>The personal token expires in an hour. To regain your access rights, you will have to create a new account. 



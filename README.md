# Getting started with PokeBerry App

# Table of Contents
1. _[Introduction](#1-introduction "Go to Introduction")_
2. _[General information](#2-general-information "Go to General information")_
3. _[Application functionalities](#3-application-functionalities "Go to Application functionalities")_
4. _[Installation guide](#4-installation-guide "Go to Installation guide")_
5. _[User access](#5-user-access "Go to user access")_
6. _[Visuals](#6-visuals "Go to visuals")_


## ***1. Introduction***

PokeBerry App has been built as end assignment of Frontend bootcamp for NOVI Hogeschool.

`PokeBerry is a simple application that offers easy access to information about _Pokemon and pokeberries_. 
The goal of the app is to match the berries to the right Pokemon who eat them. 
Users can list through a full overview of Pokemon and berries, filter berries according to their firmness and flavor, search for Pokemon evolution chains, play Pokemon name-guessing game and much more!
Use this app in combination with Pokemon videogames, or just for fun.` 


## ***2. General information***

### **React**
_Poke Berry App_ is a simple application built in [React](https://react.dev/), the library for web and native user interfaces.

### **PokeAPI documentation**


This application is using [RESTful PokeAPI](https://pokeapi.co/docs/v2).

_RESTful APIs are the most commonly used APIs that use HTTP protocol to create, read, update and delete data (CRUD)._

### **API key**
PokeAPI is not using API keys, therefore _no API keys are required_ to run the PokeBerry App.

### **Backend**
This application is using the educational backend of _Novi Hogeschool_.

>[!NOTE]
>Please visit [Novi Hogeschool's educational backend](https://github.com/hogeschoolnovi/novi-educational-backend-documentation) for more information.

## ***3. Application functionalities***

-Register and login
-Play Pokemon game
-Browse through the lists of Pokemon and berries
-Search for berries in query field
-Filter berries
-Search for Pokemon evolution chain in query field
-Add Pokemon to Favorites list
-Match berries to Pokemon
-Get detailed Pokemon and berry information on single Pokemon/berry page


## ***4. Installation Guide***

>[!NOTE]
> 
>To run this web application, you will need an IDE such as [Webstorm](https://jetbrains.com/webstorm/).
>
>You will also need Node.js to run the PokeBerry App. If you still don't have it installed, [please proceed with the installation of Node.js](https://nodejs.org/en) before you continue.

### **1. Go to PokeBerry App on GitHub**

[PokeBerry App on Github](https://github.com/marijana82/poke-berry-final-project)

### **2. Download the application via SSH link**

1. Click the `Code` button, choose `SSH key` and click on `Copy`

### **3. Follow the steps in your Webstorm**

1. Go to `Webstorm`, open File - New - Project from Version Control
2. Paste the URL link into the empty URL field, then click the button `Clone`


### **4. Install the project**

To install the project, type the following command in the terminal. Press Enter key after typing the command.
```
npm install
```


### **5. Run the project**

To run the project, type the following command in the terminal. Press Enter key after typing the command.
```
npm run start 
```


### **6. Open the project**

The project will open on [Localhost 3000](http://localhost:3000/)

### **7.Exit the project**

If you want to exit the project type `CTRL + C` in the terminal. 


### **8.Re-run the project**

In case you want to re-run the project, type `npm start` in the terminal, then press Enter key. 


## ***5. User access***

### **Registration and login**
A personal token is saved automatically in the backend. The user does not need the token to log in.

>[!IMPORTANT]
>The personal token expires in an hour. To regain your access rights, you will have to create a new account.
You can register and login to this application by creating your own private account.

Creating a private account requires filling in:
-unique username
-email
-password
-additional information and 
-user role 

>[!NOTE]
> Make sure the username and password contain `at least one number and one capital letter and are at least 6 characters long`.

Users can log in by their previously registered username and password.

>Example username: Scorbunny1

>Example password: Scorbunny1


## ***6. Visuals***
![pikachu](/../assets/screenshots/landing-page.png)

![onePokemon](/../assets/screenshots/single-pokemon.png)

![pokemons](/../assets/screenshots/pokemon-overview.png)


_[Go to top](#table-of-contents "Go to table of contents")_





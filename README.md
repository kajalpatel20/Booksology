# Bookslogy/ Library-Management-System

## Overview:

Welcome to Project 2! This is yet another important milestone in your full-stack journey: designing and building your second group full-stack web application. You and your team will design and build an app using the MVC paradigm, create your own server-side API, add user authentication, and connect to a database.

## Task:

For our second project we were tasked with working in groups to create a custom webpage using full-stack applications, git branching workflow, agile software development, and collaborative development.

## Learning Objectives:

1.) Speak technically about a feature you implemented in your project. 

2.) Explain and execute git branching workflow in a collaborative project. 

3.) Resolve merge conflicts. Explain agile software development. 

4.) Design, build and deploy a full-stack web application to Heroku 

5.) Prepare a professional presentation and repository README for the project.
 ## The Application:

 After brainstorming multiple ideas we settled on an application that used a custom rest api to create a system for searching and tracking library books called "Library Management System." 

 ## Elevator Pitch:

 Book Lovers and reading enthusiasts spend too much money on purchasing from from Amazon, Barnes & Noble, Google Books and the like... There is no need to do that when there are institutions that house these books called libaries and allow you to borrow them for free. The problem is that their websites are bland, boring and rarely interactive. Not anymore! The Library Management System is an intuitive and interactive application where users who sign up can look for and checkout books for free as well as create an online community for books lovers to interact with each other. And when they are done with these books, they can return them and save their space from clutter!

## The functions of the webpage are:

1.) When a user enters the home page they are presented with a login or a make an account screen.

2.) If the user does not already have an account they can click the create button which brings to a page where they can input their information.

3.) Once signed into their account a user can see the books borrowed on the home page (this is yet to be coded in right now it is just visual for what will be.)

4.) When a user clicks on the books page they are presented with a book list that can be populated by searching for a variety of means including: Genre, Title, Author, Publisher, Edition, ISBN, and number of pages.

5.) When the user inputs one of these criteria, the corresponding book or books populates to the list.
 ## Installation:

My application’s folder structure must follow the Model-View-Controller paradigm. I need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js ,[MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for my Models, and create an Express.js API for Controllers.

I also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

## Below is presentation slide demo:

[Demo video link for functioning link to localhost](https://docs.google.com/presentation/d/1wQdz8sbCI3icStVpewzMnppGo6kA_8V2j4JdsCafHkQ/edit?usp=sharing)

  ### Deployment: 

[Demo video link for functioning link to localhost](https://drive.google.com/file/d/1ZdBJvBcYslzUIw2LfrIPq8R5Bov_hQHL/view)

[Demo video link shows deployment did work on heroku](https://drive.google.com/file/d/11BqCQfdF9FwUpch6FrJ_P3kOn-dI6vQQ/view)

* The URL of the functional, deployed application.

https://obscure-atoll-40774.herokuapp.com/

* The URL of the GitHub repository, with a unique name and a readme describing the project: 

https://github.com/kajalpatel20/Booksology
  ## License:
 APACHE 2.0

  [![Github License](https://img.shields.io/badge/license-APACHE 2.0-blue.svg)]
## Questions:

The repo for this project can be found here

https://github.com/kajalpatel20/Booksology

For any questions or to report issues, email me at: kajalpatel20@gmail.com

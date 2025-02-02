//To overlap the content use position absolute
//to make it center mx-auto right-0 left-0. z-index


//Firebase Configuration
//After setting up the firebase app it will proved the configuration code to connect to db
//create a file firebase.js and add this to our project.
//Then go to firebase.google.com project Overview --> Authentication ---> Get started ---> Sign in methods
//Select the Email/Password -- Enable it --> save
//Registered users we can see it in users


//Now set up the Signup form BE
//got to firebase documentation in new window
//search for authentication -- selecte firebase authentication ---? Web --> Password authentication 
//This will provide the signup signin and onAuthStateChanges boiler plate code and signout also. use it in our project
//In all the code auth is same so place it in auth and take it by importing
//for signUp use createUserWithEmailAndPassword and for signin use signInWithEmailAndPassword. For sign and aignup state changes use onAuthStateChanged to take the user info take it from manage users.place it in rootlevel component.



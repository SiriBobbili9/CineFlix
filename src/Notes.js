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
//onAUthStateChanged only take care of browsing it won't allow the user to navigate to browse from login when no user is there and from login to browse from login page. need to keep this in root level place it in Header.
//when Header component unMounts we need to unSubscribe the onAuthStateCHanged
//we dont need to navigate in signout also 
//In update the profile we need to store this data in redux from login

//Now for the movie list use the TMDB(The Movie DataBase)
//Steps
//Login to Tmdb portal
//CLick on Edit profile in Profile Section
//got to API there you need to register the app.
//While registering an app we need the app url so deploy the app with firebase



// Deploying the app
//Steps
//npm install -g firebase-tools
//firebase login
//firebase init
//It will provide the options select the Hosting: Configure files for Firebasehosting
//Project setup? Existing
//Public directory -- build
//configure a ssingle app  -- no
//after generating the firebase.json and its files 
//firebase.json should be 
// {
//     "hosting": {
//       "public": "build",
//       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
//       "rewrites": [{ "source": "**", "destination": "/index.html" }]
//     }
//   }
//After that run the build npm run build
//then firebase deploy it will provide the hosting url

//Now register the key in TMDB. it will generate the access key this one we need to use it in fetching the api
//Npw for APis -- got to firebase documentaion siet . https://developer.themoviedb.org/
//Go to API References -->then Goto now playing Movies (this is where all the movies are listed)
//Fetch the apis in our app by changing to Javascript it will provide the request body. As it is same for all apis keep it in constants and pass the authorization what we have generated

//Making videos
//for videos data from api we will get the id and the backdrop paths and overview only so with this id we need to fetch the youtupe video so got to youtube play one video click on share embed take iframe html code .
//Now for videos we need to go to TMDB Documentation and got Movies and then Videos take that api from that fetch the data.
//Movie id we need to pass dynamically to api. So we will be getting different type of Movies form this list filter the trailer video and take the first trailer for the background.This api will provide the key this key we need to pass it to the iframe src.

//Secondaru Container
//FOr the Movies cards we need the poster-path  that we will be getting from an api so we need to attach with the  full path so search in tMDB DOcumentaion with image url. you will find the image url pass the path dynamically. Place it in the const file.
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg;
//use all popular trending apis


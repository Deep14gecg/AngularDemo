import { Injectable } from '@angular/core';
import { CanActivate, Router , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import * as firebase from 'firebase';


@Injectable()
export class UserService implements CanActivate {

  userLoggedIn : boolean = false;
  loggedInUser : string;
  authUser : any ;

  constructor( private router : Router ) {
    firebase.initializeApp({
      apiKey: "AIzaSyCc4OyLAGUbX5FZSDZYW0gXGbL2EdQ7NRs",
    authDomain: "blog-ba9ca.firebaseapp.com",
    databaseURL: "https://blog-ba9ca.firebaseio.com",
    projectId: "blog-ba9ca",
    storageBucket: "blog-ba9ca.appspot.com",
    messagingSenderId: "1062738239905"
    });
  }

  verifyLogin(url : string) : boolean {
    if ( this.userLoggedIn ) {
       return true;
     } else {
    this.router.navigate(['/admin/login']);
    return false;
    }
  }

  canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : boolean {
    let url : string = state.url;
    return this.verifyLogin(url);
  }

  verifyUser(){
    this.authUser = firebase.auth().currentUser;
    if(this.authUser){
      alert(`welcome ${this.authUser.email}`);
      this.loggedInUser = this.authUser.email;
      this.userLoggedIn = true ;
      this.router.navigate(['/admin']);
    }
  }

  login(loginEmail : string , loginPassword : string){
    firebase.auth().signInWithEmailAndPassword(loginEmail,loginPassword)
    .catch(function(error){
      alert(`${error.message} Unable to Login. Try again! `);
    });
  }

  logOut(){
    this.userLoggedIn = false;
    firebase.auth().signOut().then(function(){
      alert(`Logged Out`);
    },function(error){
      alert(`${error.message} Unable to logout. Try again!`);
    });
  }

  register(email : string , password : string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(function(error){
      alert(`${error.message} Please Try Again!`);
    });
  }


}

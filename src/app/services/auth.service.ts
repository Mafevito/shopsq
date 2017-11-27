import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService{
  constructor(private angularFireAuth: AngularFireAuth) {
    this.isLogged();
  }
  public facebookLogin(){
    this.angularFireAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider)
    .then((result) => {
      console.log(result);
      alert('Usuario login con facebook');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
         .then((response) => {
           alert('Usuario login con exito');
           console.log(response);
         })
         .catch((error) => {
           alert('Hubo un error');
           console.log(error);
         })
  }

  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
         .then((response) => {
           alert('Usuario registado con exito');
           console.log(response);
         })
         .catch((error) => {
           alert('Hubo un error');
           console.log(error);
         })
    }
    // Va a a estar verifcando si el user esta logueado
    public isLogged() {
      return this.angularFireAuth.authState;
    }
}

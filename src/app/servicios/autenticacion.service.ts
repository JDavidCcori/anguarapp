import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  userData: any;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      }else{
        localStorage.setItem('user', '');
      }
    })
   }
   async login(email: string, password: string) {
     this.afAuth.signInWithEmailAndPassword(email, password).then(()=>{
       this.router.navigate(['principal']);
     }).catch(Response=>{
       alert("USUARIO O CONTRASEÑA INCORRECTO");
     })
   }
   async logout(){
     await this.afAuth.signOut();
     localStorage.removeItem('user');
     this.router.navigate(['login']);
   }
}

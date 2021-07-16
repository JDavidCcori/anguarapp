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
   //salir de la pagina
   async logout(){
     await this.afAuth.signOut();
     localStorage.removeItem('user');
     this.router.navigate(['login']);
   }
   //registrar usuario
   registrar(email:string, password:string, repassword:string){
     if(password!=repassword){
       window.alert("las contraseñas no coinciden");
     }else{
       //salir del registro, una ves registrado
       this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
         window.alert("Se ha registrado el usuario");
         console.log(result.user)
       }).catch((error) => {
         window.alert(error.message);
       });
     }
   }
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegistrousuarioComponent} from './registrousuario/registrousuario.component';
const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'login', component: LoginComponent},
  { path: 'redistrousuario', component:RegistrousuarioComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

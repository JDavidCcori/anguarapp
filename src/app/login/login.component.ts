import { Component, OnInit } from '@angular/core';
import { AutenticacionService} from '../servicios/autenticacion.service';
import { MatDialog} from '@angular/material/dialog';
import { RegistrousuarioComponent} from '../registrousuario/registrousuario.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public autservice: AutenticacionService, public di: MatDialog) { }
  openDialog(){
    this.di.open(RegistrousuarioComponent);
  }

  ngOnInit(): void {
  }

}

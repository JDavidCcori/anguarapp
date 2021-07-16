import { Component, OnInit } from '@angular/core';
import { AutenticacionService} from '../servicios/autenticacion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrousuarioComponent implements OnInit {
  userForm: FormGroup | any;



  constructor(public autservice: AutenticacionService, public di: MatDialog) { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      pwd: new FormControl(null, Validators.required),
      pwd2: new FormControl(null, Validators.required)
    });

  }

  closeDialog(){
    this.di.closeAll()
  }

  limpiarForm(){
    this.userForm.controls['email'].setValue(null);
    this.userForm.controls['pwd'].setValue(null);
    this.userForm.controls['pwd2'].setValue(null);
  }

}

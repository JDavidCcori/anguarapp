import { Component, OnInit } from '@angular/core';
import { AutenticacionService} from '../servicios/autenticacion.service';
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { PersonaComponent } from '../persona/persona/persona.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public autservice: AutenticacionService, public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  registrarPersona(){
    this.dialog.open(PersonaComponent);
  }

  abrirlistapersona() {
    this.router.navigate(['listapersonas']);

  }
}

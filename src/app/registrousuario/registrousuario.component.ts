import { Component, OnInit } from '@angular/core';
import { AutenticacionService} from '../servicios/autenticacion.service';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrousuarioComponent implements OnInit {

  constructor(public autservice: AutenticacionService) { }
  ngOnInit(): void {
  }
}

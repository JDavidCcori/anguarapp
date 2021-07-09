import { Component, OnInit } from '@angular/core';
import { AutenticacionService} from '../servicios/autenticacion.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public autservice: AutenticacionService) { }

  ngOnInit(): void {
  }

}

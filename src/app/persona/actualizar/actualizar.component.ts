import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../servicios/persona.service'
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(public ps: PersonaService) { }

  form = new FormGroup({
    id: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    genero: new FormControl('')
  })

  ngOnInit(): void {
  }
  editar(){
    this.ps.crearPersona(this.form.value)
  }

}

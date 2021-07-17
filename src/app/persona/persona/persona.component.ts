import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})


export class PersonaComponent implements OnInit {

  constructor(public ps: PersonaService) { }


  form = new FormGroup({
    id: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    genero: new FormControl('')
  })

  ngOnInit(): void {
  }

  guardar(){
    this.ps.crearPersona(this.form.value)
  }
}

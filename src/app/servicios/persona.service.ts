import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Persona } from '../interfaces/persona';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export interface personaID extends Persona {
  id: string
}

@Injectable({
  providedIn: 'root'
})


export class PersonaService {


  private listarP: AngularFirestoreCollection<Persona>;
  private personas: Observable<personaID[]>;

  public seleccionado = {
    id: '',
    Nombres: '',
    Apellidos: '',
    Genero: ''
  }

  constructor(private firestore: AngularFirestore) {

    this.listarP=firestore.collection<Persona>('PERSONA');
    this.personas =this.listarP.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as Persona;
        const id = a.payload.doc.id;
        return {id, ...data}
      }))
    );
  }

  crearPersona(data:personaID){
    this.firestore.collection('PERSONA').doc(data.id).set({
      "Nombres": data.nombres,
      "APellidos": data.apellidos,
      "Genero": data.genero
    }).then(() => {
      window.alert("Se ha guradado la persona")
    }).catch((error)=>{
      window.alert(error)
    });
  }

  obtenerPersonas() {
    return this.personas;
  }

  eliminiarPersona(id: string){
    this.listarP.doc(id).delete().then(() =>{
      window.alert("Registro eliminado")
    }).catch((error)=>{
      window.alert(error)
    })
  }

}

import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog'
import { ActualizarComponent } from '../persona/actualizar/actualizar.component';

@Component({
  selector: 'app-listarpersonas',
  templateUrl: './listarpersonas.component.html',
  styleUrls: ['./listarpersonas.component.css']
})
export class ListarpersonasComponent implements AfterViewInit, OnInit {

  public displayedColumns: string[] = ['dni', 'nombres', 'apellidos', 'genero','acciones'];

  public dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort:any;


  constructor(public ps:PersonaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.obtenerPersonas().subscribe(res =>{
      this.dataSource.data = res
      console.log(res)
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  eliminar(id: string){
    this.ps.eliminiarPersona(id);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  abrirEditarPersona(elemento: any){
    this.ps.seleccionado = elemento
    this.dialog.open(ActualizarComponent)
  }

}

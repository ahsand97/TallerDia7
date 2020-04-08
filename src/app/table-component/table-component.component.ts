import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Usuario } from '../models/user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  @Input() data:any;

  displayedColumns: string[] = ['Usuario', 'Nombre', 'Email'];
  dataSource = new MatTableDataSource<Usuario>();
  usuarios: Usuario[] = []
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (this.data != null){
      let user = new Usuario(this.data.usuario, this.data.nombre, this.data.email);
      this.usuarios.push(user);
      this.dataSource.connect().next(this.usuarios);
    }
  }

}

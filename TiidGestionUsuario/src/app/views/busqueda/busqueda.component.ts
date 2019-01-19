import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/_models/Usuario';
import { UsuarioService } from 'src/app/_service/Usuario.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[];
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    this.usuarioService.servListarUsuarios()
      .subscribe(usuarios => {
        this.usuarios = usuarios;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/_models/Usuario';
import { UsuarioService } from 'src/app/_service/Usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  registroProyecto: any = {};
  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.registroProyecto.nombre="";
    this.registroProyecto.apellidos="";
    this.registroProyecto.codigo="";
    this.registroProyecto.clave="";
  }

  registrarUsuario(){
  
    this.usuario = this.registroProyecto;

    this.usuarioService.servRegistrarUsuario(this.usuario).subscribe(() => {
     console.log("Registro Correcto");
    }, error => {
      console.log("Error");    
    });
}

}

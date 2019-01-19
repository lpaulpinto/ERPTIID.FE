import { Injectable } from '@angular/core';
import { Usuario } from '../_models/Usuario';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

baseUrl = environment.apiUrl;

constructor(private httpClient: HttpClient) { }

servRegistrarUsuario(usuario: Usuario){
  return this.httpClient.post(this.baseUrl + 'usuario/registrarUsuario', usuario, { headers: new HttpHeaders().set('content-type','application/json') });
} 

servListarUsuarios(){
  return this.httpClient.get<Usuario[]>(this.baseUrl+'usuario/obtenerUsuarios');
}

}

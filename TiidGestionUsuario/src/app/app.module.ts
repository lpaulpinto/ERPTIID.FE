import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { BusquedaComponent } from './views/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutingModule),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

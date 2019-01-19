import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { BusquedaComponent } from './views/busqueda/busqueda.component';

export const AppRoutingModule: Routes = [
  { 
    path: '',
    component: UsuarioComponent,
  },
  {
    path: 'busqueda',
    component: BusquedaComponent 
  },  
];
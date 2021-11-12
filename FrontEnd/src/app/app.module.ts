import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/home/register/register.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { ClientComponent } from './components/client/client.component';
import { RouterModule } from '@angular/router';
import { NavbarAdminComponent } from './components/administrador/navbar-admin/navbar-admin.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanesComponent } from './components/planes/planes.component';
import { MedidasComponent } from './components/medidas/medidas.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { GestionProductosComponent } from './components/administrador/gestion-productos/gestion-productos.component';
import { NutricionistaComponent } from './components/nutricionista/nutricionista.component';
import { PlanPacienteComponent } from './components/nutricionista/plan-paciente/plan-paciente.component';
import { ListaNutricionistaComponent } from './components/nutricionista/lista-nutricionista/lista-nutricionista.component';
import { RegistroConsumoComponent } from './components/client/registro-consumo/registro-consumo.component';
import { ReporteAvanceComponent } from './components/client/reporte-avance/reporte-avance.component';
import { NutrinavbarComponent } from './components/nutricionista/nutrinavbar/nutrinavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ClientComponent,
    NavbarAdminComponent,
    AdministradorComponent,
    ProductosComponent,
    PlanesComponent,
    MedidasComponent,
    RecetasComponent,
    GestionProductosComponent,
    NutricionistaComponent,
    PlanPacienteComponent,
    ListaNutricionistaComponent,
    RegistroConsumoComponent,
    ReporteAvanceComponent,
    NutrinavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'singup', component: RegisterComponent}, 
      {path: 'login', component: LoginComponent},
      {path: 'administrador', component:AdministradorComponent },  
      {path: 'productos', component:ProductosComponent}, 
      {path: 'nutricionista', component:NutricionistaComponent },  
      {path: 'planes', component:PlanesComponent },  
      {path: 'client', component:ClientComponent }, 
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

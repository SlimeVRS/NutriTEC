import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule} from '@angular/material/select';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { NavbarClientComponent } from './components/client/navbar-client/navbar-client/navbar-client.component';
import { GestionRecetasComponent } from './components/client/gestion-recetas/gestion-recetas/gestion-recetas.component';
import { RegAdminComponent } from './components/home/register/registro-admin/reg-admin/reg-admin.component';
import { RegNutriComponent } from './components/home/register/registro-nutri/reg-nutri/reg-nutri.component';
import { NavRegComponent } from './components/home/register/navbar-reg/nav-reg/nav-reg.component';
import { ListaPlanesComponent } from './components/nutricionista/lista-planes/lista-planes.component';
import { ProducregistComponent } from './components/nutricionista/producregist/producregist.component';
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
    GestionRecetasComponent,
    NavbarClientComponent,
    RegAdminComponent,
    RegNutriComponent,
    NavRegComponent,
    ListaPlanesComponent,
    ProducregistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
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
      {path: 'planPaciente', component:PlanPacienteComponent }, 
      {path: 'medidas', component:MedidasComponent }, 
      {path: 'nutriproductos', component:ProducregistComponent }, 
      {path: 'gestion_recetas', component:GestionRecetasComponent }, 
      {path: 'avance', component:ReporteAvanceComponent },
      {path: 'gestionProductos', component:GestionProductosComponent },
      
      {path: 'consumo', component:RegistroConsumoComponent },
      {path: 'radmin', component:RegAdminComponent }, 
      {path: 'rclient', component:RegisterComponent },
      {path: 'rnutri', component:RegNutriComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
      
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pro1Component } from './pro1/pro1.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: "",redirectTo:"pro1",pathMatch:"full"},
  {path :"pro1", component:Pro1Component},
  {path :"register", component:RegisterComponent},
  {path :"home", component:HomeComponent},
  {path :"About", component:AboutComponent},
  {path :"contact", component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

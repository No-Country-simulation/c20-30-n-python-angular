import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' } ,
  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'specialities', component:SpecialitiesComponent},
  {path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products/edit/:id', component:EditComponent},
  {path:'products', component:ListComponent},
  {path:'products/new', component:NewComponent},
  //catch all
  {path: '**', component: HomeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
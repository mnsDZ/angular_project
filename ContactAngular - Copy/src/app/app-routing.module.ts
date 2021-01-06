import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ContactsListComponent } from './contacts-list/contacts-list.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {path: 'list', component: ContactsListComponent},
  {path: 'details',component: DetailsComponent},
  {path: '', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

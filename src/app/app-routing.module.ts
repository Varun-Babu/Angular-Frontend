import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const routes: Routes = [
  {
    path:'add',
    component:AddPatientComponent
  },
  {
    path:'search',
    component:SearchPatientComponent
  },
  {
    path:'view',
    component:ViewPatientComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

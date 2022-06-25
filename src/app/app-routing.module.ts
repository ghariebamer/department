import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDepartmentComponent } from './Component/department/all-department/all-department.component';
import { AllEmpoyeeComponent } from './Component/Employee/all-employee/all-empoyee.component';



const routes: Routes = [
{path:"department",component:AllDepartmentComponent},
{path:"employee",component:AllEmpoyeeComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

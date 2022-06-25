import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { EditDepartmentComponent } from './Component/department/edit-department/edit-department.component';
import { AllDepartmentComponent } from './Component/department/all-department/all-department.component';
import { DepartmendetailsComponent } from './Component/department/departmendetails/departmendetails.component';
import { CreatedepartmentComponent } from './Component/department/createdepartment/createdepartment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AllEmpoyeeComponent } from './Component/Employee/all-employee/all-empoyee.component';
import { CreateEmployeeComponent } from './Component/Employee/create-employee/create-employee.component';
import { DetailsEmployeeComponent } from './Component/Employee/details-employee/details-employee.component';
import { EditEmployeeComponent } from './Component/Employee/edit-employee/edit-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EditDepartmentComponent,
    AllDepartmentComponent,
    DepartmendetailsComponent,
    CreatedepartmentComponent,
    AllEmpoyeeComponent,
    CreateEmployeeComponent,
    DetailsEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatSelectModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetserviceService } from 'src/app/Services/getservice.service';
import { AllEmpoyeeComponent } from '../all-employee/all-empoyee.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
data:[]=[];
form:FormGroup=new FormGroup({
Name:new FormControl(''),
Department:new FormControl(''),
DateOfJoining:new FormControl(''),
Salary:new FormControl(),
})
  constructor(private Matdialog:MatDialogRef<AllEmpoyeeComponent>,@Inject(MAT_DIALOG_DATA) data:any , private _service:GetserviceService) {
  }

  ngOnInit(): void {
  }


  onSubmit(){
    // console.log(this.form.value)
this._service.addEmployee(this.form.value).subscribe((res:any)=>{
  alert('Employee is add Successfully')
})
  }

  gotoAll(){
  this.Matdialog.close(AllEmpoyeeComponent);
  location.reload();
  }

}

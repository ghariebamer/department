import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetserviceService } from 'src/app/Services/getservice.service';
import { AllEmpoyeeComponent } from '../all-employee/all-empoyee.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
id:number;
employee:any[]=[];

form:FormGroup=new FormGroup({
  Name:new FormControl(''),
  Department:new FormControl(''),
  DateOfJoining:new FormControl(''),
  Salary:new FormControl(),
  Id:new FormControl()
})
  constructor(private Matdialog:MatDialogRef<AllEmpoyeeComponent>,@Inject(MAT_DIALOG_DATA) data:number , private _service:GetserviceService) {
    this.id=data;

  }

  ngOnInit(): void {
    this.getbyid(this.id);
  }

  getbyid(ID:number){
    this._service.getEmpByid(ID).subscribe((res:any)=>{
      //  console.log(res);
      this.employee=res;
      console.log(this.employee)
      this.form.get('Id')?.setValue(this.employee[0].id);

      this.form.get('Name')?.setValue(this.employee[0].name);
      this.form.get('Department')?.setValue(this.employee[0].department);
      this.form.get('DateOfJoining')?.setValue(this.employee[0].dateOfJoining);
      this.form.get('Salary')?.setValue(this.employee[0].salary);



    })
  }

  onSubmit(){

    this._service.updateEmp(this.form.value).subscribe((res:any)=>{
this.Matdialog.close()
location.reload()
    })

  }


}

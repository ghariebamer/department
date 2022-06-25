import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GetserviceService } from 'src/app/Services/getservice.service';
import { AllDepartmentComponent } from '../all-department/all-department.component';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
id:number;
departmentEdit:any;
  form:FormGroup=new FormGroup({
    ID: new FormControl(''),
    Name: new FormControl('')
  })
  constructor(private _service:GetserviceService ,private _Route:ActivatedRoute,private _Router:Router,
    private Matdialog:MatDialogRef<AllDepartmentComponent>,@Inject(MAT_DIALOG_DATA) data:any) {
      this.id=data.id;
     }

  ngOnInit(): void {

this.getDepartmentById();

  }
  onSubmit(){

   var id= this.form.get('ID')?.valueChanges;
   var name= this.form.get('Name')?.valueChanges;
this._service.EditDepartment(this.form.value).subscribe(res=>{
  console.log(res);

this.Matdialog.close();
location.reload();
})
  }

  getDepartmentById(){


  this._service.getDepartmentById(this.id).subscribe(data=>{
    //console.log(data)
    this.departmentEdit=data;

    this.form.get('ID')?.setValue(this.departmentEdit.id)
    this.form.get('Name')?.setValue(this.departmentEdit.name)

  })

  }

}

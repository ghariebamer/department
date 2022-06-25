import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetserviceService } from 'src/app/Services/getservice.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllDepartmentComponent } from '../all-department/all-department.component';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-departmendetails',
  templateUrl: './departmendetails.component.html',
  styleUrls: ['./departmendetails.component.css']
})
export class DepartmendetailsComponent implements OnInit {
  // @Input() id:any;
Id:any;
department:any;
  form:FormGroup=new FormGroup({
    Name: new FormControl(''),
    ID:new FormControl('')
  })
  constructor(private _Service:GetserviceService,private _Route:ActivatedRoute,private Router:Router,
    private Matdialog:MatDialogRef<AllDepartmentComponent>,@Inject(MAT_DIALOG_DATA) data:any) {
        this.Id=data.id;
    }

  ngOnInit(): void {
//   this._Route.params.subscribe(res=>{
// this.Id=res['id'];
// })
console.log(this.Id)
if (this.Id && this.Id !=null){
  this.getDepartbyid(this.Id);
}

  }

  getDepartbyid(Id:any){
this._Service.getDepartmentById(Id).subscribe(data=>{
  console.log('data is :',data);
  this.department=data;
  console.log(this.department)

  this.form.get('ID')?.setValue(this.Id)
  this.form.get('Name')?.setValue(this.department.name);
  this.form.disable();

  })
}
onSubmit(){
  // this.Router.navigateByUrl("department")
  this.Matdialog.close();
}

}

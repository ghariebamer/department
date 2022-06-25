import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetserviceService } from 'src/app/Services/getservice.service';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css']
})
export class CreatedepartmentComponent implements OnInit {

  form:FormGroup=new FormGroup({
    name: new FormControl('')
  })
  constructor(private _service:GetserviceService, private _Router:Router ,private MatREF:MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(){
this._service.createDepartment(this.form.value).subscribe(data=>{
  //console.log(data)})
  alert('your department is add successfully');
   })

}

gotoAll(){
  this.MatREF.closeAll();
  location.reload();


}

}

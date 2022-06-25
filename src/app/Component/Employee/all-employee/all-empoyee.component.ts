import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { GetserviceService } from 'src/app/Services/getservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'all-employee',
  templateUrl: './all-empoyee.component.html',
  styleUrls: ['./all-empoyee.component.css']
})
export class AllEmpoyeeComponent implements OnInit {
  dataSource:any[]=[];
  displayedColumns:string[]=['Id','Name','Department','DateOfjoining','Salary','options'];
  constructor(private _service:GetserviceService ,private _MatDialog:MatDialog ) { }

  ngOnInit(): void {
    this.getallEmployees();
  }

  getallEmployees(){
    this._service.allEmployees().subscribe((res:any)=>{
       console.log(res);
      this.dataSource=res;
    })

  }
  addEmployee(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
        'top': '100px',
        'left': '500px'
    };
    dialogConfig.data=this.dataSource;

    dialogConfig.width='500px';
    dialogConfig.height='500px';
this._MatDialog.open(CreateEmployeeComponent,dialogConfig)
  }

Edit(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
        'top': '100px',
        'left': '500px'
    };
    dialogConfig.data=id;

    dialogConfig.width='500px';
    dialogConfig.height='500px';
this._MatDialog.open(EditEmployeeComponent,dialogConfig)
  }

Delete(id:number){

  this._service.deleteEmp(id).subscribe((res:any)=>{
    alert("Deleting Employee successfully ");
    this.getallEmployees();
})
}



}

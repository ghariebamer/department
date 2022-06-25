import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExeclService } from 'src/app/Services/ExcelService';
import { GetserviceService } from 'src/app/Services/getservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatedepartmentComponent } from '../createdepartment/createdepartment.component';
import { DepartmendetailsComponent } from '../departmendetails/departmendetails.component';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';


@Component({
  selector: 'app-all-department',
  templateUrl: './all-department.component.html',
  styleUrls: ['./all-department.component.css']
})
export class AllDepartmentComponent implements OnInit {
Departments:any=[];
filterDepartment:any=[];
selectDepartment?:number;
Id:any;
searchTerm = '';
term='';
page: number = 1;
count: number = 0;
tableSize: number =7 ;
tableSizes: any = [5, 10, 25];
  constructor( private _GetserviceService:GetserviceService ,private _router:Router,private _ExeclService:ExeclService,
    private MatREF:MatDialog) { }

  ngOnInit(): void {
this._GetserviceService.getAllDepartment().subscribe(res=>{
this.Departments=res;
// this.count=this.Departments.length();
// console.log(this.count);
this.filterDepartment=Array.from(this.Departments);
console.log(this.filterDepartment)

})
  }

  deleteDepartment(id:number){

this._GetserviceService.DeleteDepartmentById(id).subscribe(data=>{
 console.log(data);
 this.Departments=this.Departments.filter((item:any)=>{return item.id!=id})
 alert("Are you shure to delete this department");

this._router.navigateByUrl('department');
})

  }

  AddDepartment(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
        'top': '100px',
        'left': '500px'
    };

    dialogConfig.width='300px';
    dialogConfig.height='300px';
    this.MatREF.open(CreatedepartmentComponent,dialogConfig);

  }
  getdetails(id:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
        'top': '100px',
        'left': '500px'
    };

    dialogConfig.width='500px';
    dialogConfig.height='500px';

    dialogConfig.data={id}

    this.MatREF.open(DepartmendetailsComponent,dialogConfig);    // console.log(this.Id)

  }
  Editdepartment(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
        'top': '100px',
        'left': '500px'
    };

    dialogConfig.width='500px';
    dialogConfig.height='500px';

    dialogConfig.data={id}

    this.MatREF.open(EditDepartmentComponent,dialogConfig);

  }


  ExportFile():void{
    this._ExeclService.exportExeclService(this.Departments,'department');
  }

  changedata(event:any){

    let value= event.target.value;
    console.log(value)
    if(value=="select your department"){
      this._GetserviceService.getAllDepartment().subscribe(res=>{
        this.Departments=res;})
    }else{
      this.Departments=this.Departments.filter((x:any)=> x.name==value);

    }




  }

  onTableDataChange(event: any) {
    this.page = event;

  this._GetserviceService.getAllDepartment();

  }



}

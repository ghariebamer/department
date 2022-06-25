import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetserviceService {
 Url:string="http://localhost:5241/api/Department";
 Url2:string="http://localhost:5241/api/Employee";
  constructor(private http:HttpClient) { }



  // service for department
  getAllDepartment(){
    return this.http.get(this.Url);
  }

  getDepartmentById(id:number){
    return this.http.get(this.Url + '/' + id);
  }
  DeleteDepartmentById(id:number){
    return this.http.delete(this.Url+'/'  + id);
  }
EditDepartment(department:any){
return this.http.put(this.Url,department)
}

createDepartment(department:any){
  return this.http.post(this.Url,department);

}


/////////////////////////////////////////////////
// services for employee

allEmployees(){

  return this.http.get(this.Url2+'/getallEmployee');
}

addEmployee(employee:object){
  return this.http.post(this.Url2+'/CreateEmployee',employee);
}

getEmpByid(id:number){
  return this.http.get(this.Url2+'/getEmployee/?id='+id);
}

updateEmp(employee:object){
  return this.http.put(this.Url2+'/UpdateEmployee',employee);

}

deleteEmp(id:number){
 return this.http.delete(this.Url2+'/DeleteEmp/?id='+id)
}






}



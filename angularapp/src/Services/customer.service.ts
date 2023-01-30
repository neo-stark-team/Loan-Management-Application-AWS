import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loanmodel } from 'src/app/loanmodel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
 
  private profile:string;
  private usersurl1:string;
  private usersUrl:string;
  constructor(private http: HttpClient) {
    this.profile='http://54.166.224.85:8080/getProfile';
    this.usersurl1='http://54.166.224.85:8080/editCus';
    this.usersUrl = 'http://54.166.224.85:8080/displaycustomer';

  }
  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/${id}`);
  }
  getProfile(id: string):Observable<any>{
     return this.http.get(`${this.profile}/${id}`);
  }
  editCustomer(id:number, value: any): Observable<Object>
  {
    return this.http.put(`${this.usersurl1}/${id}`,value);
  }
  
}

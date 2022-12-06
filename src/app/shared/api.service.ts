import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  apiUrl ="http://localhost:4400"

  getProfile():Observable<any>{
    return this.http.get(`${this.apiUrl}`)
  }
  getSingleProfile(id:any):Observable<any>{
    let Id = id
    return this.http.get(`${this.apiUrl}/${Id}`)
  }
  postProfile(name:string,age:number,place:string,profileImage:File):Observable<any>{
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('place', place);
    formData.append('profile', profileImage);

  // postProfile(data:any){
    return this.http.post(`${this.apiUrl}`,formData)
  }
  putProfile(name:string,age:number,place:string,profileImage:File,id:any):Observable<any>{
    let Id = id
    let formData : any = new FormData();
    formData.append('name',name)
    formData.append('age',age)
    formData.append('place',place)
    formData.append('profile',profileImage)
    return this.http.post(`${this.apiUrl}/${Id}`,formData)
  }
  deleteProfile(id:any):Observable<any>{
    let Id=id
    return this.http.delete(`${this.apiUrl}/${Id}`)
  }
}

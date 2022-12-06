import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm!:FormGroup
  images:any

  constructor(private fb:FormBuilder,
              private apiService : ApiService,
              private router:Router
              ) { }

  ngOnInit(): void {

    this.createForm=this.fb.group({
      name:[''],
      age:[''],
      place:[''],
      profile:['']
    })
  }

  selectImage(e:any){
    const file = e.target.files[0];
    this.createForm.patchValue({
      profile: file
    });
    // this.createForm.get['profile'].updateValueAndValidity();
  }


  onCreate(){
    // console.log(this.createForm.value)
    
    this.apiService.postProfile(this.createForm.value.name,this.createForm.value.age,this.createForm.value.place,this.createForm.value.profile).subscribe((data)=>{
      // console.log(data)
      alert("profile added successfully")
      this.router.navigate(['/'])
    })
  }
}




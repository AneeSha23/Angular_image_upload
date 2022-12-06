import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm!:FormGroup
  paramsId:any
  constructor(private fb:FormBuilder,
              private apiService:ApiService,
              private activatedroute:ActivatedRoute,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.paramsId=this.activatedroute.snapshot.params['id']
    this.apiService.getSingleProfile(this.paramsId).subscribe((data)=>{
      // console.log(data)
      this.editForm.patchValue({
        name:data[0].name,
        age:data[0].age,
        place:data[0].place,
        profile:data[0].profile
      })
    })


    this.editForm=this.fb.group({
      name:[''],
      age:[''],
      place:[''],
      profile:['']
    })
  }

  selectImage(e:any){
    const file = e.target.files[0];
    this.editForm.patchValue({
      profile: file
    });
  }


onUpdate(){
  // console.log(this.editForm.value)
  this.apiService
    .putProfile(this.editForm.value.name,this.editForm.value.age,this.editForm.value.place,this.editForm.value.profile,this.paramsId)
    .subscribe(()=>{
      console.log("Data Updated successfulyy")
      this.router.navigate(['/'])
    })
}


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-singlelist',
  templateUrl: './singlelist.component.html',
  styleUrls: ['./singlelist.component.css']
})
export class SinglelistComponent implements OnInit {
paramId:any
singleProfile:any
  constructor(private apiService:ApiService,
              private actiavtedroute:ActivatedRoute,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.paramId=this.actiavtedroute.snapshot.params['id']
  //  console.log(this.paramId)
   this.listOneProfile()
  }


   

  listOneProfile(){
    this.apiService.getSingleProfile(this.paramId).subscribe((data)=>{
      // console.log(data)
      this.singleProfile=data
    })
  }


  // delete
  removeProfile(){
    this.apiService.deleteProfile(this.paramId).subscribe((data)=>{
      console.log("profile deleted")
      alert("Profile deleted")
      this.router.navigate(['/'])
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  allProfiles:any
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.listProfile()
  }

  listProfile(){
    this.apiService.getProfile().subscribe((data)=>{
      // console.log(data)
      this.allProfiles=data
    })
  }

}

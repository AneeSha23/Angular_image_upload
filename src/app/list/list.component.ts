import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import Aos from "aos";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  allProfiles: any
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.listProfile()
    Aos.init();
  }

  listProfile() {
    this.apiService.getProfile().subscribe((data) => {
      // console.log(data)
      this.allProfiles = data
    })
  }

}
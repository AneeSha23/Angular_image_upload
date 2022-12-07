import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Aos from 'aos';
import Swal from 'sweetalert2';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-singlelist',
  templateUrl: './singlelist.component.html',
  styleUrls: ['./singlelist.component.css']
})
export class SinglelistComponent implements OnInit {
  paramId: any
  singleProfile: any
  constructor(private apiService: ApiService,
    private actiavtedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramId = this.actiavtedroute.snapshot.params['id']
    //  console.log(this.paramId)
    this.listOneProfile()

    Aos.init()
  }




  listOneProfile() {
    this.apiService.getSingleProfile(this.paramId).subscribe((data) => {
      // console.log(data)
      this.singleProfile = data
    })
  }


  // delete
  removeProfile() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ms-3 ',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.apiService.deleteProfile(this.paramId).subscribe(() => {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(() => {
            this.router.navigate(['/'])
          })

        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your  file is safe :)',
          'error'
        )
      }
    })






  }
}

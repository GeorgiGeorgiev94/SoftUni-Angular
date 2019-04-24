import { Component, OnInit } from '@angular/core';
import { Dog } from '../../../models/dog';
import { Observable } from 'rxjs';
import { DogService } from '../../../services/dog.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dogs$:Observable<Dog>
  isAdmin;
  isLoggedIn;
  
  constructor(
    private dogService:DogService,
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dogService.getDog(id).subscribe(data=>{
      this.dogs$=data['dog']
    })
  }
  deleteDog(id){
    this.dogService.deleteDog(id).subscribe(() => {
      this.router.navigate(['./dog/list']);
    })
  }

  ngDoCheck(){
    this.isLoggedIn=this.authService.isAuthenticated();
    this.isAdmin=this.authService.isAdmin();
  }

}

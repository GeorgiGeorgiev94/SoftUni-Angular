import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../../models/dog';
import { DogService } from '../../services/dog.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dogs$:Observable<Array<Dog>>
  isAdmin;
  isLoggedIn;

  constructor(private dogService:DogService, private authService:AuthService) { }

  ngOnInit() {
    this.dogService.getAllDogs().subscribe(data=>{
      this.dogs$=data['dog']
    })
  }
  ngDoCheck(){
    this.isLoggedIn=this.authService.isAuthenticated();
    this.isAdmin=this.authService.isAdmin();
  }


}

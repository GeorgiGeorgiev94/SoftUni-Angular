import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Dog } from '../../models/dog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin;
  isLoggedIn;
  dogs$:Observable<Array<Dog>>
  
  constructor(private dogService:DogService, public authService:AuthService) { }

  ngOnInit() {
    this.dogService.getAllDogs().subscribe(data=>{
      this.dogs$= data['dog']
    });
  }
  ngDoCheck(){
    this.isLoggedIn=this.authService.isAuthenticated();
    this.isAdmin=this.authService.isAdmin();
  }

}

import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements DoCheck {
  username : string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.authService.logout();
    this.toastr.success('Logout success!')
    this.router.navigate([ '/' ]);
  }

}



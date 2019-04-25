import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../models/order';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders$:Observable<Array<Order>>
  username;

  constructor(
    private orderService:OrderService,
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    let id = localStorage.getItem('userId');
    this.orderService.getAllOrder().subscribe(data=>{
      this.orders$= data['order'].filter(f => f.creator === id)
      console.log(data);
    });
  }
  }



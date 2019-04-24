import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../../../models/dog';
import { FormBuilder, Validators } from '@angular/forms';
import { DogService } from '../../../services/dog.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  form
  dogs$:Observable<Dog>
  quantities;
  
  constructor(
    private fb: FormBuilder,
    private dogService:DogService,
    private orderService:OrderService,
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      quantity: ['', [Validators.required, Validators.min(1)]],
    })
    let id = this.route.snapshot.params['id'];
    this.dogService.getDog(id).subscribe(data=>{
      this.dogs$=data['dog']
    })
  }
  purchase(){
    const data = {
      creator: localStorage.getItem('userId'),
      date: Date.now,
      product: this.dogs$['title'],
      quantity: this.form.controls.quantity.value,
      price: this.dogs$['price'],
      finalPrice: this.dogs$['price'] * this.form.controls.quantity.value,
  }
    this.orderService.createOrder(data).subscribe((data)=>{
      this.router.navigate(['../order'])
    })
  }

  get f(){
    return this.form.controls
  }

}

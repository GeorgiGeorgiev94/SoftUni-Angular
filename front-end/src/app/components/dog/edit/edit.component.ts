import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/models/dog';
import { FormBuilder, Validators } from '@angular/forms';
import { DogService } from 'src/app/services/dog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  age: string;
  form;
  dogs$: Observable<Array<Dog>>
  id = this.route.snapshot.params['id'];

  constructor(
    private fb: FormBuilder, 
    private dogService: DogService, 
    private router: Router, 
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.getProduct();
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      breed: ['', [Validators.required, Validators.minLength(4)]],
      imageUrl: ['', [Validators.required]],
      dogAge: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(15)]],
      size: ['', [Validators.required, Validators.min(0.1)]],
      price: ['', [Validators.required, Validators.min(0.1)]],

    })
  }
  getProduct() {
    this.dogService.getDog(this.id).subscribe(data=>{
      this.dogs$=data['dog'];
      this.form.setValue({
        name: this.dogs$["name"],
        breed: this.dogs$["breed"],
        imageUrl: this.dogs$["imageUrl"],
        dogAge: this.dogs$["dogAge"],
        description: this.dogs$["description"],
        size: this.dogs$["size"],
        price: this.dogs$["price"],

      })
    })
}
editDog(){
  this.dogService.editDog(this.form.value, this.id).subscribe((data) => {
    this.router.navigate(['./dog/list'])
    console.log(this.form.value);
  })
}

get f(){
  return this.form.controls
}
}

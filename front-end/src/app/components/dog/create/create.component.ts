import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DogService } from '../../../services/dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    createForm: FormGroup;

  constructor(private fb:FormBuilder,private dogService:DogService,private router:Router) { }

  ngOnInit() {
    this.createForm=this.fb.group({
      name:[null,[Validators.required]],
      imageUrl:[null,[Validators.required]],
      breed:[null,[Validators.required]],
      dogAge:[null,[Validators.required]],
      description:[null,[Validators.required]],
      size:[null,[Validators.required]],
      price: ['', [Validators.required, Validators.min(0.1)]],

    })
  }
  createDog(){
    console.log(this.createForm.value);
    this.dogService.createDog(this.createForm.value).subscribe((data)=>{
      this.router.navigate(['./dog/list'])
    })
  }
  
  get f(){
    return this.createForm.controls
  }

  get invalid(){
    return this.createForm.invalid
  }
}

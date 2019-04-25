import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DogRoutingModule } from './dog-routing.module';
import { ListComponent } from '../list/list.component';
import { MaterialModule } from '../../material.module';
import { DetailsComponent } from './details/details.component';
import { BuyComponent } from './buy/buy.component';
import { EditComponent } from './edit/edit.component';

 @NgModule({
    declarations: [
      CreateComponent, 
      ListComponent, DetailsComponent, BuyComponent, EditComponent,

    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MaterialModule,
      DogRoutingModule
    ],
    exports:[
      CreateComponent, 
      ListComponent
      
    ],
    providers: [
      
    ]
  })
  export class DogModule { }
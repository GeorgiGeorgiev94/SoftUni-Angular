import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { CreateComponent } from './create/create.component';
import { RoleGuard } from '../../guards/role.guard';
import { ListComponent } from '../list/list.component';
import { DetailsComponent } from './details/details.component';
import { BuyComponent } from './buy/buy.component';
import {AuthGuard} from '../../guards/auth.guard';
import { EditComponent } from './edit/edit.component';


const dogRoutes:Route[]=[
      { path: 'create', component: CreateComponent,canActivate: [RoleGuard]},
      { path: 'list', component: ListComponent,canActivate: [RoleGuard] },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'purchase/:id', component: BuyComponent,canActivate: [AuthGuard]},
      { path: 'edit/:id', component: EditComponent,canActivate: [RoleGuard] },


]

@NgModule({
    imports:[
        RouterModule.forChild(dogRoutes)
    ],
    exports:[
        RouterModule,
        
    ],
    providers: [
        RoleGuard,
      ]
})

export class DogRoutingModule{}
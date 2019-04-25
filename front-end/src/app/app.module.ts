import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptorService } from './interceptors/token.interceptor';
import { ResponseHandlerInterceptorService } from './interceptors/responseHandler.interceptor';
import { CreateComponent } from './components/dog/create/create.component';
import { DogModule } from './components/dog/dog.module';
import { ListComponent } from './components/list/list.component';
import { UserModule } from './components/user/user.module';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
  ],
  providers: [
    AuthService,
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:JwtInterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:ResponseHandlerInterceptorService, 
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
